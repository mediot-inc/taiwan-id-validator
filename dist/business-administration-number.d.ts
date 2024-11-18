export type BanValidationOptions = {
    /**
     * validate `input` with old format only: https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283
     */
    applyOldRules?: boolean;
};
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
export declare function isBan(input: string | number, options?: BanValidationOptions): boolean;
