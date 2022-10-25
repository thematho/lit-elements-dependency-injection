export const DependencyProviderMixin = (superclass) =>
	class DependencyProvider extends superclass {
		constructor() {
			super();
			this._providers = new Map();
		}
		connectedCallback() {
			super.connectedCallback();
			this.addEventListener('inject-provider', (event) => {
				const { key } = event.detail;
				if (this._providers.has(key)) {
					event.detail.provider = this._providers.get(key);
					event.preventDefault();
					event.stopPropagation();
				}
			});
		}

		provide(key, factory) {
			this._providers.set(key, factory);
		}

		provideInstance(key, instance) {
			this._providers.set(key, () => instance);
		}
	};
