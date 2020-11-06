
/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    name: string;
    /**
     * 
     * @type {Array<GPS>}
     * @memberof Result
     */
    bestRout: Array<GPS>;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    maxCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    minCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    bestCostEuro: number;
}
