try {
  self["workbox:core:7.0.0"] && _();
} catch (e) {
}
const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};
const messageGenerator = fallback;
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = messageGenerator(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
}
const getFriendlyURL = (url) => {
  const urlObj = new URL(String(url), location.href);
  return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
};
const logger = null;
try {
  self["workbox:cacheable-response:7.0.0"] && _();
} catch (e) {
}
class CacheableResponse {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config = {}) {
    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(response) {
    let cacheable = true;
    if (this._statuses) {
      cacheable = this._statuses.includes(response.status);
    }
    if (this._headers && cacheable) {
      cacheable = Object.keys(this._headers).some((headerName) => {
        return response.headers.get(headerName) === this._headers[headerName];
      });
    }
    return cacheable;
  }
}
class CacheableResponsePlugin {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config) {
    this.cacheWillUpdate = async ({ response }) => {
      if (this._cacheableResponse.isResponseCacheable(response)) {
        return response;
      }
      return null;
    };
    this._cacheableResponse = new CacheableResponse(config);
  }
}
function dontWaitFor(promise) {
  void promise.then(() => {
  });
}
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event
    ));
  }
  return wrap(request).then(() => void 0);
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
try {
  self["workbox:expiration:7.0.0"] && _();
} catch (e) {
}
const DB_NAME = "workbox-expiration";
const CACHE_OBJECT_STORE = "cache-entries";
const normalizeURL = (unNormalizedUrl) => {
  const url = new URL(unNormalizedUrl, location.href);
  url.hash = "";
  return url.href;
};
class CacheTimestampsModel {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._db = null;
    this._cacheName = cacheName;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(db) {
    const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
    objStore.createIndex("cacheName", "cacheName", { unique: false });
    objStore.createIndex("timestamp", "timestamp", { unique: false });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(db) {
    this._upgradeDb(db);
    if (this._cacheName) {
      void deleteDB(this._cacheName);
    }
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);
    const entry = {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url)
    };
    const db = await this.getDb();
    const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
      durability: "relaxed"
    });
    await tx.store.put(entry);
    await tx.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(url) {
    const db = await this.getDb();
    const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
    return entry === null || entry === void 0 ? void 0 : entry.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const db = await this.getDb();
    let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
    const entriesToDelete = [];
    let entriesNotDeletedCount = 0;
    while (cursor) {
      const result = cursor.value;
      if (result.cacheName === this._cacheName) {
        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
          entriesToDelete.push(cursor.value);
        } else {
          entriesNotDeletedCount++;
        }
      }
      cursor = await cursor.continue();
    }
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await db.delete(CACHE_OBJECT_STORE, entry.id);
      urlsDeleted.push(entry.url);
    }
    return urlsDeleted;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    return this._cacheName + "|" + normalizeURL(url);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await openDB(DB_NAME, 1, {
        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
      });
    }
    return this._db;
  }
}
class CacheExpiration {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(cacheName, config = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
    const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
    const cache = await self.caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url, this._matchOptions);
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      dontWaitFor(this.expireEntries());
    }
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    await this._timestampModel.setTimestamp(url, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (!this._maxAgeSeconds) {
      return false;
    } else {
      const timestamp = await this._timestampModel.getTimestamp(url);
      const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
      return timestamp !== void 0 ? timestamp < expireOlderThan : true;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity);
  }
}
const _cacheNameDetails = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration !== "undefined" ? registration.scope : ""
};
const _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
};
const eachCacheNameDetail = (fn) => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
const cacheNames = {
  updateDetails: (details) => {
    eachCacheNameDetail((key) => {
      if (typeof details[key] === "string") {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};
const quotaErrorCallbacks = /* @__PURE__ */ new Set();
function registerQuotaErrorCallback(callback) {
  quotaErrorCallbacks.add(callback);
}
class ExpirationPlugin {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
      if (!cachedResponse) {
        return null;
      }
      const isFresh = this._isResponseDateFresh(cachedResponse);
      const cacheExpiration = this._getCacheExpiration(cacheName);
      dontWaitFor(cacheExpiration.expireEntries());
      const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
      if (event) {
        try {
          event.waitUntil(updateTimestampDone);
        } catch (error) {
        }
      }
      return isFresh ? cachedResponse : null;
    };
    this.cacheDidUpdate = async ({ cacheName, request }) => {
      const cacheExpiration = this._getCacheExpiration(cacheName);
      await cacheExpiration.updateTimestamp(request.url);
      await cacheExpiration.expireEntries();
    };
    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = /* @__PURE__ */ new Map();
    if (config.purgeOnQuotaError) {
      registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === cacheNames.getRuntimeName()) {
      throw new WorkboxError("expire-custom-caches-only");
    }
    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new CacheExpiration(cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      return true;
    }
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      return true;
    }
    const now = Date.now();
    return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has("date")) {
      return null;
    }
    const dateHeader = cachedResponse.headers.get("date");
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();
    if (isNaN(headerTime)) {
      return null;
    }
    return headerTime;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await self.caches.delete(cacheName);
      await cacheExpiration.delete();
    }
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch (e) {
}
const REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (typeof entry === "string") {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const { revision, url } = entry;
  if (!url) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
class PrecacheInstallReportPlugin {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({ request, state }) => {
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
      if (event.type === "install") {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
}
class PrecacheCacheKeyPlugin {
  constructor({ precacheController: precacheController2 }) {
    this.cacheKeyWillBeUsed = async ({ request, params }) => {
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
    };
    this._precacheController = precacheController2;
  }
}
let supportStatus;
function canConstructResponseFromBodyStream() {
  if (supportStatus === void 0) {
    const testResponse = new Response("");
    if ("body" in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}
async function copyResponse(response, modifier) {
  let origin = null;
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new WorkboxError("cross-origin-copy-response", { origin });
  }
  const clonedResponse = response.clone();
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  const modifiedResponseInit = responseInit;
  const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}
function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
async function executeQuotaErrorCallbacks() {
  for (const callback of quotaErrorCallbacks) {
    await callback();
  }
}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch (e) {
}
function toRequest(input) {
  return typeof input === "string" ? new Request(input) : input;
}
class StrategyHandler {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = [];
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const { event } = this;
    let request = toRequest(input);
    if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        return possiblePreloadResponse;
      }
    }
    const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks("requestWillFetch")) {
        request = await cb({ request: request.clone(), event });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownErrorMessage: err.message
        });
      }
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      if (false) ;
      for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (originalRequest) {
        await this.runCallbacks("fetchDidFail", {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const { cacheName, matchOptions } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, "read");
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
      cachedResponse = await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      }) || void 0;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    await timeout(0);
    const effectiveRequest = await this.getCacheKey(request, "write");
    if (!response) {
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      return false;
    }
    const { cacheName, matchOptions } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
    const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      cache,
      effectiveRequest.clone(),
      ["__WB_REVISION__"],
      matchOptions
    ) : null;
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      }
      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === "function") {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = (param) => {
          const statefulParam = Object.assign(Object.assign({}, param), { state });
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
      responseToCache = await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      }) || void 0;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = void 0;
      }
    }
    return responseToCache;
  }
}
class Strategy {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    this.plugins = options.plugins || [];
    this.fetchOptions = options.fetchOptions;
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === "string" ? new Request(options.request) : options.request;
    const params = "params" in options ? options.params : void 0;
    const handler = new StrategyHandler(this, { event, request, params });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks("handlerWillStart", { event, request });
    let response = void 0;
    try {
      response = await this._handle(request, handler);
      if (!response || response.type === "error") {
        throw new WorkboxError("no-response", { url: request.url });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({ error, event, request });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      }
    }
    for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
      response = await callback({ event, request, response });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error2) {
    }
    try {
      await handler.runCallbacks("handlerDidRespond", {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks("handlerDidComplete", {
      event,
      request,
      response,
      error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
}
class PrecacheStrategy extends Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    if (handler.event && handler.event.type === "install") {
      return await this._handleInstall(request, handler);
    }
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    if (this._fallbackToNetwork) {
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
      }));
      if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        await handler.cachePut(request, response.clone());
      }
    } else {
      throw new WorkboxError("missing-precache-entry", {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      throw new WorkboxError("bad-precaching-response", {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      this.plugins.splice(defaultPluginIndex, 1);
    }
  }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response }) {
    return response.redirected ? await copyResponse(response) : response;
  }
};
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map();
    this._urlsToCacheModes = /* @__PURE__ */ new Map();
    this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [
        ...plugins,
        new PrecacheCacheKeyPlugin({ precacheController: this })
      ],
      fallbackToNetwork
    });
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries2) {
    this.addToCacheList(entries2);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener("install", this.install);
      self.addEventListener("activate", this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries2) {
    const urlsToWarnAbout = [];
    for (const entry of entries2) {
      if (typeof entry === "string") {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === void 0) {
        urlsToWarnAbout.push(entry.url);
      }
      const { cacheKey, url } = createCacheKey(entry);
      const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new WorkboxError("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== "string" && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        {
          console.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    return waitUntil(event, async () => {
      const installReportPlugin = new PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey },
          request,
          event
        }));
      }
      const { updatedURLs, notUpdatedURLs } = installReportPlugin;
      return { updatedURLs, notUpdatedURLs };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    return waitUntil(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      return { deletedURLs };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return void 0;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new WorkboxError("non-precached-url", { url });
    }
    return (options) => {
      options.request = new Request(url);
      options.params = Object.assign({ cacheKey }, options.params);
      return this.strategy.handle(options);
    };
  }
}
let precacheController;
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }
  return precacheController;
};
try {
  self["workbox:routing:7.0.0"] && _();
} catch (e) {
}
const defaultMethod = "GET";
const normalizeHandler = (handler) => {
  if (handler && typeof handler === "object") {
    return handler;
  } else {
    return { handle: handler };
  }
};
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = defaultMethod) {
    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = normalizeHandler(handler);
  }
}
class RegExpRoute extends Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    const match = ({ url }) => {
      const result = regExp.exec(url.href);
      if (!result) {
        return;
      }
      if (url.origin !== location.origin && result.index !== 0) {
        return;
      }
      return result.slice(1);
    };
    super(match, handler, method);
  }
}
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map();
    this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (event) => {
      const { request } = event;
      const responsePromise = this.handleRequest({ request, event });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_URLS") {
        const { payload } = event.data;
        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === "string") {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({ request, event });
        }));
        event.waitUntil(requestPromises);
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request, event }) {
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith("http")) {
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const { params, route } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      return;
    }
    let responsePromise;
    try {
      responsePromise = handler.handle({ url, request, event, params });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async (err) => {
        if (catchHandler) {
          try {
            return await catchHandler.handle({ url, request, event, params });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          return this._catchHandler.handle({ url, request, event });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url, sameOrigin, request, event }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      const matchResult = route.match({ url, sameOrigin, request, event });
      if (matchResult) {
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          params = void 0;
        } else if (matchResult.constructor === Object && // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          params = void 0;
        } else if (typeof matchResult === "boolean") {
          params = void 0;
        }
        return { route, params };
      }
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = defaultMethod) {
    this._defaultHandlerMap.set(method, normalizeHandler(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = normalizeHandler(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new WorkboxError("unregister-route-but-not-found-with-method", {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new WorkboxError("unregister-route-route-not-registered");
    }
  }
}
let defaultRouter;
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new Router();
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === "string") {
    const captureUrl = new URL(capture, location.href);
    const matchCallback = ({ url }) => {
      return url.href === captureUrl.href;
    };
    route = new Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === "function") {
    route = new Route(capture, handler, method);
  } else if (capture instanceof Route) {
    route = capture;
  } else {
    throw new WorkboxError("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  }
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.registerRoute(route);
  return route;
}
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }
  return urlObject;
}
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
  const urlObject = new URL(url, location.href);
  urlObject.hash = "";
  yield urlObject.href;
  const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;
  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
    const directoryURL = new URL(urlWithoutIgnoredParams.href);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }
  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams.href);
    cleanURL.pathname += ".html";
    yield cleanURL.href;
  }
  if (urlManipulation) {
    const additionalURLs = urlManipulation({ url: urlObject });
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}
class PrecacheRoute extends Route {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(precacheController2, options) {
    const match = ({ request }) => {
      const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
      for (const possibleURL of generateURLVariations(request.url, options)) {
        const cacheKey = urlsToCacheKeys.get(possibleURL);
        if (cacheKey) {
          const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
          return { cacheKey, integrity };
        }
      }
      return;
    };
    super(match, precacheController2.strategy);
  }
}
function addRoute(options) {
  const precacheController2 = getOrCreatePrecacheController();
  const precacheRoute = new PrecacheRoute(precacheController2, options);
  registerRoute(precacheRoute);
}
const SUBSTRING_TO_FIND = "-precache-";
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
  const cacheNames2 = await self.caches.keys();
  const cacheNamesToDelete = cacheNames2.filter((cacheName) => {
    return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
  });
  await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
  return cacheNamesToDelete;
};
function cleanupOutdatedCaches() {
  self.addEventListener("activate", (event) => {
    const cacheName = cacheNames.getPrecacheName();
    event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
    }));
  });
}
function createHandlerBoundToURL(url) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.createHandlerBoundToURL(url);
}
function precache(entries2) {
  const precacheController2 = getOrCreatePrecacheController();
  precacheController2.precache(entries2);
}
function precacheAndRoute(entries2, options) {
  precache(entries2);
  addRoute(options);
}
class NavigationRoute extends Route {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(handler, { allowlist: allowlist2 = [/./], denylist = [] } = {}) {
    super((options) => this._match(options), handler);
    this._allowlist = allowlist2;
    this._denylist = denylist;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url, request }) {
    if (request && request.mode !== "navigate") {
      return false;
    }
    const pathnameAndSearch = url.pathname + url.search;
    for (const regExp of this._denylist) {
      if (regExp.test(pathnameAndSearch)) {
        return false;
      }
    }
    if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
      return true;
    }
    return false;
  }
}
const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};
class NetworkFirst extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise;
    })());
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request, logs, handler }) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId, request, logs, handler }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
    }
    return response;
  }
}
class NetworkOnly extends Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    let error = void 0;
    let response;
    try {
      const promises = [
        handler.fetch(request)
      ];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
class StaleWhileRevalidate extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
    });
    void handler.waitUntil(fetchAndCachePromise);
    let response = await handler.cacheMatch(request);
    let error;
    if (response) ;
    else {
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
const entries = [{"revision":"d36629780738ecfe2f828b414ad40b6f","url":"404.html"},{"revision":"08761d8dd83e380f1611d59558d163db","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.C2VvZ_vY.js"},{"revision":null,"url":"assets/add-ons.md.C2VvZ_vY.lean.js"},{"revision":null,"url":"assets/app.4UTiLlvs.js"},{"revision":null,"url":"assets/chunks/@localSearchIndexroot.CdZ0FLQX.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.CHSHN6cg.js"},{"revision":null,"url":"assets/chunks/CodeToggle.vue_vue_type_style_index_0_lang.B3c8Mb5c.js"},{"revision":null,"url":"assets/chunks/commonjsHelpers.CqkleIqs.js"},{"revision":null,"url":"assets/chunks/Contributors.vue_vue_type_script_setup_true_lang.B8jVnZR_.js"},{"revision":null,"url":"assets/chunks/CourseLink.vue_vue_type_script_setup_true_lang.DpG-ubEe.js"},{"revision":null,"url":"assets/chunks/demo.client.CxZa4eER.js"},{"revision":null,"url":"assets/chunks/demo.client.DB_9W120.js"},{"revision":null,"url":"assets/chunks/demo.client.DUdYkO46.js"},{"revision":null,"url":"assets/chunks/demo.client.SGu0cErm.js"},{"revision":null,"url":"assets/chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BkeYkUcx.js"},{"revision":null,"url":"assets/chunks/filters.ezySvwpH.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BzVrJ79b.js"},{"revision":null,"url":"assets/chunks/fuse.Ch1WBRTM.js"},{"revision":null,"url":"assets/chunks/general.CGRH32nb.js"},{"revision":null,"url":"assets/chunks/index.0YcKBDs6.js"},{"revision":null,"url":"assets/chunks/index.3B-5zBzP.js"},{"revision":null,"url":"assets/chunks/index.6vMKqKTP.js"},{"revision":null,"url":"assets/chunks/index.9-5eNKuH.js"},{"revision":null,"url":"assets/chunks/index.abvlcPjD.js"},{"revision":null,"url":"assets/chunks/index.B31U35-L.js"},{"revision":null,"url":"assets/chunks/index.BA6NkGku.js"},{"revision":null,"url":"assets/chunks/index.BAZQrcDO.js"},{"revision":null,"url":"assets/chunks/index.BdVQyFUY.js"},{"revision":null,"url":"assets/chunks/index.BFIwo0jQ.js"},{"revision":null,"url":"assets/chunks/index.BfyHVUsx.js"},{"revision":null,"url":"assets/chunks/index.BhCOS_4m.js"},{"revision":null,"url":"assets/chunks/index.BjUyVBkB.js"},{"revision":null,"url":"assets/chunks/index.BjwlhmCq.js"},{"revision":null,"url":"assets/chunks/index.BkWZbO_S.js"},{"revision":null,"url":"assets/chunks/index.BOm4MuH4.js"},{"revision":null,"url":"assets/chunks/index.BQxm43sS.js"},{"revision":null,"url":"assets/chunks/index.Bssx1YLx.js"},{"revision":null,"url":"assets/chunks/index.BSv26OF4.js"},{"revision":null,"url":"assets/chunks/index.BuiJtdTB.js"},{"revision":null,"url":"assets/chunks/index.Bw4lWt2B.js"},{"revision":null,"url":"assets/chunks/index.BXnqIn8t.js"},{"revision":null,"url":"assets/chunks/index.ByAFuTXW.js"},{"revision":null,"url":"assets/chunks/index.Byd-ng9L.js"},{"revision":null,"url":"assets/chunks/index.BYefJslz.js"},{"revision":null,"url":"assets/chunks/index.BYqRhtZG.js"},{"revision":null,"url":"assets/chunks/index.BZrftsYZ.js"},{"revision":null,"url":"assets/chunks/index.C-l5AVhu.js"},{"revision":null,"url":"assets/chunks/index.C14WuuWX.js"},{"revision":null,"url":"assets/chunks/index.C6g73KP7.js"},{"revision":null,"url":"assets/chunks/index.CCobgVfS.js"},{"revision":null,"url":"assets/chunks/index.Cczb-oEU.js"},{"revision":null,"url":"assets/chunks/index.CebGuQ7U.js"},{"revision":null,"url":"assets/chunks/index.CECeAqpN.js"},{"revision":null,"url":"assets/chunks/index.CfljJtWg.js"},{"revision":null,"url":"assets/chunks/index.CGNQzfH7.js"},{"revision":null,"url":"assets/chunks/index.Ch6afnKO.js"},{"revision":null,"url":"assets/chunks/index.CmJdE2GM.js"},{"revision":null,"url":"assets/chunks/index.CP_xmG0V.js"},{"revision":null,"url":"assets/chunks/index.CqZpIHNX.js"},{"revision":null,"url":"assets/chunks/index.CsLiCxwU.js"},{"revision":null,"url":"assets/chunks/index.CSvvtFrh.js"},{"revision":null,"url":"assets/chunks/index.Cy68c00S.js"},{"revision":null,"url":"assets/chunks/index.D0K2hUbM.js"},{"revision":null,"url":"assets/chunks/index.D5dLA4eG.js"},{"revision":null,"url":"assets/chunks/index.D6wpwUS1.js"},{"revision":null,"url":"assets/chunks/index.DHr9lByg.js"},{"revision":null,"url":"assets/chunks/index.DHYmB9wz.js"},{"revision":null,"url":"assets/chunks/index.diJVGuz8.js"},{"revision":null,"url":"assets/chunks/index.DjDMINe6.js"},{"revision":null,"url":"assets/chunks/index.DjrGrsga.js"},{"revision":null,"url":"assets/chunks/index.DlT3qYDI.js"},{"revision":null,"url":"assets/chunks/index.DqFl5Lf7.js"},{"revision":null,"url":"assets/chunks/index.DxWOKC6U.js"},{"revision":null,"url":"assets/chunks/index.Dy7qy5hx.js"},{"revision":null,"url":"assets/chunks/index.fDZbKUMv.js"},{"revision":null,"url":"assets/chunks/index.iSqOUNwg.js"},{"revision":null,"url":"assets/chunks/index.lPTAHYEG.js"},{"revision":null,"url":"assets/chunks/index.nlyAJW3c.js"},{"revision":null,"url":"assets/chunks/index.QQrHIItM.js"},{"revision":null,"url":"assets/chunks/index.qqu5HJCP.js"},{"revision":null,"url":"assets/chunks/index.yEKQB9lf.js"},{"revision":null,"url":"assets/chunks/index.zaQPPsS1.js"},{"revision":null,"url":"assets/chunks/index.zbKWFAXV.js"},{"revision":null,"url":"assets/chunks/Key.vue_vue_type_script_setup_true_lang.0B-y9333.js"},{"revision":null,"url":"assets/chunks/metadata.cjIdxPo6.js"},{"revision":null,"url":"assets/chunks/Note.CtGBxwBO.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.DlAUqK2U.js"},{"revision":null,"url":"assets/chunks/preload-helper.ckwbz45p.js"},{"revision":null,"url":"assets/chunks/resolve-element.CjOR-mWi.js"},{"revision":null,"url":"assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.DI2Ki4Uf.js"},{"revision":null,"url":"assets/chunks/utils.2GfeaZu8.js"},{"revision":null,"url":"assets/chunks/utils.B5e_uQLX.js"},{"revision":null,"url":"assets/chunks/VPLocalSearchBox.ZOSo4obw.js"},{"revision":null,"url":"assets/chunks/vue.COzvRtV3.js"},{"revision":null,"url":"assets/components_README.md.CjuNOiWg.js"},{"revision":null,"url":"assets/components_README.md.CjuNOiWg.lean.js"},{"revision":null,"url":"assets/contributing.md.NDZo5j74.js"},{"revision":null,"url":"assets/contributing.md.NDZo5j74.lean.js"},{"revision":null,"url":"assets/core__template_index.md.7uo23YWN.js"},{"revision":null,"url":"assets/core__template_index.md.7uo23YWN.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.mVxYp1hO.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.mVxYp1hO.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.C_Kuy8P6.js"},{"revision":null,"url":"assets/core_computedInject_index.md.C_Kuy8P6.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CIUw4PAF.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CIUw4PAF.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.FW_33T6z.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.FW_33T6z.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.BmXlXRO8.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.BmXlXRO8.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BgRPB2DR.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BgRPB2DR.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.BNO9mBwL.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.BNO9mBwL.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.DejwbHaP.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.DejwbHaP.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.CRl3fdo1.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.CRl3fdo1.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.b4OlDnDj.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.b4OlDnDj.lean.js"},{"revision":null,"url":"assets/core_README.md.DoHCnpCc.js"},{"revision":null,"url":"assets/core_README.md.DoHCnpCc.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.DMackkpo.js"},{"revision":null,"url":"assets/core_templateRef_index.md.DMackkpo.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.Clnt3gOm.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.Clnt3gOm.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.Dl8v2rAo.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.Dl8v2rAo.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.Be0-tdmE.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.Be0-tdmE.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.Ds_FHxhB.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.Ds_FHxhB.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.COxXhPf7.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.COxXhPf7.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.BD7esOyB.js"},{"revision":null,"url":"assets/core_useBase64_index.md.BD7esOyB.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.gsVmLqdC.js"},{"revision":null,"url":"assets/core_useBattery_index.md.gsVmLqdC.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.Dk1gqc7G.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.Dk1gqc7G.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DOEZsakf.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DOEZsakf.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.BD45Hb65.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.BD45Hb65.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.BCw6CM7N.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.BCw6CM7N.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.B99byEoX.js"},{"revision":null,"url":"assets/core_useCached_index.md.B99byEoX.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.S9wXfV1Q.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.S9wXfV1Q.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.BQf7ADeW.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.BQf7ADeW.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CAwpkyDf.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CAwpkyDf.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.Ctx5t95U.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.Ctx5t95U.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.Dojl8XKi.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.Dojl8XKi.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.Cp4k2U1W.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.Cp4k2U1W.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.Bj-v1V6C.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.Bj-v1V6C.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.Dy3-yeJ6.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.Dy3-yeJ6.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.CGfuhHUD.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.CGfuhHUD.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.BY3xZb81.js"},{"revision":null,"url":"assets/core_useDark_index.md.BY3xZb81.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.C4G_bFXW.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.C4G_bFXW.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.DA2ZyPxn.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.DA2ZyPxn.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.v5LqWLni.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.v5LqWLni.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.CssD7sj3.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.CssD7sj3.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.BXmHbycv.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.BXmHbycv.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BYFpclB_.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BYFpclB_.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.Oxejq_E1.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.Oxejq_E1.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.D0kBe_td.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.D0kBe_td.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.BSWpIFD3.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.BSWpIFD3.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.QMoOMvQC.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.QMoOMvQC.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DjIY2G0c.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DjIY2G0c.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.QNLKGmNW.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.QNLKGmNW.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.DaE4kEF-.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.DaE4kEF-.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.Mwg7Jy8v.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.Mwg7Jy8v.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.lqKwFNC4.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.lqKwFNC4.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.CDmSp0hT.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.CDmSp0hT.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.DPhYOK8v.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.DPhYOK8v.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.xdvYQ45-.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.xdvYQ45-.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.DRJBrD5g.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.DRJBrD5g.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.CG-Ia4tp.js"},{"revision":null,"url":"assets/core_useFetch_index.md.CG-Ia4tp.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.XnNVOPTC.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.XnNVOPTC.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.-n-EA9ir.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.-n-EA9ir.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.CE8fetbY.js"},{"revision":null,"url":"assets/core_useFocus_index.md.CE8fetbY.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.COedkBEQ.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.COedkBEQ.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.Cny12FYT.js"},{"revision":null,"url":"assets/core_useFps_index.md.Cny12FYT.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.DyGQAL2O.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.DyGQAL2O.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.DJmjtp73.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.DJmjtp73.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.gAl_BAQI.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.gAl_BAQI.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.n5LTWk7k.js"},{"revision":null,"url":"assets/core_useIdle_index.md.n5LTWk7k.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.1ni2JsB6.js"},{"revision":null,"url":"assets/core_useImage_index.md.1ni2JsB6.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.Rnq5UfE-.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.Rnq5UfE-.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.C8wc31Sz.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.C8wc31Sz.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BZcnprfx.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BZcnprfx.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.Cngo8JBV.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.Cngo8JBV.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.D5B2oUdx.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.D5B2oUdx.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.C_dliHpX.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.C_dliHpX.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BuuKh4-t.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BuuKh4-t.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.Deqmw8LN.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.Deqmw8LN.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.Cyow0_Pz.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.Cyow0_Pz.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.BZcKPNxp.js"},{"revision":null,"url":"assets/core_useMemory_index.md.BZcKPNxp.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.Cgy6_qWm.js"},{"revision":null,"url":"assets/core_useMounted_index.md.Cgy6_qWm.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.Y9RHbVZW.js"},{"revision":null,"url":"assets/core_useMouse_index.md.Y9RHbVZW.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.B52taYW4.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.B52taYW4.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.CfNy9MmZ.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.CfNy9MmZ.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.DhYJ-jGw.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.DhYJ-jGw.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BucpQ-dY.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BucpQ-dY.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.U9qsO5lX.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.U9qsO5lX.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.CNm8DNuk.js"},{"revision":null,"url":"assets/core_useNow_index.md.CNm8DNuk.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.CkFfajYR.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.CkFfajYR.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.hjJir44_.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.hjJir44_.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.BVp2RxhX.js"},{"revision":null,"url":"assets/core_useOnline_index.md.BVp2RxhX.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.rXSy6bwi.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.rXSy6bwi.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.DXcd177H.js"},{"revision":null,"url":"assets/core_useParallax_index.md.DXcd177H.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.Bg_GK6H7.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.Bg_GK6H7.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.CwHOGZSd.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.CwHOGZSd.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.BDUTBqKq.js"},{"revision":null,"url":"assets/core_usePermission_index.md.BDUTBqKq.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.UMuygtob.js"},{"revision":null,"url":"assets/core_usePointer_index.md.UMuygtob.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.BgUBaEd6.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.BgUBaEd6.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.D3u4TotA.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.D3u4TotA.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.WKMWyWan.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.WKMWyWan.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.DLl5HY9-.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.DLl5HY9-.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.CNzCq6en.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.CNzCq6en.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.Dh86BklF.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.Dh86BklF.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.Cg_-VQ6j.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.Cg_-VQ6j.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CBd37mwU.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CBd37mwU.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.B5_HExtw.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.B5_HExtw.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BwS0N69u.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BwS0N69u.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DfplEVla.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DfplEVla.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DcU4Wk-Q.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DcU4Wk-Q.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.FBxIoxhe.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.FBxIoxhe.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.Ddq-CEwn.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.Ddq-CEwn.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.C9y00AiT.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.C9y00AiT.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.DWVpXZa-.js"},{"revision":null,"url":"assets/core_useScroll_index.md.DWVpXZa-.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CV0YNDZe.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CV0YNDZe.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.B7vJPaie.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.B7vJPaie.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.D5lbIxcw.js"},{"revision":null,"url":"assets/core_useShare_index.md.D5lbIxcw.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.Dns9Q08K.js"},{"revision":null,"url":"assets/core_useSorted_index.md.Dns9Q08K.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.f4AGmJWH.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.f4AGmJWH.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DtYuxuTF.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DtYuxuTF.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.BBz0zjXw.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.BBz0zjXw.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BM-xxqhB.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BM-xxqhB.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.Dk0V0CN1.js"},{"revision":null,"url":"assets/core_useStorage_index.md.Dk0V0CN1.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.Brlwf1WO.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.Brlwf1WO.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.Bs_P9Aew.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.Bs_P9Aew.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.Cu8jrnQP.js"},{"revision":null,"url":"assets/core_useSupported_index.md.Cu8jrnQP.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.B_Iywy7l.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.B_Iywy7l.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.CZTP8WeZ.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.CZTP8WeZ.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Ddj-THs1.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Ddj-THs1.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.-HUQee0w.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.-HUQee0w.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.DM83LfR0.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.DM83LfR0.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.DgcEF9-h.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.DgcEF9-h.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BUlvH_aJ.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BUlvH_aJ.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.DkVOI3zI.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.DkVOI3zI.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DI7CFhZg.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DI7CFhZg.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.CXj186pd.js"},{"revision":null,"url":"assets/core_useTitle_index.md.CXj186pd.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.D7xvdaSM.js"},{"revision":null,"url":"assets/core_useTransition_index.md.D7xvdaSM.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.otmYLLs1.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.otmYLLs1.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.6-BUBaWm.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.6-BUBaWm.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.Bm8Yx27i.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.Bm8Yx27i.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CMcbLY1R.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CMcbLY1R.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.zeh5Piip.js"},{"revision":null,"url":"assets/core_useVModel_index.md.zeh5Piip.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.Bedej8g3.js"},{"revision":null,"url":"assets/core_useVModels_index.md.Bedej8g3.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.DEknb8Al.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.DEknb8Al.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.DbT6KfRq.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.DbT6KfRq.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DeLaIb3u.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DeLaIb3u.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.CZe6qEl2.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.CZe6qEl2.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.DPuIJAW_.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.DPuIJAW_.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.DWsrSRdD.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.DWsrSRdD.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.CTyPFNab.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.CTyPFNab.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.DlHmv_Jo.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.DlHmv_Jo.lean.js"},{"revision":null,"url":"assets/ecosystem.md.tWue52Gs.js"},{"revision":null,"url":"assets/ecosystem.md.tWue52Gs.lean.js"},{"revision":null,"url":"assets/electron_README.md.Cdcuwfqp.js"},{"revision":null,"url":"assets/electron_README.md.Cdcuwfqp.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bg2T-QeJ.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bg2T-QeJ.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.BmBPeN6-.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.BmBPeN6-.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.Bz_Vq2Tu.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.Bz_Vq2Tu.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DnSHBkbA.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DnSHBkbA.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.uWOFPy3D.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.uWOFPy3D.lean.js"},{"revision":null,"url":"assets/export-size.md.qXt37C4F.js"},{"revision":null,"url":"assets/export-size.md.qXt37C4F.lean.js"},{"revision":null,"url":"assets/firebase_README.md.DQSDiXla.js"},{"revision":null,"url":"assets/firebase_README.md.DQSDiXla.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.CMef-rkq.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.CMef-rkq.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.C41PP8aM.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.C41PP8aM.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.yoLRJo4_.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.yoLRJo4_.lean.js"},{"revision":null,"url":"assets/functions.md.BInb9dIG.js"},{"revision":null,"url":"assets/functions.md.BInb9dIG.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.DCVxknRG.js"},{"revision":null,"url":"assets/guide_best-practice.md.DCVxknRG.lean.js"},{"revision":null,"url":"assets/guide_components.md.Cn9kWCc3.js"},{"revision":null,"url":"assets/guide_components.md.Cn9kWCc3.lean.js"},{"revision":null,"url":"assets/guide_config.md.BIpOykM4.js"},{"revision":null,"url":"assets/guide_config.md.BIpOykM4.lean.js"},{"revision":null,"url":"assets/guide_index.md.XI4DZ8fk.js"},{"revision":null,"url":"assets/guide_index.md.XI4DZ8fk.lean.js"},{"revision":null,"url":"assets/guidelines.md.C88x1YOm.js"},{"revision":null,"url":"assets/guidelines.md.C88x1YOm.lean.js"},{"revision":null,"url":"assets/index.md.BAC-oFRB.js"},{"revision":null,"url":"assets/index.md.BAC-oFRB.lean.js"},{"revision":null,"url":"assets/integrations_README.md.CWGEh9EV.js"},{"revision":null,"url":"assets/integrations_README.md.CWGEh9EV.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.1kR9473O.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.1kR9473O.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.DiEYo30s.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.DiEYo30s.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.CZvlhzlC.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.CZvlhzlC.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.CSml3bRm.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.CSml3bRm.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BCxKKb_o.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BCxKKb_o.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.CGrUktE2.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.CGrUktE2.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.ByWi1Jxt.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.ByWi1Jxt.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.DPtblRj8.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.DPtblRj8.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.5ijE7jZ6.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.5ijE7jZ6.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.0MzsmOWq.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.0MzsmOWq.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.BbgFBCTq.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.BbgFBCTq.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BLuAstwt.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BLuAstwt.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.F9JTjN3e.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.F9JTjN3e.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.B0Ewck1R.js"},{"revision":null,"url":"assets/math_createProjection_index.md.B0Ewck1R.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.BdP2w2LH.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.BdP2w2LH.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.CxLmlJfW.js"},{"revision":null,"url":"assets/math_logicNot_index.md.CxLmlJfW.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.0C2ZAmbk.js"},{"revision":null,"url":"assets/math_logicOr_index.md.0C2ZAmbk.lean.js"},{"revision":null,"url":"assets/math_README.md.BGTUC5xH.js"},{"revision":null,"url":"assets/math_README.md.BGTUC5xH.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.dQIkFBoM.js"},{"revision":null,"url":"assets/math_useAbs_index.md.dQIkFBoM.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.8AYK1a7G.js"},{"revision":null,"url":"assets/math_useAverage_index.md.8AYK1a7G.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.BvQOhaS9.js"},{"revision":null,"url":"assets/math_useCeil_index.md.BvQOhaS9.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DySMNf5L.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DySMNf5L.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.CTfLNVNi.js"},{"revision":null,"url":"assets/math_useFloor_index.md.CTfLNVNi.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.CNBfnRsp.js"},{"revision":null,"url":"assets/math_useMath_index.md.CNBfnRsp.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.BlsgXUt3.js"},{"revision":null,"url":"assets/math_useMax_index.md.BlsgXUt3.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.DXrv5SxG.js"},{"revision":null,"url":"assets/math_useMin_index.md.DXrv5SxG.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.D994Cjc_.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.D994Cjc_.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.DN3YKRWg.js"},{"revision":null,"url":"assets/math_useProjection_index.md.DN3YKRWg.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.RMt_-YqM.js"},{"revision":null,"url":"assets/math_useRound_index.md.RMt_-YqM.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.CVFII795.js"},{"revision":null,"url":"assets/math_useSum_index.md.CVFII795.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.DfmlqoQz.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.DfmlqoQz.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.lsDmhLx0.js"},{"revision":null,"url":"assets/nuxt_README.md.lsDmhLx0.lean.js"},{"revision":null,"url":"assets/router_README.md.DrdMokvO.js"},{"revision":null,"url":"assets/router_README.md.DrdMokvO.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.BbTXtAPB.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.BbTXtAPB.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.dfpzcSrJ.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.dfpzcSrJ.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.BjqtEgjD.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.BjqtEgjD.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.Cr1VcK4p.js"},{"revision":null,"url":"assets/rxjs_from_index.md.Cr1VcK4p.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.6sENoyB4.js"},{"revision":null,"url":"assets/rxjs_README.md.6sENoyB4.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.BrB4ibvH.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.BrB4ibvH.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.BXilEXFd.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.BXilEXFd.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.loVFa0gE.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.loVFa0gE.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.Dypx2iV3.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.Dypx2iV3.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.D4V3wIij.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.D4V3wIij.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.DvoiIeXH.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.DvoiIeXH.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.CLU4j4R3.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.CLU4j4R3.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.DeXaC6el.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.DeXaC6el.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.B-Gi3JnQ.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.B-Gi3JnQ.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.DGDVN5Ua.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.DGDVN5Ua.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.DfzLPyEU.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.DfzLPyEU.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.DMT9yO0C.js"},{"revision":null,"url":"assets/shared_createRef_index.md.DMT9yO0C.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CNpyCy6N.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CNpyCy6N.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.BIVOkWjP.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.BIVOkWjP.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.CMkSVPJj.js"},{"revision":null,"url":"assets/shared_get_index.md.CMkSVPJj.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.bUj2eHrz.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.bUj2eHrz.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BQ6xgN17.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BQ6xgN17.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.ClRGGPWZ.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.ClRGGPWZ.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.B8Cm51YF.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.B8Cm51YF.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.BDZBUvwp.js"},{"revision":null,"url":"assets/shared_reactify_index.md.BDZBUvwp.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.u1fDzh9B.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.u1fDzh9B.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.ByEjGn0N.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.ByEjGn0N.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.fg99f-G-.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.fg99f-G-.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.x2_ls8Y0.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.x2_ls8Y0.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.jI-nHD_s.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.jI-nHD_s.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.C0I4pOAu.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.C0I4pOAu.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.DCjM5YKw.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.DCjM5YKw.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BqI-vJJF.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BqI-vJJF.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.u_ThCkZf.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.u_ThCkZf.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.DG5IlDjy.js"},{"revision":null,"url":"assets/shared_set_index.md.DG5IlDjy.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.D8DEpz76.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.D8DEpz76.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.U6f1s33c.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.U6f1s33c.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BHsJ1tr8.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BHsJ1tr8.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.Bz2501Hg.js"},{"revision":null,"url":"assets/shared_toRef_index.md.Bz2501Hg.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DgQ_a8wE.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DgQ_a8wE.lean.js"},{"revision":null,"url":"assets/shared_toValue_index.md.Do-kdIKA.js"},{"revision":null,"url":"assets/shared_toValue_index.md.Do-kdIKA.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.C8UfFk6c.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.C8UfFk6c.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DOlQ2lZr.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DOlQ2lZr.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.CdHwfftM.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.CdHwfftM.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.Zejw5QND.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.Zejw5QND.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.Bx96-68k.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.Bx96-68k.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.BU-R2iqI.js"},{"revision":null,"url":"assets/shared_until_index.md.BU-R2iqI.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.to0gAN2b.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.to0gAN2b.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.otPpZaNn.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.otPpZaNn.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.CZph4zxu.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.CZph4zxu.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.CqUsTHgg.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.CqUsTHgg.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.CLVgdgmi.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.CLVgdgmi.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.MkfPV6Ws.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.MkfPV6Ws.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.BSq3mq2Y.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.BSq3mq2Y.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.CfKUcVA6.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.CfKUcVA6.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.D8p_75hP.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.D8p_75hP.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.9wbM5oWs.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.9wbM5oWs.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.C8otYXlG.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.C8otYXlG.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.ZdF0yMtb.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.ZdF0yMtb.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.cvBulnrp.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.cvBulnrp.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.BbtkKljd.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.BbtkKljd.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.CFn4VmSN.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.CFn4VmSN.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.aCr8wZYe.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.aCr8wZYe.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.BKIDPEGT.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.BKIDPEGT.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.BHxa8-Fz.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.BHxa8-Fz.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.BmIczM0v.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.BmIczM0v.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.BH9JPrw4.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.BH9JPrw4.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.jVZmK_me.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.jVZmK_me.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.D-4QmXcJ.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.D-4QmXcJ.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.D7K3zSUb.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.D7K3zSUb.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.JerxKJHL.js"},{"revision":null,"url":"assets/shared_useToString_index.md.JerxKJHL.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Dyy_vGC4.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Dyy_vGC4.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.DyA66KrP.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.DyA66KrP.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.isI8luDQ.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.isI8luDQ.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.CVU6aqnw.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.CVU6aqnw.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BxDml9qV.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BxDml9qV.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.DnwOzmJe.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.DnwOzmJe.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.CW3X_TfQ.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.CW3X_TfQ.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Cq3blFof.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Cq3blFof.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.BfqlJ1ck.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.BfqlJ1ck.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BYX39Hmh.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BYX39Hmh.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.MEBU1-xf.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.MEBU1-xf.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.A5D-eqjN.js"},{"revision":null,"url":"assets/shared_whenever_index.md.A5D-eqjN.lean.js"},{"revision":null,"url":"assets/style.DJjvNkKy.css"},{"revision":null,"url":"assets/team.md.Co2810WK.js"},{"revision":null,"url":"assets/team.md.Co2810WK.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.BRLn-zXj.js"},{"revision":null,"url":"assets/why-no-translations.md.BRLn-zXj.lean.js"},{"revision":"1f787dece86a2d31a7c76bf10d5ca756","url":"badge-function-count.svg"},{"revision":"bdbd60f913299371ad9925d24d87919f","url":"components/README.html"},{"revision":"f5f4cb53f999b6ba8d135faea5479be3","url":"contributing.html"},{"revision":"3675f38270764ddc21c9ccd101e5f44c","url":"core/_template/index.html"},{"revision":"bdcbbe98d2c6da07345129ee81190584","url":"core/computedAsync/index.html"},{"revision":"3e812d27e9ac0a2f13ee625824970a41","url":"core/computedInject/index.html"},{"revision":"640ecf161e09f5ed20b545b7524c0878","url":"core/createReusableTemplate/index.html"},{"revision":"bb3f5265aa17f31e4ee934ecb515f2be","url":"core/createTemplatePromise/index.html"},{"revision":"21531af70724b606df19888db7ba316d","url":"core/createUnrefFn/index.html"},{"revision":"7c32c70b0f3b20e34976b3fcfe3b3705","url":"core/onClickOutside/index.html"},{"revision":"1333523b08775d1338bb75e84edb7512","url":"core/onElementRemoval/index.html"},{"revision":"5ca6b143793ef2cef4cd64aba1c4aa17","url":"core/onKeyStroke/index.html"},{"revision":"419d8ab8f44746b25ead9565c32af37f","url":"core/onLongPress/index.html"},{"revision":"59c2cab74d4d0be0aabf2167d8aef18a","url":"core/onStartTyping/index.html"},{"revision":"8b130d75cf22109d36be1b63ceba996b","url":"core/README.html"},{"revision":"6d798a60baa016a290094a57c9a7e500","url":"core/templateRef/index.html"},{"revision":"b2a0d53fb1d3eb2165cb66db897654a4","url":"core/unrefElement/index.html"},{"revision":"e47c27bfcf280ca3aff68e0e65913aad","url":"core/useActiveElement/index.html"},{"revision":"84b59255a7e66445c9f1df8315388f20","url":"core/useAnimate/index.html"},{"revision":"1e1b78b519099c258e26afdca3c69222","url":"core/useAsyncQueue/index.html"},{"revision":"ffd2f35628e3dbd67e683334a02b4f1a","url":"core/useAsyncState/index.html"},{"revision":"e51ea227d461d65e9d04e241f3b2dc44","url":"core/useBase64/index.html"},{"revision":"a1a3c6e336ab38c061011abd48635dee","url":"core/useBattery/index.html"},{"revision":"bf8304218c14105109832643f4c0fb19","url":"core/useBluetooth/index.html"},{"revision":"79dc67248b3a94b1ce0cfbc8f4a43bfc","url":"core/useBreakpoints/index.html"},{"revision":"bab8ca645e46835842c4f80a4f3d35ef","url":"core/useBroadcastChannel/index.html"},{"revision":"cf45a90c3574ee8912264561b3f51319","url":"core/useBrowserLocation/index.html"},{"revision":"54e6f56aacebd1b6b5218e8017acc214","url":"core/useCached/index.html"},{"revision":"7c7f339f2bfd3d25913d495817c781a3","url":"core/useClipboard/index.html"},{"revision":"71bc6e4ba5c1f68a823eebfe97904448","url":"core/useClipboardItems/index.html"},{"revision":"7cc8f283fb4d876d47dbf475e44d1f2b","url":"core/useCloned/index.html"},{"revision":"ccc7eea3b81cacddc5aa574a1c5a5743","url":"core/useColorMode/index.html"},{"revision":"47d41bc62599067550e6a45a37a42c8b","url":"core/useConfirmDialog/index.html"},{"revision":"39e57ec899210489a3c8dc06be44c256","url":"core/useCountdown/index.html"},{"revision":"cf00739e94ba4201382da1df66b2ac0e","url":"core/useCssVar/index.html"},{"revision":"79acdfb7eb3e62b002b814b2e4472b4e","url":"core/useCurrentElement/index.html"},{"revision":"e4d1f27a969097d1831cb844a9f00009","url":"core/useCycleList/index.html"},{"revision":"ff5ca1d7f61d70e02aa2b9cd46978765","url":"core/useDark/index.html"},{"revision":"77b3afeaadd7877e93a81bc30f745384","url":"core/useDebouncedRefHistory/index.html"},{"revision":"614797e81ad3a2fb439a97262e1d9155","url":"core/useDeviceMotion/index.html"},{"revision":"30277ec26d10a8a2d39217aa7ca2a372","url":"core/useDeviceOrientation/index.html"},{"revision":"44c457b8211b7aabf36db8232bfb2422","url":"core/useDevicePixelRatio/index.html"},{"revision":"a05471a325b3e58db5c56921e1f0ca4c","url":"core/useDevicesList/index.html"},{"revision":"5795c37af5d78d94fdff1d03d39b8d23","url":"core/useDisplayMedia/index.html"},{"revision":"931fd772f6b3503aaa2fc9345d24d591","url":"core/useDocumentVisibility/index.html"},{"revision":"6bd8be7ad48261fe36ee2e494b7e389b","url":"core/useDraggable/index.html"},{"revision":"76e5042964ab951be07e87bdd194d4da","url":"core/useDropZone/index.html"},{"revision":"8498c9344577791cfde0b9f8882f236b","url":"core/useElementBounding/index.html"},{"revision":"5d0d171856f84829115424d1086669f6","url":"core/useElementByPoint/index.html"},{"revision":"255537f87eb617b1cccc7af58ae53387","url":"core/useElementHover/index.html"},{"revision":"0152c14f1575f4ab5995ca161f1418b8","url":"core/useElementSize/index.html"},{"revision":"75940c2301315d2b3b49d1b9affe71ee","url":"core/useElementVisibility/index.html"},{"revision":"0524b96cd163bec50065edc2c26ab218","url":"core/useEventBus/index.html"},{"revision":"6290a37adbfbd6aa4650c6229965ba8e","url":"core/useEventListener/index.html"},{"revision":"00704f9eda6dd9f7f9249e974cdc3322","url":"core/useEventSource/index.html"},{"revision":"319a503f15e5d26b0ba618017d0815b1","url":"core/useEyeDropper/index.html"},{"revision":"34f7403b14ff6ca9e0d7ac10051d0256","url":"core/useFavicon/index.html"},{"revision":"a0bf1c7a078f85f82ae978d20788175b","url":"core/useFetch/index.html"},{"revision":"03ac29521c3efa86f416fa2c1bc0e4ec","url":"core/useFileDialog/index.html"},{"revision":"c6769b986c253f384e89a9addeb4cb3c","url":"core/useFileSystemAccess/index.html"},{"revision":"d08c5f0216c0074929ed0a1180128070","url":"core/useFocus/index.html"},{"revision":"e20e790686285321f4280a0e0044a5ed","url":"core/useFocusWithin/index.html"},{"revision":"73def9d7f10fd0e375c4b97582888ad8","url":"core/useFps/index.html"},{"revision":"0e42d1fe4ff095ae8dbe77f3e5d265c1","url":"core/useFullscreen/index.html"},{"revision":"34825bb28a5428a9df697a088adf0f2b","url":"core/useGamepad/index.html"},{"revision":"ff1015fe42c3f6d60958ca56921eef36","url":"core/useGeolocation/index.html"},{"revision":"fbd4ee78b6206fa23be66af8d040a17e","url":"core/useIdle/index.html"},{"revision":"5aa8877a9920a6dbcf3acf4792c08a2f","url":"core/useImage/index.html"},{"revision":"61527c93b0cc11f6dad86af0866a8e3f","url":"core/useInfiniteScroll/index.html"},{"revision":"bc8c2ccdd1ed40a71147dc3518738ee7","url":"core/useIntersectionObserver/index.html"},{"revision":"cdb3641d56ab501e09e018f28bd9efbd","url":"core/useKeyModifier/index.html"},{"revision":"7688b47823e1ad5b8225eb120db70961","url":"core/useLocalStorage/index.html"},{"revision":"d532f96bd34346256e10369d2adba426","url":"core/useMagicKeys/index.html"},{"revision":"8d4f411d67e68806b443adf343851150","url":"core/useManualRefHistory/index.html"},{"revision":"cb7c78591a3748b7d6ceee6307f79257","url":"core/useMediaControls/index.html"},{"revision":"55c40bc3d4ba45c002f5aee77b2ed0d6","url":"core/useMediaQuery/index.html"},{"revision":"cafc552b10c76302ccf2a864d7be617d","url":"core/useMemoize/index.html"},{"revision":"695dceffcebb5569cee906a73f8bd0dc","url":"core/useMemory/index.html"},{"revision":"7beb3c75ad21613ee40a39881f46a854","url":"core/useMounted/index.html"},{"revision":"b7231f4f523d4d1bda04b407b9b0dca5","url":"core/useMouse/index.html"},{"revision":"c9b245ef3d591e5a939a3937f5b52484","url":"core/useMouseInElement/index.html"},{"revision":"8e09e151e8743c65c21e5d25afe16117","url":"core/useMousePressed/index.html"},{"revision":"1f32e8d66d79338c9efe2c07ca5af9e3","url":"core/useMutationObserver/index.html"},{"revision":"a5c38fbb2f2adf940e6c845f1dc19f00","url":"core/useNavigatorLanguage/index.html"},{"revision":"549ebec3cc5c55c98b0d2f2a65207103","url":"core/useNetwork/index.html"},{"revision":"a1aea1f4998c0d3162f5ad2d6bcdbe1d","url":"core/useNow/index.html"},{"revision":"8e6a1a1bd473517d16e4c23f268692bd","url":"core/useObjectUrl/index.html"},{"revision":"b8805054abe8cbd219cad0f2c9622ff1","url":"core/useOffsetPagination/index.html"},{"revision":"7340f1ea9eb6450f255b2392a02b26e8","url":"core/useOnline/index.html"},{"revision":"70c7f9d40af139efe8034999c8b3f11e","url":"core/usePageLeave/index.html"},{"revision":"0dd813679e7a9bae2eb3e6a85ac2dcde","url":"core/useParallax/index.html"},{"revision":"779bd76ed472b3811dafb0b4f88978d5","url":"core/useParentElement/index.html"},{"revision":"f0ab1ee32574f561970857641ec16fce","url":"core/usePerformanceObserver/index.html"},{"revision":"9ce16b34532bf12613642530c9b98da2","url":"core/usePermission/index.html"},{"revision":"d87c2633d0a083138d2a1670fa5490cd","url":"core/usePointer/index.html"},{"revision":"255c8fa9ddfe6de981d83840b4d98732","url":"core/usePointerLock/index.html"},{"revision":"3e985953d532355255f2edb0678af25a","url":"core/usePointerSwipe/index.html"},{"revision":"27729d8442e42bac963825fb26692b6c","url":"core/usePreferredColorScheme/index.html"},{"revision":"6e1409f2783e01da1df41f862757f38c","url":"core/usePreferredContrast/index.html"},{"revision":"9d12473e561b5ab3485c654c0ad878c1","url":"core/usePreferredDark/index.html"},{"revision":"532721f7c55f3fecf3a01cb44f0e182b","url":"core/usePreferredLanguages/index.html"},{"revision":"123a561c69a5f621d1eabce3b9b5f379","url":"core/usePreferredReducedMotion/index.html"},{"revision":"745efc7c05e2408425957a694087dd9c","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"5ffc1f8264937792b29df05d1e1960d4","url":"core/usePrevious/index.html"},{"revision":"e75f2f15ccfaddbacf395817f8d87e3c","url":"core/useRafFn/index.html"},{"revision":"cf0a247e0f3fcfc156bdcdc8048ae8b6","url":"core/useRefHistory/index.html"},{"revision":"5d68affc3b6f247788d5b281f0d02ea8","url":"core/useResizeObserver/index.html"},{"revision":"c5552a6d8a11eebf5dd1bf83d32533c7","url":"core/useScreenOrientation/index.html"},{"revision":"6e4c77716822d773a9e8034b1a598c70","url":"core/useScreenSafeArea/index.html"},{"revision":"9e2a0f82ab2701fef6c1e4565791e4a1","url":"core/useScriptTag/index.html"},{"revision":"1e6aa4574c1ecdef72f2abad68b1add2","url":"core/useScroll/index.html"},{"revision":"08b7f3766a1636a6a9f0cbe8e2f0b929","url":"core/useScrollLock/index.html"},{"revision":"f32d1415d10dbb1793c6b8eb17d90ee1","url":"core/useSessionStorage/index.html"},{"revision":"99148beff718f9699251c50bed295145","url":"core/useShare/index.html"},{"revision":"e835835d81bf17ef19cb219e38f33dd9","url":"core/useSorted/index.html"},{"revision":"0a93c599de46505efff6309fed745eca","url":"core/useSpeechRecognition/index.html"},{"revision":"8dc13790c3fd797477d9f688c09e3d89","url":"core/useSpeechSynthesis/index.html"},{"revision":"9e5b39a9a5f72d7d775915c7194af410","url":"core/useSSRWidth/index.html"},{"revision":"185b67d3e7f721195396090929d1ed1b","url":"core/useStepper/index.html"},{"revision":"6023440edfedbb4673b7074822c28d28","url":"core/useStorage/index.html"},{"revision":"550209812b6ac672026207af65c9e7f4","url":"core/useStorageAsync/index.html"},{"revision":"927cac02d7a9d6fcc10e3cf6b7f3d737","url":"core/useStyleTag/index.html"},{"revision":"963951acbb38c5772d9401dd09179613","url":"core/useSupported/index.html"},{"revision":"834d775ab0f163e9b679b5f5a7688aaf","url":"core/useSwipe/index.html"},{"revision":"8e84eba6d263a548931b7478a7916b6c","url":"core/useTemplateRefsList/index.html"},{"revision":"0a314fa773541a137ae6d6244d9db45b","url":"core/useTextareaAutosize/index.html"},{"revision":"8f4eb223ffa61b128719ef0a90ff2dc3","url":"core/useTextDirection/index.html"},{"revision":"3e4701dda6bb2c683c84623675702e35","url":"core/useTextSelection/index.html"},{"revision":"e5898843cd014c6b6a24bca3b85ed1db","url":"core/useThrottledRefHistory/index.html"},{"revision":"122cc9333d12362369e861c78ead8cec","url":"core/useTimeAgo/index.html"},{"revision":"66e37c14cfcc9d2592963a09d1383fb5","url":"core/useTimeoutPoll/index.html"},{"revision":"b9dd477727af50c02b18b2f6e1b276e2","url":"core/useTimestamp/index.html"},{"revision":"ea898869150b1fe9045ed37727a629e9","url":"core/useTitle/index.html"},{"revision":"22100ea2d2caa970098a30d29ae4168e","url":"core/useTransition/index.html"},{"revision":"b6dbd1b4aa39ae64a7eb4bbea5078e56","url":"core/useUrlSearchParams/index.html"},{"revision":"60c2e3606632d23889b8f77e173bcbf4","url":"core/useUserMedia/index.html"},{"revision":"528d93bb8eb0100bfaa535bba73da7ff","url":"core/useVibrate/index.html"},{"revision":"a19e7a738d479306ea5cbf0665fef48a","url":"core/useVirtualList/index.html"},{"revision":"f53abbd7085f655c700c36a0d6f52a51","url":"core/useVModel/index.html"},{"revision":"7a2a47e0750d87f4d6297183702c3b75","url":"core/useVModels/index.html"},{"revision":"3f8c44f394e0103eb98e2b1bad5dc108","url":"core/useWakeLock/index.html"},{"revision":"503d9c6fab31cf6ac51f3c62c0147d2b","url":"core/useWebNotification/index.html"},{"revision":"f0ce6920004124acf15a14ba1dc5c5e2","url":"core/useWebSocket/index.html"},{"revision":"faf912b439ea917c446ab1b20cf3eb91","url":"core/useWebWorker/index.html"},{"revision":"61f3556c7915bca6060e6e3cfb107375","url":"core/useWebWorkerFn/index.html"},{"revision":"8c76cb3bbf8563b422f109607d436c63","url":"core/useWindowFocus/index.html"},{"revision":"2dc72426dab176a34864be7eb8cc40e8","url":"core/useWindowScroll/index.html"},{"revision":"fd2b2424d82c0751ac74a6815b63ec57","url":"core/useWindowSize/index.html"},{"revision":"1497b7f282999699c7ad2f68d97e6290","url":"ecosystem.html"},{"revision":"b5346d7170b232cfa595e66fd990a273","url":"electron/README.html"},{"revision":"7c56b84e32451e46f572dd3aa0497496","url":"electron/useIpcRenderer/index.html"},{"revision":"16f3ac503e88e523eeee3697bc23c506","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"aa2eb9a57a7d3fe6d1ef3641c0356d22","url":"electron/useIpcRendererOn/index.html"},{"revision":"ca91ae010576766d4f8188aa06b4fe7b","url":"electron/useZoomFactor/index.html"},{"revision":"26a900105116b9a4c12546eefa9a28fd","url":"electron/useZoomLevel/index.html"},{"revision":"ba82e56e269d88dd04d730c314848efb","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"771f574271648b25be529e2de69a4a76","url":"firebase/README.html"},{"revision":"632e75581bde5125cc59512ba995f3c7","url":"firebase/useAuth/index.html"},{"revision":"056789c878015a486cbd5ebe6c7a9b54","url":"firebase/useFirestore/index.html"},{"revision":"7d88ad7277ed71ff349ee6447697dd48","url":"firebase/useRTDB/index.html"},{"revision":"500f567da7425c38b6b7eb94f14b56e3","url":"functions.html"},{"revision":"aef6860a2eec7b79fa706350a4ce2d46","url":"guide/best-practice.html"},{"revision":"37545b00a85497ffb533c5157079f309","url":"guide/components.html"},{"revision":"a91055c50d1bde01e011d4e0d28b55f0","url":"guide/config.html"},{"revision":"c7bf4f251ccb07bc8ce07bdfa2d90a4b","url":"guide/index.html"},{"revision":"adbd65b6c39c4ab532a62d2fe9ca9969","url":"guidelines.html"},{"revision":"743a35fc5ebdcca2e1ea728b37586efb","url":"index.html"},{"revision":"8107bd934ca003d14bd9133f8715d73a","url":"integrations/README.html"},{"revision":"dccb5f36d23c9d65e61d535f8866eb8a","url":"integrations/useAsyncValidator/index.html"},{"revision":"18983a97fec414e166c5980400dca1cc","url":"integrations/useAxios/index.html"},{"revision":"21f2e8ecf7e901691625f53057295c56","url":"integrations/useChangeCase/index.html"},{"revision":"5ae7a02f495091b3b7d72bd534ee2924","url":"integrations/useCookies/index.html"},{"revision":"7eebf50f0b0c723c0648f1801ebe5655","url":"integrations/useDrauu/index.html"},{"revision":"5822262a4c4c5bddf47acff8a6a2664f","url":"integrations/useFocusTrap/index.html"},{"revision":"789b38eca00278ae4d8d47b3a9625c1f","url":"integrations/useFuse/index.html"},{"revision":"de66fa3feeb463a2178a99ea860342eb","url":"integrations/useIDBKeyval/index.html"},{"revision":"201ee91394e1e91f1def4ff32a0b4f41","url":"integrations/useJwt/index.html"},{"revision":"74fc638616372af8146c5d6f177ba6d2","url":"integrations/useNProgress/index.html"},{"revision":"39c1a029a4bd289edba0748ceef97696","url":"integrations/useQRCode/index.html"},{"revision":"f6ad3cb26f24e1d9c1470ff7f2a7a9a2","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"4050d4bbf26176c2459c39be40ac12e3","url":"math/createGenericProjection/index.html"},{"revision":"72fcac823a21b4e1ba3cd62c90992879","url":"math/createProjection/index.html"},{"revision":"d3cc342ddf7321f711507ae494668192","url":"math/logicAnd/index.html"},{"revision":"8fdbe63c3f79935a4e2565fb621b3b89","url":"math/logicNot/index.html"},{"revision":"24fadead6e123ce3cf76c67893ec35e9","url":"math/logicOr/index.html"},{"revision":"cd925e4005773276db507c65834f0f43","url":"math/README.html"},{"revision":"b674faedf0b93772fc742c8cab46328e","url":"math/useAbs/index.html"},{"revision":"8a5fa0eaf9452808d375514f7e24ba46","url":"math/useAverage/index.html"},{"revision":"b8142104923ee9fbf54d7abbf1a91e07","url":"math/useCeil/index.html"},{"revision":"250f896a0dc554ee808c13a2f9e74cb6","url":"math/useClamp/index.html"},{"revision":"3b1f374c3d766d15b8470a9bd32662cd","url":"math/useFloor/index.html"},{"revision":"b638911c1e45c48d6bff170369771349","url":"math/useMath/index.html"},{"revision":"681b1e9f319cf01a6abc3da9f714f8d8","url":"math/useMax/index.html"},{"revision":"c1c56fc8f5f3f029267885701c9893e2","url":"math/useMin/index.html"},{"revision":"0687f5d3f598fe7f02c55fd9db356a41","url":"math/usePrecision/index.html"},{"revision":"707cf92294085ed2a729110b570b7c9b","url":"math/useProjection/index.html"},{"revision":"4a814c2b3ea9e04208b413c0fc297a36","url":"math/useRound/index.html"},{"revision":"35d497f69ee086de727c6db140a3f85d","url":"math/useSum/index.html"},{"revision":"97f22ffc7196dfb4a158cdaa9b3b1610","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"8fd9ba923da5f599821fa8aceb5fdcc1","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"05eca8a8e43f1615e60dc1014e65abb6","url":"router/README.html"},{"revision":"0d6842e51dfd927f97e2f40321a35d2c","url":"router/useRouteHash/index.html"},{"revision":"6676b0b39637567db0f0eea93bd29a2d","url":"router/useRouteParams/index.html"},{"revision":"ec8bc7cfc0e8a520f3a1ba74fb797e02","url":"router/useRouteQuery/index.html"},{"revision":"c4742e7ad10556a71cbb274a6042ba42","url":"rxjs/from/index.html"},{"revision":"efb8b991e9ad364cf60331a69c89f55c","url":"rxjs/README.html"},{"revision":"f9cc05e3d7d3721fc833972efdc6fba0","url":"rxjs/toObserver/index.html"},{"revision":"a8e712203fc316c6a63b9fbd14a06cbd","url":"rxjs/useExtractedObservable/index.html"},{"revision":"dfe8f6acf47bcf9067edfc42fda5faf2","url":"rxjs/useObservable/index.html"},{"revision":"8a1fb4e73b4de475767d0fa7e017d2b1","url":"rxjs/useSubject/index.html"},{"revision":"352d48f643fb2977e8398d5a3a789324","url":"rxjs/useSubscription/index.html"},{"revision":"03e047101a2aeb84e79f3984bd9130a5","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"db115ee492d043d5a2bccd3915df12fa","url":"shared/computedEager/index.html"},{"revision":"1157ca5d288c30a595277facae1ef88d","url":"shared/computedWithControl/index.html"},{"revision":"83359e8ae70bca744bb1f56048a6a91f","url":"shared/createEventHook/index.html"},{"revision":"028a28935cf84d0975db07239dfcd20f","url":"shared/createGlobalState/index.html"},{"revision":"13dee1e0a4be916d31d7493ee17f2385","url":"shared/createInjectionState/index.html"},{"revision":"b3880a6ab21611d0de44ef8b765f38d8","url":"shared/createRef/index.html"},{"revision":"b548c5cd8704e7bc1682f7d7e50d6e52","url":"shared/createSharedComposable/index.html"},{"revision":"d207a850d3311d3986d71add4afd4f4d","url":"shared/extendRef/index.html"},{"revision":"9b82559084624bbfc165714569ebb176","url":"shared/get/index.html"},{"revision":"02293e1a02dcfda47b91fdd745ce499e","url":"shared/injectLocal/index.html"},{"revision":"bd8548cc574028f0f08e9403e7e2c406","url":"shared/isDefined/index.html"},{"revision":"720489409f7e6bf037565dfb24eb94e2","url":"shared/makeDestructurable/index.html"},{"revision":"2421aaa7d9a1f7311864f857efe25a5f","url":"shared/provideLocal/index.html"},{"revision":"c79174eade88b9d4930e73f682ddfa63","url":"shared/reactify/index.html"},{"revision":"2ad161871d2053cad04cd8a5fe93744f","url":"shared/reactifyObject/index.html"},{"revision":"6fc329a4d3ded903077f43dbf509fb7a","url":"shared/reactiveComputed/index.html"},{"revision":"aeb9266edc10bd68ead8638c2f9c94aa","url":"shared/reactiveOmit/index.html"},{"revision":"1e5a0ef6ba046698ab3d16fcf07bde4a","url":"shared/reactivePick/index.html"},{"revision":"290906bf0e979ebb26bef012901f623f","url":"shared/refAutoReset/index.html"},{"revision":"cc0d48003fb2ea36afd668c06b4a21c9","url":"shared/refDebounced/index.html"},{"revision":"909170d78a14c3382b1c64aeb7bfd80a","url":"shared/refDefault/index.html"},{"revision":"f68dfb92f0cb4aee398f394961a6517e","url":"shared/refThrottled/index.html"},{"revision":"2d50a0da11e75abc1246afbd0e4f0e92","url":"shared/refWithControl/index.html"},{"revision":"7096393606f6d25ee9eec5bd2516e4e4","url":"shared/set/index.html"},{"revision":"fd67992b9b16af84f9cb52657a944277","url":"shared/syncRef/index.html"},{"revision":"4deb24cd707d1ddc613dbd63505ffafd","url":"shared/syncRefs/index.html"},{"revision":"1e6fd502270c800c7c9cfd080dbfbf23","url":"shared/toReactive/index.html"},{"revision":"32900d44a72c38a0c9fcfc6aaeaf5684","url":"shared/toRef/index.html"},{"revision":"92b1a7dc635e8ef669492500501979b0","url":"shared/toRefs/index.html"},{"revision":"c24072006eac12ca4c17dc1c80218501","url":"shared/toValue/index.html"},{"revision":"92991fcc1ae7dbb62f604a5121708975","url":"shared/tryOnBeforeMount/index.html"},{"revision":"5e1cea5733766c9a139e9f8e22676934","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"6f8e7661a01b8935a2ab039906d8ec90","url":"shared/tryOnMounted/index.html"},{"revision":"a76074ba8c0e64d808f5885382200977","url":"shared/tryOnScopeDispose/index.html"},{"revision":"6703911c05b77cbfe6acb1cf7ad3fe45","url":"shared/tryOnUnmounted/index.html"},{"revision":"e72562a3a14a3452ca7b62e339cbff14","url":"shared/until/index.html"},{"revision":"be1aab6f7133eb448d2b6083d83b9990","url":"shared/useArrayDifference/index.html"},{"revision":"00b440adce4f3615dc8930f73dacb041","url":"shared/useArrayEvery/index.html"},{"revision":"eb70a077a973d420701ea6d9d425654f","url":"shared/useArrayFilter/index.html"},{"revision":"10d89e0a8108e0b38ce2c1ce3573b8ab","url":"shared/useArrayFind/index.html"},{"revision":"d560b1273d1141a8f7765eae8864cc35","url":"shared/useArrayFindIndex/index.html"},{"revision":"6e171cc00d6265c2bd6c95ccbf5e3638","url":"shared/useArrayFindLast/index.html"},{"revision":"8a06f2f46801ac804e219b47b6e5b29a","url":"shared/useArrayIncludes/index.html"},{"revision":"a2a48b22c2f4b7a77cced2d602d868dc","url":"shared/useArrayJoin/index.html"},{"revision":"ebf4680f69b665615073f01ab74e038e","url":"shared/useArrayMap/index.html"},{"revision":"347d63a2f2b26960640ad3c201071936","url":"shared/useArrayReduce/index.html"},{"revision":"27993d581b69f446d38801417f244e11","url":"shared/useArraySome/index.html"},{"revision":"bed195cec38a0dda3a8c0d1283bbdd01","url":"shared/useArrayUnique/index.html"},{"revision":"92a78b241094b9c6b9e9a1c7c18dbd58","url":"shared/useCounter/index.html"},{"revision":"09108d15a73b6eee1512eb511681bf75","url":"shared/useDateFormat/index.html"},{"revision":"6fe759779196b9b61a2b8d0b9789d7be","url":"shared/useDebounceFn/index.html"},{"revision":"94884268e483c9fdf5278318137183cb","url":"shared/useInterval/index.html"},{"revision":"a7aa9bd7d81da726f1a64c79b2d4818d","url":"shared/useIntervalFn/index.html"},{"revision":"8f2c15df35eddc2b8682bdf95663fea3","url":"shared/useLastChanged/index.html"},{"revision":"368430cb336cc49205cd437bce0928b6","url":"shared/useThrottleFn/index.html"},{"revision":"5035e9c7bc8e919d68786a3d0ef897fe","url":"shared/useTimeout/index.html"},{"revision":"8bf10875120bc1239d95f1d85c078289","url":"shared/useTimeoutFn/index.html"},{"revision":"6ee8a7519527c7332c6e2c46ce420be5","url":"shared/useToggle/index.html"},{"revision":"97e96b6a8fd49a5eb684c0bcaa1fa0bf","url":"shared/useToNumber/index.html"},{"revision":"dbd6ff5b0e3b064139446e90d3007e0b","url":"shared/useToString/index.html"},{"revision":"ff76ab32fdc13a2cbc673328c12f496c","url":"shared/watchArray/index.html"},{"revision":"7336363a352a9ee17f8c1827b3ff4448","url":"shared/watchAtMost/index.html"},{"revision":"2195538bc12f986269a2e80491f2a6c7","url":"shared/watchDebounced/index.html"},{"revision":"9060d4597b64dc2f224f837292fc209a","url":"shared/watchDeep/index.html"},{"revision":"74ca4a751a40f5a9e0ec68f701446acb","url":"shared/watchIgnorable/index.html"},{"revision":"8434f9767836d09fd2579a3454166780","url":"shared/watchImmediate/index.html"},{"revision":"5536fabf90b4e8f54298418581c56ce0","url":"shared/watchOnce/index.html"},{"revision":"82586d5606f6781b504c433c0ceb02ad","url":"shared/watchPausable/index.html"},{"revision":"65c07ea3154dda526ff84033410adab2","url":"shared/watchThrottled/index.html"},{"revision":"d5d0d52f339019957cfe580550cefba7","url":"shared/watchTriggerable/index.html"},{"revision":"5cbc603161c481292b9cebc699686c30","url":"shared/watchWithFilter/index.html"},{"revision":"f36c52799c83ee41e500fbe25b46b635","url":"shared/whenever/index.html"},{"revision":"8794f9a41b3d158e2490692c859ab13a","url":"team.html"},{"revision":"ace7ab6bc932be145115857c39f7d63a","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"485e8c49b85377d2ce2f58512bcf6519","url":"why-no-translations.html"},{"revision":"557ecaafa4751a7a309afb0d6446b5a8","url":"hashmap.json"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"97a9e31aee065e25bd6ee2ded3b39293","url":"manifest.webmanifest"}];
precacheAndRoute(entries);
cleanupOutdatedCaches();
let allowlist;
{
  let escapeStringRegexp = function(value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
  const swPath = self.location.pathname.lastIndexOf("/");
  const base = swPath === 0 ? "/" : self.location.pathname.slice(0, swPath + 1);
  allowlist = entries.filter((page) => {
    return typeof page === "string" ? page.endsWith(".html") : page.url.endsWith(".html");
  }).map((page) => {
    const url = typeof page === "string" ? page : page.url;
    const regex = url === "index.html" ? escapeStringRegexp(base) : escapeStringRegexp(`${base}${url.replace(/\.html$/, "")}`);
    return new RegExp(`^${regex}(\\.html)?$`);
  });
  registerRoute(
    ({ request, sameOrigin }) => {
      return sameOrigin && request.mode === "navigate";
    },
    new NetworkOnly({
      plugins: [{
        /* this callback will be called when the fetch call fails */
        handlerDidError: async () => Response.redirect("404", 302),
        /* this callback will prevent caching the response */
        cacheWillUpdate: async () => null
      }]
    }),
    "GET"
  );
  registerRoute(
    /^https:\/\/fonts\.googleapis\.com\/.*/i,
    new NetworkFirst({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/fonts\.gstatic\.com\/.*/i,
    new StaleWhileRevalidate({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
    new NetworkFirst({
      cacheName: "jsdelivr-images-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7
          // <== 7 days
        })
      ]
    })
  );
}
registerRoute(new NavigationRoute(
  createHandlerBoundToURL("index.html"),
  { allowlist }
));
self.addEventListener("activate", async () => {
  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach((client) => {
    client.navigate(client.url);
  });
});
self.skipWaiting();
