/**
 * 
 * @export
 * @interface Salesman
 */
export interface Salesman {
    /**
     * 
     * @type {string}
     * @memberof Salesman
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Salesman
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    workTimeSecondPerDay: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    volumeCapacityStere: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    weightCapacityGramm: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    vechicleSpeedMeterPerSecond: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    paymentEuroPerSecond: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    fuelConsuptionLiterPerMeter: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    fuelPriceEuroPerLiter: number;
    /**
     * 
     * @type {number}
     * @memberof Salesman
     */
    basePriceEuro: number;
}
