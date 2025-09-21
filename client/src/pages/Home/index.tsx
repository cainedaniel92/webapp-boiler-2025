import { useTranslation } from 'react-i18next';

import HomeLayout from '@/layouts/HomeLayout';
import { registerNamespace } from '@/utils/registerNamespace';

import en from './translations/en.json';
import es from './translations/es.json';
import './HomePage.scss';

registerNamespace('home', { en, es });

const HomePage = () => {
  const { t } = useTranslation('home');
  const instructionsValue = t('instructions', { returnObjects: true });
  const instructions = Array.isArray(instructionsValue)
    ? instructionsValue
    : typeof instructionsValue === 'string'
      ? [instructionsValue]
      : [];

  return (
    <HomeLayout>
      <section className="home-page">
        <header className="home-page__hero">
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </header>

        <ol className="home-page__checklist">
          {instructions.map((instruction, index) => (
            <li key={instruction}>
              <span className="home-page__step">{index + 1}.</span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>

        <p className="home-page__cta">{t('cta')}</p>
      </section>
    </HomeLayout>
  );
};

export default HomePage;
