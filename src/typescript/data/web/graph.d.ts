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
     * @type {GPS}
     * @memberof Graph
     */
    center: GPS;
    /**
     * 
     * @type {Array<Objective>}
     * @memberof Graph
     */
    objectives: Array<Objective>;
    /**
     * 
     * @type {Array<Array<Edge>>}
     * @memberof Graph
     */
    edgesBetween: Array<Array<Edge>>;
    /**
     * 
     * @type {Array<Array<Edge>>}
     * @memberof Graph
     */
    edgesFromCenter: Array<Edge>;
    /**
     * 
     * @type {Array<Array<Edge>>}
     * @memberof Graph
     */
    edgesToCenter: Array<Edge>;
}