import Objective from "./objective"
import Edge from "./edge"

/**
 * 
 * @export
 * @interface Graph
 */
export interface Graph {
    /**
     * 
     * @type {string}
     * @memberof Graph
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Graph
     */
    name: string;
    /**
     * 
     * @type {Gps}
     * @memberof Graph
     */
    center: Gps;
    /**
     * 
     * @type {Array<Objective>}
     * @memberof Graph
     */
    objectives: Array<Objective>;
    /**
     * 
     * @type {Array<EdgeArray>}
     * @memberof Graph
     */
    edgesBetween: Array<EdgeArray>;
    /**
     * 
     * @type {Array<Edge>}
     * @memberof Graph
     */
    edgesFromCenter: Array<Edge>;
    /**
     * 
     * @type {Array<Edge>}
     * @memberof Graph
     */
    edgesToCenter: Array<Edge>;
}
