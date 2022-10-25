import { LitElement, html, css } from 'lit';

export class RegionProductManagement extends LitElement {
	createRenderRoot() {
		return this;
	}
	constructor() {
		super();
		this._placeholder = document.createElement('div');
		this._placeholder.classList.add('product--placeholder');
	}

	_handleDragOver(e) {
		e.preventDefault();
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.dropEffect = 'move';
		e.currentTarget.classList.add('drop');

		return false;
	}
	_handleDragLeave(e) {
		e.preventDefault();
		e.currentTarget.classList.remove('drop');
	}

	_handleDrop(e) {
		if (e.currentTarget.contains(this._placeholder)) {
			e.currentTarget.removeChild(this._placeholder);
		}
		e.currentTarget.appendChild(this._dragTarget);
		e.dataTransfer.dropEffect = 'move';
		e.stopPropagation();
		this._dragTarget.classList.remove('dragged');
		e.currentTarget.classList.remove('drop');
	}

	_handleDragStart(e) {
		this._dragTarget = e.currentTarget;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.dropEffect = 'move';
		e.dataTransfer.setData('text/html', e.target);
		e.currentTarget.classList.add('dragged');
	}

	_handleDragEnd(e) {
		e.currentTarget.classList.remove('dragged');
	}

	_handleDragEnter(e) {
		if (!e.currentTarget.contains(this._dragTarget)) {
			e.currentTarget.appendChild(this._placeholder);
		}
	}

	render() {
		return html`
			<us-region
				@dragover=${this._handleDragOver}
				@drop=${this._handleDrop}
				@dragenter=${this._handleDragEnter}
			>
				<regional-product
					.price=${10}
					.releaseDate="2022-10-27"
					draggable="true"
					@dragstart=${this._handleDragStart}
					@dragend=${this._handleDragEnd}
				>
				</regional-product>
			</us-region>
			<eu-region
				@dragover=${this._handleDragOver}
				@drop=${this._handleDrop}
				@dragenter=${this._handleDragEnter}
			>
				<regional-product
					.price=${20}
					.releaseDate="2022-10-27"
					draggable="true"
					@dragstart=${this._handleDragStart}
					@dragend=${this._handleDragEnd}
				>
				</regional-product>
			</eu-region>
			<product-list
				.dragStartCallback=${this._handleDragStart.bind(this)}
				.dragEndCallback=${this._handleDragEnd.bind(this)}
			></product-list>
		`;
	}
}

if (!customElements.get('region-product-management'))
	customElements.define('region-product-management', RegionProductManagement);
