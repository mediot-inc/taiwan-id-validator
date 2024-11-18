/**
 * Verify the input is a valid Citizen Digital Certificate Number (自然人憑證)
 *
 * @param { string } input - Citizen Digital Certificate Number
 * @returns { boolean } is `input` a valid Citizen Digital Certificate Number
 * @example
 * isCdcNumber('AB12345678901234') // true
 * isCdcNumber('A12345678901234') // false
 */
export declare function isCdcNumber(input: string): boolean;
