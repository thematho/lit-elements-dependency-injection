export const InjectMixin = (superclass) =>
	class Inject extends superclass {
		requestProvider(dependencyName) {
			const event = new CustomEvent('inject-provider', {
				bubbles: true,
				composed: true,
				cancelable: true,
			});
      event.dependencyName = dependencyName;

			this.dispatchEvent(event);
			if (event.defaultPrevented) return event.dependency;

			throw new Error(`no provider found for ${dependencyName}`);
		}

		inject(dependencyName) {
			return this.requestProvider(dependencyName);
		}

	};
