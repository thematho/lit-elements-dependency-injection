import { LitElement, html, css } from "lit";

export class RegionProductManagement extends LitElement {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
    this._placeholder = document.createElement("div");
    this._placeholder.classList.add("product--placeholder");
    this._placeholder.innerHTML = `
	<li class="mdc-deprecated-list-item">
		<span class="mdc-deprecated-list-item__ripple"></span>
		<span class="mdc-deprecated-list-item__graphic material-icons">question_mark</span>
        <span class="mdc-list-item__text">
          <span class="mdc-list-item__primary-text">0.00 (Retail) - DD/MM/YYY</span>
          <span class="mdc-list-item__secondary-text">0.00 Base price</span>
        </span>
	</li>`;
  }

  _handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.currentTarget.classList.add("drop");

    return false;
  }
  _handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("drop");
		e.currentTarget.lastElementChild.removeChild(this._placeholder);
  }

  _handleDrop(e) {
    if (e.currentTarget.contains(this._placeholder)) {
      e.currentTarget.lastElementChild.removeChild(this._placeholder);
    }
    e.currentTarget.lastElementChild.appendChild(this._dragTarget);
    e.dataTransfer.dropEffect = "move";
    e.stopPropagation();
    this._dragTarget.classList.remove("dragged");
    e.currentTarget.classList.remove("drop");
  }

  _handleDragStart(e) {
    this._dragTarget = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/html", e.target);
    e.currentTarget.classList.add("dragged");
  }

  _handleDragEnd(e) {
    e.currentTarget.classList.remove("dragged");
  }

  _handleDragEnter(e) {
    if (!e.currentTarget.contains(this._dragTarget)) {
      e.currentTarget.lastElementChild.appendChild(this._placeholder);
    }
  }

  render() {
    return html`
      <us-region
        @dragover=${this._handleDragOver}
        @drop=${this._handleDrop}
        @dragenter=${this._handleDragEnter}
      >
        <h2 class="mdc-typography--headline6">United States</h2>
        <h3 class="mdc-typography--subtitle2">
          Drag a Product into this area to see it's localized price and details
        </h3>
        <ul class="mdc-deprecated-list mdc-deprecated-list--two-line">
          <product-element
            .price=${10}
            .releaseDate="2022-10-27"
            draggable="true"
            @dragstart=${this._handleDragStart}
            @dragend=${this._handleDragEnd}
          >
          </product-element>
        </ul>
      </us-region>
      <eu-region
        @dragover=${this._handleDragOver}
        @drop=${this._handleDrop}
        @dragenter=${this._handleDragEnter}
      >
        <h2 class="mdc-typography--headline6">Europe</h2>
        <h3 class="mdc-typography--subtitle2">
          Drag a Product into this area to see it's localized price and details
        </h3>
        <ul class="mdc-deprecated-list mdc-deprecated-list--two-line">
          <product-element
            .price=${20}
            .releaseDate="2022-10-27"
            draggable="true"
            @dragstart=${this._handleDragStart}
            @dragend=${this._handleDragEnd}
          >
          </product-element>
        </ul>
      </eu-region>
      <product-list
        .dragStartCallback=${this._handleDragStart.bind(this)}
        .dragEndCallback=${this._handleDragEnd.bind(this)}
      ></product-list>
    `;
  }
}

if (!customElements.get("region-product-management"))
  customElements.define("region-product-management", RegionProductManagement);
