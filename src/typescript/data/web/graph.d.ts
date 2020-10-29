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
     * @type {Array<Objective>}
     * @memberof Graph
     */
    objectives?: Array<Objective>;
    /**
     * 
     * @type {Array<Array<Edge>>}
     * @memberof Graph
     */
    edges: Array<Array<Edge>>;
}