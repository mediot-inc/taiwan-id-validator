export declare function zipWith<T, R>(a1: T[], a2: T[], f: (v1: T, v2: T) => R): R[];
export declare function add(a: number, b: number): number;
export declare function multiply(a: number, b: number): number;
export declare const objectKeys: <T extends Record<string, unknown>>(obj: T) => (keyof T)[];
