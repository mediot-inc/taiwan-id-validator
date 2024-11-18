/**
 * Verify the input is a valid E-Invoice Donate Code (電子發票捐贈碼)
 *
 * @param { string | number } input - E-Invoice Donate Code
 * @returns { boolean } is `input` a valid E-Invoice Donate Code
 * @example
 * isDonateCode('123') // true
 * isDonateCode('abc123') // false
 */
export declare function isDonateCode(input: string | number): boolean;
