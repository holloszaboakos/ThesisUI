import Edge from "./edge"
/**
 * 
 * @export
 * @interface EdgeArray
 */
export interface EdgeArray {
    /**
     * 
     * @type {string}
     * @memberof EdgeArray
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof EdgeArray
     */
    orderInOwner: number;
    /**
     * 
     * @type {Array<Edge>}
     * @memberof EdgeArray
     */
    edges: Array<Edge>;
}

