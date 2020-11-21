import GpsArray from "./gpsArrray"
/**
 * 
 * @export
 * @interface GpsMatrix
 */
export interface GpsMatrix {
    /**
     * 
     * @type {string}
     * @memberof GpsMatrix
     */
    id: string;
    /**
     * 
     * @type {Array<GpsArray>}
     * @memberof GpsMatrix
     */
    edgesArrays: Array<GpsArray>;
}

