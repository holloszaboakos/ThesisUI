import * as GPS from "./gps"
import * as Graph from "./graph"

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    name: string;
    /**
     * 
     * @type {GPS}
     * @memberof Task
     */
    center: GPS;
    /**
     * 
     * @type {Array<Salesman>}
     * @memberof Task
     */
    salesmen: Array<Salesman>;
    /**
     * 
     * @type {Graph}
     * @memberof Task
     */
    costGraph: Graph;
}
