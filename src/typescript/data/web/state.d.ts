/**
 * 
 * @export
 * @interface State
 */
export interface State {
    /**
     * 
     * @type {string}
     * @memberof State
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof State
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof State
     */
    maxCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof State
     */
    minCostEuro: number;
    /**
     * 
     * @type {number}
     * @memberof State
     */
    iteration: number;
    /**
     * 
     * @type {number}
     * @memberof State
     */
    runtimeSecond: number;
    /**
     * 
     * @type {Setup}
     * @memberof State
     */
    setup: Setup;
    /**
     * 
     * @type {Array<GPS>}
     * @memberof State
     */
    bestRout: Array<GPS>;
}