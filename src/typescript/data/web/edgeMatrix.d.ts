import EdgeArray from "./edgeArray"
/**
 * 
 * @export
 * @interface EdgeMatrix
 */
export interface EdgeMatrix {
    /**
     * 
     * @type {string}
     * @memberof EdgeMatrix
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof EdgeMatrix
     */
    orderInOwner: number;
    /**
     * 
     * @type {Array<EdgeArray>}
     * @memberof EdgeMatrix
     */
    edgesArrays: Array<EdgeArray>;
}

