import { useTranslation } from 'react-i18next';

import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="app-footer">
      <span>{t('footer.madeWith')}</span>
      <span>{t('footer.instructions')}</span>
      <span className="app-footer__brand">
        Built by{' '}
        <a href="https://www.linkedin.com/in/cainedaniel/" target="_blank" rel="noreferrer">
          Caine Things
        </a>
      </span>
    </footer>
  );
};

export default Footer;
