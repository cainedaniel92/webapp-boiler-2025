import { useTranslation } from 'react-i18next';

import HomeLayout from '@/layouts/HomeLayout';
import { registerNamespace } from '@/utils/registerNamespace';

import logo from '@/assets/Webapp Boiler - Logo.png';
import en from './translations/en.json';
import es from './translations/es.json';
import './HomePage.scss';

type Step = {
  title: string;
  description: string;
};

type ResourceLink = {
  label: string;
  href: string;
};

registerNamespace('home', { en, es });

const HomePage = () => {
  const { t } = useTranslation('home');

  const stepsValue = t('steps', { returnObjects: true }) as unknown;
  const steps: Step[] = Array.isArray(stepsValue)
    ? (stepsValue as Step[])
    : [];

  const commandsValue = t('commands', { returnObjects: true }) as unknown;
  const commands: string[] = Array.isArray(commandsValue)
    ? (commandsValue as string[])
    : [];

  const linksValue = t('links', { returnObjects: true }) as unknown;
  const links: ResourceLink[] = Array.isArray(linksValue)
    ? (linksValue as ResourceLink[])
    : [];

  return (
    <HomeLayout>
      <section className="home-page" id="kickoff">
        <header className="home-page__hero">
          <div className="home-page__logo-wrapper">
            <img src={logo} alt={t('hero.title')} className="home-page__logo" />
          </div>
          <div className="home-page__hero-content">
            <h1>{t('hero.title')}</h1>
            <p className="home-page__subtitle">{t('hero.subtitle')}</p>
            <p className="home-page__message">{t('hero.message')}</p>
            <div className="home-page__hero-actions">
              <a
                className="home-page__button home-page__button--primary"
                href="https://github.com/cainedaniel92/webapp-boiler-2025"
                target="_blank"
                rel="noreferrer"
              >
                {t('hero.ctaDocs')}
              </a>
              <a className="home-page__button" href="#kickoff">
                {t('hero.ctaStart')}
              </a>
            </div>
          </div>
        </header>

        <section className="home-page__grid">
          <article className="home-page__card">
            <h2>{t('stepsHeading')}</h2>
            <ul>
              {steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="home-page__card">
            <h2>{t('commandsHeading')}</h2>
            <div className="home-page__command-list">
              {commands.map((command) => (
                <code key={command} className="home-page__command">
                  {command}
                </code>
              ))}
            </div>
          </article>

          <article className="home-page__card">
            <h2>{t('linksHeading')}</h2>
            <ul className="home-page__links">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </HomeLayout>
  );
};

export default HomePage;
