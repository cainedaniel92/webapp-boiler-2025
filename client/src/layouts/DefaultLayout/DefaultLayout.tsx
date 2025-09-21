import type { PropsWithChildren } from 'react';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

import './DefaultLayout.scss';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout layout--default">
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
