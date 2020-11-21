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
     * @type {EdgeMatrix}
     * @memberof Graph
     */
    edgesBetween: EdgeMatrix;
    /**
     * 
     * @type {EdgeArray}
     * @memberof Graph
     */
    edgesFromCenter: EdgeArray;
    /**
     * 
     * @type {EdgeArray}
     * @memberof Graph
     */
    edgesToCenter: EdgeArray;
}