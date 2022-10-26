import { LitElement, html, css } from "lit";
import { DependencyProviderMixin } from "@di/DependencyProvider";
import { DateServiceFactory } from "../factories/DateServiceFactory";
import { TaxCalculator } from "../services/TaxCalculator";

export class USRegion extends DependencyProviderMixin(LitElement) {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._providers.set("DateService", DateServiceFactory("MM/DD/YYYY"));
    this._providers.set("TaxCalculatorService", new TaxCalculator(10));
    this._providers.set("currency", "attach_money");
  }

  render() {
    return html` <slot></slot> `;
  }
}

if (!customElements.get("us-region"))
  customElements.define("us-region", USRegion);
