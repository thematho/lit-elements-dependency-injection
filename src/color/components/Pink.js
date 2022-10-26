import { LitElement, html, css } from 'lit';
import { DependencyProviderMixin } from '@di/DependencyProvider';

export class Pink extends DependencyProviderMixin(LitElement) {
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			display: grid;
			grid-template-rows:  auto 1fr;
			background-color: #ff4081;
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
		this._providers.set('color', { name: 'Pink', color: '#ff4081' });
	}

	render() {
		return html`
			<h1>Pink</h1>
			<slot></slot>
		`;
	}
	#FF4081;
}

if (!customElements.get('pink-container'))
	customElements.define('pink-container', Pink);
