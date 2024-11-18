(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["taiwanIdValidator"] = factory();
	else
		root["taiwanIdValidator"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  isBan: function() { return /* reexport */ isBan; },
  isCdcNumber: function() { return /* reexport */ isCdcNumber; },
  isDonateCode: function() { return /* reexport */ isDonateCode; },
  isIdCardNumber: function() { return /* reexport */ isIdCardNumber; },
  isMobileBarcode: function() { return /* reexport */ isMobileBarcode; }
});

;// CONCATENATED MODULE: ./src/citizen-digital-certificate-number.ts
/**
 * Verify the input is a valid Citizen Digital Certificate Number (自然人憑證)
 *
 * @param { string } input - Citizen Digital Certificate Number
 * @returns { boolean } is `input` a valid Citizen Digital Certificate Number
 * @example
 * isCdcNumber('AB12345678901234') // true
 * isCdcNumber('A12345678901234') // false
 */
function isCdcNumber(input) {
    if (typeof input !== 'string')
        return false;
    var n = input.toString();
    // 驗證規則為兩碼英文 + 14 碼數字
    var regex = /^[A-Z]{2}\d{14}$/;
    return regex.test(n);
}

;// CONCATENATED MODULE: ./src/e-invoice-mobile-barcode.ts
/**
 * Verify the input is a valid E-Invoice Mobile Barcode (電子發票手機條碼)
 *
 * @param { string } input - E-Invoice Mobile Barcode
 * @returns { boolean } is `input` a valid E-Invoice Mobile Barcode
 * @example
 * isMobileBarcode('/+.-++..') // true
 * isMobileBarcode('/12345678') // false
 */
function isMobileBarcode(input) {
    if (typeof input !== 'string')
        return false;
    var n = input.toString();
    /**
     * 總長度為 8 碼
     * 第 1 碼為 /
     * 第 2-8 碼由 0-9 (數字), A-Z (大寫英文字母), .(period), -(hyphen), +(plus) 組成
     */
    var regex = /^\/[\dA-Z.\-+]{7}$/;
    return regex.test(n);
}

;// CONCATENATED MODULE: ./src/e-invoice-donate-code.ts
/**
 * Verify the input is a valid E-Invoice Donate Code (電子發票捐贈碼)
 *
 * @param { string | number } input - E-Invoice Donate Code
 * @returns { boolean } is `input` a valid E-Invoice Donate Code
 * @example
 * isDonateCode('123') // true
 * isDonateCode('abc123') // false
 */
function isDonateCode(input) {
    if (typeof input !== 'string' && typeof input !== 'number')
        return false;
    var n = input.toString();
    // 總長度為 3-7 碼 0-9 的數字
    var regex = /^[\d]{3,7}$/;
    return regex.test(n);
}

