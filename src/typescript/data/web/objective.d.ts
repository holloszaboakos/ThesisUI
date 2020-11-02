import { GPS } from "./gps"

/**
 * 
 * @export
 * @interface Objective
 */
export interface Objective {
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    name: string;
    /**
     * 
     * @type {GPS}
     * @memberof Objective
     */
    location: GPS;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    timeSecond: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    volumeStere: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    weightGramm: number;
}