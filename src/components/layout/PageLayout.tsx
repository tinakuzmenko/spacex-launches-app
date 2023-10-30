import { FC, PropsWithChildren } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageLayout;
