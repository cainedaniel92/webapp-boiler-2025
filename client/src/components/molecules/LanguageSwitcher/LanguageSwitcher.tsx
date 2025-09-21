import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppLanguage } from '@/translations';
import './LanguageSwitcher.scss';

const LANGUAGES: AppLanguage[] = ['en', 'es'];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation('common');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const nextLang = event.target.value as AppLanguage;
      void i18n.changeLanguage(nextLang);
    },
    [i18n]
  );

  return (
    <label className="language-switcher">
      <span className="language-switcher__label">{t('language.label')}</span>
      <select
        className="language-switcher__select"
        value={i18n.language}
        onChange={handleChange}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {t(`language.${lang === 'en' ? 'english' : 'spanish'}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSwitcher;
