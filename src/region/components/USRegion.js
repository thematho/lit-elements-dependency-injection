import { LitElement, html, css } from 'lit';
import { DependencyProviderMixin } from "@di/DependencyProvider";
import { DateServiceFactory } from "../factories/DateServiceFactory";

export class USRegion extends DependencyProviderMixin(LitElement) {

    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        :host {
        }
      `;

    constructor() {
        super();
        this._providers.set('currency', 'U$S');
        this._providers.set('DateService', DateServiceFactory('MM/DD/YYYY'));
        this._providers.set('tax', 25.6);
    }

    render() {
        return html`
        <header class="mdc-card__media-content">United States region</header>
        <slot class="mdc-card__content"></slot>
        `;
    }

}

if (!customElements.get('us-region')) customElements.define('us-region', USRegion);