;// CONCATENATED MODULE: ./src/helper.ts
function zipWith(a1, a2, f) {
    var length = Math.min(a1.length, a2.length);
    var result = [];
    for (var i = 0; i < length; i++)
        result[i] = f(a1[i], a2[i]);
    return result;
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
var objectKeys = Object.keys;

;// CONCATENATED MODULE: ./src/business-administration-number.ts

/**
 * Verify the input is a valid Business Administration Number (營利事業統一編號)
 *
 * @param { string | number } input - Business Administration Number
 * @param { BanValidationOptions } [banValidationOptions] - Business Administration Number validation options
 * @returns { boolean } is `input` a valid Business Administration Number
 * @example
 * isBan('12345675') // true
 * isBan('12345675', { applyOldRules: true }) // true
 * isBan('12345678') // false
 */
function isBan(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.applyOldRules, applyOldRules = _a === void 0 ? false : _a;
    if (typeof input !== 'string' && typeof input !== 'number')
        return false;
    /**
     * Example: 12345675
     * Step 1:
     * 1 * 1 = 1
     * 2 * 2 = 4
     * 3 * 1 = 3
     * 4 * 2 = 8
     * 5 * 1 = 5
     * 6 * 2 = 12
     * 7 * 4 = 28
     * 5 * 1 = 5
     *
     * Step 2:
     * 1 -> 1
     * 4 -> 4
     * 3 -> 3
     * 8 -> 8
     * 5 -> 5
     * 12 -> 1 + 2 = 3
     * 28 -> 2 + 8 = 10
     * 5 -> 5
     *
     * Step 3:
     * (1 + 4 + 3 + 8 + 5 + 3 + 10 + 5) % 10 = 9
     */
    var BAN_COEFFICIENTS = [1, 2, 1, 2, 1, 2, 4, 1];
    var n = input.toString();
    var regex = /^\d{8}$/;
    if (!regex.test(n))
        return false;
    /**
     * Step 1: 先把統一編號的每個數字分別乘上對應的係數 (1, 2, 1, 2, 1, 2, 4, 1)
     * Step 2: 再把個別乘積的十位數與個位數相加，得出八個小於 10 的數字
     */
    var intRadix = 10;
    var checksum = zipWith(BAN_COEFFICIENTS, n.split('').map(function (c) { return parseInt(c, intRadix); }), multiply)
        .map(function (n) { return (n % 10) + Math.floor(n / 10); })
        .reduce(add, 0);
    /**
     * Step 3: 檢查把這 8 個數字相加之後計算此和除以 5 or 10 的餘數
     * Step 4:
     *  4-1: 若是餘數為 0，則為正確的統一編號
     *  4-2: 若是餘數為 9，且原統一編號的第七位是 7，則也為正確的統一編號
     */
    var divisor = applyOldRules ? 10 : 5;
    return (checksum % divisor === 0 ||
        (parseInt(n.charAt(6), intRadix) === 7 && (checksum + 1) % divisor === 0));
}

;// CONCATENATED MODULE: ./src/id-card-number.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/**
 * Tree structure containing RegExp patterns for identification numbers
 */
var idCardRegExps = {
    nationalId: /[A-Z][1,2]\d{8}/,
    uiNumber: {
        oldFormat: /[A-Z][A-D]\d{8}/,
        newFormat: {
            foreignOrStateless: /[A-Z][89][0-6]\d{7}/,
            statelessResident: /[A-Z][89][7]\d{7}/,
            hkMacaoResident: /[A-Z][89][8]\d{7}/,
            mainlandChinaResident: /[A-Z][89][9]\d{7}/
        }
    }
};
/**
 * Collect all the RegExp patterns from a tree structure.
 * If the validation options are specified, only the patterns with the corresponding options will be collected.
 * If the validation options are not specified, all patterns will be collected.
 * Default options are `true` if not specified.
 *
 * @param { Tree<RegExp> } regexTree - The tree structure containing RegExp patterns
 * @param { Tree<boolean> | boolean } validationOptions - The tree structure containing validation options
 * @returns { RegExp[] } An array of RegExp patterns to be used for validation
 */
var collectPatterns = function (regexTree, validationOptions) {
    return objectKeys(regexTree).reduce(function (patterns, key) {
        var _a;
        var currentRegex = regexTree[key];
        var currentOptions = typeof validationOptions === 'boolean'
            ? validationOptions
            : (_a = validationOptions[key]) !== null && _a !== void 0 ? _a : true; // default to true if not specified
        return currentRegex instanceof RegExp
            ? currentOptions
                ? patterns.concat(currentRegex)
                : patterns
            : patterns.concat(collectPatterns(currentRegex, currentOptions));
    }, []);
};
/**
 * Verify the input is a valid identification number based on provided options.
 *
 * @param { string } input - The identification number to verify
 * @param { IdCardValidationOptions } [options] - Options specifying which types of identification numbers to check
 * @returns `true` if the input is a valid identification number according to the specified options, otherwise `false`
 * @example
 * isIdCardNumber('A123456789') // true
 * isIdCardNumber('A123456789', { nationalId: false }) // false
 */
function isIdCardNumber(input, options) {
    if (options === void 0) { options = {
        nationalId: true,
        uiNumber: true
    }; }
    if (typeof input !== 'string')
        return false;
    // collect all the patterns based on the options
    var patterns = collectPatterns(idCardRegExps, options);
    // create a regex that matches any of the patterns
    var joinedRegexString = patterns.map(function (r) { return r.source; }).join('|');
    var regex = new RegExp("^(".concat(joinedRegexString, ")$"));
    return regex.test(input) && verifyTaiwanIdIntermediateString(input);
}
/**
 * Verify the intermediate string for isNationalIdentificationNumber and isResidentCertificateNumber
 *
 * @param { string } input - String to verify
 * @returns { boolean } is `input` a valid Taiwan ID intermediate string
 * @example
 * verifyTaiwanIdIntermediateString('A123456789') // true
 * verifyTaiwanIdIntermediateString('A123456788') // false
 */
function verifyTaiwanIdIntermediateString(input) {
    var intRadix = 10;
    /**
     *  A=10 台北市     J=18 新竹縣     S=26 高雄縣
     *  B=11 台中市     K=19 苗栗縣     T=27 屏東縣
     *  C=12 基隆市     L=20 台中縣     U=28 花蓮縣
     *  D=13 台南市     M=21 南投縣     V=29 台東縣
     *  E=14 高雄市     N=22 彰化縣     W=32 金門縣*
     *  F=15 台北縣     O=35 新竹市*    X=30 澎湖縣
     *  G=16 宜蘭縣     P=23 雲林縣     Y=31 陽明山
     *  H=17 桃園縣     Q=24 嘉義縣     Z=33 連江縣*
     *  I=34 嘉義市*    R=25 台南縣
     *
     *  Step 1: 英文字母按照上表轉換為數字之後，十位數 * 1 + 個位數 * 9 相加
     */
    var TAIWAN_ID_LOCALE_CODE_LIST = [
        1, // A -> 10 -> 1 * 1 + 9 * 0 = 1
        10, // B -> 11 -> 1 * 1 + 9 * 1 = 10
        19, // C -> 12 -> 1 * 1 + 9 * 2 = 19
        28, // D
        37, // E
        46, // F
        55, // G
        64, // H
        39, // I -> 34 -> 1 * 3 + 9 * 4 = 39
        73, // J
        82, // K
        2, // L
        11, // M
        20, // N
        48, // O -> 35 -> 1 * 3 + 9 * 5 = 48
        29, // P
        38, // Q
        47, // R
        56, // S
        65, // T
        74, // U
        83, // V
        21, // W -> 32 -> 1 * 3 + 9 * 2 = 21
        3, // X
        12, // Y
        30 // Z -> 33 -> 1 * 3 + 9 * 3 = 30
    ];
    var RESIDENT_CERTIFICATE_NUMBER_LIST = [
        0, // A
        1, // B
        2, // C
        3, // D
        4, // E
        5, // F
        6, // G
        7, // H
        4, // I
        8, // J
        9, // K
        0, // L
        1, // M
        2, // N
        5, // O
        3, // P
        4, // Q
        5, // R
        6, // S
        7, // T
        8, // U
        9, // V
        2, // W
        0, // X
        1, // Y
        3 // Z
    ];
    var getCharOrder = function (s, i) {
        return s.charCodeAt(i) - 'A'.charCodeAt(0);
    };
    var firstDigit = TAIWAN_ID_LOCALE_CODE_LIST[getCharOrder(input, 0)];
    var secondDigit = isNaN(parseInt(input[1], intRadix)) // if is not a number (舊版居留證編號)
        ? RESIDENT_CERTIFICATE_NUMBER_LIST[getCharOrder(input, 1)]
        : parseInt(input[1], intRadix);
    var rest = input
        .substring(2)
        .split('')
        .map(function (n) { return parseInt(n, intRadix); });
    var idInDigits = __spreadArray([firstDigit, secondDigit], rest, true);
    // Step 2: 第 1 位數字 (只能為 1 or 2) 至第 8 位數字分別乘上 8, 7, 6, 5, 4, 3, 2, 1 後相加，再加上第 9 位數字
    var ID_COEFFICIENTS = [1, 8, 7, 6, 5, 4, 3, 2, 1, 1];
    var sum = zipWith(idInDigits, ID_COEFFICIENTS, multiply).reduce(add, 0);
    // Step 3: 如果該數字為 10 的倍數，則為正確身分證字號
    return sum % 10 === 0;
}

;// CONCATENATED MODULE: ./src/index.ts






/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.map