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
    length_Meter: number;
    /**
     * 
     * @type {Array<GPS>}
     * @memberof Edge
     */
    root: Array<GPS>;
}