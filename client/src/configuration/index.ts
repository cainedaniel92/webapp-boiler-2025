import uiConfig from './ui.config.json';

type ThemeMode = 'light' | 'dark';

type ThemeConfig = {
  defaultMode: ThemeMode;
  defaultSkin: string;
  availableSkins: string[];
  allowSystemPreference: boolean;
};

type InternationalizationConfig = {
  defaultLanguage: string;
  fallbackLanguage: string;
  supportedLanguages: string[];
};

type LayoutConfig = {
  header: {
    sticky: boolean;
  };
  content: {
    maxWidth: number;
    padding: string;
  };
};

export type UIConfig = {
  theme: ThemeConfig;
  internationalization: InternationalizationConfig;
  layout: LayoutConfig;
};

const config = uiConfig as UIConfig;

export const getUIConfig = (): UIConfig => config;

export const getDefaultLanguage = () => config.internationalization.defaultLanguage;

export const getDefaultThemeMode = () => config.theme.defaultMode;

export const getDefaultSkin = () => config.theme.defaultSkin;

export default config;
