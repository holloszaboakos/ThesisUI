import { GpsMatrix } from "./gpsMatrix"

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
     * @type {Array<GpsArray>}
     * @memberof Result
     */
    bestRout: Array<GpsArray>;
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
