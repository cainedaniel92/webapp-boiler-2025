import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './ThemeToggle.scss';
import { getUIConfig } from '@/configuration';

type ThemeOption = 'light' | 'dark';

const getInitialTheme = (): ThemeOption => {
  if (typeof window === 'undefined') {
    return getUIConfig().theme.defaultMode as ThemeOption;
  }

  const storedTheme = window.localStorage.getItem('app-theme') as ThemeOption | null;
  if (storedTheme) {
    return storedTheme;
  }

  const config = getUIConfig();

  if (config.theme.allowSystemPreference) {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    if (typeof prefersDark === 'boolean') {
      return prefersDark ? 'dark' : 'light';
    }
  }

  return config.theme.defaultMode as ThemeOption;
};

const ThemeToggle = () => {
  const { t } = useTranslation('common');
  const [theme, setTheme] = useState<ThemeOption>(getInitialTheme);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('app-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const labelKey = theme === 'light' ? 'theme.dark' : 'theme.light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={t('theme.toggle')}
      title={t('theme.toggle')}
    >
      <span>{t(labelKey)}</span>
    </button>
  );
};

export default ThemeToggle;
