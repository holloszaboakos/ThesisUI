/**
 * 
 * @export
 * @interface Setup
 */
export interface Setup {
    /**
     * 
     * @type {string}
     * @memberof Setup
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Setup
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Setup
     */
    iterLimit: number;
    /**
     * 
     * @type {number}
     * @memberof Setup
     */
    timeLimitSecond: number;
    /**
     * 
     * @type {GPS}
     * @memberof Setup
     */
    center: GPS;
    /**
     * 
     * @type {Array<Objective>}
     * @memberof Setup
     */
    objectives: Array<Objective>;
    /**
     * 
     * @type {Array<Salesman>}
     * @memberof Setup
     */
    salesmen: Array<Salesman>;
}
