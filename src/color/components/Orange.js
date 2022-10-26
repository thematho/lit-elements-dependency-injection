import { LitElement, html, css } from 'lit';
import { DependencyProviderMixin } from '@di/DependencyProvider';

export class Orange extends DependencyProviderMixin(LitElement) {
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			display: grid;
			grid-template-rows: auto 1fr;
			background-color: #ff6200;
			justify-content: center;
			align-items: center;
		}
		h1 {
			color: #e6e6e6;
			text-align: center;
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this._providers.set('color', 'Orange');
	}

	render() {
		return html`
			<h1>Orange</h1>
			<slot></slot>
		`;
	}
}

if (!customElements.get('orange-container'))
	customElements.define('orange-container', Orange);
