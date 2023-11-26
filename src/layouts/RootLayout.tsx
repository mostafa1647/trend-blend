import { Outlet } from 'react-router-dom';

import { Appbar } from '../components/appbar';
import { Footer } from '../components/footer';

const RootLayout = () => {
  return (
    <>
      <Appbar />
      <div className="container m-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
