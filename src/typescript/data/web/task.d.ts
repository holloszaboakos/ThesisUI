import * as Graph from "./graph"
import * as Salesman from "./salesman"

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

