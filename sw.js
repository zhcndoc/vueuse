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
const entries = [{"revision":"bbd25aafeac0201183928963b059db0e","url":"404.html"},{"revision":"81786666592718543eb1504f61fff223","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.hwFyHDjm.js"},{"revision":null,"url":"assets/add-ons.md.hwFyHDjm.lean.js"},{"revision":null,"url":"assets/app.jEma14Ao.js"},{"revision":null,"url":"assets/chunks/@localSearchIndexroot.BxpfmeNd.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.C7c2XhPi.js"},{"revision":null,"url":"assets/chunks/CodeToggle.vue_vue_type_style_index_0_lang.DXG8KmoR.js"},{"revision":null,"url":"assets/chunks/commonjsHelpers.CqkleIqs.js"},{"revision":null,"url":"assets/chunks/Contributors.vue_vue_type_script_setup_true_lang.DVh_Woix.js"},{"revision":null,"url":"assets/chunks/CourseLink.vue_vue_type_script_setup_true_lang.D7rEtO0E.js"},{"revision":null,"url":"assets/chunks/demo.client.BbZWA6OO.js"},{"revision":null,"url":"assets/chunks/demo.client.CmqyAtA6.js"},{"revision":null,"url":"assets/chunks/demo.client.DSufiWJb.js"},{"revision":null,"url":"assets/chunks/demo.client.DVWoSPul.js"},{"revision":null,"url":"assets/chunks/demo.client.wa59s2tI.js"},{"revision":null,"url":"assets/chunks/DemoContainer.vue_vue_type_script_setup_true_lang.B8-DAC_D.js"},{"revision":null,"url":"assets/chunks/filters.Cu29MTGE.js"},{"revision":null,"url":"assets/chunks/focus-trap.esm.DYjLEhSG.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.B4BVDGaT.js"},{"revision":null,"url":"assets/chunks/fuse.Ch1WBRTM.js"},{"revision":null,"url":"assets/chunks/general.CGRH32nb.js"},{"revision":null,"url":"assets/chunks/index.6hGw_Ztj.js"},{"revision":null,"url":"assets/chunks/index.8THM8bRU.js"},{"revision":null,"url":"assets/chunks/index.B0fDBahq.js"},{"revision":null,"url":"assets/chunks/index.B5AwHsZ4.js"},{"revision":null,"url":"assets/chunks/index.BEpqZ6_s.js"},{"revision":null,"url":"assets/chunks/index.Bh6q6Xz9.js"},{"revision":null,"url":"assets/chunks/index.BII-XpzN.js"},{"revision":null,"url":"assets/chunks/index.BiKIr05h.js"},{"revision":null,"url":"assets/chunks/index.BireelLB.js"},{"revision":null,"url":"assets/chunks/index.BIX7oVx2.js"},{"revision":null,"url":"assets/chunks/index.BKjfLRng.js"},{"revision":null,"url":"assets/chunks/index.BkLfCHyH.js"},{"revision":null,"url":"assets/chunks/index.BmEI90dy.js"},{"revision":null,"url":"assets/chunks/index.BsxVatlf.js"},{"revision":null,"url":"assets/chunks/index.BuXo0FNi.js"},{"revision":null,"url":"assets/chunks/index.BW5YYlYk.js"},{"revision":null,"url":"assets/chunks/index.BylI1wFN.js"},{"revision":null,"url":"assets/chunks/index.BZWZ8wPw.js"},{"revision":null,"url":"assets/chunks/index.C-zbo8Xy.js"},{"revision":null,"url":"assets/chunks/index.C5LBcXth.js"},{"revision":null,"url":"assets/chunks/index.C6N2BA7r.js"},{"revision":null,"url":"assets/chunks/index.C9_H4LYO.js"},{"revision":null,"url":"assets/chunks/index.C9MXH3pg.js"},{"revision":null,"url":"assets/chunks/index.CaQcEGkp.js"},{"revision":null,"url":"assets/chunks/index.CciDE2mL.js"},{"revision":null,"url":"assets/chunks/index.CfLJeBgC.js"},{"revision":null,"url":"assets/chunks/index.CjxCVkE3.js"},{"revision":null,"url":"assets/chunks/index.CKlozpC4.js"},{"revision":null,"url":"assets/chunks/index.CltkuRMZ.js"},{"revision":null,"url":"assets/chunks/index.ClxuOGOg.js"},{"revision":null,"url":"assets/chunks/index.Cq2uZsWh.js"},{"revision":null,"url":"assets/chunks/index.CZtnsUSQ.js"},{"revision":null,"url":"assets/chunks/index.D_NzaxKt.js"},{"revision":null,"url":"assets/chunks/index.D8vrz_KW.js"},{"revision":null,"url":"assets/chunks/index.DdYOT9fj.js"},{"revision":null,"url":"assets/chunks/index.DeGemncR.js"},{"revision":null,"url":"assets/chunks/index.DEkWAQDE.js"},{"revision":null,"url":"assets/chunks/index.DHr9lByg.js"},{"revision":null,"url":"assets/chunks/index.DIG6HZ7e.js"},{"revision":null,"url":"assets/chunks/index.DigZsCvY.js"},{"revision":null,"url":"assets/chunks/index.DM7jD8kz.js"},{"revision":null,"url":"assets/chunks/index.DP0X1qv3.js"},{"revision":null,"url":"assets/chunks/index.DQLGG9Rw.js"},{"revision":null,"url":"assets/chunks/index.DsjkLpKi.js"},{"revision":null,"url":"assets/chunks/index.DUZM3429.js"},{"revision":null,"url":"assets/chunks/index.Dvnb5yyy.js"},{"revision":null,"url":"assets/chunks/index.DvYXedSy.js"},{"revision":null,"url":"assets/chunks/index.DyoL5mEp.js"},{"revision":null,"url":"assets/chunks/index.J0GYNwc2.js"},{"revision":null,"url":"assets/chunks/index.lcVDEwr_.js"},{"revision":null,"url":"assets/chunks/index.Lef1dC5N.js"},{"revision":null,"url":"assets/chunks/index.MKnQS7he.js"},{"revision":null,"url":"assets/chunks/index.nHc1MLyL.js"},{"revision":null,"url":"assets/chunks/index.o_i3HEaW.js"},{"revision":null,"url":"assets/chunks/index.OJYD8Gb1.js"},{"revision":null,"url":"assets/chunks/index.pEni0VJC.js"},{"revision":null,"url":"assets/chunks/index.Pu0u7Hgw.js"},{"revision":null,"url":"assets/chunks/index.RcmX0-Re.js"},{"revision":null,"url":"assets/chunks/index.RhYbGWm1.js"},{"revision":null,"url":"assets/chunks/index.s9VgMnAp.js"},{"revision":null,"url":"assets/chunks/index.Tiygp-9O.js"},{"revision":null,"url":"assets/chunks/index.wx4Vcvv0.js"},{"revision":null,"url":"assets/chunks/index.ZF16ZeFS.js"},{"revision":null,"url":"assets/chunks/Key.vue_vue_type_script_setup_true_lang.Bsan3RC7.js"},{"revision":null,"url":"assets/chunks/metadata.CJ8CVCpu.js"},{"revision":null,"url":"assets/chunks/Note.CiCUgD6R.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.DlAUqK2U.js"},{"revision":null,"url":"assets/chunks/preload-helper.ckwbz45p.js"},{"revision":null,"url":"assets/chunks/resolve-element.CjOR-mWi.js"},{"revision":null,"url":"assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.CDMUKr-q.js"},{"revision":null,"url":"assets/chunks/utils.B5e_uQLX.js"},{"revision":null,"url":"assets/chunks/VPLocalSearchBox.CY6mjRjJ.js"},{"revision":null,"url":"assets/chunks/vue.pUxtLw5y.js"},{"revision":null,"url":"assets/components_README.md.Czu3ffbu.js"},{"revision":null,"url":"assets/components_README.md.Czu3ffbu.lean.js"},{"revision":null,"url":"assets/contributing.md.DPTkKRJv.js"},{"revision":null,"url":"assets/contributing.md.DPTkKRJv.lean.js"},{"revision":null,"url":"assets/core__template_index.md.Cl5cZm_h.js"},{"revision":null,"url":"assets/core__template_index.md.Cl5cZm_h.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.D6hv5moj.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.D6hv5moj.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.Cy3kN0VV.js"},{"revision":null,"url":"assets/core_computedInject_index.md.Cy3kN0VV.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.BquHqEBX.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.BquHqEBX.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.B4QZ5IJI.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.B4QZ5IJI.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.C_FCqS9g.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.C_FCqS9g.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.C6ywLI4n.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.C6ywLI4n.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.BpHTDXrY.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.BpHTDXrY.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.CAFIgdIY.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.CAFIgdIY.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.DSV1wSrT.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.DSV1wSrT.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.Bn1Beiqw.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.Bn1Beiqw.lean.js"},{"revision":null,"url":"assets/core_README.md.Batw-0S_.js"},{"revision":null,"url":"assets/core_README.md.Batw-0S_.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.Dx3fX90o.js"},{"revision":null,"url":"assets/core_templateRef_index.md.Dx3fX90o.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.BTB-q1j9.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.BTB-q1j9.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.DANrzMRL.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.DANrzMRL.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.BHZ1H1dC.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.BHZ1H1dC.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.cPYlYD0r.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.cPYlYD0r.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DNWNq17p.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DNWNq17p.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.D-k-UpWr.js"},{"revision":null,"url":"assets/core_useBase64_index.md.D-k-UpWr.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.BSwSEp8z.js"},{"revision":null,"url":"assets/core_useBattery_index.md.BSwSEp8z.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.C8Lb6X0b.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.C8Lb6X0b.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.Cd23p9Cv.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.Cd23p9Cv.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.D1jE2usA.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.D1jE2usA.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.2tiCOIPh.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.2tiCOIPh.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.B_uYFDhs.js"},{"revision":null,"url":"assets/core_useCached_index.md.B_uYFDhs.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.DyyKdcu0.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.DyyKdcu0.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.4KIEXe4B.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.4KIEXe4B.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.DYbW8mxg.js"},{"revision":null,"url":"assets/core_useCloned_index.md.DYbW8mxg.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.iVoDCEXS.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.iVoDCEXS.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.lllaXQmc.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.lllaXQmc.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.tSoXj9-y.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.tSoXj9-y.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.CZiwholO.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.CZiwholO.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.DUE49OXq.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.DUE49OXq.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.B3-iu7ZZ.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.B3-iu7ZZ.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.Uvx0tIwh.js"},{"revision":null,"url":"assets/core_useDark_index.md.Uvx0tIwh.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.WQeyv97c.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.WQeyv97c.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.B_OHrH3o.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.B_OHrH3o.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.BqIVJAIB.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.BqIVJAIB.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.CrFg_nQG.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.CrFg_nQG.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.DBvOznki.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.DBvOznki.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.Bmg3LmtC.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.Bmg3LmtC.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.BVWpAVth.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.BVWpAVth.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.LkfJChr1.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.LkfJChr1.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.C-GvFsou.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.C-GvFsou.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.CODqZalB.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.CODqZalB.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.Cy9gN5bQ.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.Cy9gN5bQ.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.BQxvIi9u.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.BQxvIi9u.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.Cg0lTgU9.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.Cg0lTgU9.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.BhIIZ4Cw.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.BhIIZ4Cw.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.CiwCRViT.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.CiwCRViT.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.DJvzlo7X.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.DJvzlo7X.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BNxuoLCm.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BNxuoLCm.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.DZ_cNQRI.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.DZ_cNQRI.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.DSCEWRAk.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.DSCEWRAk.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.C5MD5RaK.js"},{"revision":null,"url":"assets/core_useFetch_index.md.C5MD5RaK.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.Plx25_6b.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.Plx25_6b.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.CGrxK6CI.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.CGrxK6CI.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BBwf6jcy.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BBwf6jcy.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DqCnnNTd.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DqCnnNTd.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.BLy3fx4i.js"},{"revision":null,"url":"assets/core_useFps_index.md.BLy3fx4i.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.Juii2a1b.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.Juii2a1b.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CEPlxjJC.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CEPlxjJC.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.DO_sBLeC.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.DO_sBLeC.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DToApcVq.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DToApcVq.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.zPoAXxYQ.js"},{"revision":null,"url":"assets/core_useImage_index.md.zPoAXxYQ.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.CyzN4hX5.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.CyzN4hX5.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.S6yWXJ44.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.S6yWXJ44.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DpoM3f_e.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DpoM3f_e.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.DLg7YKqM.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.DLg7YKqM.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.CG2wDsoo.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.CG2wDsoo.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.BhtVBr8u.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.BhtVBr8u.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.Cx6q7y9w.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.Cx6q7y9w.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.IDcXEl4C.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.IDcXEl4C.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.QtPXqCCK.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.QtPXqCCK.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.DzDTmVTq.js"},{"revision":null,"url":"assets/core_useMemory_index.md.DzDTmVTq.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.DWI0deCA.js"},{"revision":null,"url":"assets/core_useMounted_index.md.DWI0deCA.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.hgenYAbv.js"},{"revision":null,"url":"assets/core_useMouse_index.md.hgenYAbv.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.COkR9qsu.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.COkR9qsu.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.DiPJdbmD.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.DiPJdbmD.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.CHX3FLPg.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.CHX3FLPg.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BywqxFyu.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BywqxFyu.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.R7Ni4vXW.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.R7Ni4vXW.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.BflWshL1.js"},{"revision":null,"url":"assets/core_useNow_index.md.BflWshL1.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.Bv3SUlcS.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.Bv3SUlcS.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.CG-DZcQC.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.CG-DZcQC.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.Cc7HJ9X_.js"},{"revision":null,"url":"assets/core_useOnline_index.md.Cc7HJ9X_.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.CoQgjfzt.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.CoQgjfzt.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.jqsogZZ3.js"},{"revision":null,"url":"assets/core_useParallax_index.md.jqsogZZ3.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DKrm1hLI.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DKrm1hLI.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.ow2ZLr0c.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.ow2ZLr0c.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CyVfGLib.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CyVfGLib.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.NgKNmhHm.js"},{"revision":null,"url":"assets/core_usePointer_index.md.NgKNmhHm.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.DnfnvF9J.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.DnfnvF9J.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.Bo97qgbe.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.Bo97qgbe.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.B7cGGCSo.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.B7cGGCSo.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.Dv6ipYnv.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.Dv6ipYnv.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.D8gQO5MQ.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.D8gQO5MQ.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.BCm3J14g.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.BCm3J14g.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BK5uF1NF.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BK5uF1NF.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.3YVA8OJI.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.3YVA8OJI.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.CygBAA-W.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.CygBAA-W.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.D1THi4yG.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.D1THi4yG.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DUo731Uw.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.DUo731Uw.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DtsGDTMO.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DtsGDTMO.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.B9ySrffL.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.B9ySrffL.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.BXy6nCqQ.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.BXy6nCqQ.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.l3ffOCFq.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.l3ffOCFq.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.CXd1Hhcn.js"},{"revision":null,"url":"assets/core_useScroll_index.md.CXd1Hhcn.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.Be_Ajmho.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.Be_Ajmho.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.BFmpxuVr.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.BFmpxuVr.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.CTGmTQaq.js"},{"revision":null,"url":"assets/core_useShare_index.md.CTGmTQaq.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.B4AEu_Py.js"},{"revision":null,"url":"assets/core_useSorted_index.md.B4AEu_Py.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.Bfw8fD46.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.Bfw8fD46.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.D0EXt4cM.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.D0EXt4cM.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.DxbyBCdM.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.DxbyBCdM.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BUpKDTl7.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BUpKDTl7.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.CxYmgpZ8.js"},{"revision":null,"url":"assets/core_useStorage_index.md.CxYmgpZ8.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.DfFMcWKM.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.DfFMcWKM.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.DrNCbZYE.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.DrNCbZYE.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.D7iejNzM.js"},{"revision":null,"url":"assets/core_useSupported_index.md.D7iejNzM.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.D0iJtgh-.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.D0iJtgh-.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BQQLrCMh.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BQQLrCMh.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.DwfWHG_y.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.DwfWHG_y.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.D1VvrXp8.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.D1VvrXp8.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.COs_8kyV.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.COs_8kyV.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.Bg-un9-l.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.Bg-un9-l.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.Bw8mj2cb.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.Bw8mj2cb.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.DBs3WFa1.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.DBs3WFa1.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.CqV3gTxs.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.CqV3gTxs.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.BsqpDkY1.js"},{"revision":null,"url":"assets/core_useTitle_index.md.BsqpDkY1.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.PcbcRFZ8.js"},{"revision":null,"url":"assets/core_useTransition_index.md.PcbcRFZ8.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.DLUzXpjn.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.DLUzXpjn.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.Bg12u7Ba.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.Bg12u7Ba.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.B9Ezt9MG.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.B9Ezt9MG.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CXNf1lC1.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CXNf1lC1.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.CBIvRnTO.js"},{"revision":null,"url":"assets/core_useVModel_index.md.CBIvRnTO.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.BYMGoqam.js"},{"revision":null,"url":"assets/core_useVModels_index.md.BYMGoqam.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.llBoqirJ.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.llBoqirJ.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.DidP-NMg.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.DidP-NMg.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.BH_au5t9.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.BH_au5t9.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.xSOx28By.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.xSOx28By.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.kOdJEDKz.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.kOdJEDKz.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.YdXVDYU2.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.YdXVDYU2.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.eTMGdoLd.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.eTMGdoLd.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.Dy2cGMXh.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.Dy2cGMXh.lean.js"},{"revision":null,"url":"assets/ecosystem.md.DKOEuLzc.js"},{"revision":null,"url":"assets/ecosystem.md.DKOEuLzc.lean.js"},{"revision":null,"url":"assets/electron_README.md.Cc8y3Lys.js"},{"revision":null,"url":"assets/electron_README.md.Cc8y3Lys.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bj4aa6Xc.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.Bj4aa6Xc.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.Dttc0NBl.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.Dttc0NBl.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.D7lrqGDB.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.D7lrqGDB.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.B3KyONYn.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.B3KyONYn.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.D5REP0xR.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.D5REP0xR.lean.js"},{"revision":null,"url":"assets/export-size.md.BeUEQBgq.js"},{"revision":null,"url":"assets/export-size.md.BeUEQBgq.lean.js"},{"revision":null,"url":"assets/firebase_README.md.D6nFppDZ.js"},{"revision":null,"url":"assets/firebase_README.md.D6nFppDZ.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.FMpesdC4.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.FMpesdC4.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.BkpZZ1kX.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.BkpZZ1kX.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.CISMI5Jl.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.CISMI5Jl.lean.js"},{"revision":null,"url":"assets/functions.md.Qu8Tp0K-.js"},{"revision":null,"url":"assets/functions.md.Qu8Tp0K-.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.rlf0idK6.js"},{"revision":null,"url":"assets/guide_best-practice.md.rlf0idK6.lean.js"},{"revision":null,"url":"assets/guide_components.md.jC0RIZut.js"},{"revision":null,"url":"assets/guide_components.md.jC0RIZut.lean.js"},{"revision":null,"url":"assets/guide_config.md.kIoZMFfq.js"},{"revision":null,"url":"assets/guide_config.md.kIoZMFfq.lean.js"},{"revision":null,"url":"assets/guide_index.md.DwqhcRCM.js"},{"revision":null,"url":"assets/guide_index.md.DwqhcRCM.lean.js"},{"revision":null,"url":"assets/guidelines.md.lw7jg6To.js"},{"revision":null,"url":"assets/guidelines.md.lw7jg6To.lean.js"},{"revision":null,"url":"assets/index.md.Dz1dAGId.js"},{"revision":null,"url":"assets/index.md.Dz1dAGId.lean.js"},{"revision":null,"url":"assets/integrations_README.md.gbbmPNTD.js"},{"revision":null,"url":"assets/integrations_README.md.gbbmPNTD.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.LC3yc4x7.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.LC3yc4x7.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CoOeFbQA.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CoOeFbQA.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.Cvxf_BF2.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.Cvxf_BF2.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.Io2Apw7D.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.Io2Apw7D.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.C0cv7ORz.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.C0cv7ORz.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.PHpF79d4.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.PHpF79d4.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.Kpc_X0kZ.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.Kpc_X0kZ.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.B8J2qFJn.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.B8J2qFJn.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.N5tx5UB9.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.N5tx5UB9.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.CFkLhqQZ.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.CFkLhqQZ.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.LOV_6agF.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.LOV_6agF.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CKQt8G89.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CKQt8G89.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.D3aFcAAC.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.D3aFcAAC.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.GIYs-l7p.js"},{"revision":null,"url":"assets/math_createProjection_index.md.GIYs-l7p.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DPLK7OyG.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DPLK7OyG.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.YCEQA6p9.js"},{"revision":null,"url":"assets/math_logicNot_index.md.YCEQA6p9.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.DB63hK9l.js"},{"revision":null,"url":"assets/math_logicOr_index.md.DB63hK9l.lean.js"},{"revision":null,"url":"assets/math_README.md.CWvds8eb.js"},{"revision":null,"url":"assets/math_README.md.CWvds8eb.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.Bm8wuMsd.js"},{"revision":null,"url":"assets/math_useAbs_index.md.Bm8wuMsd.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.8PSHhDue.js"},{"revision":null,"url":"assets/math_useAverage_index.md.8PSHhDue.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.BfD_uUpb.js"},{"revision":null,"url":"assets/math_useCeil_index.md.BfD_uUpb.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.ICDq6F0n.js"},{"revision":null,"url":"assets/math_useClamp_index.md.ICDq6F0n.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.COSrEKKJ.js"},{"revision":null,"url":"assets/math_useFloor_index.md.COSrEKKJ.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.BYVft1nD.js"},{"revision":null,"url":"assets/math_useMath_index.md.BYVft1nD.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.BPk-owpS.js"},{"revision":null,"url":"assets/math_useMax_index.md.BPk-owpS.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.BA0JpQbh.js"},{"revision":null,"url":"assets/math_useMin_index.md.BA0JpQbh.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.8koW7V_1.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.8koW7V_1.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CHTju2OU.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CHTju2OU.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.B5YNxdUE.js"},{"revision":null,"url":"assets/math_useRound_index.md.B5YNxdUE.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.DF6oY3An.js"},{"revision":null,"url":"assets/math_useSum_index.md.DF6oY3An.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.hdYr6krw.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.hdYr6krw.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.B_EaDNTP.js"},{"revision":null,"url":"assets/nuxt_README.md.B_EaDNTP.lean.js"},{"revision":null,"url":"assets/router_README.md.D3bLqE4o.js"},{"revision":null,"url":"assets/router_README.md.D3bLqE4o.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.D_WygQWl.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.D_WygQWl.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DMvdN33h.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DMvdN33h.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.eXLGsH3Y.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.eXLGsH3Y.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.DT7kjWIy.js"},{"revision":null,"url":"assets/rxjs_from_index.md.DT7kjWIy.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.BHWSLmS6.js"},{"revision":null,"url":"assets/rxjs_README.md.BHWSLmS6.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.BMba3TMG.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.BMba3TMG.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.BBbEQwnQ.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.BBbEQwnQ.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.BTUNONyu.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.BTUNONyu.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.Vop4MmDv.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.Vop4MmDv.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.K0iJo6_X.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.K0iJo6_X.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.D0s2Hi1b.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.D0s2Hi1b.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.xx7_7QjE.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.xx7_7QjE.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.COa5XYe2.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.COa5XYe2.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.4xpU1emV.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.4xpU1emV.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.CWc7rBKr.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.CWc7rBKr.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.BrGj9gb1.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.BrGj9gb1.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.Uw4YIu9Y.js"},{"revision":null,"url":"assets/shared_createRef_index.md.Uw4YIu9Y.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.DK65ZF-C.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.DK65ZF-C.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.YTsFal_S.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.YTsFal_S.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.DOpl9a-k.js"},{"revision":null,"url":"assets/shared_get_index.md.DOpl9a-k.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.C_qVkuvd.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.C_qVkuvd.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BIeKC-kx.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BIeKC-kx.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.CVpV1sNY.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.CVpV1sNY.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.C-TdxxCk.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.C-TdxxCk.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.BOW6i89B.js"},{"revision":null,"url":"assets/shared_reactify_index.md.BOW6i89B.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.DgP6GAvd.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.DgP6GAvd.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.BIylzS5L.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.BIylzS5L.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.pzqVHMg-.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.pzqVHMg-.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.BwAmbrQP.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.BwAmbrQP.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.zKQf1DYH.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.zKQf1DYH.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.DSWkFgCh.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.DSWkFgCh.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.F5MeucZz.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.F5MeucZz.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.DY9nnCHM.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.DY9nnCHM.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.DE4cJEWE.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.DE4cJEWE.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.DTRSV0sD.js"},{"revision":null,"url":"assets/shared_set_index.md.DTRSV0sD.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.B5vV-vNt.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.B5vV-vNt.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.Dlif1aDP.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.Dlif1aDP.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.ByfV9yTs.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.ByfV9yTs.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.DJbV1Dn-.js"},{"revision":null,"url":"assets/shared_toRef_index.md.DJbV1Dn-.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.Bq6Z-c3X.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.Bq6Z-c3X.lean.js"},{"revision":null,"url":"assets/shared_toValue_index.md.COd2bPWQ.js"},{"revision":null,"url":"assets/shared_toValue_index.md.COd2bPWQ.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.Ch8zwDFm.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.Ch8zwDFm.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DAiuF-ue.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DAiuF-ue.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Cpg1xX06.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Cpg1xX06.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.hvIOQm7W.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.hvIOQm7W.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.BS7KbH1r.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.BS7KbH1r.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.DvT99t27.js"},{"revision":null,"url":"assets/shared_until_index.md.DvT99t27.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.CHPUTV8n.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.CHPUTV8n.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.BN4Taz_l.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.BN4Taz_l.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.Ifv71ziu.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.Ifv71ziu.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.C0JzMwD0.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.C0JzMwD0.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BWbOIW__.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BWbOIW__.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.CrLIwd7O.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.CrLIwd7O.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.gI3CkXH8.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.gI3CkXH8.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.B-YaP9I0.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.B-YaP9I0.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.CXkBtWYX.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.CXkBtWYX.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.DvFFR6nh.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.DvFFR6nh.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.6uQFLh2y.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.6uQFLh2y.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.yR1SNb5n.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.yR1SNb5n.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.C_-qU5qe.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.C_-qU5qe.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.CjPRwp4b.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.CjPRwp4b.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.BxEEbBl0.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.BxEEbBl0.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.B8PI4IL2.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.B8PI4IL2.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.CDZ4JJyv.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.CDZ4JJyv.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.CwHTBcI9.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.CwHTBcI9.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.BBAM0NYC.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.BBAM0NYC.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.DTj9p2He.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.DTj9p2He.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.Bts60x5D.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.Bts60x5D.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.CVj2BtWs.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.CVj2BtWs.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.DAb_kK8O.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.DAb_kK8O.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.Cka8VOWW.js"},{"revision":null,"url":"assets/shared_useToString_index.md.Cka8VOWW.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Czi1G1wA.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Czi1G1wA.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.CTJq_iS1.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.CTJq_iS1.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.D4oNWkLJ.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.D4oNWkLJ.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.BdGmx3XL.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.BdGmx3XL.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BvB-uXsJ.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BvB-uXsJ.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.Dneya3U7.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.Dneya3U7.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.BtFlqKLb.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.BtFlqKLb.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.C0cZMJKV.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.C0cZMJKV.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DTplMyG9.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DTplMyG9.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.DLqFthQb.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.DLqFthQb.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.CrOnyeCe.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.CrOnyeCe.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.B1XlgGNl.js"},{"revision":null,"url":"assets/shared_whenever_index.md.B1XlgGNl.lean.js"},{"revision":null,"url":"assets/style.R90o-Q3o.css"},{"revision":null,"url":"assets/team.md.BEEF7L4H.js"},{"revision":null,"url":"assets/team.md.BEEF7L4H.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.Wcat7iMf.js"},{"revision":null,"url":"assets/why-no-translations.md.Wcat7iMf.lean.js"},{"revision":"1f787dece86a2d31a7c76bf10d5ca756","url":"badge-function-count.svg"},{"revision":"4ef118d1c9e8c6f9ec05b4d3e18a7ed8","url":"components/README.html"},{"revision":"c7e3a6d901a17b98671c77f06f0e5265","url":"contributing.html"},{"revision":"e27eee9e092f36c712b59300d2570401","url":"core/_template/index.html"},{"revision":"6e269c0623df1458cb38a04ac1c5cbec","url":"core/computedAsync/index.html"},{"revision":"b02c297d77cfce75cc7f2f5cf80ea4f2","url":"core/computedInject/index.html"},{"revision":"57d66c4b00358a66a0fa5d8c89579b8e","url":"core/createReusableTemplate/index.html"},{"revision":"61bab77934444bb2b398d5dfb79cc17c","url":"core/createTemplatePromise/index.html"},{"revision":"1cc84d0d9c6d40499eae3d102da1679d","url":"core/createUnrefFn/index.html"},{"revision":"5f7b9ec67f623ed72a6ac8948c018e2d","url":"core/onClickOutside/index.html"},{"revision":"e6908c8f833ce639de2ad369611478f6","url":"core/onElementRemoval/index.html"},{"revision":"91da2aea819b68f1ed9a0dc5027124f6","url":"core/onKeyStroke/index.html"},{"revision":"28128083885f3c85a909620a1ff7059e","url":"core/onLongPress/index.html"},{"revision":"8c4506c00ce664f3ce07561e43b8da5b","url":"core/onStartTyping/index.html"},{"revision":"6b44bf13441719dc09278bbfdd11b2c8","url":"core/README.html"},{"revision":"18da1db774554745baca9a00ef4a4b88","url":"core/templateRef/index.html"},{"revision":"9f00e93f2d6dee96f08916ca6c62f04c","url":"core/unrefElement/index.html"},{"revision":"0931e686e34d1621b685b3218016a40b","url":"core/useActiveElement/index.html"},{"revision":"aeafe070872748ffd4073e9167cc13fa","url":"core/useAnimate/index.html"},{"revision":"3047958b8f11d6721cb24efaee448517","url":"core/useAsyncQueue/index.html"},{"revision":"197c51b88fdf7fdd803dff9a362c8934","url":"core/useAsyncState/index.html"},{"revision":"15367c1063c45493e21607bbf8f59d1b","url":"core/useBase64/index.html"},{"revision":"640361c927fc16da64e61efaae19632c","url":"core/useBattery/index.html"},{"revision":"a9643271850b747aae72858382722ed5","url":"core/useBluetooth/index.html"},{"revision":"aa641246866dc993d527f9b69cd43fb2","url":"core/useBreakpoints/index.html"},{"revision":"f148fd57f7a0be935cf52d6012bf3950","url":"core/useBroadcastChannel/index.html"},{"revision":"93f6d5b87697b82de47f5a8b72e9385a","url":"core/useBrowserLocation/index.html"},{"revision":"45441288a8532443fe7a380a58ef90ce","url":"core/useCached/index.html"},{"revision":"1e6508c578a7686de4b947153104f174","url":"core/useClipboard/index.html"},{"revision":"ece2581adbbbbb409f6cde2a908115cf","url":"core/useClipboardItems/index.html"},{"revision":"3f8404477011ae1d610faa169508d22a","url":"core/useCloned/index.html"},{"revision":"620426e75bcc91c0053a2f263b18dace","url":"core/useColorMode/index.html"},{"revision":"d0ab5e3f2165b667d4019db355ec59e5","url":"core/useConfirmDialog/index.html"},{"revision":"936c4d540f6d9fac3ce353193dcc7411","url":"core/useCountdown/index.html"},{"revision":"09cf074bdba034226b19c9f53aa348b5","url":"core/useCssVar/index.html"},{"revision":"204e638408d7adfa43b9fda315e1ffe3","url":"core/useCurrentElement/index.html"},{"revision":"aedcd6d4f48ed1b56ba3c09daa2d9a9a","url":"core/useCycleList/index.html"},{"revision":"2a4cf38e6038fda2035c2ec6350b82eb","url":"core/useDark/index.html"},{"revision":"bd33eb3c1b5c4b76ceb82cea40370aa1","url":"core/useDebouncedRefHistory/index.html"},{"revision":"a5b2a2079e774344f409dad67d00ccdf","url":"core/useDeviceMotion/index.html"},{"revision":"f28ac0138ad9ad9c59f62e8505058683","url":"core/useDeviceOrientation/index.html"},{"revision":"396b788c9fc93ef6504a5e695d64030f","url":"core/useDevicePixelRatio/index.html"},{"revision":"62d2d2c41f225a5f2b61f878a4118a38","url":"core/useDevicesList/index.html"},{"revision":"10e161352b934e66cfa673d219d694ce","url":"core/useDisplayMedia/index.html"},{"revision":"13330f6c1d67f123960a8b036a1ebd13","url":"core/useDocumentVisibility/index.html"},{"revision":"01b2e1c1705349634d16f80fc6bb7608","url":"core/useDraggable/index.html"},{"revision":"d42b234c2de9d2ae20ec2ad78a486ebf","url":"core/useDropZone/index.html"},{"revision":"e8db684116f6c05a4356287a82c1639b","url":"core/useElementBounding/index.html"},{"revision":"b150916e530e6ac046897e22e1dae768","url":"core/useElementByPoint/index.html"},{"revision":"a42988ac526cf1d99baf3ebeb7dec93e","url":"core/useElementHover/index.html"},{"revision":"ae4b18fe4e0d3a09b42be632ccce2c8b","url":"core/useElementSize/index.html"},{"revision":"a69e8222aa9b30215a0edab6c0ffa454","url":"core/useElementVisibility/index.html"},{"revision":"570cf87199aa699b114b2cfef6b75119","url":"core/useEventBus/index.html"},{"revision":"624a6665c7189850dc26ff9f81d2c93a","url":"core/useEventListener/index.html"},{"revision":"d2dfefaf8555a42144bada866de54b84","url":"core/useEventSource/index.html"},{"revision":"b8e6f22b6b82ff50924006768ed6a389","url":"core/useEyeDropper/index.html"},{"revision":"b539e677e3f526eb84a4b75c4423f7d3","url":"core/useFavicon/index.html"},{"revision":"aed1182bb69d2a6caf08da0fef47cd35","url":"core/useFetch/index.html"},{"revision":"cff9c4a5f73de50ccdf998030e48c330","url":"core/useFileDialog/index.html"},{"revision":"8d55c485ebc8abf0bb23d6ebf12d4e2c","url":"core/useFileSystemAccess/index.html"},{"revision":"d8dc0bfeb5d28dceae7219fa1092b578","url":"core/useFocus/index.html"},{"revision":"c69d828e3a865fcb9a2bc02e4e5a8485","url":"core/useFocusWithin/index.html"},{"revision":"666a6900c0a9149652d401c49ae74b84","url":"core/useFps/index.html"},{"revision":"8679e32d52a369fc87a46cfd51e5b7d0","url":"core/useFullscreen/index.html"},{"revision":"6225b64c3fa40f1442823bd04b584202","url":"core/useGamepad/index.html"},{"revision":"2c3b149371d851cca703053e9736b619","url":"core/useGeolocation/index.html"},{"revision":"e2dde24ece0c723249bf1353580a277c","url":"core/useIdle/index.html"},{"revision":"506b98b97dda9ad5981e62b039aa7297","url":"core/useImage/index.html"},{"revision":"83dbced4227e779a11b28314fbc8a36f","url":"core/useInfiniteScroll/index.html"},{"revision":"c00f5b11583d89445e887a139d667740","url":"core/useIntersectionObserver/index.html"},{"revision":"fac57405328b6bb3cc66eed760c9b8a4","url":"core/useKeyModifier/index.html"},{"revision":"54f52ed8f1a69329f553b8f81dd667e0","url":"core/useLocalStorage/index.html"},{"revision":"4c13683f9d7aaa6c7292d5f335b308e8","url":"core/useMagicKeys/index.html"},{"revision":"ac57085295ca6dee9a71ebee4c79e632","url":"core/useManualRefHistory/index.html"},{"revision":"e0cd343e9b8b8091d2e22afd93015a4b","url":"core/useMediaControls/index.html"},{"revision":"b00b2c924f7855fd35e661100a1a1492","url":"core/useMediaQuery/index.html"},{"revision":"9e034453ee52131fe50e19feb5de6b32","url":"core/useMemoize/index.html"},{"revision":"bdf71babeba57d2ee9417c939d896808","url":"core/useMemory/index.html"},{"revision":"748264cd75a8fcc3b2c49e78e8b1c2ff","url":"core/useMounted/index.html"},{"revision":"535324c264ab9071f0b128d61305e185","url":"core/useMouse/index.html"},{"revision":"5589e9e887d39fa5c51490c6bed519be","url":"core/useMouseInElement/index.html"},{"revision":"11d96d93ff7d9a2cf1867d72c29e9a45","url":"core/useMousePressed/index.html"},{"revision":"fd56263fd628a76e7d825ae730f4ab89","url":"core/useMutationObserver/index.html"},{"revision":"31943fed5e45db9609943c3e0b601980","url":"core/useNavigatorLanguage/index.html"},{"revision":"4eeb7558f826234b729cdfff56c4e460","url":"core/useNetwork/index.html"},{"revision":"4cddd42bee05c3e24261a3bf9520870b","url":"core/useNow/index.html"},{"revision":"fb927cb836d1c7afbe234d62bcca4649","url":"core/useObjectUrl/index.html"},{"revision":"8e7477e0b0a81a4d8768a728ba5371e7","url":"core/useOffsetPagination/index.html"},{"revision":"9877c3af5274fd5ff9a5d887b437ece1","url":"core/useOnline/index.html"},{"revision":"3a85116f668ea5c0257205416ede0271","url":"core/usePageLeave/index.html"},{"revision":"1e7489734bd5829d390dd24466a99290","url":"core/useParallax/index.html"},{"revision":"9788ee3fb4e434864ce75a4f85039e74","url":"core/useParentElement/index.html"},{"revision":"2f5766a6cb1f5293bfabeea98d5adf51","url":"core/usePerformanceObserver/index.html"},{"revision":"ee3f2a4d417f2fffbcbd8a5e91d032c2","url":"core/usePermission/index.html"},{"revision":"e639634ebb93c2564b739cd67af9b5c2","url":"core/usePointer/index.html"},{"revision":"12319d1f3c53b63ab53f3575a1f48028","url":"core/usePointerLock/index.html"},{"revision":"d56f7178defe07d3fb34a5c7823a9e25","url":"core/usePointerSwipe/index.html"},{"revision":"de8063cd47cdef9954d0472ff0eb7b82","url":"core/usePreferredColorScheme/index.html"},{"revision":"fcf925b4c4fa9506313a151912111827","url":"core/usePreferredContrast/index.html"},{"revision":"0739a068a1926d356575f38237d6ad5d","url":"core/usePreferredDark/index.html"},{"revision":"cd253ea08398d764f27ecebd11193c95","url":"core/usePreferredLanguages/index.html"},{"revision":"f649f04578ae26b05887c0ac14f51935","url":"core/usePreferredReducedMotion/index.html"},{"revision":"41e07a40b434fc84899224d5805cb17f","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"dfd8c9a8186ee85d3ed221d67333d046","url":"core/usePrevious/index.html"},{"revision":"0a63c5a7712161d760a8dec4dbd4c41a","url":"core/useRafFn/index.html"},{"revision":"9764ebf2f32a62dd9ff4f1c53745e2e4","url":"core/useRefHistory/index.html"},{"revision":"f33fe260a1b09cb23f0495230465de81","url":"core/useResizeObserver/index.html"},{"revision":"4152584bca3c07f55b7d2d5521ab71ce","url":"core/useScreenOrientation/index.html"},{"revision":"f39a20db48594f65861e822b85377763","url":"core/useScreenSafeArea/index.html"},{"revision":"c5914c86858118674abaf63ffb775a3b","url":"core/useScriptTag/index.html"},{"revision":"1ea26305dacfdd8e1b0cc40a101d79fb","url":"core/useScroll/index.html"},{"revision":"bf8007fffa747228937fcf92e03a4290","url":"core/useScrollLock/index.html"},{"revision":"fdf0b1199b8b3b60e7e40bee1584cc72","url":"core/useSessionStorage/index.html"},{"revision":"8c015fa59e6cee9d26ff8686170de729","url":"core/useShare/index.html"},{"revision":"7c0df150e5038e4f672b2e8236023bc1","url":"core/useSorted/index.html"},{"revision":"9f618acfe987a26586b33f7d7770119a","url":"core/useSpeechRecognition/index.html"},{"revision":"c98662654f0267331496ab780f313539","url":"core/useSpeechSynthesis/index.html"},{"revision":"ebad039ec6741a9d839ca286a345d221","url":"core/useSSRWidth/index.html"},{"revision":"f1c445d8aa5749eb5fb4f46198da16d0","url":"core/useStepper/index.html"},{"revision":"715e0e859ab9d22b69639d9603ee2832","url":"core/useStorage/index.html"},{"revision":"7ba6991502a03584ec11a69f5fc4f607","url":"core/useStorageAsync/index.html"},{"revision":"897e195761ad8fdc3fb9a679bacc4e1e","url":"core/useStyleTag/index.html"},{"revision":"889276d721bf7d8da2cc4621c2dbe036","url":"core/useSupported/index.html"},{"revision":"72f0b4542228a8f21689a58e9c7b9113","url":"core/useSwipe/index.html"},{"revision":"1547da72d0629912fc6e421ba97da604","url":"core/useTemplateRefsList/index.html"},{"revision":"42fd9b5c7ade2c78c37929752cec2c25","url":"core/useTextareaAutosize/index.html"},{"revision":"391ceb125d19e52ce4e81fa06f1bafc3","url":"core/useTextDirection/index.html"},{"revision":"3c818af934d9a81c79fa90e9622817f6","url":"core/useTextSelection/index.html"},{"revision":"bff64d3ececf60eccb001884eb77a599","url":"core/useThrottledRefHistory/index.html"},{"revision":"4e6c575f7a037458ac4e7599bfc73e0b","url":"core/useTimeAgo/index.html"},{"revision":"8cb1e0ae610cf3cf8a99b2fba4d191a5","url":"core/useTimeoutPoll/index.html"},{"revision":"487167e7ae3c4a4b13d289135ac363a3","url":"core/useTimestamp/index.html"},{"revision":"3bda086730b025a33db48b1e6c3db0c8","url":"core/useTitle/index.html"},{"revision":"9beec6a494aca3b8e973e418da725596","url":"core/useTransition/index.html"},{"revision":"ea8a682ea37b8ca8577e1d2f058e85ee","url":"core/useUrlSearchParams/index.html"},{"revision":"e40352e68fca4ccd02ed07b2f4c511db","url":"core/useUserMedia/index.html"},{"revision":"2171f93d09de19d184424443a7df1c0e","url":"core/useVibrate/index.html"},{"revision":"16156943a9fab5551f3948db02f9e4ef","url":"core/useVirtualList/index.html"},{"revision":"696265837673164e635605a20058b712","url":"core/useVModel/index.html"},{"revision":"ac776b158223aaaf14dc07a6a9dc51a5","url":"core/useVModels/index.html"},{"revision":"96e092509644447f06b2c90d974fe98b","url":"core/useWakeLock/index.html"},{"revision":"5be9baf63d42e1ad268c31672e49af0e","url":"core/useWebNotification/index.html"},{"revision":"8936e7af6620c751ecac54a0501aa789","url":"core/useWebSocket/index.html"},{"revision":"6fc0333ab3b874dab267a1823ac33c84","url":"core/useWebWorker/index.html"},{"revision":"ed9f2b508bac9a78fb34a66dc10ece5f","url":"core/useWebWorkerFn/index.html"},{"revision":"ba4bfbf000196f1ee8a895f68eb7cd18","url":"core/useWindowFocus/index.html"},{"revision":"551d5a959b5139b24a92811418ed72bb","url":"core/useWindowScroll/index.html"},{"revision":"4337d74198b8b6c49d80f9140437ab5b","url":"core/useWindowSize/index.html"},{"revision":"9b011b035efed8a4d76e85965219be90","url":"ecosystem.html"},{"revision":"f74803b4e7d8fab5890fb07b07f097dd","url":"electron/README.html"},{"revision":"f3c93863bc57473dc1f96c645893f1a6","url":"electron/useIpcRenderer/index.html"},{"revision":"f643791dccd8d8add92ce320c0cd99ae","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"efc1147de416bbfb407fbbf249223c80","url":"electron/useIpcRendererOn/index.html"},{"revision":"436e8c2e1d69c62c604907058e30804a","url":"electron/useZoomFactor/index.html"},{"revision":"2e1702913c491ea8fbeb74ad86189d46","url":"electron/useZoomLevel/index.html"},{"revision":"50296405522320b0bb5fbd825dc97093","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"4972a54f3f341f9e1b9f004a179abd78","url":"firebase/README.html"},{"revision":"bcc33ace041176b2e21ba5146223b82d","url":"firebase/useAuth/index.html"},{"revision":"f4dcf6e0b7d7143f93721c7f1a969134","url":"firebase/useFirestore/index.html"},{"revision":"4ec92cf5c1d4d73d5e2f269db836d298","url":"firebase/useRTDB/index.html"},{"revision":"1f02e0b8ce5c0c92ffe8687926be5557","url":"functions.html"},{"revision":"e1f8dc806cb481df6b4a06de590c984c","url":"guide/best-practice.html"},{"revision":"9084d02b71db75d25926ebac7e83abf8","url":"guide/components.html"},{"revision":"6a08af956260c24d66174410054612dc","url":"guide/config.html"},{"revision":"d37b1427cc77705115d4145e07909bba","url":"guide/index.html"},{"revision":"474a33ba3c6b4c88b646b67ec565415a","url":"guidelines.html"},{"revision":"c79315fe42bbb4706f299ccefa456c37","url":"index.html"},{"revision":"886ff1d5d815f06748d79145dc9a413b","url":"integrations/README.html"},{"revision":"f65f81e5381c3a418d1bcf2cfe8bcf43","url":"integrations/useAsyncValidator/index.html"},{"revision":"ef80583ecdae754e72588db8b64e7d71","url":"integrations/useAxios/index.html"},{"revision":"4645510539067181f0ecc2c4f842c019","url":"integrations/useChangeCase/index.html"},{"revision":"07521d51e951bf4d69e84706c0f41f3e","url":"integrations/useCookies/index.html"},{"revision":"371485d5229e00b6835d5edde4266b7c","url":"integrations/useDrauu/index.html"},{"revision":"83fed18ae5ae73088f8a8ae5faed87ce","url":"integrations/useFocusTrap/index.html"},{"revision":"42981fa64d2747bbbf34cb62ffde3cb2","url":"integrations/useFuse/index.html"},{"revision":"9a7f6b6ed08e4cfeee0813fc7639d052","url":"integrations/useIDBKeyval/index.html"},{"revision":"0241c49f54feb7473941480e6e77963d","url":"integrations/useJwt/index.html"},{"revision":"3ca50631a23d577745a8d5ae045a53c6","url":"integrations/useNProgress/index.html"},{"revision":"68fff913b8cdc93e644f5525cd0ad1ad","url":"integrations/useQRCode/index.html"},{"revision":"a55eea0800a7c093a602f29a64e4578b","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"167a81bbcb8a6685a01bb87e52870de2","url":"math/createGenericProjection/index.html"},{"revision":"f0c0593f352ae11959ddc81cbbd4bb39","url":"math/createProjection/index.html"},{"revision":"64e740d0df7ebcf9a226d8c644ca3a58","url":"math/logicAnd/index.html"},{"revision":"db4ea822f44702d19a94479e6ccb38b3","url":"math/logicNot/index.html"},{"revision":"36186d368182008cca8dd6be1f316372","url":"math/logicOr/index.html"},{"revision":"03e14245c77711adfa9370a870d04906","url":"math/README.html"},{"revision":"ab92e8808eec9b7bf81b4c01116814a9","url":"math/useAbs/index.html"},{"revision":"86c3003856db2a93da776b5ebc8d3c60","url":"math/useAverage/index.html"},{"revision":"5811b89c04a0af2435de58b336959289","url":"math/useCeil/index.html"},{"revision":"e8850ea84ff1070328c4c75a70d0b7d5","url":"math/useClamp/index.html"},{"revision":"286597c7c2098d643c038ad79a3bf23e","url":"math/useFloor/index.html"},{"revision":"80ab0436449db6f5f85d557a0d60e78e","url":"math/useMath/index.html"},{"revision":"cdac7ec5722d98ba7751fe3a2b83a296","url":"math/useMax/index.html"},{"revision":"be91a9d23ba69027b3ac39f496ccb6bd","url":"math/useMin/index.html"},{"revision":"9c528fd2450fff43742f99d1c9fceb6c","url":"math/usePrecision/index.html"},{"revision":"3132535641cd21a1b6de4b1d04c9380a","url":"math/useProjection/index.html"},{"revision":"202ced500ef37f949efc8eafe500feef","url":"math/useRound/index.html"},{"revision":"3f2541be9ee22d29901e86630a22ac94","url":"math/useSum/index.html"},{"revision":"4eea283953a81cd9ddafdaf95cb7c28b","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"da0c11d7bcfc61b8ffe1a607cf4e8dbb","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"15bd43403c8a9b132ec2b16a3de2fa69","url":"router/README.html"},{"revision":"1ad796aa7ea8e5f32036a01609b98cb1","url":"router/useRouteHash/index.html"},{"revision":"74af704ca1dde4680da52ab55db042cf","url":"router/useRouteParams/index.html"},{"revision":"dc36e9e26f324b25a5cd14aad421ff32","url":"router/useRouteQuery/index.html"},{"revision":"ebe273b6c1c79f4438d1babed40bb6c5","url":"rxjs/from/index.html"},{"revision":"a3daa66417f656ab1b7eaefcbf4096f2","url":"rxjs/README.html"},{"revision":"bb99540a0cb5c39137c2408bceb61f63","url":"rxjs/toObserver/index.html"},{"revision":"68dc652abfde51d473f82108f1bdd7cb","url":"rxjs/useExtractedObservable/index.html"},{"revision":"53684f01ecaebca513be5ef3182ed6fb","url":"rxjs/useObservable/index.html"},{"revision":"475bc9e118b97cf16164dc85e94ba93a","url":"rxjs/useSubject/index.html"},{"revision":"0bd3056179002b99ee8cb8b997462a10","url":"rxjs/useSubscription/index.html"},{"revision":"8bf8c3aaf0dade4b4bbfb1c6ba3abf9e","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"616e9d0526aa0776e3bf05debc2a374b","url":"shared/computedEager/index.html"},{"revision":"149d5492c985d1a7175e808bd2fa8049","url":"shared/computedWithControl/index.html"},{"revision":"311202a40f81747b7ace529e9b24e596","url":"shared/createEventHook/index.html"},{"revision":"b43c6f0fdd50a68ef1f3d3fe4492a34a","url":"shared/createGlobalState/index.html"},{"revision":"2a5208616d504dcc9e8bc2462b50545b","url":"shared/createInjectionState/index.html"},{"revision":"8a71d93e5fbb6eae8d0031fa33cb18a5","url":"shared/createRef/index.html"},{"revision":"ca8efc6cba72f670b5820f9b84b45615","url":"shared/createSharedComposable/index.html"},{"revision":"dfb437c5a945bfb4c57d8df9b57a7a81","url":"shared/extendRef/index.html"},{"revision":"f28afd7181371d8a4bec7d74ec223c30","url":"shared/get/index.html"},{"revision":"3d41f3a94f71da72018be9d5534744e3","url":"shared/injectLocal/index.html"},{"revision":"749e3cb5fb75519468c65beefe3d87f8","url":"shared/isDefined/index.html"},{"revision":"a50fe01a7b295caa9ae2b31b55084666","url":"shared/makeDestructurable/index.html"},{"revision":"aa4c0f3f32f1d820c6d95eafad285efd","url":"shared/provideLocal/index.html"},{"revision":"24e5ee7fff0f7216117e9f93ae3a7c96","url":"shared/reactify/index.html"},{"revision":"36eabc10c225a2d1b36e3a4884cfc7b6","url":"shared/reactifyObject/index.html"},{"revision":"2af1ade9df3459377215116a0d4cb005","url":"shared/reactiveComputed/index.html"},{"revision":"0403b695c0d321f66b0fc28cb57e39b5","url":"shared/reactiveOmit/index.html"},{"revision":"62664d1d7c635784760bb24a447e5f5d","url":"shared/reactivePick/index.html"},{"revision":"4338961823367dd46fc8ed01d3c81119","url":"shared/refAutoReset/index.html"},{"revision":"7713ff06eec6a3e56fe68940b0ec22c6","url":"shared/refDebounced/index.html"},{"revision":"30207d487a086ad5b8beceb0d6bbaca2","url":"shared/refDefault/index.html"},{"revision":"1d37b549dab367ab15db6d005fe46b1c","url":"shared/refThrottled/index.html"},{"revision":"f993450c1301cef978d024dce68427c2","url":"shared/refWithControl/index.html"},{"revision":"bff232e9f74f4b9f9574259e1cc8c4a5","url":"shared/set/index.html"},{"revision":"19e9a2f3d957bea2aa3012c352fbefee","url":"shared/syncRef/index.html"},{"revision":"99d5c291f6a446d4242c41d9a8e56419","url":"shared/syncRefs/index.html"},{"revision":"b5e34ecc3b6589053a0bc1138aa95dfc","url":"shared/toReactive/index.html"},{"revision":"6a14b1a97a835b8091dd9103a82ba539","url":"shared/toRef/index.html"},{"revision":"1923e242f96ec338e23fd1d7d50c4c78","url":"shared/toRefs/index.html"},{"revision":"3830e813c6fa0f12553a4437a6716099","url":"shared/toValue/index.html"},{"revision":"546fb2e2143b42e547dd3beacfd60de1","url":"shared/tryOnBeforeMount/index.html"},{"revision":"cd19766c058e62bf0b88804597d88921","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"cead163a770c9cce7e0416735d08d735","url":"shared/tryOnMounted/index.html"},{"revision":"e777d4a40b8620ccea046af09dfdcced","url":"shared/tryOnScopeDispose/index.html"},{"revision":"7ab95a080f6e4cee328a8da1441262ed","url":"shared/tryOnUnmounted/index.html"},{"revision":"591ebe0091f070c58dd71b63a6722dad","url":"shared/until/index.html"},{"revision":"b2d36d2569f830eb5ad47de89f22d02d","url":"shared/useArrayDifference/index.html"},{"revision":"da71d64ae7a7ebbfc0dc76e328c3fadd","url":"shared/useArrayEvery/index.html"},{"revision":"9f84d930789256a9f4cd50f82459ef9e","url":"shared/useArrayFilter/index.html"},{"revision":"5bd90921a59f942c78942c369c0d4354","url":"shared/useArrayFind/index.html"},{"revision":"9aa93274d9dd4349ea47025329c86758","url":"shared/useArrayFindIndex/index.html"},{"revision":"d404750cbc1f8fb4c13f992d32f4ffbb","url":"shared/useArrayFindLast/index.html"},{"revision":"a21d1d70bff18ce797d27e565d7f0364","url":"shared/useArrayIncludes/index.html"},{"revision":"48ce4af2ab9e8fac70414f00617fdffd","url":"shared/useArrayJoin/index.html"},{"revision":"18b6ead73a18238f3de8fc3c83e3708c","url":"shared/useArrayMap/index.html"},{"revision":"33ff786f6fb9abe2dc4e2c6966bbc62d","url":"shared/useArrayReduce/index.html"},{"revision":"bc5fb2023c1e9cce9f8ddd7c3e39b88c","url":"shared/useArraySome/index.html"},{"revision":"6e8c8a3557422737c16d74931be4ec18","url":"shared/useArrayUnique/index.html"},{"revision":"8858f11210d1bbf493e785e2f897460f","url":"shared/useCounter/index.html"},{"revision":"0240fd5e41416a3505f8515ab2db0d30","url":"shared/useDateFormat/index.html"},{"revision":"5c416da27cc53af55ff60c4da7600498","url":"shared/useDebounceFn/index.html"},{"revision":"869895a4a6b3dfb4ac2a4916beedcc92","url":"shared/useInterval/index.html"},{"revision":"78eb7afefdecd9d589e3202a3e8fbd53","url":"shared/useIntervalFn/index.html"},{"revision":"8ca0b8e4fda993a277effc924c617d7b","url":"shared/useLastChanged/index.html"},{"revision":"7afe289a08370c0b5c774557c50c32cc","url":"shared/useThrottleFn/index.html"},{"revision":"74f0bb452bdd0b78e59c6efd6bf1794d","url":"shared/useTimeout/index.html"},{"revision":"bc0fedeccb54c93eae0aaa96d37225fa","url":"shared/useTimeoutFn/index.html"},{"revision":"136b0cd240b72d4970f868098e1b8a81","url":"shared/useToggle/index.html"},{"revision":"7299c919519f92398df04ac6faa22eb3","url":"shared/useToNumber/index.html"},{"revision":"810776a89ef68a6c4d93d0e31c28e807","url":"shared/useToString/index.html"},{"revision":"9f42150ba9275e10104c73342dfac095","url":"shared/watchArray/index.html"},{"revision":"b745d18aba10a63f472aa4b442827ba8","url":"shared/watchAtMost/index.html"},{"revision":"ce355b362263b7a31dda7a64cf9bdf18","url":"shared/watchDebounced/index.html"},{"revision":"4c7323bb1a1c98b6bedb1951d6e2d497","url":"shared/watchDeep/index.html"},{"revision":"5e6bb4d72ff5091bc01c6154f9ec2afd","url":"shared/watchIgnorable/index.html"},{"revision":"ff382ef7b4ec2a5152efc09e99f7eaed","url":"shared/watchImmediate/index.html"},{"revision":"2a9050223d557a839cdb2bd73fe554ee","url":"shared/watchOnce/index.html"},{"revision":"415268c11f129e4062a720ebc9da414f","url":"shared/watchPausable/index.html"},{"revision":"aa8608e1d82257f69e6c5c2ce6a622d5","url":"shared/watchThrottled/index.html"},{"revision":"36f240babd757d1e86e4831f9946a04b","url":"shared/watchTriggerable/index.html"},{"revision":"bb025143836270ee64300018113a2256","url":"shared/watchWithFilter/index.html"},{"revision":"b3a4334a9e604cc1487410b04bebd024","url":"shared/whenever/index.html"},{"revision":"4a5bc741e47a17817a29514e7629fc60","url":"team.html"},{"revision":"ace7ab6bc932be145115857c39f7d63a","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"3156edefbaf3f8fcd457ee6464255ec1","url":"why-no-translations.html"},{"revision":"5fd25cc26cb70c280ed9b5be84e6add1","url":"hashmap.json"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"97a9e31aee065e25bd6ee2ded3b39293","url":"manifest.webmanifest"}];
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
