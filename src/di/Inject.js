export const InjectMixin = superclass =>
  class Inject extends superclass {
    requestProvider(key) {
      const event = new CustomEvent('inject-provider', {
        detail: { key },
        bubbles: true,
        composed: true,
        cancelable: true,
      });

      this.dispatchEvent(event);
      if (event.defaultPrevented) return event.detail.provider;

      throw new Error(`no provider found for ${key}`);
    }

    inject(key) {
      return this.requestProvider(key);
    }

    provider(key) {
      return () => {
        return this.inject(key);
      };
    }
  };
