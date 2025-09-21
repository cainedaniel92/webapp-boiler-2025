import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AccountsLayout from '@/layouts/AccountsLayout';
import { registerNamespace } from '@/utils/registerNamespace';

import LoginView from './LoginView';
import SignupView from './SignupView';
import en from './translations/en.json';
import es from './translations/es.json';
import './AccountsPage.scss';

registerNamespace('accounts', { en, es });

const AccountsPage = () => {
  const { t } = useTranslation('accounts');

  return (
    <AccountsLayout>
      <header className="accounts-page__header">
        <h1>{t('title')}</h1>
      </header>
      <Routes>
        <Route index element={<LoginView />} />
        <Route path="signup" element={<SignupView />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </AccountsLayout>
  );
};

export default AccountsPage;
