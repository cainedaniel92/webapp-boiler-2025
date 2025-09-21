import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '@/layouts/DefaultLayout';
import { registerNamespace } from '@/utils/registerNamespace';

import en from './translations/en.json';
import es from './translations/es.json';
import './NotFoundPage.scss';

registerNamespace('notFound', { en, es });

const NotFoundPage = () => {
  const { t } = useTranslation('notFound');

  return (
    <DefaultLayout>
      <section className="not-found">
        <div className="not-found__badge">404</div>
        <div className="not-found__heading">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
          <p>{t('details')}</p>
        </div>
        <div className="not-found__actions">
          <Link to="/">{t('cta')}</Link>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default NotFoundPage;
