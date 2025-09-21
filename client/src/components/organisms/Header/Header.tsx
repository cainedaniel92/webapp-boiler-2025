import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '@/components/molecules/LanguageSwitcher';
import ThemeToggle from '@/components/atoms/ThemeToggle';

import './Header.scss';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <span className="app-header__title">{t('app.title')}</span>
        <span className="app-header__tagline">{t('app.tagline')}</span>
      </div>

      <nav className="app-header__nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
          {t('navigation.home')}
        </NavLink>
        <NavLink to="/accounts" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
          {t('navigation.accounts')}
        </NavLink>
      </nav>

      <div className="app-header__controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
