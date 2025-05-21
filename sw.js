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
const entries = [{"revision":"e7aba51235269fea27456ceb60903fd3","url":"404.html"},{"revision":"3b29c3d8684839f896a248a29f964b63","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.C-mnupIW.js"},{"revision":null,"url":"assets/add-ons.md.C-mnupIW.lean.js"},{"revision":null,"url":"assets/app.Dr4zuvep.js"},{"revision":null,"url":"assets/chunks/@localSearchIndexroot.CFiSveOZ.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.DvmxuIkN.js"},{"revision":null,"url":"assets/chunks/CodeToggle.vue_vue_type_style_index_0_lang.0dMRO6RN.js"},{"revision":null,"url":"assets/chunks/commonjsHelpers.CqkleIqs.js"},{"revision":null,"url":"assets/chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js"},{"revision":null,"url":"assets/chunks/CourseLink.vue_vue_type_script_setup_true_lang.C6fezzip.js"},{"revision":null,"url":"assets/chunks/demo.client.B3eYuVV6.js"},{"revision":null,"url":"assets/chunks/demo.client.C0VUN_F6.js"},{"revision":null,"url":"assets/chunks/demo.client.C9VaA5IV.js"},{"revision":null,"url":"assets/chunks/demo.client.DihnMgI9.js"},{"revision":null,"url":"assets/chunks/demo.client.DV6Fto9T.js"},{"revision":null,"url":"assets/chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js"},{"revision":null,"url":"assets/chunks/filters.DSKJ-Ken.js"},{"revision":null,"url":"assets/chunks/focus-trap.esm.DYjLEhSG.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js"},{"revision":null,"url":"assets/chunks/fuse.Ch1WBRTM.js"},{"revision":null,"url":"assets/chunks/general.CGRH32nb.js"},{"revision":null,"url":"assets/chunks/index.15HklqYA.js"},{"revision":null,"url":"assets/chunks/index.6GSJq-DW.js"},{"revision":null,"url":"assets/chunks/index.AoACseWR.js"},{"revision":null,"url":"assets/chunks/index.B-Fw35U8.js"},{"revision":null,"url":"assets/chunks/index.B1GOtqK5.js"},{"revision":null,"url":"assets/chunks/index.B25tMPdd.js"},{"revision":null,"url":"assets/chunks/index.B5l6yAbo.js"},{"revision":null,"url":"assets/chunks/index.B9YDcppF.js"},{"revision":null,"url":"assets/chunks/index.BA1LZFO1.js"},{"revision":null,"url":"assets/chunks/index.BcBRhzZe.js"},{"revision":null,"url":"assets/chunks/index.BdITrxyF.js"},{"revision":null,"url":"assets/chunks/index.Be5YHGp1.js"},{"revision":null,"url":"assets/chunks/index.BhQfUhOc.js"},{"revision":null,"url":"assets/chunks/index.bHUclc0j.js"},{"revision":null,"url":"assets/chunks/index.BrEgUpwD.js"},{"revision":null,"url":"assets/chunks/index.BTrDBEOF.js"},{"revision":null,"url":"assets/chunks/index.BU82Ue8Z.js"},{"revision":null,"url":"assets/chunks/index.BXXSfDxN.js"},{"revision":null,"url":"assets/chunks/index.BYLbPqZQ.js"},{"revision":null,"url":"assets/chunks/index.BZoHrk8M.js"},{"revision":null,"url":"assets/chunks/index.C1bUUpH2.js"},{"revision":null,"url":"assets/chunks/index.C1N7ztJU.js"},{"revision":null,"url":"assets/chunks/index.CBLDMrL2.js"},{"revision":null,"url":"assets/chunks/index.CbsoJ8xH.js"},{"revision":null,"url":"assets/chunks/index.CJhb0m6G.js"},{"revision":null,"url":"assets/chunks/index.CjqLcEg_.js"},{"revision":null,"url":"assets/chunks/index.CN5eib6g.js"},{"revision":null,"url":"assets/chunks/index.CsIOb0R_.js"},{"revision":null,"url":"assets/chunks/index.CUTfUKb-.js"},{"revision":null,"url":"assets/chunks/index.CVfU17FT.js"},{"revision":null,"url":"assets/chunks/index.CyaQpZZu.js"},{"revision":null,"url":"assets/chunks/index.D_D4rQ2Q.js"},{"revision":null,"url":"assets/chunks/index.D-ZEots4.js"},{"revision":null,"url":"assets/chunks/index.D214adEv.js"},{"revision":null,"url":"assets/chunks/index.D65XGBFb.js"},{"revision":null,"url":"assets/chunks/index.DDCcc9ag.js"},{"revision":null,"url":"assets/chunks/index.DFuyUndF.js"},{"revision":null,"url":"assets/chunks/index.DG0WMUxM.js"},{"revision":null,"url":"assets/chunks/index.DHaTTpHA.js"},{"revision":null,"url":"assets/chunks/index.DHr9lByg.js"},{"revision":null,"url":"assets/chunks/index.DjemWIQ4.js"},{"revision":null,"url":"assets/chunks/index.DK97_WvT.js"},{"revision":null,"url":"assets/chunks/index.DMx8Y1Rz.js"},{"revision":null,"url":"assets/chunks/index.Dn4UagWc.js"},{"revision":null,"url":"assets/chunks/index.Dn9jmOT9.js"},{"revision":null,"url":"assets/chunks/index.Do_-x07U.js"},{"revision":null,"url":"assets/chunks/index.DQ-f8uGq.js"},{"revision":null,"url":"assets/chunks/index.DTz-NYDw.js"},{"revision":null,"url":"assets/chunks/index.DV1Rw-t_.js"},{"revision":null,"url":"assets/chunks/index.DvdvV9Up.js"},{"revision":null,"url":"assets/chunks/index.DVkydqYa.js"},{"revision":null,"url":"assets/chunks/index.DXXiP3sM.js"},{"revision":null,"url":"assets/chunks/index.Fj4xYP_0.js"},{"revision":null,"url":"assets/chunks/index.KAi2LWa5.js"},{"revision":null,"url":"assets/chunks/index.LAl3tXDU.js"},{"revision":null,"url":"assets/chunks/index.MqNm2vRe.js"},{"revision":null,"url":"assets/chunks/index.O71iTrlu.js"},{"revision":null,"url":"assets/chunks/index.pQjNoXQ1.js"},{"revision":null,"url":"assets/chunks/index.RnJrKk7C.js"},{"revision":null,"url":"assets/chunks/index.sLBXccQd.js"},{"revision":null,"url":"assets/chunks/index.T5yUHUSd.js"},{"revision":null,"url":"assets/chunks/index.u2qoWwGK.js"},{"revision":null,"url":"assets/chunks/index.vsf6NWZK.js"},{"revision":null,"url":"assets/chunks/Key.vue_vue_type_script_setup_true_lang.CFHGzSwU.js"},{"revision":null,"url":"assets/chunks/metadata.HXIr2NKd.js"},{"revision":null,"url":"assets/chunks/Note.B_ue-6bE.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.DlAUqK2U.js"},{"revision":null,"url":"assets/chunks/resolve-element.CjOR-mWi.js"},{"revision":null,"url":"assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.DCkephXf.js"},{"revision":null,"url":"assets/chunks/utils.B5e_uQLX.js"},{"revision":null,"url":"assets/chunks/VPLocalSearchBox.D91pKGSq.js"},{"revision":null,"url":"assets/components_README.md.DtUoISxY.js"},{"revision":null,"url":"assets/components_README.md.DtUoISxY.lean.js"},{"revision":null,"url":"assets/contributing.md.DrVJgOl2.js"},{"revision":null,"url":"assets/contributing.md.DrVJgOl2.lean.js"},{"revision":null,"url":"assets/core__template_index.md.Ciam_4DV.js"},{"revision":null,"url":"assets/core__template_index.md.Ciam_4DV.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.CfhOaVwb.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.CfhOaVwb.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.B98XtNbl.js"},{"revision":null,"url":"assets/core_computedInject_index.md.B98XtNbl.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CdJB_Kvo.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CdJB_Kvo.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.BWoEXyT5.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.BWoEXyT5.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.noDdkfmU.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.noDdkfmU.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.CK2p-qGV.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.CK2p-qGV.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DZCtTvND.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DZCtTvND.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.BWY-Ojbc.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.BWY-Ojbc.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.lanit5hd.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.lanit5hd.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.aztkXZpy.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.aztkXZpy.lean.js"},{"revision":null,"url":"assets/core_README.md.q_-fwFg0.js"},{"revision":null,"url":"assets/core_README.md.q_-fwFg0.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.BP777b57.js"},{"revision":null,"url":"assets/core_templateRef_index.md.BP777b57.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.ByrkEIZZ.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.ByrkEIZZ.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.BnmBIN9f.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.BnmBIN9f.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.CG420nZx.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.CG420nZx.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BAue308q.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BAue308q.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.D8cOaimc.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.D8cOaimc.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.BB-cmSOl.js"},{"revision":null,"url":"assets/core_useBase64_index.md.BB-cmSOl.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.GbWbHvZO.js"},{"revision":null,"url":"assets/core_useBattery_index.md.GbWbHvZO.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.CURoQx5I.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.CURoQx5I.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.RJ5AbTk9.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.RJ5AbTk9.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.BUzewSBL.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.BUzewSBL.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.B-p1c8P5.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.B-p1c8P5.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.DYHvUtFF.js"},{"revision":null,"url":"assets/core_useCached_index.md.DYHvUtFF.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.CJM6uMSI.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.CJM6uMSI.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.T-C1d1xQ.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.T-C1d1xQ.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.C4hMyg8J.js"},{"revision":null,"url":"assets/core_useCloned_index.md.C4hMyg8J.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.B0lOi8Hg.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.B0lOi8Hg.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.BIb69Lio.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.BIb69Lio.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.D5CKK2Rd.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.D5CKK2Rd.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.Btzx-_Uq.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.Btzx-_Uq.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.7cMYJsPc.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.7cMYJsPc.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.u8-2NNiZ.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.u8-2NNiZ.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.C06xi1fi.js"},{"revision":null,"url":"assets/core_useDark_index.md.C06xi1fi.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.C6Xryn35.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.C6Xryn35.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.mNNE20Rk.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.mNNE20Rk.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.ctcbbG85.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.ctcbbG85.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.BWJhf1Ce.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.BWJhf1Ce.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.Bz0HJiNv.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.Bz0HJiNv.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.UCwwqL4Y.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.UCwwqL4Y.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DTiI9z3z.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DTiI9z3z.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.L2slylZP.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.L2slylZP.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.DhZ4bViN.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.DhZ4bViN.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.DaJKO18L.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.DaJKO18L.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.Q6bdQVUS.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.Q6bdQVUS.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.CfDcutvs.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.CfDcutvs.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.Cn9LDwPd.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.Cn9LDwPd.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.IOXpTLAV.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.IOXpTLAV.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.mZjQfWkO.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.mZjQfWkO.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.CzBuwUx0.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.CzBuwUx0.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.T9fptIOV.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.T9fptIOV.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.DX5Y_PgO.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.DX5Y_PgO.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CTQ-1Hrv.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CTQ-1Hrv.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.D4taNe4k.js"},{"revision":null,"url":"assets/core_useFetch_index.md.D4taNe4k.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BZBc5oWY.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BZBc5oWY.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.BKqoRouy.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.BKqoRouy.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.Bgh8Rpez.js"},{"revision":null,"url":"assets/core_useFocus_index.md.Bgh8Rpez.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.CD9WnLA9.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.CD9WnLA9.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.CD3QsFbY.js"},{"revision":null,"url":"assets/core_useFps_index.md.CD3QsFbY.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.DXbdBinR.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.DXbdBinR.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CuHINK25.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CuHINK25.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.F3yaer4H.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.F3yaer4H.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.RxGXMieu.js"},{"revision":null,"url":"assets/core_useIdle_index.md.RxGXMieu.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.D8BGF1lb.js"},{"revision":null,"url":"assets/core_useImage_index.md.D8BGF1lb.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.BVu29Is9.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.BVu29Is9.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.DUrosVlL.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.DUrosVlL.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BpzG6AdK.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BpzG6AdK.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.EPZMWMfa.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.EPZMWMfa.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.8P4dkoWG.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.8P4dkoWG.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.V9zMUqPg.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.V9zMUqPg.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BCMDdn1A.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BCMDdn1A.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.DMPFpGOH.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.DMPFpGOH.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.uP27MT1z.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.uP27MT1z.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.mLk8cekw.js"},{"revision":null,"url":"assets/core_useMemory_index.md.mLk8cekw.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.BBzynW2Q.js"},{"revision":null,"url":"assets/core_useMounted_index.md.BBzynW2Q.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.BP3n0OFN.js"},{"revision":null,"url":"assets/core_useMouse_index.md.BP3n0OFN.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.D-8iDrjG.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.D-8iDrjG.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.DrsjjURN.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.DrsjjURN.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.DsPDkzd5.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.DsPDkzd5.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.CHrzEBPn.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.CHrzEBPn.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.Dy3TwjWi.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.Dy3TwjWi.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.D40kvEY5.js"},{"revision":null,"url":"assets/core_useNow_index.md.D40kvEY5.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.rjZVZe-E.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.rjZVZe-E.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DjA4wWOH.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DjA4wWOH.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.oblmtq-A.js"},{"revision":null,"url":"assets/core_useOnline_index.md.oblmtq-A.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.Bilo55xL.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.Bilo55xL.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.CuHW4SWd.js"},{"revision":null,"url":"assets/core_useParallax_index.md.CuHW4SWd.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DMlU1mj_.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DMlU1mj_.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.DMMwa4Li.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.DMMwa4Li.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.Dj5DdhLc.js"},{"revision":null,"url":"assets/core_usePermission_index.md.Dj5DdhLc.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Bb7hGcMn.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Bb7hGcMn.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.B6H9BOhp.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.B6H9BOhp.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.CLzc1Yze.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.CLzc1Yze.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.WmuADhjh.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.WmuADhjh.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.CjjFBi-r.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.CjjFBi-r.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BhXyLYcs.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BhXyLYcs.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.B6CYLkOf.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.B6CYLkOf.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.ocCMwEUz.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.ocCMwEUz.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CnifjStX.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CnifjStX.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.8VDcHKzx.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.8VDcHKzx.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.D3m-fgsy.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.D3m-fgsy.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DvQUBpmY.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DvQUBpmY.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.Dcu9Qz4L.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.Dcu9Qz4L.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.-TMnjnAb.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.-TMnjnAb.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.BZKbydFo.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.BZKbydFo.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B5YJnClL.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B5YJnClL.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.BBc0AiL2.js"},{"revision":null,"url":"assets/core_useScroll_index.md.BBc0AiL2.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.BXkjdbcS.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.BXkjdbcS.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.0BMPTTLQ.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.0BMPTTLQ.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.DLyTDPVo.js"},{"revision":null,"url":"assets/core_useShare_index.md.DLyTDPVo.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.CeFdaZ89.js"},{"revision":null,"url":"assets/core_useSorted_index.md.CeFdaZ89.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.mN9xMmP8.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.mN9xMmP8.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.VSF2TgSx.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.VSF2TgSx.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.BduCTNTi.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.BduCTNTi.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.CPtWZBLc.js"},{"revision":null,"url":"assets/core_useStepper_index.md.CPtWZBLc.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.BaE7US1P.js"},{"revision":null,"url":"assets/core_useStorage_index.md.BaE7US1P.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.DisKHvDw.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.DisKHvDw.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.DajuKPAX.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.DajuKPAX.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.D9jD1_hD.js"},{"revision":null,"url":"assets/core_useSupported_index.md.D9jD1_hD.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.Cabh8zYC.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.Cabh8zYC.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.CBg3ucGX.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.CBg3ucGX.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Cbl0SpLK.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Cbl0SpLK.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md._fLomQPP.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md._fLomQPP.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.CZU3xO-P.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.CZU3xO-P.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.CXmLZlkg.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.CXmLZlkg.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.DtsU-pOF.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.DtsU-pOF.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.B0cPCIMG.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.B0cPCIMG.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.kmshiENs.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.kmshiENs.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.IAgjjz80.js"},{"revision":null,"url":"assets/core_useTitle_index.md.IAgjjz80.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.D0KbHPJ4.js"},{"revision":null,"url":"assets/core_useTransition_index.md.D0KbHPJ4.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.CwZtn6vt.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.CwZtn6vt.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.DIeBV4iG.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.DIeBV4iG.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.BwfVDby5.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.BwfVDby5.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.UuBv7TIZ.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.UuBv7TIZ.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.CQ73mVX_.js"},{"revision":null,"url":"assets/core_useVModel_index.md.CQ73mVX_.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.BVvCQRRc.js"},{"revision":null,"url":"assets/core_useVModels_index.md.BVvCQRRc.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.DG1BbvhT.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.DG1BbvhT.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.CoYxiGxi.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.CoYxiGxi.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DnyPnl3E.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DnyPnl3E.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.3myLWmBU.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.3myLWmBU.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.B0R-TKuo.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.B0R-TKuo.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BnJLaNWG.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BnJLaNWG.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.XUF9VmB7.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.XUF9VmB7.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.BfMiO_bj.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.BfMiO_bj.lean.js"},{"revision":null,"url":"assets/ecosystem.md.CJ-_t9lG.js"},{"revision":null,"url":"assets/ecosystem.md.CJ-_t9lG.lean.js"},{"revision":null,"url":"assets/electron_README.md.Cbfa2eCU.js"},{"revision":null,"url":"assets/electron_README.md.Cbfa2eCU.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bh7-1DVa.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bh7-1DVa.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.BAzzrFN8.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.BAzzrFN8.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.vjPO1p33.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.vjPO1p33.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.6BEj-sXp.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.6BEj-sXp.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.CO7OmFZK.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.CO7OmFZK.lean.js"},{"revision":null,"url":"assets/export-size.md.zlaTNoOW.js"},{"revision":null,"url":"assets/export-size.md.zlaTNoOW.lean.js"},{"revision":null,"url":"assets/firebase_README.md.Bg-PtxjK.js"},{"revision":null,"url":"assets/firebase_README.md.Bg-PtxjK.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.BIHKvkOI.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.BIHKvkOI.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.iaCvdjf2.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.iaCvdjf2.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.BsX4g71c.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.BsX4g71c.lean.js"},{"revision":null,"url":"assets/functions.md.D2j5hD29.js"},{"revision":null,"url":"assets/functions.md.D2j5hD29.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.CvpyOB4C.js"},{"revision":null,"url":"assets/guide_best-practice.md.CvpyOB4C.lean.js"},{"revision":null,"url":"assets/guide_components.md.DMAL44qV.js"},{"revision":null,"url":"assets/guide_components.md.DMAL44qV.lean.js"},{"revision":null,"url":"assets/guide_config.md.DvbmIM40.js"},{"revision":null,"url":"assets/guide_config.md.DvbmIM40.lean.js"},{"revision":null,"url":"assets/guide_index.md.BKhaldhZ.js"},{"revision":null,"url":"assets/guide_index.md.BKhaldhZ.lean.js"},{"revision":null,"url":"assets/guidelines.md.DnqCdBCN.js"},{"revision":null,"url":"assets/guidelines.md.DnqCdBCN.lean.js"},{"revision":null,"url":"assets/index.md.CU09VY3H.js"},{"revision":null,"url":"assets/index.md.CU09VY3H.lean.js"},{"revision":null,"url":"assets/integrations_README.md.6g-5q8rq.js"},{"revision":null,"url":"assets/integrations_README.md.6g-5q8rq.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.D559dnQ5.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.D559dnQ5.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.aH2VFkg7.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.aH2VFkg7.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.CjEYgOrx.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.CjEYgOrx.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.gqJBjVdV.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.gqJBjVdV.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BicQnraw.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BicQnraw.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.ClIkiafy.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.ClIkiafy.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.H34yzumd.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.H34yzumd.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.BYs4Fvw-.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.BYs4Fvw-.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.UQtrYvMt.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.UQtrYvMt.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DfZ8DjdF.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DfZ8DjdF.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.X-0zJ3ok.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.X-0zJ3ok.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BxT6gcj2.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BxT6gcj2.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.9UiZk9GZ.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.9UiZk9GZ.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.ChW8XTKy.js"},{"revision":null,"url":"assets/math_createProjection_index.md.ChW8XTKy.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.K4NKTzf3.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.K4NKTzf3.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.DF1kEMZr.js"},{"revision":null,"url":"assets/math_logicNot_index.md.DF1kEMZr.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.BnOX8d0M.js"},{"revision":null,"url":"assets/math_logicOr_index.md.BnOX8d0M.lean.js"},{"revision":null,"url":"assets/math_README.md.CPQEnsm_.js"},{"revision":null,"url":"assets/math_README.md.CPQEnsm_.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.CvAAIJQ8.js"},{"revision":null,"url":"assets/math_useAbs_index.md.CvAAIJQ8.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.DQwYHlKP.js"},{"revision":null,"url":"assets/math_useAverage_index.md.DQwYHlKP.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.GTBBX0CA.js"},{"revision":null,"url":"assets/math_useCeil_index.md.GTBBX0CA.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.B9KOle1e.js"},{"revision":null,"url":"assets/math_useClamp_index.md.B9KOle1e.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.DFlObeyf.js"},{"revision":null,"url":"assets/math_useFloor_index.md.DFlObeyf.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.FvDFzJqp.js"},{"revision":null,"url":"assets/math_useMath_index.md.FvDFzJqp.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.zJvi1REE.js"},{"revision":null,"url":"assets/math_useMax_index.md.zJvi1REE.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.D5JKASDJ.js"},{"revision":null,"url":"assets/math_useMin_index.md.D5JKASDJ.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.BVZehdX4.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.BVZehdX4.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.DU2VEKKn.js"},{"revision":null,"url":"assets/math_useProjection_index.md.DU2VEKKn.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.DMeTVR9H.js"},{"revision":null,"url":"assets/math_useRound_index.md.DMeTVR9H.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.DD5oK8AU.js"},{"revision":null,"url":"assets/math_useSum_index.md.DD5oK8AU.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.DdUrYBYs.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.DdUrYBYs.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.BqwpGcEs.js"},{"revision":null,"url":"assets/nuxt_README.md.BqwpGcEs.lean.js"},{"revision":null,"url":"assets/router_README.md.CKglQRCF.js"},{"revision":null,"url":"assets/router_README.md.CKglQRCF.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.C8ftP3JH.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.C8ftP3JH.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DNkVf7gQ.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DNkVf7gQ.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.C9Nx0yEL.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.C9Nx0yEL.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.BrQFb_mu.js"},{"revision":null,"url":"assets/rxjs_from_index.md.BrQFb_mu.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.Bvd-phnH.js"},{"revision":null,"url":"assets/rxjs_README.md.Bvd-phnH.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.DenEOlU1.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.DenEOlU1.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.D1cHTw7O.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.D1cHTw7O.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C1F8_41C.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C1F8_41C.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.DEBifdsy.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.DEBifdsy.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BCe-DtbB.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BCe-DtbB.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.C2sfUvHN.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.C2sfUvHN.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.BJsL-PEN.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.BJsL-PEN.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.Dc8E984R.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.Dc8E984R.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.D-4YUPLl.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.D-4YUPLl.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.D-XE8Q15.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.D-XE8Q15.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.41_BksWV.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.41_BksWV.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.DXN_3_bU.js"},{"revision":null,"url":"assets/shared_createRef_index.md.DXN_3_bU.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.DtXsnZ_9.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.DtXsnZ_9.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.wws8AmyV.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.wws8AmyV.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.BTZs38gF.js"},{"revision":null,"url":"assets/shared_get_index.md.BTZs38gF.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.DZABmjhH.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.DZABmjhH.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.Colo4AsG.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.Colo4AsG.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.BaI76szi.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.BaI76szi.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.CyoExGrL.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.CyoExGrL.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.B05nMKY_.js"},{"revision":null,"url":"assets/shared_reactify_index.md.B05nMKY_.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.D6YRQKbR.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.D6YRQKbR.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.Bf4B-JP2.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.Bf4B-JP2.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.BB-WBMiK.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.BB-WBMiK.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.BW4puQY3.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.BW4puQY3.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.DyQZ41Z1.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.DyQZ41Z1.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.Cr301LSX.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.Cr301LSX.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.ciWRsq52.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.ciWRsq52.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.DyUT_gng.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.DyUT_gng.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.9fikKmtb.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.9fikKmtb.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.CnGYjb_u.js"},{"revision":null,"url":"assets/shared_set_index.md.CnGYjb_u.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.B6PQtVoN.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.B6PQtVoN.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.jcKTgcsE.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.jcKTgcsE.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.B_tKSU1N.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.B_tKSU1N.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.Tvicvf4t.js"},{"revision":null,"url":"assets/shared_toRef_index.md.Tvicvf4t.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.D7W5-YuE.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.D7W5-YuE.lean.js"},{"revision":null,"url":"assets/shared_toValue_index.md.iNI7kqb3.js"},{"revision":null,"url":"assets/shared_toValue_index.md.iNI7kqb3.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.Byn0dXbn.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.Byn0dXbn.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.C-TZLU7o.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.C-TZLU7o.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.DEYf_zqY.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.DEYf_zqY.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.DLrTOQPg.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.DLrTOQPg.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.D4Egmr1c.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.D4Egmr1c.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.BDok5JmA.js"},{"revision":null,"url":"assets/shared_until_index.md.BDok5JmA.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.B_1bACZv.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.B_1bACZv.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.DMgerwjT.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.DMgerwjT.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.B05yZLGI.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.B05yZLGI.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.DWOjkgIc.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.DWOjkgIc.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BJ22laJT.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BJ22laJT.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.DC-OCKxL.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.DC-OCKxL.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.B-d538WK.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.B-d538WK.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.CHJlUGk4.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.CHJlUGk4.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.BhfwPGU4.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.BhfwPGU4.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.tQABLbU1.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.tQABLbU1.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.oU1wW-S4.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.oU1wW-S4.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.B8LYgplF.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.B8LYgplF.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.CeeZOWEg.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.CeeZOWEg.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.Ds9jGGLz.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.Ds9jGGLz.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.52VRFjj2.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.52VRFjj2.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.BNUweDMb.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.BNUweDMb.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.MynzUB8T.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.MynzUB8T.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.DI0t_C3g.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.DI0t_C3g.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.C4UY1e3J.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.C4UY1e3J.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.C0g8GzgM.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.C0g8GzgM.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.BiIqjpwX.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.BiIqjpwX.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.CB3lL87d.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.CB3lL87d.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Bi6hE-yY.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Bi6hE-yY.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.tHEcsz2z.js"},{"revision":null,"url":"assets/shared_useToString_index.md.tHEcsz2z.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.DChzc7xY.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.DChzc7xY.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.BLAtyhtL.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.BLAtyhtL.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.KBpN24py.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.KBpN24py.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.C0JmOvxt.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.C0JmOvxt.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.DJN2WjkT.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.DJN2WjkT.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.D03sjIdV.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.D03sjIdV.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.Bpuyl1sN.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.Bpuyl1sN.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Cd9rpPXz.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Cd9rpPXz.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.7L0j-0Ix.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.7L0j-0Ix.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.B9mpKD77.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.B9mpKD77.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.BCCU3pb1.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.BCCU3pb1.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.Dnj7UN62.js"},{"revision":null,"url":"assets/shared_whenever_index.md.Dnj7UN62.lean.js"},{"revision":null,"url":"assets/style.BUy81xpT.css"},{"revision":null,"url":"assets/team.md.DkZ3tfMR.js"},{"revision":null,"url":"assets/team.md.DkZ3tfMR.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.DjI8e4sG.js"},{"revision":null,"url":"assets/why-no-translations.md.DjI8e4sG.lean.js"},{"revision":"1f787dece86a2d31a7c76bf10d5ca756","url":"badge-function-count.svg"},{"revision":"488f295e0cc20cf8200af9f975b51442","url":"components/README.html"},{"revision":"11be5caaff0064f74b0f4bc88bbb6533","url":"contributing.html"},{"revision":"acb34aca2db7ca9d9dafe7b883864782","url":"core/_template/index.html"},{"revision":"960fd70adc6dd6c7782898136825fe3f","url":"core/computedAsync/index.html"},{"revision":"8aab56429bfcd64fc8e701ebf922b47d","url":"core/computedInject/index.html"},{"revision":"48017a23030e035e576f0fcab3c79eac","url":"core/createReusableTemplate/index.html"},{"revision":"c009695b0f9540c817b8c21f1d9d88e8","url":"core/createTemplatePromise/index.html"},{"revision":"ff783560140065cbce5a5fbe8b845335","url":"core/createUnrefFn/index.html"},{"revision":"f60eebacb977c2f41ff8669a482833ed","url":"core/onClickOutside/index.html"},{"revision":"c6d016de3e41fb10edc512468c11d06e","url":"core/onElementRemoval/index.html"},{"revision":"5cb6aba29783507a8a0e975e131f66e2","url":"core/onKeyStroke/index.html"},{"revision":"3fc35a92e9fc8c085a525616619f2999","url":"core/onLongPress/index.html"},{"revision":"bb1bd9f4ffcc46e5f40682c7cdc18ca0","url":"core/onStartTyping/index.html"},{"revision":"7266ef4ae5ac16bf41df26ee4e768547","url":"core/README.html"},{"revision":"46052d9a0924b1518fb74ee144f14d84","url":"core/templateRef/index.html"},{"revision":"f808d6e0243075165f2b3be03c18ec88","url":"core/unrefElement/index.html"},{"revision":"091c381123b6567ee0bbb8c45afd218a","url":"core/useActiveElement/index.html"},{"revision":"4c20047aaeb833fe3773f5ebf4d32b76","url":"core/useAnimate/index.html"},{"revision":"eefc44759924f3dd54d653f23aa33c58","url":"core/useAsyncQueue/index.html"},{"revision":"62f9cb23cd2b69f8b1c94543dcf1f3bf","url":"core/useAsyncState/index.html"},{"revision":"dc38be7ef39c490b8306d273a1dcd20a","url":"core/useBase64/index.html"},{"revision":"bf7d1118c756c9e56d8f5f70f0037455","url":"core/useBattery/index.html"},{"revision":"0898188a9a7996e78ea9b48b070f215e","url":"core/useBluetooth/index.html"},{"revision":"31b4488f2499228912f9e64b6d8fe450","url":"core/useBreakpoints/index.html"},{"revision":"0fdfb8416a33db96db6c5985ed8be0fc","url":"core/useBroadcastChannel/index.html"},{"revision":"a9359d4bd5742b3afcfde17d63b4f4bb","url":"core/useBrowserLocation/index.html"},{"revision":"c5316653e5c5c78dd7764c0e064a7348","url":"core/useCached/index.html"},{"revision":"fb8bb11653177e16feee2b7bdbe98b48","url":"core/useClipboard/index.html"},{"revision":"d951bdef71dc56b95e0fbe8f1eba6555","url":"core/useClipboardItems/index.html"},{"revision":"299ed6a1f7f115693db11a6afce62136","url":"core/useCloned/index.html"},{"revision":"98c4e553d21d09508ac7ab7f512611b8","url":"core/useColorMode/index.html"},{"revision":"88aa4f08aa7ffa44230231f1f510f0c7","url":"core/useConfirmDialog/index.html"},{"revision":"d0cd65fb4ccf6acd1eb18c210d494f84","url":"core/useCountdown/index.html"},{"revision":"fa17e6520882b11eac0effd44042fc14","url":"core/useCssVar/index.html"},{"revision":"1b50b6cb91c1ab5631c427b0b12d98ae","url":"core/useCurrentElement/index.html"},{"revision":"c49355ee947f30f95d8d2d50e9e8298f","url":"core/useCycleList/index.html"},{"revision":"0cf10582426d6b54001992495cddb993","url":"core/useDark/index.html"},{"revision":"9dc8748648e48b6f9297049dee084678","url":"core/useDebouncedRefHistory/index.html"},{"revision":"90a12abdbacae5547724ff32be3911b3","url":"core/useDeviceMotion/index.html"},{"revision":"b49fb4771f91b19f1fb1c5c8bd1cc3b3","url":"core/useDeviceOrientation/index.html"},{"revision":"521e3e6039a2a4e0a368c03be2464e91","url":"core/useDevicePixelRatio/index.html"},{"revision":"9739fb888e3604487308a9fb73b09d79","url":"core/useDevicesList/index.html"},{"revision":"aff2dc118c1a39d6b8288308bf871ade","url":"core/useDisplayMedia/index.html"},{"revision":"71ba118a823aab2b1aed2ccc3a7cb163","url":"core/useDocumentVisibility/index.html"},{"revision":"173c35ea50b9b1ef4f1b1384ab7cb672","url":"core/useDraggable/index.html"},{"revision":"31131dd6eda1f1a6f5996395a080dc06","url":"core/useDropZone/index.html"},{"revision":"e6c8e03c11988df62c63aaa7de48ff66","url":"core/useElementBounding/index.html"},{"revision":"2664f63330bbb87e91ecf18050c07042","url":"core/useElementByPoint/index.html"},{"revision":"6b66de8e8ed59e71c32176143bc023dc","url":"core/useElementHover/index.html"},{"revision":"b19f2ca1fe8d24b121558b8799535412","url":"core/useElementSize/index.html"},{"revision":"470a2d5e576898928fc5614f7351a3e8","url":"core/useElementVisibility/index.html"},{"revision":"786ce5a416701c19e36967cc493530b2","url":"core/useEventBus/index.html"},{"revision":"a8ef07a8ef18b4c6224b27e65b33c423","url":"core/useEventListener/index.html"},{"revision":"5af17ba45f5385ec21263972e9ee5c99","url":"core/useEventSource/index.html"},{"revision":"4cbecb39053f253f904f52f2b768fa9d","url":"core/useEyeDropper/index.html"},{"revision":"41721e96e056deed42467f9277afe532","url":"core/useFavicon/index.html"},{"revision":"5b6d95ca6eba6cc4c174bb2af66a8cbd","url":"core/useFetch/index.html"},{"revision":"1a02cf16dc4ae4b2ac4d2a6748aed934","url":"core/useFileDialog/index.html"},{"revision":"6335a25de5931690a31ba60a455bd22e","url":"core/useFileSystemAccess/index.html"},{"revision":"0a452ce165df77f04130080a944f8390","url":"core/useFocus/index.html"},{"revision":"a15109db159bfcdbbfef7ae1d1c1e973","url":"core/useFocusWithin/index.html"},{"revision":"f7205ce9fd9ad110ba6bda748e184f23","url":"core/useFps/index.html"},{"revision":"c2c855fb6e92f97e2b809df78e770f60","url":"core/useFullscreen/index.html"},{"revision":"48e23a64e8b402fcd6f729416aacd11f","url":"core/useGamepad/index.html"},{"revision":"80ba29d44db3b17612ad6d6e29038afe","url":"core/useGeolocation/index.html"},{"revision":"6861d715b1709c8a48073aab5b5eb25d","url":"core/useIdle/index.html"},{"revision":"89833b351334c359c0b8d61181500b73","url":"core/useImage/index.html"},{"revision":"06f6a8ff8f7bad663d7de378b6778782","url":"core/useInfiniteScroll/index.html"},{"revision":"727fee5a397fa7464801ed195a02e3e1","url":"core/useIntersectionObserver/index.html"},{"revision":"9c1b146ce081bda1e47e2172fb667358","url":"core/useKeyModifier/index.html"},{"revision":"529362f66e84c0c02d176ef1f713ed02","url":"core/useLocalStorage/index.html"},{"revision":"553ccd7c268512be57f5345ae4851865","url":"core/useMagicKeys/index.html"},{"revision":"310e191fb213ab2a28663a91d9ac861d","url":"core/useManualRefHistory/index.html"},{"revision":"3b9312ba7bad6c3770457be8ed078a2a","url":"core/useMediaControls/index.html"},{"revision":"e5a348fadd3ca8cff2bb0f28c94615f6","url":"core/useMediaQuery/index.html"},{"revision":"bccad403adf0088f9b6f793f544f459a","url":"core/useMemoize/index.html"},{"revision":"6c6717f64e56d35fe7698ab07b52b71f","url":"core/useMemory/index.html"},{"revision":"8db7bf46a6a404464ce60ee40c50312b","url":"core/useMounted/index.html"},{"revision":"6447a713a966fae9bf3eeff4ac6b7b3d","url":"core/useMouse/index.html"},{"revision":"4fd5b11472afe0f38489d54b0da97329","url":"core/useMouseInElement/index.html"},{"revision":"fb917a0987a26717f9ea48138dca4843","url":"core/useMousePressed/index.html"},{"revision":"e371cb73bace8144c604ddd28575da81","url":"core/useMutationObserver/index.html"},{"revision":"9c8bd72a5f9855a0dc39ed7bd3d65901","url":"core/useNavigatorLanguage/index.html"},{"revision":"c1a82582349cdeea015d9307afbae6c4","url":"core/useNetwork/index.html"},{"revision":"11ed25c82170be1bc755b54fdcebb2ce","url":"core/useNow/index.html"},{"revision":"a90cee3d27d8e8ebeba47a11a0a21703","url":"core/useObjectUrl/index.html"},{"revision":"97a4ddbafc9b72392954fdd453c8ac99","url":"core/useOffsetPagination/index.html"},{"revision":"04bd37907e43c4d8711910f50c64ad15","url":"core/useOnline/index.html"},{"revision":"11d1a528ce111b72c17881f022e5f0a0","url":"core/usePageLeave/index.html"},{"revision":"1c5256bd6f11c4231d8c40fd76469ea4","url":"core/useParallax/index.html"},{"revision":"142c71d8fe88f41e1248745de2783ec5","url":"core/useParentElement/index.html"},{"revision":"a532bb96443418019d2580d7b99a7515","url":"core/usePerformanceObserver/index.html"},{"revision":"d0f5c29a3791802828ad7b3de7cc9c38","url":"core/usePermission/index.html"},{"revision":"c8cc6e58cc752d5c3eedce2ef05fb340","url":"core/usePointer/index.html"},{"revision":"5655f938f0f9ad917dffac0f3e95ea78","url":"core/usePointerLock/index.html"},{"revision":"b5bda36c53fe7294b20509656d8fcfb6","url":"core/usePointerSwipe/index.html"},{"revision":"793d159b404a512ef83ee8f7fe962cc8","url":"core/usePreferredColorScheme/index.html"},{"revision":"a4ad94f20a907b4efb255570bdebe4a7","url":"core/usePreferredContrast/index.html"},{"revision":"e2d56046b52ca360b1f1a5be0f3050bc","url":"core/usePreferredDark/index.html"},{"revision":"02d5d7e6de46a78fa3fac5b6cf9f4990","url":"core/usePreferredLanguages/index.html"},{"revision":"bfa4088fb06179ca2a0a7daff254181b","url":"core/usePreferredReducedMotion/index.html"},{"revision":"15d9d8f63483b4ad92bbcf5f54f7caef","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"ef790ef2ba26bfdbeadf59494b1d295f","url":"core/usePrevious/index.html"},{"revision":"4d5e6e130d23198405ccc775c72a9a3a","url":"core/useRafFn/index.html"},{"revision":"3b1781bc20539271d3a39e9054ff9cda","url":"core/useRefHistory/index.html"},{"revision":"9f1075d8bdf1105828c5f48a01324af9","url":"core/useResizeObserver/index.html"},{"revision":"fce6d28c6be4afe985a72f7543bed828","url":"core/useScreenOrientation/index.html"},{"revision":"cb32d68552dee0bfcd07d1e035a52be0","url":"core/useScreenSafeArea/index.html"},{"revision":"89c725c3c3cc72dc09b71edc52425050","url":"core/useScriptTag/index.html"},{"revision":"faecaee8d58f9cc0fa32baea799f323a","url":"core/useScroll/index.html"},{"revision":"a3a3f5578bfe319d0b60d6b04a9ff9c1","url":"core/useScrollLock/index.html"},{"revision":"074a1e2080ef08859801cbd8ce9727d5","url":"core/useSessionStorage/index.html"},{"revision":"ad2170553aacd4f351a032851a85c097","url":"core/useShare/index.html"},{"revision":"bfd4fb40dd2eb110506d356a5151ec65","url":"core/useSorted/index.html"},{"revision":"48e257f00df77b67efa370932df1bf25","url":"core/useSpeechRecognition/index.html"},{"revision":"41aae0e438d33992ce436e0fa46fd5e2","url":"core/useSpeechSynthesis/index.html"},{"revision":"3eeb5ca3f5c6b386246b1fe913c30c41","url":"core/useSSRWidth/index.html"},{"revision":"756fe30118ac87c7e6d7864990cb6b60","url":"core/useStepper/index.html"},{"revision":"00f9fd96b3a25a19f4a0492f5829ed76","url":"core/useStorage/index.html"},{"revision":"d6f759282c7111f926d787978170f221","url":"core/useStorageAsync/index.html"},{"revision":"a1fcf6ecaa196473b209865031654056","url":"core/useStyleTag/index.html"},{"revision":"4112d02b66c8032e5340f1ed4061838a","url":"core/useSupported/index.html"},{"revision":"4a0dc9e46de1f1fa3ca704bad640dadf","url":"core/useSwipe/index.html"},{"revision":"79a01c44ee3915ee72478c6a1321e536","url":"core/useTemplateRefsList/index.html"},{"revision":"27025bf5cfc0e085051281ac835bdbb2","url":"core/useTextareaAutosize/index.html"},{"revision":"163e5d4bf048b22b06188c44509ee62f","url":"core/useTextDirection/index.html"},{"revision":"6c2753928796a9b66d933281bae8e523","url":"core/useTextSelection/index.html"},{"revision":"cd63b7a8de78c489bcc6c1d6e4a65d03","url":"core/useThrottledRefHistory/index.html"},{"revision":"f11d29c82c668822b6a953014a0bb391","url":"core/useTimeAgo/index.html"},{"revision":"355e474798ad9e409eb3e96156f9f0c4","url":"core/useTimeoutPoll/index.html"},{"revision":"99b051b5fd2f32f8dc224c9d941f78e9","url":"core/useTimestamp/index.html"},{"revision":"9dd2c5877fd6d596e93cc4effbf62353","url":"core/useTitle/index.html"},{"revision":"6817d61f46550f0ef459667b38d490c2","url":"core/useTransition/index.html"},{"revision":"c6d6652d04edfb0bf64e809537decb3d","url":"core/useUrlSearchParams/index.html"},{"revision":"cf35ea9dcd56d85ec27696464d5ba768","url":"core/useUserMedia/index.html"},{"revision":"1a6c9e6b6bbb8671984c9957c2956be8","url":"core/useVibrate/index.html"},{"revision":"3c1382d3a172461779aab9e0f29796ef","url":"core/useVirtualList/index.html"},{"revision":"07a3fe97b5f8217a6db368d4d84ee38c","url":"core/useVModel/index.html"},{"revision":"8cca28a2f2151d99a03d8c6052e8321c","url":"core/useVModels/index.html"},{"revision":"ccc804ca4f7081fc713018719f05bc91","url":"core/useWakeLock/index.html"},{"revision":"3e5d31b2f11fd1313131b073a00a8ccf","url":"core/useWebNotification/index.html"},{"revision":"2fee4350eec0c8456dda0afa6489ac4b","url":"core/useWebSocket/index.html"},{"revision":"8dc760fb4a75abea95709cb32f227480","url":"core/useWebWorker/index.html"},{"revision":"d82eb8d1801215ab5b8290f6f667d284","url":"core/useWebWorkerFn/index.html"},{"revision":"ad9e00e7e37ac2aae88df0f11e2b77d9","url":"core/useWindowFocus/index.html"},{"revision":"89d4cdeb7d57293bd619bf8b57da09e9","url":"core/useWindowScroll/index.html"},{"revision":"af2d24bef0105ab69dc60c143af044b7","url":"core/useWindowSize/index.html"},{"revision":"3844559c0ffbe997491298d03b15a608","url":"ecosystem.html"},{"revision":"f94c054d9afc60458d115b078144e90e","url":"electron/README.html"},{"revision":"3dd36d5942dc2edae0c146b4d888c565","url":"electron/useIpcRenderer/index.html"},{"revision":"5346712deca16dc524b0a51d73fcb973","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"d5c17142cd7f301c499b0424899f2bc4","url":"electron/useIpcRendererOn/index.html"},{"revision":"1a4e0486820473038961e9a67238752a","url":"electron/useZoomFactor/index.html"},{"revision":"397603d33cbdd65e86064b8ceba71d9d","url":"electron/useZoomLevel/index.html"},{"revision":"d4e36b9d57488afa4250088a3fe68a0e","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"8bdfdde75dee1a1add0fb41d15cc9b32","url":"firebase/README.html"},{"revision":"747801bf3591d8375ef30dcc339046e9","url":"firebase/useAuth/index.html"},{"revision":"9d12d30f33334b8749bea7085b296cb3","url":"firebase/useFirestore/index.html"},{"revision":"97469e2174c4d717f671a33ccfbfac97","url":"firebase/useRTDB/index.html"},{"revision":"da0600e2ed83d94f8f88701a2278012e","url":"functions.html"},{"revision":"32015c0bfc0fe4d4fc6fdab8032b9800","url":"guide/best-practice.html"},{"revision":"d5f4a87fd118cfed89838c5b9b83897e","url":"guide/components.html"},{"revision":"1395013e0524c334f29284ca3c9adf8e","url":"guide/config.html"},{"revision":"73d9978c55aa74d335898bbc7ca2e107","url":"guide/index.html"},{"revision":"ab2c21b4111df0328b5781e5286e36bd","url":"guidelines.html"},{"revision":"73428148164d20be845184c28cf44e13","url":"index.html"},{"revision":"d1036a7a5aad6135ee0f131ce47a7f8b","url":"integrations/README.html"},{"revision":"a76e97bf983dfabee4d36ee042724ea1","url":"integrations/useAsyncValidator/index.html"},{"revision":"848427b3593e370bd9b2ba756b6ccf92","url":"integrations/useAxios/index.html"},{"revision":"55a9ead730e68def19d85315586a9cfd","url":"integrations/useChangeCase/index.html"},{"revision":"6b6d1185f73212eaa45893f595433652","url":"integrations/useCookies/index.html"},{"revision":"f30e8c896ade7ff11a36ecb51ebf7a1b","url":"integrations/useDrauu/index.html"},{"revision":"2f410346245b79b6a8adab2c5f1e66fe","url":"integrations/useFocusTrap/index.html"},{"revision":"fb8c24615578f70105077077f95875ca","url":"integrations/useFuse/index.html"},{"revision":"338eaf7e38d4697efe25fdfbd39dc4ac","url":"integrations/useIDBKeyval/index.html"},{"revision":"8ab212b61c57e38e4fb51c5964589ee5","url":"integrations/useJwt/index.html"},{"revision":"fce0a82a4a957279a16318dc9e46d6c3","url":"integrations/useNProgress/index.html"},{"revision":"ae16d1cdff858e93a6596e7e22573a47","url":"integrations/useQRCode/index.html"},{"revision":"48ef1adc11c0afbbab620c249614d12d","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"b3f41b22cb454947a71a801588946928","url":"math/createGenericProjection/index.html"},{"revision":"d14f9a9f8dda8cc6e1d03dddc21cc028","url":"math/createProjection/index.html"},{"revision":"3ec33be35adb81b935882187c4c419ee","url":"math/logicAnd/index.html"},{"revision":"fc09d1486a84d9b7ec920bf250186c47","url":"math/logicNot/index.html"},{"revision":"8ad3117d386cd46ee2736e0fa156dffe","url":"math/logicOr/index.html"},{"revision":"342e8cb4c82ecad4eb5babe75f9092a2","url":"math/README.html"},{"revision":"4f53fae79d6c8148541d71f33469e301","url":"math/useAbs/index.html"},{"revision":"addd21e9cc46e0500e0b10f31d5aa73f","url":"math/useAverage/index.html"},{"revision":"ee38365c13c640327a1edee98ea8c29c","url":"math/useCeil/index.html"},{"revision":"8014909d41966fa8241f9929a643bec1","url":"math/useClamp/index.html"},{"revision":"95008f489da5ce4314b039e95d4a0613","url":"math/useFloor/index.html"},{"revision":"b7c9c534f7c598d40a4fa9676b933f4a","url":"math/useMath/index.html"},{"revision":"a63d8dd9ffa3d389737e0c9970dad868","url":"math/useMax/index.html"},{"revision":"9c90d17c5e5537f50379508a74316a06","url":"math/useMin/index.html"},{"revision":"99d6cef20f1534e8ff764fb6020c5f69","url":"math/usePrecision/index.html"},{"revision":"b700cfd2ad8af98ca646b5f520a80034","url":"math/useProjection/index.html"},{"revision":"630a89673dfb4f5e4bc00c8552c5fefb","url":"math/useRound/index.html"},{"revision":"6e10afbc2e0bfb60836fcbdb6892621c","url":"math/useSum/index.html"},{"revision":"b29f0ce871e5b91f92239c5866d66b8b","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"37efc75fdfcb594340ba20dbf95accac","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"24eaad8436fe4692049d8e675c1b74a4","url":"router/README.html"},{"revision":"ee5dd563b31bf6006e7ec05de81d255b","url":"router/useRouteHash/index.html"},{"revision":"6681de7f5164dcffc42bbc3f9acaf22e","url":"router/useRouteParams/index.html"},{"revision":"2c2169e0efcb6eb2f3386a8add8d2fb6","url":"router/useRouteQuery/index.html"},{"revision":"911cbc57530515b7931a2678d6f542db","url":"rxjs/from/index.html"},{"revision":"7ddc66e82f909cb4dcd881e0785f3b45","url":"rxjs/README.html"},{"revision":"a19d39bb11407d60f3dc395812a75772","url":"rxjs/toObserver/index.html"},{"revision":"430af7f8e3fac494c22d3b82d5fe94b4","url":"rxjs/useExtractedObservable/index.html"},{"revision":"3d8d1b42ddf5c5166c949e1c75a3b65e","url":"rxjs/useObservable/index.html"},{"revision":"04ed26065a9d42cec5467bc986310b74","url":"rxjs/useSubject/index.html"},{"revision":"cd419c81aaee307f689e9cb5c5556bb8","url":"rxjs/useSubscription/index.html"},{"revision":"4cbb39e9396a2a662c9e80ee1b6a9ebe","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"3bcfdd256783c9b5b0c361e20d175bba","url":"shared/computedEager/index.html"},{"revision":"e62a9cc7f73bf0db0d58c55606c4d5a8","url":"shared/computedWithControl/index.html"},{"revision":"1c7459c95d620ffa82306f73fdcd530a","url":"shared/createEventHook/index.html"},{"revision":"3a8fd400553a15aa7aaabee32734dc0c","url":"shared/createGlobalState/index.html"},{"revision":"d9b8288ead0288b4fb0c0be7eba0da86","url":"shared/createInjectionState/index.html"},{"revision":"78ea77a4498b7ec724b9eab791092b63","url":"shared/createRef/index.html"},{"revision":"830123b8a83eade6c23fbafb4b1a6496","url":"shared/createSharedComposable/index.html"},{"revision":"ac71213f21549d174b972a4cc4d6b91e","url":"shared/extendRef/index.html"},{"revision":"15849b02528968579161cda14d3997cd","url":"shared/get/index.html"},{"revision":"19ed187ec417e68ddda3965bafd983e2","url":"shared/injectLocal/index.html"},{"revision":"fa1a733c8e810c0ecad5f7986ec7e703","url":"shared/isDefined/index.html"},{"revision":"dc09593a1c1db8fcd9cb54218e85db46","url":"shared/makeDestructurable/index.html"},{"revision":"318811860e53e26bb50ebbe6cb379e67","url":"shared/provideLocal/index.html"},{"revision":"810d1f5404a9091a4678b3b4727ff187","url":"shared/reactify/index.html"},{"revision":"b5586c4c382218c201c1f7c0264cd457","url":"shared/reactifyObject/index.html"},{"revision":"2e715cc5099090b1912c71e9180abd1d","url":"shared/reactiveComputed/index.html"},{"revision":"e02bd8745a2195ce041f1ff8fb7d56ce","url":"shared/reactiveOmit/index.html"},{"revision":"371b88b755518ffb19995b3d2da39123","url":"shared/reactivePick/index.html"},{"revision":"1b54f86cf93d278f83f19a6dd89a7b4e","url":"shared/refAutoReset/index.html"},{"revision":"a7f4df84ef98f1a8fcf2619684af37dd","url":"shared/refDebounced/index.html"},{"revision":"98b9389857da92a19e02d72923e47dd8","url":"shared/refDefault/index.html"},{"revision":"d36d98d1154674ece4b2ea494bcfcb25","url":"shared/refThrottled/index.html"},{"revision":"2b3406b6f7fe2979fba54a69d6318227","url":"shared/refWithControl/index.html"},{"revision":"b8878e0f86e75629d59e253ee1c964bb","url":"shared/set/index.html"},{"revision":"a2a7ce6f097d85445542f8f1a0b933ec","url":"shared/syncRef/index.html"},{"revision":"d1840b3acf13103ebbdadd4a869642a1","url":"shared/syncRefs/index.html"},{"revision":"635146a982d6799001508fdf1f0a5a49","url":"shared/toReactive/index.html"},{"revision":"88dc159fff20b2d71c9b450f1d48aaf5","url":"shared/toRef/index.html"},{"revision":"a17b3ee4c6921fc3a525ad43ecbc8b33","url":"shared/toRefs/index.html"},{"revision":"7c17f8ab460f1f327b3b3db502548716","url":"shared/toValue/index.html"},{"revision":"8f16c080cfefe970a44871941e12567f","url":"shared/tryOnBeforeMount/index.html"},{"revision":"4f100680343c01f89205eb405efbbf67","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"d7703da77c207df0775810fb0b013692","url":"shared/tryOnMounted/index.html"},{"revision":"ba88767ff8ad87de783b12384406b5f6","url":"shared/tryOnScopeDispose/index.html"},{"revision":"58904c100d306b8bb6944a302891d959","url":"shared/tryOnUnmounted/index.html"},{"revision":"0c7ac0138739cec7dc6702d772e49295","url":"shared/until/index.html"},{"revision":"b0e4d1e5f9cb42e61ce3ea2d69445f9d","url":"shared/useArrayDifference/index.html"},{"revision":"aa34df6da3f0188bfc5088af912afe92","url":"shared/useArrayEvery/index.html"},{"revision":"770b4104fb605d64289c1af3a0582a10","url":"shared/useArrayFilter/index.html"},{"revision":"95edd2e2f561e4de1042eaad1312967b","url":"shared/useArrayFind/index.html"},{"revision":"ed583e549ad869864904e1e4d38c5f55","url":"shared/useArrayFindIndex/index.html"},{"revision":"00c34d7d12a64c57f7f3e3f91cd652ff","url":"shared/useArrayFindLast/index.html"},{"revision":"9a92360c2780ee5bf18a747ce6f04e7e","url":"shared/useArrayIncludes/index.html"},{"revision":"d7be0dfe9f55ab9970d394d42ba6b744","url":"shared/useArrayJoin/index.html"},{"revision":"2aeea6d9da5e4c3c2268135ef7459ab7","url":"shared/useArrayMap/index.html"},{"revision":"73b7124e91063d333930cf28a0802458","url":"shared/useArrayReduce/index.html"},{"revision":"ec37730ede579e689049a621b227c6f6","url":"shared/useArraySome/index.html"},{"revision":"fdf52efea846b648ce4c8adb94f61675","url":"shared/useArrayUnique/index.html"},{"revision":"a652fe89f4f6660d2602660e401665a5","url":"shared/useCounter/index.html"},{"revision":"807acee9f287d1a9ac61e2f5922be38a","url":"shared/useDateFormat/index.html"},{"revision":"51e28510b9d00cded89dd330b8f69c72","url":"shared/useDebounceFn/index.html"},{"revision":"055cea26b5f6e8d5a21eedd50f9c2137","url":"shared/useInterval/index.html"},{"revision":"bd45b1c643a56b616fa0953fd8b5309f","url":"shared/useIntervalFn/index.html"},{"revision":"2ec68fd68a87cbe42526366ebd69d7fc","url":"shared/useLastChanged/index.html"},{"revision":"a704b65fbf33609c6b6e577018b2a5e3","url":"shared/useThrottleFn/index.html"},{"revision":"fd81be104f2f45d04818071786650ffd","url":"shared/useTimeout/index.html"},{"revision":"89c5b62c3b7be793c4c8a88e613e5c6f","url":"shared/useTimeoutFn/index.html"},{"revision":"698b1009fcbd6c27cad73da0c5770c6e","url":"shared/useToggle/index.html"},{"revision":"c8dbaac2028090c4a0f9499a9f7e851d","url":"shared/useToNumber/index.html"},{"revision":"c93b1452e82d4a965aed05575f7452d9","url":"shared/useToString/index.html"},{"revision":"ac2df8b1b27d110d84e7f9e8c862fd2b","url":"shared/watchArray/index.html"},{"revision":"d3b9db1a0a4f53e037895c1bc27b72ae","url":"shared/watchAtMost/index.html"},{"revision":"6df5b7fcbc15184e05cf4d8cc685fd8f","url":"shared/watchDebounced/index.html"},{"revision":"5fede223a06ab54e981dfb57a4815a6b","url":"shared/watchDeep/index.html"},{"revision":"b650d82cd6d9213b4931441188fac16e","url":"shared/watchIgnorable/index.html"},{"revision":"1bece60ab471f5afbfdf58942ce8f080","url":"shared/watchImmediate/index.html"},{"revision":"1bb55ed812b47731b0faa5a6c297ea94","url":"shared/watchOnce/index.html"},{"revision":"3a79caa55612caf1f5eca40c92d51e71","url":"shared/watchPausable/index.html"},{"revision":"03507f89763feb36e1df16c2fdfa319f","url":"shared/watchThrottled/index.html"},{"revision":"b60aa7336ac499a2794d575f9f745940","url":"shared/watchTriggerable/index.html"},{"revision":"2493698f3bde96bea087f50fa09d9ed0","url":"shared/watchWithFilter/index.html"},{"revision":"c8d24c58a3497ed11682e1b810c6f6d5","url":"shared/whenever/index.html"},{"revision":"f121065bd699b8c2495718a973c529a7","url":"team.html"},{"revision":"ace7ab6bc932be145115857c39f7d63a","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"b46b14161b1fcd724c2cb0e125544f9f","url":"why-no-translations.html"},{"revision":"ea4abef3c4492a31767ca3cdfe42dfc7","url":"hashmap.json"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"97a9e31aee065e25bd6ee2ded3b39293","url":"manifest.webmanifest"}];
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
