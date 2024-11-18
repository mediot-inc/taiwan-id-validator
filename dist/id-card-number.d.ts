export type NewUiValidationOptions = Partial<{
    /**
     * Foreigners or stateless persons (外國人或無國籍人士)
     */
    foreignOrStateless: boolean;
    /**
     * Stateless residents (無戶籍國民)
     */
    statelessResident: boolean;
    /**
     * Hong Kong or Macao residents (香港澳門居民)
     */
    hkMacaoResident: boolean;
    /**
     * Mainland China residents (大陸地區居民)
     */
    mainlandChinaResident: boolean;
}> | boolean;
export type UiNumberValidationOptions = Partial<{
    /**
     * Old format UI number (舊版統一證號)
     */
    oldFormat: boolean;
    /**
     * New format UI number (新版統一證號)
     */
    newFormat: NewUiValidationOptions;
}> | boolean;
export type IdCardValidationOptions = Partial<{
    /**
     * National identification number (身分證字號)
     */
    nationalId: boolean;
    /**
     * UI number (統一證號)
     */
    uiNumber: UiNumberValidationOptions;
}>;
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
export declare function isIdCardNumber(input: string, options?: IdCardValidationOptions): boolean;
