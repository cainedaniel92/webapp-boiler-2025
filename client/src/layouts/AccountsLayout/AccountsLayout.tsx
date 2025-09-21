import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '@/layouts/DefaultLayout';

import './AccountsLayout.scss';

const AccountsLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation('accounts');

  return (
    <DefaultLayout>
      <div className="accounts-layout">
        <aside className="accounts-layout__sidebar">
          <h2>{t('title')}</h2>
          <p>{t('login.hint')}</p>
          <p>{t('signup.hint')}</p>
        </aside>
        <section className="accounts-layout__content">{children}</section>
      </div>
    </DefaultLayout>
  );
};

export default AccountsLayout;
