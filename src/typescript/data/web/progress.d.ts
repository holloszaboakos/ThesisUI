
/**
 * 
 * @export
 * @interface Progress
 */
export interface Progress {
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    name: string;
    /**
     * 
     * @type {Array<GPS>}
     * @memberof Progress
     */
    bestRout: Array<GPS>;
    /**
     * 
     * @type {number}
     * @memberof Progress
     */
    maxCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof Progress
     */
    minCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof Progress
     */
    bestCostEuro: number;
}
