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
    time_Second: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    volume_Stere: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    weight_Gramm: number;
}