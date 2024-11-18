/**
 * Verify the input is a valid E-Invoice Mobile Barcode (電子發票手機條碼)
 *
 * @param { string } input - E-Invoice Mobile Barcode
 * @returns { boolean } is `input` a valid E-Invoice Mobile Barcode
 * @example
 * isMobileBarcode('/+.-++..') // true
 * isMobileBarcode('/12345678') // false
 */
export declare function isMobileBarcode(input: string): boolean;
