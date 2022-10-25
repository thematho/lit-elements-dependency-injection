import { LitElement, html, css } from 'lit';
import { DependencyProviderMixin } from '@di/DependencyProvider';
import { DateServiceFactory } from '../factories/DateServiceFactory';

export class EURegion extends DependencyProviderMixin(LitElement) {
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
		}
	`;

	connectedCallback() {
		super.connectedCallback();
		this._providers.set('currency', 'EUR');
		this._providers.set('DateService', DateServiceFactory('DD/MM/YYYY'));
		this._providers.set('tax', 35);
	}

	render() {
		return html`
			<header>Europe region</header>
			<div class="mdc-card__media-content">Title</div>

			<slot class="mdc-card__content"></slot>
		`;
	}
}

if (!customElements.get('eu-region'))
	customElements.define('eu-region', EURegion);
