export const DependencyProviderMixin = (superclass) =>
	class DependencyProvider extends superclass {
		constructor() {
			super();
			this._providers = new Map();
		}
		connectedCallback() {
			super.connectedCallback();
			this.addEventListener('inject-provider', (event) => {
				const { dependencyName } = event;
				if (this._providers.has(dependencyName)) {
					event.dependency = this._providers.get(dependencyName);
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
