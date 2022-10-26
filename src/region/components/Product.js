import { LitElement, html, css } from "lit";
import { InjectMixin } from "@di/Inject.js";
import moment from "moment/moment.js";

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
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._currency = this.inject("currency");
    this._taxService = this.inject("TaxCalculatorService");
    this._dateService = this.inject("DateService");
    this.requestUpdate();
  }

  _retailPrice() {
    return;
  }

  render() {
    return html`
      <li class="mdc-deprecated-list-item">
        <span class="mdc-deprecated-list-item__ripple"></span>
        <span class="mdc-deprecated-list-item__graphic material-icons"
          >${this._currency}</span
        >
        <span class="mdc-list-item__text">
          <span class="mdc-list-item__primary-text">${this._taxService.calculateGross(this.price)} (Retail) - ${this._dateService?.getDate(this.releaseDate)}</span>
          <span class="mdc-list-item__secondary-text">${this.price} Base price</span>
        </span>
      </li>
    `;
  }
}

if (!customElements.get("product-element"))
  customElements.define("product-element", Product);
