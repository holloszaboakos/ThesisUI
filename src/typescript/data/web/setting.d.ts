/**
 * 
 * @export
 * @interface Setting
 */
export interface Setting {
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Setting
     */
    iterLimit: number;
    /**
     * 
     * @type {number}
     * @memberof Setting
     */
    timeLimitSecond: number;
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    algorithm: string;
}
