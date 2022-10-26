import { LitElement, html, css } from 'lit';
import { InjectMixin } from '@di/Inject.js';
import moment from 'moment/moment.js';

export class Children extends InjectMixin(LitElement) {
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			display: flex;
			width: 250px;
			height: 250px;
			align-items: center;
			justify-content: center;
			background-color: #ffffff;
			border-radius: 4px;
			text-align: center;
		}
	`;

	static properties = {};

	connectedCallback() {
		super.connectedCallback();
		this._color = this.inject('color');
		this.requestUpdate();
	}

	_retailPrice() {
		return;
	}

	render() {
		return html`I'm inside ${this._color} !`;
	}
}

if (!customElements.get('children-element'))
	customElements.define('children-element', Children);
