
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
    maxCost_Euro: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    minCost_Euro: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    bestCost_Euro: number;
}
