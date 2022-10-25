import { LitElement, html, css } from 'lit';
import { InjectMixin } from '@di/Inject.js';
import moment from 'moment/moment.js';

export class Product extends InjectMixin(LitElement) {
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			margin: 1rem;
			border: solid 1px black;
		}
	`;

	static properties = {
		price: { Number },
		releaseDate: { String },
	};

	connectedCallback() {
		super.connectedCallback();
		this._currency = this.inject('currency');
		this._tax = this.inject('tax');
		this._dateService = this.inject('DateService');
		this.requestUpdate();
	}

	_retailPrice() {
		return this.price * (this._tax / 100) + this.price;
	}

	render() {
		return html`<div>Price ${this._currency} ${this.price}</div>
			<div>Retail price (%${this._tax}) ${this._retailPrice()}</div>
			<div>Release date ${this._dateService?.getDate(this.releaseDate)}</div>`;
	}
}

if (!customElements.get('regional-product'))
	customElements.define('regional-product', Product);
