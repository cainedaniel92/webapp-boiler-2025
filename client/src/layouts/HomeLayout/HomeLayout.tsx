import type { PropsWithChildren } from 'react';

import DefaultLayout from '@/layouts/DefaultLayout';

import './HomeLayout.scss';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <DefaultLayout>
      <div className="home-layout">{children}</div>
    </DefaultLayout>
  );
};

export default HomeLayout;
