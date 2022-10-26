import { LitElement, html, css } from "lit";
import { DependencyProviderMixin } from "@di/DependencyProvider";
import { DateServiceFactory } from "../factories/DateServiceFactory";
import { TaxCalculator } from "../services/TaxCalculator";

export class EURegion extends DependencyProviderMixin(LitElement) {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._providers.set("DateService", DateServiceFactory("DD/MM/YYYY"));
    this._providers.set("TaxCalculatorService", new TaxCalculator(20));
    this._providers.set("currency", "euro");
  }

  render() {
    return html` <slot></slot> `;
  }
}

if (!customElements.get("eu-region"))
  customElements.define("eu-region", EURegion);
