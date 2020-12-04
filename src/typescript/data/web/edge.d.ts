import { GPS } from "./gps"


/**
 * 
 * @export
 * @interface Edge
 */
export interface Edge {
    /**
     * 
     * @type {string}
     * @memberof Edge
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Edge
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Edge
     */
    orderInOwner: number;
    /**
     * 
     * @type {number}
     * @memberof Edge
     */
    length_Meter: number;
    /**
     * 
     * @type {Array<Gps>}
     * @memberof Edge
     */
    rout: Array<Gps>;
}

