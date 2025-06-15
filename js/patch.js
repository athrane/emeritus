var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// NAMESPACE OBJECT: ./src/core/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  UTILS: () => (UTILS),
  ajax: () => (ajax),
  ajaxSync: () => (ajaxSync),
  basename: () => (basename),
  cacheBust: () => (cacheBust),
  clamp: () => (clamp),
  cleanJson: () => (cleanJson),
  copyArray: () => (copyArray),
  filename: () => (filename),
  generateUUID: () => (generateUUID),
  getShortOpName: () => (getShortOpName),
  keyCodeToName: () => (keyCodeToName),
  logErrorConsole: () => (logErrorConsole),
  logStack: () => (logStack),
  map: () => (map),
  prefixedHash: () => (prefixedHash),
  request: () => (request),
  shortId: () => (shortId),
  shuffleArray: () => (shuffleArray),
  simpleId: () => (simpleId),
  smoothStep: () => (smoothStep),
  smootherStep: () => (smootherStep),
  uuid: () => (uuid)
});

// NAMESPACE OBJECT: ./src/core/anim.js
var anim_namespaceObject = {};
__webpack_require__.r(anim_namespaceObject);
__webpack_require__.d(anim_namespaceObject, {
  ANIM: () => (ANIM),
  Anim: () => (Anim)
});

;// CONCATENATED MODULE: ./src/core/constants.js
const CONSTANTS = {
    "ANIM": {
        "EASINGS": [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
        ],
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15,
        "PACO_OP_RELOAD": 16
    },
};

;// CONCATENATED MODULE: ./src/core/utils.js

/**
 * @namespace external:CABLES#Utils
 */



const UTILS = {};
/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @memberof Utils
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
UTILS.float32Concat = function (first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
};

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @memberof Utils
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


/**
 * generate a short "relativly unique" id
 * @function shortId
 * @memberof Utils
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const _shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = _shortId();
    _shortIds[str] = true;
    return str;
};
const shortId = _shortId;


/**
 * generate a UUID
 * @function uuid
 * @memberof Utils
 * @return {String} generated UUID
 * @static
 */
const _uuid = function ()
{
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
const uuid = _uuid;
const generateUUID = _uuid;



function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}


/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @memberof Utils
 * @param str
 * @param prefix
 * @return {string}
 */
const _prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (Array.prototype.reduce)
    {
        hash = str.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    }
    else
    {
        if (str.length > 0)
        {
            for (let i = 0; i < str.length; i++)
            {
                let character = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash &= hash; // Convert to 32bit integer
            }
        }
    }
    return prefix + "" + hash;
};
const prefixedHash = _prefixedHash;

/**
 * generate a simple ID
 * @function simpleId
 * @memberof Utils
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @memberof Utils
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @memberof Utils
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};


/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @memberof Utils
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @memberof Utils
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

/**
 * @namespace Math
 */
/**
 * set random seed for seededRandom()
 * @memberof Math
 * @type Number
 * @static
 */
Math.randomSeed = 1;


Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};


/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};


// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @memberof Utils
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
UTILS.isNumeric = function (n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * returns true if parameter is array
 * @function isArray
 * @param {Any} v value Value to check
 * @memberof Utils
 * @return {Boolean}
 * @static
 */
UTILS.isArray = function (v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
};

/**
 * @namespace String
 */

/**
 * append a linebreak to a string
 * @function endl
 * @memberof String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

/**
 * return true if string starts with prefix
 * @function startsWith
 * @memberof String
 * @param {String} prefix The prefix to check.
 * @return {Boolean}
 */
String.prototype.startsWith = function (prefix)
{
    if (!this || !prefix) return false;
    if (this.length >= prefix.length)
    {
        if (this.substring(0, prefix.length) == prefix) return true;
    }
    return false;
    // return this.indexOf(prefix) === 0;
};

/**
 * return true if string ends with suffix
 * @function endsWith
 * @memberof String
 * @param {String} suffix
 * @return {Boolean}
 */
String.prototype.endsWith = String.prototype.endsWith || function (suffix)
{
    return this.match(suffix + "$") == suffix;
};

/**
 * return true if string contains string
 * @function contains
 * @memberof String
 * @param {String} searchStr
 * @return {Boolean}
 */
String.prototype.contains = String.prototype.contains || function (searchStr)
{
    return this.indexOf(searchStr) > -1;
};



// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @memberof Utils
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.contains("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @memberof Utils
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
    {
        dst[i] = src[i];
    }

    return dst;
};


/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 * @memberof Utils
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.contains(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};


const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};


const keyCodeToName = function (keyCode)
{
    if (!keyCode && keyCode !== 0) return "Unidentified";
    const keys = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": "Space",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    if (keys[keyCode])
    {
        return keys[keyCode];
    }
    else
    {
        return String.fromCharCode(keyCode);
    }
};
// ----------------------------------------------------------------

window.performance = window.performance || {
    "offset": Date.now(),
    "now": function now()
    {
        return Date.now() - this.offset;
    },
};


const logErrorConsole = function (initiator)
{
    CABLES.errorConsole = CABLES.errorConsole || { "log": [] };
    CABLES.errorConsole.log.push({ "initiator": initiator, "arguments": arguments });

    if (!CABLES.errorConsole.ele)
    {
        const ele = document.createElement("div");
        ele.id = "cablesErrorConsole";
        ele.style.width = "90%";
        ele.style.height = "300px";
        ele.style.zIndex = "9999999";
        ele.style.display = "inline-block";
        ele.style.position = "absolute";
        ele.style.padding = "10px";
        ele.style.fontFamily = "monospace";
        ele.style.color = "red";
        ele.style.backgroundColor = "#200";

        CABLES.errorConsole.ele = ele;
        document.body.appendChild(ele);
    }

    let logHtml = "ERROR<br/>for more info, open your browsers dev tools console (Ctrl+Shift+I or Command+Alt+I)<br/>";

    for (let l = 0; l < CABLES.errorConsole.log.length; l++)
    {
        logHtml += CABLES.errorConsole.log[l].initiator + " ";
        for (let i = 1; i < CABLES.errorConsole.log[l].arguments.length; i++)
        {
            if (i > 2)logHtml += ", ";
            let arg = CABLES.errorConsole.log[l].arguments[i];
            if (arg.constructor.name.indexOf("Error") > -1 || arg.constructor.name.indexOf("error") > -1)
            {
                let txt = "Uncaught ErrorEvent ";
                if (arg.message)txt += " message: " + arg.message;
                logHtml += txt;
            }
            else if (typeof arg == "string")
                logHtml += arg;
            else if (typeof arg == "number")
                logHtml += String(arg) + " ";
        }
        logHtml += "<br/>";
    }


    CABLES.errorConsole.ele.innerHTML = logHtml;
};




;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator, options)
    {
        this.initiator = initiator;
        this._options = options;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.UI)
        {
            console.error("[" + this.initiator + "]", ...arguments);
        }

        if (this._options && this._options.onError)
        {
            this._options.onError(this.initiator, ...arguments);
            // console.log("emitevent onerror...");
            // CABLES.patch.emitEvent("onError", this.initiator, ...arguments);
            // CABLES.logErrorConsole("[" + this.initiator + "]", ...arguments);
        }
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


const Key = function (obj)
{
    this.time = 0.0;
    this.value = 0.0;
    // this.ui = null;
    this.onChange = null;
    this._easing = 0;
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null;
    this.cbTriggered = false;

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR);
    this.set(obj);
};

Key.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

Key.easeCubicSpline = function (perc, key2)
{
    return Key.cubicSpline(perc, this, key2);
};


Key.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

Key.easeLinear = function (perc, key2)
{
    return Key.linear(perc, this, key2);
};

Key.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

Key.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return Key.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

Key.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return Key.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

Key.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return Key.linear(t, this, key2);
};

Key.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return Key.linear(t, this, key2);
};

Key.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return Key.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

Key.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return Key.linear(t, this, key2);
};


// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

Key.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return Key.linear(t, this, key2);
};
Key.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return Key.linear(t, this, key2);
};
Key.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return Key.linear(t, this, key2);
};

Key.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return Key.linear(t, this, key2);
};

Key.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return Key.linear(t, this, key2);
};

Key.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return Key.linear(t, this, key2);
};

Key.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

Key.easeInBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

Key.easeOutBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
};

Key.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return Key.linear(t, this, key2);
};


Key.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return Key.linear(t, this, key2);
};

Key.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return Key.linear(t, this, key2);
};

Key.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return Key.linear(t, this, key2);
};

Key.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return Key.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

Key.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return Key.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

Key.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return Key.linear(perc, this, key2);
};

Key.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return Key.linear(perc, this, key2);
};

Key.prototype.setEasing = function (e)
{
    this._easing = e;

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear;
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE)
    {
        // this._updateBezier = true;
        this.ease = Key.easeCubicSpline;
    }
    else
    {
        this._easing = CONSTANTS.ANIM.EASING_LINEAR;
        this.ease = Key.easeLinear;
    }
};

Key.prototype.trigger = function ()
{
    this.cb();
    this.cbTriggered = true;
};

Key.prototype.setValue = function (v)
{
    this.value = v;
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange();
};

Key.prototype.set = function (obj)
{
    if (obj)
    {
        if (obj.e) this.setEasing(obj.e);
        if (obj.cb)
        {
            this.cb = obj.cb;
            this.cbTriggered = false;
        }

        if (obj.b)
        {
            // this.bezTime = obj.b[0];
            // this.bezValue = obj.b[1];
            // this.bezTimeIn = obj.b[2];
            // this.bezValueIn = obj.b[3];
            // this._updateBezier = true;
        }

        if (obj.hasOwnProperty("t")) this.time = obj.t;
        if (obj.hasOwnProperty("time")) this.time = obj.time;
        if (obj.hasOwnProperty("v")) this.value = obj.v;
        else if (obj.hasOwnProperty("value")) this.value = obj.value;
    }
    if (this.onChange !== null) this.onChange();
};

Key.prototype.getSerialized = function ()
{
    const obj = {};
    obj.t = this.time;
    obj.v = this.value;
    obj.e = this._easing;
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj;
};

Key.prototype.getEasing = function ()
{
    return this._easing;
};



;// CONCATENATED MODULE: ./src/core/eventtarget.js


const EventTarget = function ()
{
    this._log = new Logger("eventtarget");
    this._eventCallbacks = {};
    this._logName = "";
    this._logEvents = false;
    this._listeners = {};

    this.addEventListener = this.on = function (which, cb, idPrefix)
    {
        const event =
        {
            "id": (idPrefix || "") + CABLES.simpleId(),
            "name": which,
            "cb": cb,
        };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    };

    this.hasEventListener = function (which, cb)
    {
        if (which && !cb)
        {
            // check by id
            if (this._listeners[which]) return true;
            else return false;
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (which && cb)
            {
                if (this._eventCallbacks[which])
                {
                    const idx = this._eventCallbacks[which].indexOf(cb);
                    if (idx == -1) return false;
                    return true;
                }
            }
        }
    };

    this.hasListenerForEventName = function (eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    };

    this.removeEventListener = this.off = function (which, cb)
    {
        if (which === null || which === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[which];
            if (!event)
            {
                this._log.log("removeEvent: could not find event...", which, this);
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.startsWith(which)) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[which];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[which].length; i++)
            if (this._eventCallbacks[which][i].cb == cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + which);
    };

    this.logEvents = function (enabled, name)
    {
        this._logEvents = enabled;
        this._logName = name;
    };

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    };
};



;// CONCATENATED MODULE: ./src/core/anim.js





/**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <code>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </code>
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

const Anim = function (cfg)
{
    EventTarget.apply(this);

    cfg = cfg || {};
    this.keys = [];
    this.onChange = null;
    this.stayInTimeline = false;
    this.loop = false;
    this._log = new Logger("Anim");
    this._lastKeyIndex = 0;
    this._cachedIndex = 0;
    this.name = cfg.name || null;

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR;
    this.onLooped = null;

    this._timesLooped = 0;
    this._needsSort = false;
};

Anim.prototype.forceChangeCallback = function ()
{
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.getLoop = function ()
{
    return this.loop;
};

Anim.prototype.setLoop = function (target)
{
    this.loop = target;
    this.emitEvent("onChange", this);
};

/**
 * returns true if animation has ended at @time
 * checks if last key time is < time
 * @param {Number} time
 * @returns {Boolean}
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.hasEnded = function (time)
{
    if (this.keys.length === 0) return true;
    if (this.keys[this._lastKeyIndex].time <= time) return true;
    return false;
};

Anim.prototype.isRising = function (time)
{
    if (this.hasEnded(time)) return false;
    const ki = this.getKeyIndex(time);
    if (this.keys[ki].value < this.keys[ki + 1].value) return true;
    return false;
};

/**
 * remove all keys from animation before time
 * @param {Number} time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clearBefore = function (time)
{
    const v = this.getValue(time);
    const ki = this.getKeyIndex(time);

    this.setValue(time, v);

    if (ki > 1) this.keys.splice(0, ki);
    this._updateLastIndex();
};
/**
 * remove all keys from animation
 * @param {Number} [time=0] set a new key at time with the old value at time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clear = function (time)
{
    let v = 0;
    if (time) v = this.getValue(time);
    this.keys.length = 0;
    this._updateLastIndex();
    if (time) this.setValue(time, v);
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.sortKeys = function ()
{
    this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
    this._updateLastIndex();
    this._needsSort = false;
    if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
};

Anim.prototype.getLength = function ()
{
    if (this.keys.length === 0) return 0;
    return this.keys[this.keys.length - 1].time;
};

Anim.prototype.getKeyIndex = function (time)
{
    let index = 0;
    let start = 0;
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
    for (let i = start; i < this.keys.length; i++)
    {
        if (time >= this.keys[i].time) index = i;
        if (this.keys[i].time > time)
        {
            if (time != 0) this._cachedIndex = index;
            return index;
        }
    }

    return index;
};

/**
 * set value at time
 * @function setValue
 * @memberof Anim
 * @instance
 * @param {Number} time
 * @param {Number} value
 * @param {Function} cb callback
 */
Anim.prototype.setValue = function (time, value, cb)
{
    let found = null;

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
        for (let i = 0; i < this.keys.length; i++)
            if (this.keys[i].time == time)
            {
                found = this.keys[i];
                this.keys[i].setValue(value);
                this.keys[i].cb = cb;
                break;
            }

    if (!found)
    {
        found = new Key(
            {
                "time": time,
                "value": value,
                "e": this.defaultEasing,
                "cb": cb,
            });
        this.keys.push(found);

        // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
        this._updateLastIndex();
    }

    if (this.onChange) this.onChange();
    this.emitEvent("onChange", this);
    this._needsSort = true;
    return found;
};

Anim.prototype.setKeyEasing = function (index, e)
{
    if (this.keys[index])
    {
        this.keys[index].setEasing(e);
        this.emitEvent("onChange", this);
    }
};

Anim.prototype.getSerialized = function ()
{
    const obj = {};
    obj.keys = [];
    obj.loop = this.loop;

    for (let i = 0; i < this.keys.length; i++)
        obj.keys.push(this.keys[i].getSerialized());

    return obj;
};

Anim.prototype.getKey = function (time)
{
    const index = this.getKeyIndex(time);
    return this.keys[index];
};

Anim.prototype.getNextKey = function (time)
{
    let index = this.getKeyIndex(time) + 1;
    if (index >= this.keys.length) index = this.keys.length - 1;

    return this.keys[index];
};

Anim.prototype.isFinished = function (time)
{
    if (this.keys.length <= 0) return true;
    return time > this.keys[this.keys.length - 1].time;
};

Anim.prototype.isStarted = function (time)
{
    if (this.keys.length <= 0) return false;
    return time >= this.keys[0].time;
};

/**
 * get value at time
 * @function getValue
 * @memberof Anim
 * @instance
 * @param {Number} [time] time
 * @returns {Number} interpolated value at time
 */
Anim.prototype.getValue = function (time)
{
    if (this.keys.length === 0)
    {
        return 0;
    }
    if (this._needsSort) this.sortKeys();

    if (!this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }

    if (time < this.keys[0].time)
    {
        // if (this.name)console.log("A");

        return this.keys[0].value;
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        const currentLoop = time / this.keys[this._lastKeyIndex].time;
        if (currentLoop > this._timesLooped)
        {
            this._timesLooped++;
            if (this.onLooped) this.onLooped();
        }
        time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
        time += this.keys[0].time;
    }

    const index = this.getKeyIndex(time);
    if (index >= this._lastKeyIndex)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }


    const index2 = index + 1;
    const key1 = this.keys[index];
    const key2 = this.keys[index2];

    if (key1.cb && !key1.cbTriggered) key1.trigger();

    if (!key2) return -1;

    const perc = (time - key1.time) / (key2.time - key1.time);

    if (!key1.ease) this.log._warn("has no ease", key1, key2);

    return key1.ease(perc, key2);
};

Anim.prototype._updateLastIndex = function ()
{
    this._lastKeyIndex = this.keys.length - 1;
};

Anim.prototype.addKey = function (k)
{
    if (k.time === undefined)
    {
        this.log.warn("key time undefined, ignoring!");
    }
    else
    {
        this.keys.push(k);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }
    this._updateLastIndex();
};

Anim.prototype.easingFromString = function (str)
{
    if (str == "linear") return CONSTANTS.ANIM.EASING_LINEAR;
    if (str == "absolute") return CONSTANTS.ANIM.EASING_ABSOLUTE;
    if (str == "smoothstep") return CONSTANTS.ANIM.EASING_SMOOTHSTEP;
    if (str == "smootherstep") return CONSTANTS.ANIM.EASING_SMOOTHERSTEP;

    if (str == "Cubic In") return CONSTANTS.ANIM.EASING_CUBIC_IN;
    if (str == "Cubic Out") return CONSTANTS.ANIM.EASING_CUBIC_OUT;
    if (str == "Cubic In Out") return CONSTANTS.ANIM.EASING_CUBIC_INOUT;

    if (str == "Expo In") return CONSTANTS.ANIM.EASING_EXPO_IN;
    if (str == "Expo Out") return CONSTANTS.ANIM.EASING_EXPO_OUT;
    if (str == "Expo In Out") return CONSTANTS.ANIM.EASING_EXPO_INOUT;

    if (str == "Sin In") return CONSTANTS.ANIM.EASING_SIN_IN;
    if (str == "Sin Out") return CONSTANTS.ANIM.EASING_SIN_OUT;
    if (str == "Sin In Out") return CONSTANTS.ANIM.EASING_SIN_INOUT;

    if (str == "Back In") return CONSTANTS.ANIM.EASING_BACK_IN;
    if (str == "Back Out") return CONSTANTS.ANIM.EASING_BACK_OUT;
    if (str == "Back In Out") return CONSTANTS.ANIM.EASING_BACK_INOUT;

    if (str == "Elastic In") return CONSTANTS.ANIM.EASING_ELASTIC_IN;
    if (str == "Elastic Out") return CONSTANTS.ANIM.EASING_ELASTIC_OUT;

    if (str == "Bounce In") return CONSTANTS.ANIM.EASING_BOUNCE_IN;
    if (str == "Bounce Out") return CONSTANTS.ANIM.EASING_BOUNCE_OUT;

    if (str == "Quart Out") return CONSTANTS.ANIM.EASING_QUART_OUT;
    if (str == "Quart In") return CONSTANTS.ANIM.EASING_QUART_IN;
    if (str == "Quart In Out") return CONSTANTS.ANIM.EASING_QUART_INOUT;

    if (str == "Quint Out") return CONSTANTS.ANIM.EASING_QUINT_OUT;
    if (str == "Quint In") return CONSTANTS.ANIM.EASING_QUINT_IN;
    if (str == "Quint In Out") return CONSTANTS.ANIM.EASING_QUINT_INOUT;
};

Anim.prototype.createPort = function (op, title, cb)
{
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS, "Cubic Out");

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set("linear");
    port.defaultValue = "linear";

    port.onChange = function ()
    {
        this.defaultEasing = this.easingFromString(port.get());
        this.emitEvent("onChangeDefaultEasing", this);

        if (cb) cb();
    }.bind(this);

    return port;
};

// ------------------------------

Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

const ANIM = { "Key": Key };




;// CONCATENATED MODULE: ./src/core/core_link.js



/**
 * @namespace external:CABLES#Link
 * @param {Object} scene The patch object
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
const Link = function (scene)
{
    EventTarget.apply(this);

    this.id = CABLES.simpleId();
    this.portIn = null;
    this.portOut = null;
    this.scene = scene; // todo: make private and rename to patch
    this.activityCounter = 0;
    this.ignoreInSerialize = false;
};

Link.prototype.setValue = function (v)
{
    if (v === undefined) this._setValue();
    else this.portIn.set(v);
};

Link.prototype.activity = function ()
{
    this.activityCounter++;
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
};

Link.prototype._setValue = function ()
{
    if (!this.portOut)
    {
        this.remove();
        return;
    }
    const v = this.portOut.get();

    if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
    {
        if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity();

        if (this.portIn.get() !== v)
        {
            this.portIn.set(v);
        }
        else
        {
            if (this.portIn.changeAlways) this.portIn.set(v);
            if (this.portOut.forceRefChange) this.portIn.forceChange();
        }
    }
};

/**
 * @function getOtherPort
 * @memberof Link
 * @instance
 * @param {Port} p port
 * @description returns the port of the link, which is not port
 */
Link.prototype.getOtherPort = function (p)
{
    if (p == this.portIn) return this.portOut;
    return this.portIn;
};

/**
 * @function remove
 * @memberof Link
 * @instance
 * @description unlink/remove this link from all ports
 */
Link.prototype.remove = function ()
{
    if (this.portIn) this.portIn.removeLink(this);
    if (this.portOut) this.portOut.removeLink(this);
    if (this.scene)
    {
        this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this);
    }

    if (this.portIn && (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY))
    {
        this.portIn.set(null);
        if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork();
    if (this.portOut) this.portOut.op._checkLinksNeededToWork();

    this.portIn = null;
    this.portOut = null;
    this.scene = null;
};

/**
 * @function link
 * @memberof Link
 * @instance
 * @description link those two ports
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.prototype.link = function (p1, p2)
{
    if (!Link.canLink(p1, p2))
    {
        console.warn("[core_link] cannot link ports!", p1, p2);
        return false;
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        this.portIn = p1;
        this.portOut = p2;
    }
    else
    {
        this.portIn = p2;
        this.portOut = p1;
    }

    p1.addLink(this);
    p2.addLink(this);

    this.setValue();

    if (p1.onLink) p1.onLink(this);
    if (p2.onLink) p2.onLink(this);

    p1.op._checkLinksNeededToWork();
    p2.op._checkLinksNeededToWork();
};

Link.prototype.getSerialized = function ()
{
    const obj = {};

    obj.portIn = this.portIn.getName();
    obj.portOut = this.portOut.getName();
    obj.objIn = this.portIn.op.id;
    obj.objOut = this.portOut.op.id;

    return obj;
};

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }


    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return "can not link: is animated";

    // if(p1.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)) return false;
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};



;// CONCATENATED MODULE: ./src/core/core_port.js







/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @class
 * @hideconstructor
 * @param ___op
 * @param name
 * @param type
 * @param uiAttribs
 * @example
 * const myPort=op.inString("String Port");
 */
const Port = function (___op, name, type, uiAttribs)
{
    EventTarget.apply(this);

    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger("core_port");
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN;
    this.id = String(CABLES.simpleId());
    this._op = ___op;

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = [];
    this.value = 0.0;
    this.name = name;
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE;
    this.uiAttribs = uiAttribs || {};
    this.anim = null;
    this._oldAnimVal = -5711;
    this.defaultValue = null;


    this._uiActiveState = true;
    this.ignoreValueSerialize = false;
    this.onLinkChanged = null;
    this.crashed = false;

    this._valueBeforeLink = null;
    this._lastAnimFrame = -1;
    this._animated = false;

    this.onValueChanged = null;
    this.onTriggered = null;
    this.onUiActiveStateChange = null;
    this.changeAlways = false;
    this.forceRefChange = false;

    this._useVariableName = null;

    this.activityCounter = 0;
    this.apf = 0;
    this.activityCounterStartFrame = 0;

    this._tempLastUiValue = null;

    Object.defineProperty(this, "title", {
        get()
        {
            return this.uiAttribs.title || this.name;
        } });

    Object.defineProperty(this, "parent", {
        get()
        {
            this._log.stack("use port.op, not .parent");
            return this._op;
        } });

    Object.defineProperty(this, "op", {
        get()
        {
            return this._op;
        } });

    Object.defineProperty(this, "val", {
        get()
        {
            // this._log.warn("val getter deprecated!", this);
            // this._log.stack("val getter deprecated");
            return this.get();
        },
        set(v)
        {
            // this._log.warn("val setter deprecated!", this);
            // this._log.stack("val setter deprecated");
            this.setValue(v);
        }
    });
};


/**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {string} which attrib name
 * @param {Port} port source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
Port.prototype.copyLinkedUiAttrib = function (which, port)
{
    if (!CABLES.UI) return;
    if (!this.isLinked()) return;

    const attr = {};
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
    port.setUiAttribs(attr);
};


// TODO make extend class for ports, like for ops only for ui
Port.prototype.getValueForDisplay = function ()
{
    let str = this.value;

    if (typeof this.value === "string" || this.value instanceof String)
    {
        if (str.length > 1000)
        {
            str = str.substring(0, 999);
            str += "...";
        }
        if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
        {
            str += " - ";

            if (!this.value) str += "false";
            else str += "true";
        }

        str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i)
        {
            return "&#" + i.charCodeAt(0) + ";";
        });


        if (str.length > 100) str = str.substring(0, 100);
    }
    else
    {
        str = this.value;
    }
    return str;
};

/**
 * change listener for input value ports, overwrite to react to changes
 * @function onChange
 * @memberof Port
 * @instance
 * @example
 * const myPort=op.inString("MyPort");
 * myPort.onChange=function()
 * {
 *   console.log("was changed to: ",myPort.get());
 * }
 *
 */
Port.prototype.onAnimToggle = function () {};
Port.prototype._onAnimToggle = function ()
{
    this.onAnimToggle();
};


/**
 * @function remove
 * @memberof Port
 * @instance
 * @description remove port
 */
Port.prototype.remove = function ()
{
    // this.setUiAttribs({ "hidePort": true });
    this.removeLinks();
    this._op.removePort(this);
};

/**
 * set ui attributes
 * @function setUiAttribs
 * @memberof Port
 * @instance
 * @param {Object} newAttribs
 * <pre>
 * title - overwrite title of port (by default this is portname)
 * greyout - port paramater will appear greyed out, can not be
 * hidePort - port will be hidden from op
 * hideParam - port params will be hidden from parameter panel
 * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
 * editorSyntax - set syntax highlighting theme for editor port
 * ignoreObjTypeErrors - do not auto check object types
 * </pre>
 * @example
 * myPort.setUiAttribs({greyout:true});
 */
Port.prototype.setUiAttribs = function (newAttribs)
{
    let changed = false;
    if (!this.uiAttribs) this.uiAttribs = {};

    for (const p in newAttribs)
    {
        if (newAttribs[p] === undefined)
        {
            // delete newAttribs[p];
            delete this.uiAttribs[p];
            continue;
        }
        if (this.uiAttribs[p] != newAttribs[p]) changed = true;
        this.uiAttribs[p] = newAttribs[p];

        if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
    }

    if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

    if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
};

/**
 * get ui attributes
 * @function getUiAttribs
 * @memberof Port
 * @example
 * myPort.getUiAttribs();
 */
Port.prototype.getUiAttribs = function ()
{
    return this.uiAttribs;
};

/**
 * get ui attribute
 * @function getUiAttrib
 * @memberof Port
 * @instance
 * @param {String} attribName
 * <pre>
 * attribName - return value of the ui-attribute, or null on unknown attribute
 * </pre>
 * @example
 * myPort.setUiAttribs("values");
 */
Port.prototype.getUiAttrib = function (attribName)
{
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName))
    {
        return null;
    }
    return this.uiAttribs[attribName];
};

/**
 * @function get
 * @memberof Port
 * @instance
 * @description get value of port
 */
Port.prototype.get = function ()
{
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum())
    {
        this._lastAnimFrame = this._op.patch.getFrameNum();

        let animval = this.anim.getValue(this._op.patch.timer.getTime());

        if (this.value != animval)
        {
            this.value = animval;
            this._oldAnimVal = this.value;
            this.forceChange();
        }
    }

    return this.value;
};

Port.prototype.setRef = function (v)
{
    this.forceRefChange = true;
    this.set(v);
};

/**
 * @function setValue
 * @memberof Port
 * @instance
 * @description set value of port / will send value to all linked ports (only for output ports)
 */
Port.prototype.set = Port.prototype.setValue = function (v)
{
    if (v === undefined) v = null;


    if (CABLES.UI && CABLES.UI.showDevInfos)
        if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT && this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && v && !this.forceRefChange)
            this._log.warn("object port uses .set", this.name, this.op.objName);


    if (this._op.enabled && !this.crashed)
    {
        if (v !== this.value || this.changeAlways || this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE || this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
        {
            if (this._animated)
            {
                this.anim.setValue(this._op.patch.timer.getTime(), v);
            }
            else
            {
                try
                {
                    this.value = v;
                    this.forceChange();
                }
                catch (ex)
                {
                    this.crashed = true;

                    this.setValue = function (_v) {};
                    this.onTriggered = function () {};

                    this._log.error("exception in ", this._op);
                    this._log.error(ex);

                    this._op.patch.emitEvent("exception", ex, this._op);
                }

                if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
            }

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
        }
    }
};

Port.prototype.updateAnim = function ()
{
    if (this._animated)
    {
        this.value = this.get();

        if (this._oldAnimVal != this.value || this.changeAlways)
        {
            this._oldAnimVal = this.value;
            this.forceChange();
        }
        this._oldAnimVal = this.value;
    }
};

Port.prototype.forceChange = function ()
{
    if (this.onValueChanged || this.onChange)
    {
        // very temporary: deprecated warning!!!!!!!!!
        // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity();
    this.emitEvent("change", this.value, this);

    // try
    // {
    if (this.onChange) this.onChange(this, this.value);
    else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    // }
    // catch (e)
    // {
    //     console.log(e);
    // }
};

/**
 * @function getTypeString
 * @memberof Port
 * @instance
 * @description get port type as string, e.g. "Function","Value"...
 * @return {String} type
 */
Port.prototype.getTypeString = function ()
{
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "Number";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "Trigger";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "Object";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "Dynamic";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "Array";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "String";
    return "Unknown";
};

Port.prototype.deSerializeSettings = function (objPort)
{
    if (!objPort) return;
    if (objPort.animated) this.setAnimated(objPort.animated);
    if (objPort.useVariable) this.setVariableName(objPort.useVariable);
    if (objPort.title) this.setUiAttribs({ "title": objPort.title });
    if (objPort.expose) this.setUiAttribs({ "expose": true });
    if (objPort.order) this.setUiAttribs({ "order": objPort.order });

    if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
    if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

    if (objPort.anim)
    {
        if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
        this._op._hasAnimPort = true;
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
        if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
        for (const ani in objPort.anim.keys)
        {
            this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]));
        }
        this.anim.sortKeys();
    }
};


Port.prototype.setInitialValue = function (v)
{
    if (this.op.preservedPortLinks[this.name])
    {
        for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
        {
            const lobj = this.op.preservedPortLinks[this.name][i];
            this.op.patch._addLink(
                lobj.objIn,
                lobj.objOut,
                lobj.portIn,
                lobj.portOut);
        }
    }


    if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
    {
        this.set(this.op.preservedPortValues[this.name]);
    }
    else
    if (v !== undefined) this.set(v);
    if (v !== undefined) this.defaultValue = v;
};




Port.prototype.getSerialized = function ()
{
    let obj = { "name": this.getName() };


    if (!this.ignoreValueSerialize && this.links.length === 0)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {}
        else obj.value = this.value;
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName;
    if (this._animated) obj.animated = true;
    if (this.anim) obj.anim = this.anim.getSerialized();
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
    if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

    if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
    if (this.uiAttribs.expose)
    {
        obj.expose = true;
        if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
    {
        obj.links = [];
        for (const i in this.links)
        {
            if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
        }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0)
    {
        for (const i in this.links)
        {
            if (!this.links[i].portIn || !this.links[i].portOut) continue;

            const otherp = this.links[i].getOtherPort(this);
            // check if functions exist, are defined in core_extend_ops code in ui
            if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
            {
                if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                {
                    obj.links = obj.links || [];
                    obj.links.push(this.links[i].getSerialized());
                }
            }
        }
    }

    if (obj.links && obj.links.length == 0) delete obj.links;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null;
    if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

    // console.log(obj);
    cleanJson(obj);

    return obj;
};

Port.prototype.shouldLink = function ()
{
    return true;
};

/**
 * @function removeLinks
 * @memberof Port
 * @instance
 * @description remove all links from port
 */
Port.prototype.removeLinks = function ()
{
    let count = 0;
    while (this.links.length > 0)
    {
        count++;
        if (count > 5000)
        {
            this._log.warn("could not delete links... / infinite loop");
            this.links.length = 0;
            break;
        }
        this.links[0].remove();
    }
};

/**
 * @function removeLink
 * @memberof Port
 * @instance
 * @description remove all link from port
 * @param {CABLES.Link} link
 */
Port.prototype.removeLink = function (link)
{
    for (const i in this.links)
        if (this.links[i] == link)
            this.links.splice(i, 1);

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0);
        else this.setValue(this._valueBeforeLink || null);
    }

    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    try
    {
        if (this.onLinkChanged) this.onLinkChanged();
        this.emitEvent("onLinkChanged");
        this.emitEvent("onLinkRemoved");
        this._op.emitEvent("onLinkChanged");
    }
    catch (e)
    {
        this._log.error(e);
    }
};

/**
 * @function getName
 * @memberof Port
 * @instance
 * @description return port name
 */
Port.prototype.getName = function ()
{
    return this.name;
};

/**
 * @function getTitle
 * @memberof Port
 * @instance
 * @description return port name or title
 */
Port.prototype.getTitle = function ()
{
    if (this.uiAttribs.title) return this.uiAttribs.title;
    return this.name;
};

Port.prototype.addLink = function (l)
{
    this._valueBeforeLink = this.value;
    this.links.push(l);
    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    try
    {
        if (this.onLinkChanged) this.onLinkChanged();
        this.emitEvent("onLinkChanged");
        this._op.emitEvent("onLinkChanged");
    }
    catch (e)
    {
        this._log.error(e);
    }
};

/**
 * @function getLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description return link, which is linked to otherPort
 */
Port.prototype.getLinkTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
};

/**
 * @function removeLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description removes link, which is linked to otherPort
 */
Port.prototype.removeLinkTo = function (p2)
{
    for (const i in this.links)
    {
        if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
        {
            this.links[i].remove();
            if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            return;
        }
    }
};

/**
 * @function isLinkedTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description returns true if port is linked to otherPort
 */
Port.prototype.isLinkedTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

    return false;
};

Port.prototype._activity = function ()
{
    this.activityCounter++;
};

/**
 * @function trigger
 * @memberof Port
 * @instance
 * @description trigger the linked port (usually invoked on an output function port)
 */
Port.prototype.trigger = function ()
{
    const linksLength = this.links.length;

    this._activity();
    if (linksLength === 0) return;
    if (!this._op.enabled) return;

    let portTriggered = null;
    try
    {
        for (let i = 0; i < linksLength; ++i)
        {
            if (this.links[i].portIn)
            {
                portTriggered = this.links[i].portIn;

                portTriggered.op.patch.pushTriggerStack(portTriggered);
                portTriggered._onTriggered();

                portTriggered.op.patch.popTriggerStack();
            }
            if (this.links[i]) this.links[i].activity();
        }
    }
    catch (ex)
    {
        portTriggered.op.enabled = false;

        if (this._op.patch.isEditorMode())
        {
            // this._op.patch.emitEvent("exception", ex, portTriggered.op);
            // this._op.patch.emitEvent("opcrash", portTriggered);
            // console.log("crash", portTriggered.op.objName);

            if (portTriggered.op.onError) portTriggered.op.onError(ex);
        }
        this._log.error("exception in port: ", portTriggered.name, portTriggered.op.name, portTriggered.op);
        this._log.error(ex);
    }
};

Port.prototype.call = function ()
{
    this._log.warn("call deprecated - use trigger() ");
    this.trigger();
};

Port.prototype.execute = function ()
{
    this._log.warn("### execute port: " + this.getName(), this.goals.length);
};

Port.prototype.setVariableName = function (n)
{
    this._useVariableName = n;


    this._op.patch.on("variableRename", (oldname, newname) =>
    {
        if (oldname != this._useVariableName) return;
        this._useVariableName = newname;
    });
};

Port.prototype.getVariableName = function ()
{
    return this._useVariableName;
};

Port.prototype.setVariable = function (v)
{
    this.setAnimated(false);
    const attr = { "useVariable": false };

    if (this._variableIn && this._varChangeListenerId)
    {
        this._variableIn.off(this._varChangeListenerId);
        this._variableIn = null;
    }

    if (v)
    {
        this._variableIn = this._op.patch.getVar(v);

        if (!this._variableIn)
        {
            this._log.warn("PORT VAR NOT FOUND!!!", v);
        }
        else
        {
            if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
            {
                this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
            }
            else
            {
                this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
            }
            this.set(this._variableIn.getValue());
        }
        this._useVariableName = v;
        attr.useVariable = true;
        attr.variableName = this._useVariableName;
    }
    else
    {
        attr.variableName = this._useVariableName = null;
        attr.useVariable = false;
    }

    this.setUiAttribs(attr);
    this._op.patch.emitEvent("portSetVariable", this._op, this, v);
};

Port.prototype._handleNoTriggerOpAnimUpdates = function (a)
{
    let hasTriggerPort = false;
    for (let i = 0; i < this._op.portsIn.length; i++)
    {
        if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        {
            hasTriggerPort = true;
            break;
        }
    }

    if (!hasTriggerPort)
    {
        if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame",
            () =>
            {
                this.updateAnim();
            });
        else this._op.patch.removeEventListener(this._notriggerAnimUpdate);
    }
};

Port.prototype.setAnimated = function (a)
{
    if (this._animated != a)
    {
        this._animated = a;
        this._op._hasAnimPort = true;

        if (this._animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.addEventListener("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this._onAnimToggle();
    }

    this._handleNoTriggerOpAnimUpdates(a);
    if (!a)
    {
        this.anim = null;
    }

    this.setUiAttribs({ "isAnimated": this._animated });
};

Port.prototype.toggleAnim = function ()
{
    this._animated = !this._animated;
    if (this._animated && !this.anim)
    {
        this.anim = new Anim({ "name": "port " + this.name });
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
    }
    this.setAnimated(this._animated);
    this._onAnimToggle();
    this.setUiAttribs({ "isAnimated": this._animated });
};

/**
 * <pre>
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
 * </pre>
 * @function getType
 * @memberof Port
 * @instance
 * @return {Number} type of port
 */
Port.prototype.getType = function ()
{
    return this.type;
};

/**
 * @function isLinked
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is linked
 */
Port.prototype.isLinked = function ()
{
    return this.links.length > 0 || this._animated || this._useVariableName != null;
};

Port.prototype.isBoundToVar = function ()
{
    const b = this._useVariableName != null;
    this.uiAttribs.boundToVar = b;
    return b;
};
/**
 * @function isAnimated
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is animated
 */
Port.prototype.isAnimated = function ()
{
    return this._animated;
};

/**
 * @function isHidden
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is hidden
 */
Port.prototype.isHidden = function ()
{
    return this.uiAttribs.hidePort;
};

/**
 * @function onTriggered
 * @memberof Port
 * @instance
 * @param {function} a onTriggeredCallback
 * @description set callback, which will be executed when port was triggered (usually output port)
 */
Port.prototype._onTriggered = function (a)
{
    this._activity();
    this._op.updateAnims();
    if (this._op.enabled && this.onTriggered) this.onTriggered(a);

    if (this._op.enabled) this.emitEvent("trigger");
};

Port.prototype._onSetProfiling = function (v)
{
    this._op.patch.profiler.add("port", this);
    this.setValue(v);
    this._op.patch.profiler.add("port", null);
};

Port.prototype._onTriggeredProfiling = function ()
{
    if (this._op.enabled && this.onTriggered)
    {
        this._op.patch.profiler.add("port", this);
        this.onTriggered();
        this._op.patch.profiler.add("port", null);
    }
};



Port.prototype.getUiActiveState = function ()
{
    return this._uiActiveState;
};

Port.prototype.setUiActiveState = function (onoff)
{
    this._uiActiveState = onoff;
    if (this.onUiActiveStateChange) this.onUiActiveStateChange();
};

/**
 * @deprecated
 * @param {function} cb
 */
Port.prototype.onValueChange = function (cb)
{
    this.onChange = cb;
};

/**
 * @deprecated
 */
Port.prototype.hidePort = function () {};


/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "value";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "function";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "object";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "array";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "string";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};



;// CONCATENATED MODULE: ./src/core/core_port_switch.js




class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}



;// CONCATENATED MODULE: ./src/core/core_port_select.js




class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}





;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        // console.log("uiattribs", uiAttribs);

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || undefined;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};


                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];


                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && !gui.isRemoteClient && gui.patchView && gui.patchView.patchRenderer && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?");
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }


                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }


            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));


                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });


                // if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                // po.multiPortTriggerListener = po.on("trigger", this.trigger());

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == CONSTANTS.OP.OP_PORT_TYPE_NUMBER) po.setInitialValue(0);
            else if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });


        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}





;// CONCATENATED MODULE: ./src/core/core_op.js









/**
 * op the class of all operators
 * @namespace external:CABLES#Op
 * @hideconstructor
 */

/**
 * @type {Object}
 * @name attachments
 * @instance
 * @memberof Op
 * @description access file attachments as String values
 * @example
 * // set shader source to attached files (files are called shader.vert / shader.frag)
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */

const Ops = {};

const Op = function ()
{
    EventTarget.apply(this);

    this._log = new Logger("core_op");
    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {}; // op-specific data to be included in export
    this.__objName = "";
    this.portsOut = [];
    this.portsIn = [];
    this.portsInData = []; // original loaded patch data
    this.opId = ""; // unique op id
    this.uiAttribs = {};
    this.enabled = true;
    this.patch = arguments[0];
    this._name = arguments[1];
    this.preservedPortTitles = {};
    this.preservedPortValues = {};
    this.preservedPortLinks = {};

    this._linkTimeRules = {
        "needsLinkedToWork": [],
        "needsParentOp": null
    };

    this.shouldWork = {};
    this.hasUiErrors = false;
    this._uiErrors = {};
    this._hasAnimPort = false;

    if (arguments[1])
    {
        this._shortOpName = CABLES.getShortOpName(arguments[1]);
        this.getTitle();
    }

    this.id = arguments[2] || shortId(); // instance id
    this.onAddPort = null;
    this.onCreate = null;
    this.onResize = null;
    this.onLoaded = null;
    this.onDelete = null;
    this.onError = null;

    this._instances = null;

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null;

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null;

    Object.defineProperty(this, "name", {
        get() { return this.getTitle(); },
        set(v)
        {
            this.setTitle(v);
        }
    });

    Object.defineProperty(this, "_objName", { set(on)
    {
        this.__objName = on; this._log = new Logger("op " + on);
    } });

    Object.defineProperty(this, "objName", { get() { return this.__objName; } });
    Object.defineProperty(this, "shortName", { get() { return this._shortOpName; } });

    if (this.initUi) this.initUi();
};

{
    Op.prototype.clearUiAttrib = function (name)
    {
        const obj = {};
        // obj.name = null;
        this.uiAttrib(obj);
    };

    Op.prototype.require = function (name)
    {
        if (CABLES.platform && CABLES.StandaloneElectron && !CABLES.platform.frontendOptions.isStandalone)
            this.setUiError("notstandalone", "This op will only work in cables standalone version", 3);

        return null;
    };


    Op.prototype.checkMainloopExists = function ()
    {
        if (!CABLES.UI) return;
        if (!this.patch.tempData.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    };

    Op.prototype.getTitle = function ()
    {
        if (!this.uiAttribs) return "nouiattribs" + this._name;

        // if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
        //     this.uiAttribs.title = this._shortOpName;

        return this.uiAttribs.title || this._shortOpName;
    };

    Op.prototype.setTitle = function (title)
    {
        // this._log.log("settitle", title);
        // this._log.log(
        //     (new Error()).stack
        // );

        if (title != this.getTitle()) this.uiAttr({ "title": title });
    };

    Op.prototype.setStorage = function (newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    };

    Op.prototype.isSubPatchOp = function ()
    {
        if (this.patchId && this.storage) return (this.storage.subPatchVer || this.storage.blueprintVer || 0);
        return false;
    };

    const _setUiAttrib = function (newAttribs)
    {
        if (!newAttribs) return;

        if (newAttribs.error || newAttribs.warning || newAttribs.hint)
        {
            this._log.warn("old ui error/warning attribute in " + this._name + ", use op.setUiError !", newAttribs);
        }


        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;


        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }


        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;


        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }


        if (emitMove) this.emitEvent("move");
    };
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib;

    Op.prototype.getName = function ()
    {
        if (this.uiAttribs.name) return this.uiAttribs.name;
        return this._name;
    };

    Op.prototype.addOutPort = function (p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    };

    Op.prototype.hasDynamicPort = function ()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    };

    Op.prototype.addInPort = function (p)
    {
        if (!(p instanceof Port)) throw new Error("parameter is not a port!");

        p.direction = CONSTANTS.PORT.PORT_DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    };

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };



    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat = Op.prototype.inValue = Op.prototype.inFloat = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    };

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    };


    Op.prototype.inMultiPort = function (name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    };

    Op.prototype.outMultiPort = function (name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    };



    Op.prototype.inValueString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        // if (v !== undefined)
        // {
        //     p.set(v);
        //     p.defaultValue = v;
        // }
        return p;
    };

    Op.prototype.inTextarea = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    };

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    };

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer"
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.inUrl = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    };


    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inGradient = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };


    Op.prototype.getPortVisibleIndex = function (p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    };

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        // if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
            // this._log.log("bool set", b, this.get());
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };
    Op.prototype.outString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    };

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.setRef(v || CGL.Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    };

    Op.prototype.inDynamic = function (name, filter, options, v)
    {
        const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options);

        p.shouldLink = function (p1, p2)
        {
            if (filter && UTILS.isArray(filter))
            {
                for (let i = 0; i < filter.length; i++)
                {
                    if (p1 == this && p2.type === filter[i]) return true;
                    if (p2 == this && p1.type === filter[i]) return true;
                }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.removeLinks = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    };

    Op.prototype.getSerialized = function ()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this._shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this._shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    };

    Op.prototype.getFirstOutPortByType = function (type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    };

    Op.prototype.getFirstInPortByType = function (type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    };

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    };


    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    };

    Op.prototype.updateAnims = function ()
    {
        if (this._hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    };

    Op.prototype.log = function ()
    {
        this._log.log(...arguments);
    };

    Op.prototype.error = Op.prototype.logError = function ()
    {
        // if (!this)
        // {
        //     this._log.error("no this...!!!");
        //     debugger;
        //     return;
        // }
        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 2 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.error, [console, args]);// eslint-disable-line
        // if (window.gui) window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
        this._log.error(...arguments);
    };

    Op.prototype.warn = Op.prototype.logWarn = function ()
    {
        this._log.warn(...arguments);

        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 1 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.warn, [console, args]);// eslint-disable-line
    };

    Op.prototype.verbose = Op.prototype.logVerbose = function ()
    {
        // const initiator = "op " + CABLES.getShortOpName(this.objName);
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 0 }, ...arguments)) return;

        // if (!CABLES.UI && this.patch.silent) return;

        // const args = ["[" + initiator + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.info, [console, args]);// eslint-disable-line
        this._log.verbose(...arguments);
    };


    Op.prototype.profile = function (enable)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    };

    Op.prototype.findParent = function (objName)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi].isLinked())
            {
                if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
                    return this.portsIn[ipi].links[0].portOut.parent;

                let found = null;
                found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
                if (found) return found;
            }
        }
        return null;
    };


    // todo: check instancing stuff?
    Op.prototype.cleanUp = function ()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
            {
                if (this._instances[i].onDelete) this._instances[i].onDelete();
            }


            this._instances.length = 0;
        }
        for (let i = 0; i < this.portsIn.length; i++)
        {
            this.portsIn[i].setAnimated(false);
        }

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    };

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort)
    {
        return false;
        // this._log.log("instanced", this.patch.instancing.numCycles());
        // if (this.patch.instancing.numCycles() === 0) return false;


        // let i = 0;
        // let ipi = 0;
        // if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
        // {
        //     if (!this._instances) this._instances = [];
        //     this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
        //     this._instances.length = this.patch.instancing.numCycles();

        //     for (i = 0; i < this._instances.length; i++)
        //     {
        //         this._instances[i] = this.patch.createOp(this.objName, true);
        //         this._instances[i].instanced = function ()
        //         {
        //             return false;
        //         };
        //         this._instances[i].uiAttr(this.uiAttribs);

        //         for (let ipo = 0; ipo < this.portsOut.length; ipo++)
        //         {
        //             if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
        //             }
        //         }
        //     }

        //     for (ipi = 0; ipi < this.portsIn.length; ipi++)
        //     {
        //         this.portsIn[ipi].onChange = null;
        //         this.portsIn[ipi].onValueChanged = null;
        //     }
        // }

        // const theTriggerPort = null;
        // for (ipi = 0; ipi < this.portsIn.length; ipi++)
        // {
        //     if (
        //         this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
        //         this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
        //     )
        //     {
        //         this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
        //     }
        //     if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //     {
        //         // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
        //         // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
        //     }
        // }

        // if (theTriggerPort) theTriggerPort.onTriggered();

        // for (ipi = 0; ipi < this.portsOut.length; ipi++)
        // {
        //     if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //     {
        //         this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
        //     }
        // }

        // return true;
    };

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function ()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    };

    Op.prototype.setValues = function (obj)
    {
        for (const i in obj)
        {
            const port = this.getPortByName(i);
            if (port) port.set(obj[i]);
            else this._log.warn("op.setValues: port not found:", i);
        }
    };

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id)
    {
        return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id];
    };

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level)
    {
        // overwritten in ui: core_extend_op
    };

    // todo: remove
    Op.prototype.setError = function (id, txt)
    {
        this._log.warn("old error message op.error() - use op.setUiError()");
    };


    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    };

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else
                {
                    this._log.error("setPortGroup: invalid port!");
                }
        }
    };

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    };

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    };

    Op.prototype._checkLinksNeededToWork = function () {};

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName)
    {
        this._linkTimeRules.needsParentOp = parentOpName;
    };

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this._linkTimeRules.forbiddenParentType = type;
    };


    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function ()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this._linkTimeRules.needsLinkedToWork.push(arguments[i]);
    };
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function ()
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    };

    Op.prototype.initVarPorts = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    };

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function ()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
        {
            gui.opParams.show(this);
        }
    };

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function ()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null; // optionaly defined in op instance
}



;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */
const LoadingStatus = function (patch)
{
    EventTarget.apply(this);

    this._log = new Logger("LoadingStatus");
    this._loadingAssets = {};
    this._cbFinished = [];
    this._assetTasks = [];
    this._percent = 0;
    this._count = 0;
    this._countFinished = 0;
    this._order = 0;
    this._startTime = 0;
    this._patch = patch;
    this._wasFinishedPrinted = false;
    this._loadingAssetTaskCb = false;
};

LoadingStatus.prototype.setOnFinishedLoading = function (cb)
{
    this._cbFinished.push(cb);
};

LoadingStatus.prototype.getNumAssets = function ()
{
    return this._countFinished;
};

LoadingStatus.prototype.getProgress = function ()
{
    return this._percent;
};

LoadingStatus.prototype.checkStatus = function ()
{
    this._countFinished = 0;
    this._count = 0;

    for (const i in this._loadingAssets)
    {
        this._count++;
        if (!this._loadingAssets[i].finished)
        {
            this._countFinished++;
        }
    }

    this._percent = (this._count - this._countFinished) / this._count;

    if (this._countFinished === 0)
    {
        for (let j = 0; j < this._cbFinished.length; j++)
        {
            if (this._cbFinished[j])
            {
                const cb = this._cbFinished[j];
                setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
            }
        }

        if (!this._wasFinishedPrinted)
        {
            this._wasFinishedPrinted = true;
            this.print();
        }
        this.emitEvent("finishedAll");
    }
};

LoadingStatus.prototype.getList = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        arr.push(this._loadingAssets[i]);
    }

    return arr;
};


LoadingStatus.prototype.getListJobs = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
    }

    return arr;
};

LoadingStatus.prototype.print = function ()
{
    if (this._patch.config.silent) return;

    const rows = [];

    for (const i in this._loadingAssets)
    {
        rows.push([
            this._loadingAssets[i].order,
            this._loadingAssets[i].type,
            this._loadingAssets[i].name,
            (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
        ]);
    }

    this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
    this._log.table(rows);
    this._log.groupEnd();
};

LoadingStatus.prototype.finished = function (id)
{
    const l = this._loadingAssets[id];
    if (l)
    {
        if (l.finished) this._log.warn("loading job was already finished", l);

        if (l.op) l.op.setUiAttribs({ "loading": false });
        l.finished = true;
        l.timeEnd = Date.now();
    }

    this.checkStatus();
    this.emitEvent("finishedTask");
    return null;
};

LoadingStatus.prototype._startAssetTasks = function ()
{
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
    this._assetTasks.length = 0;
};

/**
 * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
 * @function addAssetLoadingTask
 * @instance
 * @memberof LoadingStatus
 * @param {function} cb callback
 */
LoadingStatus.prototype.addAssetLoadingTask = function (cb)
{
    if (this._patch.isEditorMode() && !CABLES.UI.loaded)
    {
        this._assetTasks.push(cb);

        if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
        this._loadingAssetTaskCb = true;
    }
    else
    {
        cb();
    }
    this.emitEvent("addAssetTask");
};

LoadingStatus.prototype.existByName = function (name)
{
    for (let i in this._loadingAssets)
    {
        if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
            return true;
    }
};

LoadingStatus.prototype.start = function (type, name, op)
{
    if (this._startTime == 0) this._startTime = Date.now();
    const id = generateUUID();

    name = name || "unknown";
    if (name.length > 100)name = name.substring(0, 100);


    if (op)op.setUiAttribs({ "loading": true });

    this._loadingAssets[id] = {
        "id": id,
        "op": op,
        "type": type,
        "name": name,
        "finished": false,
        "timeStart": Date.now(),
        "order": this._order,
    };
    this._order++;

    this.emitEvent("startTask");

    return id;
};



;// CONCATENATED MODULE: ./src/core/timer.js


/** @namespace CABLES */

const internalNow = function ()
{
    return window.performance.now();
};



/**
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 */
const now = function ()
{
    return internalNow();
};

// ----------------------------

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
const Timer = function ()
{
    EventTarget.apply(this);

    this._timeStart = internalNow();
    this._timeOffset = 0;

    this._currentTime = 0;
    this._lastTime = 0;
    this._paused = true;
    this._delay = 0;
    this.overwriteTime = -1;
};


Timer.prototype._internalNow = function ()
{
    if (this._ts) return this._ts;
    return internalNow();
};

Timer.prototype._getTime = function ()
{
    this._lastTime = (this._internalNow() - this._timeStart) / 1000;
    return this._lastTime + this._timeOffset;
};

Timer.prototype.setDelay = function (d)
{
    this._delay = d;
    this.emitEvent("timeChange");
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @description returns true if timer is playing
 * @return {Boolean} value
 */
Timer.prototype.isPlaying = function ()
{
    return !this._paused;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @param ts
 * @description update timer
 * @return {Number} time
 */
Timer.prototype.update = function (ts)
{
    if (ts) this._ts = ts;
    if (this._paused) return;
    this._currentTime = this._getTime();

    return this._currentTime;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} time in milliseconds
 */
Timer.prototype.getMillis = function ()
{
    return this.get() * 1000;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} value time in seconds
 */
Timer.prototype.get = Timer.prototype.getTime = function ()
{
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
    return this._currentTime - this._delay;
};

/**
 * toggle between play/pause state
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.togglePlay = function ()
{
    if (this._paused) this.play();
    else this.pause();
};

/**
 * set current time
 * @function
 * @memberof Timer
 * @instance
 * @param {Number} t
 */
Timer.prototype.setTime = function (t)
{
    if (isNaN(t) || t < 0) t = 0;
    this._timeStart = this._internalNow();
    this._timeOffset = t;
    this._currentTime = t;
    this.emitEvent("timeChange");
};

Timer.prototype.setOffset = function (val)
{
    if (this._currentTime + val < 0)
    {
        this._timeStart = this._internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
    }
    else
    {
        this._timeOffset += val;
        this._currentTime = this._lastTime + this._timeOffset;
    }
    this.emitEvent("timeChange");
};

/**
 * (re)starts the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.play = function ()
{
    this._timeStart = this._internalNow();
    this._paused = false;
    this.emitEvent("playPause");
};

/**
 * pauses the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.pause = function ()
{
    this._timeOffset = this._currentTime;
    this._paused = true;
    this.emitEvent("playPause");
};



;// CONCATENATED MODULE: ./src/core/core_profiler.js


class Profiler
{
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};


const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};





const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};




;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js



class CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;
        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "sampler")
        {
            if (this.setValueAny)
            {
                this.set = this.setValue = this.setValueAny.bind(this);
                this.updateValue = this.updateValueAny.bind(this);
            }
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else
        {
            // console.error("unknown");
            this._log.error("Unknown uniform type " + __type);
        }

        if (typeof _value == "object" && _value instanceof Port)
        {
            this._port = _value;
            this._value = this._port.get();


            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;


        if (this._value == undefined)
        {
            console.log("value undefined", this);
            this._value = 0;
        }

        this.setValue(this._value);

        this.needsUpdate = true;
    }

    getType()
    {
        return this._type;
    }

    get type()
    {
        return this._type;
    }

    get name()
    {
        return this._name;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }


    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

/* harmony default export */ const cg_uniform = (CgUniform);

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {Shader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */


// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }


    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}


Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};


/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */



;// CONCATENATED MODULE: ./src/core/cg/cg_texture.js
const DEFAULT_TEXTURE_SIZE = 8;

class CgTexture
{
    constructor(options = {})
    {
        this.id = CABLES.uuid();
        this.width = 0;
        this.height = 0;
        this.name = "unknown";

        options = options || {};
        this.pixelFormat = options.pixelFormat || CgTexture.PFORMATSTR_RGBA8UB;

        this.name = options.name || "unknown";

        if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
        if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;
    }
}


CgTexture.getDefaultTextureData = (name, size, options = {}) =>
{
    if (name == "empty")
    {
        return new Uint8Array(size * size * 4).fill(0);
    }
    else
    if (name == "color")
    {
        const data = new Uint8Array(size * size * 4);
        let r = options.r || 1;
        let g = options.g || 1;
        let b = options.b || 1;

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = r;
            data[x * 4 + 1] = g;
            data[x * 4 + 2] = b;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "randomUInt")
    {
        const data = new Uint8Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = Math.random() * 255;
            data[x * 4 + 1] = Math.random() * 255;
            data[x * 4 + 2] = Math.random() * 255;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "random" || name == "randomFloat")
    {
        const data = new Float32Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 3] = 1;
        }
        return data;
    }
    else
    if (name == "stripes")
    {
        const arr = [];

        let r = options.r;
        let g = options.g;
        let b = options.b;

        if (r === undefined)r = 1;
        if (g === undefined)g = 1;
        if (b === undefined)b = 1;

        for (let y = 0; y < size; y++)
        {
            for (let x = 0; x < size; x++)
            {
                if ((x + y) % 64 < 32)
                {
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
                }
                else
                {
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
                }
                arr.push(255);
            }
        }

        return new Uint8Array(arr);
    }
    else
    {
        console.warn("unknown default texture", name);
        return CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 });
    }
};



CgTexture.FILTER_NEAREST = 0;
CgTexture.FILTER_LINEAR = 1;
CgTexture.FILTER_MIPMAP = 2;

CgTexture.WRAP_REPEAT = 0;
CgTexture.WRAP_MIRRORED_REPEAT = 1;
CgTexture.WRAP_CLAMP_TO_EDGE = 2;

CgTexture.TYPE_DEFAULT = 0;
CgTexture.TYPE_DEPTH = 1;
CgTexture.TYPE_FLOAT = 2;


CgTexture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

CgTexture.PFORMATSTR_R8UB = "R 8bit ubyte";
CgTexture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
CgTexture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
CgTexture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

CgTexture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

CgTexture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

CgTexture.PFORMATSTR_R16F = "R 16bit float";
CgTexture.PFORMATSTR_RG16F = "RG 16bit float";
CgTexture.PFORMATSTR_RGB16F = "RGB 16bit float";
CgTexture.PFORMATSTR_RGBA16F = "RGBA 16bit float";


CgTexture.PFORMATSTR_R32F = "R 32bit float";
CgTexture.PFORMATSTR_RG32F = "RG 32bit float";
CgTexture.PFORMATSTR_RGB32F = "RGB 32bit float";
CgTexture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

CgTexture.PFORMATSTR_DEPTH = "DEPTH";


CgTexture.PIXELFORMATS = [

    CgTexture.PFORMATSTR_RGB565,

    CgTexture.PFORMATSTR_R8UB,
    CgTexture.PFORMATSTR_RG8UB,
    CgTexture.PFORMATSTR_RGB8UB,
    CgTexture.PFORMATSTR_RGBA8UB,

    CgTexture.PFORMATSTR_SRGBA8,

    CgTexture.PFORMATSTR_R11FG11FB10F,
    CgTexture.PFORMATSTR_R16F,
    CgTexture.PFORMATSTR_RG16F,
    CgTexture.PFORMATSTR_RGBA16F,

    CgTexture.PFORMATSTR_R32F,
    CgTexture.PFORMATSTR_RGBA32F

];

;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js




const cgl_texture_DEFAULT_TEXTURE_SIZE = 8;

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {Context} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
class Texture extends CgTexture
{
    constructor(__cgl, options = {})
    {
        super(options);
        if (!__cgl) throw new Error("no cgl");
        this._log = new Logger("cgl_texture");
        this._cgl = __cgl;
        this.tex = this._cgl.gl.createTexture();
        this.loading = false;
        this.flip = true;
        this.flipped = false;
        this.shadowMap = false;
        this.deleted = false;
        this.image = null;
        this.anisotropic = 0;
        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.texTarget = this._cgl.gl.TEXTURE_2D;
        if (options && options.type) this.texTarget = options.type;
        this.textureType = Texture.TYPE_DEFAULT;
        this.unpackAlpha = true;
        this._fromData = true;

        this._glDataType = -1;
        this._glInternalFormat = -1;
        this._glDataFormat = -1;


        if (options)
        {
            if (options.isDepthTexture) this.textureType = Texture.TYPE_DEPTH;
            if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

            if ("textureType" in options) this.textureType = options.textureType;
            if ("filter" in options) this.filter = options.filter;
            if ("wrap" in options) this.wrap = options.wrap;
            if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
            if ("flip" in options) this.flip = options.flip;
            if ("shadowMap" in options) this.shadowMap = options.shadowMap;
            if ("anisotropic" in options) this.anisotropic = options.anisotropic;
        }
        else
        {
            options = {};
        }

        if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

        if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;

        this._cgl.profileData.profileTextureNew++;


        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
        this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

        this.setSize(options.width, options.height);
        this.getInfoOneLine();
    }



    isFloatingPoint()
    {
        return Texture.isPixelFormatFloat(this.pixelFormat);
    }

    /**
     * returns true if otherTexture has same options (width/height/filter/wrap etc)
     * @function compareSettings
     * @memberof Texture
     * @instance
     * @param {Texture} tex otherTexture
     * @returns {Boolean}
     */
    compareSettings(tex)
    {
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

        if (!tex) return false;
        return (
            tex.width == this.width &&
            tex.height == this.height &&
            tex.filter == this.filter &&
            tex.wrap == this.wrap &&
            tex.textureType == this.textureType &&
            tex.unpackAlpha == this.unpackAlpha &&
            tex.anisotropic == this.anisotropic &&
            tex.shadowMap == this.shadowMap &&
            tex.texTarget == this.texTarget &&
            tex.flip == this.flip
        );
    }

    /**
     * returns a new texture with the same settings (does not copy texture itself)
     * @function clone
     * @memberof Texture
     * @instance
     * @returns {Texture}
     */
    clone()
    {
        const newTex = new Texture(this._cgl, {
            "name": this.name,
            "filter": this.filter,
            "anisotropic": this.anisotropic,
            "wrap": this.wrap,
            "textureType": this.textureType,
            "pixelFormat": this.pixelFormat,
            "unpackAlpha": this.unpackAlpha,
            "flip": this.flip,
            "width": this.width,
            "height": this.height,
        });

        this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

        if (!this.compareSettings(newTex))
        {
            this._log.error("Cloned texture settings do not compare!");
            this._log.error(this);
            this._log.error(newTex);
        }

        return newTex;
    }


    setFormat(o)
    {
        this.pixelFormat = o.pixelFormat;
        this._glDataFormat = o.glDataFormat;
        this._glInternalFormat = o.glInternalFormat;
        this._glDataType = o.glDataType;
    }



    /**
     * set pixel size of texture
     * @function setSize
     * @memberof Texture
     * @instance
     * @param {Number} w width
     * @param {Number} h height
     */
    setSize(w, h)
    {
        if (this._cgl.aborted) return;
        if (w != w || w <= 0 || !w) w = cgl_texture_DEFAULT_TEXTURE_SIZE;
        if (h != h || h <= 0 || !h) h = cgl_texture_DEFAULT_TEXTURE_SIZE;

        if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

        w = Math.min(w, this._cgl.maxTexSize);
        h = Math.min(h, this._cgl.maxTexSize);

        w = Math.floor(w);
        h = Math.floor(h);
        if (this.width == w && this.height == h) return;

        w = this._cgl.checkTextureSize(w);
        h = this._cgl.checkTextureSize(h);

        this.width = w;
        this.height = h;
        this.deleted = false;

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

        this._cgl.gl.bindTexture(this.texTarget, this.tex);
        this._cgl.profileData.profileTextureResize++;

        const uarr = null;

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

        this._setFilter();

        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
    }


    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        this.filter = filter;
        this.wrap = wrap;
        if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
        if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.width = w;
        this.height = h;
        this._fromData = true;
        this.deleted = false;

        if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", this.width, this.height, this._cgl.maxTexSize);
            return;
        }

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

        this._setFilter();
        this.updateMipMap();

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
        this._cgl.gl.bindTexture(this.texTarget, null);
    }

    updateMipMap()
    {
        if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.generateMipmap(this.texTarget);
            this._cgl.profileData.profileGenMipMap++;
        }
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this._cgl.printError("before initTexture");
        this._cgl.checkFrameStarted("texture inittexture");
        this._fromData = false;

        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
        if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

        if (filter !== undefined) this.filter = filter; // todo: can we remove this filter param?

        if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", img.width, img.height, this._cgl.maxTexSize);
            return;
        }

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.deleted = false;
        this.flipped = !this.flip;
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);


        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);

        this._setFilter();
        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

        this.getInfoOneLine();
        this._cgl.printError("initTexture");
    }

    /**
     * delete texture. use this when texture is no longer needed
     * @function delete
     * @memberof Texture
     * @instance
     */
    dispose()
    {
        this.delete();
    }

    delete()
    {
        if (this.loading)
        {
        // cant delete texture when still loading
        // setTimeout(this.delete.bind(this), 50);
            return;
        }

        this.deleted = true;
        this.width = 0;
        this.height = 0;
        this._cgl.profileData.profileTextureDelete++;
        this._cgl.gl.deleteTexture(this.tex);
        this.image = null;

        this.tex = null;
    }

    /**
     * @function isPowerOfTwo
     * @memberof Texture
     * @instance
     * @description return true if texture width and height are both power of two
     * @return {Boolean}
     */
    isPowerOfTwo()
    {
        return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
    }

    printInfo()
    {
        console.log(this.getInfo());
    }

    getInfoReadable()
    {
        const info = this.getInfo();
        let html = "";

        info.name = info.name.substr(0, info.name.indexOf("?rnd="));

        for (const i in info)
        {
            html += "* " + i + ":  **" + info[i] + "**\n";
        }

        return html;
    }

    getInfoOneLine()
    {
        let txt = "" + this.width + "x" + this.height;
        txt += " ";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += this.pixelFormat;

        if (this.filter === CGL.Texture.FILTER_NEAREST) txt += " nearest";
        if (this.filter === CGL.Texture.FILTER_LINEAR) txt += " linear";
        if (this.filter === CGL.Texture.FILTER_MIPMAP) txt += " mipmap";

        if (this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
        if (this.wrap === CGL.Texture.WRAP_REPEAT) txt += " repeat";
        if (this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

        this.shortInfoString = txt;

        return txt;
    }

    getInfoOneLineShort()
    {
        let txt = "" + this.width + "x" + this.height;
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += " ";
        txt += this.pixelFormat;

        this.shortInfoString = txt;

        return txt;
    }


    getInfo()
    {
        return Texture.getTexInfo(this);
    }


    _setFilter()
    {
        this._cgl.printError("before _setFilter");

        if (!this._fromData)
        {
            this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        }

        if (this.shadowMap)
        {
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
        }

        if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
        {
            this.filter = Texture.FILTER_LINEAR;
            this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
        }

        if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

            this.filter = Texture.FILTER_NEAREST;
            this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        }
        else
        {
            if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
            }
            else if (this.wrap == Texture.WRAP_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
            }
            else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
            }

            if (this.filter == Texture.FILTER_NEAREST)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
            }
            else if (this.filter == Texture.FILTER_LINEAR)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            }
            else if (this.filter == Texture.FILTER_MIPMAP)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
            }
            else
            {
                this._log.log("unknown texture filter!", this.filter);
                throw new Error("unknown texture filter!" + this.filter);
            }

            if (this.anisotropic)
            {
                const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");



                if (this._cgl.maxAnisotropic)
                {
                    const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                    this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
                }
            }
        }
        this.getInfoOneLine();
        this._cgl.printError("_setFilter");
    }
}


























/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};






/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};


/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    let size = 8;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = Texture.getDefaultTextureData("empty", size);

    cgl.tempTextureEmpty.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};


/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomUInt", size);

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomFloat", size);

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (!cgl) this._log.error("[getBlackTexture] no cgl!");
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = Texture.getDefaultTextureData("color", size, { "r": 0, "g": 0, "b": 0 });

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};


/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;


    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }


    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};


Texture.getTempGradientTexture = function (cgl) // deprecated...
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");
    return Texture.getTempTexture(cgl);
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    const data = Texture.getDefaultTextureData("stripes", 256, { "r": r, "g": g, "b": b });
    const temptex = new Texture(cgl);
    temptex.initFromData(data, size, size, filter, wrap);
    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {Context} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};

Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log(new Error());
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;
    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.contains("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }


    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        console.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.contains("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }


    o.numColorChannels = Texture.getPixelFormatNumChannels(pixelFormatStr);


    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) console.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};



Texture.getPixelFormatNumChannels =
    (pxlFrmtStr) =>
    {
        if (pxlFrmtStr.startsWith("RGBA")) return 4;
        if (pxlFrmtStr.startsWith("RGB")) return 3;
        if (pxlFrmtStr.startsWith("RG")) return 2;
        return 1;
    };

Texture.isPixelFormatFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").contains("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").contains("float") && (pxlFrmtStr || "").contains("16bit");
    };






;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js


/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-0, -0, -0];
        this._min = [0, 0, 0];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }


    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }


    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.UTILS.isNumeric(x) || !CABLES.UTILS.isNumeric(y) || !CABLES.UTILS.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;


        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js
// import { vec2, vec3 } from "gl-matrix";




/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */
const Geometry = function (name)
{
    this.name = name || "unknown";
    this._log = new Logger("cgl_geometry");

    this.faceVertCount = 3;
    this.glPrimitive = null;
    this._attributes = {};

    this._vertices = [];
    this.verticesIndices = [];

    this.isGeometry = true;

    this.morphTargets = [];

    Object.defineProperty(this, "vertices", {
        get()
        {
            return this._vertices;
        },
        set(v)
        {
            this.setVertices(v);
        },
    });

    Object.defineProperty(this, "texCoords", {
        get()
        {
            const att = this.getAttribute("texCoords");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("texCoords", v, 2);
        },
    });

    Object.defineProperty(this, "vertexNormals", {
        get()
        {
            const att = this.getAttribute("vertexNormals");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexNormals", v, 3);
        },
    });

    Object.defineProperty(this, "tangents", {
        get()
        {
            const att = this.getAttribute("tangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("tangents", v, 3);
        },
    });

    Object.defineProperty(this, "biTangents", {
        get()
        {
            const att = this.getAttribute("biTangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("biTangents", v, 3);
        },
    });

    Object.defineProperty(this, "vertexColors", {
        get()
        {
            const att = this.getAttribute("vertexColors");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexColors", v, 4);
        },
    });
};

/**
 * @function clear
 * @memberof Geometry
 * @instance
 * @description clear all buffers/set them to length 0
 */
Geometry.prototype.clear = function ()
{
    this._vertices = new Float32Array([]);
    this.verticesIndices = [];
    this.texCoords = new Float32Array([]);
    this.vertexNormals = new Float32Array([]);
    this.tangents = [];
    this.biTangents = [];
    this._attributes = {};
};



/**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
Geometry.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function getAttribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @return {Object}
 */
Geometry.prototype.getAttribute = function (name)
{
    for (const i in this._attributes)
    {
        if (this._attributes[i].name == name) return this._attributes[i];
    }
    return null;
};

/**
 * @function setAttribute
 * @description create an attribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @param {Array} arr
 * @param {Number} itemSize
 */
Geometry.prototype.setAttribute = function (name, arr, itemSize)
{
    let attrType = "";
    if (!itemSize || itemSize > 4)
    {
        console.log("itemsize wrong?", itemSize, name);
        this._log.stack("itemsize");

        itemSize = 3;
    }

    if (itemSize == 1) attrType = "float";
    else if (itemSize == 2) attrType = "vec2";
    else if (itemSize == 3) attrType = "vec3";
    else if (itemSize == 4) attrType = "vec4";


    const attr = {
        "name": name,
        "data": arr,
        "itemSize": itemSize,
        "type": attrType,
    };

    this._attributes[name] = attr;
};

Geometry.prototype.copyAttribute = function (name, newgeom)
{
    const attr = this.getAttribute(name);
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
};


/**
 * @function setVertices
 * @memberof Geometry
 * @instance
 * @description set vertices
 * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
 */
Geometry.prototype.setVertices = function (arr)
{
    if (arr instanceof Float32Array) this._vertices = arr;
    else this._vertices = new Float32Array(arr);
};

/**
 * @function setTexCoords
 * @memberof Geometry
 * @instance
 * @description set texcoords
 * @param {Array|Float32Array} arr [u,v,u,v,...]
 */
Geometry.prototype.setTexCoords = function (arr)
{
    if (arr instanceof Float32Array) this.texCoords = arr;
    else this.texCoords = new Float32Array(arr);
};

// Geometry.prototype.testIndices = function ()
// {
//     var foundError = false;
//     for (var i = 0; i < this.verticesIndices.length; i++)
//     {
//         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
//         {
//             foundError = true;
//             console.log("index error!");
//         }
//     }
// };

// deprecated
Geometry.prototype.calcNormals = function (smooth)
{
    const options = { "smooth": smooth };
    this.calculateNormals(options);
};

/**
 * @function flipNormals
 * @memberof Geometry
 * @param x
 * @param y
 * @param z
 * @description flip normals
 */
Geometry.prototype.flipNormals = function (x, y, z)
{
    let vec = vec3.create();

    if (x == undefined)x = 1;
    if (y == undefined)y = 1;
    if (z == undefined)z = 1;


    for (let i = 0; i < this.vertexNormals.length; i += 3)
    {
        vec3.set(vec,
            this.vertexNormals[i + 0],
            this.vertexNormals[i + 1],
            this.vertexNormals[i + 2]);

        vec[0] *= -x;
        vec[1] *= -y;
        vec[2] *= -z;

        vec3.normalize(vec, vec);

        this.vertexNormals[i + 0] = vec[0];
        this.vertexNormals[i + 1] = vec[1];
        this.vertexNormals[i + 2] = vec[2];
    }
};

Geometry.prototype.getNumTriangles = function ()
{
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
    return this.vertices.length / 3;
};


/**
 * @function flipVertDir
 * @memberof Geometry
 * @description flip order of vertices in geom faces
 */
Geometry.prototype.flipVertDir = function ()
{
    const newInd = [];
    newInd.length = this.verticesIndices.length;
    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newInd[i] = this.verticesIndices[i + 2];
        newInd[i + 1] = this.verticesIndices[i + 1];
        newInd[i + 2] = this.verticesIndices[i];
    }
    this.verticesIndices = newInd;
};


Geometry.prototype.setPointVertices = function (verts)
{
    if (verts.length % 3 !== 0)
    {
        this._log.error("SetPointVertices: Array must be multiple of three.");
        return;
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
    else this.vertices = verts;

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3;
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++)
    {
        this.verticesIndices[i] = i;
        this.texCoords[i * 2] = 0;
        this.texCoords[i * 2 + 1] = 0;
    }
};

/**
 * merge a different geometry into the this geometry
 * @function merge
 * @param {Geometry} geom
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.merge = function (geom)
{
    if (!geom) return;

    if (this.isIndexed() != geom.isIndexed())
    {
        if (this.isIndexed())
        {
            this.unIndex(false, true);
        }
        if (geom.isIndexed())
        {
            const g = geom.copy();
            g.unIndex(false, true);
            geom = g;
        }
    }

    const oldIndizesLength = this.verticesIndices.length;
    const vertLength = this._vertices.length / 3;

    this.verticesIndices.length += geom.verticesIndices.length;
    for (let i = 0; i < geom.verticesIndices.length; i++)
        this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices);
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords);
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals);
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents);
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents);
};

/**
 *   a copy of the geometry
 * @function copy
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.copy = function ()
{
    const geom = new Geometry(this.name + " copy");
    geom.faceVertCount = this.faceVertCount;
    geom.glPrimitive = this.glPrimitive;

    geom.setVertices(this._vertices.slice(0));

    if (this.verticesIndices)
    {
        geom.verticesIndices.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
    }

    for (let i in this._attributes) this.copyAttribute(i, geom);

    geom.morphTargets.length = this.morphTargets.length;
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

    return geom;
};

/**
 * Calculaten normals
 * @function calculateNormals
 * @memberof Geometry
 * @param options
 * @instance
 */
Geometry.prototype.calculateNormals = function (options)
{
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {};
    if (options.smooth === false) this.unIndex();

    const u = vec3.create();
    const v = vec3.create();
    const n = vec3.create();

    function calcNormal(triangle)
    {
        vec3.subtract(u, triangle[0], triangle[1]);
        vec3.subtract(v, triangle[0], triangle[2]);
        vec3.cross(n, u, v);
        vec3.normalize(n, n);

        if (options && options.forceZUp)
        {
            if (n[2] < 0)
            {
                n[0] *= -1;
                n[1] *= -1;
                n[2] *= -1;
            }
        }
        return n;
    }

    this.getVertexVec = function (which)
    {
        const vec = [0, 0, 0];
        vec[0] = this.vertices[which * 3 + 0];
        vec[1] = this.vertices[which * 3 + 1];
        vec[2] = this.vertices[which * 3 + 2];
        return vec;
    };

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

    for (let i = 0; i < this.vertices.length; i++)
    {
        this.vertexNormals[i] = 0;
    }

    if (!this.isIndexed())
    {
        const norms = [];
        for (let i = 0; i < this.vertices.length; i += 9)
        {
            const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
            const nn = calcNormal(triangle);
            norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
        }
        this.vertexNormals = norms;
    }
    else
    {
        const faceNormals = [];

        faceNormals.length = Math.floor(this.verticesIndices.length / 3);

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

            faceNormals[i / 3] = calcNormal(triangle);

            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
        }


        for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
        {
            for (let k = 0; k < 3; k++) // triangles
            {
                const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                vec3.normalize(vv, vv);
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
            }
        }
    }
};

/**
 * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
 * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
 * Terathon Software 3D Graphics Library.
 * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
 *
 * @function calcTangentsBitangents
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.calcTangentsBitangents = function ()
{
    if (!this.vertices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertices.");
        return;
    }
    if (!this.vertexNormals.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without normals.");
        return;
    }
    if (!this.texCoords.length)
    {
        // console.warn("No texcoords. Replacing with default values [0, 0].");
        const texCoordLength = (this.vertices.length / 3) * 2;
        this.texCoords = new Float32Array(texCoordLength);
        for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
    }
    if (!this.verticesIndices || !this.verticesIndices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
        return;
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0)
    {
        this._log.error("Vertex indices mismatch!");
        return;
    }

    const triangleCount = this.verticesIndices.length / 3;
    const vertexCount = this.vertices.length / 3;

    this.tangents = new Float32Array(this.vertexNormals.length);
    this.biTangents = new Float32Array(this.vertexNormals.length);

    // temporary buffers
    const tempVertices = [];
    tempVertices.length = vertexCount * 2;
    const v1 = vec3.create();
    const v2 = vec3.create();
    const v3 = vec3.create();

    const w1 = vec2.create();
    const w2 = vec2.create();
    const w3 = vec2.create();

    const sdir = vec3.create();
    const tdir = vec3.create();

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1)
    {
        // indices of the three vertices for a triangle
        const i1 = this.verticesIndices[tri * 3];
        const i2 = this.verticesIndices[tri * 3 + 1];
        const i3 = this.verticesIndices[tri * 3 + 2];

        // vertex position as vec3
        vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
        vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
        vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

        // texture coordinate as vec2
        vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
        vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
        vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

        const x1 = v2[0] - v1[0];
        const x2 = v3[0] - v1[0];
        const y1 = v2[1] - v1[1];
        const y2 = v3[1] - v1[1];
        const z1 = v2[2] - v1[2];
        const z2 = v3[2] - v1[2];

        const s1 = w2[0] - w1[0];
        const s2 = w3[0] - w1[0];
        const t1 = w2[1] - w1[1];
        const t2 = w3[1] - w1[1];

        const r = 1.0 / (s1 * t2 - s2 * t1);

        vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
        vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

        tempVertices[i1] = sdir;
        tempVertices[i2] = sdir;
        tempVertices[i3] = sdir;

        tempVertices[i1 + vertexCount] = tdir;
        tempVertices[i2 + vertexCount] = tdir;
        tempVertices[i3 + vertexCount] = tdir;
    }

    const normal = vec3.create();
    const tempVert = vec3.create();
    const tan = vec3.create();
    const bitan = vec3.create();
    const temp1 = vec3.create();
    const temp2 = vec3.create();
    const crossPd = vec3.create();
    const normalized = vec3.create();

    for (let vert = 0; vert < vertexCount; vert += 1)
    {
        // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
        if (!tempVertices[vert]) continue;

        vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
        vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

        // Gram-Schmidt orthagonalize
        const _dp = vec3.dot(normal, tempVert);
        vec3.scale(temp1, normal, _dp);
        vec3.subtract(temp2, tempVert, temp1);

        vec3.normalize(normalized, temp2);
        vec3.cross(crossPd, normal, tempVert);

        // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
        const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

        vec3.scale(tan, normalized, 1 / w);
        vec3.cross(bitan, normal, tan);

        this.tangents[vert * 3 + 0] = tan[0];
        this.tangents[vert * 3 + 1] = tan[1];
        this.tangents[vert * 3 + 2] = tan[2];
        this.biTangents[vert * 3 + 0] = bitan[0];
        this.biTangents[vert * 3 + 1] = bitan[1];
        this.biTangents[vert * 3 + 2] = bitan[2];
    }
};

Geometry.prototype.isIndexed = function ()
{
    if (this._vertices.length == 0) return true;
    return this.verticesIndices.length != 0;
};

/**
 * @function unIndex
 * @memberof Geometry
 * @instance
 * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
 * @param {boolean} reIndex
 * @param {boolean} dontCalcNormals
 */
Geometry.prototype.unIndex = function (reIndex, dontCalcNormals)
{
    const newVerts = [];
    const newIndizes = [];
    let count = 0;

    for (let j in this._attributes)
    {
        const attr = this._attributes[j];
        let na = [];

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            for (let s = 0; s < 3; s++)
            {
                if (attr.itemSize == 3)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 3 + 0],
                        attr.data[this.verticesIndices[i + s] * 3 + 1],
                        attr.data[this.verticesIndices[i + s] * 3 + 2]);
                else if (attr.itemSize == 4)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 4 + 0],
                        attr.data[this.verticesIndices[i + s] * 4 + 1],
                        attr.data[this.verticesIndices[i + s] * 4 + 2],
                        attr.data[this.verticesIndices[i + s] * 4 + 3]);
                else if (attr.itemSize == 2)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 2 + 0],
                        attr.data[this.verticesIndices[i + s] * 2 + 1]);
                else if (attr.itemSize == 1)
                    na.push(
                        attr.data[this.verticesIndices[i + s]]);
                else console.log("unknown attr", attr);
            }
        }
        this.setAttribute(attr.name, na, attr.itemSize);
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newVerts.push(
            this.vertices[this.verticesIndices[i + 0] * 3 + 0],
            this.vertices[this.verticesIndices[i + 0] * 3 + 1],
            this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 1] * 3 + 0],
            this.vertices[this.verticesIndices[i + 1] * 3 + 1],
            this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 2] * 3 + 0],
            this.vertices[this.verticesIndices[i + 2] * 3 + 1],
            this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

        newIndizes.push(count);
        count++;
    }

    this.vertices = newVerts;

    this.verticesIndices = [];
    if (reIndex) this.verticesIndices = newIndizes;

    if (!dontCalcNormals) this.calculateNormals();
};

Geometry.prototype.calcBarycentric = function ()
{
    let barycentrics = [];
    barycentrics.length = this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

    let count = 0;
    for (let i = 0; i < this.vertices.length; i += 3)
    {
        barycentrics[i + count] = 1;
        count++;
        if (count == 3) count = 0;
    }

    this.setAttribute("attrBarycentric", barycentrics, 3);
};

Geometry.prototype.getBounds = function ()
{
    return new BoundingBox(this);
};

Geometry.prototype.center = function (x, y, z)
{
    if (x === undefined)
    {
        x = true;
        y = true;
        z = true;
    }

    let i = 0;
    const bounds = this.getBounds();
    const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

    for (i = 0; i < this.vertices.length; i += 3)
    {
        if (this.vertices[i + 0] == this.vertices[i + 0])
        {
            if (x) this.vertices[i + 0] -= offset[0];
            if (y) this.vertices[i + 1] -= offset[1];
            if (z) this.vertices[i + 2] -= offset[2];
        }
    }

    return offset;
};

Geometry.prototype.mapTexCoords2d = function ()
{
    const bounds = this.getBounds();
    const num = this.vertices.length / 3;

    this.texCoords = new Float32Array(num * 2);

    for (let i = 0; i < num; i++)
    {
        const vertX = this.vertices[i * 3 + 0];
        const vertY = this.vertices[i * 3 + 1];
        this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
        this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
    }
};


Geometry.prototype.getInfoOneLine = function ()
{
    let txt = "";
    if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
    else txt += 0;

    txt += " tris ";

    if (this.vertices)txt += this.vertices.length / 3;
    else txt += 0;

    txt += " verts";

    return txt;
};

Geometry.prototype.getInfo = function ()
{
    const info = {};

    if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
    else info.numFaces = 0;

    if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

    if (this.vertices)info.numVerts = this.vertices.length / 3;
    else info.numVerts = 0;

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
    else info.numNormals = 0;

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
    else info.numTexCoords = 0;

    if (this.tangents) info.numTangents = this.tangents.length / 3;
    else info.numTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
    else info.numVertexColors = 0;

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
    else info.numAttribs = 0;

    info.isIndexed = this.isIndexed();

    return info;
};

// -----------------

// TODO : rewritwe circle op
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js




const MESH = {};
MESH.lastMesh = null;

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param {Context} _cgl cgl
 * @param {Geometry} __geom geometry
 * @param {Number} _options glPrimitive
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 */
const Mesh = function (_cgl, __geom, _options)
{
    this._cgl = _cgl;

    let options = _options || {};
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
    this._log = new Logger("cgl_mesh");
    this._bufVertexAttrib = null;
    this._bufVerticesIndizes = this._cgl.gl.createBuffer();
    this._indexType = this._cgl.gl.UNSIGNED_SHORT;
    this._attributes = [];
    this._attribLocs = {};
    this._geom = null;
    this._lastShader = null;
    this._numInstances = 0;
    this._glPrimitive = options.glPrimitive;

    this.opId = options.opId || "";
    this._preWireframeGeom = null;
    this.addVertexNumbers = false;
    this._name = "unknown";

    this.feedBackAttributes = [];
    this.setGeom(__geom);

    this._feedBacks = [];
    this._feedBacksChanged = false;
    this._transformFeedBackLoc = -1;
    this._lastAttrUpdate = 0;

    this.memFreed = false;

    this._cgl.profileData.addHeavyEvent("mesh constructed", this._name);

    this._queryExt = null;

    Object.defineProperty(this, "numInstances", {
        get()
        {
            return this._numInstances;
        },
        set(v)
        {
            this.setNumInstances(v);
        },
    });
};

Mesh.prototype.freeMem = function ()
{
    this.memFreed = true;

    for (let i = 0; i < this._attributes.length; i++)
    {
        this._attributes[i].floatArray = null;
    }
};

/**
 * @function updateVertices
 * @memberof Mesh
 * @instance
 * @description update vertices only from a geometry
 * @param {Geometry} geom
 */
Mesh.prototype.updateVertices = function (geom)
{
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
    this._numVerts = geom.vertices.length / 3;
};

Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attrName)
        {
            if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

            this._attributes[i].pointer.push(
                {
                    "loc": -1,
                    "name": name,
                    "stride": stride,
                    "offset": offset,
                    "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                }
            );
        }
    }
};

Mesh.prototype.getAttribute = function (name)
{
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
};

Mesh.prototype.setAttributeRange = function (attr, array, start, end)
{
    if (!attr) return;
    if (!start && !end) return;

    if (!attr.name)
    {
        this._log.stack("no attrname?!");
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._cgl.profileData.profileMeshAttributes += (end - start) || 0;

    this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

    if (attr.numItems < array.length / attr.itemSize)
    {
        this._resizeAttr(array, attr);
    }

    if (end > array.length)
    {
        if (CABLES.platform.isDevEnv())
            this._log.log(this._cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
        // end = array.length - 1;
        return;
    }

    if (this._cgl.glVersion == 1) this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
};

Mesh.prototype._resizeAttr = function (array, attr)
{
    if (attr.buffer)
        this._cgl.gl.deleteBuffer(attr.buffer);

    attr.buffer = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._bufferArray(array, attr);
    attr.numItems = array.length / attr.itemSize;// numItems;
};


Mesh.prototype._bufferArray = function (array, attr)
{
    let floatArray = attr.floatArray || null;
    if (!array) return;


    if (this._cgl.debugOneFrame)
    {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
    }

    if (!(array instanceof Float32Array))
    {
        if (attr && floatArray && floatArray.length == array.length)
        {
            floatArray.set(array);
            // floatArray = floatArray;
        }
        else
        {
            floatArray = new Float32Array(array);

            if (this._cgl.debugOneFrame)
            {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
            }

            if (array.length > 10000)
            {
                this._cgl.profileData.profileNonTypedAttrib++;
                this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
            }
        }
    }
    else floatArray = array;

    attr.arrayLength = floatArray.length;
    attr.floatArray = null;// floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);
};

/**
 * @function setAttribute
 * @description update attribute
 * @memberof Mesh
 * @instance
 * @param {String} attribute name
 * @param {Array} data
 * @param {Number} itemSize
 * @param {Object} options
 */
Mesh.prototype.addAttribute = Mesh.prototype.updateAttribute = Mesh.prototype.setAttribute = function (name, array, itemSize, options)
{
    if (!array)
    {
        this._log.error("mesh addAttribute - no array given! " + name);
        throw new Error();
    }
    let cb = null;
    let instanced = false;
    let i = 0;
    const numItems = array.length / itemSize;

    this._cgl.profileData.profileMeshAttributes += numItems || 0;

    if (typeof options == "function")
    {
        cb = options;
    }

    if (typeof options == "object")
    {
        if (options.cb) cb = options.cb;
        if (options.instanced) instanced = options.instanced;
    }

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;


    for (i = 0; i < this._attributes.length; i++)
    {
        const attr = this._attributes[i];
        if (attr.name == name)
        {
            if (attr.numItems === numItems)
            {
            }
            else
            {
                // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                this._resizeAttr(array, attr);
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
            this._bufferArray(array, attr);

            return attr;
        }
    }

    // create new buffer...

    const buffer = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer);
    // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

    let type = this._cgl.gl.FLOAT;
    if (options && options.type) type = options.type;
    const attr = {
        "buffer": buffer,
        "name": name,
        "cb": cb,
        "itemSize": itemSize,
        "numItems": numItems,
        "startItem": 0,
        "instanced": instanced,
        "type": type
    };

    this._bufferArray(array, attr);

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
    this._attributes.push(attr);
    this._attribLocs = {};

    return attr;
};

Mesh.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function updateTexCoords
 * @description update texture coordinates only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateTexCoords = function (geom)
{
    if (geom.texCoords && geom.texCoords.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
    }
};


/**
 * @function updateNormals
 * @description update normals only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateNormals = function (geom)
{
    if (geom.vertexNormals && geom.vertexNormals.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
    }
};


Mesh.prototype._setVertexNumbers = function (arr)
{
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
    {
        if (arr) this._verticesNumbers = arr;
        else
        {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
        }

        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
        {
            if (!shader.uniformNumVertices) shader.uniformNumVertices = new Uniform(shader, "f", "numVertices", this._numVerts);
            shader.uniformNumVertices.setValue(this._numVerts);

            // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        });
    }
};

/**
 * @function setVertexIndices
 * @description update vertex indices / faces
 * @memberof Mesh
 * @instance
 * @param {array} vertIndices
 */
Mesh.prototype.setVertexIndices = function (vertIndices)
{
    if (!this._bufVerticesIndizes)
    {
        this._log.warn("no bufVerticesIndizes: " + this._name);
        return;
    }
    if (vertIndices.length > 0)
    {
        if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

        for (let i = 0; i < vertIndices.length; i++)
        {
            if (vertIndices[i] >= this._numVerts)
            {
                this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                return;
            }
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);

        // todo cache this ?
        // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

        if (vertIndices.length > 65535)
        {
            this.vertIndicesTyped = new Uint32Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (vertIndices instanceof Uint32Array)
        {
            this.vertIndicesTyped = vertIndices;
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (!(vertIndices instanceof Uint16Array))
        {
            this.vertIndicesTyped = new Uint16Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_SHORT;
        }
        else this.vertIndicesTyped = vertIndices;

        this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW);
        this._bufVerticesIndizes.itemSize = 1;
        this._bufVerticesIndizes.numItems = vertIndices.length;
    }
    else this._bufVerticesIndizes.numItems = 0;
};

/**
 * @function setGeom
 * @memberof Mesh
 * @instance
 * @description set geometry for mesh
 * @param {Geometry} geom
 * @param {boolean} removeRef
 */
Mesh.prototype.setGeom = function (geom, removeRef)
{
    this._geom = geom;
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
    if (this._geom && this._geom.name) this._name = "mesh " + this._geom.name;

    MESH.lastMesh = null;
    this._cgl.profileData.profileMeshSetGeom++;

    this._disposeAttributes();

    this.updateVertices(this._geom);
    this.setVertexIndices(this._geom.verticesIndices);

    if (this.addVertexNumbers) this._setVertexNumbers();

    const geomAttribs = this._geom.getAttributes();

    const attribAssoc = {
        "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
        "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
        "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
        "tangents": "attrTangent",
        "biTangents": "attrBiTangent",
    };

    for (const index in geomAttribs)
        if (geomAttribs[index].data && geomAttribs[index].data.length)
            this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);


    if (removeRef)
    {
        this._geom = null;
    }
};

Mesh.prototype._preBind = function (shader)
{
    for (let i = 0; i < this._attributes.length; i++)
        if (this._attributes[i].cb)
            this._attributes[i].cb(this._attributes[i], this._geom, shader);
};

Mesh.prototype._checkAttrLengths = function ()
{
    if (this.memFreed) return;
    // check length
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
        {
            let name = "unknown";
            if (this._geom)name = this._geom.name;
            // this._log.warn(
            //     name + ": " + this._attributes[i].name +
            //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
            //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
            // );
        }
    }
};

Mesh.prototype._bind = function (shader)
{
    if (!shader.isValid()) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    this._lastShader = shader;
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
    {
        this._lastAttrUpdate = shader.lastCompile;
        for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
    }

    for (let i = 0; i < this._attributes.length; i++)
    {
        const attribute = this._attributes[i];
        if (attrLocs[i] == -1)
        {
            if (attribute._attrLocationLastShaderTime != shader.lastCompile)
            {
                attribute._attrLocationLastShaderTime = shader.lastCompile;
                attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                // this._log.log('attribloc',attribute.name,attrLocs[i]);
                this._cgl.profileData.profileAttrLoc++;
            }
        }

        if (attrLocs[i] != -1)
        {
            this._cgl.gl.enableVertexAttribArray(attrLocs[i]);
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer);

            if (attribute.instanced)
            {
                // todo: easier way to fill mat4 attribs...
                if (attribute.itemSize <= 4)
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this._geom.name, attribute);

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                }
                else if (attribute.itemSize == 16)
                {
                    const stride = 16 * 4;

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                }
                else
                {
                    this._log.warn("unknown instance attrib size", attribute.name);
                }
            }
            else
            {
                if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                if (attribute.pointer)
                {
                    for (let ip = 0; ip < attribute.pointer.length; ip++)
                    {
                        const pointer = attribute.pointer[ip];

                        if (pointer.loc == -1)
                            pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                        this._cgl.profileData.profileAttrLoc++;

                        this._cgl.gl.enableVertexAttribArray(pointer.loc);
                        this._cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                    }
                }
                if (this.bindFeedback) this.bindFeedback(attribute);
            }
        }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0) this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
};

Mesh.prototype.unBind = function ()
{
    const shader = this._lastShader;
    this._lastShader = null;
    if (!shader) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    MESH.lastMesh = null;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].instanced)
        {
            // todo: easier way to fill mat4 attribs...
            if (this._attributes[i].itemSize <= 4)
            {
                if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
            }
            else
            {
                this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
            }
        }

        if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
    }
};

Mesh.prototype.meshChanged = function ()
{
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
};

Mesh.prototype.printDebug = function (shader)
{
    console.log("--attributes");
    for (let i = 0; i < this._attributes.length; i++)
    {
        console.log("attribute " + i + " " + this._attributes[i].name);
    }
};

Mesh.prototype.setNumVertices = function (num)
{
    this._bufVertexAttrib.numItems = num;
};

Mesh.prototype.getNumVertices = function ()
{
    return this._bufVertexAttrib.numItems;
};


/**
 * @function render
 * @memberof Mesh
 * @instance
 * @description draw mesh to screen
 * @param {Shader} shader
 */
Mesh.prototype.render = function (shader)
{
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return;

    this._checkAttrLengths();

    if (this._geom)
    {
        if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed())
        {
            this.setGeom(this._preWireframeGeom);
            this._preWireframeGeom = null;
            // console.log("remove prewireframe geom");
        }

        if (shader.wireframe)
        {
            let changed = false;

            if (this._geom.isIndexed())
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }

                this._geom.unIndex();
                changed = true;
            }

            if (!this._geom.getAttribute("attrBarycentric"))
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }
                changed = true;

                this._geom.calcBarycentric();
            }
            if (changed) this.setGeom(this._geom);
        }
        // if (shader.wireframe)
        // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false;
    if (MESH.lastMesh != this)
    {
        if (MESH.lastMesh) MESH.lastMesh.unBind();
        needsBind = true;
    }


    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader);

    if (!shader.bind()) return;

    // if(needsBind)
    this._bind(shader);
    if (this.addVertexNumbers) this._setVertexNumbers();

    MESH.lastMesh = this;

    let prim = this._cgl.gl.TRIANGLES;
    if (this._glPrimitive !== undefined) prim = this._glPrimitive;
    if (shader.glPrimitive !== null) prim = shader.glPrimitive;

    let elementDiv = 1;
    let doQuery = this._cgl.profileData.doProfileGlQuery;
    let queryStarted = false;
    if (doQuery)
    {
        let id = this._name + " - " + shader.getName() + " #" + shader.id;
        if (this._numInstances) id += " instanced " + this._numInstances + "x";

        let queryProfilerData = this._cgl.profileData.glQueryData[id];

        if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

        if (shader.opId)queryProfilerData.shaderOp = shader.opId;
        if (this.opId)queryProfilerData.meshOp = this.opId;

        this._cgl.profileData.glQueryData[id] = queryProfilerData;

        if (!this._queryExt && this._queryExt !== false) this._queryExt = this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
        if (this._queryExt)
        {
            if (queryProfilerData._drawQuery)
            {
                const available = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE);
                if (available)
                {
                    const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT);
                    const currentTimeGPU = elapsedNanos / 1000000;

                    queryProfilerData._times = queryProfilerData._times || 0;
                    queryProfilerData._times += currentTimeGPU;
                    queryProfilerData._numcount++;
                    queryProfilerData.when = performance.now();
                    queryProfilerData._drawQuery = null;
                    queryProfilerData.queryStarted = false;
                }
            }

            if (!queryProfilerData.queryStarted)
            {
                queryProfilerData._drawQuery = this._cgl.gl.createQuery();
                this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                queryStarted = queryProfilerData.queryStarted = true;
            }
        }
    }


    if (this.hasFeedbacks && this.hasFeedbacks()) this.drawFeedbacks(shader, prim);
    else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0)
    {
        // for (let i = 0; i < this._attributes.length; i++)
        // {
        //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
        //     {
        //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
        //         // this._log.log(this);
        //         // debugger;
        //         return;
        //     }
        // }


        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0) this._cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
        else this._cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
    }
    else
    {
        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0)
        {
            // console.log("la", this._bufVerticesIndizes.numItems);

            this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0);
        }
        else
        {
            this._cgl.gl.drawElementsInstanced(prim, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
        }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
    {
        this._log.error("mesh draw gl error");
        this._log.error("mesh", this);
        this._log.error("shader", shader);

        const attribNames = [];
        for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++)
        {
            const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
            this._log.error("attrib ", name);
        }
    }

    this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
    this._cgl.profileData.profileMeshDraw++;

    if (doQuery && queryStarted)
    {
        this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
    }

    this._cgl.printError("mesh render " + this._name);

    this.unBind();
};

Mesh.prototype.setNumInstances = function (n)
{
    n = Math.max(0, n);
    if (this._numInstances != n)
    {
        this._numInstances = n;
        const indexArr = new Float32Array(n);
        for (let i = 0; i < n; i++) indexArr[i] = i;
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
    }
};

Mesh.prototype._disposeAttributes = function ()
{
    if (!this._attributes) return;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].buffer)
        {
            this._cgl.gl.deleteBuffer(this._attributes[i].buffer);
            this._attributes[i].buffer = null;
        }
    }
    this._attributes.length = 0;
};

Mesh.prototype.dispose = function ()
{
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);
    this._bufVerticesIndizes = null;

    this._disposeAttributes();
};





;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js




const MESHES = {};

MESHES.getSimpleRect = function (cgl, name, size = 1.0)
{
    const geom = new Geometry(name);



    geom.vertices = [1.0 * size, 1.0 * size, 0.0, -1.0 * size, 1.0 * size, 0.0, 1.0 * size, -1.0 * size, 0.0, -1.0 * size, -1.0 * size, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return cgl.createMesh(geom);
    // return new Mesh(cgl, geom);
};


MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




const TextureEffect = function (cgl, options)
{
    this._cgl = cgl;
    this._log = new Logger("cgl_TextureEffect");

    if (!cgl.TextureEffectMesh) this.createMesh();

    this._textureSource = null;
    this._options = options;
    this.name = options.name || "unknown";

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0;
    this.aspectRatio = 1;
    this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer();
    this._frameBuf2 = this._cgl.gl.createFramebuffer();
    this._renderbuffer = this._cgl.gl.createRenderbuffer();
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
    this.switched = false;
    this.depth = false;
};

TextureEffect.prototype.dispose = function ()
{
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
};

TextureEffect.prototype.getWidth = function ()
{
    return this._textureSource.width;
};

TextureEffect.prototype.getHeight = function ()
{
    return this._textureSource.height;
};

TextureEffect.prototype.setSourceTexture = function (tex)
{
    if (tex === null)
    {
        this._textureSource = new Texture(this._cgl);
        this._textureSource.setSize(16, 16);
    }
    else
    {
        this._textureSource = tex;
    }

    if (!this._textureSource.compareSettings(this._textureTarget))
    {
        if (this._textureTarget) this._textureTarget.delete();

        this._textureTarget = this._textureSource.clone();

        this._cgl.profileData.profileEffectBuffercreate++;

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height;
};
TextureEffect.prototype.continueEffect = function ()
{
    this._cgl.pushDepthTest(false);
    this._cgl.pushModelMatrix();
    this._cgl.pushPMatrix();
    // todo why two pushs?



    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);



    mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

    this._cgl.pushPMatrix();
    mat4.identity(this._cgl.pMatrix);

    this._cgl.pushViewMatrix();
    mat4.identity(this._cgl.vMatrix);

    this._cgl.pushModelMatrix();
    mat4.identity(this._cgl.mMatrix);
};


TextureEffect.prototype.startEffect = function (bgTex)
{
    if (!this._textureTarget)
    {
        this._log.warn("effect has no target");
        return;
    }

    this.switched = false;

    this.continueEffect();

    if (bgTex)
    {
        this._bgTex = bgTex;
    }
    this._countEffects = 0;
};

TextureEffect.prototype.endEffect = function ()
{
    this._cgl.popDepthTest();
    this._cgl.popModelMatrix();

    this._cgl.popPMatrix();
    this._cgl.popModelMatrix();
    this._cgl.popViewMatrix();

    this._cgl.popPMatrix();
    this._cgl.popViewPort();
};

TextureEffect.prototype.bind = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    if (!this.switched)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
        this._cgl.pushGlFrameBuffer(this._frameBuf);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
        this._cgl.pushGlFrameBuffer(this._frameBuf2);
    }
};

TextureEffect.prototype.finish = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader());

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

    this._cgl.profileData.profileTextureEffect++;

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
    {
        if (!this.switched)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
            this._textureTarget.updateMipMap();
        }
        else
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
            this._textureSource.updateMipMap();
        }

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }

    this.switched = !this.switched;
    this._countEffects++;
};

TextureEffect.prototype.getCurrentTargetTexture = function ()
{
    if (this.switched) return this._textureSource;
    return this._textureTarget;
};

TextureEffect.prototype.getCurrentSourceTexture = function ()
{
    if (this._countEffects == 0 && this._bgTex) return this._bgTex;

    if (this.switched) return this._textureTarget;
    return this._textureSource;
};

TextureEffect.prototype.delete = function ()
{
    if (this._textureTarget) this._textureTarget.delete();
    if (this._textureSource) this._textureSource.delete();
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuf);
};

TextureEffect.prototype.createMesh = function ()
{
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, "texEffectRect");
};

// ---------------------------------------------------------------------------------

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://cables.gl/docs/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()










        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +


                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);


    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js




const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },
    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },


    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },


    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // texture based random numbers
    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";
        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            Texture.getRandomTexture(cgl);
            cgl.setTexture(7, Texture.getRandomTexture(cgl).tex);
        };
    },
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/** @namespace CGL */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.contains("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cg/cg_shader.js



class CgShader extends EventTarget
{
    constructor()
    {
        super();
        this.id = simpleId();
        this._isValid = true;
        this._defines = [];

        this._moduleNames = [];
        this._modules = [];
        this._moduleNumId = 0;
    }

    /**
     * easily enable/disable a define without a value
     * @function toggleDefine
     * @memberof Shader
     * @instance
     * @param {name} name
     * @param {any} enabled value or port
     */
    toggleDefine(name, enabled)
    {
        if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
        {
            if (enabled.changeListener)enabled.removeEventListener(enabled.changeListener);

            enabled.onToggleDefine = (v) =>
            {
                this.toggleDefine(name, v);
            };

            enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
            enabled = enabled.get();
        }

        if (enabled) this.define(name);
        else this.removeDefine(name);
    }

    /**
     * add a define to a shader, e.g.  #define DO_THIS_THAT 1
     * @function define
     * @memberof Shader
     * @instance
     * @param {String} name
     * @param {Any} value (can be empty)
     */
    define(name, value)
    {
        if (value === null || value === undefined) value = "";

        if (typeof (value) == "object") // port
        {
            value.removeEventListener("change", value.onDefineChange);
            value.onDefineChange = (v) =>
            {
                this.define(name, v);
            };
            value.on("change", value.onDefineChange);

            value = value.get();
        }


        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name && this._defines[i][1] == value) return;
            if (this._defines[i][0] == name)
            {
                this._defines[i][1] = value;
                this.setWhyCompile("define " + name + " " + value);

                this._needsRecompile = true;
                return;
            }
        }
        this.setWhyCompile("define " + name + " " + value);
        this._needsRecompile = true;
        this._defines.push([name, value]);
    }

    getDefines()
    {
        return this._defines;
    }

    getDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return this._defines[i][1];
        return null;
    }

    /**
     * return true if shader has define
     * @function hasDefine
     * @memberof Shader
     * @instance
     * @param {String} name
     * @return {Boolean}
     */
    hasDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return true;
    }

    /**
     * remove a define from a shader
     * @param {name} name
     * @function removeDefine
     * @memberof Shader
     * @instance
     */
    removeDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name)
            {
                this._defines.splice(i, 1);
                this._needsRecompile = true;

                this.setWhyCompile("define removed:" + name);

                return;
            }
        }
    }


    hasModule(modId)
    {
        for (let i = 0; i < this._modules.length; i++)
        {
            if (this._modules[i].id == modId) return true;
        }
        return false;
    }

    setModules(names)
    {
        this._moduleNames = names;
    }


    /**
     * remove a module from shader
     * @function removeModule
     * @memberof Shader
     * @instance
     * @param {shaderModule} mod the module to be removed
     */
    removeModule(mod)
    {
        for (let i = 0; i < this._modules.length; i++)
        {
            if (mod && mod.id)
            {
                if (this._modules[i].id == mod.id || !this._modules[i])
                {
                    let found = true;
                    while (found)
                    {
                        found = false;
                        for (let j = 0; j < this._uniforms.length; j++)
                        {
                            if (this._uniforms[j].getName().startsWith(mod.prefix))
                            {
                                this._uniforms.splice(j, 1);
                                found = true;
                                continue;
                            }
                        }
                    }

                    this._needsRecompile = true;
                    this.setWhyCompile("remove module " + mod.title);
                    this._modules.splice(i, 1);
                    break;
                }
            }
        }
    }


    getNumModules()
    {
        return this._modules.length;
    }


    getCurrentModules() { return this._modules; }


    /**
     * add a module
     * @function addModule
     * @memberof Shader
     * @instance
     * @param {shaderModule} mod the module to be added
     * @param {shaderModule} [sibling] sibling module, new module will share the same group
     */
    addModule(mod, sibling)
    {
        if (this.hasModule(mod.id)) return;
        if (!mod.id) mod.id = CABLES.simpleId();
        if (!mod.numId) mod.numId = this._moduleNumId;
        if (!mod.num)mod.num = this._modules.length;
        if (sibling && !sibling.group) sibling.group = simpleId();

        if (!mod.group)
            if (sibling) mod.group = sibling.group;
            else mod.group = simpleId();

        mod.prefix = "mod" + mod.group + "_";
        this._modules.push(mod);

        this._needsRecompile = true;
        this.setWhyCompile("add module " + mod.title);
        this._moduleNumId++;

        return mod;
    }

    getAttributeSrc(mod, srcHeadVert, srcVert)
    {
        if (mod.attributes)
            for (let k = 0; k < mod.attributes.length; k++)
            {
                const r = this._getAttrSrc(mod.attributes[k], false);
                if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                if (r.srcVert)srcVert += r.srcVert;
            }

        return { "srcHeadVert": srcHeadVert, "srcVert": srcVert };
    }

    replaceModuleSrc()
    {
        let srcHeadVert = "";

        for (let j = 0; j < this._modules.length; j++)
        {
            const mod = this._modules[j];
            if (mod.name == this._moduleNames[i])
            {
                srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";


                if (mod.getAttributeSrc)
                {
                    const r = getAttributeSrc(mod, srcHeadVert, srcVert);
                    if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                    if (r.srcVert)srcVert += r.srcVert;
                }


                srcHeadVert += mod.srcHeadVert || "";
                srcVert += mod.srcBodyVert || "";

                srcHeadVert += "\n//---- end mod ------\n";

                srcVert += "\n//---- end mod ------\n";

                srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

                srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
            }
        }


        vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MODELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js









// ---------------------------------------------------------------------------


/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/


// ---------------------------------------------------------------------------

let materialIdCounter = 0;




function getDefaultVertexShader()
{
    return cgl_shader_default_glsl;
}


function getDefaultFragmentShader(r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
};


/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
class Shader extends CgShader
{
    constructor (_cgl, _name, _op)
    {
        super();
        if (!_cgl) throw new Error("shader constructed without cgl " + _name);

        this._log = new Logger("cgl_shader");
        this._cgl = _cgl;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";

        if (_op) this.opId = _op.id;
        this.glslVersion = 0;
        if (_cgl.glVersion > 1) this.glslVersion = 300;

        this._materialId = ++materialIdCounter;

        this._program = null;
        this._uniforms = [];
        this._drawBuffers = [true];

        this._needsRecompile = true;
        this._compileReason = "initial";

        this.ignoreMissingUniforms = false;
        this._projMatrixUniform = null;
        this._mvMatrixUniform = null;
        this._mMatrixUniform = null;
        this._vMatrixUniform = null;
        this._camPosUniform = null;
        this._normalMatrixUniform = null;
        this._inverseViewMatrixUniform = null;
        this._fromUserInteraction = false;

        this._attrVertexPos = -1;
        this.precision = _cgl.patch.config.glslPrecision || "highp";

        this._pMatrixState = -1;
        this._vMatrixState = -1;

        this._countMissingUniforms = 0;
        this._modGroupCount = 0; // not needed anymore...
        this._feedBackNames = [];
        this._attributes = [];

        this.glPrimitive = null;
        this.offScreenPass = false;
        this._extensions = [];
        this.srcVert = getDefaultVertexShader();
        this.srcFrag = getDefaultFragmentShader();
        this.lastCompile = 0;


        this._libs = [];
        this._structNames = [];
        this._structUniformNames = [];
        this._textureStackUni = [];
        this._textureStackTex = [];
        this._textureStackType = [];
        this._textureStackTexCgl = [];

        this._tempNormalMatrix = mat4.create();
        this._tempCamPosMatrix = mat4.create();
        this._tempInverseViewMatrix = mat4.create();
        this._tempInverseProjMatrix = mat4.create();

        this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
    };







    isValid()
    {
        return this._isValid;
    };

    getCgl()
    {
        return this._cgl;
    };

    getName()
    {
        return this._name;
    };

    /**
     * enable an extension for the shader
     * @function enableExtension
     * @memberof Shader
     * @instance
     * @param name extension name
     */
    enableExtension(name)
    {
        this.setWhyCompile("enable extension " + name);
        this._needsRecompile = true;
        this._extensions.push(name);
    };

    getAttrVertexPos()
    {
        return this._attrVertexPos;
    };

    hasTextureUniforms()
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getType() == "t") return true;
        return false;
    };

    setWhyCompile(why)
    {
        this._compileReason = why;
    };

    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        // console.log(origShader._uniforms);
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }

            // this._log.log(origShader._uniforms[i].getName());
            // this.getUniform(origShader._uniforms[i].)
            // this._uniforms[i].set(origShader._uniforms[i].getValue());


            // if (origShader._uniforms[i].getName().contains("pathPoints"))
            //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        this.popTextures();
        for (let i = 0; i < origShader._textureStackUni.length; i++)
        {
            this._textureStackUni[i] = origShader._textureStackUni[i];
            this._textureStackTex[i] = origShader._textureStackTex[i];
            this._textureStackType[i] = origShader._textureStackType[i];
            this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        }

        // this._textureStackUni = [];
        // this._textureStackTex = [];
        // this._textureStackType = [];
        // this._textureStackTexCgl = [];
    };

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new Shader(this._cgl, this._name + " copy");
        shader.setSource(this.srcVert, this.srcFrag);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;
        shader.glPrimitive = this.glPrimitive;
        shader.offScreenPass = this.offScreenPass;
        shader._extensions = this._extensions;
        shader.wireframe = this.wireframe;
        shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++)
        {
            const u = this._uniforms[i].copy(shader);
            u.resetLoc();
        }

        this.setWhyCompile("copy");
        shader._needsRecompile = true;
        return shader;
    };


    /**
     * set shader source code
     * @function setSource
     * @memberof Shader
     * @instance
     * @param {String} srcVert
     * @param {String} srcFrag
     * @param {Bool} fromUserInteraction
     */
    setSource(srcVert, srcFrag, fromUserInteraction)
    {
        this._fromUserInteraction = fromUserInteraction;
        this.srcVert = srcVert;
        this.srcFrag = srcFrag;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
        this._isValid = true;
    };

    _addLibs(src)
    {
        for (const id in ShaderLibMods)
        {
            if (src.contains(id))
            {
                const lib = new ShaderLibMods[id]();
                src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
                this._libs.push(lib);
                if (lib.initUniforms)lib.initUniforms(this);
            }
        }

        return src;
    };

    createStructUniforms()
    {
        // * create structs
        let structStrFrag = "";
        let structStrVert = ""; // TODO: not used yet

        this._structNames = [];
        // * reset the arrays holding the value each recompile so we don't skip structs
        // * key value mapping so the same struct can be added twice (two times the same modifier)
        this._injectedStringsFrag = {};
        this._injectedStringsVert = {};

        this._structUniformNamesIndicesFrag = [];
        this._structUniformNamesIndicesVert = [];

        for (let i = 0; i < this._uniforms.length; i++)
        {
            // * only add uniforms to struct that are a member of a struct
            if (this._uniforms[i].isStructMember())
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

                // * check if struct is not already part of shader
                if (!this._structNames.includes(this._uniforms[i]._structName))
                {
                    // * create struct definition with placeholder string to inject
                    const structDefinition = "struct "
                        + this._uniforms[i]._structName + " {".endl()
                        + injectionString
                        + "};".endl().endl();

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                        structStrFrag = structStrFrag.concat(structDefinition);

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                        structStrVert = structStrVert.concat(structDefinition);

                    this._structNames.push(this._uniforms[i]._structName);
                    this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                    this._injectedStringsVert[this._uniforms[i]._structName] = [];
                }

                // * create member & comment
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                let stringToInsert = "";
                if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
                stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                        + " " + this._uniforms[i]._propertyName + ";"
                        + comment;

                if (this._uniforms[i].getShaderType() === "both")
                {
                    // * inject member before {injectionString}
                    if (
                        !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert)
                    && !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert))
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "frag")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "vert")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                    {
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
            }
        }

        // * dedupe injected uni declarations
        this._uniDeclarationsFrag = [];
        this._uniDeclarationsVert = [];

        // * remove struct injection points and add uniform in fragment
        for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
        {
            const index = this._structUniformNamesIndicesFrag[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrFrag = structStrFrag.replace(injectionString, "");
                structStrFrag += uniDeclarationString;

                this._uniDeclarationsFrag.push(uniDeclarationString);
            }
        }

        // * remove struct injection points and add uniform in vertex
        for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
        {
            const index = this._structUniformNamesIndicesVert[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsVert.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrVert = structStrVert.replace(injectionString, "");
                structStrVert += uniDeclarationString;
                this._uniDeclarationsVert.push(uniDeclarationString);
            }
        }

        return [structStrVert, structStrFrag];
    };

    _getAttrSrc(attr, firstLevel)
    {
        const r = {};
        if (attr.name && attr.type)
        {
            r.srcHeadVert = "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            if (attr.nameFrag)
            {
                r.srcHeadVert += "";
                if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadVert += "#endif".endl();

                r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

                r.srcHeadFrag = "";
                if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadFrag += "#endif".endl();
            }
        }
        return r;
    };

    compile()
    {
        if (this._cgl.aborted) return;
        const startTime = performance.now();



        this._cgl.profileData.profileShaderCompiles++;
        this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

        let extensionString = "";
        if (this._extensions)
            for (let i = 0; i < this._extensions.length; i++)
                extensionString += "#extension " + this._extensions[i] + " : enable".endl();

        let definesStr = "";
        if (this._defines.length) definesStr = "\n// cgl generated".endl();
        for (let i = 0; i < this._defines.length; i++)
            definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

        const structStrings = this.createStructUniforms();
        this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
        this._compileReason = "";



        if (this._uniforms)
        {
            // * we create an array of the uniform names to check our indices & an array to save them
            const uniNames = this._uniforms.map((uni) => { return uni._name; });
            const indicesToRemove = [];

            // * we go through our uniforms and check if the same name is contained somewhere further in the array
            // * if so, we add the current index to be removed later
            for (let i = 0; i < this._uniforms.length; i++)
            {
                const uni = this._uniforms[i];
                const nextIndex = uniNames.indexOf(uni._name, i + 1);
                if (nextIndex > -1) indicesToRemove.push(i);
            }

            // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
            // * also, we reset the locations of all the other valid uniforms
            for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
            {
                if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
                else this._uniforms[j].resetLoc();
            }
        }

        this._cgl.printError("uniform resets");

        if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

        let vs = "";
        let fs = "";

        if (!this.srcFrag)
        {
            this._log.warn("[cgl shader] has no fragment source!", this._name, this);
            this.srcVert = getDefaultVertexShader();
            this.srcFrag = getDefaultFragmentShader();
            // return;
        }

        if (this.glslVersion == 300)
        {
            vs = "#version 300 es"
                .endl() + "// "
                .endl() + "// vertex shader " + this._name
                .endl() + "// "
                .endl() + "precision " + this.precision + " float;"
                .endl() + "precision " + this.precision + " sampler2D;"
                .endl() + ""
                .endl() + "#define WEBGL2"
                .endl() + "#define texture2D texture"
                .endl() + "#define UNI uniform"
                .endl() + "#define IN in"
                .endl() + "#define OUT out"
                .endl();

            fs = "#version 300 es"
                .endl() + "// "
                .endl() + "// fragment shader " + this._name
                .endl() + "// "
                .endl() + "precision " + this.precision + " float;"
                .endl() + "precision " + this.precision + " sampler2D;"
                .endl() + ""
                .endl() + "#define WEBGL2"
                .endl() + "#define texture2D texture"
                .endl() + "#define IN in"
                .endl() + "#define OUT out"
                .endl() + "#define UNI uniform"
                .endl() + "{{DRAWBUFFER}}"

                .endl();
        }
        else
        {
            fs = ""
                .endl() + "// "
                .endl() + "// fragment shader " + this._name
                .endl() + "// "
                .endl() + "#define WEBGL1"
                .endl() + "#define texture texture2D"
                .endl() + "#define outColor gl_FragColor"
                .endl() + "#define IN varying"
                .endl() + "#define UNI uniform"
                .endl();

            vs = ""
                .endl() + "// "
                .endl() + "// vertex shader " + this._name
                .endl() + "// "
                .endl() + "#define WEBGL1"
                .endl() + "#define texture texture2D"
                .endl() + "#define OUT varying"
                .endl() + "#define IN attribute"
                .endl() + "#define UNI uniform"
                .endl();
        }

        let uniformsStrVert = "\n// cgl generated".endl();
        let uniformsStrFrag = "\n// cgl generated".endl();


        fs += "\n// active mods: --------------- ";
        vs += "\n// active mods: --------------- ";

        let foundModsFrag = false;
        let foundModsVert = false;
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            for (let j = 0; j < this._modules.length; j++)
            {
                if (this._modules[j].name == this._moduleNames[i])
                {
                    if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                    {
                        foundModsFrag = true;
                        fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    }
                    if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                    {
                        vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                        foundModsVert = true;
                    }
                }
            }
        }
        if (!foundModsVert)fs += "\n// no mods used...";
        if (!foundModsFrag)fs += "\n// no mods used...";
        fs += "\n";
        vs += "\n";

        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                let uniStr = "";
                if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
                uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                    if (!this.srcVert.contains(uniStr) && !this.srcVert.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrVert += uniStr + ";" + comment.endl();

                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                    if (!this.srcFrag.contains(uniStr) && !this.srcFrag.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrFrag += uniStr + ";" + comment.endl();
            }
        }


        let countUniFrag = 0;
        let countUniVert = 0;
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
            }
        }
        if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
        if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);


        if (!fs.contains("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
        if (!vs.contains("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            fs += "#define MOBILE".endl();
            vs += "#define MOBILE".endl();
        }
        vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
        fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;


        let srcHeadVert = "";
        let srcHeadFrag = "";

        // testing if this breaks things...
        // this._modules.sort(function (a, b)
        // {
        //     return a.group - b.group;
        // });

        this._modules.sort(function (a, b)
        {
            return a.priority || 0 - b.priority || 0;
        });


        let addedAttribs = false;

        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";
            let srcFrag = "";

            if (!addedAttribs)
            {
                addedAttribs = true;

                for (let k = 0; k < this._attributes.length; k++)
                {
                    const r = this._getAttrSrc(this._attributes[k], true);
                    if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                    if (r.srcVert)srcVert += r.srcVert;
                    if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                }
            }

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                    srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                    srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                            if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                        }

                    srcHeadVert += mod.srcHeadVert || "";
                    srcHeadFrag += mod.srcHeadFrag || "";
                    srcVert += mod.srcBodyVert || "";
                    srcFrag += mod.srcBodyFrag || "";

                    srcHeadVert += "\n//---- end mod ------\n";
                    srcHeadFrag += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";
                    srcFrag += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
                }
            }


            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
            fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
        }


        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);


        vs = this._addLibs(vs);
        fs = this._addLibs(fs);


        // SETUP draw buffers / multi texture render targets

        let drawBufferStr = "";
        for (let i = 0; i < 16; i++)
            if (fs.contains("outColor" + i)) this._drawBuffers[i] = true;

        if (this._drawBuffers.length == 1)
        {
            drawBufferStr = "out vec4 outColor;".endl();
            drawBufferStr += "#define gl_FragColor outColor".endl();
        }
        else
        {
            drawBufferStr += "#define MULTI_COLORTARGETS".endl();
            drawBufferStr += "vec4 outColor;".endl();

            let count = 0;
            for (let i = 0; i < this._drawBuffers.length; i++)
            {
                if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
                drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
                count++;
            }
        }

        fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
        // //////


        if (!this._program)
        {
            this._program = this._createProgram(vs, fs);
        }
        else
        {
            // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
            // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
            // linkProgram(program);
            this._program = this._createProgram(vs, fs);

            this._projMatrixUniform = null;

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
        }

        this.finalShaderFrag = fs;
        this.finalShaderVert = vs;


        MESH.lastMesh = null;
        MESH.lastShader = null;

        this._countMissingUniforms = 0;
        this._needsRecompile = false;
        this.lastCompile = now();

        // this._cgl.printError("shader compile");

        this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
    };

    hasChanged()
    {
        return this._needsRecompile;
    }


    bind()
    {
        if (!this._isValid || this._cgl.aborted) return;

        MESH.lastShader = this;

        if (!this._program || this._needsRecompile) this.compile();
        if (!this._isValid) return;

        if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
        {
            this._countMissingUniforms++;
            // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
            if (this._countMissingUniforms < 10)
            {
                this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
                this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
                this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
                this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
                this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
                this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
                this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
                this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
                this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
                this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
                this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

                for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
            }
        }


        if (this._cgl.currentProgram != this._program)
        {
            this._cgl.profileData.profileShaderBinds++;
            this._cgl.gl.useProgram(this._program);
            this._cgl.currentProgram = this._program;
        }

        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

        if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
        {
            this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
            this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._objectIdUniform)
            this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.tempData.objectIdCounter);

        if (this._materialIdUniform)
            this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

        if (this._vMatrixUniform)
        {
            if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
            {
                this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
                this._vMatrixState = this._cgl.getViewMatrixStateCount();

                if (this._inverseViewMatrixUniform)
                {
                    mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
                if (this._inverseProjMatrixUniform)
                {
                    mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
            }
            this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;

            if (this._camPosUniform)
            {
                mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        else
        {
            // mvmatrix deprecated....
            const tempmv = mat4.create();

            mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
            this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._normalMatrixUniform)
        {
            // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
            mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

            this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        for (let i = 0; i < this._libs.length; i++)
        {
            if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
        }

        this._bindTextures();

        return this._isValid;
    };

    unBind()
    {
    };


    dispose()
    {
        this._cgl.gl.deleteProgram(this._program);
    };

    needsRecompile()
    {
        return this._needsRecompile;
    };

    setDrawBuffers(arr)
    {
        console.log("useless drawbuffers...?!");
        // if (this._drawBuffers.length !== arr.length)
        // {
        //     this._drawBuffers = arr;
        //     this._needsRecompile = true;
        //     this.setWhyCompile("setDrawBuffers");
        //     return;
        // }
        // for (let i = 0; i < arr.length; i++)
        // {
        //     if (arr[i] !== this._drawBuffers[i])
        //     {
        //         this._drawBuffers = arr;
        //         this._needsRecompile = true;
        //         this.setWhyCompile("setDrawBuffers");
        //         return;
        //     }
        // }
    };

    getUniforms()
    {
        return this._uniforms;
    };

    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getName() == name)
                return this._uniforms[i];
        return null;
    };

    removeAllUniforms()
    {
        this._uniforms = [];
        // for (let i = 0; i < this._uniforms.length; i++)
        //     this.removeUniform(this._uniforms[i].name);
    };

    removeUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name)
            {
                this._uniforms.splice(i, 1);
            }
        }
        this._needsRecompile = true;
        this.setWhyCompile("remove uniform " + name);
    };


    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    };

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {CGL.Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    };

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {CGL.Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    };
    /**
     * add a uniform to both shaders
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformBoth
     * @returns {CGL.Uniform}
     */
    addUniformBoth(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    };

    /**
     * add a struct & its uniforms to the fragment shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructFrag
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructFrag("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructFrag(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "frag";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    /**
     * add a struct & its uniforms to the vertex shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructVert
     * @returns {CGL.Uniform}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructVert("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructVert(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "vert";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    /**
     * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructBoth
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructBoth("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructBoth(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
                this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "both";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    hasUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return true;
        }
        return false;
    };

    _createProgram(vstr, fstr)
    {
        this._cgl.printError("before _createprogram");

        const program = this._cgl.gl.createProgram();

        this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
        this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);


        if (this.vshader && this.fshader)
        {
            this._cgl.gl.attachShader(program, this.vshader);
            this._cgl.gl.attachShader(program, this.fshader);

            this._linkProgram(program, vstr, fstr);
        }
        else
        {
            this._isValid = false;
            this._cgl.printError("shader _createProgram");
            this._log.error("could not link shaderprogram");
            return null;
        }

        this._cgl.printError("shader _createProgram");
        return program;
    };

    hasErrors()
    {
        return this._hasErrors;
    };

    _linkProgram(program, vstr, fstr)
    {
        this._cgl.printError("before _linkprogram");

        if (this._feedBackNames.length > 0)
        {
            this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
            // INTERLEAVED_ATTRIBS
            // SEPARATE_ATTRIBS
        }

        this._cgl.gl.linkProgram(program);
        this._cgl.printError("gl.linkprogram");
        this._isValid = true;

        this._hasErrors = false;

        if (this._cgl.patch.config.glValidateShader !== false)
        {
            this._cgl.gl.validateProgram(program);

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
            {
                // validation failed
                console.log("shaderprogram validation failed...");
                console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
            }

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
            {
                this._hasErrors = true;

                const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
                const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

                if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
                if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

                this._log.error(this._name + " shader linking fail...");

                console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
                console.log(this);
                this._isValid = false;

                this._name = "errorshader";
                this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
                this._cgl.printError("shader link err");
            }
        }
    };

    getProgram()
    {
        return this._program;
    };

    setFeedbackNames(names)
    {
        this.setWhyCompile("setFeedbackNames");
        this._needsRecompile = true;
        this._feedBackNames = names;
    };

    // getDefaultVertexShader()
    // {
    //     return defaultShaderSrcVert;
    // }

    // getDefaultFragmentShader()
    // {
    //     return this.getDefaultFragmentShader()
    // }


    /**
      * adds attribute definition to shader header without colliding with other shader modules...
     * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
     * @function
     * @memberof Shader
     * @instance
     * @param {Object} attr {type:x,name:x,[nameFrag:x]}
     * @return {Object}
     */
    addAttribute = function (attr)
    {
        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
        }
        this._attributes.push(attr);
        this._needsRecompile = true;
        this.setWhyCompile("addAttribute");
    };

    bindTextures()
    {
        this._bindTextures();
    }
    _bindTextures()
    {
        if (this._textureStackTex.length > this._cgl.maxTextureUnits)
        {
            this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
        }

        // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

        for (let i = 0; i < this._textureStackTex.length; i++)
        {
            // console.log(this._textureStackTex.length, i);
            if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
            {
                this._log.warn("no texture for pushtexture", this._name);
            }
            else
            {
                let t = this._textureStackTex[i];
                if (this._textureStackTexCgl[i])
                {
                    t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
                }

                let bindOk = true;

                if (!this._textureStackUni[i])
                {
                    // throw(new Error('no uniform given to texturestack'));
                    this._log.warn("no uniform for pushtexture", this._name);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
                }
                else
                {
                    this._textureStackUni[i].setValue(i);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                    // console.log(bindOk, i, t, this._textureStackType[i]);
                }
                if (!bindOk) console.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
            }
        }
    };

    setUniformTexture = function (uni, tex)
    {
        tex = tex || CGL.Texture.getTempTexture(this._cgl);
        for (let i = 0; i < this._textureStackUni.length; i++)
            if (this._textureStackUni[i] == uni)
            {
                const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
                if (tex.hasOwnProperty("tex"))
                {
                    this._textureStackTexCgl[i] = tex;
                    this._textureStackTex[i] = null;
                }
                else
                {
                    this._textureStackTexCgl[i] = null;
                    this._textureStackTex[i] = tex;
                }

                // this._textureStackTex[i] = tex;
                // this._cgl.setTexture(i, tex, this._textureStackType[i]);
                return old;
            }
        return null;
    };

    /**
     * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
     * @param {uniform} uniform texture uniform
     * @param {texture} t texture
     * @param {type} type texture type, can be ignored when TEXTURE_2D
     * @function pushTexture
     * @memberof Shader
     * @instance
     */
    pushTexture = function (uniform, t, type)
    {
        if (!uniform)
        {
            // console.log("pushtexture: no uniform given to texturestack", "shader:"+this._name,uniform,t,type);
            return;
        }
        if (!t)
        {
            // if(uniform)this._log.warn("pushtexture: no tex","shader:"+this._name," uniform:"+uniform.name);
            return;
        }
        if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
        {
            this._log.warn(new Error("invalid texture").stack);

            this._log.warn("[cgl_shader] invalid texture...", t);
            return;
        }

        this._textureStackUni.push(uniform);

        if (t.hasOwnProperty("tex"))
        {
            this._textureStackTexCgl.push(t);
            this._textureStackTex.push(null);
        }
        else
        {
            this._textureStackTexCgl.push(null);
            this._textureStackTex.push(t);
        }

        this._textureStackType.push(type);
    };

    /**
     * pop last texture
     * @function popTexture
     * @memberof Shader
     * @instance
     */
    popTexture = function ()
    {
        this._textureStackUni.pop();
        this._textureStackTex.pop();
        this._textureStackTexCgl.pop();
        this._textureStackType.pop();
    };

    /**
     * pop all textures
     * @function popTextures
     * @memberof Shader
     * @instance
     */
    popTextures = function ()
    {
        this._textureStackTex.length =
        this._textureStackTexCgl.length =
        this._textureStackType.length =
        this._textureStackUni.length = 0;
    };

    getMaterialId()
    {
        return this._materialId;
    };

    getInfo()
    {
        const info = {};
        info.name = this._name;
        // info.modules = JSON.parse(JSON.stringify(this._modules));
        // info.defines = JSON.parse(JSON.stringify(this._defines));
        info.defines = this.getDefines();
        info.hasErrors = this.hasErrors();

        return info;
    };


    getDefaultFragmentShader=function(r,g,b,a)
    {
        return getDefaultFragmentShader(r,g,b,a);
    }

    getDefaultVertexShader=function()
    {
        return getDefaultVertexShader();
    }


}

























// --------------------------

Shader.getDefaultVertexShader=getDefaultVertexShader;
Shader.getDefaultFragmentShader=getDefaultFragmentShader;


Shader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

Shader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog)
    {
        const basLines = [];
        const lines = infoLog.split("\n");
        for (const i in lines)
        {
            const divide = lines[i].split(":");
            if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10));
        }
        return basLines;
    }


    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        let infoLog = cgl.gl.getShaderInfoLog(shader);
        if (!infoLog)
        {
            console.warn("empty shader info log", this._name);
            return;
        }


        const badLines = getBadLines(infoLog);
        let htmlWarning = "<pre style=\"margin-bottom:0px;\"><code class=\"shaderErrorCode language-glsl\" style=\"padding-bottom:0px;max-height: initial;max-width: initial;\">";
        const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);

        if (!cgl.aborted && infoLog)
        {
            if (type == cgl.gl.VERTEX_SHADER) console.log("VERTEX_SHADER");
            if (type == cgl.gl.FRAGMENT_SHADER) console.log("FRAGMENT_SHADER");

            for (const i in lines)
            {
                const j = parseInt(i, 10) + 1;
                const line = j + ": " + lines[i];

                let isBadLine = false;
                for (const bj in badLines)
                    if (badLines[bj] == j) isBadLine = true;

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\"background-color:#660000;padding-top:0px;padding-bottom:0px\">";

                    cglShader._log.log("bad line: `" + line + "`");
                }
                htmlWarning += escapeHTML(line);

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\";padding-top:0px;padding-bottom:0px\">";
                }
            }
        }

        infoLog = infoLog.replace(/\n/g, "<br/>");
        if (cgl.patch.isEditorMode())console.log("Shader error ", cglShader._name, infoLog, this);

        htmlWarning = infoLog + "<br/>" + htmlWarning + "<br/><br/>";
        htmlWarning += "</code></pre>";

        if (this._fromUserInteraction)
        {
            // console.log("todo show modal?");
            // cgl.patch.emitEvent("criticalError", { "title": "Shader error " + cglShader._name, "text": htmlWarning, "exception": { "message": infoLog } });
        }

        cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
    }
    else
    {
        // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader;
};













;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}




;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }


    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param n
     * @return {boolean}
     */
    isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }

    deletePropertyByPath(obj, path)
    {
        if (!obj || !path)
        {
            return;
        }

        if (typeof path === "string")
        {
            path = path.split(".");
        }

        for (let i = 0; i < path.length - 1; i++)
        {
            obj = obj[path[i]];

            if (typeof obj === "undefined")
            {
                return;
            }
        }

        delete obj[path.pop()];
    }
}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    constructor()
    {
        this._log = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * add event listener
     * @param which event name
     * @param cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    addEventListener(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /**
     * check event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /**
     * rempve event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return
     */
    removeEventListener(id, cb = null)
    {
        if (id === null || id === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                this._log.log("could not find event...", id, this);
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[id].length; i++)
            if (this._eventCallbacks[id][i].cb === cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + id);
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}


;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js
class CgCanvas
{
    constructor(options)
    {
        if (!options)
        {
            console.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg)console.error("CgCanvas options has no cg");
        if (!options.canvasEle)console.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }


    setSize(w, h, ignorestyle)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

const MatrixStack = function ()
{
    this._arr = [mat4.create()];
    this._index = 0;
    this.stateCounter = 0;
};

MatrixStack.prototype.push = function (m)
{
    this._index++;
    this.stateCounter++;

    if (this._index == this._arr.length)
    {
        const copy = mat4.create();
        this._arr.push(copy);
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1]);

    return this._arr[this._index];
};

MatrixStack.prototype.pop = function ()
{
    this.stateCounter++;

    this._index--;
    if (this._index < 0) this._index = 0;

    return this._arr[this._index];
};

MatrixStack.prototype.length = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js




class CGState extends Events
{
    constructor(_patch)
    {
        super();
        this.tempData = this.frameStore = this.frameStore || {};
        // this.canvas = null;

        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);

        this.patch = _patch;
        this.autoReSize = true;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;


        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);


        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }


    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }



    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    setSize(w, h, ignorestyle)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        if (this.autoReSize)
        {
            this.setSize(window.innerWidth, window.innerHeight);
            this.updateSize();
        }
    }

    _resizeToParentSize()
    {
        if (this.autoReSize)
        {
            const p = this.canvas.parentElement;
            if (!p)
            {
                this._log.error("cables: can not resize to container element");
                return;
            }

            this.setSize(p.clientWidth, p.clientHeight);
            this.updateSize();
        }
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }


    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }

    shouldDrawHelpers()
    {
        return false;
    }
}





;// CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000)
        {
            this.endSecond();
        }
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "GAPI_WEBGL": 0,
    "GAPI_WEBGPU": 1,

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,


    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js








/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class Context extends CGState
{
    constructor(_patch)
    {
        super(_patch);

        this.gApi = CG.GAPI_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context", { "onError": _patch.config.onError });
        this._viewPort = [0, 0, 0, 0];
        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this._onetimeCallbacks = [];
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;

        this._simpleShader = new Shader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
        this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;


        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }



    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }



    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }

    _setCanvas(canv)
    {
        if (!canv) this._log.stack("_setCanvas undef");

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);


        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this._log.error("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });


        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);


        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }





    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */


    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
        {
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
            // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
            // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        }
        else
        {
            // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
            // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }


    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }


    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.tempData || ((this.tempData.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.tempData.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader)
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.tempData.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.tempData.forceShaderMods[i];
                shader = this.tempData.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.tempData.forceShaderMods[i].currentShader() && shader != this.tempData.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }


    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // const a =
                this.tempData.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }


    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }


    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }


        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }


    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;


            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.contains("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();

        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.patch.cgl.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this), noclearalpha);
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }
}


Context.prototype.popShader = Context.prototype.setPreviousShader;
Context.prototype.setShader = Context.prototype.pushShader;

/**
 * execute the callback next frame, once
 * @function addNextFrameOnceCallback
 * @memberof Context
 * @instance
 * @param {function} cb
 */
Context.prototype.addNextFrameOnceCallback = function (cb)
{
    if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
};

// state depthtest

/**
 * push depth testing enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthTest = [];
Context.prototype.pushDepthTest = function (b)
{
    this._stackDepthTest.push(b);
    if (!b) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};
/**
 * current state of depth testing
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthTest = function ()
{
    return this._stackDepthTest[this._stackDepthTest.length - 1];
};

/**
 * pop depth testing state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthTest = function ()
{
    this._stackDepthTest.pop();

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};

// --------------------------------------
// state depthwrite

/**
 * push depth write enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthWrite = [];
Context.prototype.pushDepthWrite = function (b)
{
    b = b || false;
    this._stackDepthWrite.push(b);
    this.gl.depthMask(b);
};

/**
 * current state of depth writing
 * @function stateDepthWrite
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthWrite = function ()
{
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
};

/**
 * pop depth writing state
 * @function popDepthWrite
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthWrite = function ()
{
    this._stackDepthWrite.pop();
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
};


// --------------------------------------
// state CullFace

Context.prototype._stackCullFace = [];

/**
 * push face culling face enabled state
 * @function pushCullFace
 * @param {Boolean} b enabled
 * @memberof Context
 * @instance
 */
Context.prototype.pushCullFace = function (b)
{
    this._stackCullFace.push(b);

    if (b) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};

/**
 * current state of face culling
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFace = function ()
{
    return this._stackCullFace[this._stackCullFace.length - 1];
};

/**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFace = function ()
{
    this._stackCullFace.pop();

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};


// --------------------------------------
// state CullFace Facing


/**
 * push face culling face side
 * @function pushCullFaceFacing
 * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
 * @memberof Context
 * @instance
 */
Context.prototype._stackCullFaceFacing = [];
Context.prototype.pushCullFaceFacing = function (b)
{
    this._stackCullFaceFacing.push(b);
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};

/**
 * current state of face culling side
 * @function stateCullFaceFacing
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFaceFacing = function ()
{
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
};

/**
 * pop face culling face side
 * @function popCullFaceFacing
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFaceFacing = function ()
{
    this._stackCullFaceFacing.pop();
    if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};


// --------------------------------------
// state depthfunc

Context.prototype._stackDepthFunc = [];

/**
 * enable / disable depth testing
 * like `gl.depthFunc(boolean);`
 * @function pushDepthFunc
 * @memberof Context
 * @instance
 * @param {Boolean} f depthtesting
 */
Context.prototype.pushDepthFunc = function (f)
{
    this._stackDepthFunc.push(f);
    this.gl.depthFunc(f);
};

/**
 * current state of blend
 * @function stateDepthFunc
 * @memberof Context
 * @instance
 * @returns {Boolean} depth testing enabled/disabled
 */
Context.prototype.stateDepthFunc = function ()
{
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
    return false;
};

/**
 * pop depth testing and set the previous state
 * @function popDepthFunc
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthFunc = function ()
{
    this._stackDepthFunc.pop();
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
};

// --------------------------------------
// state blending

Context.prototype._stackBlend = [];

/**
 * enable / disable blend
 * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
 * @function pushBlend
 * @memberof Context
 * @instance
 * @param {boolean} b blending
 */
Context.prototype.pushBlend = function (b)
{
    this._stackBlend.push(b);
    if (!b) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * pop blend state and set the previous state
 * @function popBlend
 * @memberof Context
 * @instance
 */
Context.prototype.popBlend = function ()
{
    this._stackBlend.pop();

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * current state of blend
 * @function stateBlend
 * @returns {boolean} blending enabled/disabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateBlend = function ()
{
    return this._stackBlend[this._stackBlend.length - 1];
};

const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

Context.prototype._stackBlendMode = [];
Context.prototype._stackBlendModePremul = [];

/**
 * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
 * @function pushBlendMode
 * @memberof Context
 * @instance
 * @param {Number} blendMode
 * @param {Boolean} premul premultiplied mode
 */
Context.prototype.pushBlendMode = function (blendMode, premul)
{
    this._stackBlendMode.push(blendMode);
    this._stackBlendModePremul.push(premul);

    const n = this._stackBlendMode.length - 1;

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};

/**
 * pop predefined blendmode / switch back to previous blendmode
 * @function popBlendMode
 * @memberof Context
 * @instance
 */
Context.prototype.popBlendMode = function ()
{
    this._stackBlendMode.pop();
    this._stackBlendModePremul.pop();

    const n = this._stackBlendMode.length - 1;

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};


// --------------------------------------
// state stencil

Context.prototype._stackStencil = [];

/**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} b enable
 */
Context.prototype.pushStencil = function (b)
{
    this._stackStencil.push(b);
    if (!b) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

/**
 * pop stencil test state and set the previous state
 * @function popStencil
 * @memberof Context
 * @instance
 */
Context.prototype.popStencil = function ()
{
    this._stackStencil.pop();

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

// --------------------------------------


Context.prototype.glGetAttribLocation = function (prog, name)
{
    const l = this.gl.getAttribLocation(prog, name);
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l;
};


/**
 * should an op now draw helpermeshes
 * @function shouldDrawHelpers
 * @memberof Context
 * @param op
 * @instance
 */
Context.prototype.shouldDrawHelpers = function (op)
{
    if (this.tempData.shadowPass) return false;
    if (!op.patch.isEditorMode()) return false;

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
};

Context.prototype._setBlendMode = function (blendMode, premul)
{
    const gl = this.gl;

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    {
        // this.gl.disable(this.gl.BLEND);
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    else
    {
        this._log.log("setblendmode: unknown blendmode");
    }
};

Context.prototype.createMesh = function (geom, options)
{
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
    return new CGL.Mesh(this, geom, options);
};


/**
 * set cursor
 * @function setCursor
 * @memberof Context
 * @instance
 * @param {String} str css cursor string
 */
Context.prototype.setCursor = function (str)
{
    this._cursor = str;
};

/**
 * enable a webgl extension
 * @function enableExtension
 * @memberof Context
 * @instance
 * @param {String} name extension name
 * @returns {Object} extension object or null
 */
Context.prototype.enableExtension = function (name)
{
    if (!this.gl) return null;

    if (this._enabledExtensions.hasOwnProperty(name))
        return this._enabledExtensions[name];

    const o = this.gl.getExtension(name);
    this._enabledExtensions[name] = o;

    if (!o)
        this._log.warn("[cgl_state] extension not available " + name);
    // else
        // this._log.log("enabled extension", name);

    return o;
};

Context.prototype.checkTextureSize = function (x)
{
    x = x || 1;
    x = Math.floor(x);
    x = Math.min(x, this.maxTexSize);
    x = Math.max(x, 1);
    return x;
};





;// CONCATENATED MODULE: ./src/core/core_variable.js


/**
 * @type {Object}
 * @name PatchVariable
 * @param {String} name
 * @param {String|Number} value
 * @memberof Patch
 * @constructor
 */
class PatchVariable extends Events
{
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

/* harmony default export */ const core_variable = (PatchVariable);

;// CONCATENATED MODULE: ./src/core/core_patch.js












/**
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @namespace external:CABLES#Patch
 * @hideconstructor
 * @param {PatchConfig} cfg The configuration object.
 * @class
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */

class Patch extends EventTarget
{
// const Patch(cfg)
    constructor(cfg)
    {
        super();
        // EventTarget.apply(this);

        this._log = new Logger("core_patch", { "onError": cfg.onError });
        this.ops = [];
        this.settings = {};
        this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0
        };
        this.timer = new Timer();
        this.freeTimer = new Timer();
        this.animFrameOps = [];
        this.animFrameCallbacks = [];
        this.gui = false;
        CABLES.logSilent = this.silent = true;
        this.profiler = null;
        this.aborted = false;
        this._crashedOps = [];
        this._renderOneFrame = false;
        this._animReq = null;
        this._opIdCache = {};
        this._triggerStack = [];
        this.storeObjNames = false; // remove after may release

        this.loading = new LoadingStatus(this);

        this._volumeListeners = [];
        this._paused = false;
        this._frameNum = 0;
        this.onOneFrameRendered = null;
        this.namedTriggers = {};

        this._origData = null;
        this._frameNext = 0;
        this._frameInterval = 0;
        this._lastFrameTime = 0;
        this._frameWasdelayed = true;
        this.tempData = this.frameStore = {};
        this.deSerialized = false;
        this.reqAnimTimeStamp = 0;

        this.cgCanvas = null;

        if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

        this._isLocal = document.location.href.indexOf("file:") === 0;

        if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
        if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

        if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
        if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
        if (!this.config.masterVolume) this.config.masterVolume = 1.0;

        this._variables = {};
        this._variableListeners = [];
        this.vars = {};
        if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

        this.cgl = new Context(this);
        this.cgp = null;

        this._subpatchOpCache = {};

        this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
        if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
        if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
        this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

        if (this.cgl.aborted) this.aborted = true;
        if (this.cgl.silent) this.silent = true;

        this.freeTimer.play();
        this.exec();

        if (!this.aborted)
        {
            if (this.config.patch)
            {
                this.deSerialize(this.config.patch);
            }
            else if (this.config.patchFile)
            {
                ajax(
                    this.config.patchFile,
                    (err, _data) =>
                    {
                        try
                        {
                            const data = JSON.parse(_data);
                            if (err)
                            {
                                const txt = "";
                                this._log.error("err", err);
                                this._log.error("data", data);
                                this._log.error("data", data.msg);
                                return;
                            }
                            this.deSerialize(data);
                        }
                        catch (e)
                        {
                            this._log.error("could not load/parse patch ", e);
                        }
                    }
                );
            }
            this.timer.play();
        }

    console.log("made with https://cables.gl"); // eslint-disable-line
    }

    isPlaying()
    {
        return !this._paused;
    }

    isRenderingOneFrame()
    {
        return this._renderOneFrame;
    }


    renderOneFrame()
    {
        this._paused = true;
        this._renderOneFrame = true;
        this.exec();
        this._renderOneFrame = false;
    }

    /**
 * current number of frames per second
 * @function getFPS
 * @memberof Patch
 * @instance
 * @return {Number} fps
 */
    getFPS()
    {
        this._log.error("deprecated getfps");
        return 0;
    }

    /**
 * returns true if patch is opened in editor/gui mode
 * @function isEditorMode
 * @memberof Patch
 * @instance
 * @return {Boolean} editor mode
 */
    isEditorMode()
    {
        return this.config.editorMode === true;
    }

    /**
 * pauses patch execution
 * @function pause
 * @memberof Patch
 * @instance
 */
    pause()
    {
        cancelAnimationFrame(this._animReq);
        this.emitEvent("pause");
        this._animReq = null;
        this._paused = true;
        this.freeTimer.pause();
    }

    /**
 * resumes patch execution
 * @function resume
 * @memberof Patch
 * @instance
 */
    resume()
    {
        if (this._paused)
        {
            cancelAnimationFrame(this._animReq);
            this._paused = false;
            this.freeTimer.play();
            this.emitEvent("resume");
            this.exec();
        }
    }

    /**
 * set volume [0-1]
 * @function setVolume
 * @param {Number} v volume
 * @memberof Patch
 * @instance
 */
    setVolume(v)
    {
        this.config.masterVolume = v;
        for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
    }


    /**
 * get asset path
 * @function getAssetPath
 * @memberof Patch
 * @param patchId
 * @instance
 */
    getAssetPath(patchId = null)
    {
        if (this.config.hasOwnProperty("assetPath"))
        {
            return this.config.assetPath;
        }
        else if (this.isEditorMode())
        {
            let id = patchId || gui.project()._id;
            return "/assets/" + id + "/";
        }
        else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
        {
            const parts = document.location.pathname.split("/");
            let id = patchId || parts[parts.length - 1];
            return "/assets/" + id + "/";
        }
        else
        {
            return "assets/";
        }
    }

    /**
 * get js path
 * @function getJsPath
 * @memberof Patch
 * @instance
 */
    getJsPath()
    {
        if (this.config.hasOwnProperty("jsPath"))
        {
            return this.config.jsPath;
        }
        else
        {
            return "js/";
        }
    }

    /**
 * get url/filepath for a filename
 * this uses prefixAssetpath in exported patches
 * @function getFilePath
 * @memberof Patch
 * @instance
 * @param {String} filename
 * @return {String} url
 */
    getFilePath(filename)
    {
        if (!filename) return filename;
        filename = String(filename);
        if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
        if (filename.indexOf("data:") === 0) return filename;
        if (filename.indexOf("file:") === 0) return filename;
        filename = filename.replace("//", "/");
        if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
        return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || "");
    }

    clear()
    {
        this.emitEvent("patchClearStart");
        this.cgl.TextureEffectMesh = null;
        this.animFrameOps.length = 0;
        this.timer = new Timer();
        while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

        this._opIdCache = {};
        this.emitEvent("patchClearEnd");
    }




    createOp(identifier, id, opName = null)
    {
        let op = null;
        let objName = "";

        try
        {
            if (!identifier)
            {
                console.error("createop identifier false", identifier);
                console.log((new Error()).stack);
                return;
            }
            if (identifier.indexOf("Ops.") === -1)
            {
                // this should be a uuid, not a namespace
                // creating ops by id should be the default way from now on!
                const opId = identifier;



                if (CABLES.OPS[opId])
                {
                    objName = CABLES.OPS[opId].objName;
                    op = new CABLES.OPS[opId].f(this, objName, id, opId);
                    op.opId = opId;
                }
                else
                {
                    if (opName)
                    {
                        identifier = opName;
                        this._log.warn("could not find op by id: " + opId);
                    }
                    else
                    {
                        throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                    }
                }
            }

            if (!op)
            {
                // fallback: create by objname!
                objName = identifier;
                const parts = identifier.split(".");
                const opObj = Patch.getOpClass(objName);

                if (!opObj)
                {
                    this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                    this._log.error("unknown op: " + objName);
                    throw new Error("unknown op: " + objName);
                }
                else
                {
                    if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                    else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                    else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                    else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                    else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                    else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                    else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                    else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                    else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                    else console.log("parts.length", parts.length);
                }

                if (op)
                {
                    op.opId = null;
                    for (const i in CABLES.OPS)
                    {
                        if (CABLES.OPS[i].objName == objName) op.opId = i;
                    }
                }
            }
        }
        catch (e)
        {
            this._crashedOps.push(objName);

            this._log.error("[instancing error] " + objName, e);

            if (!this.isEditorMode())
            {
                this._log.error("INSTANCE_ERR", "Instancing Error: " + objName, e);
                // throw new Error("instancing error 1" + objName);
            }
        }

        if (op)
        {
            op._objName = objName;
            op.patch = this;
        }
        else
        {
            this._log.log("no op was created!?", identifier, id);
        }
        return op;
    }

    /**
     * create a new op in patch
     * @function addOp
     * @memberof Patch
     * @instance
     * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
     * @param {Object} uiAttribs Attributes
     * @param {string} id
     * @param {boolean} fromDeserialize
     * @param {string} opName e.g. Ops.Math.Sum
     * @example
     * // add invisible op
     * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
     */
    addOp(opIdentifier, uiAttribs, id, fromDeserialize, opName)
    {
        const op = this.createOp(opIdentifier, id, opName);

        if (op)
        {
            uiAttribs = uiAttribs || {};
            if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
            if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
            uiAttribs.subPatch = uiAttribs.subPatch || 0;

            op.setUiAttribs(uiAttribs);
            if (op.onCreate) op.onCreate();

            if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
            if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

            if (this._opIdCache[op.id])
            {
                this._log.warn("opid with id " + op.id + " already exists in patch!");
                this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
                // return;
            }

            this.ops.push(op);
            this._opIdCache[op.id] = op;

            if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
            this.emitEvent("onOpAdd", op, fromDeserialize);

            if (op.init) op.init();

            op.emitEvent("init", fromDeserialize);
        }
        else
        {
            this._log.error("addop: op could not be created: ", opIdentifier);
        }

        return op;
    }

    addOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

        this.animFrameOps.push(op);
    }

    removeOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++)
        {
            if (this.animFrameOps[i] == op)
            {
                this.animFrameOps.splice(i, 1);
                return;
            }
        }
    }

    addOnAnimFrameCallback(cb)
    {
        this.animFrameCallbacks.push(cb);
    }

    removeOnAnimCallback(cb)
    {
        for (let i = 0; i < this.animFrameCallbacks.length; i++)
        {
            if (this.animFrameCallbacks[i] == cb)
            {
                this.animFrameCallbacks.splice(i, 1);
                return;
            }
        }
    }

    deleteOp(opid, tryRelink, reloadingOp)
    {
        let found = false;
        for (const i in this.ops)
        {
            if (this.ops[i].id == opid)
            {
                const op = this.ops[i];
                let reLinkP1 = null;
                let reLinkP2 = null;

                if (op)
                {
                    found = true;
                    if (tryRelink)
                    {
                        if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                        {
                            if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                            {
                                reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                                reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                            }
                        }
                    }

                    const opToDelete = this.ops[i];
                    opToDelete.removeLinks();

                    if (this.onDelete)
                    {
                        // todo: remove
                        this._log.warn("deprecated this.onDelete", this.onDelete);
                        this.onDelete(opToDelete);
                    }

                    this.ops.splice(i, 1);
                    opToDelete.emitEvent("delete", opToDelete);
                    this.emitEvent("onOpDelete", opToDelete, reloadingOp);

                    if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                    if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                    opToDelete.cleanUp();

                    if (reLinkP1 !== null && reLinkP2 !== null)
                    {
                        this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                    }

                    delete this._opIdCache[opid];
                    break;
                }
            }
        }

        if (!found) this._log.warn("core patch deleteop: not found...", opid);
    }

    getFrameNum()
    {
        return this._frameNum;
    }

    emitOnAnimFrameEvent(time, delta)
    {
        time = time || this.timer.getTime();

        for (let i = 0; i < this.animFrameCallbacks.length; ++i)
            if (this.animFrameCallbacks[i])
                this.animFrameCallbacks[i](time, this._frameNum, delta);

        for (let i = 0; i < this.animFrameOps.length; ++i)
            if (this.animFrameOps[i].onAnimFrame)
                this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
    }

    renderFrame(timestamp)
    {
        this.timer.update(this.reqAnimTimeStamp);
        this.freeTimer.update(this.reqAnimTimeStamp);
        const time = this.timer.getTime();
        const startTime = performance.now();
        this.cgl.frameStartTime = this.timer.getTime();

        const delta = timestamp - this.reqAnimTimeStamp || timestamp;

        this.emitOnAnimFrameEvent(null, delta);

        this.cgl.profileData.profileFrameDelta = delta;
        this.reqAnimTimeStamp = timestamp;
        this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

        this.emitEvent("onRenderFrame", time);

        this._frameNum++;
        if (this._frameNum == 1)
        {
            if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
        }
    }

    exec(timestamp)
    {
        if (!this._renderOneFrame && (this._paused || this.aborted)) return;
        this.emitEvent("reqAnimFrame");
        cancelAnimationFrame(this._animReq);

        this.config.fpsLimit = this.config.fpsLimit || 0;
        if (this.config.fpsLimit)
        {
            this._frameInterval = 1000 / this.config.fpsLimit;
        }

        const now = CABLES.now();
        const frameDelta = now - this._frameNext;

        if (this.isEditorMode())
        {
            if (!this._renderOneFrame)
            {
                if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
                {
                    this._lastFrameTime = 0;
                    setTimeout(this.exec.bind(this), 500);
                    this.emitEvent("renderDelayStart");
                    this._frameWasdelayed = true;
                    return;
                }
            }
        }

        if (this._renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
        {
            this.renderFrame(timestamp);

            if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
        }

        if (this._frameWasdelayed)
        {
            this.emitEvent("renderDelayEnd");
            this._frameWasdelayed = false;
        }

        if (this._renderOneFrame)
        {
            if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
            this.emitEvent("renderedOneFrame");
            this._renderOneFrame = false;
        }


        if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
    }

    /**
     * link two ops/ports
     * @function link
     * @memberof Patch
     * @instance
     * @param {Op} op1
     * @param {String} port1Name
     * @param {Op} op2
     * @param {String} port2Name
     * @param {boolean} lowerCase
     * @param {boolean} fromDeserialize
     */
    link(op1, port1Name, op2, port2Name, lowerCase, fromDeserialize)
    {
        if (!op1) return this._log.warn("link: op1 is null ");
        if (!op2) return this._log.warn("link: op2 is null");

        const port1 = op1.getPort(port1Name, lowerCase);
        const port2 = op2.getPort(port2Name, lowerCase);

        if (!port1) return op1._log.warn("port1 not found! " + port1Name + " (" + op1.objName + ")");
        if (!port2) return op1._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

        if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

        if (Link.canLink(port1, port2))
        {
            const link = new Link(this);
            link.link(port1, port2);

            this.emitEvent("onLink", port1, port2, link, fromDeserialize);
            return link;
        }
    }

    serialize(options)
    {
        const obj = {};

        options = options || {};
        obj.ops = [];
        obj.settings = this.settings;
        for (const i in this.ops)
        {
            const op = this.ops[i];
            if (op && op.getSerialized)obj.ops.push(op.getSerialized());
        }

        cleanJson(obj);

        if (options.asObject) return obj;
        return JSON.stringify(obj);
    }

    getOpsByRefId(refId)
    {
        const perf = CABLES.UI.uiProfiler.start("[corepatchetend] getOpsByRefId");
        const refOps = [];
        const ops = gui.corePatch().ops;
        for (let i = 0; i < ops.length; i++)
            if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
        perf.finish();
        return refOps;
    }

    getOpById(opid)
    {
        return this._opIdCache[opid];
    }

    getOpsByName(name)
    {
        // TODO: is this still needed ? unclear behaviour....
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].name == name) arr.push(this.ops[i]);
        return arr;
    }

    getOpsByObjName(name)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].objName == name) arr.push(this.ops[i]);
        return arr;
    }

    getOpsByOpId(opid)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].opId == opid) arr.push(this.ops[i]);
        return arr;
    }

    loadLib(which)
    {
        ajaxSync(
            "/ui/libs/" + which + ".js",
            (err, res) =>
            {
                const se = document.createElement("script");
                se.type = "text/javascript";
                se.text = res;
                document.getElementsByTagName("head")[0].appendChild(se);
            },
            "GET",
        );
    }

    getSubPatchOpsByName(patchId, objName)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                arr.push(this.ops[i]);

        return arr;
    }

    getSubPatchOp(patchId, objName)
    {
        return this.getFirstSubPatchOpByName(patchId, objName);
    }

    getFirstSubPatchOpByName(patchId, objName)
    {
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                return this.ops[i];

        return false;
    }

    _addLink(opinid, opoutid, inName, outName)
    {
        return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
    }

    deSerialize(obj, options)
    {
        options = options || { "genIds": false, "createRef": false };
        if (this.aborted) return;
        const newOps = [];
        const loadingId = this.loading.start("core", "deserialize");

        this.namespace = obj.namespace || "";
        this.name = obj.name || "";

        if (typeof obj === "string") obj = JSON.parse(obj);

        this.settings = obj.settings;

        this.emitEvent("patchLoadStart");

        obj.ops = obj.ops || [];

        if (window.logStartup)logStartup("add " + obj.ops.length + " ops... ");

        const addedOps = [];

        // add ops...
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            const start = CABLES.now();
            const opData = obj.ops[iop];
            let op = null;

            try
            {
                if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
                else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
            }
            catch (e)
            {
                this._log.error("[instancing error] op data:", opData, e);
                // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
            }

            if (op)
            {
                addedOps.push(op);
                if (options.genIds) op.id = shortId();
                op.portsInData = opData.portsIn;
                op._origData = JSON.parse(JSON.stringify(opData));
                op.storage = opData.storage;
                // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

                for (const ipi in opData.portsIn)
                {
                    const objPort = opData.portsIn[ipi];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port = op.getPort(objPort.name);

                        if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                        if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) port.set(objPort.value);

                        if (port)
                        {
                            port.deSerializeSettings(objPort);
                        }
                        else
                        {
                            // if (port.uiAttribs.hasOwnProperty("title"))
                            // {
                            //     op.preservedPortTitles = op.preservedPortTitles || {};
                            //     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                            // }
                            op.preservedPortValues = op.preservedPortValues || {};
                            op.preservedPortValues[objPort.name] = objPort.value;
                        }
                    }
                }

                for (const ipo in opData.portsOut)
                {
                    const objPort = opData.portsOut[ipo];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port2 = op.getPort(objPort.name);

                        if (port2)
                        {
                            port2.deSerializeSettings(objPort);

                            if (port2.uiAttribs.hasOwnProperty("title"))
                            {
                                op.preservedPortTitles = op.preservedPortTitles || {};
                                op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                            }


                            if (port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                                port2.set(obj.ops[iop].portsOut[ipo].value);

                            if (objPort.expose) port2.setUiAttribs({ "expose": true });
                        }
                    }
                }
                newOps.push(op);
            }

            const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
            if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
        }
        if (window.logStartup)logStartup("add ops done");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoadedValueSet)
            {
                this.ops[i].onLoadedValueSet(this.ops[i]._origData);
                this.ops[i].onLoadedValueSet = null;
                this.ops[i]._origData = null;
            }
            this.ops[i].emitEvent("loadedValueSet");
        }

        if (window.logStartup)logStartup("creating links");

        if (options.opsCreated)options.opsCreated(addedOps);
        // create links...
        if (obj.ops)
        {
            for (let iop = 0; iop < obj.ops.length; iop++)
            {
                if (obj.ops[iop].portsIn)
                {
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                    {
                        if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                            {
                                const l = this._addLink(
                                    obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                                // const took = performance.now - startTime;
                                // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                            }
                        }
                    }
                }
                if (obj.ops[iop].portsOut)
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                        if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili])
                                {
                                    if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                    {
                                        // lost link
                                        const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                        let dstOp = null;
                                        let theSubPatch = 0;

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                                outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                            )
                                            {
                                                theSubPatch = this.ops[i].patchId.get();
                                                break;
                                            }
                                        }

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                                this.ops[i].uiAttribs.subPatch == theSubPatch)
                                            {
                                                dstOp = this.ops[i];
                                                break;
                                            }
                                        }

                                        if (!dstOp) this._log.warn("could not find op for lost link");
                                        else
                                        {
                                            const l = this._addLink(
                                                dstOp.id,
                                                obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                                obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                                obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                        }
                                    }
                                    else
                                    {
                                        const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                        if (!l)
                                        {
                                            const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                            const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                            if (!op1)console.log("could not find link op1");
                                            if (!op2)console.log("could not find link op2");

                                            const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                            if (op1 && !op1.getPort(p1Name))
                                            {
                                                // console.log("PRESERVE port 1 not found", p1Name);

                                                op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                                op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }

                                            const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                            if (op2 && !op2.getPort(p2Name))
                                            {
                                                // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                                op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                                op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
            }
        }

        if (window.logStartup)logStartup("calling ops onloaded");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoaded)
            {
                // TODO: deprecate!!!
                this.ops[i].onLoaded();
                this.ops[i].onLoaded = null;
            }
        }

        if (window.logStartup)logStartup("initializing ops...");
        for (const i in this.ops)
        {
            if (this.ops[i].init)
            {
                try
                {
                    this.ops[i].init();
                    this.ops[i].init = null;
                }
                catch (e)
                {
                    console.error("op.init crash", e);
                }
            }
        }

        if (window.logStartup)logStartup("initializing vars...");

        if (this.config.variables)
            for (const varName in this.config.variables)
                this.setVarValue(varName, this.config.variables[varName]);

        if (window.logStartup)logStartup("initializing var ports");

        for (const i in this.ops)
        {
            this.ops[i].initVarPorts();
            delete this.ops[i].uiAttribs.pasted;
        }

        setTimeout(() => { this.loading.finished(loadingId); }, 100);

        if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

        this.deSerialized = true;
        this.emitEvent("patchLoadEnd", newOps, obj, options.genIds);
    }

    profile(enable)
    {
        this.profiler = new Profiler(this);
        for (const i in this.ops)
        {
            this.ops[i].profile(enable);
        }
    }

    // ----------------------

    /**
     * set variable value
     * @function setVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     * @param {Number|String|Boolean} val value
     */
    setVariable(name, val)
    {
        // if (this._variables.hasOwnProperty(name))
        if (this._variables[name] !== undefined)
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._log.warn("variable " + name + " not found!");
        }
    }

    _sortVars()
    {
        if (!this.isEditorMode()) return;
        const ordered = {};
        Object.keys(this._variables).sort(
            (a, b) =>
            { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
        ).forEach((key) =>
        {
            ordered[key] = this._variables[key];
        });
        this._variables = ordered;
    }

    /**
     * has variable
     * @function hasVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     */
    hasVar(name)
    {
        return this._variables[name] !== undefined;

        // return this._variables.hasOwnProperty(name);
    }

    // used internally
    setVarValue(name, val, type)
    {
        if (this.hasVar(name))
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._variables[name] = new core_variable(name, val, type);
            this._sortVars();
            this.emitEvent("variablesChanged");
        }
        return this._variables[name];
    }

    // old?
    getVarValue(name, val)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
    }

    /**
     * @function getVar
     * @memberof Patch
     * @instance
     * @param {String} name
     * @return {Variable} variable
     */
    getVar(name)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name];
    }


    deleteVar(name)
    {
        for (let i = 0; i < this.ops.length; i++)
            for (let j = 0; j < this.ops[i].portsIn.length; j++)
                if (this.ops[i].portsIn[j].getVariableName() == name)
                    this.ops[i].portsIn[j].setVariable(null);

        delete this._variables[name];
        this.emitEvent("variableDeleted", name);
        this.emitEvent("variablesChanged");
    }

    /**
     * @function getVars
     * @memberof Patch
     * @instance
     * @param t
     * @return {Array<Variable>} variables
     * @function
     */
    getVars(t)
    {
        if (t === undefined) return this._variables;

        const vars = [];
        if (t == CABLES.OP_PORT_TYPE_STRING) t = "string";
        if (t == CABLES.OP_PORT_TYPE_VALUE) t = "number";
        if (t == CABLES.OP_PORT_TYPE_ARRAY) t = "array";
        if (t == CABLES.OP_PORT_TYPE_OBJECT) t = "object";

        for (const i in this._variables)
        {
            if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i]);
        }
        return vars;
    }


    /**
     * @function preRenderOps
     * @memberof Patch
     * @instance
     * @description invoke pre rendering of ops
     * @function
     */
    preRenderOps()
    {
        this._log.log("prerendering...");

        for (let i = 0; i < this.ops.length; i++)
        {
            if (this.ops[i].preRender)
            {
                this.ops[i].preRender();
                this._log.log("prerender " + this.ops[i].objName);
            }
        }
    }

    /**
     * @function dispose
     * @memberof Patch
     * @instance
     * @description stop, dispose and cleanup patch
     */
    dispose()
    {
        this.pause();
        this.clear();
        this.cgl.dispose();
    }

    pushTriggerStack(p)
    {
        this._triggerStack.push(p);
    }

    popTriggerStack()
    {
        this._triggerStack.pop();
    }

    printTriggerStack()
    {
        if (this._triggerStack.length == 0)
        {
            // console.log("stack length", this._triggerStack.length); // eslint-disable-line
            return;
        }
        console.groupCollapsed( // eslint-disable-line
            "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
        );

        const rows = [];
        for (let i = 0; i < this._triggerStack.length; i++)
        {
            rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
        }

        console.table(rows); // eslint-disable-line
        console.groupEnd(); // eslint-disable-line
    }

    /**
     * returns document object of the patch could be != global document object when opening canvas ina popout window
     * @function getDocument
     * @memberof Patch
     * @instance
     * @return {Object} document
     */
    getDocument()
    {
        return this.cgl.canvas.ownerDocument;
    }
}

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};



Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                // console.log("lost link...?", links[l]);
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || CABLES.shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = CABLES.shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = CABLES.shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};
/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * configuration object for loading a patch
 * @typedef {Object} PatchConfig
 * @hideconstructor
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 *
 */

/* harmony default export */ const core_patch = (Patch);

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new core_patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */



const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {CABLES.Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        if (op.patch.config.onError)op.logError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {CABLES.Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {CABLES.Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {CABLES.Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {CABLES.op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {CABLES.Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};


/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {CABLES.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    if (!audioContext) onError(new Error("No Audiocontext"));

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();

    if (!url) return;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);

        audioContext.decodeAudioData(request.response, onFinished, onError).catch((e) =>
        {
            onError(e);
        });
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js



class cgp_uniform_Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._cgp = __shader._cgp;

        if (!_value)
        {
            // if (this.getType() == "m4") this._value = mat4.create();
            if (this.getType() == "t") this._value = this._cgp.getEmptyTexture();
            // else if (this.getType() == "2f") this._value = [0, 0];
            // else if (this.getType() == "4f") this._value = [0, 1, 0, 1];
            // else if (this.getType() == "3f") this._value = [0, 1, 0];
        }

        this.gpuBuffer = null;
    }


    updateValueF() { }

    updateValueArrayF() {}

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        if (v[0] == undefined)
        {
            this._log.stack("uniform value undefined");
            console.error("uniform value undefined");
        }
        this.needsUpdate = true;
        this._value = v;
    }

    setValueT(v)
    {
        if (this._value != v)
            this._shader.needsPipelineUpdate = "texture changed"; // todo really needed ? change binding instead?

        this.needsUpdate = true;
        this._value = v;
    }

    updateValueM4(v) {}

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueAny(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueAny() {}

    updateValueT() {}


    setGpuBuffer(b)
    {
        this.gpuBuffer = b;
    }

    copyToBuffer(buff, pos = 0)
    {
        if (this._type == "f")
        {
            buff[pos] = this._value;
        }
        else if (this._type == "t")
        {
        }
        else if (this._type == "4f")
        {
            buff[pos] = this._value[0];
            buff[pos + 1] = this._value[1];
            buff[pos + 2] = this._value[2];
            buff[pos + 3] = this._value[3];
        }
        else if (this._type == "f[]")
        {
            for (let i = 0; i < this._value.length; i++)
                buff[pos + i] = this._value[i];
        }
        else if (this._type == "m4")
        {
            for (let i = 0; i < 16; i++)
                buff[pos + i] = this._value[i];
        }
        else
        {
            this._log.warn("uniform copy to buffer unknown", this._type);
        }
    }

    getWgslTypeStr()
    {
        if (this._type == "m4") return "mat4x4f";
        if (this._type == "4f") return "vec4f";
        if (this._type == "3f") return "vec3f";
        if (this._type == "2f") return "vec2f";
        if (this._type == "f") return "float";
        if (this._type == "f[]") return "array<vec4f>";
        if (this._type == "i") return "int";
        if (this._type == "sampler") return "sampler";
        if (this._type == "t") return "texture_2d<f32>";
        this._log.warn("unknown type getWgslTypeStr", this._type);
        return "???";
    }

    getSizeBytes()
    {
        const bytesPerFloat = 4;
        const bytesPerInt = 4;
        if (this._type == "t") return 4;
        if (this._type == "sampler") return 4;
        if (this._type == "f") return 1 * bytesPerFloat;
        if (this._type == "2f") return 2 * bytesPerFloat;
        if (this._type == "3f") return 3 * bytesPerFloat;
        if (this._type == "4f") return 4 * bytesPerFloat;
        if (this._type == "f[]") return this._value.length * bytesPerFloat;

        if (this._type == "m4") return 4 * 4 * bytesPerFloat;

        if (this._type == "i") return 1 * bytesPerInt;
        if (this._type == "2i") return 2 * bytesPerInt;

        this._log.warn("unknown type getSizeBytes", this._type);
        return 4;
    }

    copy(newShader)
    {
        const uni = new cgp_uniform_Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;

        console.log(this._name, this._value, uni._value);


        return uni;
    }
}

;// CONCATENATED MODULE: ./src/core/cg/preproc.js
function preproc(str, vars)
{
    const lines = str.split("\n");
    const outLines = [];
    let stack = [];

    for (let i = 0; i < lines.length; i++)
    {
        let line = lines[i].trim();
        let parts = line.split(" ");

        if (line.startsWith("#ifdef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": s });
            continue;
        }
        if (line.startsWith("#ifndef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": !s });
            continue;
        }
        if (line.startsWith("#endif"))
        {
            stack.pop();
            continue;
        }
        const state = stack[stack.length - 1];

        if (line.startsWith("#else"))
        {
            state.state = !state.state;
            continue;
        }

        if (!state || state.state)
        {
            outLines.push(lines[i]);
        }
    }

    return outLines.join("\n");
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_gpubuffer.js


class GPUBuffer extends EventTarget
{
    constructor(cgp, name, data = null, options = {})
    {
        super();

        this.id = CABLES.shortId();

        this._name = name;
        this.floatArr = null;
        this._gpuBuffer = null;

        this.setData([0, 0, 0, 0]);
        this.needsUpdate = true;
        this._length = 0;

        if (options.buffCfg)
        {
            this._buffCfg = options.buffCfg;
        }

        if (data)
            this.setData(data);

        if (options.length) this.setLength(options.length);

        this.updateGpuBuffer(cgp);
    }

    setData(d)
    {
        // console.log((new Error()).stack);

        this.floatArr = new Float32Array(d);
        this.setLength(this.floatArr.length);

        // console.log(this.name, this.floatArr);
        this.needsUpdate = true;
    }

    setLength(s)
    {
        this._length = s;
        if (!this.floatArr || s != this.floatArr.length)
        {
            this.floatArr = new Float32Array(this._length);
            this.needsUpdate = true;
        }
    }

    updateGpuBuffer(cgp)
    {
        if (cgp) this._cgp = cgp;
        if (!this._cgp || !this._cgp.device)
        {
            console.log("no cgp...", this._name, this._cgp);
            return;
        }

        this._cgp.pushErrorScope("updateGpuBuffer");
        if (!this._gpuBuffer)
        {
            this._buffCfg = this._buffCfg || {};
            this._buffCfg.label = "gpuBuffer-" + this._name;
            if (!this._buffCfg.hasOwnProperty("size") && this.floatArr) this._buffCfg.size = this.floatArr.length * 4;
            this._buffCfg.usage = this._buffCfg.usage || (GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);

            this._gpuBuffer = this._cgp.device.createBuffer(this._buffCfg);
        }

        // if (!isNaN(this.floatArr[0]))console.log("shit", this._name);

        if (this.floatArr)
            this._cgp.device.queue.writeBuffer(
                this._gpuBuffer,
                0,
                this.floatArr.buffer,
                this.floatArr.byteOffset,
                this.floatArr.byteLength
            );

        // this._gpuBuffer.unmap();

        this._cgp.popErrorScope();

        this.needsUpdate = false;
    }

    get name()
    {
        return this._name;
    }

    get gpuBuffer()
    {
        if (!this._gpuBuffer || this.needsUpdate) this.updateGpuBuffer();

        return this._gpuBuffer;
    }

    get length()
    {
        return this._length;
    }

    getSizeBytes()
    {
        return this.floatArr.length * 4;
    }

    dispose()
    {
        // setTimeout(() =>
        // {
        //     if (this._gpuBuffer) this._gpuBuffer.destroy();
        // }, 100);
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_binding.js



class Binding
{
    /**
     * Description
     * @param {any} cgp
     * @param {any} idx
     * @param {string} name
     * @param {any} options={}
     */
    constructor(cgp, name, options = {})
    {
        if (typeof options != "object") this._log.error("binding options is not an object");
        this._index = -1;

        this._name = name;
        this._cgp = cgp;
        this._log = new Logger("cgp_binding");
        this.uniforms = [];
        this.cGpuBuffers = [];
        this._options = options;
        this.shader = null;
        this.bindingInstances = [];
        this.stageStr = options.stage;
        this.bindingType = options.bindingType || "uniform"; // "uniform", "storage", "read-only-storage",

        if (this.stageStr == "frag") this.stage = GPUShaderStage.FRAGMENT;
        else this.stage = GPUShaderStage.VERTEX;
        if (options.hasOwnProperty("index")) this._index = options.index;

        if (options.shader) this.shader = options.shader;

        this._buffer = null;
        this.isValid = true;
        this.changed = 0;

        if (this.shader)
        {
            if (this.stageStr == "frag") this.shader.bindingsFrag.push(this);
            if (this.stageStr == "vert") this.shader.bindingsVert.push(this);
            if (this._index == -1) this._index = this.shader.getNewBindingIndex();
        }

        if (this._index == -1) this._log.warn("binding could not get an index", this._name);

        this._cgp.on("deviceChange", () =>
        {
            // this.reInit();
        });
    }

    isStruct()
    {
        if (this.uniforms.length == 0) return false;

        if (this.uniforms.length == 1)
        {
            if (this.uniforms[0].type == "t" || this.uniforms[0].type == "sampler") return false;
            if (this.bindingType != "uniform") return false;
        }

        return true;
    }

    copy(newShader)
    {
        console.log("copy binding...");
        const options = {};

        for (const i in this._options)
            options[i] = this._options[i];

        options.shader = newShader;

        let binding = new Binding(this._cgp, this._name, options);

        for (let i = 0; i < this.uniforms.length; i++)
        {
            binding.addUniform(newShader.getUniform(this.uniforms[i].name)); // .copy(newShader)
        }




        return binding;
    }

    addUniform(uni)
    {
        this.uniforms.push(uni);
    }

    getSizeBytes()
    {
        let size = 0;
        for (let i = 0; i < this.uniforms.length; i++)
        {
            // console.log("UNIFORM!!!", i, this.uniforms[i], this.uniforms[i].getSizeBytes());
            // console.log("getSizeBytes", this.uniforms[i], this.uniforms[i].getSizeBytes);
            size += this.uniforms[i].getSizeBytes();
        }
        // if (this.uniforms.length == 0)console.log("NO UNIFORMS!!!");
        return size;
    }

    getShaderHeaderCode()
    {
        let str = "";

        let typeStr = "strct_" + this._name;
        let name = this._name;

        if (this.uniforms.length === 0) return "// no uniforms in bindinggroup...?\n";


        str += "// " + this.uniforms.length + " uniforms\n";

        if (this.isStruct())
        {
            str += "struct " + typeStr + "\n";
            str += "{\n";
            for (let i = 0; i < this.uniforms.length; i++)
            {
                str += "    " + this.uniforms[i].name + ": " + this.uniforms[i].getWgslTypeStr();
                if (i != this.uniforms.length - 1)str += ",";
                str += "\n";
            }
            str += "};\n";
        }
        else
        {
            typeStr = this.uniforms[0].getWgslTypeStr();
            name = this.uniforms[0].name;
        }

        str += "@group(0) ";
        str += "@binding(" + this._index + ") ";

        if (this.isStruct())
        {
            str += "var<" + this.bindingType + "> ";
        }
        else if (this.bindingType == "read-only-storage")str += "var<storage,read> ";
        else str += "var ";

        str += name + ": " + typeStr + ";\n";

        return str;
    }


    getBindingGroupLayoutEntry()
    {
        let label = "layout " + this._name + " [";
        for (let i = 0; i < this.uniforms.length; i++) label += this.uniforms[i].getName() + ",";
        label += "]";

        const o = {
            "label": label,
            "binding": this._index,
            "visibility": this.stage,
            "size": this.getSizeBytes()
        };

        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            o.texture = {};
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            o.sampler = {};
        }
        else
        {
            o.buffer = {};
            o.buffer.type = this.bindingType;
        }

        return o;
    }

    getBindingGroupEntry(gpuDevice, inst)
    {
        this.isValid = false;

        const o = {
            "label": this._name + " binding",
            "binding": this._index,
            "size": this.getSizeBytes(),
            "visibility": this.stage,
        };

        if (this.uniforms.length == 0)
        {
            console.log("binding uniforms length 0");
            return;
        }

        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this.uniforms[0].getValue() && this.uniforms[0].getValue().gpuTexture) o.resource = this.uniforms[0].getValue().gpuTexture.createView();
            else o.resource = this._cgp.getEmptyTexture().createView();// CABLES.emptyCglTexture.createView();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            let smplDesc = {
                "addressModeU": "mirror-repeat",
                "addressModeV": "mirror-repeat",
                "magFilter": "linear",
                "minFilter": "linear",
                "mipmapFilter": "linear",
            };

            if (this.uniforms[0].getValue()) smplDesc = this.uniforms[0].getValue().getSampler();

            const sampler = this.uniforms[0]._cgp.device.createSampler(smplDesc);
            o.resource = sampler;
        }
        else
        {
            this._createCgpuBuffer(inst);

            o.resource = {
                "buffer": this.cGpuBuffers[inst].gpuBuffer,
                "minBindingSize": this.getSizeBytes(),
                "hasDynamicOffset": 0
            };
        }

        this.isValid = true;
        this.bindingInstances[inst] = o;

        return o;
    }

    _createCgpuBuffer(inst)
    {
        let buffCfg = {
            "label": this._name,
            "size": this.getSizeBytes(),
            "usage": GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        };

        if (this.bindingType == "read-only-storage" || this.bindingType == "storage") buffCfg.usage = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;

        if (this.cGpuBuffers[inst]) this.cGpuBuffers[inst].dispose();
        this.cGpuBuffers[inst] = new GPUBuffer(this._cgp, this._name + " buff", null, { "buffCfg": buffCfg });

        if (this.uniforms.length > 0 && this.uniforms[0].gpuBuffer) this.cGpuBuffers[inst] = this.uniforms[0].gpuBuffer;
    }



    update(cgp, inst)
    {
        let b = this.bindingInstances[inst];
        if (!b) b = this.getBindingGroupEntry(cgp.device, inst);

        if (this.uniforms.length == 1 && this.uniforms[0].gpuBuffer)
        {
            if (this.uniforms[0].gpuBuffer != this.cGpuBuffers[inst])
            {
                console.log("changed?!");
                this.shader._needsRecompile = true; // TODO this should actually just rebuild the bindinggroup i guess ?
            }

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("extern uni bind", [this.uniforms[0].getName(), this.cGpuBuffers[inst].floatArr]);
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else
        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni texture");
            if (this.uniforms[0].getValue())
                if (this.uniforms[0].getValue().gpuTexture)
                {
                    this.bindingInstances[inst] = this.getBindingGroupEntry(this.uniforms[0]._cgp.device, inst);
                }
                else
                {
                    console.log("uni t has no gputexture");
                    b.resource = this._cgp.getErrorTexture().createView();
                }

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni sampler");
            b.resource = this.uniforms[0].getValue();
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else
        {
            let info = ["stage " + this.stageStr + " / inst " + inst];

            // console.log("B",this.);
            // update uniform values to buffer
            const s = this.getSizeBytes() / 4;

            // if (!this.cGpuBuffers[inst])
            // this._createCgpuBuffer(inst);
            // this.cGpuBuffers[inst] = new GPUBuffer(this._cgp, "buff", null, { "buffCfg": buffCfg });

            this.cGpuBuffers[inst].setLength(s);

            let off = 0;
            for (let i = 0; i < this.uniforms.length; i++)
            {
                info.push(this.uniforms[i].getName() + " " + this.uniforms[i].getValue());
                this.uniforms[i].copyToBuffer(this.cGpuBuffers[inst].floatArr, off); // todo: check if uniform changed?

                // if (isNaN(this.cGpuBuffers[inst].floatArr[0]))
                // {
                // console.log("shitttttttt", this.cGpuBuffers[inst].floatArr[0], this.uniforms[i].getName(), this.cGpuBuffers[inst].name, this.uniforms[i]);
                // }

                off += this.uniforms[i].getSizeBytes() / 4;
            }
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni buff", info);

            // console.log("upodate", inst);

            this.cGpuBuffers[inst].updateGpuBuffer();
            // todo: only if changed...
            // cgp.device.queue.writeBuffer(
            //     b.resource.buffer,
            //     0,
            //     this._buffer.buffer,
            //     this._buffer.byteOffset,
            //     this._buffer.byteLength
            // );

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js






class cgp_shader_Shader extends CgShader
{
    constructor(_cgp, _name, options = {})
    {
        super();
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];
        this.compute = options.compute || false;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this._compileReason = "";
        this.gpuShaderModule = null;
        this._needsRecompile = true;
        this.bindingCounter = 0;
        this.bindCountlastFrame = -1;
        this._bindingIndexCount = 0;

        this.defaultBindingVert = new Binding(_cgp, "vsUniforms", { "stage": "vert", "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.defaultBindingFrag = new Binding(_cgp, "fsUniforms", { "stage": "frag", "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.defaultBindingComp = new Binding(_cgp, "computeUniforms", { "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.bindingsFrag = [this.defaultBindingFrag];
        this.bindingsVert = [this.defaultBindingVert];
        this.bindingsComp = [this.defaultBindingComp];

        if (!this.compute)
        {
            this.uniModelMatrix = this.addUniformVert("m4", "modelMatrix");
            this.uniViewMatrix = this.addUniformVert("m4", "viewMatrix");
            this.uniProjMatrix = this.addUniformVert("m4", "projMatrix");
            this.uniNormalMatrix = this.addUniformVert("m4", "normalMatrix");
            this.uniModelViewMatrix = this.addUniformVert("m4", "modelViewMatrix");
            this._tempNormalMatrix = mat4.create();
            this._tempModelViewMatrix = mat4.create();
        }


        this._src = "";

        this._cgp.on("deviceChange", () =>
        {
            this.gpuShaderModule = null;
            this._needsRecompile = "device changed";
        });
    }

    incBindingCounter()
    {
        if (this.bindCountlastFrame != this._cgp.frame) this.bindingCounter = 0;
        else this.bindingCounter++;
        this.bindCountlastFrame = this._cgp.frame;
    }

    reInit()
    {

    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    getNewBindingIndex()
    {
        return ++this._bindingIndexCount;
    }


    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
    }

    _replaceMods(vs)
    {
        let srcHeadVert = "";
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                        }

                    srcHeadVert += mod.srcHead || "";
                    srcVert += mod.srcBody || "";

                    srcHeadVert += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                }
            }

            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        }

        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        return vs;
    }

    getProcessedSource()
    {
        const defs = {};
        for (let i = 0; i < this._defines.length; i++)
            defs[this._defines[i][0]] = this._defines[i][1] || true;


        let src = preproc(this._src, defs);

        let bindingsHeadVert = "";
        for (let i = 0; i < this.bindingsFrag.length; i++)
            bindingsHeadVert += this.bindingsFrag[i].getShaderHeaderCode();

        let bindingsHeadFrag = "";
        for (let i = 0; i < this.bindingsVert.length; i++)
            bindingsHeadFrag += this.bindingsVert[i].getShaderHeaderCode();



        src = bindingsHeadFrag + "\n\n////////////////\n\n" + bindingsHeadVert + "\n\n////////////////\n\n" + src;
        src = this._replaceMods(src);

        return src;
        // console.log("----------------\n", src, "\n----------------------------");
    }

    compile()
    {
        console.log("compile", this._compileReason);
        this._isValid = true;
        this._cgp.pushErrorScope("cgp_shader " + this._name);
        // console.log(this.getProcessedSource());
        this.gpuShaderModule = this._cgp.device.createShaderModule({ "code": this.getProcessedSource(), "label": this._name });
        this._cgp.popErrorScope(this.error.bind(this));
        this._needsRecompile = false;

        this.emitEvent("compiled");
    }

    error(e)
    {
        this._isValid = false;
    }

    bind()
    {
        if (!this.compute)
        {
            this.uniModelMatrix.setValue(this._cgp.mMatrix);
            this.uniViewMatrix.setValue(this._cgp.vMatrix);
            this.uniProjMatrix.setValue(this._cgp.pMatrix);

            // mat4.invert(this._tempNormalMatrix, this._cgp.mMatrix);
            // mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);
            mat4.mul(this._tempModelViewMatrix, this._cgp.vMatrix, this._cgp.mMatrix);



            // mat4.set(this._tempNormalMatrix, this._tempModelViewMatrix);
            mat4.invert(this._tempNormalMatrix, this._tempModelViewMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);


            // cpu billboarding?
            // this._tempModelViewMatrix[0 * 4 + 0] = 1.0;
            // this._tempModelViewMatrix[0 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[0 * 4 + 2] = 0.0;

            // // #ifndef BILLBOARDING_CYLINDRIC
            // this._tempModelViewMatrix[1 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[1 * 4 + 1] = 1.0;
            // this._tempModelViewMatrix[1 * 4 + 2] = 0.0;
            // // #endif

            // this._tempModelViewMatrix[2 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 2] = 1.0;

            this.uniModelViewMatrix.setValue(this._tempModelViewMatrix);
            this.uniNormalMatrix.setValue(this._tempNormalMatrix);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";

        this.defaultBindingFrag.addUniform(uni);
        this.needsPipelineUpdate = "add frag uniform";

        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";

        this.defaultBindingVert.addUniform(uni);
        this.needsPipelineUpdate = "add ver uniform";

        return uni;
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }

    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    }

    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return this._uniforms[i];
        }
    }

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new cgp_shader_Shader(this._cgp, this._name + " copy");
        shader.setSource(this._src);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;

        // shader.glPrimitive = this.glPrimitive;
        // shader.offScreenPass = this.offScreenPass;
        // shader._extensions = this._extensions;
        // shader.wireframe = this.wireframe;
        // shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].copy(shader);

        shader.bindingsFrag = [];
        for (let i = 0; i < this.bindingsFrag.length; i++) this.bindingsFrag[i].copy(shader);
        shader.defaultBindingFrag = this.bindingsFrag[0];

        shader.bindingsVert = [];
        for (let i = 0; i < this.bindingsVert.length; i++) this.bindingsVert[i].copy(shader);
        shader.defaultBindingVert = this.bindingsVert[0];

        shader.bindingsComp = [];
        for (let i = 0; i < this.bindingsComp.length; i++) this.bindingsComp[i].copy(shader);
        shader.defaultBindingComp = this.bindingsComp[0];

        console.log("copyyyyyyyyyy", shader.bindingsVert, this.bindingsVert);

        this.setWhyCompile("copy");
        shader._needsRecompile = true;
        return shader;
    }


    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }
            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        // this.popTextures();
        // for (let i = 0; i < origShader._textureStackUni.length; i++)
        // {
        //     this._textureStackUni[i] = origShader._textureStackUni[i];
        //     this._textureStackTex[i] = origShader._textureStackTex[i];
        //     this._textureStackType[i] = origShader._textureStackType[i];
        //     this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        // }
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl
/* harmony default export */ const cgl_shader_default = ("\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js



class cgp_texture_Texture extends CgTexture
{
    constructor(_cgp, options = {})
    {
        super(options);
        if (!_cgp) throw new Error("no cgp");
        this._log = new Logger("cgp_texture");
        this._cgp = _cgp;
        // this.id = CABLES.uuid();
        this.gpuTexture = null;
        this.gpuTextureDescriptor = null;

        options = options || {};

        this.name = options.name || "unknown";

        this.samplerDesc = {
            "addressModeU": options.wrap || options.addressModeU || "clamp-to-edge",
            "addressModeV": options.wrap || options.addressModeV || "clamp-to-edge",
            "magFilter": options.magFilter || options.filter || "linear",
            "minFilter": options.minFilter || options.filter || "linear",
        };


        this._cgp.on("deviceChange", () =>
        {
            // this.reInit();
        });
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        const textureType = "rgba8unorm";

        this._cgp.pushErrorScope("inittexture", { "logger": this._log });

        this.gpuTextureDescriptor = {

            "size": { "width": img.width, "height": img.height },
            "format": textureType,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        };

        this.gpuTexture = this._cgp.device.createTexture(this.gpuTextureDescriptor);
        this._cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": this.gpuTexture }, this.gpuTextureDescriptor.size);

        this._cgp.popErrorScope();

        return this.gpuTexture;
    }

    dispose()
    {
        console.log("todo dispose");
    }

    getInfo()
    {
        const tex = this;
        const obj = {};

        obj.name = tex.name;
        obj.size = tex.width + " x " + tex.height;

        obj.textureType = tex.textureType;

        return obj;
    }

    createView()
    {
        if (!this.gpuTexture)
        {
            console.log("no gputexture...");
            return null;
        }
        return this.gpuTexture.createView();
    }

    getSampler()
    {
        // "clamp-to-edge"
        // "repeat"
        // "mirror-repeat"

        return this.samplerDesc;
    }

    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        if (!w || !h) this._log.error("texture size is 0");
        this.width = w;
        this.height = h;
        this.gpuTexture = this._cgp.device.createTexture(
            {
                "size": [w, h],
                "format": "rgba8unorm",
                "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });

        this._cgp.device.queue.writeTexture(
            { "texture": this.gpuTexture },
            data,
            { "bytesPerRow": w * 4 },
            { "width": w, "height": h });
    }


    setWrap(v)
    {
        this.samplerDesc.addressModeU = this.samplerDesc.addressModeV = v;
    }

    setFilter(v)
    {
        this.samplerDesc.minFilter = this.samplerDesc.magFilter = v;
    }
}


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        const texture = new cgp_texture_Texture(cgp, { "name": url });

        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            }).catch((err) =>
            {
                if (onFinished)onFinished(cgp.getErrorTexture());
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js








// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/


/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
// const Context = function (_patch)
class WebGpuContext extends CGState
{
    constructor(_patch)
    {
        super();

        this.patch = _patch;

        this.lastErrorMsg = "";

        this._log = new Logger("WebGpuContext");
        this.gApi = CG.GAPI_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;
        this.frame = 0;
        this.catchErrors = false;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];
        this._stackErrorScope = [];
        this._stackBlend = [];
        this._stackErrorScopeLogs = [];

        this._defaultBlend = {
            "color": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
            "alpha": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
        };

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }


    /// ////////////////////

    // getViewPort()
    // {
    //     return [0, 0, this.canvasWidth, this.canvasHeight];
    // }

    renderStart(cgp, identTranslate, identTranslateView)
    {
        this.frame++;
        this.pushErrorScope("cgpstate internal", "internal");
        this.pushErrorScope("cgpstate out-of-memory", "out-of-memory");

        if (!this._simpleShader)
        {
            this._simpleShader = new cgp_shader_Shader(this, "simple default shader");
            this._simpleShader.setSource(cgl_shader_default);
            this._simpleShader.addUniformFrag("4f", "color", [1, 1, 0, 1]);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");


        this.pushBlend(this._defaultBlend);

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.popErrorScope();
        this.popErrorScope();

        if (this._stackErrorScope.length > 0)console.log("scope stack length invalid...");

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }


    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }

    createMesh(geom, glPrimitive)
    {
        return new CGP.Mesh(this, geom, glPrimitive);
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    setDevice(device)
    {
        this.device = device;


        if (this._emptyTexture) this._emptyTexture = this._emptyTexture.dispose();
        if (this._defaultTexture) this._defaultTexture = this._defaultTexture.dispose();
        if (this._errorTexture) this._errorTexture = this._errorTexture.dispose();

        this.emitEvent("deviceChange");
    }

    pushErrorScope(name, options = {})
    {
        if (this.catchErrors)
        {
            this._stackErrorScope.push(name);
            this._stackErrorScopeLogs.push(options.logger || null);
            this.device.pushErrorScope(options.scope || "validation");
        }
    }

    popErrorScope(cb)
    {
        if (this.catchErrors)
        {
            const name = this._stackErrorScope.pop();
            const logger = this._stackErrorScopeLogs.pop();
            this.device.popErrorScope().then((error) =>
            {
                if (error)
                {
                    if (this.lastErrorMsg == error.message)
                    {
                        // this._log.warn("last error once more...");
                    }
                    else
                    {
                        (logger || this._log).error(error.constructor.name, "in", name);
                        (logger || this._log).error(error.message);
                    }
                    this.lastErrorMsg = error.message;

                    if (cb)cb(error);
                }
            });
        }
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }

    // --------------------------------------
    // state depthfunc

    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }

    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
     * pop face culling enabled state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popCullFace()
    {
        this._stackCullFace.pop();
    }

    // --------------------------------------
    // state CullFace Facing

    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */
    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }

    pushBlend(b)
    {
        this._stackBlend.push(b);
    }

    popBlend()
    {
        this._stackBlend.pop();
    }

    stateBlend()
    {
        return this._stackBlend[this._stackBlend.length - 1];
    }

    getEmptyTexture()
    {
        if (this._emptyTexture) return this._emptyTexture;
        const size = 8;
        this._emptyTexture = new cgp_texture_Texture(this, {});
        this._emptyTexture.initFromData(CgTexture.getDefaultTextureData("empty", size), size, size);
        return this._emptyTexture;
    }

    getErrorTexture()
    {
        // if (this._errorTexture) return this._errorTexture;
        const size = 256;
        this._errorTexture = new cgp_texture_Texture(this, {});
        this._errorTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 }), size, size);
        return this._errorTexture;
    }

    getDefaultTexture()
    {
        if (this._defaultTexture) return this._defaultTexture;
        const size = 256;
        this._defaultTexture = new cgp_texture_Texture(this, {});
        this._defaultTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size), size, size);
        return this._defaultTexture;
    }
}


;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js



class Pipeline
{
    constructor(_cgp, name)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + name);
        this._name = name;
        this._cgp = _cgp;
        this._isValid = true;
        this._log = new Logger("pipeline");

        this._pipeCfg = null;
        this._renderPipeline = null;

        this._bindGroups = [];

        this._shaderListeners = [];
        this.shaderNeedsPipelineUpdate = false;

        this._old = {};

        this.DEPTH_COMPARE_FUNCS_STRINGS = ["never", "less", "equal", "lessequal", "greater", "notequal", "greaterequal", "always"];

        this._cgp.on("deviceChange", () =>
        {
            this._renderPipeline = null;
        });
    }

    get isValid() { return this._isValid; }

    setName(name)
    {
        this._name = name;
    }

    setShaderListener(oldShader, newShader)
    {
        for (let i = 0; i < this._shaderListeners.length; i++) oldShader.off(this._shaderListeners[i]);

        this._shaderListeners.push(
            newShader.on("compiled", () =>
            {
                // console.log("pipe update shader compileeeeeee");
                // this.needsRebuildReason = "shader changed";
                this.shaderNeedsPipelineUpdate = "shader compiled";
            }));
    }


    getInfo()
    {
        // console.log(this.bindingGroupLayoutEntries);

        const arr = [
            "name: " + this._name,
            "bindgroups: " + this._bindGroups.length

        ];

        if (this.bindingGroupLayoutEntries)arr.push("layouts: " + this.bindingGroupLayoutEntries.length);

        // if (this.bindingGroupLayoutEntries)
        //     for (let i = 0; i < this.bindingGroupLayoutEntries.length; i++)
        //     {
        //         // const lines = JSON.stringify(this.bindingGroupLayoutEntries, 4, true).split(",");
        //         arr.push(...lines);
        //     }

        return arr;
    }

    setPipeline(shader, mesh)
    {
        if (!mesh || !shader)
        {
            console.log("pipeline unknown shader/mesh");
            return;
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("setPipeline", this.getInfo());

        let needsRebuildReason = "";
        if (!this._renderPipeline) needsRebuildReason = "no renderpipeline";
        if (!this._pipeCfg)needsRebuildReason = "no pipecfg";
        if (this._old.mesh != mesh)needsRebuildReason = "no mesh";
        if (this._old.shader != shader)
        {
            this.setShaderListener(this._old.shader, shader);
            needsRebuildReason = "shader changed";
        }

        if (shader.needsPipelineUpdate)
        {
            needsRebuildReason = "mesh needs update: " + shader.needsPipelineUpdate;
            shader.needsPipelineUpdate = false;
        }
        if (mesh.needsPipelineUpdate)needsRebuildReason = "mesh needs update";
        if (this.shaderNeedsPipelineUpdate)needsRebuildReason = "shader was recompiled: " + this.shaderNeedsPipelineUpdate;

        if (this._pipeCfg)
        {
            if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite())
            {
                needsRebuildReason = "depth changed";
                this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite();
            }

            if (this._pipeCfg.fragment.targets[0].blend != this._cgp.stateBlend())
            {
                needsRebuildReason = "blend changed";
                this._pipeCfg.fragment.targets[0].blend = this._cgp.stateBlend();
            }

            // "fragment": {
            //     "module": shader.gpuShaderModule,
            //     "entryPoint": "myFSMain",
            //     "targets": [
            //         {
            //             "format": this._cgp.presentationFormat,
            //             "blend":
            //         },


            if (this._cgp.stateDepthTest() === false)
            {
                if (this._pipeCfg.depthStencil.depthCompare != "never")
                {
                    this._pipeCfg.depthStencil.depthCompare = "never";
                    needsRebuildReason = "depth compare changed";
                }
            }
            else
            if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc())
            {
                needsRebuildReason = "depth state ";
                this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepththis._cgp.stateDepthFunc();
            }

            // console.log(this._pipeCfg.primitive.cullMode, this._cgp.stateCullFaceFacing());
            if (this._pipeCfg.primitive.cullMode != this._cgp.stateCullFaceFacing())
            {
                needsRebuildReason = "cullmode change";
                this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing();
            }
        }

        this._cgp.currentPipeDebug =
        {
            "cfg": this._pipeCfg,
            "bindingGroupEntries": this.bindingGroupEntries,
            "bindingGroupLayoutEntries": this.bindingGroupLayoutEntries
        };


        if (needsRebuildReason != "")
        {
            console.log("rebuild pipe", needsRebuildReason);
            this._cgp.pushErrorScope("createPipeline", { "logger": this._log });

            this._bindGroups = [];

            this._pipeCfg = this.getPipelineObject(shader, mesh);
            this._old.device = this._cgp.device;
            this._old.shader = shader;
            this._old.mesh = mesh;
            this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);

            this._cgp.popErrorScope();
        }


        if (this._renderPipeline && this._isValid)
        {
            this._cgp.pushErrorScope("setpipeline", { "logger": this._log });


            this._cgp.passEncoder.setPipeline(this._renderPipeline);

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("updateUniforms");

            shader.incBindingCounter();

            if (!this._bindGroups[shader.bindingCounter])
            {
                const bindingGroupEntries = [];

                for (let i = 0; i < shader.bindingsVert.length; i++)
                {
                    if (shader.bindingsVert[i].getSizeBytes() > 0)
                    {
                        bindingGroupEntries.push(shader.bindingsVert[i].getBindingGroupEntry(this._cgp.device, shader.bindingCounter));
                    }
                    else console.log("shader defaultBindingVert size 0");
                }
                for (let i = 0; i < shader.bindingsFrag.length; i++)
                {
                    if (shader.bindingsFrag[i].getSizeBytes() > 0)
                    {
                        bindingGroupEntries.push(shader.bindingsFrag[i].getBindingGroupEntry(this._cgp.device, shader.bindingCounter));
                    }
                    else console.log("shader defaultBindingFrag size 0");
                }

                const bg = {
                    "label": "label2",
                    "layout": this.bindGroupLayout,
                    "entries": bindingGroupEntries
                };

                this._bindGroups[shader.bindingCounter] = this._cgp.device.createBindGroup(bg);
            }

            this._bindUniforms(shader, shader.bindingCounter);

            if (this._bindGroups[shader.bindingCounter]) this._cgp.passEncoder.setBindGroup(0, this._bindGroups[shader.bindingCounter]);


            // shader.bindingCounter++;

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

            this._cgp.popErrorScope();
        }
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();


        this.shaderNeedsPipelineUpdate = false;
    }

    getPipelineObject(shader, mesh)
    {
        this.bindingGroupLayoutEntries = [];

        for (let i = 0; i < shader.bindingsVert.length; i++)
        {
            if (shader.bindingsVert[i].getSizeBytes() > 0)
            {
                this.bindingGroupLayoutEntries.push(shader.bindingsVert[i].getBindingGroupLayoutEntry());
            }
            else console.log("shader defaultBindingVert size 0");
        }

        for (let i = 0; i < shader.bindingsFrag.length; i++)
        {
            if (shader.bindingsFrag[i].getSizeBytes() > 0)
            {
                this.bindingGroupLayoutEntries.push(shader.bindingsFrag[i].getBindingGroupLayoutEntry());
            }
            else console.log("shader defaultBindingFrag size 0");
        }
        // //////////

        this.bindGroupLayout = this._cgp.device.createBindGroupLayout(
            {
                "label": "bg layout " + this._name,
                "entries": this.bindingGroupLayoutEntries,
            });

        const pipelineLayout = this._cgp.device.createPipelineLayout({
            "label": "pipe layout " + this._name,
            "bindGroupLayouts": [this.bindGroupLayout]
        });


        let buffers = [
            // position
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                ],
            },
            // texcoords
            {
                "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                ],
            },
            // normals
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                ],
            }];



        const pipeCfg = {
            // "layout": "auto",
            "label": this._name,
            "layout": pipelineLayout,
            "vertex": {
                "module": shader.gpuShaderModule,
                "entryPoint": "myVSMain",
                "buffers": buffers

            },
            "fragment": {
                "module": shader.gpuShaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    {
                        "format": this._cgp.presentationFormat,
                        "blend": this._cgp.stateBlend()
                    },
                ],
            },
            "primitive": {
                "topology": "triangle-list",
                "cullMode": this._cgp.stateCullFaceFacing(), // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            },
            "depthStencil": {
                "depthWriteEnabled": this._cgp.stateDepthTest(),
                "depthCompare": this._cgp.stateDepthFunc(),
                "format": "depth24plus",
            },

        };

        return pipeCfg;
    }


    _bindUniforms(shader, inst)
    {
        // this._cgp.pushErrorScope("pipeline bind uniforms", { "logger": this._log });

        shader.bind();

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("bind uniforms vert", ["num:" + shader.bindingsVert.length]);
        for (let i = 0; i < shader.bindingsVert.length; i++) shader.bindingsVert[i].update(this._cgp, inst);
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("bind uniforms frag", ["num:" + shader.bindingsFrag.length]);
        for (let i = 0; i < shader.bindingsFrag.length; i++) shader.bindingsFrag[i].update(this._cgp, inst);
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();



        // shader.defaultBindingVert.update(this._cgp);

        // this._cgp.popErrorScope((e) =>
        // {
        //     this._isValid = false;
        // });
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js



class cgp_mesh_Mesh
{
    constructor(_cgp, __geom)
    {
        this._log = new Logger("cgl_mesh");
        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;
        this.instances = 1;

        this._pipe = new Pipeline(this._cgp, "new mesh");
        this._numNonIndexed = 0;
        this._positionBuffer = null;
        this._bufVerticesIndizes = null;
        this._attributes = [];
        this._needsPipelineUpdate = false;

        if (__geom) this.setGeom(__geom);
    }

    _createBuffer(device, data, usage)
    {
        let bo = {
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        };
        // ifbo.stepMode = "instance";
        const buffer = device.createBuffer(bo);
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef)
    {
        this._needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);

        this.setAttribute("normals", geom.vertexNormals, 3);
    }


    _disposeAttributes()
    {
        this._needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._attributes[i].buffer.destroy();
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options = {})
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        let instanced = false;
        if (options.instanced) instanced = options.instanced;

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            "instanced": instanced,
        };
        this._attributes.push(attr);

        return attr;
    }


    render()
    {
        if (!this._positionBuffer) return;
        if (this.instances <= 0) return;

        const shader = this._cgp.getShader();
        if (shader)shader.bind();

        if (!this._cgp.getShader() || !this._cgp.getShader().isValid)
        {
            // this.status = "shader invalid";
            return;
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("mesh", ["geom " + this._geom.name, "shader " + this._cgp.getShader().getName()]);

        this._pipe.setName("mesh " + this._geom.name + " " + this._cgp.getShader().getName());
        this._pipe.setPipeline(this._cgp.getShader(), this);


        if (this._pipe.isValid)
        {
            this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
            for (let i = 0; i < this._attributes.length; i++)
            {
                this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);
            }

            this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

            if (this._numNonIndexed)
                this._cgp.passEncoder.draw(this._numIndices, this.instances);
            else
                this._cgp.passEncoder.drawIndexed(this._numIndices, this.instances);
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/index.js










const cgp_CGP = {
    "Context": WebGpuContext,
    "Shader": cgp_shader_Shader,
    "Mesh": cgp_mesh_Mesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
    "Binding": Binding,
    "Uniform": cgp_uniform_Uniform,
    "MESHES": MESHES,
    "GPUBuffer": GPUBuffer
};

window.CABLES = window.CABLES || {};
window.CABLES.CGP = cgp_CGP;
window.CGP = cgp_CGP;




;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js



// todo: convert to prototyped...

/**
 * a framebuffer
 * @constructor
 * @class
 * @constructs Framebuffer
 * @param {Context} _cgl cgl
 * @param {Number} _w width
 * @param {Number} _h height
 * @param {Object} options
 */
const Framebuffer = function (_cgl, _w, _h, options)
{
    const cgl = _cgl;
    this._log = new Logger("Framebuffer");
    this.valid = true;

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE;
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBKIT_WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("MOZ_WEBGL_depth_texture");

    if (!depthTextureExt)
    {
        this._log.error("NO_DEPTH_TEXTURE", "no depth texture support");
        return;
    }

    let width = _w || 512;
    let height = _h || 512;

    options = options || {
        "isFloatingPointTexture": false,
    };

    if (!options.hasOwnProperty("clear")) options.clear = true;
    if (!options.hasOwnProperty("filter")) options.filter = Texture.FILTER_LINEAR;

    const texture = new Texture(cgl, {
        "isFloatingPointTexture": options.isFloatingPointTexture,
        "filter": options.filter,
        "wrap": options.wrap || Texture.CLAMP_TO_EDGE
    });

    let textureDepth = null;
    if (depthTextureExt)
    {
        textureDepth = new Texture(cgl, {
            "isDepthTexture": true,
        });
    }
    this._options = options;

    const frameBuf = cgl.gl.createFramebuffer();
    const depthBuffer = cgl.gl.createRenderbuffer();

    this.getWidth = function ()
    {
        return width;
    };
    this.getHeight = function ()
    {
        return height;
    };

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function ()
    {
        return frameBuf;
    };

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function ()
    {
        return depthBuffer;
    };

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function ()
    {
        return texture;
    };

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function ()
    {
        return textureDepth;
    };

    this.setFilter = function (f)
    {
        texture.filter = f;
        texture.setSize(width, height);
    };

    this.setSize = function (w, h)
    {
        if (w < 2) w = 2;
        if (h < 2) h = 2;

        width = Math.ceil(w);
        height = Math.ceil(h);

        cgl.profileData.profileFrameBuffercreate++;

        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer);

        texture.setSize(width, height);
        if (textureDepth) textureDepth.setSize(width, height);

        // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
        if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height);

        cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0);

        if (depthTextureExt)
        {
            cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer);
            cgl.gl.framebufferTexture2D(
                cgl.gl.FRAMEBUFFER,
                cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
                // cgl.gl.DEPTH_COMPONENT16,
                cgl.gl.TEXTURE_2D,
                textureDepth.tex,
                0,
            );
        }

        if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error("Invalid framebuffer");
        const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER);

        switch (status)
        {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
            break;
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", width, height, texture.tex, depthBuffer);
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            this.valid = false;
            this._log.warn(width, height, options);

            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        case 0x8CDB:
            this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            this.valid = false;
            break;
        default:
            this._log.warn("incomplete framebuffer", status);
            this.valid = false;
            throw new Error("Incomplete framebuffer: " + status);
        }

        cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null);
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null);
    };

    this.renderStart = function ()
    {
        cgl.pushModelMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.pushGlFrameBuffer(frameBuf);
        cgl.pushFrameBuffer(this);

        cgl.pushPMatrix();
        cgl.gl.viewport(0, 0, width, height);

        if (this._options.clear)
        {
            cgl.gl.clearColor(0, 0, 0, 0);
            cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
        }
    };

    this.renderEnd = function ()
    {
        cgl.popPMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer());
        cgl.popFrameBuffer();

        cgl.popModelMatrix();
        cgl.resetViewPort();
    };


    this.delete = function ()
    {
        texture.delete();
        this.valid = false;
        if (textureDepth) textureDepth.delete();
        cgl.gl.deleteRenderbuffer(depthBuffer);
        cgl.gl.deleteFramebuffer(frameBuf);
    };

    this.dispose = this.delete;

    this.setSize(width, height);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js
// * see framebuffer1






const Framebuffer2 = function (cgl, w, h, options)
{
    this._log = new Logger("cgl_framebuffer2");
    if (cgl.glVersion == 1) return this._log.error("framebuffer2 used on webgl1");
    this.Framebuffer2DrawTargetsDefault = null;
    this.Framebuffer2BlittingFramebuffer = null;
    this.Framebuffer2FinalFramebuffer = null;
    this._cgl = cgl;

    this._cgl.printError("before framebuffer2 constructor");

    this._width = 0;
    this._height = 0;
    this.valid = true;

    this._depthRenderbuffer = null;
    this._frameBuffer = null;
    this._textureFrameBuffer = null;
    this._colorRenderbuffers = [];
    this._drawTargetArray = [];
    this._disposed = false;

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

    this._options = options || {
        "isFloatingPointTexture": false,
    };

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || "unknown";

    this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

    if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
    if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
    if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
    if (!this._options.hasOwnProperty("multisampling"))
    {
        this._options.multisampling = false;
        this._options.multisamplingSamples = 0;
    }

    if (this._options.multisamplingSamples)
    {
        if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
        if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
        else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
    }

    if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
    if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

    this._numRenderBuffers = this._options.numRenderBuffers;
    this._colorTextures = [];

    this.clearColors = [];
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);


    if (!options.pixelFormat)
    {
        if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
        else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
    }

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i] = new Texture(cgl, {
            "name": "fb2 " + this.name + " " + i,
            "isFloatingPointTexture": this._options.isFloatingPointTexture,
            "anisotropic": this._options.anisotropic || 0,
            "pixelFormat": this._options.pixelFormat,
            "filter": this._options.filter,
            "wrap": this._options.wrap,
        });
    }



    let fil = Texture.FILTER_NEAREST;
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

    const defaultTexSize = 512;

    if (this._options.depth)
    {
        this._textureDepth = new Texture(cgl,
            {
                "name": "fb2 depth " + this.name,
                "isDepthTexture": true,
                "filter": fil,
                "shadowMap": this._options.shadowMap || false,
                "width": w || defaultTexSize,
                "height": h || defaultTexSize,
            });
    }

    if (cgl.aborted) return;

    this.setSize(w || defaultTexSize, h || defaultTexSize);

    this._cgl.printError("framebuffer2 constructor");
};

Framebuffer2.prototype.getWidth = function ()
{
    return this._width;
};
Framebuffer2.prototype.getHeight = function ()
{
    return this._height;
};

Framebuffer2.prototype.getGlFrameBuffer = function ()
{
    return this._frameBuffer;
};

Framebuffer2.prototype.getDepthRenderBuffer = function ()
{
    return this._depthRenderbuffer;
};

Framebuffer2.prototype.getTextureColor = function ()
{
    return this._colorTextures[0];
};

Framebuffer2.prototype.getTextureColorNum = function (i)
{
    return this._colorTextures[i];
};

Framebuffer2.prototype.getTextureDepth = function ()
{
    return this._textureDepth;
};

Framebuffer2.prototype.setFilter = function (f)
{
    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].filter = f;
        this._colorTextures[i].setSize(this._width, this._height);
    }
};

Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function ()
{
    this._disposed = true;
    let i = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete();
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuffer);
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
};

Framebuffer2.prototype.setSize = function (w, h)
{
    if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    let i = 0;

    this._width = this._cgl.checkTextureSize(w);
    this._height = this._cgl.checkTextureSize(h);

    this._cgl.profileData.profileFrameBuffercreate++;

    if (this._frameBuffer)
    {
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer();
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

    const depth = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        const renderBuffer = this._cgl.gl.createRenderbuffer();

        // color renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

        const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
        let internFormat = info.glInternalFormat;

        // if (this._options.isFloatingPointTexture)
        // {
        if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._log.warn("no linear pixelformat,using nearest");
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
        // {
        //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

        //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
        //     {
        //         console.log("no linear pixelformat,switching to nearest");
        //         this._options.filter = Texture.FILTER_NEAREST;
        //         this.setFilter(this._options.filter);
        //     }
        // }
        // }

        if (this._options.multisampling && this._options.multisamplingSamples)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
        }



        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
        this._colorRenderbuffers[i] = renderBuffer;
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    if (this._options.depth)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);


    let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
    if (depth)
    {
        this._textureDepth.setSize(this._width, this._height);
        this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        if (this._options.isFloatingPointTexture)
        {
            if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }
        else if (this._options.multisampling)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }

        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);


    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
    {
        this._log.error("framebuffer incomplete: " + this.name, this);
        this._log.log("options", this._options);
        this._log.log("options pixelformat", this._options.pixelFormat);

        switch (status)
        {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        default:
            this.valid = false;
            this._log.error("incomplete framebuffer", status, this._frameBuffer);
            this._cgl.printError();

            this._frameBuffer = null;
            // debugger;
            throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
};

Framebuffer2.prototype.renderStart = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
    this._cgl.checkFrameStarted("fb2 renderstart");
    this._cgl.pushModelMatrix(); // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    this._cgl.pushGlFrameBuffer(this._frameBuffer);
    this._cgl.pushFrameBuffer(this);

    this._cgl.pushPMatrix();
    this._cgl.pushViewPort(0, 0, this._width, this._height);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    if (this._options.clear)
    {
        this._cgl.gl.clearColor(0, 0, 0, 0);
        this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
    }
};

Framebuffer2.prototype.clear = function ()
{
    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    }
    else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
};

Framebuffer2.prototype.renderEnd = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
    this._cgl.popPMatrix();

    this._cgl.profileData.profileFramebuffer++;


    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);


            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

            // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);



            let flags = this._cgl.gl.COLOR_BUFFER_BIT;
            if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
    this._cgl.popFrameBuffer();

    this._cgl.popModelMatrix();
    // this._cgl.resetViewPort();
    this._cgl.popViewPort();


    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
            this._colorTextures[i].updateMipMap();
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }
    }
};



/// ///////

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";


        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/index.js






















const cgl_CGL = {
    "Framebuffer": Framebuffer,
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": Shader,
    "Uniform": Uniform,
    "MESHES": MESHES,
    "Context": Context,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;





;// CONCATENATED MODULE: ./src/core/index.js

















window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = cgp_CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = core_patch;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;



CABLES = Object.assign(CABLES,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);

if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1736760273867,"created":"2025-01-13T09:24:33.867Z","git":{"branch":"master","commit":"0e07848fd62e35a0a77f09c4c90a3fcbd6cb9f8f","date":"1736756567","message":"canvasinfo"}};
(()=>{"use strict";var t={d:(n,a)=>{for(var r in a)t.o(a,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:a[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ARRAY_TYPE:()=>f,EPSILON:()=>M,RANDOM:()=>l,equals:()=>d,setMatrixArrayType:()=>v,toRadian:()=>m});var a={};t.r(a),t.d(a,{LDU:()=>j,add:()=>z,adjoint:()=>S,clone:()=>y,copy:()=>p,create:()=>x,determinant:()=>R,equals:()=>Y,exactEquals:()=>Q,frob:()=>V,fromRotation:()=>D,fromScaling:()=>F,fromValues:()=>w,identity:()=>q,invert:()=>P,mul:()=>_,multiply:()=>T,multiplyScalar:()=>X,multiplyScalarAndAdd:()=>Z,rotate:()=>I,scale:()=>E,set:()=>g,str:()=>L,sub:()=>B,subtract:()=>O,transpose:()=>A});var r={};t.r(r),t.d(r,{add:()=>it,clone:()=>k,copy:()=>U,create:()=>N,determinant:()=>J,equals:()=>ft,exactEquals:()=>Mt,frob:()=>ot,fromRotation:()=>at,fromScaling:()=>rt,fromTranslation:()=>ut,fromValues:()=>C,identity:()=>W,invert:()=>H,mul:()=>lt,multiply:()=>K,multiplyScalar:()=>ct,multiplyScalarAndAdd:()=>st,rotate:()=>$,scale:()=>tt,set:()=>G,str:()=>et,sub:()=>vt,subtract:()=>ht,translate:()=>nt});var u={};t.r(u),t.d(u,{add:()=>Yt,adjoint:()=>At,clone:()=>dt,copy:()=>xt,create:()=>bt,determinant:()=>Pt,equals:()=>Nt,exactEquals:()=>Bt,frob:()=>Qt,fromMat2d:()=>Lt,fromMat4:()=>mt,fromQuat:()=>Vt,fromRotation:()=>Dt,fromScaling:()=>Ft,fromTranslation:()=>Et,fromValues:()=>yt,identity:()=>qt,invert:()=>gt,mul:()=>kt,multiply:()=>St,multiplyScalar:()=>Zt,multiplyScalarAndAdd:()=>_t,normalFromMat4:()=>jt,projection:()=>zt,rotate:()=>Tt,scale:()=>It,set:()=>pt,str:()=>Ot,sub:()=>Ut,subtract:()=>Xt,translate:()=>Rt,transpose:()=>wt});var e={};t.r(e),t.d(e,{add:()=>Ln,adjoint:()=>nn,clone:()=>Ct,copy:()=>Gt,create:()=>Wt,determinant:()=>an,equals:()=>Qn,exactEquals:()=>On,frob:()=>Fn,fromQuat:()=>An,fromQuat2:()=>xn,fromRotation:()=>ln,fromRotationTranslation:()=>dn,fromRotationTranslationScale:()=>wn,fromRotationTranslationScaleOrigin:()=>gn,fromScaling:()=>fn,fromTranslation:()=>Mn,fromValues:()=>Ht,fromXRotation:()=>vn,fromYRotation:()=>bn,fromZRotation:()=>mn,frustum:()=>Pn,getRotation:()=>qn,getScaling:()=>pn,getTranslation:()=>yn,identity:()=>Kt,invert:()=>tn,lookAt:()=>In,mul:()=>Yn,multiply:()=>rn,multiplyScalar:()=>jn,multiplyScalarAndAdd:()=>zn,ortho:()=>Tn,perspective:()=>Sn,perspectiveFromFieldOfView:()=>Rn,rotate:()=>on,rotateX:()=>hn,rotateY:()=>cn,rotateZ:()=>sn,scale:()=>en,set:()=>Jt,str:()=>Dn,sub:()=>Xn,subtract:()=>Vn,targetTo:()=>En,translate:()=>un,transpose:()=>$t});var o={};t.r(o),t.d(o,{add:()=>Wn,angle:()=>wa,bezier:()=>va,ceil:()=>Jn,clone:()=>_n,copy:()=>kn,create:()=>Zn,cross:()=>Ma,dist:()=>Da,distance:()=>ua,div:()=>Ea,divide:()=>Hn,dot:()=>sa,equals:()=>Sa,exactEquals:()=>Pa,floor:()=>Kn,forEach:()=>ja,fromValues:()=>Nn,hermite:()=>la,inverse:()=>ha,len:()=>La,length:()=>Bn,lerp:()=>fa,max:()=>ta,min:()=>$n,mul:()=>Ia,multiply:()=>Gn,negate:()=>ia,normalize:()=>ca,random:()=>ba,rotateX:()=>ya,rotateY:()=>pa,rotateZ:()=>qa,round:()=>na,scale:()=>aa,scaleAndAdd:()=>ra,set:()=>Un,sqrDist:()=>Fa,sqrLen:()=>Va,squaredDistance:()=>ea,squaredLength:()=>oa,str:()=>Aa,sub:()=>Ta,subtract:()=>Cn,transformMat3:()=>da,transformMat4:()=>ma,transformQuat:()=>xa,zero:()=>ga});var i={};t.r(i),t.d(i,{add:()=>Za,ceil:()=>ka,clone:()=>Oa,copy:()=>Ya,create:()=>za,cross:()=>or,dist:()=>xr,distance:()=>Ka,div:()=>dr,divide:()=>Na,dot:()=>er,equals:()=>vr,exactEquals:()=>lr,floor:()=>Ua,forEach:()=>wr,fromValues:()=>Qa,inverse:()=>rr,len:()=>pr,length:()=>tr,lerp:()=>ir,max:()=>Ca,min:()=>Wa,mul:()=>mr,multiply:()=>Ba,negate:()=>ar,normalize:()=>ur,random:()=>hr,round:()=>Ga,scale:()=>Ha,scaleAndAdd:()=>Ja,set:()=>Xa,sqrDist:()=>yr,sqrLen:()=>qr,squaredDistance:()=>$a,squaredLength:()=>nr,str:()=>fr,sub:()=>br,subtract:()=>_a,transformMat4:()=>cr,transformQuat:()=>sr,zero:()=>Mr});var h={};t.r(h),t.d(h,{add:()=>$r,calculateW:()=>Fr,clone:()=>Gr,conjugate:()=>Yr,copy:()=>Jr,create:()=>gr,dot:()=>au,equals:()=>su,exactEquals:()=>cu,exp:()=>Lr,fromEuler:()=>Zr,fromMat3:()=>Xr,fromValues:()=>Hr,getAngle:()=>Rr,getAxisAngle:()=>Sr,identity:()=>Ar,invert:()=>Qr,len:()=>eu,length:()=>uu,lerp:()=>ru,ln:()=>Vr,mul:()=>tu,multiply:()=>Tr,normalize:()=>hu,pow:()=>jr,random:()=>Or,rotateX:()=>Ir,rotateY:()=>Er,rotateZ:()=>Dr,rotationTo:()=>Mu,scale:()=>nu,set:()=>Kr,setAxes:()=>lu,setAxisAngle:()=>Pr,slerp:()=>zr,sqlerp:()=>fu,sqrLen:()=>iu,squaredLength:()=>ou,str:()=>_r});var c={};t.r(c),t.d(c,{add:()=>Ou,clone:()=>bu,conjugate:()=>Nu,copy:()=>wu,create:()=>vu,dot:()=>Zu,equals:()=>Ku,exactEquals:()=>Ju,fromMat4:()=>qu,fromRotation:()=>pu,fromRotationTranslation:()=>xu,fromRotationTranslationValues:()=>du,fromTranslation:()=>yu,fromValues:()=>mu,getDual:()=>Su,getReal:()=>Pu,getTranslation:()=>Iu,identity:()=>gu,invert:()=>Bu,len:()=>Uu,length:()=>ku,lerp:()=>_u,mul:()=>Yu,multiply:()=>Qu,normalize:()=>Gu,rotateAroundAxis:()=>zu,rotateByQuatAppend:()=>Vu,rotateByQuatPrepend:()=>ju,rotateX:()=>Du,rotateY:()=>Fu,rotateZ:()=>Lu,scale:()=>Xu,set:()=>Au,setDual:()=>Tu,setReal:()=>Ru,sqrLen:()=>Cu,squaredLength:()=>Wu,str:()=>Hu,translate:()=>Eu});var s={};t.r(s),t.d(s,{add:()=>ue,angle:()=>De,ceil:()=>he,clone:()=>te,copy:()=>ae,create:()=>$u,cross:()=>ge,dist:()=>Xe,distance:()=>be,div:()=>Ye,divide:()=>ie,dot:()=>we,equals:()=>je,exactEquals:()=>Ve,floor:()=>ce,forEach:()=>Be,fromValues:()=>ne,inverse:()=>pe,len:()=>ze,length:()=>de,lerp:()=>Ae,max:()=>Me,min:()=>se,mul:()=>Qe,multiply:()=>oe,negate:()=>ye,normalize:()=>qe,random:()=>Pe,rotate:()=>Ee,round:()=>fe,scale:()=>le,scaleAndAdd:()=>ve,set:()=>re,sqrDist:()=>Ze,sqrLen:()=>_e,squaredDistance:()=>me,squaredLength:()=>xe,str:()=>Le,sub:()=>Oe,subtract:()=>ee,transformMat2:()=>Se,transformMat2d:()=>Re,transformMat3:()=>Te,transformMat4:()=>Ie,zero:()=>Fe});var M=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array,l=Math.random;function v(t){f=t}var b=Math.PI/180;function m(t){return t*b}function d(t,n){return Math.abs(t-n)<=M*Math.max(1,Math.abs(t),Math.abs(n))}function x(){var t=new f(4);return f!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function y(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function w(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function g(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function A(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function P(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function S(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function R(t){return t[0]*t[3]-t[2]*t[1]}function T(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function I(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t}function E(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t}function D(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function F(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function L(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3])}function j(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function z(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}function X(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Z(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var _=T,B=O;function N(){var t=new f(6);return f!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function k(t){var n=new f(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function U(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function W(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function C(t,n,a,r,u,e){var o=new f(6);return o[0]=t,o[1]=n,o[2]=a,o[3]=r,o[4]=u,o[5]=e,o}function G(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t}function H(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null}function J(t){return t[0]*t[3]-t[1]*t[2]}function K(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function $(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t}function tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t}function nt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t}function at(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t}function rt(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function ut(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function et(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function ot(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function it(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t}function ht(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}function ct(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t}function st(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t}function Mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function ft(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(a-h)<=M*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=M*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=M*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-f)<=M*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(o-l)<=M*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-v)<=M*Math.max(1,Math.abs(i),Math.abs(v))}var lt=K,vt=ht;function bt(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function dt(t){var n=new f(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function xt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function yt(t,n,a,r,u,e,o,i,h){var c=new f(9);return c[0]=t,c[1]=n,c[2]=a,c[3]=r,c[4]=u,c[5]=e,c[6]=o,c[7]=i,c[8]=h,c}function pt(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t}function qt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function wt(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function gt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null}function At(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t}function Pt(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)}function St(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],x=a[6],y=a[7],p=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=x*r+y*o+p*c,t[7]=x*u+y*i+p*s,t[8]=x*e+y*h+p*M,t}function Rt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t}function Tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t}function It(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function Et(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function Dt(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ft(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Lt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t}function jt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(h*S-o*I-c*P)*E,t[2]=(o*T-i*S+c*A)*E,t[3]=(u*T-r*I-e*R)*E,t[4]=(a*I-u*S+e*P)*E,t[5]=(r*S-a*T-e*A)*E,t[6]=(b*g-m*w+d*q)*E,t[7]=(m*p-v*g-d*y)*E,t[8]=(v*w-b*p+d*x)*E,t):null}function zt(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function Ot(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function Qt(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function Yt(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function Xt(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function Zt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _t(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function Bt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function Nt(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],x=n[6],y=n[7],p=n[8];return Math.abs(a-f)<=M*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(r-l)<=M*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(u-v)<=M*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(e-b)<=M*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-m)<=M*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(i-d)<=M*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(h-x)<=M*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(c-y)<=M*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-p)<=M*Math.max(1,Math.abs(s),Math.abs(p))}var kt=St,Ut=Xt;function Wt(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ct(t){var n=new f(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Gt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Ht(t,n,a,r,u,e,o,i,h,c,s,M,l,v,b,m){var d=new f(16);return d[0]=t,d[1]=n,d[2]=a,d[3]=r,d[4]=u,d[5]=e,d[6]=o,d[7]=i,d[8]=h,d[9]=c,d[10]=s,d[11]=M,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d}function Jt(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t}function Kt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $t(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function tn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(u*T-r*I-e*R)*E,t[2]=(b*g-m*w+d*q)*E,t[3]=(f*w-M*g-l*q)*E,t[4]=(h*S-o*I-c*P)*E,t[5]=(a*I-u*S+e*P)*E,t[6]=(m*p-v*g-d*y)*E,t[7]=(s*g-f*p+l*y)*E,t[8]=(o*T-i*S+c*A)*E,t[9]=(r*S-a*T-e*A)*E,t[10]=(v*w-b*p+d*x)*E,t[11]=(M*p-s*w-l*x)*E,t[12]=(i*P-o*R-h*A)*E,t[13]=(a*R-r*P+u*A)*E,t[14]=(b*y-v*q-m*x)*E,t[15]=(s*q-M*y+f*x)*E,t):null}function nn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t}function an(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)}function rn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],x=n[15],y=a[0],p=a[1],q=a[2],w=a[3];return t[0]=y*r+p*i+q*M+w*b,t[1]=y*u+p*h+q*f+w*m,t[2]=y*e+p*c+q*l+w*d,t[3]=y*o+p*s+q*v+w*x,y=a[4],p=a[5],q=a[6],w=a[7],t[4]=y*r+p*i+q*M+w*b,t[5]=y*u+p*h+q*f+w*m,t[6]=y*e+p*c+q*l+w*d,t[7]=y*o+p*s+q*v+w*x,y=a[8],p=a[9],q=a[10],w=a[11],t[8]=y*r+p*i+q*M+w*b,t[9]=y*u+p*h+q*f+w*m,t[10]=y*e+p*c+q*l+w*d,t[11]=y*o+p*s+q*v+w*x,y=a[12],p=a[13],q=a[14],w=a[15],t[12]=y*r+p*i+q*M+w*b,t[13]=y*u+p*h+q*f+w*m,t[14]=y*e+p*c+q*l+w*d,t[15]=y*o+p*s+q*v+w*x,t}function un(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t}function en(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function on(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b,m,d,x,y,p,q,w,g,A,P,S,R,T,I=r[0],E=r[1],D=r[2],F=Math.hypot(I,E,D);return F<M?null:(I*=F=1/F,E*=F,D*=F,u=Math.sin(a),o=1-(e=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],x=n[10],y=n[11],p=I*I*o+e,q=E*I*o+D*u,w=D*I*o-E*u,g=I*E*o-D*u,A=E*E*o+e,P=D*E*o+I*u,S=I*D*o+E*u,R=E*D*o-I*u,T=D*D*o+e,t[0]=i*p+f*q+m*w,t[1]=h*p+l*q+d*w,t[2]=c*p+v*q+x*w,t[3]=s*p+b*q+y*w,t[4]=i*g+f*A+m*P,t[5]=h*g+l*A+d*P,t[6]=c*g+v*A+x*P,t[7]=s*g+b*A+y*P,t[8]=i*S+f*R+m*T,t[9]=h*S+l*R+d*T,t[10]=c*S+v*R+x*T,t[11]=s*S+b*R+y*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function hn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t}function cn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t}function sn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t}function Mn(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function fn(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,n,a){var r,u,e,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<M?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),e=1-(u=Math.cos(n)),t[0]=o*o*e+u,t[1]=i*o*e+h*r,t[2]=h*o*e-i*r,t[3]=0,t[4]=o*i*e-h*r,t[5]=i*i*e+u,t[6]=h*i*e+o*r,t[7]=0,t[8]=o*h*e+i*r,t[9]=i*h*e-o*r,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function vn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function bn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,x=o*c;return t[0]=1-(l+b),t[1]=M+x,t[2]=f-d,t[3]=0,t[4]=M-x,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function xn(t,n){var a=new f(3),r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=r*r+u*u+e*e+o*o;return M>0?(a[0]=2*(i*o+s*r+h*e-c*u)/M,a[1]=2*(h*o+s*u+c*r-i*e)/M,a[2]=2*(c*o+s*e+i*u-h*r)/M):(a[0]=2*(i*o+s*r+h*e-c*u),a[1]=2*(h*o+s*u+c*r-i*e),a[2]=2*(c*o+s*e+i*u-h*r)),dn(t,n,a),t}function yn(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function pn(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function qn(t,n){var a=new f(3);pn(a,n);var r=1/a[0],u=1/a[1],e=1/a[2],o=n[0]*r,i=n[1]*u,h=n[2]*e,c=n[4]*r,s=n[5]*u,M=n[6]*e,l=n[8]*r,v=n[9]*u,b=n[10]*e,m=o+s+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(M-v)/d,t[1]=(l-h)/d,t[2]=(i-c)/d):o>s&&o>b?(d=2*Math.sqrt(1+o-s-b),t[3]=(M-v)/d,t[0]=.25*d,t[1]=(i+c)/d,t[2]=(l+h)/d):s>b?(d=2*Math.sqrt(1+s-o-b),t[3]=(l-h)/d,t[0]=(i+c)/d,t[1]=.25*d,t[2]=(M+v)/d):(d=2*Math.sqrt(1+b-o-s),t[3]=(i-c)/d,t[0]=(l+h)/d,t[1]=(M+v)/d,t[2]=.25*d),t}function wn(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,x=i*c,y=i*s,p=r[0],q=r[1],w=r[2];return t[0]=(1-(v+m))*p,t[1]=(f+y)*p,t[2]=(l-x)*p,t[3]=0,t[4]=(f-y)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+x)*w,t[9]=(b-d)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function gn(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,x=h*c,y=h*s,p=h*M,q=r[0],w=r[1],g=r[2],A=u[0],P=u[1],S=u[2],R=(1-(b+d))*q,T=(l+p)*q,I=(v-y)*q,E=(l-p)*w,D=(1-(f+d))*w,F=(m+x)*w,L=(v+y)*g,V=(m-x)*g,j=(1-(f+b))*g;return t[0]=R,t[1]=T,t[2]=I,t[3]=0,t[4]=E,t[5]=D,t[6]=F,t[7]=0,t[8]=L,t[9]=V,t[10]=j,t[11]=0,t[12]=a[0]+A-(R*A+E*P+L*S),t[13]=a[1]+P-(T*A+D*P+V*S),t[14]=a[2]+S-(I*A+F*P+j*S),t[15]=1,t}function An(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Pn(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t}function Sn(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}function Rn(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t}function Tn(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}function In(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b=n[0],m=n[1],d=n[2],x=r[0],y=r[1],p=r[2],q=a[0],w=a[1],g=a[2];return Math.abs(b-q)<M&&Math.abs(m-w)<M&&Math.abs(d-g)<M?Kt(t):(s=b-q,f=m-w,l=d-g,u=y*(l*=v=1/Math.hypot(s,f,l))-p*(f*=v),e=p*(s*=v)-x*l,o=x*f-y*s,(v=Math.hypot(u,e,o))?(u*=v=1/v,e*=v,o*=v):(u=0,e=0,o=0),i=f*o-l*e,h=l*u-s*o,c=s*e-f*u,(v=Math.hypot(i,h,c))?(i*=v=1/v,h*=v,c*=v):(i=0,h=0,c=0),t[0]=u,t[1]=i,t[2]=s,t[3]=0,t[4]=e,t[5]=h,t[6]=f,t[7]=0,t[8]=o,t[9]=c,t[10]=l,t[11]=0,t[12]=-(u*b+e*m+o*d),t[13]=-(i*b+h*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)}function En(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t}function Dn(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Fn(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Ln(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t}function Vn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function jn(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t}function zn(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Qn(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],x=t[15],y=n[0],p=n[1],q=n[2],w=n[3],g=n[4],A=n[5],P=n[6],S=n[7],R=n[8],T=n[9],I=n[10],E=n[11],D=n[12],F=n[13],L=n[14],V=n[15];return Math.abs(a-y)<=M*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(r-p)<=M*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-q)<=M*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=M*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-g)<=M*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-A)<=M*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(h-P)<=M*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(c-S)<=M*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(s-R)<=M*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(f-T)<=M*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(l-I)<=M*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-E)<=M*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(b-D)<=M*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(m-F)<=M*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(d-L)<=M*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(x-V)<=M*Math.max(1,Math.abs(x),Math.abs(V))}var Yn=rn,Xn=Vn;function Zn(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function _n(t){var n=new f(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Bn(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function Nn(t,n,a){var r=new f(3);return r[0]=t,r[1]=n,r[2]=a,r}function kn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Un(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function Wn(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function Cn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Gn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Hn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function Jn(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function Kn(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function $n(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function ta(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function na(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function aa(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function ra(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function ua(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function ea(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function oa(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function ia(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function ha(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function ca(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function sa(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}function fa(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t}function la(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t}function va(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t}function ba(t,n){n=n||1;var a=2*l()*Math.PI,r=2*l()-1,u=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*u,t[1]=Math.sin(a)*u,t[2]=r*n,t}function ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t}function da(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t}function xa(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t}function ya(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function pa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function qa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function wa(t,n){var a=Nn(t[0],t[1],t[2]),r=Nn(n[0],n[1],n[2]);ca(a,a),ca(r,r);var u=sa(a,r);return u>1?0:u<-1?Math.PI:Math.acos(u)}function ga(t){return t[0]=0,t[1]=0,t[2]=0,t}function Aa(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Pa(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Sa(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2];return Math.abs(a-e)<=M*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-o)<=M*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=M*Math.max(1,Math.abs(u),Math.abs(i))}var Ra,Ta=Cn,Ia=Gn,Ea=Hn,Da=ua,Fa=ea,La=Bn,Va=oa,ja=(Ra=Zn(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)Ra[0]=t[o],Ra[1]=t[o+1],Ra[2]=t[o+2],u(Ra,Ra,e),t[o]=Ra[0],t[o+1]=Ra[1],t[o+2]=Ra[2];return t});function za(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Oa(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qa(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function Ya(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xa(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function Za(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function _a(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Ba(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function Na(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ka(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function Ua(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function Wa(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function Ca(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function Ga(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function Ha(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Ja(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function Ka(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function $a(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function tr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function nr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function ar(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function rr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function ur(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function er(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function or(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t}function ir(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function hr(t,n){var a,r,u,e,o,i;n=n||1;do{o=(a=2*l()-1)*a+(r=2*l()-1)*r}while(o>=1);do{i=(u=2*l()-1)*u+(e=2*l()-1)*e}while(i>=1);var h=Math.sqrt((1-o)/i);return t[0]=n*a,t[1]=n*r,t[2]=n*u*h,t[3]=n*e*h,t}function cr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function sr(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t}function Mr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function lr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function vr(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}var br=_a,mr=Ba,dr=Na,xr=Ka,yr=$a,pr=tr,qr=nr,wr=function(){var t=za();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();function gr(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ar(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Pr(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Sr(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>M?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a}function Rr(t,n){var a=au(t,n);return Math.acos(2*a*a-1)}function Tr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ir(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Er(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Dr(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Fr(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t}function Lr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Vr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function jr(t,n,a){return Vr(t,n),nu(t,t,a),Lr(t,t),t}function zr(t,n,a,r){var u,e,o,i,h,c=n[0],s=n[1],f=n[2],l=n[3],v=a[0],b=a[1],m=a[2],d=a[3];return(e=c*v+s*b+f*m+l*d)<0&&(e=-e,v=-v,b=-b,m=-m,d=-d),1-e>M?(u=Math.acos(e),o=Math.sin(u),i=Math.sin((1-r)*u)/o,h=Math.sin(r*u)/o):(i=1-r,h=r),t[0]=i*c+h*v,t[1]=i*s+h*b,t[2]=i*f+h*m,t[3]=i*l+h*d,t}function Or(t){var n=l(),a=l(),r=l(),u=Math.sqrt(1-n),e=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*a),t[1]=u*Math.cos(2*Math.PI*a),t[2]=e*Math.sin(2*Math.PI*r),t[3]=e*Math.cos(2*Math.PI*r),t}function Qr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t}function Yr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Xr(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}function Zr(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t}function _r(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var Br,Nr,kr,Ur,Wr,Cr,Gr=Oa,Hr=Qa,Jr=Ya,Kr=Xa,$r=Za,tu=Tr,nu=Ha,au=er,ru=ir,uu=tr,eu=uu,ou=nr,iu=ou,hu=ur,cu=lr,su=vr,Mu=(Br=Zn(),Nr=Nn(1,0,0),kr=Nn(0,1,0),function(t,n,a){var r=sa(n,a);return r<-.999999?(Ma(Br,Nr,n),La(Br)<1e-6&&Ma(Br,kr,n),ca(Br,Br),Pr(t,Br,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Ma(Br,n,a),t[0]=Br[0],t[1]=Br[1],t[2]=Br[2],t[3]=1+r,hu(t,t))}),fu=(Ur=gr(),Wr=gr(),function(t,n,a,r,u,e){return zr(Ur,n,u,e),zr(Wr,a,r,e),zr(t,Ur,Wr,2*e*(1-e)),t}),lu=(Cr=bt(),function(t,n,a,r){return Cr[0]=a[0],Cr[3]=a[1],Cr[6]=a[2],Cr[1]=r[0],Cr[4]=r[1],Cr[7]=r[2],Cr[2]=-n[0],Cr[5]=-n[1],Cr[8]=-n[2],hu(t,Xr(t,Cr))});function vu(){var t=new f(8);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function bu(t){var n=new f(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n}function mu(t,n,a,r,u,e,o,i){var h=new f(8);return h[0]=t,h[1]=n,h[2]=a,h[3]=r,h[4]=u,h[5]=e,h[6]=o,h[7]=i,h}function du(t,n,a,r,u,e,o){var i=new f(8);i[0]=t,i[1]=n,i[2]=a,i[3]=r;var h=.5*u,c=.5*e,s=.5*o;return i[4]=h*r+c*a-s*n,i[5]=c*r+s*t-h*a,i[6]=s*r+h*n-c*t,i[7]=-h*t-c*n-s*a,i}function xu(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function yu(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function pu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function qu(t,n){var a=gr();qn(a,n);var r=new f(3);return yn(r,n),xu(t,a,r),t}function wu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function gu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function Au(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t}var Pu=Jr;function Su(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}var Ru=Jr;function Tu(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function Iu(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t}function Eu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t}function Du(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ir(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Fu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Er(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Lu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Dr(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Vu(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t}function ju(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t}function zu(t,n,a,r){if(Math.abs(r)<M)return wu(t,n);var u=Math.hypot(a[0],a[1],a[2]);r*=.5;var e=Math.sin(r),o=e*a[0]/u,i=e*a[1]/u,h=e*a[2]/u,c=Math.cos(r),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*o+f*h-l*i,t[1]=f*c+v*i+l*o-s*h,t[2]=l*c+v*h+s*i-f*o,t[3]=v*c-s*o-f*i-l*h;var b=n[4],m=n[5],d=n[6],x=n[7];return t[4]=b*c+x*o+m*h-d*i,t[5]=m*c+x*i+d*o-b*h,t[6]=d*c+x*h+b*i-m*o,t[7]=x*c-b*o-m*i-d*h,t}function Ou(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function Qu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],x=a[3];return t[0]=r*x+o*b+u*d-e*m,t[1]=u*x+o*m+e*b-r*d,t[2]=e*x+o*d+r*m-u*b,t[3]=o*x-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*x+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*x+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*x+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*x-M*b-f*m-l*d,t}var Yu=Qu;function Xu(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}var Zu=au;function _u(t,n,a,r){var u=1-r;return Zu(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t}function Bu(t,n){var a=Wu(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Nu(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}var ku=uu,Uu=ku,Wu=ou,Cu=Wu;function Gu(t,n){var a=Wu(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t}function Hu(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Ju(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function Ku(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],x=n[7];return Math.abs(a-s)<=M*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-f)<=M*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=M*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=M*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=M*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=M*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=M*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-x)<=M*Math.max(1,Math.abs(c),Math.abs(x))}function $u(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}function te(t){var n=new f(2);return n[0]=t[0],n[1]=t[1],n}function ne(t,n){var a=new f(2);return a[0]=t,a[1]=n,a}function ae(t,n){return t[0]=n[0],t[1]=n[1],t}function re(t,n,a){return t[0]=n,t[1]=a,t}function ue(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function ee(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function oe(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function ie(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function he(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function ce(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function se(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function Me(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function fe(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function le(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function ve(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function be(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function me(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function de(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function xe(t){var n=t[0],a=t[1];return n*n+a*a}function ye(t,n){return t[0]=-n[0],t[1]=-n[1],t}function pe(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function qe(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function we(t,n){return t[0]*n[0]+t[1]*n[1]}function ge(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function Ae(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t}function Pe(t,n){n=n||1;var a=2*l()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function Se(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t}function Re(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t}function Te(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t}function Ie(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t}function Ee(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t}function De(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=a*a+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(a*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)}function Fe(t){return t[0]=0,t[1]=0,t}function Le(t){return"vec2("+t[0]+", "+t[1]+")"}function Ve(t,n){return t[0]===n[0]&&t[1]===n[1]}function je(t,n){var a=t[0],r=t[1],u=n[0],e=n[1];return Math.abs(a-u)<=M*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-e)<=M*Math.max(1,Math.abs(r),Math.abs(e))}var ze=de,Oe=ee,Qe=oe,Ye=ie,Xe=be,Ze=me,_e=xe,Be=function(){var t=$u();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}();window.glMatrix=n,window.mat2=a,window.mat2d=r,window.mat3=u,window.mat4=e,window.quat=h,window.quat2=c,window.vec2=s,window.vec3=o,window.vec4=i})();
//# sourceMappingURL=libs.core.js.map
if(!CABLES.exportedPatches)CABLES.exportedPatches={};CABLES.exportedPatches["IEbbPF"]={_id:"67d9c42557c6e24a65b191c0",ops:[{id:"b2116cc1-de33-47ec-b2b2-7eee1826bcbb",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"573klgf45",objOut:"b2116cc1-de33-47ec-b2b2-7eee1826bcbb"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"28a98b0f-cdb1-4696-8380-276cece840df",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.76},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"b2116cc1-de33-47ec-b2b2-7eee1826bcbb",objOut:"28a98b0f-cdb1-4696-8380-276cece840df"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"ff736d50-6529-4d6e-8423-8d3da1bcaaff",uiAttribs:{},portsOut:[{name:"trigger 2",links:[{portIn:"Execute",portOut:"trigger 2",objIn:"ve619frat",objOut:"ff736d50-6529-4d6e-8423-8d3da1bcaaff"}]},{name:"trigger 3",links:[{portIn:"Execute",portOut:"trigger 3",objIn:"o5c0ynxld",objOut:"ff736d50-6529-4d6e-8423-8d3da1bcaaff"}]},{name:"trigger 12",links:[{portIn:"Execute",portOut:"trigger 12",objIn:"x213hij6c",objOut:"ff736d50-6529-4d6e-8423-8d3da1bcaaff"}]}],objName:"Ops.Gl.LayerSequence"},{id:"573klgf45",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"oyrdefsdl",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Bedroom"}],objName:"Ops.Ui.Area"},{id:"7xl69x1le",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"28a98b0f-cdb1-4696-8380-276cece840df",objOut:"7xl69x1le"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"zmhjwgtbt",uiAttribs:{},portsIn:[{name:"posX",value:1.05},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"8npnpayko",objOut:"zmhjwgtbt"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"kgxs7nbjz",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:1},{name:"b",value:.648},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"zmhjwgtbt",objOut:"kgxs7nbjz"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"8npnpayko",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"cn8f7xu42",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Living room"}],objName:"Ops.Ui.Area"},{id:"tud3d5w0c",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"kgxs7nbjz",objOut:"tud3d5w0c"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"o5c0ynxld",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"u0cv0uz0t",objOut:"o5c0ynxld"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"wmhlewqtk",uiAttribs:{},portsIn:[{name:"scale",value:.8},{name:"x",value:1},{name:"y",value:1},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"Execute",portOut:"trigger",objIn:"gw6uyi3eh",objOut:"wmhlewqtk"},{portIn:"Execute",portOut:"trigger",objIn:"guaw59jbd",objOut:"wmhlewqtk"},{portIn:"Execute",portOut:"trigger",objIn:"u330cmf78",objOut:"wmhlewqtk"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"kg7h6tdcx",uiAttribs:{},portsIn:[{name:"posX",value:2.11},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"reopsl4pq",objOut:"kg7h6tdcx"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"y1w5uxtf5",uiAttribs:{},portsIn:[{name:"r",value:.7584555626131609},{name:"g",value:.8381461521274323},{name:"b",value:.8626663335164388},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"kg7h6tdcx",objOut:"y1w5uxtf5"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"reopsl4pq",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"0mq79gzqc",uiAttribs:{},portsIn:[{name:"Title",value:"Room: kitchen"}],objName:"Ops.Ui.Area"},{id:"gw6uyi3eh",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"y1w5uxtf5",objOut:"gw6uyi3eh"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"o2y46nzuc",uiAttribs:{},portsIn:[{name:"posX",value:3.16},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"lrg67l7u7",objOut:"o2y46nzuc"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"63fg5qda4",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:.7600000000000002},{name:"b",value:0},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"o2y46nzuc",objOut:"63fg5qda4"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"lrg67l7u7",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"fdkncha40",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Hall"}],objName:"Ops.Ui.Area"},{id:"fz1m2b09v",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"63fg5qda4",objOut:"fz1m2b09v"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"u0cv0uz0t",uiAttribs:{},portsIn:[{name:"posX",value:-1.32},{name:"posY",value:-.5},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"wmhlewqtk",objOut:"u0cv0uz0t"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"guaw59jbd",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Execute",portOut:"Next",objIn:"fz1m2b09v",objOut:"guaw59jbd"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"u330cmf78",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Execute",portOut:"Next",objIn:"7xl69x1le",objOut:"u330cmf78"},{portIn:"Execute",portOut:"Next",objIn:"tud3d5w0c",objOut:"u330cmf78"},{portIn:"Execute",portOut:"Next",objIn:"dxh6zvqo3",objOut:"u330cmf78"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"4nzzrfphl",uiAttribs:{},portsIn:[{name:"File",value:"assets/bedroom.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"28a98b0f-cdb1-4696-8380-276cece840df",objOut:"4nzzrfphl"}]},{name:"Width",value:1024},{name:"Height",value:1024},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"qm6lolzu4",uiAttribs:{},portsIn:[{name:"File",value:"assets/kitchen.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"y1w5uxtf5",objOut:"qm6lolzu4"}]},{name:"Width",value:1024},{name:"Height",value:1024},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"jvxjeb44h",uiAttribs:{},portsIn:[{name:"File",value:"assets/livingroom.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"kgxs7nbjz",objOut:"jvxjeb44h"}]},{name:"Width",value:1024},{name:"Height",value:1024},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"j1s2w3l3s",uiAttribs:{},portsIn:[{name:"File",value:"assets/hallway.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"63fg5qda4",objOut:"j1s2w3l3s"}]},{name:"Width",value:1024},{name:"Height",value:1024},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"jnramjq5g",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"6ala4hcvl",objOut:"jnramjq5g"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"64d2q4f5n",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.76},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"jnramjq5g",objOut:"64d2q4f5n"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"6ala4hcvl",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"yzy2arcwo",uiAttribs:{},portsIn:[{name:"Title",value:"House"}],objName:"Ops.Ui.Area"},{id:"ve619frat",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"2by6f0lv9",objOut:"ve619frat"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"j678u1ge0",uiAttribs:{},portsIn:[{name:"File",value:"assets/house.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"64d2q4f5n",objOut:"j678u1ge0"}]},{name:"Width",value:3136},{name:"Height",value:1504},{name:"Aspect Ratio",value:2.0851063829787235},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"jtaw7o6xc",uiAttribs:{},portsIn:[{name:"scale",value:2.85},{name:"x",value:1.07},{name:"y",value:.46},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"64d2q4f5n",objOut:"jtaw7o6xc"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"2by6f0lv9",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1.8},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"jtaw7o6xc",objOut:"2by6f0lv9"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"ugw188oxt",uiAttribs:{},portsIn:[{name:"posX",value:.52},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"44u89y58s",objOut:"ugw188oxt"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"byh21uvxo",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.76},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"ugw188oxt",objOut:"byh21uvxo"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"44u89y58s",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:.05},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"eqd7vmaen",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Room separator #1"}],objName:"Ops.Ui.Area"},{id:"b1rwvw0zs",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"byh21uvxo",objOut:"b1rwvw0zs"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"u059vcfhv",uiAttribs:{},portsIn:[{name:"File",value:"assets/pilar2.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"byh21uvxo",objOut:"u059vcfhv"}]},{name:"Width",value:15},{name:"Height",value:296},{name:"Aspect Ratio",value:.05067567567567568},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"fpf85zdu3",uiAttribs:{},portsIn:[{name:"posX",value:1.58},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"1e6d0bn0n",objOut:"fpf85zdu3"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"7brma7v2t",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.76},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"fpf85zdu3",objOut:"7brma7v2t"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"1e6d0bn0n",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:.05},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"b4f8edyw9",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Room separator #2"}],objName:"Ops.Ui.Area"},{id:"s81vi4b4n",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"7brma7v2t",objOut:"s81vi4b4n"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"9vt18s69b",uiAttribs:{},portsIn:[{name:"File",value:"assets/pilar2.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"7brma7v2t",objOut:"9vt18s69b"}]},{name:"Width",value:15},{name:"Height",value:296},{name:"Aspect Ratio",value:.05067567567567568},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"dxh6zvqo3",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Execute",portOut:"Next",objIn:"b1rwvw0zs",objOut:"dxh6zvqo3"},{portIn:"Execute",portOut:"Next",objIn:"s81vi4b4n",objOut:"dxh6zvqo3"},{portIn:"Execute",portOut:"Next",objIn:"mvyn9rzyx",objOut:"dxh6zvqo3"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"cwk5p8pr3",uiAttribs:{},portsIn:[{name:"posX",value:2.64},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"4olaqb1tk",objOut:"cwk5p8pr3"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"044mckrj1",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.76},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"cwk5p8pr3",objOut:"044mckrj1"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"4olaqb1tk",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:.05},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"sqju0nnck",uiAttribs:{},portsIn:[{name:"Title",value:"Room: Room separator #1"}],objName:"Ops.Ui.Area"},{id:"mvyn9rzyx",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"044mckrj1",objOut:"mvyn9rzyx"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"bysjjr1nw",uiAttribs:{},portsIn:[{name:"File",value:"assets/pilar2.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"044mckrj1",objOut:"bysjjr1nw"}]},{name:"Width",value:15},{name:"Height",value:296},{name:"Aspect Ratio",value:.05067567567567568},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"6pr1e8r00",uiAttribs:{},portsIn:[{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"lv36gh649",objOut:"6pr1e8r00"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"1bcifefjr",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:.7600000000000002},{name:"b",value:0},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"6pr1e8r00",objOut:"1bcifefjr"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"lv36gh649",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"mw59ikxtl",uiAttribs:{},portsIn:[{name:"Title",value:"Agent: Man"}],objName:"Ops.Ui.Area"},{id:"626nqpc75",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"1bcifefjr",objOut:"626nqpc75"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"byoyj1pxy",uiAttribs:{},portsIn:[{name:"File",value:"assets/oldman.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"1bcifefjr",objOut:"byoyj1pxy"}]},{name:"Width",value:32},{name:"Height",value:64},{name:"Aspect Ratio",value:.5},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"x213hij6c",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"9n1nua4ji",objOut:"x213hij6c"},{portIn:"render",portOut:"Next",objIn:"lfs16755b",objOut:"x213hij6c"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"0a5ug8mwt",uiAttribs:{},portsIn:[{name:"scale",value:.41},{name:"x",value:.59},{name:"y",value:1},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"Execute",portOut:"trigger",objIn:"626nqpc75",objOut:"0a5ug8mwt"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"9n1nua4ji",uiAttribs:{},portsIn:[{name:"posX",value:.39},{name:"posY",value:-.67},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"0a5ug8mwt",objOut:"9n1nua4ji"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"94r4yn2e2",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"282sc8l6q",objOut:"94r4yn2e2"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"8s0ou0cw2",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:.7600000000000002},{name:"b",value:0},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"94r4yn2e2",objOut:"8s0ou0cw2"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"282sc8l6q",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"aiyjtz34k",uiAttribs:{},portsIn:[{name:"Title",value:"Agent: Cat"}],objName:"Ops.Ui.Area"},{id:"yrbltz4xj",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"8s0ou0cw2",objOut:"yrbltz4xj"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"m5pp9laey",uiAttribs:{},portsIn:[{name:"File",value:"assets/cat.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"8s0ou0cw2",objOut:"m5pp9laey"}]},{name:"Width",value:374},{name:"Height",value:156},{name:"Aspect Ratio",value:2.3974358974358974},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"nkiowliuk",uiAttribs:{},portsIn:[{name:"scale",value:.15},{name:"x",value:1},{name:"y",value:1},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"Execute",portOut:"trigger",objIn:"yrbltz4xj",objOut:"nkiowliuk"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"lfs16755b",uiAttribs:{},portsIn:[{name:"posX",value:-.8},{name:"posY",value:-.82},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"nkiowliuk",objOut:"lfs16755b"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"6mfms449r",uiAttribs:{},portsIn:[{name:"Max Pixel Density (DPR)",value:2},{name:"FPS Limit",value:0},{name:"Reduce FPS unfocussed",value:0},{name:"Transparent",value:0},{name:"Active",value:1}],portsOut:[{name:"trigger",links:[{portIn:"wiikdxo89",portOut:"trigger",objIn:"4h3129rc0",objOut:"6mfms449r"},{portIn:"qf30fea4v",portOut:"trigger",objIn:"74pfvqzrz",objOut:"6mfms449r"}]},{name:"width",value:732.5},{name:"height",value:393.75},{name:"Pixel Density",value:1.25}],objName:"Ops.Gl.MainLoop_v2"},{id:"2ee0umywl",uiAttribs:{},portsIn:[{name:"file",value:"assets/67d85257127ffa4a78810322_Ubuntu-Regular.ttf",display:"file"},{name:"family",value:"Ubuntu-Regular"},{name:"Active",value:1}],portsOut:[{name:"Loaded",value:1}],objName:"Ops.Html.FontFile_v2"},{id:"4h3129rc0",uiAttribs:{},storage:{blueprintVer:2,subPatchVer:2},portsIn:[{name:"ip34w2ny0",title:"Index"},{name:"wiikdxo89",title:"exe"},{name:"s0ddunhhz",value:1,title:"Duration"},{name:"patchId",value:"bp2sub_4h3129rc0"}],portsOut:[{name:"4gu5lv66h",title:"Out Value",links:[{portIn:"number1",portOut:"4gu5lv66h",objIn:"fgpyvx0fy",objOut:"4h3129rc0"},{portIn:"number1",portOut:"4gu5lv66h",objIn:"yvfj7g8e0",objOut:"4h3129rc0"},{portIn:"t24fy9v2v",portOut:"4gu5lv66h",objIn:"jc7po754d",objOut:"4h3129rc0"}]},{name:"qutsn94pc",title:"Trigger 0",links:[{portIn:"5gqo44pfl",portOut:"qutsn94pc",objIn:"jc7po754d",objOut:"4h3129rc0"}]},{name:"8xpkgorjm",title:"Trigger 1",links:[{portIn:"Execute",portOut:"8xpkgorjm",objIn:"vpmi9p6sa",objOut:"4h3129rc0"}]},{name:"hvyzlh9o8",title:"Trigger 2",links:[{portIn:"Execute",portOut:"hvyzlh9o8",objIn:"cvg9mg02d",objOut:"4h3129rc0"}]}],objName:"Ops.Trigger.RouteTriggerAnimated"},{id:"vpmi9p6sa",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"exe",portOut:"Next",objIn:"ff736d50-6529-4d6e-8423-8d3da1bcaaff",objOut:"vpmi9p6sa"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"g0bskfstn",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"liz5it79d",objOut:"g0bskfstn"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"0odbz66a3",uiAttribs:{},portsIn:[{name:"File",value:"assets/67fd43816897956cec9b25a6_house_logo_1_128x128.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"liz5it79d",objOut:"0odbz66a3"}]},{name:"Width",value:128},{name:"Height",value:128},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"1m8tu5hzg",uiAttribs:{},portsIn:[{name:"posX",value:-1},{name:"posY",value:1},{name:"posZ",value:0},{name:"scale",value:2},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"6w7rcnjvm",objOut:"1m8tu5hzg"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"liz5it79d",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.766},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"1m8tu5hzg",objOut:"liz5it79d"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"6w7rcnjvm",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:0},{name:"pivot x",value:"left"},{name:"pivot y index",value:0},{name:"pivot y",value:"top"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"igwoy5sau",uiAttribs:{},portsIn:[{name:"Title",value:"Simulation Alternate rendering"}],objName:"Ops.Ui.Area"},{id:"cvg9mg02d",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Execute",portOut:"Next",objIn:"hd1nsr1ak",objOut:"cvg9mg02d"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"yarrj80pk",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:0},{name:"pivot x",value:"left"},{name:"pivot y index",value:0},{name:"pivot y",value:"top"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"3fuekbv1s",uiAttribs:{},portsIn:[{name:"posX",value:-1},{name:"posY",value:1},{name:"posZ",value:0},{name:"scale",value:2},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"yarrj80pk",objOut:"3fuekbv1s"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"uu4nquns2",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.766},{name:"b",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"3fuekbv1s",objOut:"uu4nquns2"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"xz1xujl9p",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"1qs35k8d5",objOut:"xz1xujl9p"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"1qs35k8d5",uiAttribs:{},portsIn:[{name:"num",value:20},{name:"random seed",value:1},{name:"round",value:0},{name:"size",value:12.37},{name:"scaleX",value:1},{name:"scaleY",value:1},{name:"scaleZ",value:1},{name:"Rotate X",value:1},{name:"Rotate Y",value:1},{name:"Rotate Z",value:1},{name:"Scroll X",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Exec",portOut:"trigger",objIn:"4925y8dre",objOut:"1qs35k8d5"}]},{name:"index",value:19},{name:"rnd",value:.607934670781893}],objName:"Ops.Gl.RandomCluster"},{id:"0tt2kbd86",uiAttribs:{},portsIn:[{name:"Speed",value:22},{name:"Play",value:1},{name:"Sync to timeline",value:0}],portsOut:[{name:"Time",links:[{portIn:"rotZ",portOut:"Time",objIn:"xz1xujl9p",objOut:"0tt2kbd86"},{portIn:"rotY",portOut:"Time",objIn:"xz1xujl9p",objOut:"0tt2kbd86"}]}],objName:"Ops.Anim.Timer_v2"},{id:"4925y8dre",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"uu4nquns2",objOut:"4925y8dre"}]}],objName:"Ops.Gl.Matrix.Billboard"},{id:"3n4k9ue7r",uiAttribs:{},portsIn:[{name:"File",value:"assets/67fd43816897956cec9b25a6_house_logo_1_128x128.png",display:"file"},{name:"Filter index",value:2},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"uu4nquns2",objOut:"3n4k9ue7r"}]},{name:"Width",value:128},{name:"Height",value:128},{name:"Aspect Ratio",value:1},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"fgpyvx0fy",uiAttribs:{},portsIn:[{name:"number2",value:1}],portsOut:[{name:"result",links:[{portIn:"a",portOut:"result",objIn:"64d2q4f5n",objOut:"fgpyvx0fy"},{portIn:"a",portOut:"result",objIn:"28a98b0f-cdb1-4696-8380-276cece840df",objOut:"fgpyvx0fy"},{portIn:"a",portOut:"result",objIn:"kgxs7nbjz",objOut:"fgpyvx0fy"},{portIn:"a",portOut:"result",objIn:"y1w5uxtf5",objOut:"fgpyvx0fy"},{portIn:"a",portOut:"result",objIn:"63fg5qda4",objOut:"fgpyvx0fy"},{portIn:"number1",portOut:"result",objIn:"fhss7grj7",objOut:"fgpyvx0fy"},{portIn:"number1",portOut:"result",objIn:"5ixjihhws",objOut:"fgpyvx0fy"}]}],objName:"Ops.Math.Multiply"},{id:"yvfj7g8e0",uiAttribs:{},portsIn:[{name:"number2",value:1}],portsOut:[{name:"result",links:[{portIn:"a",portOut:"result",objIn:"liz5it79d",objOut:"yvfj7g8e0"},{portIn:"a",portOut:"result",objIn:"uu4nquns2",objOut:"yvfj7g8e0"}]}],objName:"Ops.Math.Multiply"},{id:"74pfvqzrz",uiAttribs:{},storage:{blueprintVer:2,subPatchVer:2},portsIn:[{name:"qf30fea4v",title:"Execute"},{name:"patchId",value:"bp2sub_74pfvqzrz"}],portsOut:[{name:"mq85p02da",title:"result",links:[{portIn:"ip34w2ny0",portOut:"mq85p02da",objIn:"4h3129rc0",objOut:"74pfvqzrz"}]}],objName:"Ops.User.thrane.Emeritus.InputManagement"},{id:"jc7po754d",uiAttribs:{},storage:{blueprintVer:2,subPatchVer:2},portsIn:[{name:"t24fy9v2v",title:"number1"},{name:"5gqo44pfl",title:"Execute"},{name:"patchId",value:"bp2sub_jc7po754d"}],objName:"Ops.User.thrane.Emeritus.IntroScreen"},{id:"fhss7grj7",uiAttribs:{},portsIn:[{name:"number2",value:1}],portsOut:[{name:"result",links:[{portIn:"a",portOut:"result",objIn:"byh21uvxo",objOut:"fhss7grj7"},{portIn:"a",portOut:"result",objIn:"7brma7v2t",objOut:"fhss7grj7"},{portIn:"a",portOut:"result",objIn:"044mckrj1",objOut:"fhss7grj7"}]}],objName:"Ops.Math.Multiply"},{id:"5ixjihhws",uiAttribs:{},portsIn:[{name:"number2",value:1}],portsOut:[{name:"result",links:[{portIn:"a",portOut:"result",objIn:"1bcifefjr",objOut:"5ixjihhws"},{portIn:"a",portOut:"result",objIn:"8s0ou0cw2",objOut:"5ixjihhws"}]}],objName:"Ops.Math.Multiply"},{id:"pxb28xclw",uiAttribs:{},portsIn:[{name:"interval",value:1e3},{name:"Active",value:1}],portsOut:[{name:"trigger",links:[{portIn:"Trigger In",portOut:"trigger",objIn:"x3kk46j35",objOut:"pxb28xclw"}]}],objName:"Ops.Trigger.Interval"},{id:"frjwwy9zp",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"wzenadbfo",objOut:"frjwwy9zp"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"hbin7nqzi",uiAttribs:{},portsIn:[{name:"Width",value:1},{name:"Height",value:1},{name:"Thickness",value:.1},{name:"pivot x index",value:0},{name:"pivot x",value:"center"},{name:"pivot y index",value:0},{name:"pivot y",value:"center"},{name:"Draw Top",value:1},{name:"Draw Bottom",value:1},{name:"Draw Left",value:1},{name:"Draw Right",value:1},{name:"Active",value:1}],objName:"Ops.Gl.Meshes.RectangleFrame_v2"},{id:"wzenadbfo",uiAttribs:{},portsIn:[{name:"posZ",value:0},{name:"scale",value:.3},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"8geyiau99",objOut:"wzenadbfo"},{portIn:"Render",portOut:"trigger",objIn:"hbin7nqzi",objOut:"wzenadbfo"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"8geyiau99",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:1},{name:"Width",value:2.1819196428571432},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"jjsis3bv1",uiAttribs:{},portsIn:[{name:"Title",value:"Core simulation"}],objName:"Ops.Ui.Area"},{id:"dizwnzw7z",uiAttribs:{},portsIn:[{name:"False",value:"false"},{name:"True",value:"true"}],portsOut:[{name:"String",links:[{portIn:"string2",portOut:"String",objIn:"9jntali19",objOut:"dizwnzw7z"}]}],objName:"Ops.Boolean.BoolToString"},{id:"fkgydsh6o",uiAttribs:{},portsIn:[{name:"string 5",value:""},{name:"string 6",value:""},{name:"string 7",value:""},{name:"add spaces",value:0},{name:"new lines",value:1}],portsOut:[{name:"concat string",links:[{portIn:"Text",portOut:"concat string",objIn:"7hlpdwdzk",objOut:"fkgydsh6o"}]}],objName:"Ops.String.ConcatMulti_v2"},{id:"p1kqy3fcp",uiAttribs:{},portsIn:[{name:"posX",value:-2},{name:"posY",value:-1},{name:"posZ",value:0},{name:"scale",value:.75},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"frjwwy9zp",objOut:"p1kqy3fcp"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"426ei75vw",uiAttribs:{},portsIn:[{name:"Title",value:"Agent rendering"}],objName:"Ops.Ui.Area"},{id:"zdwnc1tuq",uiAttribs:{},portsIn:[{name:"Decimal Places",value:2}],portsOut:[{name:"Result",links:[{portIn:"string2",portOut:"Result",objIn:"vogbflh60",objOut:"zdwnc1tuq"}]}],objName:"Ops.String.NumberToString_v2"},{id:"yk1sixa51",uiAttribs:{},portsIn:[{name:"Decimal Places",value:2}],portsOut:[{name:"Result",links:[{portIn:"string2",portOut:"Result",objIn:"4euuh53tk",objOut:"yk1sixa51"}]}],objName:"Ops.String.NumberToString_v2"},{id:"s0d72ufcc",uiAttribs:{},portsIn:[{name:"Decimal Places",value:2}],portsOut:[{name:"Result",links:[{portIn:"string2",portOut:"Result",objIn:"0p0ucbavp",objOut:"s0d72ufcc"}]}],objName:"Ops.String.NumberToString_v2"},{id:"3tnqkeuna",uiAttribs:{},portsIn:[{name:"string 7",value:""},{name:"add spaces",value:0},{name:"new lines",value:0}],portsOut:[{name:"concat string",links:[{portIn:"Text",portOut:"concat string",objIn:"n9f4r3bgb",objOut:"3tnqkeuna"}]}],objName:"Ops.String.ConcatMulti_v2"},{id:"xl8zpx9ak",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"8eogd2t1w",objOut:"xl8zpx9ak"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"8eogd2t1w",uiAttribs:{},portsIn:[{name:"posX",value:-.4},{name:"posY",value:.1},{name:"posZ",value:0},{name:"scale",value:.15},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"7hlpdwdzk",objOut:"8eogd2t1w"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"7hlpdwdzk",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:5},{name:"Width",value:11.386021205357148},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"5txe36f7t",uiAttribs:{},portsIn:[{name:"posX",value:-1.9},{name:"posY",value:.7},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"qyxrszhxk",objOut:"5txe36f7t"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"hdbq318h0",uiAttribs:{},portsIn:[{name:"Title",value:"Agent MOV subsystem rendering"}],objName:"Ops.Ui.Area"},{id:"hd1nsr1ak",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"p1kqy3fcp",objOut:"hd1nsr1ak"},{portIn:"Execute",portOut:"Next",objIn:"91v8iatds",objOut:"hd1nsr1ak"},{portIn:"render",portOut:"Next",objIn:"5txe36f7t",objOut:"hd1nsr1ak"},{portIn:"render",portOut:"Next",objIn:"xqpgs6vlt",objOut:"hd1nsr1ak"},{portIn:"Execute",portOut:"Next",objIn:"bkifu9puu",objOut:"hd1nsr1ak"},{portIn:"render",portOut:"Next",objIn:"svdzvy8jt",objOut:"hd1nsr1ak"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"gtyoiy8qb",uiAttribs:{},portsIn:[{name:"value",value:"\n"},{name:"Syntax index",value:0},{name:"Syntax",value:"text"}],portsOut:[{name:"Result",links:[{portIn:"string 1",portOut:"Result",objIn:"3tnqkeuna",objOut:"gtyoiy8qb"},{portIn:"string 3",portOut:"Result",objIn:"3tnqkeuna",objOut:"gtyoiy8qb"},{portIn:"string 5",portOut:"Result",objIn:"3tnqkeuna",objOut:"gtyoiy8qb"}]}],objName:"Ops.String.StringEditor"},{id:"vogbflh60",uiAttribs:{},portsIn:[{name:"string1",value:"Hunger: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 2",portOut:"result",objIn:"3tnqkeuna",objOut:"vogbflh60"}]}],objName:"Ops.String.Concat_v2"},{id:"4euuh53tk",uiAttribs:{},portsIn:[{name:"string1",value:"Fatigue: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 4",portOut:"result",objIn:"3tnqkeuna",objOut:"4euuh53tk"}]}],objName:"Ops.String.Concat_v2"},{id:"0p0ucbavp",uiAttribs:{},portsIn:[{name:"string1",value:"Boredom: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 6",portOut:"result",objIn:"3tnqkeuna",objOut:"0p0ucbavp"}]}],objName:"Ops.String.Concat_v2"},{id:"h0b2as4yq",uiAttribs:{},portsIn:[{name:"value",value:"MOV"}],portsOut:[{name:"String",links:[{portIn:"string 0",portOut:"String",objIn:"fkgydsh6o",objOut:"h0b2as4yq"}]}],objName:"Ops.String.String_v2"},{id:"nenbg3ce5",uiAttribs:{},portsIn:[{name:"value",value:"BEL"}],portsOut:[{name:"String",links:[{portIn:"string 0",portOut:"String",objIn:"3tnqkeuna",objOut:"nenbg3ce5"}]}],objName:"Ops.String.String_v2"},{id:"khm5cudiw",uiAttribs:{},portsIn:[{name:"Title",value:"Agent BEL subsystem rendering"}],objName:"Ops.Ui.Area"},{id:"9qts6p8no",uiAttribs:{},portsIn:[{name:"string 6",value:""},{name:"string 7",value:""},{name:"add spaces",value:0},{name:"new lines",value:0}],portsOut:[{name:"concat string",links:[{portIn:"Text",portOut:"concat string",objIn:"wtove4i3c",objOut:"9qts6p8no"}]}],objName:"Ops.String.ConcatMulti_v2"},{id:"9t4tggq8v",uiAttribs:{},portsIn:[{name:"value",value:"\n"},{name:"Syntax index",value:0},{name:"Syntax",value:"text"}],portsOut:[{name:"Result",links:[{portIn:"string 1",portOut:"Result",objIn:"9qts6p8no",objOut:"9t4tggq8v"},{portIn:"string 3",portOut:"Result",objIn:"9qts6p8no",objOut:"9t4tggq8v"},{portIn:"string 5",portOut:"Result",objIn:"9qts6p8no",objOut:"9t4tggq8v"}]}],objName:"Ops.String.StringEditor"},{id:"5a6gin63x",uiAttribs:{},portsIn:[{name:"string1",value:"Best: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 2",portOut:"result",objIn:"9qts6p8no",objOut:"5a6gin63x"}]}],objName:"Ops.String.Concat_v2"},{id:"6gcz7dtug",uiAttribs:{},portsIn:[{name:"value",value:"DES"}],portsOut:[{name:"String",links:[{portIn:"string 0",portOut:"String",objIn:"9qts6p8no",objOut:"6gcz7dtug"}]}],objName:"Ops.String.String_v2"},{id:"91v8iatds",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"1fpj6v8v1",objOut:"91v8iatds"},{portIn:"render",portOut:"Next",objIn:"pwvsqc4q8",objOut:"91v8iatds"},{portIn:"render",portOut:"Next",objIn:"dpdcznwwo",objOut:"91v8iatds"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"l57pajz1v",uiAttribs:{},portsIn:[{name:"r",value:.44629405052690685},{name:"g",value:.43492215022172714},{name:"b",value:.5315833028157553},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"bgv7uwq7m",objOut:"l57pajz1v"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"bgv7uwq7m",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.8},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"ytwdcy2yt",objOut:"bgv7uwq7m"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"qyxrszhxk",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"render",portOut:"trigger 0",objIn:"l57pajz1v",objOut:"qyxrszhxk"}]},{name:"trigger 1",links:[{portIn:"render",portOut:"trigger 1",objIn:"xl8zpx9ak",objOut:"qyxrszhxk"}]}],objName:"Ops.Gl.LayerSequence"},{id:"ytwdcy2yt",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"q2fjmb8k0",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"a0x39te9q",objOut:"q2fjmb8k0"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"a0x39te9q",uiAttribs:{},portsIn:[{name:"posX",value:-.4},{name:"posY",value:.1},{name:"posZ",value:0},{name:"scale",value:.15},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"n9f4r3bgb",objOut:"a0x39te9q"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"n9f4r3bgb",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:4},{name:"Width",value:4.106794084821429},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"xqpgs6vlt",uiAttribs:{},portsIn:[{name:"posX",value:-1},{name:"posY",value:.7},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"7nue93xhp",objOut:"xqpgs6vlt"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"buankwdez",uiAttribs:{},portsIn:[{name:"r",value:.44629405052690685},{name:"g",value:.43492215022172714},{name:"b",value:.5315833028157553},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"c34ofok1c",objOut:"buankwdez"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"c34ofok1c",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.8},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"jr7ckovx6",objOut:"c34ofok1c"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"7nue93xhp",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"render",portOut:"trigger 0",objIn:"buankwdez",objOut:"7nue93xhp"}]},{name:"trigger 1",links:[{portIn:"render",portOut:"trigger 1",objIn:"q2fjmb8k0",objOut:"7nue93xhp"}]}],objName:"Ops.Gl.LayerSequence"},{id:"jr7ckovx6",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"ey0pfm2ne",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"w6hf5reqx",objOut:"ey0pfm2ne"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"w6hf5reqx",uiAttribs:{},portsIn:[{name:"posX",value:-.4},{name:"posY",value:.1},{name:"posZ",value:0},{name:"scale",value:.15},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"wtove4i3c",objOut:"w6hf5reqx"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"wtove4i3c",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:4},{name:"Width",value:16.938476562500007},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"1fpj6v8v1",uiAttribs:{},portsIn:[{name:"posX",value:-.1},{name:"posY",value:.7},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"bkwfub5xg",objOut:"1fpj6v8v1"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"dyoe585wr",uiAttribs:{},portsIn:[{name:"r",value:.44629405052690685},{name:"g",value:.43492215022172714},{name:"b",value:.5315833028157553},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"1m9ebsqan",objOut:"dyoe585wr"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"1m9ebsqan",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.8},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"zn6tlppbo",objOut:"1m9ebsqan"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"bkwfub5xg",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"render",portOut:"trigger 0",objIn:"dyoe585wr",objOut:"bkwfub5xg"}]},{name:"trigger 1",links:[{portIn:"render",portOut:"trigger 1",objIn:"ey0pfm2ne",objOut:"bkwfub5xg"}]}],objName:"Ops.Gl.LayerSequence"},{id:"zn6tlppbo",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"ly2oe7ozj",uiAttribs:{},portsIn:[{name:"Title",value:"Agent DES subsystem rendering"}],objName:"Ops.Ui.Area"},{id:"js8ymtepk",uiAttribs:{},portsIn:[{name:"string 4",value:""},{name:"string 6",value:""},{name:"string 7",value:""},{name:"add spaces",value:0},{name:"new lines",value:0}],portsOut:[{name:"concat string",links:[{portIn:"Text",portOut:"concat string",objIn:"xcqow5qys",objOut:"js8ymtepk"}]}],objName:"Ops.String.ConcatMulti_v2"},{id:"14d85c8fv",uiAttribs:{},portsIn:[{name:"value",value:"\n"},{name:"Syntax index",value:0},{name:"Syntax",value:"text"}],portsOut:[{name:"Result",links:[{portIn:"string 1",portOut:"Result",objIn:"js8ymtepk",objOut:"14d85c8fv"},{portIn:"string 3",portOut:"Result",objIn:"js8ymtepk",objOut:"14d85c8fv"},{portIn:"string 5",portOut:"Result",objIn:"js8ymtepk",objOut:"14d85c8fv"}]}],objName:"Ops.String.StringEditor"},{id:"f5ctc63np",uiAttribs:{},portsIn:[{name:"string1",value:"Current: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 2",portOut:"result",objIn:"js8ymtepk",objOut:"f5ctc63np"}]}],objName:"Ops.String.Concat_v2"},{id:"q4ht44j11",uiAttribs:{},portsIn:[{name:"value",value:"INT"}],portsOut:[{name:"String",links:[{portIn:"string 0",portOut:"String",objIn:"js8ymtepk",objOut:"q4ht44j11"}]}],objName:"Ops.String.String_v2"},{id:"lkkrb8q99",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"uj85ii5ze",objOut:"lkkrb8q99"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"uj85ii5ze",uiAttribs:{},portsIn:[{name:"posX",value:-.4},{name:"posY",value:.1},{name:"posZ",value:0},{name:"scale",value:.15},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"xcqow5qys",objOut:"uj85ii5ze"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"xcqow5qys",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:4},{name:"Width",value:3.5107421875},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"pwvsqc4q8",uiAttribs:{},portsIn:[{name:"posX",value:.8},{name:"posY",value:.7},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"tl69wgeze",objOut:"pwvsqc4q8"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"3jmqc3hi2",uiAttribs:{},portsIn:[{name:"r",value:.44629405052690685},{name:"g",value:.43492215022172714},{name:"b",value:.5315833028157553},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"atbhb881k",objOut:"3jmqc3hi2"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"atbhb881k",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.8},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"0gwl182es",objOut:"atbhb881k"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"tl69wgeze",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"render",portOut:"trigger 0",objIn:"3jmqc3hi2",objOut:"tl69wgeze"}]},{name:"trigger 1",links:[{portIn:"render",portOut:"trigger 1",objIn:"lkkrb8q99",objOut:"tl69wgeze"}]}],objName:"Ops.Gl.LayerSequence"},{id:"0gwl182es",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"ugxrxl7fq",uiAttribs:{},portsIn:[{name:"Title",value:"Agent INT sybsystem rendering"}],objName:"Ops.Ui.Area"},{id:"x3kk46j35",uiAttribs:{},portsOut:[{name:"Trigger out",links:[{portIn:"Trigger",portOut:"Trigger out",objIn:"66wv0eev2",objOut:"x3kk46j35"}]},{name:"Scene",links:[{portIn:"Value",portOut:"Scene",objIn:"7ivi1pek4",objOut:"x3kk46j35"}]},{name:"OldMan Agent",links:[{portIn:"Value",portOut:"OldMan Agent",objIn:"8hh3zjw5e",objOut:"x3kk46j35"}]}],objName:"Ops.User.thrane.Emeritus.RunSimulation"},{id:"nzpygn3cg",uiAttribs:{},portsIn:[{name:"string1",value:"Active: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 4",portOut:"result",objIn:"9qts6p8no",objOut:"nzpygn3cg"}]}],objName:"Ops.String.Concat_v2"},{id:"xhbhk3p36",uiAttribs:{},portsOut:[{name:"Best Desire",links:[{portIn:"string2",portOut:"Best Desire",objIn:"5a6gin63x",objOut:"xhbhk3p36"}]},{name:"Active Desire",links:[{portIn:"string2",portOut:"Active Desire",objIn:"nzpygn3cg",objOut:"xhbhk3p36"}]}],objName:"Ops.User.thrane.Emeritus.Agent.DesireProxy"},{id:"9jntali19",uiAttribs:{},portsIn:[{name:"string1",value:"Moving: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 1",portOut:"result",objIn:"fkgydsh6o",objOut:"9jntali19"}]}],objName:"Ops.String.Concat_v2"},{id:"wsbo7784n",uiAttribs:{},portsIn:[{name:"Decimal Places",value:2}],portsOut:[{name:"Result",links:[{portIn:"string2",portOut:"Result",objIn:"t5gap81ax",objOut:"wsbo7784n"}]}],objName:"Ops.String.NumberToString_v2"},{id:"t5gap81ax",uiAttribs:{},portsIn:[{name:"string1",value:"Speed: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 3",portOut:"result",objIn:"fkgydsh6o",objOut:"t5gap81ax"}]}],objName:"Ops.String.Concat_v2"},{id:"xetuv63sk",uiAttribs:{},portsIn:[{name:"string1",value:"Position: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 2",portOut:"result",objIn:"fkgydsh6o",objOut:"xetuv63sk"}]}],objName:"Ops.String.Concat_v2"},{id:"zp1oz9dkk",uiAttribs:{},portsIn:[{name:"string1",value:"Destination: "},{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"string 4",portOut:"result",objIn:"fkgydsh6o",objOut:"zp1oz9dkk"}]}],objName:"Ops.String.Concat_v2"},{id:"gb46vbjwj",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"ig9ugli94",objOut:"gb46vbjwj"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"ig9ugli94",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.2},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"n5wkulkdo",objOut:"ig9ugli94"},{portIn:"render",portOut:"trigger",objIn:"qpbow3gz4",objOut:"ig9ugli94"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"n5wkulkdo",uiAttribs:{},portsIn:[{name:"Text",value:"(0,0)"},{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:1},{name:"Width",value:1.3685825892857144},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"svdzvy8jt",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"gb46vbjwj",objOut:"svdzvy8jt"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"fbs7k7z5y",uiAttribs:{},portsIn:[{name:"Title",value:"(0,0,) rendering"}],objName:"Ops.Ui.Area"},{id:"66wv0eev2",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],objName:"Ops.Trigger.TriggerSend"},{id:"b48u2xkpt",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"zxv4dxbwu",objOut:"b48u2xkpt"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"o4wdt1sz3",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"19jbnyhwc",objOut:"o4wdt1sz3"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"ykmsewi62",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"9b5daulap",objOut:"ykmsewi62"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"m4mgn83by",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"xhbhk3p36",objOut:"m4mgn83by"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"3xa6fwpfj",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"iz4jrpibx",objOut:"3xa6fwpfj"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"8hh3zjw5e",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],objName:"Ops.Vars.VarSetObject_v2"},{id:"uz2pnjwno",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"19jbnyhwc",objOut:"uz2pnjwno"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"nzlfkrps7",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"xhbhk3p36",objOut:"nzlfkrps7"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"mqvzp0u0a",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"zxv4dxbwu",objOut:"mqvzp0u0a"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"9b5daulap",uiAttribs:{},portsOut:[{name:"Hunger",links:[{portIn:"Value",portOut:"Hunger",objIn:"nr8el47fk",objOut:"9b5daulap"}]},{name:"Fatigue",links:[{portIn:"Value",portOut:"Fatigue",objIn:"6ewnxxx2i",objOut:"9b5daulap"}]},{name:"Boredom",links:[{portIn:"Number",portOut:"Boredom",objIn:"s0d72ufcc",objOut:"9b5daulap"}]}],objName:"Ops.User.thrane.Emeritus.Agent.BeliefsProxy"},{id:"3p0qfwpiw",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"9b5daulap",objOut:"3p0qfwpiw"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"17aitrqjr",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"iz4jrpibx",objOut:"17aitrqjr"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"iz4jrpibx",uiAttribs:{},portsOut:[{name:"Current Intention",links:[{portIn:"string2",portOut:"Current Intention",objIn:"f5ctc63np",objOut:"iz4jrpibx"}]}],objName:"Ops.User.thrane.Emeritus.Agent.IntentionProxy"},{id:"dndodbaae",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"i8havcm38",objOut:"dndodbaae"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"f151h278k",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_agent_object"}],portsOut:[{name:"Value",links:[{portIn:"Agent In",portOut:"Value",objIn:"i8havcm38",objOut:"f151h278k"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"nzn5flj35",uiAttribs:{},portsIn:[{name:"Title",value:"Simulation (local for agent rendering)"}],objName:"Ops.Ui.Area"},{id:"7koxsi0pw",uiAttribs:{},portsIn:[{name:"Title",value:"Simulation (local for debug)"}],objName:"Ops.Ui.Area"},{id:"o2ft0yq3d",uiAttribs:{},portsIn:[{name:"Array 3",value:0},{name:"Array 4",value:0},{name:"Array 5",value:0},{name:"Array 6",value:0},{name:"Array 7",value:0}],portsOut:[{name:"Result",links:[{portIn:"Points",portOut:"Result",objIn:"yayh8jrx4",objOut:"o2ft0yq3d"}]}],objName:"Ops.Array.ArrayPack"},{id:"jyy104bux",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"Array 1",portOut:"Result",objIn:"o2ft0yq3d",objOut:"jyy104bux"}]},{name:"Array length",value:512}],objName:"Ops.Array.ArrayBuffer"},{id:"vcbmhxuks",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 2",portOut:"Array",objIn:"o2ft0yq3d",objOut:"vcbmhxuks"}]},{name:"Array length out",value:512}],objName:"Ops.Array.Array_v3"},{id:"3qmu99bv8",uiAttribs:{},portsIn:[{name:"Mode select index",value:2},{name:"Mode select",value:"0-1"},{name:"Default Value",value:0},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 0",portOut:"Array",objIn:"o2ft0yq3d",objOut:"3qmu99bv8"}]},{name:"Array length out",value:512}],objName:"Ops.Array.Array_v3"},{id:"57l4rziy2",uiAttribs:{},portsIn:[{name:"Integer",value:512}],portsOut:[{name:"Number out",links:[{portIn:"Array length",portOut:"Number out",objIn:"3qmu99bv8",objOut:"57l4rziy2"},{portIn:"Max Length",portOut:"Number out",objIn:"jyy104bux",objOut:"57l4rziy2"},{portIn:"Array length",portOut:"Number out",objIn:"vcbmhxuks",objOut:"57l4rziy2"},{portIn:"Array length",portOut:"Number out",objIn:"mftcrunx6",objOut:"57l4rziy2"},{portIn:"Max Length",portOut:"Number out",objIn:"bbgpkbrzs",objOut:"57l4rziy2"},{portIn:"Array length",portOut:"Number out",objIn:"3owaoxir1",objOut:"57l4rziy2"}]}],objName:"Ops.Number.Integer"},{id:"i23rtrc9i",uiAttribs:{},portsIn:[{name:"Integer",value:0}],portsOut:[{name:"Number out",links:[{portIn:"Default Value",portOut:"Number out",objIn:"vcbmhxuks",objOut:"i23rtrc9i"}]}],objName:"Ops.Number.Integer"},{id:"yayh8jrx4",uiAttribs:{},portsIn:[{name:"Num Points",value:0},{name:"Line Strip",value:1},{name:"TexCoords index",value:0},{name:"TexCoords",value:"0"},{name:"TexCoords Array",value:0},{name:"Vertex Colors",value:0}],objName:"Ops.Gl.Meshes.SimpleSpline_v2"},{id:"kq0liwory",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:.9953124998137355},{name:"b",value:.9953124998137355},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"yayh8jrx4",objOut:"kq0liwory"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"4icgyg77q",uiAttribs:{},portsIn:[{name:"posX",value:-1.36},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"x7jbf9xh0",objOut:"4icgyg77q"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"x7jbf9xh0",uiAttribs:{},portsIn:[{name:"scale",value:.73},{name:"x",value:1},{name:"y",value:.01},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"kq0liwory",objOut:"x7jbf9xh0"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"bkifu9puu",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Execute",portOut:"Next",objIn:"9a4kh0vo1",objOut:"bkifu9puu"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"9a4kh0vo1",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"4icgyg77q",objOut:"9a4kh0vo1"},{portIn:"exec",portOut:"Next",objIn:"jyy104bux",objOut:"9a4kh0vo1"},{portIn:"exec",portOut:"Next",objIn:"bbgpkbrzs",objOut:"9a4kh0vo1"},{portIn:"render",portOut:"Next",objIn:"75ex1n3ks",objOut:"9a4kh0vo1"}]}],objName:"Ops.Trigger.TriggerExtender"},{id:"nr8el47fk",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_beliefs_hunger"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"ldqznutxq",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_beliefs_hunger"}],portsOut:[{name:"Value",links:[{portIn:"Value",portOut:"Value",objIn:"jyy104bux",objOut:"ldqznutxq"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"z6wg2hi3a",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_beliefs_hunger"}],portsOut:[{name:"Value",links:[{portIn:"Number",portOut:"Value",objIn:"zdwnc1tuq",objOut:"z6wg2hi3a"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"6ewnxxx2i",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_belief_fatigue"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"aume1n41t",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_belief_fatigue"}],portsOut:[{name:"Value",links:[{portIn:"Number",portOut:"Value",objIn:"yk1sixa51",objOut:"aume1n41t"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"5d9hn05id",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_belief_fatigue"}],portsOut:[{name:"Value",links:[{portIn:"Value",portOut:"Value",objIn:"bbgpkbrzs",objOut:"5d9hn05id"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"dkgibicx4",uiAttribs:{},portsIn:[{name:"Array 3",value:0},{name:"Array 4",value:0},{name:"Array 5",value:0},{name:"Array 6",value:0},{name:"Array 7",value:0}],portsOut:[{name:"Result",links:[{portIn:"Points",portOut:"Result",objIn:"ingqfp2y0",objOut:"dkgibicx4"}]}],objName:"Ops.Array.ArrayPack"},{id:"bbgpkbrzs",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"Array 1",portOut:"Result",objIn:"dkgibicx4",objOut:"bbgpkbrzs"}]},{name:"Array length",value:512}],objName:"Ops.Array.ArrayBuffer"},{id:"3owaoxir1",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 2",portOut:"Array",objIn:"dkgibicx4",objOut:"3owaoxir1"}]},{name:"Array length out",value:512}],objName:"Ops.Array.Array_v3"},{id:"mftcrunx6",uiAttribs:{},portsIn:[{name:"Mode select index",value:2},{name:"Mode select",value:"0-1"},{name:"Default Value",value:0},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 0",portOut:"Array",objIn:"dkgibicx4",objOut:"mftcrunx6"}]},{name:"Array length out",value:512}],objName:"Ops.Array.Array_v3"},{id:"mkvuyhd1v",uiAttribs:{},portsIn:[{name:"Integer",value:0}],portsOut:[{name:"Number out",links:[{portIn:"Default Value",portOut:"Number out",objIn:"3owaoxir1",objOut:"mkvuyhd1v"}]}],objName:"Ops.Number.Integer"},{id:"ingqfp2y0",uiAttribs:{},portsIn:[{name:"Num Points",value:0},{name:"Line Strip",value:0},{name:"TexCoords index",value:0},{name:"TexCoords",value:"0"},{name:"TexCoords Array",value:0},{name:"Vertex Colors",value:0}],objName:"Ops.Gl.Meshes.SimpleSpline_v2"},{id:"c6nha2shi",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:.9953124998137355},{name:"b",value:.9953124998137355},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"ingqfp2y0",objOut:"c6nha2shi"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"75ex1n3ks",uiAttribs:{},portsIn:[{name:"posX",value:-1.36},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"iefqa6w0c",objOut:"75ex1n3ks"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"iefqa6w0c",uiAttribs:{},portsIn:[{name:"scale",value:.73},{name:"x",value:1},{name:"y",value:.01},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"c6nha2shi",objOut:"iefqa6w0c"}]}],objName:"Ops.Gl.Matrix.Scale"},{id:"7ivi1pek4",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_scene_object"}],objName:"Ops.Vars.VarSetObject_v2"},{id:"5spl3divg",uiAttribs:{},portsOut:[{name:"Room Array",links:[{portIn:"array",portOut:"Room Array",objIn:"4gcgkpweb",objOut:"5spl3divg"}]}],objName:"Ops.User.thrane.Emeritus.SceneProxy"},{id:"ynqo5m1yh",uiAttribs:{},portsIn:[{name:"Variable",value:"sim_scene_object"}],portsOut:[{name:"Value",links:[{portIn:"Scene In",portOut:"Value",objIn:"5spl3divg",objOut:"ynqo5m1yh"}]}],objName:"Ops.Vars.VarGetObject_v2"},{id:"yce08oae4",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"sim_trigger_out"}],portsOut:[{name:"Triggered",links:[{portIn:"Trigger In",portOut:"Triggered",objIn:"5spl3divg",objOut:"yce08oae4"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"dpdcznwwo",uiAttribs:{},portsIn:[{name:"posX",value:-2},{name:"posY",value:-1},{name:"posZ",value:0},{name:"scale",value:.75},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"4gcgkpweb",objOut:"dpdcznwwo"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"4gcgkpweb",uiAttribs:{},portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"u8qx1qolf",objOut:"4gcgkpweb"},{portIn:"exe",portOut:"trigger",objIn:"577v9st05",objOut:"4gcgkpweb"}]},{name:"index",value:4},{name:"value",links:[{portIn:"data",portOut:"value",objIn:"rbbcjuba3",objOut:"4gcgkpweb"},{portIn:"Object",portOut:"value",objIn:"wovisuarb",objOut:"4gcgkpweb"},{portIn:"Object",portOut:"value",objIn:"1jr9skhoh",objOut:"4gcgkpweb"},{portIn:"data",portOut:"value",objIn:"s04uc1aby",objOut:"4gcgkpweb"}]}],objName:"Ops.Array.ArrayIteratorObjects"},{id:"u8qx1qolf",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"pu4u28kwz",objOut:"u8qx1qolf"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"pu4u28kwz",uiAttribs:{},portsIn:[{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"2we2m73wk",objOut:"pu4u28kwz"},{portIn:"render",portOut:"trigger",objIn:"a7htqkajm",objOut:"pu4u28kwz"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"rbbcjuba3",uiAttribs:{},portsIn:[{name:"Key",value:"name"}],portsOut:[{name:"Result",links:[{portIn:"Text",portOut:"Result",objIn:"zzzj5qirq",objOut:"rbbcjuba3"}]}],objName:"Ops.Json.ObjectGetString"},{id:"2we2m73wk",uiAttribs:{},portsIn:[{name:"Thickness",value:.01},{name:"pivot x index",value:1},{name:"pivot x",value:"left"},{name:"pivot y index",value:2},{name:"pivot y",value:"bottom"},{name:"Draw Top",value:1},{name:"Draw Bottom",value:1},{name:"Draw Left",value:1},{name:"Draw Right",value:1},{name:"Active",value:1}],objName:"Ops.Gl.Meshes.RectangleFrame_v2"},{id:"zzzj5qirq",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:1},{name:"Width",value:2.10205078125},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"wovisuarb",uiAttribs:{},portsIn:[{name:"Key",value:"position"}],portsOut:[{name:"Result",links:[{portIn:"Data",portOut:"Result",objIn:"ubauvfrwf",objOut:"wovisuarb"},{portIn:"Data",portOut:"Result",objIn:"2nenzm9m2",objOut:"wovisuarb"}]}],objName:"Ops.Json.ObjectGetObject_v2"},{id:"ubauvfrwf",uiAttribs:{},portsIn:[{name:"Key",value:"x"}],portsOut:[{name:"Result",links:[{portIn:"posX",portOut:"Result",objIn:"pu4u28kwz",objOut:"ubauvfrwf"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"2nenzm9m2",uiAttribs:{},portsIn:[{name:"Key",value:"y"}],portsOut:[{name:"Result",links:[{portIn:"posY",portOut:"Result",objIn:"pu4u28kwz",objOut:"2nenzm9m2"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"nflcfh8je",uiAttribs:{},portsIn:[{name:"Title",value:"Scene rooms rendering"}],objName:"Ops.Ui.Area"},{id:"9b0vewqh6",uiAttribs:{},portsIn:[{name:"Title",value:"BEL graphs rendering"}],objName:"Ops.Ui.Area"},{id:"1jr9skhoh",uiAttribs:{},portsIn:[{name:"Key",value:"size"}],portsOut:[{name:"Result",links:[{portIn:"Data",portOut:"Result",objIn:"6111o4gve",objOut:"1jr9skhoh"},{portIn:"Data",portOut:"Result",objIn:"iu1gafc2l",objOut:"1jr9skhoh"}]}],objName:"Ops.Json.ObjectGetObject_v2"},{id:"6111o4gve",uiAttribs:{},portsIn:[{name:"Key",value:"x"}],portsOut:[{name:"Result",links:[{portIn:"Width",portOut:"Result",objIn:"2we2m73wk",objOut:"6111o4gve"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"iu1gafc2l",uiAttribs:{},portsIn:[{name:"Key",value:"y"}],portsOut:[{name:"Result",links:[{portIn:"Height",portOut:"Result",objIn:"2we2m73wk",objOut:"iu1gafc2l"},{portIn:"posY",portOut:"Result",objIn:"a7htqkajm",objOut:"iu1gafc2l"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"a7htqkajm",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posZ",value:0},{name:"scale",value:.25},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"zzzj5qirq",objOut:"a7htqkajm"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"s04uc1aby",uiAttribs:{},portsIn:[{name:"key",value:"locations"}],portsOut:[{name:"result",links:[{portIn:"array",portOut:"result",objIn:"577v9st05",objOut:"s04uc1aby"}]},{name:"Length",value:2}],objName:"Ops.Json.ObjectGetArray_v2"},{id:"577v9st05",uiAttribs:{},portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"0r6gu6pci",objOut:"577v9st05"}]},{name:"index",value:1},{name:"value",links:[{portIn:"Object",portOut:"value",objIn:"0o208n32s",objOut:"577v9st05"},{portIn:"data",portOut:"value",objIn:"ql6t4xehb",objOut:"577v9st05"}]}],objName:"Ops.Array.ArrayIteratorObjects"},{id:"0o208n32s",uiAttribs:{},portsIn:[{name:"Key",value:"position"}],portsOut:[{name:"Result",links:[{portIn:"Data",portOut:"Result",objIn:"1nnvufbpq",objOut:"0o208n32s"},{portIn:"Data",portOut:"Result",objIn:"s7r0pgt10",objOut:"0o208n32s"}]}],objName:"Ops.Json.ObjectGetObject_v2"},{id:"1nnvufbpq",uiAttribs:{},portsIn:[{name:"Key",value:"x"}],portsOut:[{name:"Result",links:[{portIn:"posX",portOut:"Result",objIn:"caoe6c6b7",objOut:"1nnvufbpq"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"s7r0pgt10",uiAttribs:{},portsIn:[{name:"Key",value:"y"}],portsOut:[{name:"Result",links:[{portIn:"posY",portOut:"Result",objIn:"caoe6c6b7",objOut:"s7r0pgt10"}]},{name:"Found",value:1}],objName:"Ops.Json.ObjectGetNumber_v2"},{id:"ql6t4xehb",uiAttribs:{},portsIn:[{name:"Key",value:"name"}],portsOut:[{name:"Result",links:[{portIn:"Text",portOut:"Result",objIn:"bgju9xo4e",objOut:"ql6t4xehb"}]}],objName:"Ops.Json.ObjectGetString"},{id:"0r6gu6pci",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:.5},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"caoe6c6b7",objOut:"0r6gu6pci"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"caoe6c6b7",uiAttribs:{},portsIn:[{name:"posZ",value:0},{name:"scale",value:1},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"7wxfd2cmj",objOut:"caoe6c6b7"},{portIn:"Render",portOut:"trigger",objIn:"7q8vll9zx",objOut:"caoe6c6b7"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"7q8vll9zx",uiAttribs:{},portsIn:[{name:"Thickness",value:.01},{name:"pivot x index",value:0},{name:"pivot x",value:"center"},{name:"pivot y index",value:0},{name:"pivot y",value:"center"},{name:"Draw Top",value:1},{name:"Draw Bottom",value:1},{name:"Draw Left",value:1},{name:"Draw Right",value:1},{name:"Active",value:1}],objName:"Ops.Gl.Meshes.RectangleFrame_v2"},{id:"bgju9xo4e",uiAttribs:{},portsIn:[{name:"Scale Text",value:1},{name:"Scale",value:1,title:"Line Scale"},{name:"Font",value:"dogica"},{name:"align index",value:0},{name:"align",value:"left"},{name:"vertical align index",value:1},{name:"vertical align",value:"Middle"},{name:"Line Height",value:1},{name:"Letter Spacing",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],portsOut:[{name:"Total Lines",value:1},{name:"Width",value:1.3082449776785714},{name:"Font Available",value:1}],objName:"Ops.Gl.Meshes.TextMesh_v2"},{id:"7wxfd2cmj",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:0},{name:"scale",value:.25},{name:"rotX",value:0},{name:"rotY",value:0},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"bgju9xo4e",objOut:"7wxfd2cmj"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"tdeb6ql5a",uiAttribs:{},portsIn:[{name:"value",value:.1}],portsOut:[{name:"result",links:[{portIn:"Width",portOut:"result",objIn:"7q8vll9zx",objOut:"tdeb6ql5a"},{portIn:"Height",portOut:"result",objIn:"7q8vll9zx",objOut:"tdeb6ql5a"}]}],objName:"Ops.Number.Number"},{id:"zxv4dxbwu",uiAttribs:{},portsOut:[{name:"Name",links:[{portIn:"Text",portOut:"Name",objIn:"8geyiau99",objOut:"zxv4dxbwu"}]}],objName:"Ops.User.thrane.Emeritus.Agent.AgentProxy"},{id:"qpbow3gz4",uiAttribs:{},portsIn:[{name:"radius",value:.5},{name:"innerRadius",value:0},{name:"segments",value:10},{name:"percent",value:1},{name:"steps",value:0},{name:"invertSteps",value:0},{name:"mapping index",value:0},{name:"mapping",value:"flat"},{name:"Spline",value:1},{name:"Draw",value:1,title:"Render mesh"}],objName:"Ops.Gl.Meshes.Circle_v3"},{id:"19jbnyhwc",uiAttribs:{},portsOut:[{name:"Is Agent Moving",links:[{portIn:"Boolean",portOut:"Is Agent Moving",objIn:"dizwnzw7z",objOut:"19jbnyhwc"}]},{name:"Position X",links:[{portIn:"posX",portOut:"Position X",objIn:"wzenadbfo",objOut:"19jbnyhwc"}]},{name:"Position Y",links:[{portIn:"posY",portOut:"Position Y",objIn:"wzenadbfo",objOut:"19jbnyhwc"}]},{name:"Speed",links:[{portIn:"Number",portOut:"Speed",objIn:"wsbo7784n",objOut:"19jbnyhwc"}]},{name:"Destination X",value:0},{name:"Destination Y",value:0},{name:"Position As String",links:[{portIn:"string2",portOut:"Position As String",objIn:"xetuv63sk",objOut:"19jbnyhwc"}]},{name:"Destination As String",links:[{portIn:"string2",portOut:"Destination As String",objIn:"zp1oz9dkk",objOut:"19jbnyhwc"}]}],objName:"Ops.User.thrane.Emeritus.Agent.MovementProxy"},{id:"i8havcm38",uiAttribs:{},portsOut:[{name:"Is Agent Moving",value:0},{name:"Position X",links:[{portIn:"posX",portOut:"Position X",objIn:"6pr1e8r00",objOut:"i8havcm38"}]},{name:"Position Y",links:[{portIn:"posY",portOut:"Position Y",objIn:"6pr1e8r00",objOut:"i8havcm38"}]},{name:"Speed",value:1},{name:"Destination X",value:0},{name:"Destination Y",value:0},{name:"Position As String",value:"(1.25,1)"},{name:"Destination As String",value:"NULL Location (0,0) (0,0)"}],objName:"Ops.User.thrane.Emeritus.Agent.MovementProxy"}],export:{time:"2025-06-15 18:04",service:"github",exportNumber:21}};if(!CABLES.exportedPatch){CABLES.exportedPatch=CABLES.exportedPatches["IEbbPF"]}"use strict";var CABLES=CABLES||{};CABLES.OPS=CABLES.OPS||{};var Ops=Ops||{};Ops.Gl=Ops.Gl||{};Ops.Ui=Ops.Ui||{};Ops.Anim=Ops.Anim||{};Ops.Html=Ops.Html||{};Ops.Json=Ops.Json||{};Ops.Math=Ops.Math||{};Ops.User=Ops.User||{};Ops.Vars=Ops.Vars||{};Ops.Array=Ops.Array||{};Ops.Number=Ops.Number||{};Ops.String=Ops.String||{};Ops.Boolean=Ops.Boolean||{};Ops.Devices=Ops.Devices||{};Ops.Trigger=Ops.Trigger||{};Ops.Gl.Matrix=Ops.Gl.Matrix||{};Ops.Gl.Meshes=Ops.Gl.Meshes||{};Ops.Gl.Shader=Ops.Gl.Shader||{};Ops.User.thrane=Ops.User.thrane||{};Ops.Gl.ImageCompose=Ops.Gl.ImageCompose||{};Ops.Devices.Keyboard=Ops.Devices.Keyboard||{};Ops.User.thrane.Emeritus=Ops.User.thrane.Emeritus||{};Ops.Gl.ImageCompose.Noise=Ops.Gl.ImageCompose.Noise||{};Ops.User.thrane.Emeritus.Agent=Ops.User.thrane.Emeritus.Agent||{};Ops.Trigger.RouteTriggerAnimated=function(){CABLES.Op.apply(this,arguments);const e=this;const n=e.attachments={inc_gen_ports_js:'const port_ip34w2ny0 = op.inFloat("ip34w2ny0", 0);\nport_ip34w2ny0.setUiAttribs({ "title": "Index", "increment": "integer", });\n\nconst port_wiikdxo89 = op.inTrigger("wiikdxo89");\nport_wiikdxo89.setUiAttribs({ "title": "exe", });\n\nconst port_s0ddunhhz = op.inFloat("s0ddunhhz", 1);\nport_s0ddunhhz.setUiAttribs({ "title": "Duration", });\n\nconst port_4gu5lv66h = op.outNumber("4gu5lv66h");\nport_4gu5lv66h.setUiAttribs({ "title": "Out Value", });\n\nconst port_qutsn94pc = op.outTrigger("qutsn94pc");\nport_qutsn94pc.setUiAttribs({ "title": "Trigger 0", });\n\nconst port_8xpkgorjm = op.outTrigger("8xpkgorjm");\nport_8xpkgorjm.setUiAttribs({ "title": "Trigger 1", });\n\nconst port_hvyzlh9o8 = op.outTrigger("hvyzlh9o8");\nport_hvyzlh9o8.setUiAttribs({ "title": "Trigger 2", });\n\nconst port_367wv95xd = op.outTrigger("367wv95xd");\nport_367wv95xd.setUiAttribs({ "title": "Trigger 3", });\n\nconst port_7ju3j2fy0 = op.outTrigger("7ju3j2fy0");\nport_7ju3j2fy0.setUiAttribs({ "title": "Trigger 4", });\n\nconst port_t8dvyjuoq = op.outTrigger("t8dvyjuoq");\nport_t8dvyjuoq.setUiAttribs({ "title": "Trigger 5", });\n\nconst port_72naih78e = op.outTrigger("72naih78e");\nport_72naih78e.setUiAttribs({ "title": "Trigger 6", });\n\nconst port_0s04tm21u = op.outTrigger("0s04tm21u");\nport_0s04tm21u.setUiAttribs({ "title": "Trigger 7", });\n\nconst port_93jpxulns = op.outTrigger("93jpxulns");\nport_93jpxulns.setUiAttribs({ "title": "Trigger 8", });\n\nconst port_a0w7orgi8 = op.outTrigger("a0w7orgi8");\nport_a0w7orgi8.setUiAttribs({ "title": "Trigger 9", });\n\nconst port_r8h4qx4z8 = op.outTrigger("r8h4qx4z8");\nport_r8h4qx4z8.setUiAttribs({ "title": "Trigger 10", });\n\nconst port_cr80a86xi = op.outTrigger("cr80a86xi");\nport_cr80a86xi.setUiAttribs({ "title": "Trigger 11", });\n\nop.initInnerPorts = function (addedOps)\n{\n    for (let i = 0; i < addedOps.length; i++)\n    {\n        if (addedOps[i].innerInput)\n        {\n            const innerOut_ip34w2ny0 = addedOps[i].outNumber("innerOut_ip34w2ny0");\n            innerOut_ip34w2ny0.set(port_ip34w2ny0.get());\n            innerOut_ip34w2ny0.setUiAttribs({ "title": "Index" });\n            port_ip34w2ny0.on("change", (a, v) => { innerOut_ip34w2ny0.set(a); });\n\n            const innerOut_wiikdxo89 = addedOps[i].outTrigger("innerOut_wiikdxo89");\n            innerOut_wiikdxo89.setUiAttribs({ "title": "exe" });\n            port_wiikdxo89.onTriggered = () => { innerOut_wiikdxo89.trigger(); };\n\n            const innerOut_s0ddunhhz = addedOps[i].outNumber("innerOut_s0ddunhhz");\n            innerOut_s0ddunhhz.set(port_s0ddunhhz.get());\n            innerOut_s0ddunhhz.setUiAttribs({ "title": "Duration" });\n            port_s0ddunhhz.on("change", (a, v) => { innerOut_s0ddunhhz.set(a); });\n        }\n        if (addedOps[i].innerOutput)\n        {\n            const innerIn_4gu5lv66h = addedOps[i].inFloat("innerIn_4gu5lv66h");\n            innerIn_4gu5lv66h.setUiAttribs({ "title": "Out Value" });\n            innerIn_4gu5lv66h.on("change", (a, v) => { port_4gu5lv66h.set(a); });\n\n            const innerIn_qutsn94pc = addedOps[i].inTrigger("innerIn_qutsn94pc");\n            innerIn_qutsn94pc.setUiAttribs({ "title": "Trigger 0" });\n            innerIn_qutsn94pc.onTriggered = () => { port_qutsn94pc.trigger(); };\n\n            const innerIn_8xpkgorjm = addedOps[i].inTrigger("innerIn_8xpkgorjm");\n            innerIn_8xpkgorjm.setUiAttribs({ "title": "Trigger 1" });\n            innerIn_8xpkgorjm.onTriggered = () => { port_8xpkgorjm.trigger(); };\n\n            const innerIn_hvyzlh9o8 = addedOps[i].inTrigger("innerIn_hvyzlh9o8");\n            innerIn_hvyzlh9o8.setUiAttribs({ "title": "Trigger 2" });\n            innerIn_hvyzlh9o8.onTriggered = () => { port_hvyzlh9o8.trigger(); };\n\n            const innerIn_367wv95xd = addedOps[i].inTrigger("innerIn_367wv95xd");\n            innerIn_367wv95xd.setUiAttribs({ "title": "Trigger 3" });\n            innerIn_367wv95xd.onTriggered = () => { port_367wv95xd.trigger(); };\n\n            const innerIn_7ju3j2fy0 = addedOps[i].inTrigger("innerIn_7ju3j2fy0");\n            innerIn_7ju3j2fy0.setUiAttribs({ "title": "Trigger 4" });\n            innerIn_7ju3j2fy0.onTriggered = () => { port_7ju3j2fy0.trigger(); };\n\n            const innerIn_t8dvyjuoq = addedOps[i].inTrigger("innerIn_t8dvyjuoq");\n            innerIn_t8dvyjuoq.setUiAttribs({ "title": "Trigger 5" });\n            innerIn_t8dvyjuoq.onTriggered = () => { port_t8dvyjuoq.trigger(); };\n\n            const innerIn_72naih78e = addedOps[i].inTrigger("innerIn_72naih78e");\n            innerIn_72naih78e.setUiAttribs({ "title": "Trigger 6" });\n            innerIn_72naih78e.onTriggered = () => { port_72naih78e.trigger(); };\n\n            const innerIn_0s04tm21u = addedOps[i].inTrigger("innerIn_0s04tm21u");\n            innerIn_0s04tm21u.setUiAttribs({ "title": "Trigger 7" });\n            innerIn_0s04tm21u.onTriggered = () => { port_0s04tm21u.trigger(); };\n\n            const innerIn_93jpxulns = addedOps[i].inTrigger("innerIn_93jpxulns");\n            innerIn_93jpxulns.setUiAttribs({ "title": "Trigger 8" });\n            innerIn_93jpxulns.onTriggered = () => { port_93jpxulns.trigger(); };\n\n            const innerIn_a0w7orgi8 = addedOps[i].inTrigger("innerIn_a0w7orgi8");\n            innerIn_a0w7orgi8.setUiAttribs({ "title": "Trigger 9" });\n            innerIn_a0w7orgi8.onTriggered = () => { port_a0w7orgi8.trigger(); };\n\n            const innerIn_r8h4qx4z8 = addedOps[i].inTrigger("innerIn_r8h4qx4z8");\n            innerIn_r8h4qx4z8.setUiAttribs({ "title": "Trigger 10" });\n            innerIn_r8h4qx4z8.onTriggered = () => { port_r8h4qx4z8.trigger(); };\n\n            const innerIn_cr80a86xi = addedOps[i].inTrigger("innerIn_cr80a86xi");\n            innerIn_cr80a86xi.setUiAttribs({ "title": "Trigger 11" });\n            innerIn_cr80a86xi.onTriggered = () => { port_cr80a86xi.trigger(); };\n        }\n    }\n};\n',subpatch_json:'{"ops":[{"id":"bp0-0","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Switched Value","value":0},{"name":"Trigger 0","links":[{"portIn":"innerIn_qutsn94pc","portOut":"Trigger 0","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 1","links":[{"portIn":"innerIn_8xpkgorjm","portOut":"Trigger 1","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 2","links":[{"portIn":"innerIn_hvyzlh9o8","portOut":"Trigger 2","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 3","links":[{"portIn":"innerIn_367wv95xd","portOut":"Trigger 3","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 4","links":[{"portIn":"innerIn_7ju3j2fy0","portOut":"Trigger 4","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 5","links":[{"portIn":"innerIn_t8dvyjuoq","portOut":"Trigger 5","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 6","links":[{"portIn":"innerIn_72naih78e","portOut":"Trigger 6","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 7","links":[{"portIn":"innerIn_0s04tm21u","portOut":"Trigger 7","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 8","links":[{"portIn":"innerIn_93jpxulns","portOut":"Trigger 8","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 9","links":[{"portIn":"innerIn_a0w7orgi8","portOut":"Trigger 9","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 10","links":[{"portIn":"innerIn_r8h4qx4z8","portOut":"Trigger 10","objIn":"bp0-4","objOut":"bp0-0"}]},{"name":"Trigger 11","links":[{"portIn":"innerIn_cr80a86xi","portOut":"Trigger 11","objIn":"bp0-4","objOut":"bp0-0"}]}],"objName":"Ops.Trigger.RouteTrigger"},{"id":"bp0-1","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Switched Value","value":0},{"name":"Trigger 0","links":[{"portIn":"innerIn_qutsn94pc","portOut":"Trigger 0","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 1","links":[{"portIn":"innerIn_8xpkgorjm","portOut":"Trigger 1","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 2","links":[{"portIn":"innerIn_hvyzlh9o8","portOut":"Trigger 2","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 3","links":[{"portIn":"innerIn_367wv95xd","portOut":"Trigger 3","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 4","links":[{"portIn":"innerIn_7ju3j2fy0","portOut":"Trigger 4","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 5","links":[{"portIn":"innerIn_t8dvyjuoq","portOut":"Trigger 5","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 6","links":[{"portIn":"innerIn_72naih78e","portOut":"Trigger 6","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 7","links":[{"portIn":"innerIn_0s04tm21u","portOut":"Trigger 7","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 8","links":[{"portIn":"innerIn_93jpxulns","portOut":"Trigger 8","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 9","links":[{"portIn":"innerIn_a0w7orgi8","portOut":"Trigger 9","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 10","links":[{"portIn":"innerIn_r8h4qx4z8","portOut":"Trigger 10","objIn":"bp0-4","objOut":"bp0-1"}]},{"name":"Trigger 11","links":[{"portIn":"innerIn_cr80a86xi","portOut":"Trigger 11","objIn":"bp0-4","objOut":"bp0-1"}]}],"objName":"Ops.Trigger.RouteTrigger"},{"id":"bp0-2","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"reset","portOut":"Next","objIn":"bp0-7","objOut":"bp0-2"},{"portIn":"reset","portOut":"Next","objIn":"bp0-9","objOut":"bp0-2"}]},{"name":"Number","links":[{"portIn":"Value","portOut":"Number","objIn":"bp0-6","objOut":"bp0-2"}]}],"objName":"Ops.Number.TriggerOnChangeNumber"},{"id":"bp0-3","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"innerOut_ip34w2ny0","title":"Index","links":[{"portIn":"Value","portOut":"innerOut_ip34w2ny0","objIn":"bp0-2","objOut":"bp0-3"}]},{"name":"innerOut_wiikdxo89","title":"exe","links":[{"portIn":"exe","portOut":"innerOut_wiikdxo89","objIn":"bp0-5","objOut":"bp0-3"}]},{"name":"innerOut_s0ddunhhz","title":"Duration","links":[{"portIn":"value","portOut":"innerOut_s0ddunhhz","objIn":"bp0-14","objOut":"bp0-3"}]}],"objName":"Ops.Ui.SubPatchInput"},{"id":"bp0-4","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsIn":[{"name":"innerIn_4gu5lv66h","title":"Out Value"},{"name":"innerIn_qutsn94pc","title":"Trigger 0"},{"name":"innerIn_8xpkgorjm","title":"Trigger 1"},{"name":"innerIn_hvyzlh9o8","title":"Trigger 2"},{"name":"innerIn_367wv95xd","title":"Trigger 3"},{"name":"innerIn_7ju3j2fy0","title":"Trigger 4"},{"name":"innerIn_t8dvyjuoq","title":"Trigger 5"},{"name":"innerIn_72naih78e","title":"Trigger 6"},{"name":"innerIn_0s04tm21u","title":"Trigger 7"},{"name":"innerIn_93jpxulns","title":"Trigger 8"},{"name":"innerIn_a0w7orgi8","title":"Trigger 9"},{"name":"innerIn_r8h4qx4z8","title":"Trigger 10"},{"name":"innerIn_cr80a86xi","title":"Trigger 11"}],"objName":"Ops.Ui.SubPatchOutput"},{"id":"bp0-5","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"trigger 0","links":[{"portIn":"exe","portOut":"trigger 0","objIn":"bp0-7","objOut":"bp0-5"},{"portIn":"exe","portOut":"trigger 0","objIn":"bp0-9","objOut":"bp0-5"}]},{"name":"trigger 13","links":[{"portIn":"exe","portOut":"trigger 13","objIn":"bp0-15","objOut":"bp0-5"}]},{"name":"trigger 14","links":[{"portIn":"Set","portOut":"trigger 14","objIn":"bp0-11","objOut":"bp0-5"}]}],"objName":"Ops.Trigger.Sequence"},{"id":"bp0-6","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Current Value","links":[{"portIn":"Switch Value","portOut":"Current Value","objIn":"bp0-0","objOut":"bp0-6"}]},{"name":"Previous Value","links":[{"portIn":"Switch Value","portOut":"Previous Value","objIn":"bp0-1","objOut":"bp0-6"}]}],"objName":"Ops.Number.PreviousNumberStore"},{"id":"bp0-7","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsIn":[{"name":"start","value":0},{"name":"end","value":1},{"name":"loop","value":false},{"name":"Wait for Reset","value":true},{"name":"easing index","value":0},{"name":"easing","value":"Sin Out"}],"portsOut":[{"name":"result","links":[{"portIn":"Number","portOut":"result","objIn":"bp0-8","objOut":"bp0-7"}]},{"name":"finished","value":false}],"objName":"Ops.Anim.SimpleAnim"},{"id":"bp0-8","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Result","links":[{"portIn":"Number","portOut":"Result","objIn":"bp0-11","objOut":"bp0-8"}]}],"objName":"Ops.Ui.VizNumber"},{"id":"bp0-9","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsIn":[{"name":"start","value":1},{"name":"end","value":0},{"name":"loop","value":false},{"name":"Wait for Reset","value":true},{"name":"easing index","value":0},{"name":"easing","value":"linear"}],"portsOut":[{"name":"result","links":[{"portIn":"Number","portOut":"result","objIn":"bp0-10","objOut":"bp0-9"}]},{"name":"finished","value":false}],"objName":"Ops.Anim.SimpleAnim"},{"id":"bp0-10","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Result","links":[{"portIn":"Number","portOut":"Result","objIn":"bp0-12","objOut":"bp0-10"},{"portIn":"boolean","portOut":"Result","objIn":"bp0-15","objOut":"bp0-10"}]}],"objName":"Ops.Ui.VizNumber"},{"id":"bp0-11","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"Execute","portOut":"Next","objIn":"bp0-0","objOut":"bp0-11"}]},{"name":"Out Value","links":[{"portIn":"innerIn_4gu5lv66h","portOut":"Out Value","objIn":"bp0-4","objOut":"bp0-11"}]}],"objName":"Ops.Trigger.TriggerNumber"},{"id":"bp0-12","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"Execute","portOut":"Next","objIn":"bp0-1","objOut":"bp0-12"}]},{"name":"Out Value","links":[{"portIn":"innerIn_4gu5lv66h","portOut":"Out Value","objIn":"bp0-4","objOut":"bp0-12"}]}],"objName":"Ops.Trigger.TriggerNumber"},{"id":"bp0-13","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"trigger","links":[{"portIn":"Set","portOut":"trigger","objIn":"bp0-12","objOut":"bp0-13"}]}],"objName":"Ops.Gl.ClearDepth"},{"id":"bp0-14","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"result","links":[{"portIn":"duration","portOut":"result","objIn":"bp0-9","objOut":"bp0-14"},{"portIn":"duration","portOut":"result","objIn":"bp0-7","objOut":"bp0-14"}]}],"objName":"Ops.Number.Number"},{"id":"bp0-15","uiAttribs":{"subPatch":"uyoggpqnl"},"storage":{},"portsOut":[{"name":"then","links":[{"portIn":"render","portOut":"then","objIn":"bp0-13","objOut":"bp0-15"}]}],"objName":"Ops.Boolean.IfTrueThen_v2"}]}'};const b=e.inFloat("ip34w2ny0",0);b.setUiAttribs({title:"Index",increment:"integer"});const O=e.inTrigger("wiikdxo89");O.setUiAttribs({title:"exe"});const _=e.inFloat("s0ddunhhz",1);_.setUiAttribs({title:"Duration"});const I=e.outNumber("4gu5lv66h");I.setUiAttribs({title:"Out Value"});const A=e.outTrigger("qutsn94pc");A.setUiAttribs({title:"Trigger 0"});const x=e.outTrigger("8xpkgorjm");x.setUiAttribs({title:"Trigger 1"});const T=e.outTrigger("hvyzlh9o8");T.setUiAttribs({title:"Trigger 2"});const y=e.outTrigger("367wv95xd");y.setUiAttribs({title:"Trigger 3"});const S=e.outTrigger("7ju3j2fy0");S.setUiAttribs({title:"Trigger 4"});const N=e.outTrigger("t8dvyjuoq");N.setUiAttribs({title:"Trigger 5"});const j=e.outTrigger("72naih78e");j.setUiAttribs({title:"Trigger 6"});const C=e.outTrigger("0s04tm21u");C.setUiAttribs({title:"Trigger 7"});const E=e.outTrigger("93jpxulns");E.setUiAttribs({title:"Trigger 8"});const P=e.outTrigger("a0w7orgi8");P.setUiAttribs({title:"Trigger 9"});const L=e.outTrigger("r8h4qx4z8");L.setUiAttribs({title:"Trigger 10"});const k=e.outTrigger("cr80a86xi");k.setUiAttribs({title:"Trigger 11"});e.initInnerPorts=function(t){for(let e=0;e<t.length;e++){if(t[e].innerInput){const n=t[e].outNumber("innerOut_ip34w2ny0");n.set(b.get());n.setUiAttribs({title:"Index"});b.on("change",(e,t)=>{n.set(e)});const i=t[e].outTrigger("innerOut_wiikdxo89");i.setUiAttribs({title:"exe"});O.onTriggered=()=>{i.trigger()};const r=t[e].outNumber("innerOut_s0ddunhhz");r.set(_.get());r.setUiAttribs({title:"Duration"});_.on("change",(e,t)=>{r.set(e)})}if(t[e].innerOutput){const a=t[e].inFloat("innerIn_4gu5lv66h");a.setUiAttribs({title:"Out Value"});a.on("change",(e,t)=>{I.set(e)});const s=t[e].inTrigger("innerIn_qutsn94pc");s.setUiAttribs({title:"Trigger 0"});s.onTriggered=()=>{A.trigger()};const o=t[e].inTrigger("innerIn_8xpkgorjm");o.setUiAttribs({title:"Trigger 1"});o.onTriggered=()=>{x.trigger()};const u=t[e].inTrigger("innerIn_hvyzlh9o8");u.setUiAttribs({title:"Trigger 2"});u.onTriggered=()=>{T.trigger()};const l=t[e].inTrigger("innerIn_367wv95xd");l.setUiAttribs({title:"Trigger 3"});l.onTriggered=()=>{y.trigger()};const p=t[e].inTrigger("innerIn_7ju3j2fy0");p.setUiAttribs({title:"Trigger 4"});p.onTriggered=()=>{S.trigger()};const g=t[e].inTrigger("innerIn_t8dvyjuoq");g.setUiAttribs({title:"Trigger 5"});g.onTriggered=()=>{N.trigger()};const m=t[e].inTrigger("innerIn_72naih78e");m.setUiAttribs({title:"Trigger 6"});m.onTriggered=()=>{j.trigger()};const h=t[e].inTrigger("innerIn_0s04tm21u");h.setUiAttribs({title:"Trigger 7"});h.onTriggered=()=>{C.trigger()};const c=t[e].inTrigger("innerIn_93jpxulns");c.setUiAttribs({title:"Trigger 8"});c.onTriggered=()=>{E.trigger()};const d=t[e].inTrigger("innerIn_a0w7orgi8");d.setUiAttribs({title:"Trigger 9"});d.onTriggered=()=>{P.trigger()};const f=t[e].inTrigger("innerIn_r8h4qx4z8");f.setUiAttribs({title:"Trigger 10"});f.onTriggered=()=>{L.trigger()};const v=t[e].inTrigger("innerIn_cr80a86xi");v.setUiAttribs({title:"Trigger 11"});v.onTriggered=()=>{k.trigger()}}}};const i="bp2sub_"+e.id;new CABLES.SubPatchOp(e,{subId:i});t();function t(){const t=JSON.parse(n.subpatch_json);CABLES.Patch.replaceOpIds(t,{parentSubPatchId:i,prefixHash:i,oldIdAsRef:true,doNotUnlinkLostLinks:true});for(let e=0;e<t.ops.length;e++){t.ops[e].uiAttribs.blueprintSubpatch2=true}e.patch.deSerialize(t,{opsCreated:e.initInnerPorts});if(CABLES.UI)gui.savedState.setSaved("blueprintloaded",i);e.patch.emitEvent("subpatchExpose",i);e.setStorage({blueprintVer:2});e.patch.emitEvent("subpatchExpose",i)}};Ops.Trigger.RouteTriggerAnimated.prototype=new CABLES.Op;CABLES.OPS["563afe75-045b-4c49-b58d-5f4ea4d0e807"]={f:Ops.Trigger.RouteTriggerAnimated,objName:"Ops.Trigger.RouteTriggerAnimated"};Ops.User.thrane.Emeritus.InputManagement=function(){CABLES.Op.apply(this,arguments);const e=this;const n=e.attachments={inc_gen_ports_js:'const port_mq85p02da=op.outNumber("mq85p02da");\nport_mq85p02da.setUiAttribs({title:"result",});\n\nconst port_qf30fea4v=op.inTrigger("qf30fea4v");\nport_qf30fea4v.setUiAttribs({title:"Execute",display:"button",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_qf30fea4v = addedOps[i].outTrigger("innerOut_qf30fea4v");\ninnerOut_qf30fea4v.setUiAttribs({title:"Execute"});\nport_qf30fea4v.onTriggered = () => { innerOut_qf30fea4v.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_mq85p02da = addedOps[i].inFloat("innerIn_mq85p02da");\ninnerIn_mq85p02da.setUiAttribs({title:"result"});\ninnerIn_mq85p02da.on("change", (a,v) => { port_mq85p02da.set(a); });\n\n}\n}\n};\n',subpatch_json:'{"ops":[{"id":"bp1-0","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Text","value":"<= Press Arrow Keys to shift between screens =>"},{"name":"Scale Text","value":1},{"name":"Scale","value":1,"title":"Line Scale"},{"name":"Font","value":"Ubuntu-Regular"},{"name":"align index","value":1},{"name":"align","value":"center"},{"name":"vertical align index","value":1},{"name":"vertical align","value":"Middle"},{"name":"Line Height","value":1},{"name":"Letter Spacing","value":0},{"name":"filter index","value":2},{"name":"filter","value":"mipmap"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":0},{"name":"r","value":0.8906966897455201},{"name":"g","value":0.9457179939722188},{"name":"b","value":0.9853333330154419},{"name":"a","value":1}],"portsOut":[{"name":"Total Lines","value":1},{"name":"Width","value":7.852142576187379},{"name":"Font Available","value":1}],"objName":"Ops.Gl.Meshes.TextMesh_v2"},{"id":"bp1-1","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"posX","value":0},{"name":"posY","value":-1.02},{"name":"posZ","value":0},{"name":"scale","value":0.1},{"name":"rotX","value":0},{"name":"rotY","value":0},{"name":"rotZ","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"Render","portOut":"trigger","objIn":"bp1-0","objOut":"bp1-1"}]}],"objName":"Ops.Gl.Matrix.Transform"},{"id":"bp1-2","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1},{"name":"colorizeTexture","value":0},{"name":"Vertex Colors","value":0},{"name":"Alpha Mask Source index","value":0},{"name":"Alpha Mask Source","value":"Luminance"},{"name":"Opacity TexCoords Transform","value":0},{"name":"Discard Transparent Pixels","value":0},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0},{"name":"Crop TexCoords","value":0},{"name":"billboard","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp1-1","objOut":"bp1-2"}]}],"objName":"Ops.Gl.Shader.BasicMaterial_v3"},{"id":"bp1-3","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"render","portOut":"Next","objIn":"bp1-2","objOut":"bp1-3"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp1-4","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Title","value":"press key header"}],"objName":"Ops.Ui.Area"},{"id":"bp1-5","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"canvas only","value":0},{"name":"Cursor Keys","value":1},{"name":"WASD","value":0},{"name":"Active","value":1}],"portsOut":[{"name":"Degree","value":0},{"name":"Up","value":0},{"name":"Down","value":0},{"name":"Left","value":0},{"name":"Left Pressed","links":[{"portIn":"exe","portOut":"Left Pressed","objIn":"bp1-8","objOut":"bp1-5"}]},{"name":"Right","value":0},{"name":"Right Pressed","links":[{"portIn":"exe","portOut":"Right Pressed","objIn":"bp1-9","objOut":"bp1-5"}]},{"name":"Any Button Pressed","value":0}],"objName":"Ops.Devices.Keyboard.CursorKeys"},{"id":"bp1-6","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"result","links":[{"portIn":"innerIn_mq85p02da","portOut":"result","objIn":"bp1-17","objOut":"bp1-6"}]}],"objName":"Ops.Number.Number"},{"id":"bp1-7","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Limit","value":1},{"name":"Length","value":3},{"name":"Mode index","value":1},{"name":"Mode","value":"Stop at Max"},{"name":"Default","value":0}],"portsOut":[{"name":"Value","links":[{"portIn":"value","portOut":"Value","objIn":"bp1-6","objOut":"bp1-7"}]}],"objName":"Ops.Math.Incrementor"},{"id":"bp1-8","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"next","links":[{"portIn":"Decrement","portOut":"next","objIn":"bp1-7","objOut":"bp1-8"}]},{"name":"Delaying","value":false}],"objName":"Ops.Trigger.DelayedTrigger"},{"id":"bp1-9","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"next","links":[{"portIn":"Increment","portOut":"next","objIn":"bp1-7","objOut":"bp1-9"}]},{"name":"Delaying","value":false}],"objName":"Ops.Trigger.DelayedTrigger"},{"id":"bp1-10","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"Execute","portOut":"Next","objIn":"bp1-3","objOut":"bp1-10"},{"portIn":"Render","portOut":"Next","objIn":"bp1-13","objOut":"bp1-10"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp1-11","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"value","value":0.5}],"portsOut":[{"name":"result","links":[{"portIn":"delay","portOut":"result","objIn":"bp1-9","objOut":"bp1-11"},{"portIn":"delay","portOut":"result","objIn":"bp1-8","objOut":"bp1-11"}]}],"objName":"Ops.Number.Number"},{"id":"bp1-12","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Title","value":"Key input handler"}],"objName":"Ops.Ui.Area"},{"id":"bp1-13","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Size index","value":2},{"name":"Size","value":"Manual"},{"name":"Width","value":8},{"name":"Height","value":2},{"name":"Filter index","value":1},{"name":"Filter","value":"linear"},{"name":"Wrap index","value":0},{"name":"Wrap","value":"clamp to edge"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":"0"},{"name":"Pixel Format index","value":4},{"name":"Pixel Format","value":"RGBA 8bit ubyte"},{"name":"Clear","value":1},{"name":"R","value":0},{"name":"G","value":0},{"name":"B","value":0},{"name":"A","value":0}],"portsOut":[{"name":"Next","links":[{"portIn":"Render","portOut":"Next","objIn":"bp1-15","objOut":"bp1-13"}]},{"name":"texture_out","links":[{"portIn":"Texture Color","portOut":"texture_out","objIn":"bp1-0","objOut":"bp1-13"}]},{"name":"Aspect Ratio","value":4},{"name":"Texture Width","value":8},{"name":"Texture Height","value":2}],"objName":"Ops.Gl.ImageCompose.ImageCompose_v4"},{"id":"bp1-14","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Speed","value":0.4},{"name":"Play","value":1},{"name":"Sync to timeline","value":0}],"portsOut":[{"name":"Time","links":[{"portIn":"Z","portOut":"Time","objIn":"bp1-15","objOut":"bp1-14"}]}],"objName":"Ops.Anim.Timer_v2"},{"id":"bp1-15","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"Blend Mode index","value":0},{"name":"Blend Mode","value":"normal"},{"name":"Alpha Mask index","value":0},{"name":"Alpha Mask","value":"Off"},{"name":"Amount","value":1},{"name":"Loop","value":1},{"name":"RGB","value":0},{"name":"Minimum value","value":0.25},{"name":"Maximum value","value":1},{"name":"Num X","value":32},{"name":"Num Y","value":32},{"name":"X","value":0},{"name":"Y","value":0},{"name":"Seed","value":0},{"name":"Centered","value":0}],"objName":"Ops.Gl.ImageCompose.Noise.PixelNoise_v3"},{"id":"bp1-16","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsOut":[{"name":"innerOut_qf30fea4v","title":"Execute","links":[{"portIn":"Execute","portOut":"innerOut_qf30fea4v","objIn":"bp1-10","objOut":"bp1-16"}]}],"objName":"Ops.Ui.SubPatchInput"},{"id":"bp1-17","uiAttribs":{"subPatch":"wozojz238"},"storage":{},"portsIn":[{"name":"innerIn_mq85p02da","title":"result"}],"objName":"Ops.Ui.SubPatchOutput"}]}'};const r=e.outNumber("mq85p02da");r.setUiAttribs({title:"result"});const a=e.inTrigger("qf30fea4v");a.setUiAttribs({title:"Execute",display:"button"});e.initInnerPorts=function(t){for(let e=0;e<t.length;e++){if(t[e].innerInput){const n=t[e].outTrigger("innerOut_qf30fea4v");n.setUiAttribs({title:"Execute"});a.onTriggered=()=>{n.trigger()}}if(t[e].innerOutput){const i=t[e].inFloat("innerIn_mq85p02da");i.setUiAttribs({title:"result"});i.on("change",(e,t)=>{r.set(e)})}}};const i="bp2sub_"+e.id;new CABLES.SubPatchOp(e,{subId:i});t();function t(){if(!n||!n.subpatch_json)return;const t=JSON.parse(n.subpatch_json);CABLES.Patch.replaceOpIds(t,{parentSubPatchId:i,prefixHash:i,oldIdAsRef:true,doNotUnlinkLostLinks:true});for(let e=0;e<t.ops.length;e++){t.ops[e].uiAttribs.blueprintSubpatch2=true}e.loadDependencies(t,()=>{e.patch.deSerialize(t,{opsCreated:e.initInnerPorts});if(CABLES.UI)gui.savedState.setSaved("blueprintloaded",i);e.patch.emitEvent("subpatchExpose",i);e.setStorage({blueprintVer:2});e.patch.emitEvent("subpatchExpose",i)})}};Ops.User.thrane.Emeritus.InputManagement.prototype=new CABLES.Op;CABLES.OPS["77eff44c-4c8e-4206-b9b3-1b94176fd1a3"]={f:Ops.User.thrane.Emeritus.InputManagement,objName:"Ops.User.thrane.Emeritus.InputManagement"};Ops.User.thrane.Emeritus.IntroScreen=function(){CABLES.Op.apply(this,arguments);const e=this;const n=e.attachments={inc_gen_ports_js:'const port_t24fy9v2v=op.inFloat("t24fy9v2v",1);\nport_t24fy9v2v.setUiAttribs({title:"number1",});\n\nconst port_5gqo44pfl=op.inTrigger("5gqo44pfl");\nport_5gqo44pfl.setUiAttribs({title:"Execute",display:"button",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_t24fy9v2v = addedOps[i].outNumber("innerOut_t24fy9v2v");\ninnerOut_t24fy9v2v.set(port_t24fy9v2v.get() );\ninnerOut_t24fy9v2v.setUiAttribs({title:"number1"});\nport_t24fy9v2v.on("change", (a,v) => { innerOut_t24fy9v2v.set(a); });\n\nconst innerOut_5gqo44pfl = addedOps[i].outTrigger("innerOut_5gqo44pfl");\ninnerOut_5gqo44pfl.setUiAttribs({title:"Execute"});\nport_5gqo44pfl.onTriggered = () => { innerOut_5gqo44pfl.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n',subpatch_json:'{"ops":[{"id":"bp2-0","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"trigger 1","links":[{"portIn":"Execute","portOut":"trigger 1","objIn":"bp2-4","objOut":"bp2-0"}]},{"name":"trigger 2","links":[{"portIn":"Execute","portOut":"trigger 2","objIn":"bp2-9","objOut":"bp2-0"}]},{"name":"trigger 3","links":[{"portIn":"Execute","portOut":"trigger 3","objIn":"bp2-14","objOut":"bp2-0"}]},{"name":"trigger 4","links":[{"portIn":"Execute","portOut":"trigger 4","objIn":"bp2-16","objOut":"bp2-0"}]}],"objName":"Ops.Gl.LayerSequence"},{"id":"bp2-1","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Text","value":"Computation Without a Name"},{"name":"Scale Text","value":1},{"name":"Scale","value":1,"title":"Line Scale"},{"name":"Font","value":"Ubuntu-Regular"},{"name":"align index","value":2},{"name":"align","value":"right"},{"name":"vertical align index","value":1},{"name":"vertical align","value":"Middle"},{"name":"Line Height","value":1},{"name":"Letter Spacing","value":0},{"name":"filter index","value":2},{"name":"filter","value":"mipmap"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":0},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1}],"portsOut":[{"name":"Total Lines","value":1},{"name":"Width","value":0},{"name":"Font Available","value":1}],"objName":"Ops.Gl.Meshes.TextMesh_v2"},{"id":"bp2-2","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"posX","value":0},{"name":"posY","value":0},{"name":"posZ","value":0},{"name":"scale","value":0.2},{"name":"rotX","value":0},{"name":"rotY","value":0},{"name":"rotZ","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"Render","portOut":"trigger","objIn":"bp2-1","objOut":"bp2-2"}]}],"objName":"Ops.Gl.Matrix.Transform"},{"id":"bp2-3","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"r","value":0},{"name":"g","value":0.766},{"name":"b","value":1},{"name":"a","value":1},{"name":"colorizeTexture","value":0},{"name":"Vertex Colors","value":0},{"name":"Alpha Mask Source index","value":0},{"name":"Alpha Mask Source","value":"Luminance"},{"name":"Opacity TexCoords Transform","value":0},{"name":"Discard Transparent Pixels","value":0},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0},{"name":"Crop TexCoords","value":0},{"name":"billboard","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp2-2","objOut":"bp2-3"}]}],"objName":"Ops.Gl.Shader.BasicMaterial_v3"},{"id":"bp2-4","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"render","portOut":"Next","objIn":"bp2-3","objOut":"bp2-4"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp2-5","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Title","value":"CWN header"}],"objName":"Ops.Ui.Area"},{"id":"bp2-6","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Text","value":"presents"},{"name":"Scale Text","value":1},{"name":"Scale","value":1,"title":"Line Scale"},{"name":"Font","value":"Ubuntu-Regular"},{"name":"align index","value":2},{"name":"align","value":"right"},{"name":"vertical align index","value":1},{"name":"vertical align","value":"Middle"},{"name":"Line Height","value":1},{"name":"Letter Spacing","value":0},{"name":"filter index","value":2},{"name":"filter","value":"mipmap"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":0},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1}],"portsOut":[{"name":"Total Lines","value":1},{"name":"Width","value":0},{"name":"Font Available","value":1}],"objName":"Ops.Gl.Meshes.TextMesh_v2"},{"id":"bp2-7","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"posX","value":0},{"name":"posY","value":-0.18},{"name":"posZ","value":0},{"name":"scale","value":0.2},{"name":"rotX","value":0},{"name":"rotY","value":0},{"name":"rotZ","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"Render","portOut":"trigger","objIn":"bp2-6","objOut":"bp2-7"}]}],"objName":"Ops.Gl.Matrix.Transform"},{"id":"bp2-8","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"r","value":0},{"name":"g","value":0.766},{"name":"b","value":1},{"name":"a","value":1},{"name":"colorizeTexture","value":0},{"name":"Vertex Colors","value":0},{"name":"Alpha Mask Source index","value":0},{"name":"Alpha Mask Source","value":"Luminance"},{"name":"Opacity TexCoords Transform","value":0},{"name":"Discard Transparent Pixels","value":0},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0},{"name":"Crop TexCoords","value":0},{"name":"billboard","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp2-7","objOut":"bp2-8"}]}],"objName":"Ops.Gl.Shader.BasicMaterial_v3"},{"id":"bp2-9","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"render","portOut":"Next","objIn":"bp2-8","objOut":"bp2-9"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp2-10","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Title","value":"presents header"}],"objName":"Ops.Ui.Area"},{"id":"bp2-11","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Text","value":"Emeritus"},{"name":"Scale Text","value":1},{"name":"Scale","value":1,"title":"Line Scale"},{"name":"Font","value":"Ubuntu-Regular"},{"name":"align index","value":2},{"name":"align","value":"right"},{"name":"vertical align index","value":1},{"name":"vertical align","value":"Middle"},{"name":"Line Height","value":1},{"name":"Letter Spacing","value":0},{"name":"filter index","value":2},{"name":"filter","value":"mipmap"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":0},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1}],"portsOut":[{"name":"Total Lines","value":1},{"name":"Width","value":0},{"name":"Font Available","value":1}],"objName":"Ops.Gl.Meshes.TextMesh_v2"},{"id":"bp2-12","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"posX","value":0},{"name":"posY","value":-0.4},{"name":"posZ","value":0},{"name":"scale","value":0.4},{"name":"rotX","value":0},{"name":"rotY","value":0},{"name":"rotZ","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"Render","portOut":"trigger","objIn":"bp2-11","objOut":"bp2-12"}]}],"objName":"Ops.Gl.Matrix.Transform"},{"id":"bp2-13","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"r","value":0},{"name":"g","value":0.766},{"name":"b","value":1},{"name":"a","value":1},{"name":"colorizeTexture","value":0},{"name":"Vertex Colors","value":0},{"name":"Alpha Mask Source index","value":0},{"name":"Alpha Mask Source","value":"Luminance"},{"name":"Opacity TexCoords Transform","value":0},{"name":"Discard Transparent Pixels","value":0},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0},{"name":"Crop TexCoords","value":0},{"name":"billboard","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp2-12","objOut":"bp2-13"}]}],"objName":"Ops.Gl.Shader.BasicMaterial_v3"},{"id":"bp2-14","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"render","portOut":"Next","objIn":"bp2-13","objOut":"bp2-14"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp2-15","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Title","value":"Title header"}],"objName":"Ops.Ui.Area"},{"id":"bp2-16","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"render","portOut":"Next","objIn":"bp2-19","objOut":"bp2-16"},{"portIn":"Render","portOut":"Next","objIn":"bp2-24","objOut":"bp2-16"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp2-17","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"File","value":"assets/67fd43816897956cec9b25a6_house_logo_1_128x128.png","display":"file"},{"name":"Filter index","value":1},{"name":"Filter","value":"linear"},{"name":"Wrap index","value":0},{"name":"Wrap","value":"repeat"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":"0"},{"name":"Data Format index","value":3},{"name":"Data Format","value":"RGBA"},{"name":"Flip","value":0},{"name":"Pre Multiplied Alpha","value":0},{"name":"Active","value":1},{"name":"Save Memory","value":1},{"name":"Add Cachebuster","value":0}],"portsOut":[{"name":"Texture","links":[{"portIn":"texture","portOut":"Texture","objIn":"bp2-19","objOut":"bp2-17"}]},{"name":"Width","value":128},{"name":"Height","value":128},{"name":"Aspect Ratio","value":1},{"name":"Loaded","value":1},{"name":"Loading","value":0}],"objName":"Ops.Gl.Texture_v2"},{"id":"bp2-18","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"posX","value":0.08},{"name":"posY","value":0.45},{"name":"posZ","value":0},{"name":"scale","value":1},{"name":"rotX","value":0},{"name":"rotY","value":0},{"name":"rotZ","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp2-20","objOut":"bp2-18"}]}],"objName":"Ops.Gl.Matrix.Transform"},{"id":"bp2-19","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"r","value":0},{"name":"g","value":1},{"name":"b","value":0.6479998779296876},{"name":"colorizeTexture","value":1},{"name":"Vertex Colors","value":0},{"name":"Alpha Mask Source index","value":0},{"name":"Alpha Mask Source","value":"Luminance"},{"name":"Opacity TexCoords Transform","value":0},{"name":"Discard Transparent Pixels","value":0},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0},{"name":"Crop TexCoords","value":0},{"name":"billboard","value":0}],"portsOut":[{"name":"trigger","links":[{"portIn":"render","portOut":"trigger","objIn":"bp2-18","objOut":"bp2-19"}]}],"objName":"Ops.Gl.Shader.BasicMaterial_v3"},{"id":"bp2-20","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"render","title":"Trigger"},{"name":"Render Mesh","value":1,"title":"Render"},{"name":"width","value":1},{"name":"height","value":1},{"name":"pivot x index","value":0},{"name":"pivot x","value":"left"},{"name":"pivot y index","value":0},{"name":"pivot y","value":"top"},{"name":"axis index","value":0},{"name":"axis","value":"xy"},{"name":"Flip TexCoord X","value":0},{"name":"Flip TexCoord Y","value":1},{"name":"num columns","value":1},{"name":"num rows","value":1}],"objName":"Ops.Gl.Meshes.Rectangle_v4"},{"id":"bp2-21","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Title","value":"Pixelated house logo"}],"objName":"Ops.Ui.Area"},{"id":"bp2-22","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"number2","value":1}],"portsOut":[{"name":"result","links":[{"portIn":"a","portOut":"result","objIn":"bp2-19","objOut":"bp2-22"},{"portIn":"a","portOut":"result","objIn":"bp2-11","objOut":"bp2-22"},{"portIn":"a","portOut":"result","objIn":"bp2-6","objOut":"bp2-22"},{"portIn":"a","portOut":"result","objIn":"bp2-1","objOut":"bp2-22"}]}],"objName":"Ops.Math.Multiply"},{"id":"bp2-23","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"Next","links":[{"portIn":"exe","portOut":"Next","objIn":"bp2-0","objOut":"bp2-23"}]}],"objName":"Ops.Trigger.TriggerExtender"},{"id":"bp2-24","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Size index","value":2},{"name":"Size","value":"Manual"},{"name":"Width","value":128},{"name":"Height","value":128},{"name":"Filter index","value":1},{"name":"Filter","value":"linear"},{"name":"Wrap index","value":0},{"name":"Wrap","value":"clamp to edge"},{"name":"Anisotropic index","value":0},{"name":"Anisotropic","value":"0"},{"name":"Pixel Format index","value":4},{"name":"Pixel Format","value":"RGBA 8bit ubyte"},{"name":"Clear","value":1},{"name":"R","value":0},{"name":"G","value":0},{"name":"B","value":0},{"name":"A","value":0}],"portsOut":[{"name":"Next","links":[{"portIn":"Render","portOut":"Next","objIn":"bp2-26","objOut":"bp2-24"}]},{"name":"texture_out","links":[{"portIn":"textureOpacity","portOut":"texture_out","objIn":"bp2-19","objOut":"bp2-24"}]},{"name":"Aspect Ratio","value":1},{"name":"Texture Width","value":128},{"name":"Texture Height","value":128}],"objName":"Ops.Gl.ImageCompose.ImageCompose_v4"},{"id":"bp2-25","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Speed","value":0.8},{"name":"Play","value":1},{"name":"Sync to timeline","value":0}],"portsOut":[{"name":"Time","links":[{"portIn":"Z","portOut":"Time","objIn":"bp2-26","objOut":"bp2-25"}]}],"objName":"Ops.Anim.Timer_v2"},{"id":"bp2-26","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsIn":[{"name":"Blend Mode index","value":0},{"name":"Blend Mode","value":"normal"},{"name":"Alpha Mask index","value":0},{"name":"Alpha Mask","value":"Off"},{"name":"Amount","value":1},{"name":"Loop","value":0},{"name":"RGB","value":1},{"name":"Minimum value","value":0},{"name":"Maximum value","value":1},{"name":"Num X","value":32},{"name":"Num Y","value":32},{"name":"X","value":0},{"name":"Y","value":0},{"name":"Seed","value":0},{"name":"Centered","value":0}],"objName":"Ops.Gl.ImageCompose.Noise.PixelNoise_v3"},{"id":"bp2-27","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"portsOut":[{"name":"innerOut_t24fy9v2v","title":"number1","links":[{"portIn":"number1","portOut":"innerOut_t24fy9v2v","objIn":"bp2-22","objOut":"bp2-27"}]},{"name":"innerOut_5gqo44pfl","title":"Execute","links":[{"portIn":"Execute","portOut":"innerOut_5gqo44pfl","objIn":"bp2-23","objOut":"bp2-27"}]}],"objName":"Ops.Ui.SubPatchInput"},{"id":"bp2-28","uiAttribs":{"subPatch":"yhclvil3d"},"storage":{},"objName":"Ops.Ui.SubPatchOutput"}]}'};const r=e.inFloat("t24fy9v2v",1);r.setUiAttribs({title:"number1"});const a=e.inTrigger("5gqo44pfl");a.setUiAttribs({title:"Execute",display:"button"});e.initInnerPorts=function(t){for(let e=0;e<t.length;e++){if(t[e].innerInput){const n=t[e].outNumber("innerOut_t24fy9v2v");n.set(r.get());n.setUiAttribs({title:"number1"});r.on("change",(e,t)=>{n.set(e)});const i=t[e].outTrigger("innerOut_5gqo44pfl");i.setUiAttribs({title:"Execute"});a.onTriggered=()=>{i.trigger()}}if(t[e].innerOutput){}}};const i="bp2sub_"+e.id;new CABLES.SubPatchOp(e,{subId:i});t();function t(){if(!n||!n.subpatch_json)return;const t=JSON.parse(n.subpatch_json);CABLES.Patch.replaceOpIds(t,{parentSubPatchId:i,prefixHash:i,oldIdAsRef:true,doNotUnlinkLostLinks:true});for(let e=0;e<t.ops.length;e++){t.ops[e].uiAttribs.blueprintSubpatch2=true}e.loadDependencies(t,()=>{e.patch.deSerialize(t,{opsCreated:e.initInnerPorts});if(CABLES.UI)gui.savedState.setSaved("blueprintloaded",i);e.patch.emitEvent("subpatchExpose",i);e.setStorage({blueprintVer:2});e.patch.emitEvent("subpatchExpose",i)})}};Ops.User.thrane.Emeritus.IntroScreen.prototype=new CABLES.Op;CABLES.OPS["5ef38f06-693e-4816-9042-3f4bd6a7b160"]={f:Ops.User.thrane.Emeritus.IntroScreen,objName:"Ops.User.thrane.Emeritus.IntroScreen"};Ops.Trigger.RouteTrigger=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=24;const i=t.inTriggerButton("Execute"),r=t.inValueInt("Switch Value"),a=t.outTrigger("Next Trigger"),s=t.outNumber("Switched Value");const o=[];i.onTriggered=p;for(let e=0;e<n;e++){o[e]=t.outTrigger("Trigger "+e);o[e].onLinkChanged=g}const u=t.outTrigger("Default Trigger"),l=t.outNumber("Highest Index");function p(){const e=Math.round(r.get());if(e>=0&&e<n){s.set(e);o[e].trigger()}else{s.set(-1);u.trigger()}a.trigger()}function g(){let t=0;for(let e=0;e<o.length;e++)if(o[e]&&o[e].isLinked())t=e;l.set(t)}};Ops.Trigger.RouteTrigger.prototype=new CABLES.Op;CABLES.OPS["44ceb5d8-b040-4722-b189-a6fb8172517d"]={f:Ops.Trigger.RouteTrigger,objName:"Ops.Trigger.RouteTrigger"};Ops.Number.TriggerOnChangeNumber=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inFloat("Value"),i=e.outTrigger("Next"),r=e.outNumber("Number");n.onChange=function(){r.set(n.get());i.trigger()}};Ops.Number.TriggerOnChangeNumber.prototype=new CABLES.Op;CABLES.OPS["f5c8c433-ce13-49c4-9a33-74e98f110ed0"]={f:Ops.Number.TriggerOnChangeNumber,objName:"Ops.Number.TriggerOnChangeNumber"};Ops.Ui.SubPatchInput=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};t.innerInput=true;const n=t.inTriggerButton("Goto SubPatchOp");n.setUiAttribs({hidePort:true});n.onTriggered=()=>{const e=t.patch.getSubPatchOuterOp(t.uiAttribs.subPatch);gui.patchView.centerSelectOp(e.id)}};Ops.Ui.SubPatchInput.prototype=new CABLES.Op;CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};Ops.Ui.SubPatchOutput=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};e.innerOutput=true};Ops.Ui.SubPatchOutput.prototype=new CABLES.Op;CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};Ops.Trigger.Sequence=function(){CABLES.Op.apply(this,arguments);const a=this;const e=a.attachments={};const t=a.inTrigger("exe"),n=a.inTriggerButton("Clean up connections");a.setUiAttrib({resizable:true,resizableY:false,stretchPorts:true});const i=[],s=[],r=16;let o=null,u=[];t.onTriggered=g;n.onTriggered=m;n.setUiAttribs({hideParam:true,hidePort:true});for(let t=0;t<r;t++){const h=a.outTrigger("trigger "+t);s.push(h);h.onLinkChanged=p;if(t<r-1){let e=a.inTrigger("exe "+t);e.onTriggered=g;i.push(e)}}l();function l(){u.length=0;for(let e=0;e<s.length;e++)if(s[e].links.length>0)u.push(s[e])}function p(){l();clearTimeout(o);o=setTimeout(()=>{let t=false;for(let e=0;e<s.length;e++)if(s[e].links.length>1)t=true;n.setUiAttribs({hideParam:!t});if(a.isCurrentUiOp())a.refreshParams()},60)}function g(){for(let e=0;e<u.length;e++)u[e].trigger()}function m(){let i=0;for(let n=0;n<s.length;n++){let t=[];if(s[n].links.length>1)for(let e=1;e<s[n].links.length;e++){while(s[i].links.length>0)i++;t.push(s[n].links[e]);const r=s[n].links[e].getOtherPort(s[n]);a.patch.link(a,"trigger "+i,r.op,r.name);i++}for(let e=0;e<t.length;e++)t[e].remove()}p();l()}};Ops.Trigger.Sequence.prototype=new CABLES.Op;CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};Ops.Number.PreviousNumberStore=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("Value"),i=e.outNumber("Current Value"),r=e.outNumber("Previous Value");let a=0;n.onChange=function(){r.set(a);a=n.get();i.set(n.get())}};Ops.Number.PreviousNumberStore.prototype=new CABLES.Op;CABLES.OPS["01716872-67bd-4b31-a4a2-e0ccadf48411"]={f:Ops.Number.PreviousNumberStore,objName:"Ops.Number.PreviousNumberStore"};Ops.Anim.SimpleAnim=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("exe"),i=e.inTriggerButton("reset"),r=e.inTriggerButton("rewind"),a=e.inValueFloat("start",0),s=e.inValueFloat("end",1),o=e.inValueFloat("duration",.5),u=e.inValueBool("loop"),l=e.inValueBool("Wait for Reset",true),p=e.outTrigger("Next"),g=e.outNumber("result"),m=e.outNumber("finished"),h=e.outTrigger("Finished Trigger");const c=new CABLES.Anim;let d=false;c.createPort(e,"easing",v);let f=-1;u.onChange=v;v();o.onChange=v;function v(){if(c.keys.length!=3){c.setValue(0,0);c.setValue(1,0);c.setValue(2,0)}c.keys[0].time=CABLES.now()/1e3;c.keys[0].value=a.get();if(c.defaultEasing!=f)c.keys[0].setEasing(c.defaultEasing);c.keys[1].time=o.get()+CABLES.now()/1e3;c.keys[1].value=s.get();if(c.defaultEasing!=f)c.keys[1].setEasing(c.defaultEasing);c.loop=u.get();if(c.loop){}else{c.keys[2].time=c.keys[1].time;c.keys[2].value=c.keys[1].value;if(c.defaultEasing!=f)c.keys[2].setEasing(c.defaultEasing)}m.set(false);f=c.defaultEasing}i.onTriggered=function(){d=true;v()};r.onTriggered=function(){c.keys[0].time=CABLES.now()/1e3;c.keys[0].value=a.get();c.keys[1].time=CABLES.now()/1e3;c.keys[1].value=a.get();c.keys[2].time=CABLES.now()/1e3;c.keys[2].value=a.get();g.set(a.get())};n.onTriggered=function(){if(l.get()&&!d){g.set(a.get());return}let e=CABLES.now()/1e3;let t=c.getValue(e);g.set(t);if(c.hasEnded(e)){if(!m.get())h.trigger();m.set(true)}p.trigger()}};Ops.Anim.SimpleAnim.prototype=new CABLES.Op;CABLES.OPS["5b244b6e-c505-4743-b2cc-8119ef720028"]={f:Ops.Anim.SimpleAnim,objName:"Ops.Anim.SimpleAnim"};Ops.Ui.VizNumber=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const i=n.inFloat("Number",0);const r=n.outNumber("Result");n.setUiAttrib({widthOnlyGrow:true});i.onChange=t;t();function t(){let t=i.get();if(n.patch.isEditorMode()){let e="";if(t===null)e="null";else if(t===undefined)e="undefined";else{e=""+Math.round(t*1e4)/1e4;if(e[0]!="-")e=" "+e}n.setUiAttribs({extendTitle:e})}r.set(t)}};Ops.Ui.VizNumber.prototype=new CABLES.Op;CABLES.OPS["2b60d12d-2884-4ad0-bda4-0caeb6882f5c"]={f:Ops.Ui.VizNumber,objName:"Ops.Ui.VizNumber"};Ops.Trigger.TriggerNumber=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Set"),i=e.inValueFloat("Number"),r=e.outTrigger("Next"),a=e.outNumber("Out Value");a.changeAlways=true;n.onTriggered=function(){a.set(i.get());r.trigger()}};Ops.Trigger.TriggerNumber.prototype=new CABLES.Op;CABLES.OPS["9989b1c0-1073-4d5f-bfa0-36dd98b66e27"]={f:Ops.Trigger.TriggerNumber,objName:"Ops.Trigger.TriggerNumber"};Ops.Gl.ClearDepth=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("render"),i=e.outTrigger("trigger"),r=e.patch.cgl;n.onTriggered=function(){r.gl.clear(r.gl.DEPTH_BUFFER_BIT);i.trigger()}};Ops.Gl.ClearDepth.prototype=new CABLES.Op;CABLES.OPS["9e8a4b73-4ba7-4c4f-b266-81c5f9db9b7a"]={f:Ops.Gl.ClearDepth,objName:"Ops.Gl.ClearDepth"};Ops.Number.Number=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("value"),i=e.outNumber("result");n.onChange=r;function r(){i.set(Number(n.get()))}};Ops.Number.Number.prototype=new CABLES.Op;CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};Ops.Boolean.IfTrueThen_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("exe"),i=e.inValueBool("boolean",false),r=e.outTrigger("then"),a=e.outTrigger("else");n.onTriggered=s;function s(){if(i.get())r.trigger();else a.trigger()}};Ops.Boolean.IfTrueThen_v2.prototype=new CABLES.Op;CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"]={f:Ops.Boolean.IfTrueThen_v2,objName:"Ops.Boolean.IfTrueThen_v2"};Ops.Gl.Meshes.TextMesh_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={textmesh_frag:"{{MODULES_HEAD}}\n\n#define INSTANCING\n\nUNI sampler2D tex;\n#ifdef DO_MULTEX\n    UNI sampler2D texMul;\n#endif\n#ifdef DO_MULTEX_MASK\n    UNI sampler2D texMulMask;\n#endif\nIN vec2 texCoord;\nIN vec2 texPos;\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\nflat IN float frag_instIndex;\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=texture(tex,texCoord);\n    col.a=col.r;\n    col.r*=r;\n    col.g*=g;\n    col.b*=b;\n    col*=a;\n\n    if(col.a==0.0)discard;\n\n    #ifdef DO_MULTEX\n        col*=texture(texMul,texPos);\n    #endif\n\n    #ifdef DO_MULTEX_MASK\n        col*=texture(texMulMask,texPos).r;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    outColor=col;\n}",textmesh_vert:"{{MODULES_HEAD}}\n\nUNI sampler2D tex;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nUNI float scale;\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN mat4 instMat;\nIN vec2 attrTexOffsets;\nIN vec2 attrTexSize;\nIN vec2 attrTexPos;\nIN float attrVertIndex;\nIN float instanceIndex;\nflat OUT float frag_instIndex;\n\nOUT vec2 texPos;\n\nOUT vec2 texCoord;\nOUT vec4 modelPos;\n\nvoid main()\n{\n\n    texCoord=(attrTexCoord*(attrTexSize)) + attrTexOffsets;\n    mat4 instMVMat=instMat;\n    instMVMat[3][0]*=scale;\n\n    texPos=attrTexPos;\n\n    vec4 pos=vec4( vPosition.x*(attrTexSize.x/attrTexSize.y)*scale,vPosition.y*scale,vPosition.z*scale, 1. );\n\n    mat4 mvMatrix=viewMatrix * modelMatrix * instMVMat;\n    frag_instIndex=instanceIndex;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n\n"};const n=t.inTrigger("Render"),b=t.inString("Text","cables"),i=t.inFloat("Scale Text",1),r=t.inValueFloat("Scale",1),p=t.inString("Font","Arial"),O=t.inValueSelect("align",["left","center","right"],"center"),a=t.inValueSelect("vertical align",["Top","Middle","Bottom"],"Middle"),_=t.inValueFloat("Line Height",1),I=t.inValueFloat("Letter Spacing"),o=t.inSwitch("filter",["nearest","linear","mipmap"],"mipmap"),u=t.inSwitch("Anisotropic",[0,1,2,4,8,16],0),s=t.inTexture("Texture Color"),l=t.inTexture("Texture Mask"),U=t.outTrigger("Next"),A=t.outTexture("texture"),V=t.outNumber("Total Lines",0),w=t.outNumber("Width",0),B=t.outBoolNum("Font Available",0);const x=t.patch.cgl;const g=vec3.create();vec3.set(g,1,1,1);t.toWorkPortsNeedToBeLinked(n);t.setPortGroup("Masking",[s,l]);r.setUiAttribs({title:"Line Scale"});A.setUiAttribs({hidePort:true});const m=1024;let h=false;let c=true;O.onChange=b.onChange=_.onChange=G;function G(){c=true}let d=null;CABLES.OpTextureMeshCanvas={};let f=0;const D=null;let T=null;let y=true;let S=true;i.onChange=()=>{vec3.set(g,i.get(),i.get(),i.get())};u.onChange=o.onChange=()=>{N().texture=null;S=true};l.onChange=s.onChange=function(){j.toggleDefine("DO_MULTEX",s.get());j.toggleDefine("DO_MULTEX_MASK",l.get())};A.set(null);p.onChange=function(){S=true;y=true;v()};t.patch.on("fontLoaded",e=>{if(e==p.get()){S=true;y=true}});function v(){const e=h;try{h=document.fonts.check('20px "'+p.get()+'"')}catch(e){t.logError(e)}if(!e&&h){B.set(true);S=true;y=true}if(!h)setTimeout(v,250)}a.onChange=function(){if(a.get()=="Middle")f=0;else if(a.get()=="Top")f=1;else if(a.get()=="Bottom")f=2};function N(){d=""+p.get();if(CABLES.OpTextureMeshCanvas.hasOwnProperty(d))return CABLES.OpTextureMeshCanvas[d];const e=document.createElement("canvas");e.dataset.font=p.get();e.id="texturetext_"+CABLES.generateUUID();e.style.display="none";const t=document.getElementsByTagName("body")[0];t.appendChild(e);const n=e.getContext("2d");CABLES.OpTextureMeshCanvas[d]={ctx:n,canvas:e,chars:{},characters:"",fontSize:320};return CABLES.OpTextureMeshCanvas[d]}t.onDelete=function(){if(d&&CABLES.OpTextureMeshCanvas[d])CABLES.OpTextureMeshCanvas[d].canvas.remove()};const j=new CGL.Shader(x,"TextMesh",this);j.setSource(e.textmesh_vert,e.textmesh_frag);const F=new CGL.Uniform(j,"t","tex",0);const z=new CGL.Uniform(j,"t","texMul",1);const X=new CGL.Uniform(j,"t","texMulMask",2);const q=new CGL.Uniform(j,"f","scale",r);const C=t.inValueSlider("r",1),E=t.inValueSlider("g",1),P=t.inValueSlider("b",1),Y=t.inValueSlider("a",1),H=new CGL.Uniform(j,"f","r",C),W=new CGL.Uniform(j,"f","g",E),Z=new CGL.Uniform(j,"f","b",P),K=new CGL.Uniform(j,"f","a",Y);C.setUiAttribs({colorPick:true});t.setPortGroup("Display",[r,p]);t.setPortGroup("Alignment",[O,a]);t.setPortGroup("Color",[C,E,P,Y]);let L=0;const k=vec3.create();let Q=-1;let R=false;n.onTriggered=function(){if(c){$();c=false}const e=N();if(e.lastChange!=Q){y=true;Q=e.lastChange}if(S)J();if(y)$();if(T&&T.numInstances>0){x.pushBlendMode(CGL.BLEND_NORMAL,true);x.pushShader(j);x.setTexture(0,A.get().tex);const t=s.get();if(t)x.setTexture(1,t.tex);const n=l.get();if(n)x.setTexture(2,n.tex);if(f===2)vec3.set(k,0,L,0);else if(f===1)vec3.set(k,0,0,0);else if(f===0)vec3.set(k,0,L/2,0);k[1]-=_.get();x.pushModelMatrix();mat4.translate(x.mMatrix,x.mMatrix,k);mat4.scale(x.mMatrix,x.mMatrix,g);if(!R)T.render(x.getShader());x.popModelMatrix();x.setTexture(0,null);x.popShader();x.popBlendMode()}U.trigger()};I.onChange=function(){y=true};function $(){const e=String(b.get()+"");if(!A.get())return;const a=N();if(!a.geom){a.geom=new CGL.Geometry("textmesh");a.geom.vertices=[1,1,0,0,1,0,1,0,0,0,0,0];a.geom.texCoords=new Float32Array([1,1,0,1,1,0,0,0]);a.geom.verticesIndices=[0,1,2,2,1,3]}if(!T)T=new CGL.Mesh(x,a.geom);const s=e.split("\n");V.set(s.length);const o=[];const u=[];const l=[];const p=[];const g=mat4.create();let m=0;let h=0;S=false;for(let r=0;r<s.length;r++){const c=s[r];const d=c.length;let t=0;let n=0;let i=0;for(let e=0;e<d;e++){const f=c.substring(e,e+1);const v=a.chars[String(f)];if(v){i+=v.texCoordWidth/v.texCoordHeight;i+=I.get()}}i-=I.get();L=0;if(O.get()=="left")n=0;else if(O.get()=="right")n=i;else if(O.get()=="center")n=i/2;L=(r+1)*_.get();for(let e=0;e<d;e++){const f=c.substring(e,e+1);const v=a.chars[String(f)];if(!v){S=true;return}else{p.push(t/i*.99+.005,(1-r/(s.length-1))*.99+.005);u.push(v.texCoordX,1-v.texCoordY-v.texCoordHeight);l.push(v.texCoordWidth,v.texCoordHeight);mat4.identity(g);mat4.translate(g,g,[t-n,0-r*_.get(),0]);t+=v.texCoordWidth/v.texCoordHeight+I.get();h=Math.max(h,t-n);o.push(Array.prototype.slice.call(g));m++}}}const t=[].concat.apply([],o);R=false;if(t.length==0)R=true;const n=t.length/16;T.setNumInstances(n);if(T.numInstances==0){R=true;return}w.set(h*r.get());T.setAttribute("instMat",new Float32Array(t),16,{instanced:true});T.setAttribute("attrTexOffsets",new Float32Array(u),2,{instanced:true});T.setAttribute("attrTexSize",new Float32Array(l),2,{instanced:true});T.setAttribute("attrTexPos",new Float32Array(p),2,{instanced:true});y=false;if(S)J()}function M(t,n){const i=N();if(!n)i.chars={};const r=i.ctx;r.font=t+"px "+p.get();r.textAlign="left";let a=0;let s=0;const o=t*1.4;const e={fits:true};for(let e=0;e<i.characters.length;e++){const u=String(i.characters.substring(e,e+1));const l=r.measureText(u).width;if(s+l>=m){a+=o+2;s=0}if(!n){i.chars[u]={str:u,texCoordX:s/m,texCoordY:a/m,texCoordWidth:l/m,texCoordHeight:o/m};r.fillText(u,s,a+t)}s+=l+12}if(a>m-o){e.fits=false}e.spaceLeft=m-a;return e}function J(){let e=CGL.Texture.FILTER_LINEAR;if(o.get()=="nearest")e=CGL.Texture.FILTER_NEAREST;if(o.get()=="mipmap")e=CGL.Texture.FILTER_MIPMAP;const t=N();let n=String(b.get());if(n==null||n==undefined)n="";for(let e=0;e<n.length;e++){const s=n.substring(e,e+1);if(t.characters.indexOf(s)==-1){t.characters+=s;S=true}}const i=t.ctx;t.canvas.width=t.canvas.height=m;if(!t.texture)t.texture=CGL.Texture.createFromImage(x,t.canvas,{filter:e,anisotropic:parseFloat(u.get())});t.texture.setSize(m,m);i.fillStyle="transparent";i.clearRect(0,0,m,m);i.fillStyle="rgba(255,255,255,255)";let r=t.fontSize+40;let a=M(r,true);while(!a.fits){r-=5;a=M(r,true)}M(r,false);i.restore();t.texture.initTexture(t.canvas,e);t.texture.unpackAlpha=true;A.set(t.texture);t.lastChange=CABLES.now();y=true;S=false}};Ops.Gl.Meshes.TextMesh_v2.prototype=new CABLES.Op;CABLES.OPS["2390f6b3-2122-412e-8c8d-5c2f574e8bd1"]={f:Ops.Gl.Meshes.TextMesh_v2,objName:"Ops.Gl.Meshes.TextMesh_v2"};Ops.Gl.Matrix.Transform=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inTrigger("render"),i=n.inValue("posX",0),r=n.inValue("posY",0),a=n.inValue("posZ",0),s=n.inValue("scale",1),o=n.inValue("rotX",0),u=n.inValue("rotY",0),l=n.inValue("rotZ",0),p=n.outTrigger("trigger");n.setPortGroup("Rotation",[o,u,l]);n.setPortGroup("Position",[i,r,a]);n.setPortGroup("Scale",[s]);n.setUiAxisPorts(i,r,a);n.toWorkPortsNeedToBeLinked(t,p);const g=vec3.create();const m=vec3.create();const h=mat4.create();mat4.identity(h);let c=false,d=false,f=true,v=true,b=true;o.onChange=u.onChange=l.onChange=T;i.onChange=r.onChange=a.onChange=A;s.onChange=x;t.onTriggered=function(){let e=false;if(f){_();e=true}if(v){I();e=true}if(b)e=true;if(e)O();const t=n.patch.cg||n.patch.cgl;t.pushModelMatrix();mat4.multiply(t.mMatrix,t.mMatrix,h);p.trigger();t.popModelMatrix();if(CABLES.UI){if(!i.isLinked()&&!r.isLinked()&&!a.isLinked()){gui.setTransform(n.id,i.get(),r.get(),a.get());if(n.isCurrentUiOp())gui.setTransformGizmo({posX:i,posY:r,posZ:a})}}};function O(){mat4.identity(h);if(d)mat4.translate(h,h,g);if(o.get()!==0)mat4.rotateX(h,h,o.get()*CGL.DEG2RAD);if(u.get()!==0)mat4.rotateY(h,h,u.get()*CGL.DEG2RAD);if(l.get()!==0)mat4.rotateZ(h,h,l.get()*CGL.DEG2RAD);if(c)mat4.scale(h,h,m);b=false}function _(){d=false;if(i.get()!==0||r.get()!==0||a.get()!==0)d=true;vec3.set(g,i.get(),r.get(),a.get());f=false}function I(){c=true;vec3.set(m,s.get(),s.get(),s.get());v=false}function A(){f=true}function x(){v=true}function T(){b=true}O()};Ops.Gl.Matrix.Transform.prototype=new CABLES.Op;CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};Ops.Gl.Shader.BasicMaterial_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={basicmaterial_frag:"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef VERTEX_COLORS\nIN vec4 vertCol;\n#endif\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_IR\n                col.a*=1.0-texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_IALPHA\n                col.a*=1.0-texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col*=vertCol;\n    #endif\n\n    outColor = col;\n}\n",basicmaterial_vert:"\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n#ifdef VERTEX_COLORS\n    in vec4 attrVertColor;\n    out vec4 vertCol;\n\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 modelViewMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        vertCol=attrVertColor;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       modelViewMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * modelViewMatrix * vec4((\n           position.x * vec3(\n               modelViewMatrix[0][0],\n               modelViewMatrix[1][0],\n               modelViewMatrix[2][0] ) +\n           position.y * vec3(\n               modelViewMatrix[0][1],\n               modelViewMatrix[1][1],\n               modelViewMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        modelViewMatrix=viewMatrix * mMatrix;\n\n        {{MODULE_VERTEX_MODELVIEW}}\n\n    #endif\n\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * modelViewMatrix * pos;\n    #endif\n}\n"};const n=e.inTrigger("render");const i=e.outTrigger("trigger");const r=e.outObject("shader",null,"shader");r.ignoreValueSerialize=true;e.toWorkPortsNeedToBeLinked(n);e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);const a=e.patch.cgl;const s=new CGL.Shader(a,"basicmaterialnew",this);s.addAttribute({type:"vec3",name:"vPosition"});s.addAttribute({type:"vec2",name:"attrTexCoord"});s.addAttribute({type:"vec3",name:"attrVertNormal",nameFrag:"norm"});s.addAttribute({type:"float",name:"attrVertIndex"});s.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG","MODULE_VERTEX_MODELVIEW"]);s.setSource(t.basicmaterial_vert,t.basicmaterial_frag);r.setRef(s);n.onTriggered=N;const o=e.inValueSlider("r",Math.random());const u=e.inValueSlider("g",Math.random());const l=e.inValueSlider("b",Math.random());const p=e.inValueSlider("a",1);o.setUiAttribs({colorPick:true});const g=s.addUniformFrag("4f","color",o,u,l,p);s.uniformColorDiffuse=g;const m=e.inTexture("texture");let h=null;m.onChange=C;const c=e.inValueBool("colorizeTexture",false);const d=e.inValueBool("Vertex Colors",false);const f=e.inTexture("textureOpacity");let v=null;const b=e.inSwitch("Alpha Mask Source",["Luminance","R","G","B","A","1-A","1-R"],"Luminance");b.setUiAttribs({greyout:true});f.onChange=j;const O=e.inValueBool("Opacity TexCoords Transform",false);const _=e.inValueBool("Discard Transparent Pixels");const I=e.inValue("diffuseRepeatX",1),A=e.inValue("diffuseRepeatY",1),x=e.inValue("Tex Offset X",0),T=e.inValue("Tex Offset Y",0),y=e.inBool("Crop TexCoords",false);s.addUniformFrag("f","diffuseRepeatX",I);s.addUniformFrag("f","diffuseRepeatY",A);s.addUniformFrag("f","texOffsetX",x);s.addUniformFrag("f","texOffsetY",T);const S=e.inValueBool("billboard",false);b.onChange=S.onChange=_.onChange=O.onChange=y.onChange=d.onChange=c.onChange=P;e.setPortGroup("Color",[o,u,l,p]);e.setPortGroup("Color Texture",[m,d,c]);e.setPortGroup("Opacity",[f,b,_,O]);e.setPortGroup("Texture Transform",[I,A,x,T,y]);j();C();e.preRender=function(){s.bind();N()};function N(){if(!s)return;a.pushShader(s);s.popTextures();if(h&&m.get())s.pushTexture(h,m.get());if(v&&f.get())s.pushTexture(v,f.get());i.trigger();a.popShader()}function j(){if(f.get()){if(v!==null)return;s.removeUniform("texOpacity");s.define("HAS_TEXTURE_OPACITY");if(!v)v=new CGL.Uniform(s,"t","texOpacity")}else{s.removeUniform("texOpacity");s.removeDefine("HAS_TEXTURE_OPACITY");v=null}P()}function C(){if(m.get()){if(!s.hasDefine("HAS_TEXTURE_DIFFUSE"))s.define("HAS_TEXTURE_DIFFUSE");if(!h)h=new CGL.Uniform(s,"t","texDiffuse")}else{s.removeUniform("texDiffuse");s.removeDefine("HAS_TEXTURE_DIFFUSE");h=null}E()}function E(){const e=m.isLinked()||f.isLinked();I.setUiAttribs({greyout:!e});A.setUiAttribs({greyout:!e});x.setUiAttribs({greyout:!e});T.setUiAttribs({greyout:!e});c.setUiAttribs({greyout:!e});b.setUiAttribs({greyout:!f.get()});O.setUiAttribs({greyout:!f.get()});let t=true;t=m.get()&&!c.get();o.setUiAttribs({greyout:t});u.setUiAttribs({greyout:t});l.setUiAttribs({greyout:t})}function P(){s.toggleDefine("VERTEX_COLORS",d.get());s.toggleDefine("CROP_TEXCOORDS",y.get());s.toggleDefine("COLORIZE_TEXTURE",c.get());s.toggleDefine("TRANSFORMALPHATEXCOORDS",O.get());s.toggleDefine("DISCARDTRANS",_.get());s.toggleDefine("BILLBOARD",S.get());s.toggleDefine("ALPHA_MASK_ALPHA",b.get()=="A");s.toggleDefine("ALPHA_MASK_IALPHA",b.get()=="1-A");s.toggleDefine("ALPHA_MASK_IR",b.get()=="1-R");s.toggleDefine("ALPHA_MASK_LUMI",b.get()=="Luminance");s.toggleDefine("ALPHA_MASK_R",b.get()=="R");s.toggleDefine("ALPHA_MASK_G",b.get()=="G");s.toggleDefine("ALPHA_MASK_B",b.get()=="B");E()}};Ops.Gl.Shader.BasicMaterial_v3.prototype=new CABLES.Op;CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};Ops.Trigger.TriggerExtender=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Execute"),i=e.outTrigger("Next");n.onTriggered=function(){i.trigger()}};Ops.Trigger.TriggerExtender.prototype=new CABLES.Op;CABLES.OPS["7ef594f3-4907-47b0-a2d3-9854eda1679d"]={f:Ops.Trigger.TriggerExtender,objName:"Ops.Trigger.TriggerExtender"};Ops.Ui.Area=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inString("Title",""),i=e.inTriggerButton("Delete");n.setUiAttribs({hidePort:true});e.setUiAttrib({hasArea:true});e.init=n.onChange=e.onLoaded=r;r();function r(){if(CABLES.UI){gui.savedState.setUnSaved("areaOp",e.getSubPatch());e.uiAttr({comment_title:n.get()||" "});e.name=n.get()}}i.onTriggered=()=>{e.patch.deleteOp(e.id)}};Ops.Ui.Area.prototype=new CABLES.Op;CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};Ops.Devices.Keyboard.CursorKeys=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueBool("canvas only",true),i=e.inValueBool("Cursor Keys",true),r=e.inValueBool("WASD",true),a=e.inBool("Active",true),s=e.outNumber("Degree"),o=e.outBoolNum("Up"),u=e.outTrigger("Up Pressed"),l=e.outBoolNum("Down"),p=e.outTrigger("Down Pressed"),g=e.outBoolNum("Left"),m=e.outTrigger("Left Pressed"),h=e.outBoolNum("Right"),c=e.outTrigger("Right Pressed"),d=e.outNumber("Any Button Pressed");const f=e.patch.cgl;function v(e){if(r.get()){if(e.keyCode==87){o.set(true);u.trigger()}if(e.keyCode==83){l.set(true);p.trigger()}if(e.keyCode==65){g.set(true);m.trigger()}if(e.keyCode==68){h.set(true);c.trigger()}}if(i.get()){if(e.keyCode==38){o.set(true);u.trigger()}if(e.keyCode==40){l.set(true);p.trigger()}if(e.keyCode==37){g.set(true);m.trigger()}if(e.keyCode==39){h.set(true);c.trigger()}}b();d.set(o.get()||l.get()||g.get()||h.get())}function b(){let e=0;if(o.get())e=360;if(h.get())e=90;if(l.get())e=180;if(g.get())e=270;if(o.get()&&h.get())e=360+45;if(l.get()&&h.get())e=90+45;if(l.get()&&g.get())e=180+45;if(o.get()&&g.get())e=270+45;s.set(e)}function O(e){if(r.get()){if(e.keyCode==87){o.set(false);u.trigger()}if(e.keyCode==83){l.set(false);p.trigger()}if(e.keyCode==65){g.set(false);m.trigger()}if(e.keyCode==68){h.set(false);c.trigger()}}if(i.get()){if(e.keyCode==38){o.set(false);u.trigger()}if(e.keyCode==40){l.set(false);p.trigger()}if(e.keyCode==37){g.set(false);m.trigger()}if(e.keyCode==39){h.set(false);c.trigger()}}b();d.set(o.get()||l.get()||g.get()||h.get())}e.onDelete=function(){f.canvas.removeEventListener("keyup",O,false);f.canvas.removeEventListener("keydown",v,false);document.removeEventListener("keyup",O,false);document.removeEventListener("keydown",v,false)};function _(){if(n.get())x();else T()}function I(){o.set(false);l.set(false);g.set(false);h.set(false)}a.onChange=()=>{o.set(false);l.set(false);g.set(false);h.set(false);A();if(a.get())_()};function A(){f.canvas.removeEventListener("blur",I);document.removeEventListener("keydown",v,false);document.removeEventListener("keyup",O,false);f.canvas.removeEventListener("keydown",v,false);f.canvas.removeEventListener("keyup",O,false)}function x(){f.canvas.addEventListener("blur",I);f.canvas.addEventListener("keydown",v,false);f.canvas.addEventListener("keyup",O,false)}function T(){document.addEventListener("keydown",v,false);document.addEventListener("keyup",O,false)}n.onChange=function(){A();_()};n.set(true);x()};Ops.Devices.Keyboard.CursorKeys.prototype=new CABLES.Op;CABLES.OPS["65930ca9-c923-453f-b8c4-144eda13fa0a"]={f:Ops.Devices.Keyboard.CursorKeys,objName:"Ops.Devices.Keyboard.CursorKeys"};Ops.Math.Incrementor=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Increment"),i=e.inTriggerButton("Decrement"),r=e.inBool("Limit",false),a=e.inValueInt("Length"),s=e.inSwitch("Mode",["Rewind","Stop at Max"],"Rewind"),o=e.inValueInt("Default",0),u=e.inTriggerButton("Reset"),l=e.outTrigger("Changed"),p=e.outNumber("Value"),g=e.outTrigger("Restarted");const m=0;const h=1;p.ignoreValueSerialize=true;a.set(10);let c=0;let d=m;p.set(0);a.onTriggered=u;o.onChange=v;u.onTriggered=v;r.onChange=f;f();s.onChange=()=>{if(s.get()=="Rewind"){d=m}if(s.get()=="Stop at Max"){d=h}};function f(){a.setUiAttribs({greyout:!r.get()});s.setUiAttribs({greyout:!r.get()})}function v(){p.set(null);c=o.get();p.set(c);g.trigger()}i.onTriggered=function(){c--;if(r.get()){if(d==m&&c<0)c=a.get()-1;if(d==h&&c<0)c=0}p.set(c);l.trigger()};n.onTriggered=function(){c++;if(r.get()){if(d==m&&c>=a.get()){c=0;g.trigger()}if(d==h&&c>=a.get())c=a.get()-1}p.set(c);l.trigger()}};Ops.Math.Incrementor.prototype=new CABLES.Op;CABLES.OPS["45cc0011-ada8-4423-8f5b-39a3810b8389"]={f:Ops.Math.Incrementor,objName:"Ops.Math.Incrementor"};Ops.Trigger.DelayedTrigger=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("exe"),i=e.inValueFloat("delay",1),r=e.inTriggerButton("Cancel"),a=e.outTrigger("next"),s=e.outBool("Delaying");let o=null;r.onTriggered=function(){if(o)clearTimeout(o);o=null};n.onTriggered=function(){s.set(true);if(o)clearTimeout(o);o=setTimeout(function(){s.set(false);o=null;a.trigger()},i.get()*1e3)}};Ops.Trigger.DelayedTrigger.prototype=new CABLES.Op;CABLES.OPS["f4ff66b0-8500-46f7-9117-832aea0c2750"]={f:Ops.Trigger.DelayedTrigger,objName:"Ops.Trigger.DelayedTrigger"};Ops.Gl.ImageCompose.ImageCompose_v4=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={imgcomp_frag:"IN vec2 texCoord;\nUNI vec4 bgColor;\nUNI sampler2D tex;\n#ifdef USE_UVTEX\nUNI sampler2D UVTex;\n#endif\n\nvoid main()\n{\n\n    #ifndef USE_TEX\n        outColor=bgColor;\n    #endif\n    #ifdef USE_TEX\n        #ifndef USE_UVTEX\n        outColor=texture(tex,texCoord);\n        #else\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\n        #endif\n    #endif\n\n\n\n}\n"};const t=n.patch.cgl,i=n.inTrigger("Render"),r=n.inTexture("Base Texture"),a=n.inTexture("UV Texture"),s=n.inSwitch("Size",["Auto","Canvas","Manual"],"Auto"),o=n.inValueInt("Width",640),u=n.inValueInt("Height",480),l=n.inSwitch("Filter",["nearest","linear","mipmap"],"linear"),p=n.inValueSelect("Wrap",["clamp to edge","repeat","mirrored repeat"],"repeat"),g=n.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),m=n.inDropDown("Pixel Format",CGL.Texture.PIXELFORMATS,CGL.Texture.PFORMATSTR_RGBA8UB),h=n.inBool("Clear",true),c=n.inValueSlider("R",0),d=n.inValueSlider("G",0),f=n.inValueSlider("B",0),v=n.inValueSlider("A",0),b=n.outTrigger("Next"),O=n.outTexture("texture_out",CGL.Texture.getEmptyTexture(t)),_=n.outNumber("Aspect Ratio"),M=n.outNumber("Texture Width"),U=n.outNumber("Texture Height");n.setPortGroup("Texture Size",[s,o,u]);n.setPortGroup("Texture Parameters",[p,g,l,m]);c.setUiAttribs({colorPick:true});n.setPortGroup("Color",[c,d,f,v,h]);n.toWorkPortsNeedToBeLinked(i);const V=[0,0,0,0];let I=null;let A=null;let x=true;let w=false;let T=null;let B=null;let G=null;let D=null;p.onChange=l.onChange=g.onChange=m.onChange=F;r.onLinkChanged=h.onChange=s.onChange=a.onChange=L;i.onTriggered=n.preRender=R;L();function y(){if(I)I.delete();if(A)A.delete();A=null;I=new CGL.TextureEffect(t,{isFloatingPointTexture:CGL.Texture.isPixelFormatFloat(m.get()),name:n.name});const e=Math.min(t.maxAnisotropic,parseFloat(g.get()));A=new CGL.Texture(t,{anisotropic:e,name:"image_compose_v2_"+n.id,pixelFormat:m.get(),filter:S(),wrap:N(),width:j(),height:C()});I.setSourceTexture(A);M.set(j());U.set(C());_.set(j()/C());O.set(CGL.Texture.getEmptyTexture(t));x=false;L()}function S(){if(l.get()=="nearest")return CGL.Texture.FILTER_NEAREST;else if(l.get()=="linear")return CGL.Texture.FILTER_LINEAR;else if(l.get()=="mipmap")return CGL.Texture.FILTER_MIPMAP}function N(){if(p.get()=="repeat")return CGL.Texture.WRAP_REPEAT;else if(p.get()=="mirrored repeat")return CGL.Texture.WRAP_MIRRORED_REPEAT;else if(p.get()=="clamp to edge")return CGL.Texture.WRAP_CLAMP_TO_EDGE}function j(){let e=0;if(r.get()&&s.get()=="Auto")e=r.get().width;else if(s.get()=="Auto"||s.get()=="Canvas")e=t.canvasWidth;else if(s.get()=="ViewPort")e=t.getViewPort()[2];else e=Math.ceil(o.get());return n.patch.cgl.checkTextureSize(e)}function C(){let e=0;if(r.get()&&s.get()=="Auto")e=r.get().height;else if(s.get()=="Auto"||s.get()=="Canvas")e=t.canvasHeight;else if(s.get()=="ViewPort")e=t.getViewPort()[3];else e=Math.ceil(u.get());return n.patch.cgl.checkTextureSize(e)}function F(){x=true}function z(){if((j()!=A.width||C()!=A.height||A.pixelFormat!=m.get()||A.filter!=S()||A.wrap!=N())&&(j()!==0&&C()!==0)){y();I.setSourceTexture(A);O.set(CGL.Texture.getEmptyTexture(t));O.set(A);E();k()}}function E(){let e=null;if(s.get()=="Manual"){e=null}else if(s.get()=="Auto"){if(r.get())e="Input Texture";else e="Canvas Size";e+=": "+j()+" x "+C()}let t=false;t=s.uiAttribs.info!=e;s.setUiAttribs({info:e});if(t)n.refreshParams()}function P(){if(T)T.toggleDefine("USE_TEX",r.isLinked()||!h.get());if(T)T.toggleDefine("USE_UVTEX",a.isLinked())}function L(){g.setUiAttribs({greyout:S()!=CGL.Texture.FILTER_MIPMAP});c.setUiAttribs({greyout:r.isLinked()});f.setUiAttribs({greyout:r.isLinked()});d.setUiAttribs({greyout:r.isLinked()});v.setUiAttribs({greyout:r.isLinked()});h.setUiAttribs({greyout:r.isLinked()});o.setUiAttribs({greyout:s.get()!="Manual"});u.setUiAttribs({greyout:s.get()!="Manual"});if(A)if(CGL.Texture.isPixelFormatFloat(m.get())&&S()==CGL.Texture.FILTER_MIPMAP)n.setUiError("fpmipmap","Don't use mipmap and 32bit at the same time, many systems do not support this.");else n.setUiError("fpmipmap",null);E();P();k()}function k(){if(A)if(r.isLinked()&&r.get()&&A.isFloatingPoint()!=r.get().isFloatingPoint())n.setUiError("textypediff","Warning: Mixing floating point and non floating point texture can result in data/precision loss",1);else n.setUiError("textypediff",null)}n.preRender=()=>{R()};function X(){if(!T){T=new CGL.Shader(t,"copytextureshader");T.setSource(T.getDefaultVertexShader(),e.imgcomp_frag);B=new CGL.Uniform(T,"t","tex",0);G=new CGL.Uniform(T,"t","UVTex",1);D=new CGL.Uniform(T,"4f","bgColor",c,d,f,v);P()}t.pushShader(T);t.currentTextureEffect.bind();if(r.get())t.setTexture(0,r.get().tex);else if(!h.get()&&O.get())t.setTexture(0,O.get().tex);if(a.get())t.setTexture(1,a.get().tex);t.currentTextureEffect.finish();t.popShader()}function R(){if(!I||x)y();t.pushBlend(false);z();const e=t.currentTextureEffect;t.currentTextureEffect=I;t.currentTextureEffect.imgCompVer=3;t.currentTextureEffect.width=o.get();t.currentTextureEffect.height=u.get();I.setSourceTexture(A);I.startEffect(r.get()||CGL.Texture.getEmptyTexture(t,w),true);X();b.trigger();t.pushViewPort(0,0,o.get(),u.get());I.endEffect();O.setRef(I.getCurrentSourceTexture());t.popViewPort();t.popBlend();t.currentTextureEffect=e}};Ops.Gl.ImageCompose.ImageCompose_v4.prototype=new CABLES.Op;CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};Ops.Anim.Timer_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const a=e.inValue("Speed",1),n=e.inValueBool("Play",true),i=e.inTriggerButton("Reset"),r=e.inValueBool("Sync to timeline",false),s=e.outNumber("Time");e.setPortGroup("Controls",[n,i,a]);const o=new CABLES.Timer;let u=null;let l=0;let p=false;n.onChange=g;g();function g(){if(n.get()){o.play();e.patch.addOnAnimFrame(e)}else{o.pause();e.patch.removeOnAnimFrame(e)}}i.onTriggered=m;function m(){l=0;u=null;o.setTime(0);s.set(0)}r.onChange=function(){p=r.get();n.setUiAttribs({greyout:p});i.setUiAttribs({greyout:p})};e.onAnimFrame=function(e,t,n){if(o.isPlaying()){if(CABLES.overwriteTime!==undefined){s.set(CABLES.overwriteTime*a.get())}else if(p){s.set(e*a.get())}else{o.update();const i=o.get();if(u===null){u=i;return}const r=Math.abs(i-u);u=i;l+=r*a.get();if(l!=l)l=0;s.set(l)}}}};Ops.Anim.Timer_v2.prototype=new CABLES.Op;CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};Ops.Gl.ImageCompose.Noise.PixelNoise_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={pixelnoise2_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float numX;\nUNI float numY;\nUNI float addX;\nUNI float addY;\nUNI float addZ;\nUNI float seed2;\nUNI float minIn;\nUNI float maxIn;\n\nfloat random(vec2 co)\n{\n    float r=fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * (5.711+(mod(addZ+5711.210,57111.0))));\n\n    #ifdef LOOP\n        r=abs(r-0.5)*2.0;\n    #endif\n\n    return r;\n}\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    vec2 seed=vec2(0.0);\n\n    #ifndef CENTER\n        seed=vec2(floor( texCoord.x*numX+addX),floor( texCoord.y*numY+addY));\n    #endif\n    #ifdef CENTER\n        seed=vec2(floor( (texCoord.x-0.5)*numX+addX),floor( (texCoord.y-0.5)*numY+addY));\n    #endif\n\n    float r,g,b;\n\n    #ifndef RGB\n        r=g=b=random( seed + 0.5711 + seed2 );\n    #endif\n\n    #ifdef RGB\n        r=random( seed+0.5711 + seed2);\n        g=random( seed+0.5712 + seed2);\n        b=random( seed+0.5713 + seed2);\n    #endif\n\n    vec4 rnd = clamp( vec4( r,g,b,1.0 ),vec4(minIn), vec4(maxIn) );\n\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blendPixel(base,rnd,amount);\n\n}"};const n=e.inTrigger("Render"),i=CGL.TextureEffect.AddBlendSelect(e,"Blend Mode","normal"),r=CGL.TextureEffect.AddBlendAlphaMask(e),a=e.inValueSlider("Amount",1),s=e.inValueBool("Loop",false),o=e.inValueBool("RGB",false),u=e.inValue("Minimum value",0),l=e.inValue("Maximum value",1),p=e.inValue("Num X",10),g=e.inValue("Num Y",10),m=e.inValue("X",0),h=e.inValue("Y",0),c=e.inValue("Z",0),d=e.inValue("Seed",0),f=e.inBool("Centered",false),v=e.outTrigger("Next");e.setPortGroup("Look",[o,s,u,l]);e.setPortGroup("Position",[m,h,c]);e.setPortGroup("Scaling",[p,g]);const b=e.patch.cgl;const O=new CGL.Shader(b,e.name,e);O.setSource(O.getDefaultVertexShader(),t.pixelnoise2_frag);const _=new CGL.Uniform(O,"f","amount",a),I=new CGL.Uniform(O,"f","time",1),A=new CGL.Uniform(O,"t","tex",0),x=new CGL.Uniform(O,"f","numX",p),T=new CGL.Uniform(O,"f","numY",g),y=new CGL.Uniform(O,"f","addX",m),S=new CGL.Uniform(O,"f","addY",h),N=new CGL.Uniform(O,"f","addZ",c),j=new CGL.Uniform(O,"f","seed2",d),C=new CGL.Uniform(O,"f","minIn",u),E=new CGL.Uniform(O,"f","maxIn",l);s.onChange=function(){if(s.get())O.define("LOOP");else O.removeDefine("LOOP")};o.onChange=function(){if(o.get())O.define("RGB");else O.removeDefine("RGB")};f.onChange=function(){O.toggleDefine("CENTER",f.get())};CGL.TextureEffect.setupBlending(e,O,i,a,r);n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;b.pushShader(O);b.currentTextureEffect.bind();b.setTexture(0,b.currentTextureEffect.getCurrentSourceTexture().tex);b.currentTextureEffect.finish();b.popShader();v.trigger()}};Ops.Gl.ImageCompose.Noise.PixelNoise_v3.prototype=new CABLES.Op;CABLES.OPS["01ad08b6-dea4-4765-984c-3885c9c6520f"]={f:Ops.Gl.ImageCompose.Noise.PixelNoise_v3,objName:"Ops.Gl.ImageCompose.Noise.PixelNoise_v3"};Ops.Gl.LayerSequence=function(){CABLES.Op.apply(this,arguments);const a=this;const e=a.attachments={};const t=a.inTrigger("exe"),n=a.inTriggerButton("Clean up connections");const i=a.patch.cgl,s=[],r=16;let o=null;t.onTriggered=l;n.onTriggered=p;n.setUiAttribs({hidePort:true});n.setUiAttribs({hideParam:true});for(let e=0;e<r;e++){const g=a.outTrigger("trigger "+e);s.push(g);g.onLinkChanged=u}function u(){clearTimeout(o);o=setTimeout(()=>{let t=false;for(let e=0;e<s.length;e++)if(s[e].links.length>1)t=true;n.setUiAttribs({hideParam:!t});if(a.isCurrentUiOp())a.refreshParams()},60)}function l(){for(let e=0;e<s.length;e++){if(s[e].isLinked()){i.gl.clear(i.gl.DEPTH_BUFFER_BIT);s[e].trigger()}}}function p(){let i=0;for(let n=0;n<s.length;n++){let t=[];if(s[n].links.length>1)for(let e=1;e<s[n].links.length;e++){while(s[i].links.length>0)i++;t.push(s[n].links[e]);const r=s[n].links[e].getOtherPort(s[n]);a.patch.link(a,"trigger "+i,r.op,r.name);i++}for(let e=0;e<t.length;e++)t[e].remove()}u()}};Ops.Gl.LayerSequence.prototype=new CABLES.Op;CABLES.OPS["09c33c7e-e282-468d-93e1-b8a7a0a4c4d2"]={f:Ops.Gl.LayerSequence,objName:"Ops.Gl.LayerSequence"};Ops.Gl.Texture_v2=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const a=r.inUrl("File",[".jpg",".png",".webp",".jpeg",".avif"]),t=r.inSwitch("Filter",["nearest","linear","mipmap"]),n=r.inValueSelect("Wrap",["repeat","mirrored repeat","clamp to edge"],"clamp to edge"),i=r.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),s=r.inSwitch("Data Format",["R","RG","RGB","RGBA","SRGBA"],"RGBA"),o=r.inValueBool("Flip",false),u=r.inValueBool("Pre Multiplied Alpha",false),l=r.inValueBool("Active",true),p=r.inBool("Save Memory",true),g=r.outTexture("Texture"),m=r.inBool("Add Cachebuster",false),h=r.inTriggerButton("Reload"),c=r.outNumber("Width"),d=r.outNumber("Height"),f=r.outNumber("Aspect Ratio"),v=r.outBoolNum("Loaded",0),b=r.outBoolNum("Loading",0);const O=r.patch.cgl;r.toWorkPortsNeedToBeLinked(g);r.setPortGroup("Size",[c,d]);let _=null;let I=null;let A=null;let x=CGL.Texture.FILTER_MIPMAP;let T=CGL.Texture.WRAP_REPEAT;let y=0;let S=0;u.setUiAttribs({hidePort:true});u.onChange=a.onChange=s.onChange=m.onChange=o.onChange=j;i.onChange=t.onChange=P;n.onChange=L;t.set("mipmap");n.set("repeat");g.setRef(CGL.Texture.getEmptyTexture(O));h.onTriggered=j;l.onChange=function(){if(l.get()){if(_!=a.get()||!A)j();else g.setRef(A)}else{g.setRef(CGL.Texture.getEmptyTexture(O));c.set(CGL.Texture.getEmptyTexture(O).width);d.set(CGL.Texture.getEmptyTexture(O).height);if(A)A.delete();r.setUiAttrib({extendTitle:""});A=null}};const N=function(){const e=CGL.Texture.getTempTexture(O);g.setRef(e)};function j(e){clearTimeout(S);S=setTimeout(function(){E(e)},1)}function C(){if(s.get()=="R")return CGL.Texture.PFORMATSTR_R8UB;if(s.get()=="RG")return CGL.Texture.PFORMATSTR_RG8UB;if(s.get()=="RGB")return CGL.Texture.PFORMATSTR_RGB8UB;if(s.get()=="SRGBA")return CGL.Texture.PFORMATSTR_SRGBA8;return CGL.Texture.PFORMATSTR_RGBA8UB}function E(e){r.checkMainloopExists();if(!l.get())return;if(I)I=O.patch.loading.finished(I);I=O.patch.loading.start(r.objName,a.get(),r);let t=r.patch.getFilePath(String(a.get()));if(m.get()||e===true)t=CABLES.cacheBust(t);if(String(a.get()).indexOf("data:")==0)t=a.get();let n=false;_=a.get();if(a.get()&&a.get().length>1){v.set(false);b.set(true);const i=a.get();r.setUiAttrib({extendTitle:CABLES.basename(t)});if(n)r.refreshParams();O.patch.loading.addAssetLoadingTask(()=>{r.setUiError("urlerror",null);CGL.Texture.load(O,t,function(e,t){O.checkFrameStarted("texture inittexture");if(a.get()!=i){I=O.patch.loading.finished(I);return}if(A)A.delete();if(e){const n=CGL.Texture.getErrorTexture(O);g.setRef(n);r.setUiError("urlerror",'could not load texture: "'+a.get()+'"',2);I=O.patch.loading.finished(I);return}c.set(t.width);d.set(t.height);f.set(t.width/t.height);A=t;g.setRef(A);b.set(false);v.set(true);if(p.get())A.image=null;if(I){I=O.patch.loading.finished(I)}r.checkMainloopExists()},{anisotropic:y,wrap:T,flip:o.get(),unpackAlpha:u.get(),pixelFormat:C(),filter:x});r.checkMainloopExists()})}else{N();I=O.patch.loading.finished(I)}}function P(){if(t.get()=="nearest")x=CGL.Texture.FILTER_NEAREST;else if(t.get()=="linear")x=CGL.Texture.FILTER_LINEAR;else if(t.get()=="mipmap")x=CGL.Texture.FILTER_MIPMAP;else if(t.get()=="Anisotropic")x=CGL.Texture.FILTER_ANISOTROPIC;i.setUiAttribs({greyout:x!=CGL.Texture.FILTER_MIPMAP});y=parseFloat(i.get());j()}function L(){if(n.get()=="repeat")T=CGL.Texture.WRAP_REPEAT;if(n.get()=="mirrored repeat")T=CGL.Texture.WRAP_MIRRORED_REPEAT;if(n.get()=="clamp to edge")T=CGL.Texture.WRAP_CLAMP_TO_EDGE;j()}r.onFileChanged=function(e){if(a.get()&&a.get().indexOf(e)>-1){g.setRef(CGL.Texture.getEmptyTexture(r.patch.cgl));g.setRef(CGL.Texture.getTempTexture(O));E(true)}}};Ops.Gl.Texture_v2.prototype=new CABLES.Op;CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};Ops.Gl.Meshes.Rectangle_v4=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTrigger("render"),i=t.inValueBool("Render Mesh",true),N=t.inValue("width",1),j=t.inValue("height",1),C=t.inSwitch("pivot x",["left","center","right"],"center"),E=t.inSwitch("pivot y",["top","center","bottom"],"center"),P=t.inSwitch("axis",["xy","xz"],"xy"),L=t.inBool("Flip TexCoord X",false),k=t.inBool("Flip TexCoord Y",true),R=t.inValueInt("num columns",1),M=t.inValueInt("num rows",1),r=t.outTrigger("trigger"),U=t.outObject("geometry",null,"geometry");U.ignoreValueSerialize=true;const V=new CGL.Geometry("rectangle");i.setUiAttribs({title:"Render"});n.setUiAttribs({title:"Trigger"});r.setUiAttribs({title:"Next"});t.setPortGroup("Pivot",[C,E,P]);t.setPortGroup("Size",[N,j]);t.setPortGroup("Structure",[R,M]);t.toWorkPortsNeedToBeLinked(n);t.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_TRIGGER);const w=0;const B=1;let G=w;let D=null;let F=true;let z=true;const a=vec3.create();vec3.set(a,1,1,1);P.onChange=C.onChange=E.onChange=L.onChange=k.onChange=M.onChange=R.onChange=s;X();N.onChange=j.onChange=()=>{if(z)X();else F=true};function X(){if(G===w)vec3.set(a,N.get(),j.get(),1);if(G===B)vec3.set(a,N.get(),1,j.get())}U.onLinkChanged=()=>{z=!U.isLinked();X();F=true};function s(){F=true}n.onTriggered=()=>{if(F)o();const e=t.patch.cg;if(e&&D&&i.get()){if(z){e.pushModelMatrix();mat4.scale(e.mMatrix,e.mMatrix,a)}D.render(e.getShader());if(z)e.popModelMatrix()}r.trigger()};t.onDelete=()=>{if(D)D.dispose();s()};function o(){if(P.get()=="xy")G=w;if(P.get()=="xz")G=B;X();let n=N.get();let i=j.get();if(z)n=i=1;let r=0;let a=0;if(C.get()=="center")r=0;else if(C.get()=="right")r=-n/2;else if(C.get()=="left")r=+n/2;if(E.get()=="center")a=0;else if(E.get()=="top")a=-i/2;else if(E.get()=="bottom")a=+i/2;const s=Math.max(1,Math.round(M.get()));const o=Math.max(1,Math.round(R.get()));const u=n/o;const l=i/s;const p=[];const g=new Float32Array((o+1)*(s+1)*2);const m=new Float32Array((o+1)*(s+1)*3);const h=new Float32Array((o+1)*(s+1)*3);const c=new Float32Array((o+1)*(s+1)*3);const d=new Float32Array((o+1)*(s+1)*3);let f=0;let v=0;let b=0;let O=0;let _=0;for(let t=0;t<=s;t++){for(let e=0;e<=o;e++){m[v++]=e*u-n/2+r;if(G==B)m[v++]=0;m[v++]=t*l-i/2+a;if(G==w)m[v++]=0;g[f++]=e/o;g[f++]=t/s;if(G==w){h[b++]=0;h[b++]=0;h[b++]=1;c[O++]=1;c[O++]=0;c[O++]=0;d[_++]=0;d[_++]=1;d[_++]=0}else if(G==B){h[b++]=0;h[b++]=1;h[b++]=0;d[_++]=0;d[_++]=0;d[_++]=1}}}p.length=o*s*6;let I=0;for(let t=0;t<o;t++){for(let e=0;e<s;e++){const A=t+(o+1)*e;const x=A;const T=A+1;const y=A+o+1;const S=A+1+o+1;if(G==w){p[I++]=x;p[I++]=T;p[I++]=y;p[I++]=y;p[I++]=T;p[I++]=S}else if(G==B){p[I++]=x;p[I++]=y;p[I++]=T;p[I++]=T;p[I++]=y;p[I++]=S}}}if(k.get())for(let e=0;e<g.length;e+=2)g[e+1]=1-g[e+1];if(L.get())for(let e=0;e<g.length;e+=2)g[e]=1-g[e];V.clear();V.vertices=m;V.texCoords=g;V.verticesIndices=p;V.vertexNormals=h;V.tangents=c;V.biTangents=d;if(t.patch.cg)if(!D)D=t.patch.cg.createMesh(V,{opId:t.id});else D.setGeom(V);U.setRef(V);F=false}};Ops.Gl.Meshes.Rectangle_v4.prototype=new CABLES.Op;CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};Ops.Math.Multiply=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("number1",1),i=e.inValueFloat("number2",1),r=e.outNumber("result");e.setUiAttribs({mathTitle:true});n.onChange=i.onChange=a;a();function a(){const e=n.get();const t=i.get();r.set(e*t)}};Ops.Math.Multiply.prototype=new CABLES.Op;CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};Ops.Gl.Matrix.Scale=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTrigger("render"),i=t.inValueFloat("scale",1),r=t.inValueFloat("x",1),a=t.inValueFloat("y",1),s=t.inValueFloat("z",1),o=t.outTrigger("trigger");t.setPortGroup("Axis",[r,a,s]);const u=vec3.create();r.onChange=a.onChange=s.onChange=i.onChange=l;l();n.onTriggered=function(){const e=t.patch.cg||t.patch.cgl;e.pushModelMatrix();mat4.scale(e.mMatrix,e.mMatrix,u);o.trigger();e.popModelMatrix()};function l(){const e=i.get();vec3.set(u,e*r.get(),e*a.get(),e*s.get())}};Ops.Gl.Matrix.Scale.prototype=new CABLES.Op;CABLES.OPS["50e7f565-0cdb-47ca-912b-87c04e2f00e3"]={f:Ops.Gl.Matrix.Scale,objName:"Ops.Gl.Matrix.Scale"};Ops.Gl.MainLoop_v2=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inFloat("Max Pixel Density (DPR)",2),i=n.inValue("FPS Limit",0),r=n.inValueBool("Reduce FPS unfocussed",false),a=n.inValueBool("Transparent",false),s=n.inValueBool("Active",1),o=n.outTrigger("trigger"),u=n.outNumber("width"),l=n.outNumber("height"),p=n.outNumber("Pixel Density");n.onAnimFrame=T;t.onChange=I;const g=n.patch.cgl;let m=0;let h=0;let c=null;let d=false;if(!n.patch.cgl)n.uiAttr({error:"No webgl cgl context"});const f=vec3.create();vec3.set(f,0,0,0);const v=vec3.create();vec3.set(v,0,0,-2);let b=null;let O=true;let _=true;window.addEventListener("blur",()=>{O=false});window.addEventListener("focus",()=>{O=true});document.addEventListener("visibilitychange",()=>{_=!document.hidden});y();n.patch.tempData.mainloopOp=this;function I(){x();if(CABLES.UI){if(t.get()<1)n.patch.cgl.canvas.style.imageRendering="pixelated"}n.patch.cgl.updateSize();if(CABLES.UI)gui.setLayout()}s.onChange=function(){n.patch.removeOnAnimFrame(n);if(s.get()){n.setUiAttrib({extendTitle:""});n.onAnimFrame=T;n.patch.addOnAnimFrame(n);n.log("adding again!")}else{n.setUiAttrib({extendTitle:"Inactive"})}};function A(){if(r.get()){if(!_)return 10;if(!O)return 30}return i.get()}n.onDelete=function(){g.gl.clearColor(0,0,0,0);g.gl.clear(g.gl.COLOR_BUFFER_BIT|g.gl.DEPTH_BUFFER_BIT)};function x(){if(t.get()!=0)n.patch.cgl.pixelDensity=Math.min(t.get(),window.devicePixelRatio);else n.patch.cgl.pixelDensity=window.devicePixelRatio}function T(e){if(!s.get())return;if(g.aborted||g.canvas.clientWidth===0||g.canvas.clientHeight===0)return;n.patch.cg=g;x();const t=performance.now();n.patch.config.fpsLimit=A();if(g.canvasWidth==-1){g.setCanvas(n.patch.config.glCanvasId);return}if(g.canvasWidth!=u.get()||g.canvasHeight!=l.get()){u.set(g.canvasWidth/1);l.set(g.canvasHeight/1)}if(CABLES.now()-h>1e3){CGL.fpsReport=CGL.fpsReport||[];if(n.patch.loading.getProgress()>=1&&h!==0)CGL.fpsReport.push(m);m=0;h=CABLES.now()}CGL.MESH.lastShader=null;CGL.MESH.lastMesh=null;g.renderStart(g,f,v);if(!a.get())g.gl.clearColor(0,0,0,1);else g.gl.clearColor(0,0,0,0);g.gl.clear(g.gl.COLOR_BUFFER_BIT|g.gl.DEPTH_BUFFER_BIT);o.trigger();if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();if(CGL.Texture.previewTexture){if(!CGL.Texture.texturePreviewer)CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(g);CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)}g.renderEnd(g);n.patch.cg=null;if(!a.get()){g.gl.clearColor(1,1,1,1);g.gl.colorMask(false,false,false,true);g.gl.clear(g.gl.COLOR_BUFFER_BIT);g.gl.colorMask(true,true,true,true)}if(!g.tempData.phong)g.tempData.phong={};m++;p.set(n.patch.cgl.pixelDensity);n.patch.cgl.profileData.profileMainloopMs=performance.now()-t}function y(){clearTimeout(c);c=setTimeout(()=>{if(n.patch.getOpsByObjName(n.name).length>1){n.setUiError("multimainloop","there should only be one mainloop op!");if(!d)d=n.patch.addEventListener("onOpDelete",y)}else n.setUiError("multimainloop",null,1)},500)}};Ops.Gl.MainLoop_v2.prototype=new CABLES.Op;CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};Ops.Html.FontFile_v2=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const a=r.inUrl("file",[".otf",".ttf",".woff",".woff2"]),s=r.inString("family"),o=r.inBool("Active",true),u=r.outBoolNum("Loaded"),l=r.outTrigger("Loaded Trigger");let p=null;let g;let m=null;let t=null;let h=null;let c="";a.onChange=function(){u.set(false);i(null)};o.onChange=s.onChange=()=>{n()};function n(){clearTimeout(t);t=setTimeout(()=>{i(null)},50)}r.patch.on("windowChanged",e=>{g=null;i(e.document)});function i(e){if(h)h.remove();if(g){const t=m.fonts.delete(g);g=null;setTimeout(()=>{r.patch.emitEvent("fontLoaded",c)},100)}if(!o.get())return;m=e||m||r.patch.cgl.canvas.ownerDocument||document;if(p)p=r.patch.cgl.patch.loading.finished(p);r.setUiError("loadingerror",null);c=s.get();if(a.get()&&s.get()){if(m.fonts){let e="url("+r.patch.getFilePath(String(a.get()))+")";g=new FontFace(s.get(),e);p=r.patch.cgl.patch.loading.start("FontFile",a.get(),r);m.fonts.add(g);g.loaded.then(e=>{u.set(true);l.trigger();p=r.patch.cgl.patch.loading.finished(p);r.patch.emitEvent("fontLoaded",s.get())},e=>{r.setUiError("loadingerror","Font loading error: "+g.status+"("+a.get()+")");p=r.patch.cgl.patch.loading.finished(p);u.set(true)}).catch(e=>{p=r.patch.cgl.patch.loading.finished(p);console.error("catch ",e)});g.load()}else{const n=r.patch.getFilePath(String(a.get()));const i="".endl()+"@font-face".endl()+"{".endl()+'  font-family: "'+s.get()+'";'.endl()+'  src: url("'+n+'") format("truetype");'.endl()+"}";h=document.createElement("style");h.classList.add("cablesEle");h.type="text/css";h.innerHTML=i;document.getElementsByTagName("head")[document.getElementsByTagName("head").length-1].appendChild(h)}}}};Ops.Html.FontFile_v2.prototype=new CABLES.Op;CABLES.OPS["68177370-116e-4c76-aef3-3b10d68e7227"]={f:Ops.Html.FontFile_v2,objName:"Ops.Html.FontFile_v2"};Ops.Gl.RandomCluster=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("exe"),i=e.inValueInt("num"),r=e.inValueFloat("random seed",1.5),a=e.inValueBool("round",false),s=e.inValueFloat("size",10),o=e.inValueFloat("scaleX",1),u=e.inValueFloat("scaleY",1),l=e.inValueFloat("scaleZ",1),p=e.outTrigger("trigger"),g=e.outNumber("index"),m=e.outNumber("rnd"),h=e.inValueSlider("Rotate X",1),c=e.inValueSlider("Rotate Y",1),d=e.inValueSlider("Rotate Z",1),f=e.inValue("Scroll X",0);e.setPortGroup("Area",[s,o,u,l]);e.setPortGroup("Rotation",[h,c,d]);e.setPortGroup("Parameters",[i,a,r]);e.toWorkPortsNeedToBeLinked(n,p);const v=[];const b=[];const O=[];const _=[];const I=vec3.create();const A=mat4.create();r.onChange=i.onChange=s.onChange=o.onChange=l.onChange=u.onChange=a.onChange=h.onChange=c.onChange=d.onChange=y;i.set(100);function x(){const t=e.patch.cg||e.patch.cgl;if(t.shouldDrawHelpers(e)){CABLES.GL_MARKER.drawCube(e,s.get()/2*o.get(),s.get()/2*u.get(),s.get()/2*l.get())}if(f.get()!=0){for(let e=0;e<b.length;e++){v[e][0]=b[e][0]+f.get();v[e][0]=v[e][0]%s.get()-s.get()/2}}for(let e=0;e<v.length;e++){t.pushModelMatrix();mat4.translate(t.mMatrix,t.mMatrix,v[e]);if(O[e][0])mat4.rotateX(t.mMatrix,t.mMatrix,O[e][0]);if(O[e][1])mat4.rotateY(t.mMatrix,t.mMatrix,O[e][1]);if(O[e][2])mat4.rotateZ(t.mMatrix,t.mMatrix,O[e][2]);g.set(e);m.set(_[e]);p.trigger();t.popModelMatrix()}}n.onTriggered=x;function T(){return vec3.fromValues(o.get()*(Math.seededRandom()-.5)*s.get(),u.get()*(Math.seededRandom()-.5)*s.get(),l.get()*(Math.seededRandom()-.5)*s.get())}function y(){v.length=0;O.length=0;_.length=0;b.length=0;Math.randomSeed=r.get();const t=a.get();for(let e=0;e<i.get();e++){_.push(Math.seededRandom());let e=T();if(t&&s.get()>0)while(vec3.len(e)>s.get()/2)e=T();b.push([e[0],e[1],e[2]]);v.push(e);O.push(vec3.fromValues(Math.seededRandom()*360*CGL.DEG2RAD*h.get(),Math.seededRandom()*360*CGL.DEG2RAD*c.get(),Math.seededRandom()*360*CGL.DEG2RAD*d.get()))}}};Ops.Gl.RandomCluster.prototype=new CABLES.Op;CABLES.OPS["ca3bc984-e596-48fb-b53d-502eb13979b0"]={f:Ops.Gl.RandomCluster,objName:"Ops.Gl.RandomCluster"};Ops.Gl.Matrix.Billboard=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Exec");const i=e.outTrigger("Next");const r=e.patch.cgl;let a=mat4.create();let s=mat4.create();let o=mat4.create();let u=mat4.create();n.onTriggered=function(){mat4.invert(a,r.mMatrix);mat4.invert(s,r.vMatrix);mat4.mul(a,a,s);a[12]=0;a[13]=0;a[14]=0;r.pushModelMatrix();r.pushViewMatrix();mat4.mul(r.mMatrix,r.mMatrix,a);i.trigger();r.popViewMatrix();r.popModelMatrix()}};Ops.Gl.Matrix.Billboard.prototype=new CABLES.Op;CABLES.OPS["d41e676e-d8a7-4a1e-8abf-f1bddfc982d5"]={f:Ops.Gl.Matrix.Billboard,objName:"Ops.Gl.Matrix.Billboard"};Ops.Trigger.Interval=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValue("interval"),i=e.outTrigger("trigger"),r=e.inValueBool("Active",true);r.onChange=function(){clearTimeout(a);a=-1;if(!r.get()){}else s()};n.set(1e3);let a=-1;function s(){if(!r.get())return;if(a!=-1)return;a=setTimeout(function(){a=-1;i.trigger();s()},n.get())}n.onChange=s;s()};Ops.Trigger.Interval.prototype=new CABLES.Op;CABLES.OPS["3e9bae10-38af-4e36-9fcc-35faeeaf57f8"]={f:Ops.Trigger.Interval,objName:"Ops.Trigger.Interval"};Ops.Gl.Meshes.RectangleFrame_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Render"),o=e.inValueFloat("Width",1),u=e.inValueFloat("Height",1),l=e.inValueFloat("Thickness",-.1),p=e.inSwitch("pivot x",["center","left","right"],"center"),g=e.inSwitch("pivot y",["center","top","bottom"],"center"),i=e.outTrigger("trigger"),m=e.outObject("Geometry"),h=e.inValueBool("Draw Top",true),c=e.inValueBool("Draw Bottom",true),d=e.inValueBool("Draw Left",true),f=e.inValueBool("Draw Right",true),r=e.inValueBool("Active",true);e.toWorkPortsNeedToBeLinked(n);e.setPortGroup("Geometry",[o,u,l]);e.setPortGroup("Transform",[p,g]);e.setPortGroup("Sections",[h,c,d,f]);const v=e.patch.cgl;let b=null;const O=new CGL.Geometry(e.name);O.tangents=[];O.biTangents=[];m.ignoreValueSerialize=true;o.onChange=p.onChange=g.onChange=u.onChange=l.onChange=h.onChange=c.onChange=d.onChange=f.onChange=()=>{b=null};n.onTriggered=function(){if(!b)a();if(r.get()&&b)b.render(v.getShader());i.trigger()};function a(){const n=o.get();const i=u.get();let e=-n/2;let t=-i/2;const r=l.get();if(p.get()=="right")e=-n;else if(p.get()=="left")e=0;if(g.get()=="top")t=-i;else if(g.get()=="bottom")t=0;O.vertices.length=0;O.vertices.push(e,t,0,e+n,t,0,e+n,t+i,0,e,t+i,0,e-r,t-r,0,e+n+r,t-r,0,e+n+r,t+i+r,0,e-r,t+i+r,0);if(O.vertexNormals.length===0)O.vertexNormals=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1];if(O.tangents.length===0)O.tangents=[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0];if(O.biTangents.length===0)O.biTangents=[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0];if(O.verticesIndices)O.verticesIndices.length=0;else O.verticesIndices=[];const a=[];if(c.get())a.push(0,1,4,1,5,4);if(f.get())a.push(1,2,5,5,2,6);if(h.get())a.push(7,6,3,6,2,3);if(d.get())a.push(0,4,3,4,7,3);O.verticesIndices=a;if(O.texCoords.length===0){const s=[];for(let e=0,t=0;e<O.vertices.length;e+=3,t+=2){s[t]=O.vertices[e+0]/n-.5;s[t+1]=O.vertices[e+1]/i-.5}O.texCoords=s}if(!b)b=new CGL.Mesh(v,O);else b.setGeom(O);m.set(null);m.set(O)}};Ops.Gl.Meshes.RectangleFrame_v2.prototype=new CABLES.Op;CABLES.OPS["34e4535e-a784-4474-9b6f-a7e54e26f09e"]={f:Ops.Gl.Meshes.RectangleFrame_v2,objName:"Ops.Gl.Meshes.RectangleFrame_v2"};Ops.Boolean.BoolToString=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inBool("Boolean",false),i=e.inString("False","false"),r=e.inString("True","true"),a=e.outString("String","false");r.onChange=i.onChange=n.onChange=s;function s(){if(n.get())a.set(r.get());else a.set(i.get())}};Ops.Boolean.BoolToString.prototype=new CABLES.Op;CABLES.OPS["22a734aa-8b08-4db7-929b-393d4704e1d6"]={f:Ops.Boolean.BoolToString,objName:"Ops.Boolean.BoolToString"};Ops.String.ConcatMulti_v2=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const a=[];for(let t=0;t<8;t++){let e=n.inString("string "+t);a.push(e);e.onChange=i}const s=n.inBool("add spaces",false),o=n.inBool("new lines",false),u=n.outString("concat string");a.onChange=s.onChange=o.onChange=i;s.setUiAttribs({hidePort:true});o.setUiAttribs({hidePort:true});function i(){let t="";let n="";let i=s.get();for(let e=0;e<a.length;e++){const r=a[e].get();if(!r)continue;if(e>0&&i)t+=" ";if(e>0&&o.get())n="\n";t+=n;t+=r}u.set(t)}};Ops.String.ConcatMulti_v2.prototype=new CABLES.Op;CABLES.OPS["bc110e48-812d-489d-b1b3-b09c644c6982"]={f:Ops.String.ConcatMulti_v2,objName:"Ops.String.ConcatMulti_v2"};Ops.String.NumberToString_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValue("Number"),i=e.inInt("Decimal Places",4),r=e.outString("Result");let a=false;let s=1;i.onChange=o;n.onChange=u;o();u();function o(){a=i.get()<100;s=Math.pow(10,i.get());u()}function u(){if(a)r.set(String(Math.round(n.get()*s)/s));else r.set(String(n.get()||0))}};Ops.String.NumberToString_v2.prototype=new CABLES.Op;CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};Ops.String.StringEditor=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inStringEditor("value",""),i=e.inValueSelect("Syntax",["text","glsl","css","html","xml","json","javascript","inline-css","sql"],"text"),r=e.outString("Result");i.onChange=a;function a(){let e=i.get();if(e=="javascript")e="js";n.setUiAttribs({editorSyntax:e})}n.onChange=function(){r.set(n.get())}};Ops.String.StringEditor.prototype=new CABLES.Op;CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};Ops.String.Concat_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inString("string1","ABC"),r=e.inString("string2","XYZ"),a=e.inValueBool("New Line",false),s=e.inBool("Active",true),o=e.outString("result");a.onChange=r.onChange=i.onChange=s.onChange=n;n();function n(){if(!s.get()){return o.set(i.get())}let e=i.get();let t=r.get();if(!e&&!t){o.set("");return}if(!e)e="";if(!t)t="";let n="";if(e&&t&&a.get())n="\n";o.set(String(e)+n+String(t))}};Ops.String.Concat_v2.prototype=new CABLES.Op;CABLES.OPS["a52722aa-0ca9-402c-a844-b7e98a6c6e60"]={f:Ops.String.Concat_v2,objName:"Ops.String.Concat_v2"};Ops.String.String_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inString("value",""),i=e.outString("String");n.onChange=function(){if(!n.isLinked())e.setUiAttrib({extendTitle:n.get()});i.set(n.get())}};Ops.String.String_v2.prototype=new CABLES.Op;CABLES.OPS["d697ff82-74fd-4f31-8f54-295bc64e713d"]={f:Ops.String.String_v2,objName:"Ops.String.String_v2"};Ops.User.thrane.Emeritus.RunSimulation=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const i=e.outTrigger("Trigger out");const r=e.outObject("Scene");const a=e.outObject("OldMan Agent");let s=new Simulation;n.onTriggered=()=>{s.run();a.setRef(s.getSimulationAgent());r.setRef(s.getSimulationScene());i.trigger()}};Ops.User.thrane.Emeritus.RunSimulation.prototype=new CABLES.Op;CABLES.OPS["7cab08ab-8dbe-4c4f-97b7-f1702ff28696"]={f:Ops.User.thrane.Emeritus.RunSimulation,objName:"Ops.User.thrane.Emeritus.RunSimulation"};Ops.User.thrane.Emeritus.Agent.DesireProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const r=e.inObject("Agent In");const i=e.outTrigger("Trigger out");const a=e.outString("Best Desire");const s=e.outString("Active Desire");n.onTriggered=()=>{if(!r.get()){a.set("N/A - Agent not defined");s.set("N/A - Agent not defined")}else{let n=r.get();let e=n.getDesireManager();let t=e.getCurrentBestDesire();if(t){a.set(t.name)}else{a.set("N/A - No best desire")}let i=e.getActiveDesires();if(i){if(i.length>0){let t="";i.forEach(e=>{t+=`${e.name}`;if(e.isActive(n))t+="/active";else t+="/not active";t+=`/${e.priority}`;t+=` `});s.set(t)}else{s.set("No active desires.")}}else{s.set("N/A - No active desires.")}}i.trigger()}};Ops.User.thrane.Emeritus.Agent.DesireProxy.prototype=new CABLES.Op;CABLES.OPS["1a8ff075-1397-4321-89fa-6f677cb8304b"]={f:Ops.User.thrane.Emeritus.Agent.DesireProxy,objName:"Ops.User.thrane.Emeritus.Agent.DesireProxy"};Ops.Trigger.TriggerSend=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={};const t=i.inTriggerButton("Trigger");i.varName=i.inValueSelect("Named Trigger",[],"",true);i.varName.onChange=r;t.onTriggered=a;i.patch.addEventListener("namedTriggersChanged",n);n();i.varName.setUiAttribs({_triggerSelect:true});function n(){if(CABLES.UI){let e=[];const t=i.patch.namedTriggers;e.push("+ create new one");for(const n in t)e.push(n);e=e.sort();i.varName.uiAttribs.values=e}}function r(){if(CABLES.UI){if(i.varName.get()=="+ create new one"){new CABLES.UI.ModalDialog({prompt:true,title:"New Trigger",text:"Enter a name for the new trigger",promptValue:"",promptOk:e=>{i.varName.set(e);i.patch.namedTriggers[e]=i.patch.namedTriggers[e]||[];n()}});return}i.refreshParams()}if(!i.patch.namedTriggers[i.varName.get()]){i.patch.namedTriggers[i.varName.get()]=i.patch.namedTriggers[i.varName.get()]||[];i.patch.emitEvent("namedTriggersChanged")}i.setTitle(">"+i.varName.get());i.refreshParams();i.patch.emitEvent("opTriggerNameChanged",i,i.varName.get())}function a(){const t=i.patch.namedTriggers[i.varName.get()];i.patch.emitEvent("namedTriggerSent",i.varName.get());if(!t){i.setUiError("unknowntrigger","unknown trigger");return}else i.setUiError("unknowntrigger",null);for(let e=0;e<t.length;e++){t[e]()}}};Ops.Trigger.TriggerSend.prototype=new CABLES.Op;CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};Ops.Trigger.TriggerReceive=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={};const t=i.outTrigger("Triggered");i.varName=i.inValueSelect("Named Trigger",[],"",true);i.varName.setUiAttribs({_triggerSelect:true});a();i.patch.addEventListener("namedTriggersChanged",a);let n=null;function r(){t.trigger()}function a(){if(CABLES.UI){let t=[];let n=i.patch.namedTriggers;for(let e in n)t.push(e);t=t.sort();i.varName.uiAttribs.values=t}}i.varName.onChange=function(){if(n){let e=i.patch.namedTriggers[n];let t=e.indexOf(r);if(t!=-1)e.splice(t,1)}i.setTitle(">"+i.varName.get());i.patch.namedTriggers[i.varName.get()]=i.patch.namedTriggers[i.varName.get()]||[];let e=i.patch.namedTriggers[i.varName.get()];e.push(r);n=i.varName.get();s();i.patch.emitEvent("opTriggerNameChanged",i,i.varName.get())};i.on("uiParamPanel",s);function s(){if(!i.varName.get()){i.setUiError("unknowntrigger","unknown trigger")}else i.setUiError("unknowntrigger",null)}};Ops.Trigger.TriggerReceive.prototype=new CABLES.Op;CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};Ops.Vars.VarSetObject_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("Value",null);e.varName=e.inDropDown("Variable",[],"",true);new CABLES.VarSetOpWrapper(e,"object",n,e.varName)};Ops.Vars.VarSetObject_v2.prototype=new CABLES.Op;CABLES.OPS["c7608375-5b45-4bca-87ef-d0c5e970779a"]={f:Ops.Vars.VarSetObject_v2,objName:"Ops.Vars.VarSetObject_v2"};Ops.Vars.VarGetObject_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outObject("Value");e.varName=e.inValueSelect("Variable",[],"",true);new CABLES.VarGetOpWrapper(e,"object",e.varName,n)};Ops.Vars.VarGetObject_v2.prototype=new CABLES.Op;CABLES.OPS["321419d9-69c7-4310-a327-93d310bc2b8e"]={f:Ops.Vars.VarGetObject_v2,objName:"Ops.Vars.VarGetObject_v2"};Ops.User.thrane.Emeritus.Agent.BeliefsProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const i=e.inObject("Agent In");const r=e.inObject("Belief Manager In");const a=e.outTrigger("Trigger out");const s=e.outNumber("Hunger");const o=e.outNumber("Fatigue");const u=e.outNumber("Boredom");n.onTriggered=()=>{if(!i.get()){s.set(0);o.set(0);u.set(0)}else{let e=i.get();var t=e.beliefManager;var n=t.getBelief("Hunger");s.set(n.getValue());n=t.getBelief("Fatigue");o.set(n.getValue());n=t.getBelief("Boredom");u.set(n.getValue())}a.trigger()}};Ops.User.thrane.Emeritus.Agent.BeliefsProxy.prototype=new CABLES.Op;CABLES.OPS["7767185f-dba4-4dc3-b81e-5a934d7ec24b"]={f:Ops.User.thrane.Emeritus.Agent.BeliefsProxy,objName:"Ops.User.thrane.Emeritus.Agent.BeliefsProxy"};Ops.User.thrane.Emeritus.Agent.IntentionProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const i=e.inObject("Agent In");const r=e.outTrigger("Trigger out");const a=e.outString("Current Intention");n.onTriggered=()=>{if(!i.get()){a.set("N/A - intention manager undefined")}else{let e=i.get();let t=e.intentionManager;let n=t.getCurrentIntention();a.set(n.name)}r.trigger()}};Ops.User.thrane.Emeritus.Agent.IntentionProxy.prototype=new CABLES.Op;CABLES.OPS["7c486e33-4a76-4b29-9ca7-fa262a76a074"]={f:Ops.User.thrane.Emeritus.Agent.IntentionProxy,objName:"Ops.User.thrane.Emeritus.Agent.IntentionProxy"};Ops.Array.ArrayPack=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const a=r.outArray("Result");const s=8;const o=[];let u=false;for(let t=0;t<s;t++){let e=r.inArray("Array "+t);e.onChange=n;o.push(e)}function n(){const t=[];const n=[];let i=0;for(i=0;i<s;i++){let e=o[i].get();if(e){n.push(e);if(e.length!=n[0].length){if(!u)r.setUiError("arraylen","Arrays do not have the same length !");a.set(null);u=true;return}}}if(n.length===0){if(!u)r.setUiError("invalid","No Valid Arrays");a.set(null);u=true;return}if(u){r.setUiError("arraylen",null);r.setUiError("invalid",null)}u=false;for(let e=0;e<n[0].length;e++)for(i=0;i<n.length;i++)t.push(n[i][e]);a.setRef(t)}};Ops.Array.ArrayPack.prototype=new CABLES.Op;CABLES.OPS["51df396d-87be-4890-8fbd-c8bb3d364d3b"]={f:Ops.Array.ArrayPack,objName:"Ops.Array.ArrayPack"};Ops.Array.ArrayBuffer=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("exec"),i=e.inValue("Value"),r=e.outTrigger("Trigger out"),a=e.outArray("Result"),s=e.outNumber("Array length");let o=[];let u=e.inInt("Max Length",100);let l=e.inTriggerButton("Reset");a.set(o);u.onChange=p;l.onTriggered=p;p();function p(){o.length=Math.abs(Math.floor(u.get()))||0;for(let e=0;e<o.length;e++)o[e]=0;a.set(null);a.set(o);s.set(0)}n.onTriggered=function(){for(let e=1;e<o.length;e++)o[e-1]=o[e];o[o.length-1]=i.get();a.setRef(o);s.set(o.length);r.trigger()}};Ops.Array.ArrayBuffer.prototype=new CABLES.Op;CABLES.OPS["332174c6-af8f-4c4a-9ea2-a0be249ecd72"]={f:Ops.Array.ArrayBuffer,objName:"Ops.Array.ArrayBuffer"};Ops.Array.Array_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.inValueInt("Array length",10),n=t.inSwitch("Mode select",["Number","1,2,3,4","0-1"],"Number"),r=t.inValueFloat("Default Value"),a=t.inBool("Reverse",false),s=t.outArray("Array"),o=t.outNumber("Array length out");let u=[];let l=0;const p=0;const g=1;const m=2;n.onChange=h;a.onChange=r.onChange=i.onChange=c;h();c();function h(){let e=n.get();if(e==="Number")l=p;else if(e==="1,2,3,4")l=g;else if(e==="0-1")l=m;r.setUiAttribs({greyout:l!==p});t.setUiAttrib({extendTitle:n.get()});c()}function c(){u.length=0;let e=i.get();let t=r.get();let n;if(l===p){for(n=0;n<e;n++){u[n]=t}}else if(l===g){for(n=0;n<e;n++){u[n]=n}}else if(l===m){if(e>1){for(n=0;n<e;n++){u[n]=n/(e-1)}}else{u=[0]}}if(a.get())u=u.reverse();s.setRef(u);o.set(u.length)}};Ops.Array.Array_v3.prototype=new CABLES.Op;CABLES.OPS["e4d31a46-bf64-42a8-be34-4cbb2bbc2600"]={f:Ops.Array.Array_v3,objName:"Ops.Array.Array_v3"};Ops.Number.Integer=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inInt("Integer",0),i=e.outNumber("Number out");n.onChange=function(){i.set(Math.floor(n.get()))}};Ops.Number.Integer.prototype=new CABLES.Op;CABLES.OPS["17bc01d7-04ad-4aab-b88b-bb09744c4a69"]={f:Ops.Number.Integer,objName:"Ops.Number.Integer"};Ops.Gl.Meshes.SimpleSpline_v2=function(){CABLES.Op.apply(this,arguments);const o=this;const e=o.attachments={};const t=o.inTrigger("Render"),u=o.inArray("Points"),n=o.inValueInt("Num Points"),i=o.inBool("Line Strip",true),r=o.outObject("Geometry"),l=o.inSwitch("TexCoords",["0","0-1","Random","Fill"],"0"),p=o.inArray("TexCoords Array"),g=o.inArray("Vertex Colors"),a=o.outTrigger("Next");const s=o.patch.cgl;const m=new CGL.Geometry("simplespline");r.set(m);m.vertices=[0,0,0,0,0,0,0,0,0];let h=new CGL.Mesh(s,m);let c=new Float32Array;let d=new Float32Array;let f=new Float32Array;let v=true;let b;let O="";g.onChange=p.onChange=l.onChange=n.onChange=u.onChange=function(){v=true};o.toWorkPortsNeedToBeLinked(u);o.onDelete=()=>{if(h)h.dispose();h=null};function _(){const e=u.get()||[];const t=e.length;if(!(e instanceof Float32Array)){if(t!=c.length){c=new Float32Array(t);f=new Float32Array(t);h.setAttribute(CGL.SHADERVAR_VERTEX_NORMAL,f,3);c.set(e)}else{c.set(e)}}else{c=e}b=h.setAttribute(CGL.SHADERVAR_VERTEX_POSITION,c,3);o.setUiError("wrongvcnum",null);if(g.get()){if(g.get().length/4!=c.length/3)o.setUiError("wrongvcnum","vertex color array length is wrong. should be "+c.length/3*4);const n=h.setAttribute(CGL.SHADERVAR_VERTEX_COLOR,g.get(),4)}const i=t/3*2;o.setUiError("wrongtcnum",null);if(p.get()){const r=p.get();if(r.length/2!=c.length/3)o.setUiError("wrongtcnum","texcoord array length is wrong. should be "+c.length/3*2);const a=h.setAttribute(CGL.SHADERVAR_VERTEX_TEXCOORD,r,2)}else if(O!=l.get()||h.getAttribute(CGL.SHADERVAR_VERTEX_TEXCOORD).numItems!=i/2){O=l.get();if(d.length!=i)d=new Float32Array(i);if(l.get()=="0-1"){for(let e=0;e<i;e+=2){d[e]=e/i;d[e+1]=.5}}else if(l.get()=="Fill"){const s=Math.sqrt(i/2);let n=0;for(let t=0;t<s;t++){for(let e=0;e<s;e++){n++;d[n*2+0]=e/s;d[n*2+1]=t/s}}}else if(l.get()=="Random"){for(let e=0;e<i;e+=2){d[e]=Math.random();d[e+1]=Math.random()}}else{for(let e=0;e<i;e+=2){d[e]=0;d[e+1]=0}}const a=h.setAttribute(CGL.SHADERVAR_VERTEX_TEXCOORD,d,2)}v=false}t.onTriggered=function(){if(!u.get())return;if(v)_();const e=s.getShader();if(!e)return;const t=e.glPrimitive;if(i.get())e.glPrimitive=s.gl.LINE_STRIP;else e.glPrimitive=s.gl.LINES;if(b)if(n.get()<=0)b.numItems=c.length/3;else b.numItems=Math.min(n.get(),c.length/3);if(h&&c.length!==0)h.render(e);e.glPrimitive=t;a.trigger()}};Ops.Gl.Meshes.SimpleSpline_v2.prototype=new CABLES.Op;CABLES.OPS["b9cca0c1-17ac-466a-96ed-bb3916433e6f"]={f:Ops.Gl.Meshes.SimpleSpline_v2,objName:"Ops.Gl.Meshes.SimpleSpline_v2"};Ops.Vars.VarSetNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("Value",0);e.varName=e.inDropDown("Variable",[],"",true);new CABLES.VarSetOpWrapper(e,"number",n,e.varName)};Ops.Vars.VarSetNumber_v2.prototype=new CABLES.Op;CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};Ops.Vars.VarGetNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outNumber("Value");e.varName=e.inValueSelect("Variable",[],"",true);new CABLES.VarGetOpWrapper(e,"number",e.varName,n)};Ops.Vars.VarGetNumber_v2.prototype=new CABLES.Op;CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};Ops.User.thrane.Emeritus.SceneProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const i=e.inObject("Scene In");const r=e.outTrigger("Trigger out");const a=e.outArray("Room Array");n.onTriggered=()=>{if(!i.get()){a.set([])}else{let e=i.get();let t=Array.from(e.rooms.values());a.set(t)}r.trigger()}};Ops.User.thrane.Emeritus.SceneProxy.prototype=new CABLES.Op;CABLES.OPS["cedde6fc-d81d-4aed-ae04-2c51f4c24da9"]={f:Ops.User.thrane.Emeritus.SceneProxy,objName:"Ops.User.thrane.Emeritus.SceneProxy"};Ops.Array.ArrayIteratorObjects=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("exe"),i=e.inArray("array"),r=e.outTrigger("trigger"),a=e.outTrigger("finished"),s=e.outNumber("index"),o=e.outObject("value");n.onTriggered=function(){const t=i.get();if(!t)return;for(let e=0;e<t.length;e++){o.setRef(t[e]);s.set(e);r.trigger()}a.trigger()}};Ops.Array.ArrayIteratorObjects.prototype=new CABLES.Op;CABLES.OPS["481d2d8f-b9ee-42a0-a905-caf9dc23a63f"]={f:Ops.Array.ArrayIteratorObjects,objName:"Ops.Array.ArrayIteratorObjects"};Ops.Json.ObjectGetString=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("data"),i=e.inString("Key"),r=e.outString("Result");r.ignoreValueSerialize=true;n.ignoreValueSerialize=true;e.setUiAttrib({extendTitlePort:i.name});i.setUiAttribs({stringTrim:true});i.onChange=n.onChange=a;function a(){if(n.get()){const e=n.get()[i.get()];const t=e===undefined||e===null;if(t){r.setRef(null)}else{r.set(String(e))}}else{r.setRef(null)}}};Ops.Json.ObjectGetString.prototype=new CABLES.Op;CABLES.OPS["7d86cd28-f7d8-44a1-a4da-466c4782aaec"]={f:Ops.Json.ObjectGetString,objName:"Ops.Json.ObjectGetString"};Ops.Json.ObjectGetObject_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("Object"),i=e.inString("Key"),r=e.outObject("Result");r.ignoreValueSerialize=true;n.ignoreValueSerialize=true;e.setUiAttrib({extendTitlePort:i.name});i.setUiAttribs({stringTrim:true});i.onChange=n.onChange=s;i.on("change",a);a();function a(){if(!i.get())e.setUiError("nokey","Missing Key Value");else e.setUiError("nokey",null)}function s(){if(n.get()){r.setRef(n.get()[i.get()])}else{r.set(null)}}};Ops.Json.ObjectGetObject_v2.prototype=new CABLES.Op;CABLES.OPS["d1dfa305-89db-4ca1-b0ac-2d6321d76ae8"]={f:Ops.Json.ObjectGetObject_v2,objName:"Ops.Json.ObjectGetObject_v2"};Ops.Json.ObjectGetNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("Data"),i=e.inString("Key"),r=e.outNumber("Result"),a=e.outBoolNum("Found");r.ignoreValueSerialize=true;n.ignoreValueSerialize=true;e.setUiAttrib({extendTitlePort:i.name});i.setUiAttribs({stringTrim:true});i.onChange=n.onChange=o;i.on("change",s);s();function s(){if(!i.get())e.setUiError("nokey","Missing Key Value");else e.setUiError("nokey",null)}function o(){const e=n.get();if(e){const t=e[i.get()];r.set(parseFloat(t));if(t===undefined)a.set(0);else a.set(1)}else{r.set(0);a.set(0)}}};Ops.Json.ObjectGetNumber_v2.prototype=new CABLES.Op;CABLES.OPS["a7335e79-046e-40da-9e9c-db779b0a5e53"]={f:Ops.Json.ObjectGetNumber_v2,objName:"Ops.Json.ObjectGetNumber_v2"};Ops.Json.ObjectGetArray_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("data"),i=e.inString("key"),r=e.outArray("result"),a=e.outNumber("Length");r.ignoreValueSerialize=true;n.ignoreValueSerialize=true;e.setUiAttrib({extendTitlePort:i.name});i.setUiAttribs({stringTrim:true});n.onChange=i.onChange=o;i.on("change",s);s();function s(){if(!i.get())e.setUiError("nokey","Missing Key Value",1);else e.setUiError("nokey",null)}function o(){r.set(null);const e=n.get();const t=i.get();if(e&&(e.hasOwnProperty(t)||e[t])){r.setRef(e[t]);if(!r.get()){a.set(0)}else{a.set(r.get().length)}}else{a.set(0)}}};Ops.Json.ObjectGetArray_v2.prototype=new CABLES.Op;CABLES.OPS["7c06a818-9c07-493a-8c4f-04eb2c7796f5"]={f:Ops.Json.ObjectGetArray_v2,objName:"Ops.Json.ObjectGetArray_v2"};Ops.User.thrane.Emeritus.Agent.AgentProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const i=e.inObject("Agent In");const r=e.outTrigger("Trigger out");const a=e.outString("Name");n.onTriggered=()=>{if(!i.get()){a.set("N/A - agent not defined")}else{let e=i.get();a.set(e.name)}r.trigger()}};Ops.User.thrane.Emeritus.Agent.AgentProxy.prototype=new CABLES.Op;CABLES.OPS["56025149-5768-4866-a2c6-4a4f439915e3"]={f:Ops.User.thrane.Emeritus.Agent.AgentProxy,objName:"Ops.User.thrane.Emeritus.Agent.AgentProxy"};Ops.Gl.Meshes.Circle_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("render"),E=e.inValue("radius",.5),P=e.inValueSlider("innerRadius",0),L=e.inValueInt("segments",40),k=e.inValueSlider("percent",1),R=e.inValue("steps",0),M=e.inValueBool("invertSteps",false),U=e.inSwitch("mapping",["flat","round"]),V=e.inValueBool("Spline",false),i=e.inValueBool("Draw",true),r=e.outTrigger("trigger"),w=e.outObject("geometry",null,"geometry");e.setPortGroup("Size",[E,P]);e.setPortGroup("Display",[k,R,M]);e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);i.setUiAttribs({title:"Render mesh"});U.set("flat");U.onChange=L.onChange=E.onChange=P.onChange=k.onChange=R.onChange=M.onChange=V.onChange=g;w.ignoreValueSerialize=true;const a=e.patch.cgl;let B=new CGL.Geometry("circle");let G=null;const s=-1;let o=0;let u=null;let D=true;n.onTriggered=l;e.preRender=()=>{l()};n.onLinkChanged=function(){if(!n.isLinked())w.set(null);else w.setRef(B)};function l(){if(!e.patch.cg)return;if(D)p();if(!CGL.TextureEffect.checkOpNotInTextureEffect(e))return;u=e.patch.cg.getShader();if(!u)return;o=u.glPrimitive;if(V.get())u.glPrimitive=a.gl.LINE_STRIP;if(i.get()&&G){G.render(u)}r.trigger();u.glPrimitive=o}function p(){const n=Math.max(3,Math.floor(L.get()));B.clear();const t=[];const i=[];const r=[];const a=[];const s=[];let o=0,u=0;let l=0,p=0;let g=0,m=0;let h=0,c=0;let d=0,f=0;let v=0,b=0;let O=0,_=0;let I=0,A=0;const x=Math.max(0,k.get());const T=[];if(V.get()){let e=0;let t=0;const y=[];for(o=0;o<=n*x;o++){u=360/n*o*CGL.DEG2RAD;I=Math.cos(u)*E.get();A=Math.sin(u)*E.get();_=.5;if(o>0){T.push(e);T.push(t);T.push(0);O=1-(o-1)/n;y.push(O,_)}T.push(I);T.push(A);T.push(0);e=I;t=A}B.setPointVertices(T)}else if(P.get()<=0){for(o=0;o<=n*x;o++){u=360/n*o*CGL.DEG2RAD;I=Math.cos(u)*E.get();A=Math.sin(u)*E.get();if(U.get()=="flat"){O=(Math.cos(u)+1)/2;_=1-(Math.sin(u)+1)/2;v=.5;b=.5}else if(U.get()=="round"){O=1-o/n;_=0;v=O;b=1}t.push([0,0,0],[l,p,0],[I,A,0]);i.push(v,b,g,m,O,_);r.push(0,0,1,0,0,1,0,0,1);a.push(1,0,0,1,0,0,1,0,0);s.push(0,-1,0,0,-1,0,0,-1,0);g=O;m=_;l=I;p=A}B=CGL.Geometry.buildFromFaces(t,"circle");B.vertexNormals=r;B.tangents=a;B.biTangents=s;B.texCoords=i}else{let e=0;const S=n*x;const N=0;for(o=0;o<=S;o++){e++;u=360/n*o*CGL.DEG2RAD;I=Math.cos(u)*E.get();A=Math.sin(u)*E.get();const j=Math.cos(u)*P.get()*E.get();const C=Math.sin(u)*P.get()*E.get();if(U.get()=="round"){O=1-o/n;_=0;v=O;b=1}if(R.get()===0||e%parseInt(R.get(),10)===0&&!M.get()||e%parseInt(R.get(),10)!==0&&M.get()){t.push([j,C,0],[l,p,0],[I,A,0]);t.push([h,c,0],[l,p,0],[j,C,0]);i.push(O,0,g,0,v,1,O,1,g,0,d,1);r.push(0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1);a.push(1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0);s.push(0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1)}d=v;f=b;g=O;m=_;l=I;p=A;h=j;c=C}B=CGL.Geometry.buildFromFaces(t,"circle");B.vertexNormals=r;B.tangents=a;B.biTangents=s;if(U.get()=="flat")B.mapTexCoords2d();else B.texCoords=i}w.setRef(B);if(B.vertices.length==0)return;if(G)G.dispose();G=null;if(e.patch.cg)G=e.patch.cg.createMesh(B,{opId:e.id});D=false}function g(){D=true}e.onDelete=function(){if(G)G.dispose()}};Ops.Gl.Meshes.Circle_v3.prototype=new CABLES.Op;CABLES.OPS["ae07830b-91c3-4cbe-a7d6-d3b737392c16"]={f:Ops.Gl.Meshes.Circle_v3,objName:"Ops.Gl.Meshes.Circle_v3"};Ops.User.thrane.Emeritus.Agent.MovementProxy=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger In");const s=e.inObject("Agent In");const i=e.outTrigger("Trigger out");const o=e.outBoolNum("Is Agent Moving");const u=e.outNumber("Position X");const l=e.outNumber("Position Y");const p=e.outNumber("Speed");const r=e.outNumber("Destination X");const a=e.outNumber("Destination Y");const g=e.outObject("Path");const m=e.outString("Position As String");const h=e.outString("Destination As String");n.onTriggered=()=>{if(!s.get()){o.set(false);u.set(0);l.set(0);p.set(0);r.set(0);a.set(0);m.set("N/A - Position not available");h.set("N/A - Destination not available");g.setRef(null)}else{let e=s.get();let t=e.getMovement();o.set(t.isAgentMoving);u.set(t.position.x);l.set(t.position.y);p.set(t.speed);let n="("+t.position.x+","+t.position.y+")";m.set(n);let i=t.destination;let r=i.getPhysicalPosition();if(t.isAgentMoving){let e=t.path;g.setRef(e)}else{g.setRef(null)}let a=i.getName();a+=" ("+r.getX()+","+r.getY()+")";h.set(a)}i.trigger()}};Ops.User.thrane.Emeritus.Agent.MovementProxy.prototype=new CABLES.Op;CABLES.OPS["9b362f8f-c640-4f21-90df-202b25b3c754"]={f:Ops.User.thrane.Emeritus.Agent.MovementProxy,objName:"Ops.User.thrane.Emeritus.Agent.MovementProxy"};window.addEventListener("load",function(e){CABLES.jsLoaded=new Event("CABLES.jsLoaded");document.dispatchEvent(CABLES.jsLoaded)});var TypeUtils=class{static ensureInstanceOf(e,t){if(!(e instanceof t)){const n=typeof e;const i=t.name;const r=`Expected instance of ${i}, but got ${n}`;console.error(r);console.trace("Instance check failed");throw new TypeError(r)}}static ensureString(e){if(typeof e!=="string"){const t=typeof e;const n="string";const i=`Expected type ${n}, but got ${t}`;console.error(i);console.trace("String check failed");throw new TypeError(i)}}static ensureNumber(e){if(typeof e!=="number"){const t=typeof e;const n="number";const i=`Expected type ${n}, but got ${t}`;console.error(i);console.trace("Number check failed");throw new TypeError(i)}}static ensureFunction(e,t){if(typeof e!=="function"){throw new TypeError(t||"Expected a function")}}static ensureArray(e,t){if(!Array.isArray(e)){throw new TypeError(t||"Expected an array")}}};var Position=class _Position{constructor(e,t){TypeUtils.ensureNumber(e);TypeUtils.ensureNumber(t);this.x=e;this.y=t}getX(){return this.x}getY(){return this.y}copy(){return new _Position(this.x,this.y)}distanceTo(e){TypeUtils.ensureInstanceOf(e,_Position);return Math.sqrt(Math.pow(this.x-e.getX(),2)+Math.pow(this.y-e.getY(),2))}set(e,t){TypeUtils.ensureNumber(e);TypeUtils.ensureNumber(t);this.x=e;this.y=t;return new _Position(e,t)}setX(e){TypeUtils.ensureNumber(e);return new _Position(e,this.y)}setY(e){TypeUtils.ensureNumber(e);return new _Position(this.x,e)}add(e){TypeUtils.ensureInstanceOf(e,_Position);return new _Position(this.x+e.getX(),this.y+e.getY())}isEqual(e){TypeUtils.ensureInstanceOf(e,_Position);return this.x===e.getX()&&this.y===e.getY()}static create(e,t){return new _Position(e,t)}static create2(e){TypeUtils.ensureInstanceOf(e,_Position);return new _Position(e.getX(),e.getY())}};var Location=class _Location{constructor(e,t,n){TypeUtils.ensureString(e);TypeUtils.ensureInstanceOf(t,Position);TypeUtils.ensureInstanceOf(n,Room);this.name=e;this.position=t;this.room=n}getName(){return this.name}getRelativePosition(){return this.position}getPhysicalPosition(){return this.room.getPosition().add(this.position)}getRoom(){return this.room}static create(e,t,n){return new _Location(e,t,n)}static createNullLocation(){return _Location.create("NULL Location (0,0)",Position.create(0,0),Room.createNullRoom())}};var Room=class _Room{constructor(e,t,n){TypeUtils.ensureString(e);TypeUtils.ensureInstanceOf(t,Position);TypeUtils.ensureInstanceOf(n,Position);this.name=e;this.position=t;this.size=n;this.locations=[];this.adjacentRooms=[]}getPosition(){return this.position}getSize(){return this.size}getName(){return this.name}createLocation(e,t,n){TypeUtils.ensureString(e);TypeUtils.ensureNumber(t);TypeUtils.ensureNumber(n);if(e.trim()===""){throw new Error("Location name cannot be empty")}if(this.hasLocation(e)){throw new Error(`Location ${e} already exists in room ${this.name}`)}if(!this.isWithinBounds(t,n)){const a=this.size.getX();const s=this.size.getY();throw new Error(`Location '${e}' relative coordinates (${t}, ${n}) are outside the room's relative boundaries [(0, 0) to (${a}, ${s})] for room ${this.name}`)}const i=Position.create(t,n);const r=Location.create(e,i,this);this.locations.push(r);return r}isWithinBounds(e,t){const n=0;const i=0;const r=this.size.getX();const a=this.size.getY();return e>=n&&e<=r&&t>=i&&t<=a}isWithinRoom(e){TypeUtils.ensureInstanceOf(e,Position);const t=e.getX();const n=e.getY();return t>=this.position.getX()&&t<=this.position.getX()+this.size.getX()&&n>=this.position.getY()&&n<=this.position.getY()+this.size.getY()}hasLocation(t){TypeUtils.ensureString(t);return this.locations.some(e=>e.name===t)}getLocation(t){TypeUtils.ensureString(t);if(!this.hasLocation(t)){throw new Error(`Location ${t} not found in room ${this.name}`)}return this.locations.find(e=>e.name===t)}addAdjacentRoom(e){TypeUtils.ensureString(e);if(!this.adjacentRooms.includes(e)){this.adjacentRooms.push(e)}}isAdjacent(e){TypeUtils.ensureString(e);return this.adjacentRooms.includes(e)}getAdjacentRooms(){return this.adjacentRooms}static create(e,t,n){return new _Room(e,t,n)}static createNullRoom(){return _Room.create("NULL Room (0,0)",Position.create(0,0),Position.create(0,0))}};var SceneFactory=class{static createHouse(){const e=new Scene;const t=e.createRoom("Bedroom",0,0,1,1);const n=e.createRoom("Kitchen",1,0,1,1);const i=e.createRoom("Living Room",2,0,1,1);const r=e.createRoom("Hall",3,0,1,1);const a=e.createRoom("Garden",4,0,1,1);t.createLocation("Bed",.5,1);t.createLocation("Wardrobe",.25,1);n.createLocation("Fridge",.25,1);n.createLocation("Stove",.5,1);i.createLocation("Table",.25,1);i.createLocation("Sofa",.5,1);r.createLocation("Coat Hanger",.5,1);r.createLocation("Front Door",1,1);a.createLocation("Flower Bed",.5,1);a.createLocation("Tree",1,1);t.addAdjacentRoom(i.getName());i.addAdjacentRoom(t.getName());i.addAdjacentRoom(n.getName());n.addAdjacentRoom(i.getName());n.addAdjacentRoom(r.getName());r.addAdjacentRoom(n.getName());r.addAdjacentRoom(a.getName());a.addAdjacentRoom(r.getName());return e}createCatLocations(){}};var Movement=class _Movement{static NULL_LOCATION=Location.createNullLocation();constructor(e,t,n){TypeUtils.ensureInstanceOf(e,Location);TypeUtils.ensureNumber(t);TypeUtils.ensureInstanceOf(n,Scene);this.speed=t;this.scene=n;this.isAgentMoving=false;this.position=e.getPhysicalPosition();this.destination=_Movement.NULL_LOCATION;this.currentRoom=e.getRoom();this.path=Path.createEmpty();this.targetPosition=null}getPosition(){return this.position}getDestination(){return this.destination}getRoom(){return this.currentRoom}isWithinRoom(){return this.currentRoom.isWithinRoom(this.position)}isMoving(){return this.isAgentMoving}isTargetPositionDefined(){return this.targetPosition!=null}canReachTargetPosition(){const e=this.position.distanceTo(this.targetPosition);return e<=this.speed}getTargetPosition(){return this.targetPosition}hasReachedFinalDestination(){return this.targetPosition.isEqual(this.destination.getPhysicalPosition())}moveTo(e){TypeUtils.ensureInstanceOf(e,Location);this.path=this.scene.findShortestPath(this.currentRoom,e.getRoom());if(this.path.isEmpty()){this.isAgentMoving=false;this.targetPosition=null;this.destination=_Movement.NULL_LOCATION;return}this.isAgentMoving=true;this.destination=e;if(this.path.getLength()===1){this.targetPosition=e.getPhysicalPosition();return}this.targetPosition=this.calculateTargetPosition(e)}calculateTargetPosition(e){TypeUtils.ensureInstanceOf(e,Location);const t=this.path.getRoom();this.currentRoom=this.scene.getRoom(t);if(this.path.getRoom()===this.path.getEndRoom()){return e.getPhysicalPosition()}const n=this.currentRoom.getPosition();const i=this.currentRoom.getSize();const r=n.getX()+i.getX()/2;const a=n.getY()+i.getY()/2;return Position.create(r,a)}isWithinReasonbleRange(e){TypeUtils.ensureInstanceOf(e,Location);const t=e.getPhysicalPosition();return this.position.distanceTo(t)<=Intention.EXECUTION_RANGE}update(){if(!this.isMoving()){return true}if(!this.isTargetPositionDefined()){return true}if(this.destination==_Movement.NULL_LOCATION){return true}if(this.canReachTargetPosition()){this.position=Position.create2(this.targetPosition);if(this.hasReachedFinalDestination()){this.isAgentMoving=false;this.targetPosition=null;this.destination=_Movement.NULL_LOCATION;this.path=Path.createEmpty();return true}this.path.advanceIndex();this.targetPosition=this.calculateTargetPosition(this.destination)}const e=this.targetPosition.getX()-this.position.getX();const t=this.targetPosition.getY()-this.position.getY();const n=Math.atan2(t,e);const i=this.position.getX()+this.speed*Math.cos(n);const r=this.position.getY()+this.speed*Math.sin(n);this.position=Position.create(i,r);return false}};var Scene=class{constructor(){this.rooms=new Map}createRoom(e,t,n,i,r){TypeUtils.ensureString(e);TypeUtils.ensureNumber(t);TypeUtils.ensureNumber(n);TypeUtils.ensureNumber(i);TypeUtils.ensureNumber(r);if(this.rooms.has(e)){throw new Error(`Room ${e} already exists`)}if(i<=0||r<=0){throw new Error(`Room dimensions must be positive`)}const a=Position.create(t,n);const s=Position.create(i,r);const o=Room.create(e,a,s);this.rooms.set(e,o);return o}getRoom(e){TypeUtils.ensureString(e);if(!this.rooms.has(e)){throw new Error(`Room ${e} not found`)}return this.rooms.get(e)}findShortestPath(e,t){TypeUtils.ensureInstanceOf(e,Room);TypeUtils.ensureInstanceOf(t,Room);if(e===t){return Path.create([e.getName()])}const n=[{room:e,path:[e.getName()]}];const i=new Set([e.getName()]);while(n.length>0){const{room:r,path:a}=n.shift();if(r===t){return Path.create(a)}const s=r.getAdjacentRooms();for(const o of s){if(!i.has(o)){i.add(o);const u=this.getRoom(o);n.push({room:u,path:[...a,u.getName()]})}}}return Path.createEmpty()}getLocation(e){TypeUtils.ensureString(e);for(const t of this.rooms.values()){if(!t.hasLocation(e)){continue}return t.getLocation(e)}throw new Error(`Location ${e} not found in scene`)}};var Path=class _Path{roomNames;currentIndex;constructor(e){TypeUtils.ensureArray(e);e.forEach(e=>TypeUtils.ensureString(e));this.roomNames=[...e];this.currentIndex=0}getRoomNames(){return[...this.roomNames]}isEmpty(){return this.roomNames.length===0}getLength(){return this.roomNames.length}getRoomAt(e){TypeUtils.ensureNumber(e);if(e<0||e>=this.roomNames.length){throw new RangeError(`Index ${e} is out of bounds`)}return this.roomNames[e]}getRoom(){if(this.isEmpty()){throw new Error("Path is empty")}return this.getRoomAt(this.currentIndex)}getStartRoom(){if(this.isEmpty()){throw new Error("Path is empty")}return this.getRoomAt(0)}getEndRoom(){if(this.isEmpty()){throw new Error("Path is empty")}return this.getRoomAt(this.roomNames.length-1)}getCurrentIndex(){return this.currentIndex}advanceIndex(){if(this.currentIndex<this.roomNames.length-1){this.currentIndex++}}isAtEnd(){if(this.isEmpty())return true;return this.currentIndex==this.roomNames.length-1}static create(e){return new _Path(e)}static createEmpty(){return new _Path([])}};var Belief=class{constructor(e,t){TypeUtils.ensureString(e);TypeUtils.ensureNumber(t);this.name=e;this.value=t}getValue(){return this.value}getName(){return this.name}};var IntegerPercentageBelief=class _IntegerPercentageBelief extends Belief{constructor(e,t){super(e,_IntegerPercentageBelief.clampPercentage(t))}increase(e){TypeUtils.ensureNumber(e);this.value=_IntegerPercentageBelief.clampPercentage(this.value+e)}decrease(e){TypeUtils.ensureNumber(e);this.value=_IntegerPercentageBelief.clampPercentage(this.value-e)}static clampPercentage(e){TypeUtils.ensureNumber(e);if(e>100){return 100}else if(e<0){return 0}return Math.round(e)}};var BeliefUpdater=class{update(e){}};var IntegerPercentageBeliefUpdater=class extends BeliefUpdater{constructor(e,t){super();TypeUtils.ensureInstanceOf(e,IntegerPercentageBelief);TypeUtils.ensureNumber(t);this.belief=e;this.value=t}update(e){TypeUtils.ensureInstanceOf(e,Agent);this.belief.increase(this.value)}};var BeliefManager=class{constructor(){this.beliefs=[];this.beliefUpdaters=[]}addBelief(e){TypeUtils.ensureInstanceOf(e,Belief);this.beliefs.push(e)}getBelief(t){TypeUtils.ensureString(t);return this.beliefs.find(e=>e.name===t)}registerBeliefUpdater(e){TypeUtils.ensureInstanceOf(e,BeliefUpdater);this.beliefUpdaters.push(e)}update(t){TypeUtils.ensureInstanceOf(t,Agent);this.beliefUpdaters.forEach(e=>{e.update(t)})}};var Desire=class{constructor(e,t,n){TypeUtils.ensureString(e);TypeUtils.ensureFunction(t);TypeUtils.ensureNumber(n);this.name=e;this.condition=t;this.priority=n}getName(){return this.name}getCondition(){return this.condition}getPriority(){return this.priority}isActive(e){TypeUtils.ensureInstanceOf(e,Agent);return this.condition(e)}};var DesireFactory=class{static createSleepDesire(){return new Desire("Sleep",e=>e.getBelief("Fatigue").getValue()>70,8)}static createEatDesire(){return new Desire("Eat",e=>e.getBelief("Hunger").getValue()>60,7)}static createEntertainDesire(){return new Desire("Entertain",e=>e.getBelief("Boredom").getValue()>50,5)}static createSitIdleDesire(){return new Desire("Sit Idle",e=>true,3)}static createNullDesire(){return new Desire("NullDesire",e=>false,0)}};var DesireManager=class{constructor(){this.desires=[];this.activeDesires=[];this.bestDesire=null}addDesire(e){TypeUtils.ensureInstanceOf(e,Desire);if(this.hasDesire(e.name)){throw new Error(`Desire with name '${e.name}' already exists.`)}this.desires.push(e)}hasDesire(t){TypeUtils.ensureString(t);if(t.length===0)return false;return this.desires.some(e=>e.name===t)}getDesires(){return this.desires}getActiveDesires(){return this.activeDesires}getCurrentBestDesire(){return this.bestDesire}update(t){TypeUtils.ensureInstanceOf(t,Agent);this.activeDesires=this.desires.filter(e=>e.isActive(t));if(this.activeDesires.length===0){this.bestDesire=null;return}this.activeDesires.sort((e,t)=>t.priority-e.priority);this.bestDesire=this.activeDesires[0]}};var Intention=class _Intention{static EXECUTION_RANGE=.01;constructor(e,t,n,i,r){TypeUtils.ensureString(e);TypeUtils.ensureArray(t);TypeUtils.ensureFunction(n);TypeUtils.ensureFunction(i);TypeUtils.ensureInstanceOf(r,Location);this.name=e;this.actions=t;this.preconditions=n;this.effects=i;this.location=r}getName(){return this.name}getLocation(){return this.location}getPreconditions(){return this.preconditions}getEffects(){return this.effects}canExecute(e){TypeUtils.ensureInstanceOf(e,Agent);return this.preconditions(e)}execute(t){TypeUtils.ensureInstanceOf(t,Agent);if(this.canExecute(t)){this.actions.forEach(e=>e(t));this.effects(t);return true}return false}static create(e,t,n,i,r){return new _Intention(e,t,n,i,r)}static createNullIntention(){return new _Intention("NULL Intention",[e=>{}],e=>true,e=>{},Location.createNullLocation())}};var IntentionFactory=class{static createSleepIntention(e){return new Intention("Sleep",[e=>{e.getBelief("Fatigue").decrease(50);e.getBelief("Hunger").increase(10)}],e=>e.getBelief("Fatigue").getValue()>70,e=>{},e.getLocation("Bed"))}static createEatIntention(e){return new Intention("Eat",[e=>{e.getBelief("Hunger").decrease(40);e.getBelief("Fatigue").increase(5)}],e=>e.getBelief("Hunger").getValue()>60,e=>{},e.getLocation("Fridge"))}static createEntertainIntention(e){return new Intention("Entertain",[e=>{e.getBelief("Boredom").decrease(25)}],e=>e.getBelief("Boredom").getValue()>50,e=>{},e.getLocation("Flower Bed"))}static createSitIdleIntention(e){return new Intention("Sit Idle",[e=>{e.getBelief("Boredom").increase(5)}],e=>true,e=>{},e.getLocation("Sofa"))}};var IntentionManager=class _IntentionManager{static NULL_INTENTION=Intention.createNullIntention();constructor(){this.intentions=[];this.currentIntention=_IntentionManager.NULL_INTENTION}addIntention(e){TypeUtils.ensureInstanceOf(e,Intention);this.intentions.push(e)}getCurrentIntention(){return this.currentIntention}update(t,n){TypeUtils.ensureInstanceOf(t,Agent);if(!n){this.currentIntention=_IntentionManager.NULL_INTENTION;return}this.currentIntention=this.intentions.find(e=>e.name===n.name&&e.canExecute(t));if(!this.currentIntention){this.currentIntention=_IntentionManager.NULL_INTENTION}}executeCurrentIntention(e){TypeUtils.ensureInstanceOf(e,Agent);return this.currentIntention.execute(e)}};var Agent=class{constructor(e,t,n,i){TypeUtils.ensureString(e);TypeUtils.ensureInstanceOf(t,Location);TypeUtils.ensureNumber(n);TypeUtils.ensureInstanceOf(i,Scene);this.name=e;this.movement=new Movement(t,n,i);this.beliefManager=new BeliefManager;this.desireManager=new DesireManager;this.intentionManager=new IntentionManager;this.scene=i}addBelief(e){this.beliefManager.addBelief(e)}getBelief(e){return this.beliefManager.getBelief(e)}registerBeliefUpdater(e){this.beliefManager.registerBeliefUpdater(e)}addDesire(e){this.desireManager.addDesire(e)}addIntention(e){this.intentionManager.addIntention(e)}getCurrentIntention(){return this.intentionManager.getCurrentIntention()}getMovement(){return this.movement}getDesireManager(){return this.desireManager}run(){this.beliefManager.update(this);this.desireManager.update(this);this.movement.update();if(this.movement.isMoving())return;this.intentionManager.update(this,this.desireManager.getCurrentBestDesire());const e=this.getCurrentIntention();if(e===null)return;if(e==IntentionManager.NULL_INTENTION)return;const t=e.getLocation();const n=t.getRoom();const i=this.movement.getDestination();const r=this.movement.getRoom();if(r===n){if(this.movement.isWithinReasonbleRange(t)){this.intentionManager.executeCurrentIntention(this);return}}this.movement.moveTo(t)}};var AgentFactory=class _AgentFactory{static MOVEMENT_SPEED=1;static createNullAgent(e){const t=Location.createNullLocation();return new Agent("NULL Agent",t,_AgentFactory.MOVEMENT_SPEED,e)}static createOldManAgent(e){const t=e.getLocation("Bed");const n=new Agent("Acticus",t,_AgentFactory.MOVEMENT_SPEED,e);const i=new IntegerPercentageBelief("Hunger",0);const r=new IntegerPercentageBelief("Fatigue",0);const a=new IntegerPercentageBelief("Boredom",50);n.addBelief(i);n.addBelief(r);n.addBelief(a);n.registerBeliefUpdater(new IntegerPercentageBeliefUpdater(i,5));n.registerBeliefUpdater(new IntegerPercentageBeliefUpdater(r,5));n.registerBeliefUpdater(new IntegerPercentageBeliefUpdater(a,5));n.addDesire(DesireFactory.createSleepDesire());n.addDesire(DesireFactory.createEatDesire());n.addDesire(DesireFactory.createEntertainDesire());n.addDesire(DesireFactory.createSitIdleDesire());n.addDesire(DesireFactory.createNullDesire());n.addIntention(IntentionFactory.createSleepIntention(e));n.addIntention(IntentionFactory.createEatIntention(e));n.addIntention(IntentionFactory.createEntertainIntention(e));n.addIntention(IntentionFactory.createSitIdleIntention(e));return n}};var Simulation=class{constructor(){this.scene=SceneFactory.createHouse();this.agent=AgentFactory.createOldManAgent(this.scene);this.step=0}getSimulationScene(){return this.scene}getSimulationAgent(){return this.agent}getGeneration(){return this.step}run(){this.agent.run();this.step++}};var simulation=new Simulation;var scene=simulation.getSimulationScene();var oldMan=simulation.getSimulationAgent();for(let e=0;e<30;e++){console.log(`--- Generation: ${simulation.getGeneration()} ---`);simulation.run();let e=oldMan.getBelief("Boredom").getValue();let t=oldMan.getBelief("Hunger").getValue();let n=oldMan.getBelief("Fatigue").getValue();console.log(`Boredom: ${e}`);console.log(`Hunger: ${t}`);console.log(`Fatigue: ${n}`);let i=oldMan.getDesireManager();let r=i.getCurrentBestDesire();if(r)console.log(`Current Desire: ${r.getName()}`);else console.log("No current desire.");let a=i.getActiveDesires();if(a.length>0){let t="Active Desires:";a.forEach(e=>{t+=` ${e.name}`;if(e.isActive(oldMan)){t+="/satisfied"}else{t+="/not satisfied"}t+=`/${e.priority}`});console.log(t)}else{console.log("No active desires.")}let s=oldMan.getCurrentIntention();console.log(`Current Intention: ${s.name}`);let o=oldMan.getMovement();let u=o.getRoom();let l=u.getPosition();console.log(`Agent's target room: ${u.getName()} (${l.getX()}, ${l.getY()})`);console.log(`Agent is witin room: ${o.isWithinRoom()}`);let p=o.getPosition();console.log(`Current Position: (${p.getX()}, ${p.getY()})`);if(o.isTargetPositionDefined()){let e=o.getTargetPosition();console.log(`Target Position: (${e.getX()}, ${e.getY()})`)}else{console.log("No target position.")}let g=o.getDestination();if(g){let e=g.getPhysicalPosition();console.log(`Agent going to location: ${g.name} (${e.getX()}, ${e.getY()})`)}else{console.log("No destination.")}let m=o.isMoving();console.log(`Agent is moving: ${m}`);let h=o.path;if(h){console.log(`Path length: ${h.getLength()}`);console.log(`Path: ${h.getRoomNames()}`);console.log(`Current index: ${h.currentIndex}`)}else{console.log("No path.")}}(()=>{"use strict";var e={};const t=class{constructor(n,e){e=e||{};this._op=n;n.patchId=n.addInPort(new CABLES.Port(n,"patchId",CABLES.OP_PORT_TYPE_STRING,{display:"readonly",hidePort:true,hideParam:true}));n.setUiAttribs({subPatchOp:{version:2}});if(n.uiAttribs.parentOfSubpatch){n.patchId.set(n.uiAttribs.parentOfSubpatch)}else{if(e.subId)n.patchId.set(e.subId);else n.patchId.set(CABLES.generateUUID())}n.patchId.onChange=()=>{if(e.subId)n.patchId.value=e.subId};n.init=()=>{n.setStorage({subPatchVer:2})};n.loadDependencies=(e,t)=>{if(CABLES.UI){gui.serverOps.loadProjectDependencies(e,()=>{if(t)t()})}else if(t)t()};n.on("delete",()=>{if(n.patch.clearSubPatchCache)n.patch.clearSubPatchCache(this.patchId);const t=n.patch.ops;for(let e=t.length-1;e>=0;e--)if(t[e]&&t[e].uiAttribs&&t[e].uiAttribs.subPatch==n.patchId.get())n.patch.deleteOp(t[e].id)});this._op.isExposableSubpatchOp=()=>{return true}}get patchId(){return this._op.patchId.get()}};CABLES.SubPatchOp=t;((this.CABLES=this.CABLES||{}).COREMODULES=this.CABLES.COREMODULES||{}).Subpatchop=e.Cables})();(()=>{"use strict";var e={};const s={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15,PACO_OP_RELOAD:16}};const t=class{constructor(t,e,n,i,r,a){this._valuePort=n;this._varNamePort=i;this._op=t;this._type=e;this._typeId=-1;this._triggerPort=r;this._nextPort=a;this._btnCreate=t.inTriggerButton("Create new variable");this._btnCreate.setUiAttribs({hidePort:true});this._btnCreate.onTriggered=this._createVar.bind(this);this._helper=t.inUiTriggerButtons("",["Rename"]);this._helper.setUiAttribs({hidePort:true});this._helper.onTriggered=e=>{if(e=="Rename")CABLES.CMD.PATCH.renameVariable(t.varName.get())};this._op.setPortGroup("Variable",[this._helper,this._varNamePort,this._btnCreate]);i.setUiAttribs({_variableSelect:true});this._op.on("uiParamPanel",this._updateVarNamesDropdown.bind(this));this._op.patch.addEventListener("variablesChanged",this._updateName.bind(this));this._op.patch.addEventListener("variableRename",this._renameVar.bind(this));this._varNamePort.onChange=this._updateName.bind(this);this._isTexture=this._valuePort.uiAttribs.objType==="texture";this._valuePort.changeAlways=true;if(this._triggerPort){this._triggerPort.onTriggered=()=>{this._setVarValue(true)}}else{this._valuePort.onChange=this._setVarValue.bind(this)}this._op.init=()=>{this._updateName();if(!this._triggerPort)this._setVarValue();this._updateErrorUi()};if(e=="array")this._typeId=s.OP.OP_PORT_TYPE_ARRAY;else if(e=="object")this._typeId=s.OP.OP_PORT_TYPE_OBJECT;else if(e=="string")this._typeId=s.OP.OP_PORT_TYPE_STRING;else if(e=="texture")this._typeId=s.OP.OP_PORT_TYPE_TEXTURE;else this._typeId=s.OP.OP_PORT_TYPE_VALUE}_updateErrorUi(){if(CABLES.UI){if(!this._varNamePort.get())this._op.setUiError("novarname","no variable selected");else{if(this._op.hasUiErrors){this._op.setUiError("novarname",null)}}}}_updateName(){const e=this._varNamePort.get();this._op.setTitle("var set");this._op.setUiAttrib({extendTitle:"#"+e});this._updateErrorUi();const t=this._op.patch.getVar(e);if(t&&!t.type)t.type=this._type;if(!this._op.patch.hasVar(e)&&e!=0&&!this._triggerPort){this._setVarValue()}if(!this._op.patch.hasVar(e)&&e!=0&&this._triggerPort){if(this._type=="string")this._op.patch.setVarValue(e,"");else if(this._type=="number")this._op.patch.setVarValue(e,"");else this._op.patch.setVarValue(e,null)}if(this._op.isCurrentUiOp()){this._updateVarNamesDropdown();this._op.refreshParams()}this._updateDisplay();this._op.patch.emitEvent("opVariableNameChanged",this._op,this._varNamePort.get())}_createVar(){CABLES.CMD.PATCH.createVariable(this._op,this._type,()=>{this._updateName()})}_updateDisplay(){this._valuePort.setUiAttribs({greyout:!this._varNamePort.get()})}_updateVarNamesDropdown(){if(CABLES.UI&&CABLES.UI.loaded&&CABLES.UI.loaded){const e=CABLES.UI.uiProfiler.start("[vars] _updateVarNamesDropdown");const t=[];const n=this._op.patch.getVars();for(const i in n)if(n[i].type==this._type&&i!="0")t.push(i);this._varNamePort.uiAttribs.values=t;e.finish()}}_renameVar(e,t){if(e!=this._varNamePort.get())return;this._varNamePort.set(t);this._updateName()}_setVarValue(e){const t=this._varNamePort.get();if(!t)return;const n=this._valuePort.get();if(this._typeId==s.OP.OP_PORT_TYPE_VALUE||this._typeId==s.OP.OP_PORT_TYPE_STRING){this._op.patch.setVarValue(t,n)}else if(this._typeId==s.OP.OP_PORT_TYPE_ARRAY){this._arr=[];CABLES.copyArray(n,this._arr);this._op.patch.setVarValue(t,this._arr)}else{if(this._typeId==s.OP.OP_PORT_TYPE_OBJECT){if(this._isTexture)this._op.patch.setVarValue(t,CGL.Texture.getEmptyTexture(this._op.patch.cgl));else this._op.patch.setVarValue(t,null);if(n&&n.tex&&n._cgl&&!this._isTexture)this._op.setUiError("texobj","Dont use object variables for textures, use varSetTexture");else this._op.setUiError("texobj",null)}this._op.patch.setVarValue(t,n)}if(e&&this._nextPort)this._nextPort.trigger()}};const n=class{constructor(e,t,n,i){this._op=e;this._type=t;this._varnamePort=n;this._variable=null;this._valueOutPort=i;this._listenerId=null;this._op.on("uiParamPanel",this._updateVarNamesDropdown.bind(this));this._op.on("uiErrorChange",this._updateTitle.bind(this));this._op.patch.on("variableRename",this._renameVar.bind(this));this._op.patch.on("variableDeleted",e=>{if(this._op.isCurrentUiOp())this._op.refreshParams()});n.setUiAttribs({_variableSelect:true});n.setUiAttribs({_variableSelectGet:true});this._varnamePort.onChange=this._changeVar.bind(this);this._op.patch.addEventListener("variablesChanged",this._init.bind(this));this._op.onDelete=()=>{if(this._variable&&this._listenerId)this._variable.off(this._listenerId)};this._op.init=()=>{this._init()}}get variable(){return this._variable}_changeVar(){if(this._variable&&this._listenerId){this._variable.off(this._listenerId)}this._init()}_renameVar(e,t){if(e!=this._varnamePort.get())return;this._varnamePort.set(t);this._updateVarNamesDropdown();this._updateTitle();this._listenerId=this._variable.on("change",this._setValueOut.bind(this))}_updateVarNamesDropdown(){if(CABLES.UI&&CABLES.UI.loaded){const e=[];const t=this._op.patch.getVars();for(const n in t)if(t[n].type==this._type&&n!="0")e.push(n);this._op.varName.uiAttribs.values=e}}_setValueOut(e){if(this._valueOutPort)if(this._typeId==s.OP.OP_PORT_TYPE_ARRAY&&this._typeId==s.OP.OP_PORT_TYPE_OBJECT)this._valueOutPort.setRef(e);else this._valueOutPort.set(e)}_updateTitle(){if(this._variable){this._op.setUiError("unknownvar",null);this._op.setTitle("var get");this._op.setUiAttrib({extendTitle:"#"+this._varnamePort.get()});if(this._valueOutPort)this._valueOutPort.set(this._variable.getValue())}else{this._op.setUiError("unknownvar","unknown variable! - there is no setVariable with this name ("+this._varnamePort.get()+")");this._op.setUiAttrib({extendTitle:"#invalid"});if(this._valueOutPort)this._valueOutPort.set(0)}}_init(){this._updateVarNamesDropdown();if(this._variable&&this._listenerId)this._variable.off(this._listenerId);this._variable=this._op.patch.getVar(this._op.varName.get());if(this._variable)this._listenerId=this._variable.on("change",this._setValueOut.bind(this));this._updateTitle();this._op.patch.emitEvent("opVariableNameChanged",this._op,this._varnamePort.get())}};CABLES.VarSetOpWrapper=t;CABLES.VarGetOpWrapper=n;((this.CABLES=this.CABLES||{}).COREMODULES=this.CABLES.COREMODULES||{}).Vargetset=e.Cables})();(()=>{"use strict";var e={};class p{constructor(e,t){this.initiator=e;this._options=t}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.UI){console.error("["+this.initiator+"]",...arguments)}if(this._options&&this._options.onError){this._options.onError(this.initiator,...arguments)}}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const r={};r.float32Concat=function(e,t){if(!(e instanceof Float32Array))e=new Float32Array(e);if(!(t instanceof Float32Array))t=new Float32Array(t);const n=new Float32Array(e.length+t.length);n.set(e);n.set(t,e.length);return n};const U=function(e){let t=e.split(".")[e.split(".").length-1];if(t.contains(CONSTANTS.OP.OP_VERSION_PREFIX)){const n=t.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];t=t.substring(0,t.length-(CONSTANTS.OP.OP_VERSION_PREFIX+n).length)}return t};const V=function(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.seededRandom()*(e+1));const i=t[e];t[e]=t[n];t[n]=i}return t};const t={};const n=function(){let e=Math.random().toString(36).substr(2,9);if(t.hasOwnProperty(e))e=n();t[e]=true;return e};const w=null&&n;const i=function(){let n=(new Date).getTime();const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=(n+Math.random()*16)%16|0;n=Math.floor(n/16);return(e=="x"?t:t&3|8).toString(16)});return e};const B=null&&i;const G=null&&i;function a(e){for(const t in e){if(e[t]&&typeof objValue==="object"&&e[t].constructor===Object)e[t]=a(e[t]);if(e[t]===null||e[t]===undefined)delete e[t];else if(Array.isArray(e[t])&&e[t].length==0)delete e[t]}return e}const s=function(n,e="id"){let i=0;if(Array.prototype.reduce){i=n.split("").reduce((e,t)=>{e=(e<<5)-e+t.charCodeAt(0);return e&e},0)}else{if(n.length>0){for(let t=0;t<n.length;t++){let e=n.charCodeAt(t);i=(i<<5)-i+e;i&=i}}}return e+""+i};const D=null&&s;let o=0;const F=function(){o++;return o};const z=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*(3-2*t);return e};const X=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*t*(t*(t*6-15)+10);return e};const q=function(e,t,n){return Math.min(Math.max(e,t),n)};const Y=function(e,t,n,i,r,a){if(e>=n)return r;if(e<=t)return i;let s=false;const o=Math.min(t,n);const u=Math.max(t,n);if(o!=t)s=true;let l=false;const p=Math.min(i,r);const g=Math.max(i,r);if(p!=i)l=true;let m=0;let h=0;if(s)m=(u-e)*(g-p)/(u-o);else m=(e-o)*(g-p)/(u-o);if(l)h=g-m;else h=m+p;if(!a)return h;if(a==1){e=Math.max(0,Math.min(1,(h-i)/(r-i)));return i+e*e*(3-2*e)*(r-i)}if(a==2){e=Math.max(0,Math.min(1,(h-i)/(r-i)));return i+e*e*e*(e*(e*6-15)+10)*(r-i)}return h};Math.randomSeed=1;Math.setRandomSeed=function(e){Math.randomSeed=e*50728129;if(e!=0){Math.randomSeed=Math.seededRandom()*17624813;Math.randomSeed=Math.seededRandom()*9737333}};Math.seededRandom=function(e,t){if(Math.randomSeed===0)Math.randomSeed=Math.random()*999;e=e||1;t=t||0;Math.randomSeed=(Math.randomSeed*9301+49297)%233280;const n=Math.randomSeed/233280;return t+n*(e-t)};r.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};r.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};String.prototype.endl=function(){return this+"\n"};String.prototype.startsWith=function(e){if(!this||!e)return false;if(this.length>=e.length){if(this.substring(0,e.length)==e)return true}return false};String.prototype.endsWith=String.prototype.endsWith||function(e){return this.match(e+"$")==e};String.prototype.contains=String.prototype.contains||function(e){return this.indexOf(e)>-1};const H=function(e=""){if(!e)return"";if(e.startsWith("data:"))return;if(e.contains("?"))e+="&";else e+="?";return e+"cache="+CABLES.uuid()};const W=function(t,n){if(!t)return null;n=n||[];n.length=t.length;for(let e=0;e<t.length;e++){n[e]=t[e]}return n};const Z=function(e){let t=CABLES.filename(e);const n=t.split(".");t=n[0];return t};const K=function(){console.log("logstack",(new Error).stack)};const Q=function(e){let t="";if(!e)return"";if(e.startsWith("data:")&&e.contains(":")){const n=e.split(",");return n[0]}let n=(e+"").split("/");if(n.length>0){const i=n[n.length-1];let e=i.split("?");t=e[0]}return t||""};const $=function(e,t,n,i,r){l({url:e,cb:t,method:n,data:i,contenttype:r,sync:true})};const J=function(e,t,n,i,r,a,s={},o={}){const u={url:e,cb:t,method:n,data:i,contenttype:r,sync:false,jsonP:a,headers:s};if(o&&o.credentials)u.credentials=o.credentials;l(u)};const l=function(t){if(!t.hasOwnProperty("asynch"))t.asynch=true;let n;try{n=new XMLHttpRequest}catch(e){}n.onreadystatechange=function(){if(n.readyState!=4)return;if(t.cb){if(n.status==200||n.status==0)t.cb(false,n.responseText,n);else t.cb(true,n.responseText,n)}};try{n.open(t.method?t.method.toUpperCase():"GET",t.url,!t.sync)}catch(e){if(t.cb&&e)t.cb(true,e.msg,n)}if(typeof t.headers==="object"){if(t.headers){const i=Object.keys(t.headers);for(let e=0;e<i.length;e++){const r=i[e];const a=t.headers[r];n.setRequestHeader(r,a)}}}if(t.credentials&&t.credentials!=="omit"){n.withCredentials=true}try{if(!t.post&&!t.data){n.send()}else{n.setRequestHeader("Content-type",t.contenttype?t.contenttype:"application/x-www-form-urlencoded");n.send(t.data||t.post)}}catch(e){if(t.cb)t.cb(true,e.msg,n)}};const ee=function(e){if(!e&&e!==0)return"Unidentified";const t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};if(t[e]){return t[e]}else{return String.fromCharCode(e)}};window.performance=window.performance||{offset:Date.now(),now:function e(){return Date.now()-this.offset}};const te=function(e){CABLES.errorConsole=CABLES.errorConsole||{log:[]};CABLES.errorConsole.log.push({initiator:e,arguments:arguments});if(!CABLES.errorConsole.ele){const t=document.createElement("div");t.id="cablesErrorConsole";t.style.width="90%";t.style.height="300px";t.style.zIndex="9999999";t.style.display="inline-block";t.style.position="absolute";t.style.padding="10px";t.style.fontFamily="monospace";t.style.color="red";t.style.backgroundColor="#200";CABLES.errorConsole.ele=t;document.body.appendChild(t)}let i="ERROR<br/>for more info, open your browsers dev tools console (Ctrl+Shift+I or Command+Alt+I)<br/>";for(let n=0;n<CABLES.errorConsole.log.length;n++){i+=CABLES.errorConsole.log[n].initiator+" ";for(let e=1;e<CABLES.errorConsole.log[n].arguments.length;e++){if(e>2)i+=", ";let t=CABLES.errorConsole.log[n].arguments[e];if(t.constructor.name.indexOf("Error")>-1||t.constructor.name.indexOf("error")>-1){let e="Uncaught ErrorEvent ";if(t.message)e+=" message: "+t.message;i+=e}else if(typeof t=="string")i+=t;else if(typeof t=="number")i+=String(t)+" "}i+="<br/>"}CABLES.errorConsole.ele.innerHTML=i};class u{constructor(e){this._init();this._first=true;this._wireMesh=null;if(e)this.apply(e)}_init(){this._max=[-0,-0,-0];this._min=[0,0,0];this._center=[0,0,0];this._size=[0,0,0];this._maxAxis=0;this._first=true}get maxAxis(){return this._maxAxis||1}get size(){return this._size}get center(){return this._center}get x(){return this._center[0]}get y(){return this._center[1]}get z(){return this._center[2]}get minX(){return this._min[0]}get minY(){return this._min[1]}get minZ(){return this._min[2]}get maxX(){return this._max[0]}get maxY(){return this._max[1]}get maxZ(){return this._max[2]}apply(t,e){if(!t){return}if(t instanceof u){const n=t;this.applyPos(n.maxX,n.maxY,n.maxZ);this.applyPos(n.minX,n.minY,n.minZ)}else{for(let e=0;e<t.vertices.length;e+=3)this.applyPos(t.vertices[e],t.vertices[e+1],t.vertices[e+2])}this.calcCenterSize()}copy(){return new u(this)}get changed(){return!(this._max[0]==-Number.MAX_VALUE&&this._max[1]==-Number.MAX_VALUE&&this._max[2]==-Number.MAX_VALUE)}applyPos(e,t,n){if(e==Number.MAX_VALUE||e==-Number.MAX_VALUE||t==Number.MAX_VALUE||t==-Number.MAX_VALUE||n==Number.MAX_VALUE||n==-Number.MAX_VALUE)return;if(!CABLES.UTILS.isNumeric(e)||!CABLES.UTILS.isNumeric(t)||!CABLES.UTILS.isNumeric(n))return;if(this._first){this._max[0]=e;this._max[1]=t;this._max[2]=n;this._min[0]=e;this._min[1]=t;this._min[2]=n;this._first=false;return}this._max[0]=Math.max(this._max[0],e);this._max[1]=Math.max(this._max[1],t);this._max[2]=Math.max(this._max[2],n);this._min[0]=Math.min(this._min[0],e);this._min[1]=Math.min(this._min[1],t);this._min[2]=Math.min(this._min[2],n)}calcCenterSize(){if(this._first)return;this._size[0]=this._max[0]-this._min[0];this._size[1]=this._max[1]-this._min[1];this._size[2]=this._max[2]-this._min[2];this._center[0]=(this._min[0]+this._max[0])/2;this._center[1]=(this._min[1]+this._max[1])/2;this._center[2]=(this._min[2]+this._max[2])/2;this._maxAxis=Math.max(this._size[2],Math.max(this._size[0],this._size[1]))}mulMat4(e){if(this._first){this._max[0]=0;this._max[1]=0;this._max[2]=0;this._min[0]=0;this._min[1]=0;this._min[2]=0;this._first=false}vec3.transformMat4(this._max,this._max,e);vec3.transformMat4(this._min,this._min,e);this.calcCenterSize()}render(e,t,n){if(!this._wireMesh)this._wireMesh=new CGL.WireCube(e);e.pushModelMatrix();mat4.translate(e.mMatrix,e.mMatrix,this._center);if(CABLES.UI&&n){CABLES.UI.OverlayMeshes.drawCube(n,this._size[0]/2,this._size[1]/2,this._size[2]/2)}e.popModelMatrix()}}const g=function(e){this.name=e||"unknown";this._log=new p("cgl_geometry");this.faceVertCount=3;this.glPrimitive=null;this._attributes={};this._vertices=[];this.verticesIndices=[];this.isGeometry=true;this.morphTargets=[];Object.defineProperty(this,"vertices",{get(){return this._vertices},set(e){this.setVertices(e)}});Object.defineProperty(this,"texCoords",{get(){const e=this.getAttribute("texCoords");if(!e)return[];return e.data},set(e){this.setAttribute("texCoords",e,2)}});Object.defineProperty(this,"vertexNormals",{get(){const e=this.getAttribute("vertexNormals");if(!e)return[];return e.data},set(e){this.setAttribute("vertexNormals",e,3)}});Object.defineProperty(this,"tangents",{get(){const e=this.getAttribute("tangents");if(!e)return[];return e.data},set(e){this.setAttribute("tangents",e,3)}});Object.defineProperty(this,"biTangents",{get(){const e=this.getAttribute("biTangents");if(!e)return[];return e.data},set(e){this.setAttribute("biTangents",e,3)}});Object.defineProperty(this,"vertexColors",{get(){const e=this.getAttribute("vertexColors");if(!e)return[];return e.data},set(e){this.setAttribute("vertexColors",e,4)}})};g.prototype.clear=function(){this._vertices=new Float32Array([]);this.verticesIndices=[];this.texCoords=new Float32Array([]);this.vertexNormals=new Float32Array([]);this.tangents=[];this.biTangents=[];this._attributes={}};g.prototype.getAttributes=function(){return this._attributes};g.prototype.getAttribute=function(e){for(const t in this._attributes){if(this._attributes[t].name==e)return this._attributes[t]}return null};g.prototype.setAttribute=function(e,t,n){let i="";if(!n||n>4){console.log("itemsize wrong?",n,e);this._log.stack("itemsize");n=3}if(n==1)i="float";else if(n==2)i="vec2";else if(n==3)i="vec3";else if(n==4)i="vec4";const r={name:e,data:t,itemSize:n,type:i};this._attributes[e]=r};g.prototype.copyAttribute=function(e,t){const n=this.getAttribute(e);t.setAttribute(e,new Float32Array(n.data),n.itemSize)};g.prototype.setVertices=function(e){if(e instanceof Float32Array)this._vertices=e;else this._vertices=new Float32Array(e)};g.prototype.setTexCoords=function(e){if(e instanceof Float32Array)this.texCoords=e;else this.texCoords=new Float32Array(e)};g.prototype.calcNormals=function(e){const t={smooth:e};this.calculateNormals(t)};g.prototype.flipNormals=function(t,n,i){let r=vec3.create();if(t==undefined)t=1;if(n==undefined)n=1;if(i==undefined)i=1;for(let e=0;e<this.vertexNormals.length;e+=3){vec3.set(r,this.vertexNormals[e+0],this.vertexNormals[e+1],this.vertexNormals[e+2]);r[0]*=-t;r[1]*=-n;r[2]*=-i;vec3.normalize(r,r);this.vertexNormals[e+0]=r[0];this.vertexNormals[e+1]=r[1];this.vertexNormals[e+2]=r[2]}};g.prototype.getNumTriangles=function(){if(this.verticesIndices&&this.verticesIndices.length)return this.verticesIndices.length/3;return this.vertices.length/3};g.prototype.flipVertDir=function(){const t=[];t.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e+=3){t[e]=this.verticesIndices[e+2];t[e+1]=this.verticesIndices[e+1];t[e+2]=this.verticesIndices[e]}this.verticesIndices=t};g.prototype.setPointVertices=function(t){if(t.length%3!==0){this._log.error("SetPointVertices: Array must be multiple of three.");return}if(!(t instanceof Float32Array))this.vertices=new Float32Array(t);else this.vertices=t;if(!(this.texCoords instanceof Float32Array))this.texCoords=new Float32Array(t.length/3*2);this.verticesIndices.length=t.length/3;for(let e=0;e<t.length/3;e++){this.verticesIndices[e]=e;this.texCoords[e*2]=0;this.texCoords[e*2+1]=0}};g.prototype.merge=function(t){if(!t)return;if(this.isIndexed()!=t.isIndexed()){if(this.isIndexed()){this.unIndex(false,true)}if(t.isIndexed()){const e=t.copy();e.unIndex(false,true);t=e}}const n=this.verticesIndices.length;const i=this._vertices.length/3;this.verticesIndices.length+=t.verticesIndices.length;for(let e=0;e<t.verticesIndices.length;e++)this.verticesIndices[n+e]=t.verticesIndices[e]+i;this.vertices=r.float32Concat(this._vertices,t.vertices);this.texCoords=r.float32Concat(this.texCoords,t.texCoords);this.vertexNormals=r.float32Concat(this.vertexNormals,t.vertexNormals);this.tangents=r.float32Concat(this.tangents,t.tangents);this.biTangents=r.float32Concat(this.biTangents,t.biTangents)};g.prototype.copy=function(){const t=new g(this.name+" copy");t.faceVertCount=this.faceVertCount;t.glPrimitive=this.glPrimitive;t.setVertices(this._vertices.slice(0));if(this.verticesIndices){t.verticesIndices.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e++)t.verticesIndices[e]=this.verticesIndices[e]}for(let e in this._attributes)this.copyAttribute(e,t);t.morphTargets.length=this.morphTargets.length;for(let e=0;e<this.morphTargets.length;e++)t.morphTargets[e]=this.morphTargets[e];return t};g.prototype.calculateNormals=function(t){t=t||{};if(t.smooth===false)this.unIndex();const n=vec3.create();const i=vec3.create();const r=vec3.create();function a(e){vec3.subtract(n,e[0],e[1]);vec3.subtract(i,e[0],e[2]);vec3.cross(r,n,i);vec3.normalize(r,r);if(t&&t.forceZUp){if(r[2]<0){r[0]*=-1;r[1]*=-1;r[2]*=-1}}return r}this.getVertexVec=function(e){const t=[0,0,0];t[0]=this.vertices[e*3+0];t[1]=this.vertices[e*3+1];t[2]=this.vertices[e*3+2];return t};if(!(this.vertexNormals instanceof Float32Array)||this.vertexNormals.length!=this.vertices.length)this.vertexNormals=new Float32Array(this.vertices.length);for(let e=0;e<this.vertices.length;e++){this.vertexNormals[e]=0}if(!this.isIndexed()){const s=[];for(let e=0;e<this.vertices.length;e+=9){const o=[[this.vertices[e+0],this.vertices[e+1],this.vertices[e+2]],[this.vertices[e+3],this.vertices[e+4],this.vertices[e+5]],[this.vertices[e+6],this.vertices[e+7],this.vertices[e+8]]];const u=a(o);s.push(u[0],u[1],u[2],u[0],u[1],u[2],u[0],u[1],u[2])}this.vertexNormals=s}else{const l=[];l.length=Math.floor(this.verticesIndices.length/3);for(let e=0;e<this.verticesIndices.length;e+=3){const o=[this.getVertexVec(this.verticesIndices[e+0]),this.getVertexVec(this.verticesIndices[e+1]),this.getVertexVec(this.verticesIndices[e+2])];l[e/3]=a(o);this.vertexNormals[this.verticesIndices[e+0]*3+0]+=l[e/3][0];this.vertexNormals[this.verticesIndices[e+0]*3+1]+=l[e/3][1];this.vertexNormals[this.verticesIndices[e+0]*3+2]+=l[e/3][2];this.vertexNormals[this.verticesIndices[e+1]*3+0]+=l[e/3][0];this.vertexNormals[this.verticesIndices[e+1]*3+1]+=l[e/3][1];this.vertexNormals[this.verticesIndices[e+1]*3+2]+=l[e/3][2];this.vertexNormals[this.verticesIndices[e+2]*3+0]+=l[e/3][0];this.vertexNormals[this.verticesIndices[e+2]*3+1]+=l[e/3][1];this.vertexNormals[this.verticesIndices[e+2]*3+2]+=l[e/3][2]}for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){const p=[this.vertexNormals[this.verticesIndices[t+e]*3+0],this.vertexNormals[this.verticesIndices[t+e]*3+1],this.vertexNormals[this.verticesIndices[t+e]*3+2]];vec3.normalize(p,p);this.vertexNormals[this.verticesIndices[t+e]*3+0]=p[0];this.vertexNormals[this.verticesIndices[t+e]*3+1]=p[1];this.vertexNormals[this.verticesIndices[t+e]*3+2]=p[2]}}}};g.prototype.calcTangentsBitangents=function(){if(!this.vertices.length){return}if(!this.vertexNormals.length){return}if(!this.texCoords.length){const _=this.vertices.length/3*2;this.texCoords=new Float32Array(_);for(let e=0;e<_;e+=1)this.texCoords[e]=0}if(!this.verticesIndices||!this.verticesIndices.length){return}if(this.verticesIndices.length%3!==0){this._log.error("Vertex indices mismatch!");return}const t=this.verticesIndices.length/3;const n=this.vertices.length/3;this.tangents=new Float32Array(this.vertexNormals.length);this.biTangents=new Float32Array(this.vertexNormals.length);const i=[];i.length=n*2;const r=vec3.create();const a=vec3.create();const s=vec3.create();const o=vec2.create();const u=vec2.create();const l=vec2.create();const p=vec3.create();const g=vec3.create();for(let e=0;e<t;e+=1){const I=this.verticesIndices[e*3];const A=this.verticesIndices[e*3+1];const x=this.verticesIndices[e*3+2];vec3.set(r,this.vertices[I*3],this.vertices[I*3+1],this.vertices[I*3+2]);vec3.set(a,this.vertices[A*3],this.vertices[A*3+1],this.vertices[A*3+2]);vec3.set(s,this.vertices[x*3],this.vertices[x*3+1],this.vertices[x*3+2]);vec2.set(o,this.texCoords[I*2],this.texCoords[I*2+1]);vec2.set(u,this.texCoords[A*2],this.texCoords[A*2+1]);vec2.set(l,this.texCoords[x*2],this.texCoords[x*2+1]);const T=a[0]-r[0];const y=s[0]-r[0];const S=a[1]-r[1];const N=s[1]-r[1];const j=a[2]-r[2];const C=s[2]-r[2];const E=u[0]-o[0];const P=l[0]-o[0];const L=u[1]-o[1];const k=l[1]-o[1];const R=1/(E*k-P*L);vec3.set(p,(k*T-L*y)*R,(k*S-L*N)*R,(k*j-L*C)*R);vec3.set(g,(E*y-P*T)*R,(E*N-P*S)*R,(E*C-P*j)*R);i[I]=p;i[A]=p;i[x]=p;i[I+n]=g;i[A+n]=g;i[x+n]=g}const m=vec3.create();const h=vec3.create();const c=vec3.create();const d=vec3.create();const f=vec3.create();const v=vec3.create();const b=vec3.create();const O=vec3.create();for(let e=0;e<n;e+=1){if(!i[e])continue;vec3.set(m,this.vertexNormals[e*3],this.vertexNormals[e*3+1],this.vertexNormals[e*3+2]);vec3.set(h,i[e][0],i[e][1],i[e][2]);const M=vec3.dot(m,h);vec3.scale(f,m,M);vec3.subtract(v,h,f);vec3.normalize(O,v);vec3.cross(b,m,h);const U=1;vec3.scale(c,O,1/U);vec3.cross(d,m,c);this.tangents[e*3+0]=c[0];this.tangents[e*3+1]=c[1];this.tangents[e*3+2]=c[2];this.biTangents[e*3+0]=d[0];this.biTangents[e*3+1]=d[1];this.biTangents[e*3+2]=d[2]}};g.prototype.isIndexed=function(){if(this._vertices.length==0)return true;return this.verticesIndices.length!=0};g.prototype.unIndex=function(e,t){const n=[];const i=[];let r=0;for(let e in this._attributes){const a=this._attributes[e];let n=[];for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){if(a.itemSize==3)n.push(a.data[this.verticesIndices[t+e]*3+0],a.data[this.verticesIndices[t+e]*3+1],a.data[this.verticesIndices[t+e]*3+2]);else if(a.itemSize==4)n.push(a.data[this.verticesIndices[t+e]*4+0],a.data[this.verticesIndices[t+e]*4+1],a.data[this.verticesIndices[t+e]*4+2],a.data[this.verticesIndices[t+e]*4+3]);else if(a.itemSize==2)n.push(a.data[this.verticesIndices[t+e]*2+0],a.data[this.verticesIndices[t+e]*2+1]);else if(a.itemSize==1)n.push(a.data[this.verticesIndices[t+e]]);else console.log("unknown attr",a)}}this.setAttribute(a.name,n,a.itemSize)}for(let e=0;e<this.verticesIndices.length;e+=3){n.push(this.vertices[this.verticesIndices[e+0]*3+0],this.vertices[this.verticesIndices[e+0]*3+1],this.vertices[this.verticesIndices[e+0]*3+2]);i.push(r);r++;n.push(this.vertices[this.verticesIndices[e+1]*3+0],this.vertices[this.verticesIndices[e+1]*3+1],this.vertices[this.verticesIndices[e+1]*3+2]);i.push(r);r++;n.push(this.vertices[this.verticesIndices[e+2]*3+0],this.vertices[this.verticesIndices[e+2]*3+1],this.vertices[this.verticesIndices[e+2]*3+2]);i.push(r);r++}this.vertices=n;this.verticesIndices=[];if(e)this.verticesIndices=i;if(!t)this.calculateNormals()};g.prototype.calcBarycentric=function(){let t=[];t.length=this.vertices.length;for(let e=0;e<this.vertices.length;e++)t[e]=0;let n=0;for(let e=0;e<this.vertices.length;e+=3){t[e+n]=1;n++;if(n==3)n=0}this.setAttribute("attrBarycentric",t,3)};g.prototype.getBounds=function(){return new u(this)};g.prototype.center=function(e,t,n){if(e===undefined){e=true;t=true;n=true}let i=0;const r=this.getBounds();const a=[r.minX+(r.maxX-r.minX)/2,r.minY+(r.maxY-r.minY)/2,r.minZ+(r.maxZ-r.minZ)/2];for(i=0;i<this.vertices.length;i+=3){if(this.vertices[i+0]==this.vertices[i+0]){if(e)this.vertices[i+0]-=a[0];if(t)this.vertices[i+1]-=a[1];if(n)this.vertices[i+2]-=a[2]}}return a};g.prototype.mapTexCoords2d=function(){const t=this.getBounds();const n=this.vertices.length/3;this.texCoords=new Float32Array(n*2);for(let e=0;e<n;e++){const i=this.vertices[e*3+0];const r=this.vertices[e*3+1];this.texCoords[e*2+0]=i/(t.maxX-t.minX)+.5;this.texCoords[e*2+1]=1-r/(t.maxY-t.minY)+.5}};g.prototype.getInfoOneLine=function(){let e="";if(this.faceVertCount==3&&this.verticesIndices)e+=this.verticesIndices.length/3;else e+=0;e+=" tris ";if(this.vertices)e+=this.vertices.length/3;else e+=0;e+=" verts";return e};g.prototype.getInfo=function(){const e={};if(this.faceVertCount==3&&this.verticesIndices)e.numFaces=this.verticesIndices.length/3;else e.numFaces=0;if(this.verticesIndices&&this.verticesIndices.length)e.indices=this.verticesIndices.length;if(this.vertices)e.numVerts=this.vertices.length/3;else e.numVerts=0;if(this.vertexNormals)e.numNormals=this.vertexNormals.length/3;else e.numNormals=0;if(this.texCoords)e.numTexCoords=this.texCoords.length/2;else e.numTexCoords=0;if(this.tangents)e.numTangents=this.tangents.length/3;else e.numTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.vertexColors)e.numVertexColors=this.vertexColors.length/4;else e.numVertexColors=0;if(this.getAttributes())e.numAttribs=Object.keys(this.getAttributes()).length;else e.numAttribs=0;e.isIndexed=this.isIndexed();return e};g.buildFromFaces=function(t,e,n){const i=[];const r=[];for(let e=0;e<t.length;e+=3){const s=t[e+0];const o=t[e+1];const u=t[e+2];const l=[-1,-1,-1];if(n)for(let e=0;e<i.length;e+=3){if(i[e+0]==s[0]&&i[e+1]==s[1]&&i[e+2]==s[2])l[0]=e/3;if(i[e+0]==o[0]&&i[e+1]==o[1]&&i[e+2]==o[2])l[1]=e/3;if(i[e+0]==u[0]&&i[e+1]==u[1]&&i[e+2]==u[2])l[2]=e/3}if(l[0]==-1){i.push(s[0],s[1],s[2]);l[0]=(i.length-1)/3}if(l[1]==-1){i.push(o[0],o[1],o[2]);l[1]=(i.length-1)/3}if(l[2]==-1){i.push(u[0],u[1],u[2]);l[2]=(i.length-1)/3}r.push(parseInt(l[0],10));r.push(parseInt(l[1],10));r.push(parseInt(l[2],10))}const a=new g(e);a.name=e;a.vertices=i;a.verticesIndices=r;return a};const m=function(){this._log=new p("eventtarget");this._eventCallbacks={};this._logName="";this._logEvents=false;this._listeners={};this.addEventListener=this.on=function(e,t,n){const i={id:(n||"")+CABLES.simpleId(),name:e,cb:t};if(!this._eventCallbacks[e])this._eventCallbacks[e]=[i];else this._eventCallbacks[e].push(i);this._listeners[i.id]=i;return i.id};this.hasEventListener=function(e,t){if(e&&!t){if(this._listeners[e])return true;else return false}else{this._log.warn("old eventtarget function haseventlistener!");if(e&&t){if(this._eventCallbacks[e]){const n=this._eventCallbacks[e].indexOf(t);if(n==-1)return false;return true}}}};this.hasListenerForEventName=function(e){return this._eventCallbacks[e]&&this._eventCallbacks[e].length>0};this.removeEventListener=this.off=function(i,t){if(i===null||i===undefined)return;if(!t){const r=this._listeners[i];if(!r){this._log.log("removeEvent: could not find event...",i,this);return}let n=true;while(n){n=false;let t=-1;for(let e=0;e<this._eventCallbacks[r.name].length;e++){if(this._eventCallbacks[r.name][e].id.startsWith(i)){n=true;t=e}}if(t!==-1){this._eventCallbacks[r.name].splice(t,1);delete this._listeners[i]}}return}this._log.info("[eventtaget] ","old function signature: removeEventListener! use listener id");this._log.log((new Error).stack);let n=null;for(let e=0;e<this._eventCallbacks[i].length;e++)if(this._eventCallbacks[i][e].cb==t)n=e;if(n!==null){delete this._eventCallbacks[n]}else this._log.warn("removeEventListener not found "+i)};this.logEvents=function(e,t){this._logEvents=e;this._logName=t};this.emitEvent=function(t,n,i,r,a,s,o){if(this._logEvents)this._log.log("[event] ",this._logName,t,this._eventCallbacks);if(this._eventCallbacks[t]){for(let e=0;e<this._eventCallbacks[t].length;e++){if(this._eventCallbacks[t][e]){this._eventCallbacks[t][e].cb(n,i,r,a,s,o)}}}else{if(this._logEvents)this._log.log("[event] has no event callback",t,this._eventCallbacks)}}};const h={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15,PACO_OP_RELOAD:16}};const c=function(e){this.time=0;this.value=0;this.onChange=null;this._easing=0;this.cb=null;this.cbTriggered=false;this.setEasing(h.ANIM.EASING_LINEAR);this.set(e)};c.cubicSpline=function(e,t,n){let i=t.value,r=t.bezTangOut,a=n.value,s=n.bezTangIn;let o=e;let u=o*o;let l=u*o;return(2*l-3*u+1)*i+(l-2*u+o)*r+(-2*l+3*u)*a+(l-u)*s};c.easeCubicSpline=function(e,t){return c.cubicSpline(e,this,t)};c.linear=function(e,t,n){return parseFloat(t.value)+parseFloat(n.value-t.value)*e};c.easeLinear=function(e,t){return c.linear(e,this,t)};c.easeAbsolute=function(e,t){return this.value};const d=function(e){return e=2**(10*(e-1))};c.easeExpoIn=function(e,t){e=d(e);return c.linear(e,this,t)};const f=function(e){e=-(2**(-10*e))+1;return e};c.easeExpoOut=function(e,t){e=f(e);return c.linear(e,this,t)};const v=function(e){e*=2;if(e<1){e=.5*2**(10*(e-1))}else{e--;e=.5*(-(2**(-10*e))+2)}return e};c.easeExpoInOut=function(e,t){e=v(e);return c.linear(e,this,t)};c.easeSinIn=function(e,t){e=-1*Math.cos(e*Math.PI/2)+1;return c.linear(e,this,t)};c.easeSinOut=function(e,t){e=Math.sin(e*Math.PI/2);return c.linear(e,this,t)};c.easeSinInOut=function(e,t){e=-.5*(Math.cos(Math.PI*e)-1);return c.linear(e,this,t)};const b=function(e){e=e*e*e;return e};c.easeCubicIn=function(e,t){e=b(e);return c.linear(e,this,t)};c.easeInQuint=function(e,t){e=e*e*e*e*e;return c.linear(e,this,t)};c.easeOutQuint=function(e,t){e=(e-=1)*e*e*e*e+1;return c.linear(e,this,t)};c.easeInOutQuint=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e*e;else e=.5*((e-=2)*e*e*e*e+2);return c.linear(e,this,t)};c.easeInQuart=function(e,t){e=e*e*e*e;return c.linear(e,this,t)};c.easeOutQuart=function(e,t){e=-1*((e-=1)*e*e*e-1);return c.linear(e,this,t)};c.easeInOutQuart=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e;else e=-.5*((e-=2)*e*e*e-2);return c.linear(e,this,t)};c.bounce=function(e){if((e/=1)<1/2.75)e=7.5625*e*e;else if(e<2/2.75)e=7.5625*(e-=1.5/2.75)*e+.75;else if(e<2.5/2.75)e=7.5625*(e-=2.25/2.75)*e+.9375;else e=7.5625*(e-=2.625/2.75)*e+.984375;return e};c.easeInBounce=function(e,t){return c.linear(c.bounce(e),this,t)};c.easeOutBounce=function(e,t){return c.linear(c.bounce(e),this,t)};c.easeInElastic=function(e,t){let n=1.70158;let i=0;let r=1;const a=0;const s=1;const o=1;if(e===0)e=a;else if((e/=s)==1)e=a+o;else{if(!i)i=s*.3;if(r<Math.abs(o)){r=o;n=i/4}else n=i/(2*Math.PI)*Math.asin(o/r);e=-(r*2**(10*(e-=1))*Math.sin((e*s-n)*(2*Math.PI)/i))+a}return c.linear(e,this,t)};c.easeOutElastic=function(e,t){let n=1.70158;let i=0;let r=1;const a=0;const s=1;const o=1;if(e===0)e=a;else if((e/=s)==1)e=a+o;else{if(!i)i=s*.3;if(r<Math.abs(o)){r=o;n=i/4}else n=i/(2*Math.PI)*Math.asin(o/r);e=r*2**(-10*e)*Math.sin((e*s-n)*(2*Math.PI)/i)+o+a}return c.linear(e,this,t)};c.easeInBack=function(e,t){const n=1.70158;e=e*e*((n+1)*e-n);return c.linear(e,this,t)};c.easeOutBack=function(e,t){const n=1.70158;e=(e=e/1-1)*e*((n+1)*e+n)+1;return c.linear(e,this,t)};c.easeInOutBack=function(e,t){let n=1.70158;const i=1/2;if((e/=1/2)<1)e=i*(e*e*(((n*=1.525)+1)*e-n));else e=i*((e-=2)*e*(((n*=1.525)+1)*e+n)+2);return c.linear(e,this,t)};const O=function(e){e--;e=e*e*e+1;return e};c.easeCubicOut=function(e,t){e=O(e);return c.linear(e,this,t)};const _=function(e){e*=2;if(e<1)e=.5*e*e*e;else{e-=2;e=.5*(e*e*e+2)}return e};c.easeCubicInOut=function(e,t){e=_(e);return c.linear(e,this,t)};c.easeSmoothStep=function(e,t){const n=Math.max(0,Math.min(1,e));e=n*n*(3-2*n);return c.linear(e,this,t)};c.easeSmootherStep=function(e,t){const n=Math.max(0,Math.min(1,(e-0)/(1-0)));e=n*n*n*(n*(n*6-15)+10);return c.linear(e,this,t)};c.prototype.setEasing=function(e){this._easing=e;if(this._easing==h.ANIM.EASING_LINEAR)this.ease=c.easeLinear;else if(this._easing==h.ANIM.EASING_ABSOLUTE)this.ease=c.easeAbsolute;else if(this._easing==h.ANIM.EASING_SMOOTHSTEP)this.ease=c.easeSmoothStep;else if(this._easing==h.ANIM.EASING_SMOOTHERSTEP)this.ease=c.easeSmootherStep;else if(this._easing==h.ANIM.EASING_CUBIC_IN)this.ease=c.easeCubicIn;else if(this._easing==h.ANIM.EASING_CUBIC_OUT)this.ease=c.easeCubicOut;else if(this._easing==h.ANIM.EASING_CUBIC_INOUT)this.ease=c.easeCubicInOut;else if(this._easing==h.ANIM.EASING_EXPO_IN)this.ease=c.easeExpoIn;else if(this._easing==h.ANIM.EASING_EXPO_OUT)this.ease=c.easeExpoOut;else if(this._easing==h.ANIM.EASING_EXPO_INOUT)this.ease=c.easeExpoInOut;else if(this._easing==h.ANIM.EASING_SIN_IN)this.ease=c.easeSinIn;else if(this._easing==h.ANIM.EASING_SIN_OUT)this.ease=c.easeSinOut;else if(this._easing==h.ANIM.EASING_SIN_INOUT)this.ease=c.easeSinInOut;else if(this._easing==h.ANIM.EASING_BACK_OUT)this.ease=c.easeOutBack;else if(this._easing==h.ANIM.EASING_BACK_IN)this.ease=c.easeInBack;else if(this._easing==h.ANIM.EASING_BACK_INOUT)this.ease=c.easeInOutBack;else if(this._easing==h.ANIM.EASING_ELASTIC_IN)this.ease=c.easeInElastic;else if(this._easing==h.ANIM.EASING_ELASTIC_OUT)this.ease=c.easeOutElastic;else if(this._easing==h.ANIM.EASING_ELASTIC_INOUT)this.ease=c.easeElasticInOut;else if(this._easing==h.ANIM.EASING_BOUNCE_IN)this.ease=c.easeInBounce;else if(this._easing==h.ANIM.EASING_BOUNCE_OUT)this.ease=c.easeOutBounce;else if(this._easing==h.ANIM.EASING_QUART_OUT)this.ease=c.easeOutQuart;else if(this._easing==h.ANIM.EASING_QUART_IN)this.ease=c.easeInQuart;else if(this._easing==h.ANIM.EASING_QUART_INOUT)this.ease=c.easeInOutQuart;else if(this._easing==h.ANIM.EASING_QUINT_OUT)this.ease=c.easeOutQuint;else if(this._easing==h.ANIM.EASING_QUINT_IN)this.ease=c.easeInQuint;else if(this._easing==h.ANIM.EASING_QUINT_INOUT)this.ease=c.easeInOutQuint;else if(this._easing==h.ANIM.EASING_CUBICSPLINE){this.ease=c.easeCubicSpline}else{this._easing=h.ANIM.EASING_LINEAR;this.ease=c.easeLinear}};c.prototype.trigger=function(){this.cb();this.cbTriggered=true};c.prototype.setValue=function(e){this.value=e;if(this.onChange!==null)this.onChange()};c.prototype.set=function(e){if(e){if(e.e)this.setEasing(e.e);if(e.cb){this.cb=e.cb;this.cbTriggered=false}if(e.b){}if(e.hasOwnProperty("t"))this.time=e.t;if(e.hasOwnProperty("time"))this.time=e.time;if(e.hasOwnProperty("v"))this.value=e.v;else if(e.hasOwnProperty("value"))this.value=e.value}if(this.onChange!==null)this.onChange()};c.prototype.getSerialized=function(){const e={};e.t=this.time;e.v=this.value;e.e=this._easing;return e};c.prototype.getEasing=function(){return this._easing};const I=function(e){m.apply(this);e=e||{};this.keys=[];this.onChange=null;this.stayInTimeline=false;this.loop=false;this._log=new p("Anim");this._lastKeyIndex=0;this._cachedIndex=0;this.name=e.name||null;this.defaultEasing=e.defaultEasing||h.ANIM.EASING_LINEAR;this.onLooped=null;this._timesLooped=0;this._needsSort=false};I.prototype.forceChangeCallback=function(){if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};I.prototype.getLoop=function(){return this.loop};I.prototype.setLoop=function(e){this.loop=e;this.emitEvent("onChange",this)};I.prototype.hasEnded=function(e){if(this.keys.length===0)return true;if(this.keys[this._lastKeyIndex].time<=e)return true;return false};I.prototype.isRising=function(e){if(this.hasEnded(e))return false;const t=this.getKeyIndex(e);if(this.keys[t].value<this.keys[t+1].value)return true;return false};I.prototype.clearBefore=function(e){const t=this.getValue(e);const n=this.getKeyIndex(e);this.setValue(e,t);if(n>1)this.keys.splice(0,n);this._updateLastIndex()};I.prototype.clear=function(e){let t=0;if(e)t=this.getValue(e);this.keys.length=0;this._updateLastIndex();if(e)this.setValue(e,t);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};I.prototype.sortKeys=function(){this.keys.sort((e,t)=>{return parseFloat(e.time)-parseFloat(t.time)});this._updateLastIndex();this._needsSort=false;if(this.keys.length%1e3==0)console.log(this.name,this.keys.length)};I.prototype.getLength=function(){if(this.keys.length===0)return 0;return this.keys[this.keys.length-1].time};I.prototype.getKeyIndex=function(t){let n=0;let i=0;if(this._cachedIndex&&this.keys.length>this._cachedIndex&&t>=this.keys[this._cachedIndex].time)i=this._cachedIndex;for(let e=i;e<this.keys.length;e++){if(t>=this.keys[e].time)n=e;if(this.keys[e].time>t){if(t!=0)this._cachedIndex=n;return n}}return n};I.prototype.setValue=function(t,n,i){let r=null;if(this.keys.length==0||t<=this.keys[this.keys.length-1].time)for(let e=0;e<this.keys.length;e++)if(this.keys[e].time==t){r=this.keys[e];this.keys[e].setValue(n);this.keys[e].cb=i;break}if(!r){r=new c({time:t,value:n,e:this.defaultEasing,cb:i});this.keys.push(r);this._updateLastIndex()}if(this.onChange)this.onChange();this.emitEvent("onChange",this);this._needsSort=true;return r};I.prototype.setKeyEasing=function(e,t){if(this.keys[e]){this.keys[e].setEasing(t);this.emitEvent("onChange",this)}};I.prototype.getSerialized=function(){const t={};t.keys=[];t.loop=this.loop;for(let e=0;e<this.keys.length;e++)t.keys.push(this.keys[e].getSerialized());return t};I.prototype.getKey=function(e){const t=this.getKeyIndex(e);return this.keys[t]};I.prototype.getNextKey=function(e){let t=this.getKeyIndex(e)+1;if(t>=this.keys.length)t=this.keys.length-1;return this.keys[t]};I.prototype.isFinished=function(e){if(this.keys.length<=0)return true;return e>this.keys[this.keys.length-1].time};I.prototype.isStarted=function(e){if(this.keys.length<=0)return false;return e>=this.keys[0].time};I.prototype.getValue=function(e){if(this.keys.length===0){return 0}if(this._needsSort)this.sortKeys();if(!this.loop&&e>this.keys[this._lastKeyIndex].time){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}if(e<this.keys[0].time){return this.keys[0].value}if(this.loop&&e>this.keys[this._lastKeyIndex].time){const s=e/this.keys[this._lastKeyIndex].time;if(s>this._timesLooped){this._timesLooped++;if(this.onLooped)this.onLooped()}e=(e-this.keys[0].time)%(this.keys[this._lastKeyIndex].time-this.keys[0].time);e+=this.keys[0].time}const t=this.getKeyIndex(e);if(t>=this._lastKeyIndex){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}const n=t+1;const i=this.keys[t];const r=this.keys[n];if(i.cb&&!i.cbTriggered)i.trigger();if(!r)return-1;const a=(e-i.time)/(r.time-i.time);if(!i.ease)this.log._warn("has no ease",i,r);return i.ease(a,r)};I.prototype._updateLastIndex=function(){this._lastKeyIndex=this.keys.length-1};I.prototype.addKey=function(e){if(e.time===undefined){this.log.warn("key time undefined, ignoring!")}else{this.keys.push(e);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)}this._updateLastIndex()};I.prototype.easingFromString=function(e){if(e=="linear")return h.ANIM.EASING_LINEAR;if(e=="absolute")return h.ANIM.EASING_ABSOLUTE;if(e=="smoothstep")return h.ANIM.EASING_SMOOTHSTEP;if(e=="smootherstep")return h.ANIM.EASING_SMOOTHERSTEP;if(e=="Cubic In")return h.ANIM.EASING_CUBIC_IN;if(e=="Cubic Out")return h.ANIM.EASING_CUBIC_OUT;if(e=="Cubic In Out")return h.ANIM.EASING_CUBIC_INOUT;if(e=="Expo In")return h.ANIM.EASING_EXPO_IN;if(e=="Expo Out")return h.ANIM.EASING_EXPO_OUT;if(e=="Expo In Out")return h.ANIM.EASING_EXPO_INOUT;if(e=="Sin In")return h.ANIM.EASING_SIN_IN;if(e=="Sin Out")return h.ANIM.EASING_SIN_OUT;if(e=="Sin In Out")return h.ANIM.EASING_SIN_INOUT;if(e=="Back In")return h.ANIM.EASING_BACK_IN;if(e=="Back Out")return h.ANIM.EASING_BACK_OUT;if(e=="Back In Out")return h.ANIM.EASING_BACK_INOUT;if(e=="Elastic In")return h.ANIM.EASING_ELASTIC_IN;if(e=="Elastic Out")return h.ANIM.EASING_ELASTIC_OUT;if(e=="Bounce In")return h.ANIM.EASING_BOUNCE_IN;if(e=="Bounce Out")return h.ANIM.EASING_BOUNCE_OUT;if(e=="Quart Out")return h.ANIM.EASING_QUART_OUT;if(e=="Quart In")return h.ANIM.EASING_QUART_IN;if(e=="Quart In Out")return h.ANIM.EASING_QUART_INOUT;if(e=="Quint Out")return h.ANIM.EASING_QUINT_OUT;if(e=="Quint In")return h.ANIM.EASING_QUINT_IN;if(e=="Quint In Out")return h.ANIM.EASING_QUINT_INOUT};I.prototype.createPort=function(e,t,n){const i=e.inDropDown(t,h.ANIM.EASINGS,"Cubic Out");i.set("linear");i.defaultValue="linear";i.onChange=function(){this.defaultEasing=this.easingFromString(i.get());this.emitEvent("onChangeDefaultEasing",this);if(n)n()}.bind(this);return i};I.slerpQuaternion=function(e,t,n,i,r,a){if(!I.slerpQuaternion.q1){I.slerpQuaternion.q1=quat.create();I.slerpQuaternion.q2=quat.create()}const s=n.getKeyIndex(e);let o=s+1;if(o>=n.keys.length)o=n.keys.length-1;if(s==o){quat.set(t,n.keys[s].value,i.keys[s].value,r.keys[s].value,a.keys[s].value)}else{const u=n.keys[s].time;const l=n.keys[o].time;const p=(e-u)/(l-u);quat.set(I.slerpQuaternion.q1,n.keys[s].value,i.keys[s].value,r.keys[s].value,a.keys[s].value);quat.set(I.slerpQuaternion.q2,n.keys[o].value,i.keys[o].value,r.keys[o].value,a.keys[o].value);quat.slerp(t,I.slerpQuaternion.q1,I.slerpQuaternion.q2,p)}return t};const A={Key:c};const x=function(e,t,n,i){m.apply(this);this.data={};this._log=new p("core_port");this.direction=h.PORT.PORT_DIR_IN;this.id=String(CABLES.simpleId());this._op=e;this.links=[];this.value=0;this.name=t;this.type=n||h.OP.OP_PORT_TYPE_VALUE;this.uiAttribs=i||{};this.anim=null;this._oldAnimVal=-5711;this.defaultValue=null;this._uiActiveState=true;this.ignoreValueSerialize=false;this.onLinkChanged=null;this.crashed=false;this._valueBeforeLink=null;this._lastAnimFrame=-1;this._animated=false;this.onValueChanged=null;this.onTriggered=null;this.onUiActiveStateChange=null;this.changeAlways=false;this.forceRefChange=false;this._useVariableName=null;this.activityCounter=0;this.apf=0;this.activityCounterStartFrame=0;this._tempLastUiValue=null;Object.defineProperty(this,"title",{get(){return this.uiAttribs.title||this.name}});Object.defineProperty(this,"parent",{get(){this._log.stack("use port.op, not .parent");return this._op}});Object.defineProperty(this,"op",{get(){return this._op}});Object.defineProperty(this,"val",{get(){return this.get()},set(e){this.setValue(e)}})};x.prototype.copyLinkedUiAttrib=function(e,t){if(!CABLES.UI)return;if(!this.isLinked())return;const n={};n[e]=this.links[0].getOtherPort(this).getUiAttrib(e);t.setUiAttribs(n)};x.prototype.getValueForDisplay=function(){let e=this.value;if(typeof this.value==="string"||this.value instanceof String){if(e.length>1e3){e=e.substring(0,999);e+="..."}if(this.uiAttribs&&this.uiAttribs.display=="boolnum"){e+=" - ";if(!this.value)e+="false";else e+="true"}e=e.replace(/[\u00A0-\u9999<>\&]/g,function(e){return"&#"+e.charCodeAt(0)+";"});if(e.length>100)e=e.substring(0,100)}else{e=this.value}return e};x.prototype.onAnimToggle=function(){};x.prototype._onAnimToggle=function(){this.onAnimToggle()};x.prototype.remove=function(){this.removeLinks();this._op.removePort(this)};x.prototype.setUiAttribs=function(e){let t=false;if(!this.uiAttribs)this.uiAttribs={};for(const n in e){if(e[n]===undefined){delete this.uiAttribs[n];continue}if(this.uiAttribs[n]!=e[n])t=true;this.uiAttribs[n]=e[n];if(n=="group"&&this.indexPort)this.indexPort.setUiAttribs({group:e[n]})}if(e.hasOwnProperty("expose"))this._op.patch.emitEvent("subpatchExpose",this._op.uiAttribs.subPatch);if(t)this.emitEvent("onUiAttrChange",e,this)};x.prototype.getUiAttribs=function(){return this.uiAttribs};x.prototype.getUiAttrib=function(e){if(!this.uiAttribs||!this.uiAttribs.hasOwnProperty(e)){return null}return this.uiAttribs[e]};x.prototype.get=function(){if(this._animated&&this._lastAnimFrame!=this._op.patch.getFrameNum()){this._lastAnimFrame=this._op.patch.getFrameNum();let e=this.anim.getValue(this._op.patch.timer.getTime());if(this.value!=e){this.value=e;this._oldAnimVal=this.value;this.forceChange()}}return this.value};x.prototype.setRef=function(e){this.forceRefChange=true;this.set(e)};x.prototype.set=x.prototype.setValue=function(e){if(e===undefined)e=null;if(CABLES.UI&&CABLES.UI.showDevInfos)if(this.direction==h.PORT.PORT_DIR_OUT&&this.type==h.OP.OP_PORT_TYPE_OBJECT&&e&&!this.forceRefChange)this._log.warn("object port uses .set",this.name,this.op.objName);if(this._op.enabled&&!this.crashed){if(e!==this.value||this.changeAlways||this.type==h.OP.OP_PORT_TYPE_TEXTURE||this.type==h.OP.OP_PORT_TYPE_ARRAY){if(this._animated){this.anim.setValue(this._op.patch.timer.getTime(),e)}else{try{this.value=e;this.forceChange()}catch(e){this.crashed=true;this.setValue=function(e){};this.onTriggered=function(){};this._log.error("exception in ",this._op);this._log.error(e);this._op.patch.emitEvent("exception",e,this._op)}if(this._op&&this._op.patch&&this._op.patch.isEditorMode()&&this.type==h.OP.OP_PORT_TYPE_TEXTURE)gui.texturePreview().updateTexturePort(this)}if(this.direction==h.PORT.PORT_DIR_OUT)for(let e=0;e<this.links.length;++e)this.links[e].setValue()}}};x.prototype.updateAnim=function(){if(this._animated){this.value=this.get();if(this._oldAnimVal!=this.value||this.changeAlways){this._oldAnimVal=this.value;this.forceChange()}this._oldAnimVal=this.value}};x.prototype.forceChange=function(){if(this.onValueChanged||this.onChange){}this._activity();this.emitEvent("change",this.value,this);if(this.onChange)this.onChange(this,this.value);else if(this.onValueChanged)this.onValueChanged(this,this.value)};x.prototype.getTypeString=function(){if(this.type==h.OP.OP_PORT_TYPE_VALUE)return"Number";if(this.type==h.OP.OP_PORT_TYPE_FUNCTION)return"Trigger";if(this.type==h.OP.OP_PORT_TYPE_OBJECT)return"Object";if(this.type==h.OP.OP_PORT_TYPE_DYNAMIC)return"Dynamic";if(this.type==h.OP.OP_PORT_TYPE_ARRAY)return"Array";if(this.type==h.OP.OP_PORT_TYPE_STRING)return"String";return"Unknown"};x.prototype.deSerializeSettings=function(e){if(!e)return;if(e.animated)this.setAnimated(e.animated);if(e.useVariable)this.setVariableName(e.useVariable);if(e.title)this.setUiAttribs({title:e.title});if(e.expose)this.setUiAttribs({expose:true});if(e.order)this.setUiAttribs({order:e.order});if(e.multiPortManual)this.setUiAttribs({multiPortManual:e.multiPortManual});if(e.multiPortNum)this.setUiAttribs({multiPortNum:e.multiPortNum});if(e.anim){if(!this.anim)this.anim=new I({name:"port "+this.name});this._op._hasAnimPort=true;this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)});if(e.anim.loop)this.anim.loop=e.anim.loop;for(const t in e.anim.keys){this.anim.keys.push(new A.Key(e.anim.keys[t]))}this.anim.sortKeys()}};x.prototype.setInitialValue=function(e){if(this.op.preservedPortLinks[this.name]){for(let e=0;e<this.op.preservedPortLinks[this.name].length;e++){const t=this.op.preservedPortLinks[this.name][e];this.op.patch._addLink(t.objIn,t.objOut,t.portIn,t.portOut)}}if(this.op.preservedPortValues&&this.op.preservedPortValues.hasOwnProperty(this.name)&&this.op.preservedPortValues[this.name]!==undefined){this.set(this.op.preservedPortValues[this.name])}else if(e!==undefined)this.set(e);if(e!==undefined)this.defaultValue=e};x.prototype.getSerialized=function(){let e={name:this.getName()};if(!this.ignoreValueSerialize&&this.links.length===0){if(this.type==h.OP.OP_PORT_TYPE_OBJECT&&this.value&&this.value.tex){}else e.value=this.value}if(this._useVariableName)e.useVariable=this._useVariableName;if(this._animated)e.animated=true;if(this.anim)e.anim=this.anim.getSerialized();if(this.uiAttribs.multiPortNum)e.multiPortNum=this.uiAttribs.multiPortNum;if(this.uiAttribs.multiPortManual)e.multiPortManual=this.uiAttribs.multiPortManual;if(this.uiAttribs.display=="file")e.display=this.uiAttribs.display;if(this.uiAttribs.expose){e.expose=true;if(this.uiAttribs.hasOwnProperty("order"))e.order=this.uiAttribs.order}if(this.uiAttribs.title)e.title=this.uiAttribs.title;if((this.preserveLinks||this.direction==h.PORT.PORT_DIR_OUT)&&this.links.length>0){e.links=[];for(const t in this.links){if(!this.links[t].ignoreInSerialize&&(this.links[t].portIn&&this.links[t].portOut))e.links.push(this.links[t].getSerialized())}}if(this.direction==h.PORT.PORT_DIR_IN&&this.links.length>0){for(const t in this.links){if(!this.links[t].portIn||!this.links[t].portOut)continue;const n=this.links[t].getOtherPort(this);if(n.op.isInBlueprint2&&this.op.isInBlueprint2){if(n.op.isInBlueprint2()&&!this.op.isInBlueprint2()){e.links=e.links||[];e.links.push(this.links[t].getSerialized())}}}}if(e.links&&e.links.length==0)delete e.links;if(this.type===h.OP.OP_PORT_TYPE_FUNCTION)delete e.value;if(this.type===h.OP.OP_PORT_TYPE_FUNCTION&&this.links.length==0)e=null;if(e&&Object.keys(e).length==1&&e.name)e=null;a(e);return e};x.prototype.shouldLink=function(){return true};x.prototype.removeLinks=function(){let e=0;while(this.links.length>0){e++;if(e>5e3){this._log.warn("could not delete links... / infinite loop");this.links.length=0;break}this.links[0].remove()}};x.prototype.removeLink=function(e){for(const t in this.links)if(this.links[t]==e)this.links.splice(t,1);if(this.direction==h.PORT.PORT_DIR_IN){if(this.type==h.OP.OP_PORT_TYPE_VALUE)this.setValue(this._valueBeforeLink||0);else this.setValue(this._valueBeforeLink||null)}if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();try{if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");this._op.emitEvent("onLinkChanged")}catch(e){this._log.error(e)}};x.prototype.getName=function(){return this.name};x.prototype.getTitle=function(){if(this.uiAttribs.title)return this.uiAttribs.title;return this.name};x.prototype.addLink=function(e){this._valueBeforeLink=this.value;this.links.push(e);if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();try{if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this._op.emitEvent("onLinkChanged")}catch(e){this._log.error(e)}};x.prototype.getLinkTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return this.links[t]};x.prototype.removeLinkTo=function(e){for(const t in this.links){if(this.links[t].portIn==e||this.links[t].portOut==e){this.links[t].remove();if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");return}}};x.prototype.isLinkedTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return true;return false};x.prototype._activity=function(){this.activityCounter++};x.prototype.trigger=function(){const t=this.links.length;this._activity();if(t===0)return;if(!this._op.enabled)return;let n=null;try{for(let e=0;e<t;++e){if(this.links[e].portIn){n=this.links[e].portIn;n.op.patch.pushTriggerStack(n);n._onTriggered();n.op.patch.popTriggerStack()}if(this.links[e])this.links[e].activity()}}catch(e){n.op.enabled=false;if(this._op.patch.isEditorMode()){if(n.op.onError)n.op.onError(e)}this._log.error("exception in port: ",n.name,n.op.name,n.op);this._log.error(e)}};x.prototype.call=function(){this._log.warn("call deprecated - use trigger() ");this.trigger()};x.prototype.execute=function(){this._log.warn("### execute port: "+this.getName(),this.goals.length)};x.prototype.setVariableName=function(e){this._useVariableName=e;this._op.patch.on("variableRename",(e,t)=>{if(e!=this._useVariableName)return;this._useVariableName=t})};x.prototype.getVariableName=function(){return this._useVariableName};x.prototype.setVariable=function(e){this.setAnimated(false);const t={useVariable:false};if(this._variableIn&&this._varChangeListenerId){this._variableIn.off(this._varChangeListenerId);this._variableIn=null}if(e){this._variableIn=this._op.patch.getVar(e);if(!this._variableIn){this._log.warn("PORT VAR NOT FOUND!!!",e)}else{if(this.type==h.OP.OP_PORT_TYPE_OBJECT){this._varChangeListenerId=this._variableIn.on("change",()=>{this.set(null);this.set(this._variableIn.getValue())})}else{this._varChangeListenerId=this._variableIn.on("change",this.set.bind(this))}this.set(this._variableIn.getValue())}this._useVariableName=e;t.useVariable=true;t.variableName=this._useVariableName}else{t.variableName=this._useVariableName=null;t.useVariable=false}this.setUiAttribs(t);this._op.patch.emitEvent("portSetVariable",this._op,this,e)};x.prototype._handleNoTriggerOpAnimUpdates=function(e){let t=false;for(let e=0;e<this._op.portsIn.length;e++){if(this._op.portsIn.type==h.OP.OP_PORT_TYPE_FUNCTION){t=true;break}}if(!t){if(e)this._notriggerAnimUpdate=this._op.patch.on("onRenderFrame",()=>{this.updateAnim()});else this._op.patch.removeEventListener(this._notriggerAnimUpdate)}};x.prototype.setAnimated=function(e){if(this._animated!=e){this._animated=e;this._op._hasAnimPort=true;if(this._animated&&!this.anim){this.anim=new I({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this._onAnimToggle()}this._handleNoTriggerOpAnimUpdates(e);if(!e){this.anim=null}this.setUiAttribs({isAnimated:this._animated})};x.prototype.toggleAnim=function(){this._animated=!this._animated;if(this._animated&&!this.anim){this.anim=new I({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this.setAnimated(this._animated);this._onAnimToggle();this.setUiAttribs({isAnimated:this._animated})};x.prototype.getType=function(){return this.type};x.prototype.isLinked=function(){return this.links.length>0||this._animated||this._useVariableName!=null};x.prototype.isBoundToVar=function(){const e=this._useVariableName!=null;this.uiAttribs.boundToVar=e;return e};x.prototype.isAnimated=function(){return this._animated};x.prototype.isHidden=function(){return this.uiAttribs.hidePort};x.prototype._onTriggered=function(e){this._activity();this._op.updateAnims();if(this._op.enabled&&this.onTriggered)this.onTriggered(e);if(this._op.enabled)this.emitEvent("trigger")};x.prototype._onSetProfiling=function(e){this._op.patch.profiler.add("port",this);this.setValue(e);this._op.patch.profiler.add("port",null)};x.prototype._onTriggeredProfiling=function(){if(this._op.enabled&&this.onTriggered){this._op.patch.profiler.add("port",this);this.onTriggered();this._op.patch.profiler.add("port",null)}};x.prototype.getUiActiveState=function(){return this._uiActiveState};x.prototype.setUiActiveState=function(e){this._uiActiveState=e;if(this.onUiActiveStateChange)this.onUiActiveStateChange()};x.prototype.onValueChange=function(e){this.onChange=e};x.prototype.hidePort=function(){};x.portTypeNumberToString=function(e){if(e==h.OP.OP_PORT_TYPE_VALUE)return"value";if(e==h.OP.OP_PORT_TYPE_FUNCTION)return"function";if(e==h.OP.OP_PORT_TYPE_OBJECT)return"object";if(e==h.OP.OP_PORT_TYPE_ARRAY)return"array";if(e==h.OP.OP_PORT_TYPE_STRING)return"string";if(e==h.OP.OP_PORT_TYPE_DYNAMIC)return"dynamic";return"unknown"};class T{constructor(e,t,n,i,r,a,s,o,u,l){this._log=new p("cg_uniform");this._type=t;this._name=n;this._shader=e;this._value=1e-5;this._oldValue=null;this._port=null;this._structName=u;this._structUniformName=o;this._propertyName=l;this._shader._addUniform(this);this.needsUpdate=true;this.shaderType=null;this.comment=null;if(t=="f"){this.set=this.setValue=this.setValueF.bind(this);this.updateValue=this.updateValueF.bind(this)}else if(t=="f[]"){this.set=this.setValue=this.setValueArrayF.bind(this);this.updateValue=this.updateValueArrayF.bind(this)}else if(t=="2f[]"){this.set=this.setValue=this.setValueArray2F.bind(this);this.updateValue=this.updateValueArray2F.bind(this)}else if(t=="3f[]"){this.set=this.setValue=this.setValueArray3F.bind(this);this.updateValue=this.updateValueArray3F.bind(this)}else if(t=="4f[]"){this.set=this.setValue=this.setValueArray4F.bind(this);this.updateValue=this.updateValueArray4F.bind(this)}else if(t=="i"){this.set=this.setValue=this.setValueI.bind(this);this.updateValue=this.updateValueI.bind(this)}else if(t=="2i"){this.set=this.setValue=this.setValue2I.bind(this);this.updateValue=this.updateValue2I.bind(this)}else if(t=="3i"){this.set=this.setValue=this.setValue3I.bind(this);this.updateValue=this.updateValue3I.bind(this)}else if(t=="4i"){this.set=this.setValue=this.setValue4I.bind(this);this.updateValue=this.updateValue4I.bind(this)}else if(t=="b"){this.set=this.setValue=this.setValueBool.bind(this);this.updateValue=this.updateValueBool.bind(this)}else if(t=="4f"){this.set=this.setValue=this.setValue4F.bind(this);this.updateValue=this.updateValue4F.bind(this)}else if(t=="3f"){this.set=this.setValue=this.setValue3F.bind(this);this.updateValue=this.updateValue3F.bind(this)}else if(t=="2f"){this.set=this.setValue=this.setValue2F.bind(this);this.updateValue=this.updateValue2F.bind(this)}else if(t=="t"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="sampler"){if(this.setValueAny){this.set=this.setValue=this.setValueAny.bind(this);this.updateValue=this.updateValueAny.bind(this)}}else if(t=="tc"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="t[]"){this.set=this.setValue=this.setValueArrayT.bind(this);this.updateValue=this.updateValueArrayT.bind(this)}else if(t=="m4"||t=="m4[]"){this.set=this.setValue=this.setValueM4.bind(this);this.updateValue=this.updateValueM4.bind(this)}else{this._log.error("Unknown uniform type "+t)}if(typeof i=="object"&&i instanceof x){this._port=i;this._value=this._port.get();if(r&&a&&s){if(!(r instanceof x)||!(a instanceof x)||!(s instanceof x)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0,0];this._port2=r;this._port3=a;this._port4=s;this._port.on("change",this.updateFromPort4f.bind(this));this._port2.on("change",this.updateFromPort4f.bind(this));this._port3.on("change",this.updateFromPort4f.bind(this));this._port4.on("change",this.updateFromPort4f.bind(this));this.updateFromPort4f()}else if(r&&a){if(!(r instanceof x)||!(a instanceof x)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0];this._port2=r;this._port3=a;this._port.on("change",this.updateFromPort3f.bind(this));this._port2.on("change",this.updateFromPort3f.bind(this));this._port3.on("change",this.updateFromPort3f.bind(this));this.updateFromPort3f()}else if(r){if(!(r instanceof x)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0];this._port2=r;this._port.on("change",this.updateFromPort2f.bind(this));this._port2.on("change",this.updateFromPort2f.bind(this));this.updateFromPort2f()}else{this._port.on("change",this.updateFromPort.bind(this))}}else this._value=i;if(this._value==undefined){console.log("value undefined",this);this._value=0}this.setValue(this._value);this.needsUpdate=true}getType(){return this._type}get type(){return this._type}get name(){return this._name}getName(){return this._name}getValue(){return this._value}getShaderType(){return this.shaderType}isStructMember(){return!!this._structName}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}}const y=T;class S extends y{constructor(e,t,n,i,r,a,s,o,u,l){super(e,t,n,i,r,a,s,o,u,l);this._loc=-1;this._cgl=e._cgl}get name(){return this._name}copy(e){const t=new S(e,this._type,this._name,this._value,this._port2,this._port3,this._port4,this._structUniformName,this._structName,this._propertyName);t.shaderType=this.shaderType;return t}getGlslTypeString(){return S.glslTypeString(this._type)}_isValidLoc(){return this._loc!=-1}resetLoc(){this._loc=-1;this.needsUpdate=true}bindTextures(){}getLoc(){return this._loc}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}updateValueF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1f(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueF(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}updateValueI(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValue2I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2i(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue3I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3i(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue4I(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform4i(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValueI(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValue2I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}setValue3I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}setValue4I(e){this.needsUpdate=true;this._value=e||vec4.create()}updateValueBool(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value?1:0);this._cgl.profileData.profileUniformCount++}setValueBool(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValueArray4F(e){this.needsUpdate=true;this._value=e}updateValueArray4F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform4fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray3F(e){this.needsUpdate=true;this._value=e}updateValueArray3F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform3fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray2F(e){this.needsUpdate=true;this._value=e}updateValueArray2F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform2fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayF(e){this.needsUpdate=true;this._value=e}updateValueArrayF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayT(e){this.needsUpdate=true;this._value=e}updateValue3F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3f(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue3F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValue2F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2f(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue2F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}updateValue4F(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value){this._log.warn("no value for uniform",this._name,this);this._value=[0,0,0,0]}this.needsUpdate=false;this._shader.getCgl().gl.uniform4f(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValue4F(e){if(typeof this.value=="number")this.value=vec4.create();if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2,3];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]||e[3]!=this._oldValue[3]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValueM4(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value||this._value.length%16!=0)return console.log("this.name",this._name,this._value);this._shader.getCgl().gl.uniformMatrix4fv(this._loc,false,this._value);this._cgl.profileData.profileUniformCount++}setValueM4(e){this.needsUpdate=true;this._value=e||mat4.create()}updateValueArrayT(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1iv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValueT(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._cgl.profileData.profileUniformCount++;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this.needsUpdate=false}setValueT(e){this.needsUpdate=true;this._value=e}}S.glslTypeString=e=>{if(e=="f")return"float";if(e=="b")return"bool";if(e=="i")return"int";if(e=="2i")return"ivec2";if(e=="2f")return"vec2";if(e=="3f")return"vec3";if(e=="4f")return"vec4";if(e=="m4")return"mat4";if(e=="t")return"sampler2D";if(e=="tc")return"samplerCube";if(e=="3f[]")return null;if(e=="m4[]")return null;if(e=="f[]")return null;console.warn("[CGL UNIFORM] unknown glsl type string ",e)};const N={SHADERVAR_VERTEX_POSITION:"vPosition",SHADERVAR_VERTEX_NUMBER:"attrVertIndex",SHADERVAR_VERTEX_NORMAL:"attrVertNormal",SHADERVAR_VERTEX_TEXCOORD:"attrTexCoord",SHADERVAR_INSTANCE_MMATRIX:"instMat",SHADERVAR_VERTEX_COLOR:"attrVertColor",SHADERVAR_INSTANCE_INDEX:"instanceIndex",SHADERVAR_UNI_PROJMAT:"projMatrix",SHADERVAR_UNI_VIEWMAT:"viewMatrix",SHADERVAR_UNI_MODELMAT:"modelMatrix",SHADERVAR_UNI_NORMALMAT:"normalMatrix",SHADERVAR_UNI_INVVIEWMAT:"inverseViewMatrix",SHADERVAR_UNI_INVPROJMAT:"invProjMatrix",SHADERVAR_UNI_MATERIALID:"materialId",SHADERVAR_UNI_OBJECTID:"objectId",SHADERVAR_UNI_VIEWPOS:"camPos"};const j={BLEND_NONE:0,BLEND_NORMAL:1,BLEND_ADD:2,BLEND_SUB:3,BLEND_MUL:4};const C=180/Math.PI;const E=Math.PI/180;const P={MATH:{DEG2RAD:E,RAD2DEG:C},SHADER:N,BLEND_MODES:j};const L={};L.lastMesh=null;const k=function(e,t,n){this._cgl=e;let i=n||{};if(CABLES.UTILS.isNumeric(i))i={glPrimitive:n};this._log=new p("cgl_mesh");this._bufVertexAttrib=null;this._bufVerticesIndizes=this._cgl.gl.createBuffer();this._indexType=this._cgl.gl.UNSIGNED_SHORT;this._attributes=[];this._attribLocs={};this._geom=null;this._lastShader=null;this._numInstances=0;this._glPrimitive=i.glPrimitive;this.opId=i.opId||"";this._preWireframeGeom=null;this.addVertexNumbers=false;this._name="unknown";this.feedBackAttributes=[];this.setGeom(t);this._feedBacks=[];this._feedBacksChanged=false;this._transformFeedBackLoc=-1;this._lastAttrUpdate=0;this.memFreed=false;this._cgl.profileData.addHeavyEvent("mesh constructed",this._name);this._queryExt=null;Object.defineProperty(this,"numInstances",{get(){return this._numInstances},set(e){this.setNumInstances(e)}})};k.prototype.freeMem=function(){this.memFreed=true;for(let e=0;e<this._attributes.length;e++){this._attributes[e].floatArray=null}};k.prototype.updateVertices=function(e){this.setAttribute(P.SHADER.SHADERVAR_VERTEX_POSITION,e.vertices,3);this._numVerts=e.vertices.length/3};k.prototype.setAttributePointer=function(t,n,i,r){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t){if(!this._attributes[e].pointer)this._attributes[e].pointer=[];this._attributes[e].pointer.push({loc:-1,name:n,stride:i,offset:r,instanced:t==P.SHADER.SHADERVAR_INSTANCE_MMATRIX})}}};k.prototype.getAttribute=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t)return this._attributes[e]};k.prototype.setAttributeRange=function(e,t,n,i){if(!e)return;if(!n&&!i)return;if(!e.name){this._log.stack("no attrname?!")}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,e.buffer);this._cgl.profileData.profileMeshAttributes+=i-n||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]=this._cgl.profileData.profileSingleMeshAttribute[this._name]||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]+=i-n||0;if(e.numItems<t.length/e.itemSize){this._resizeAttr(t,e)}if(i>t.length){if(CABLES.platform.isDevEnv())this._log.log(this._cgl.canvas.id+" "+e.name+" buffersubdata out of bounds ?",t.length,i,n,e);return}if(this._cgl.glVersion==1)this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,0,t);else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,n*4,t,n,i-n)};k.prototype._resizeAttr=function(e,t){if(t.buffer)this._cgl.gl.deleteBuffer(t.buffer);t.buffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,t.buffer);this._bufferArray(e,t);t.numItems=e.length/t.itemSize};k.prototype._bufferArray=function(e,t){let n=t.floatArray||null;if(!e)return;if(this._cgl.debugOneFrame){console.log("_bufferArray",e.length,t.name)}if(!(e instanceof Float32Array)){if(t&&n&&n.length==e.length){n.set(e)}else{n=new Float32Array(e);if(this._cgl.debugOneFrame){console.log("_bufferArray create new float32array",e.length,t.name)}if(e.length>1e4){this._cgl.profileData.profileNonTypedAttrib++;this._cgl.profileData.profileNonTypedAttribNames="("+this._name+":"+t.name+")"}}}else n=e;t.arrayLength=n.length;t.floatArray=null;this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,n,this._cgl.gl.DYNAMIC_DRAW)};k.prototype.addAttribute=k.prototype.updateAttribute=k.prototype.setAttribute=function(e,t,n,i){if(!t){this._log.error("mesh addAttribute - no array given! "+e);throw new Error}let r=null;let a=false;let s=0;const o=t.length/n;this._cgl.profileData.profileMeshAttributes+=o||0;if(typeof i=="function"){r=i}if(typeof i=="object"){if(i.cb)r=i.cb;if(i.instanced)a=i.instanced}if(e==P.SHADER.SHADERVAR_INSTANCE_MMATRIX)a=true;for(s=0;s<this._attributes.length;s++){const p=this._attributes[s];if(p.name==e){if(p.numItems===o){}else{this._resizeAttr(t,p)}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,p.buffer);this._bufferArray(t,p);return p}}const u=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,u);let l=this._cgl.gl.FLOAT;if(i&&i.type)l=i.type;const p={buffer:u,name:e,cb:r,itemSize:n,numItems:o,startItem:0,instanced:a,type:l};this._bufferArray(t,p);if(e==P.SHADER.SHADERVAR_VERTEX_POSITION)this._bufVertexAttrib=p;this._attributes.push(p);this._attribLocs={};return p};k.prototype.getAttributes=function(){return this._attributes};k.prototype.updateTexCoords=function(e){if(e.texCoords&&e.texCoords.length>0){this.setAttribute(P.SHADER.SHADERVAR_VERTEX_TEXCOORD,e.texCoords,2)}else{const t=new Float32Array(Math.round(e.vertices.length/3*2));this.setAttribute(P.SHADER.SHADERVAR_VERTEX_TEXCOORD,t,2)}};k.prototype.updateNormals=function(e){if(e.vertexNormals&&e.vertexNormals.length>0){this.setAttribute(P.SHADER.SHADERVAR_VERTEX_NORMAL,e.vertexNormals,3)}else{const t=new Float32Array(Math.round(e.vertices.length));this.setAttribute(P.SHADER.SHADERVAR_VERTEX_NORMAL,t,3)}};k.prototype._setVertexNumbers=function(e){if(!this._verticesNumbers||this._verticesNumbers.length!=this._numVerts||e){if(e)this._verticesNumbers=e;else{this._verticesNumbers=new Float32Array(this._numVerts);for(let e=0;e<this._numVerts;e++)this._verticesNumbers[e]=e}this.setAttribute(P.SHADER.SHADERVAR_VERTEX_NUMBER,this._verticesNumbers,1,(e,t,n)=>{if(!n.uniformNumVertices)n.uniformNumVertices=new S(n,"f","numVertices",this._numVerts);n.uniformNumVertices.setValue(this._numVerts)})}};k.prototype.setVertexIndices=function(t){if(!this._bufVerticesIndizes){this._log.warn("no bufVerticesIndizes: "+this._name);return}if(t.length>0){if(t instanceof Float32Array)this._log.warn("vertIndices float32Array: "+this._name);for(let e=0;e<t.length;e++){if(t[e]>=this._numVerts){this._log.warn("invalid index in "+this._name,e,t[e]);return}}this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes);if(t.length>65535){this.vertIndicesTyped=new Uint32Array(t);this._indexType=this._cgl.gl.UNSIGNED_INT}else if(t instanceof Uint32Array){this.vertIndicesTyped=t;this._indexType=this._cgl.gl.UNSIGNED_INT}else if(!(t instanceof Uint16Array)){this.vertIndicesTyped=new Uint16Array(t);this._indexType=this._cgl.gl.UNSIGNED_SHORT}else this.vertIndicesTyped=t;this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this.vertIndicesTyped,this._cgl.gl.DYNAMIC_DRAW);this._bufVerticesIndizes.itemSize=1;this._bufVerticesIndizes.numItems=t.length}else this._bufVerticesIndizes.numItems=0};k.prototype.setGeom=function(e,t){this._geom=e;if(e.glPrimitive!=null)this._glPrimitive=e.glPrimitive;if(this._geom&&this._geom.name)this._name="mesh "+this._geom.name;L.lastMesh=null;this._cgl.profileData.profileMeshSetGeom++;this._disposeAttributes();this.updateVertices(this._geom);this.setVertexIndices(this._geom.verticesIndices);if(this.addVertexNumbers)this._setVertexNumbers();const n=this._geom.getAttributes();const i={texCoords:P.SHADER.SHADERVAR_VERTEX_TEXCOORD,vertexNormals:P.SHADER.SHADERVAR_VERTEX_NORMAL,vertexColors:P.SHADER.SHADERVAR_VERTEX_COLOR,tangents:"attrTangent",biTangents:"attrBiTangent"};for(const r in n)if(n[r].data&&n[r].data.length)this.setAttribute(i[r]||r,n[r].data,n[r].itemSize);if(t){this._geom=null}};k.prototype._preBind=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].cb)this._attributes[e].cb(this._attributes[e],this._geom,t)};k.prototype._checkAttrLengths=function(){if(this.memFreed)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].arrayLength/this._attributes[e].itemSize<this._attributes[0].arrayLength/this._attributes[0].itemSize){let e="unknown";if(this._geom)e=this._geom.name}}};k.prototype._bind=function(t){if(!t.isValid())return;let n=[];if(this._attribLocs[t.id])n=this._attribLocs[t.id];else this._attribLocs[t.id]=n;this._lastShader=t;if(t.lastCompile>this._lastAttrUpdate||n.length!=this._attributes.length){this._lastAttrUpdate=t.lastCompile;for(let e=0;e<this._attributes.length;e++)n[e]=-1}for(let e=0;e<this._attributes.length;e++){const i=this._attributes[e];if(n[e]==-1){if(i._attrLocationLastShaderTime!=t.lastCompile){i._attrLocationLastShaderTime=t.lastCompile;n[e]=this._cgl.glGetAttribLocation(t.getProgram(),i.name);this._cgl.profileData.profileAttrLoc++}}if(n[e]!=-1){this._cgl.gl.enableVertexAttribArray(n[e]);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,i.buffer);if(i.instanced){if(i.itemSize<=4){if(!i.itemSize||i.itemSize==0)this._log.warn("instanced attrib itemsize error",this._geom.name,i);this._cgl.gl.vertexAttribPointer(n[e],i.itemSize,i.type,false,i.itemSize*4,0);this._cgl.gl.vertexAttribDivisor(n[e],1)}else if(i.itemSize==16){const r=16*4;this._cgl.gl.vertexAttribPointer(n[e],4,i.type,false,r,0);this._cgl.gl.enableVertexAttribArray(n[e]+1);this._cgl.gl.vertexAttribPointer(n[e]+1,4,i.type,false,r,4*4*1);this._cgl.gl.enableVertexAttribArray(n[e]+2);this._cgl.gl.vertexAttribPointer(n[e]+2,4,i.type,false,r,4*4*2);this._cgl.gl.enableVertexAttribArray(n[e]+3);this._cgl.gl.vertexAttribPointer(n[e]+3,4,i.type,false,r,4*4*3);this._cgl.gl.vertexAttribDivisor(n[e],1);this._cgl.gl.vertexAttribDivisor(n[e]+1,1);this._cgl.gl.vertexAttribDivisor(n[e]+2,1);this._cgl.gl.vertexAttribDivisor(n[e]+3,1)}else{this._log.warn("unknown instance attrib size",i.name)}}else{if(!i.itemSize||i.itemSize==0)this._log.warn("attrib itemsize error",this._name,i);this._cgl.gl.vertexAttribPointer(n[e],i.itemSize,i.type,false,i.itemSize*4,0);if(i.pointer){for(let e=0;e<i.pointer.length;e++){const a=i.pointer[e];if(a.loc==-1)a.loc=this._cgl.glGetAttribLocation(t.getProgram(),a.name);this._cgl.profileData.profileAttrLoc++;this._cgl.gl.enableVertexAttribArray(a.loc);this._cgl.gl.vertexAttribPointer(a.loc,i.itemSize,i.type,false,a.stride,a.offset)}}if(this.bindFeedback)this.bindFeedback(i)}}}if(this._bufVerticesIndizes&&this._bufVerticesIndizes.numItems!==0)this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes)};k.prototype.unBind=function(){const e=this._lastShader;this._lastShader=null;if(!e)return;let t=[];if(this._attribLocs[e.id])t=this._attribLocs[e.id];else this._attribLocs[e.id]=t;L.lastMesh=null;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].instanced){if(this._attributes[e].itemSize<=4){if(t[e]!=-1)this._cgl.gl.vertexAttribDivisor(t[e],0);if(t[e]>=0)this._cgl.gl.disableVertexAttribArray(t[e])}else{this._cgl.gl.vertexAttribDivisor(t[e],0);this._cgl.gl.vertexAttribDivisor(t[e]+1,0);this._cgl.gl.vertexAttribDivisor(t[e]+2,0);this._cgl.gl.vertexAttribDivisor(t[e]+3,0);this._cgl.gl.disableVertexAttribArray(t[e]+1);this._cgl.gl.disableVertexAttribArray(t[e]+2);this._cgl.gl.disableVertexAttribArray(t[e]+3)}}if(t[e]!=-1)this._cgl.gl.disableVertexAttribArray(t[e])}};k.prototype.meshChanged=function(){return this._cgl.lastMesh&&this._cgl.lastMesh!=this};k.prototype.printDebug=function(e){console.log("--attributes");for(let e=0;e<this._attributes.length;e++){console.log("attribute "+e+" "+this._attributes[e].name)}};k.prototype.setNumVertices=function(e){this._bufVertexAttrib.numItems=e};k.prototype.getNumVertices=function(){return this._bufVertexAttrib.numItems};k.prototype.render=function(n){if(!n||!n.isValid()||this._cgl.aborted)return;this._checkAttrLengths();if(this._geom){if(this._preWireframeGeom&&!n.wireframe&&!this._geom.isIndexed()){this.setGeom(this._preWireframeGeom);this._preWireframeGeom=null}if(n.wireframe){let e=false;if(this._geom.isIndexed()){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}this._geom.unIndex();e=true}if(!this._geom.getAttribute("attrBarycentric")){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}e=true;this._geom.calcBarycentric()}if(e)this.setGeom(this._geom)}}let e=false;if(L.lastMesh!=this){if(L.lastMesh)L.lastMesh.unBind();e=true}if(e)this._preBind(n);if(!n.bind())return;this._bind(n);if(this.addVertexNumbers)this._setVertexNumbers();L.lastMesh=this;let t=this._cgl.gl.TRIANGLES;if(this._glPrimitive!==undefined)t=this._glPrimitive;if(n.glPrimitive!==null)t=n.glPrimitive;let i=1;let r=this._cgl.profileData.doProfileGlQuery;let a=false;if(r){let e=this._name+" - "+n.getName()+" #"+n.id;if(this._numInstances)e+=" instanced "+this._numInstances+"x";let t=this._cgl.profileData.glQueryData[e];if(!t)t={id:e,num:0};if(n.opId)t.shaderOp=n.opId;if(this.opId)t.meshOp=this.opId;this._cgl.profileData.glQueryData[e]=t;if(!this._queryExt&&this._queryExt!==false)this._queryExt=this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2")||false;if(this._queryExt){if(t._drawQuery){const s=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT_AVAILABLE);if(s){const o=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT);const u=o/1e6;t._times=t._times||0;t._times+=u;t._numcount++;t.when=performance.now();t._drawQuery=null;t.queryStarted=false}}if(!t.queryStarted){t._drawQuery=this._cgl.gl.createQuery();this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT,t._drawQuery);a=t.queryStarted=true}}}if(this.hasFeedbacks&&this.hasFeedbacks())this.drawFeedbacks(n,t);else if(!this._bufVerticesIndizes||this._bufVerticesIndizes.numItems===0){if(t==this._cgl.gl.TRIANGLES)i=3;if(this._numInstances===0)this._cgl.gl.drawArrays(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems-this._bufVertexAttrib.startItem);else this._cgl.gl.drawArraysInstanced(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems,this._numInstances)}else{if(t==this._cgl.gl.TRIANGLES)i=3;if(this._numInstances===0){this._cgl.gl.drawElements(t,this._bufVerticesIndizes.numItems,this._indexType,0)}else{this._cgl.gl.drawElementsInstanced(t,this._bufVerticesIndizes.numItems,this._indexType,0,this._numInstances)}}if(this._cgl.debugOneFrame&&this._cgl.gl.getError()!=this._cgl.gl.NO_ERROR){this._log.error("mesh draw gl error");this._log.error("mesh",this);this._log.error("shader",n);const l=[];for(let e=0;e<this._cgl.gl.getProgramParameter(n.getProgram(),this._cgl.gl.ACTIVE_ATTRIBUTES);e++){const p=this._cgl.gl.getActiveAttrib(n.getProgram(),e).name;this._log.error("attrib ",p)}}this._cgl.profileData.profileMeshNumElements+=this._bufVertexAttrib.numItems/i*(this._numInstances||1);this._cgl.profileData.profileMeshDraw++;if(r&&a){this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT)}this._cgl.printError("mesh render "+this._name);this.unBind()};k.prototype.setNumInstances=function(t){t=Math.max(0,t);if(this._numInstances!=t){this._numInstances=t;const n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=e;this.setAttribute(P.SHADER.SHADERVAR_INSTANCE_INDEX,n,1,{instanced:true})}};k.prototype._disposeAttributes=function(){if(!this._attributes)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].buffer){this._cgl.gl.deleteBuffer(this._attributes[e].buffer);this._attributes[e].buffer=null}}this._attributes.length=0};k.prototype.dispose=function(){if(this._bufVertexAttrib&&this._bufVertexAttrib.buffer)this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);if(this._bufVerticesIndizes)this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);this._bufVerticesIndizes=null;this._disposeAttributes()};const R={};R.getSimpleRect=function(e,t,n=1){const i=new g(t);i.vertices=[1*n,1*n,0,-1*n,1*n,0,1*n,-1*n,0,-1*n,-1*n,0];i.texCoords=[1,1,0,1,1,0,0,0];i.verticesIndices=[0,1,2,2,1,3];i.vertexNormals=[0,0,0,0,0,0,0,0,0,0,0,0];return e.createMesh(i)};R.getSimpleCube=function(e,t){const n=new g(t);n.vertices=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];n.setTexCoords([0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0]);n.verticesIndices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];n.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);n.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);n.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]);return new k(e,n)};class M{constructor(e,t,n){this.cgl=e;this._options=n;this.fb=null;let i=n.shader;this._useDefaultShader=true;if(n.shader)this._useDefaultShader=false;n.numRenderBuffers=n.numRenderBuffers||1;if(!i){i="".endl()+"IN vec2 texCoord;";for(let e=0;e<n.numRenderBuffers;e++){i=i.endl()+"UNI sampler2D tex"+e+";".endl()}i=i.endl()+"void main()".endl()+"{";if(n.numRenderBuffers==1){i=i.endl()+"    outColor= texture(tex0,texCoord);".endl()}else for(let e=0;e<n.numRenderBuffers;e++){i=i.endl()+"outColor"+e+" = texture(tex"+e+",texCoord);".endl()}i=i.endl()+"}"}const r=n.vertexShader||"".endl()+"IN vec3 vPosition;".endl()+"IN vec2 attrTexCoord;".endl()+"OUT vec2 texCoord;".endl()+"void main()".endl()+"{".endl()+"   texCoord=attrTexCoord;".endl()+"   gl_Position = vec4(vPosition,  1.0);".endl()+"}";this.bgShader=new CGL.Shader(e,"corelib copytexture "+t);this.bgShader.setSource(r,i);if(!n.vertexShader)this.bgShader.ignoreMissingUniforms=true;new CGL.Uniform(this.bgShader,"t","tex",0);new CGL.Uniform(this.bgShader,"t","tex1",1);new CGL.Uniform(this.bgShader,"t","tex2",2);new CGL.Uniform(this.bgShader,"t","tex3",3);this.mesh=R.getSimpleRect(this.cgl,"texEffectRect")}setSize(e,t){this._options.width=e;this._options.height=t}copy(e,t,n,i,r){const a=this.cgl;if(!e)e=CGL.Texture.getEmptyTexture(this.cgl);let s=this._options.width||e.width,o=this._options.height||e.height;if(this.fb){if(s<=0)s=8;if(o<=0)o=8;if(this.fb.getWidth()!=s||this.fb.getHeight()!=o)this.fb.setSize(s,o)}else{let e=CGL.Texture.FILTER_LINEAR;let t=CGL.Texture.WRAP_CLAMP_TO_EDGE;if(this._options.isFloatingPointTexture)e=CGL.Texture.FILTER_NEAREST;if(this._options.hasOwnProperty("filter"))e=this._options.filter;if(this._options.hasOwnProperty("wrap"))t=this._options.wrap;const u={isFloatingPointTexture:this._options.isFloatingPointTexture,pixelFormat:this._options.pixelFormat,numRenderBuffers:this._options.numRenderBuffers||1,filter:e,wrap:t};if(a.glVersion==1)this.fb=new CGL.Framebuffer(a,s,o,u);else this.fb=new CGL.Framebuffer2(a,s,o,u)}a.tempData.renderOffscreen=true;this.fb.renderStart(a);a.setTexture(0,e.tex);if(t)a.setTexture(1,t.tex);if(n)a.setTexture(2,n.tex);if(i)a.setTexture(3,i.tex);if(r)a.setTexture(4,r.tex);a.pushShader(this.bgShader);this.mesh.render(this.bgShader);a.popShader();this.fb.renderEnd();a.tempData.renderOffscreen=false;return this.fb.getTextureColor()}dispose(){if(this.fb)this.fb.dispose();if(this.bgShader)this.bgShader.dispose();if(this.mesh)this.mesh.dispose()}}CGL.CopyTexture=M;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Copytexture=e.Copytexture})();