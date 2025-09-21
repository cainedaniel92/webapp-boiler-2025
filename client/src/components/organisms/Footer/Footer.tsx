import { useTranslation } from 'react-i18next';

import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="app-footer">
      <span>{t('footer.madeWith')}</span>
      <span>{t('footer.instructions')}</span>
    </footer>
  );
};

export default Footer;
