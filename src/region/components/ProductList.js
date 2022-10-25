import { LitElement, html, css } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Button } from '@material/mwc-button';
import { Icon } from '@material/mwc-icon';

import { DependencyProviderMixin } from '@di/DependencyProvider';
import { DateServiceFactory } from '../factories/DateServiceFactory';

const LitClass = DependencyProviderMixin(ScopedElementsMixin(LitElement));

export class ProductList extends LitClass {
	static scopedElements = {
		'mwc-button': Button,
		'mwc-icon': Icon,
	};

	static properties = {
		dragStartCallback: { Object },
		dragEndCallback: { Object },
	};
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		*:active {
			cursor: grabbing;
		}
		.dragged {
			opacity: 0.4;
			border: 1px solid var(--header-background);
		}
		.drop {
			border: 1px solid var(--header-background);
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this._providers = new Map();
		this._providers.set('currency', '');
		this._providers.set('DateService', DateServiceFactory());
		this._providers.set('tax', 0);
	}

	_addProduct() {
		const [price, date] = [
			this.shadowRoot.querySelector('#price').valueAsNumber,
			this.shadowRoot.querySelector('#date').value,
		];
		const product = document.createElement('regional-product');
		product.price = price;
		product.date = date;
		product.draggable = 'true';
		product.addEventListener('dragstart', this.dragStartCallback);
		product.addEventListener('dragend', this.dragEndCallback);
		this.appendChild(product);
	}

	_dragEvent(eventName, e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.dispatchEvent(
			new CustomEvent(`on-product-drag-${eventName}`, {
				bubbles: true,
				composed: true,
				cancelable: true,
			})
		);
	}

	render() {
		return html`
			<input id="price" type="number" placeholder="Price" />
			<input id="date" type="date" placehooder="Release date" />
			<mwc-button
				raised
				label="Add product"
				@click=${this._addProduct}
			></mwc-button>
			<slot> </slot>
		`;
	}
}

if (!customElements.get('product-list'))
	customElements.define('product-list', ProductList);
