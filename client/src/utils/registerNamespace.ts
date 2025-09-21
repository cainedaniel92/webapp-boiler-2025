import i18n from '@/translations';

export type LocaleResources = Record<string, Record<string, unknown>>;

const isDev = import.meta.env.MODE !== 'production';

export const registerNamespace = (namespace: string, resources: LocaleResources) => {
  const appendResources = () => {
    Object.entries(resources).forEach(([language, bundle]) => {
      const hasBundle = typeof i18n.hasResourceBundle === 'function' &&
        i18n.hasResourceBundle(language, namespace);

      if (!hasBundle || isDev) {
        if (typeof i18n.addResourceBundle === 'function') {
          i18n.addResourceBundle(language, namespace, bundle, true, isDev);
        }
      }
    });

    if (typeof i18n.loadNamespaces === 'function') {
      void i18n.loadNamespaces(namespace);
    }
  };

  if (i18n.isInitialized) {
    appendResources();
    return;
  }

  const handleInit = () => {
    appendResources();
    if (typeof i18n.off === 'function') {
      i18n.off('initialized', handleInit);
    }
  };

  if (typeof i18n.on === 'function') {
    i18n.on('initialized', handleInit);
  }
};
