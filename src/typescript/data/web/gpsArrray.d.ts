import Gps from "./gps"

/**
 * 
 * @export
 * @interface GpsArray
 */
export interface GpsArray {
    /**
     * 
     * @type {string}
     * @memberof GpsArray
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof GpsArray
     */
    orderInOwner: number;
    /**
     * 
     * @type {Array<Gps>}
     * @memberof GpsArray
     */
    values: Array<Gps>;
}


