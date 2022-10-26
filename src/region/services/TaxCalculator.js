export class TaxCalculator {
	constructor(baseTax) {
		this._baseTax = baseTax;
	}
	calculateGross(baseValue) {
		return baseValue * (this._baseTax / 100) + baseValue;
	}
}
