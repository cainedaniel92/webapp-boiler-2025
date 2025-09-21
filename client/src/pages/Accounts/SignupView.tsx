import { useTranslation } from 'react-i18next';

const SignupView = () => {
  const { t } = useTranslation('accounts');

  return (
    <section className="accounts-view">
      <header>
        <h2>{t('signup.title')}</h2>
        <p className="accounts-view__copy">{t('signup.hint')}</p>
      </header>
      <form className="accounts-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label htmlFor="signup-email">
          Email
          <input id="signup-email" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label htmlFor="signup-password">
          Password
          <input id="signup-password" name="password" type="password" placeholder="••••••••" required />
        </label>
        <button type="submit">{t('signup.cta')}</button>
      </form>
    </section>
  );
};

export default SignupView;
