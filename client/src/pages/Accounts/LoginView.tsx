import { useTranslation } from 'react-i18next';

const LoginView = () => {
  const { t } = useTranslation('accounts');

  return (
    <section className="accounts-view">
      <header>
        <h2>{t('login.title')}</h2>
        <p className="accounts-view__copy">{t('login.hint')}</p>
      </header>
      <form className="accounts-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" name="password" type="password" placeholder="••••••••" required />
        </label>
        <button type="submit">{t('login.cta')}</button>
      </form>
    </section>
  );
};

export default LoginView;
