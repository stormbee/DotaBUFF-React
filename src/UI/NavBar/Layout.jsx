import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-full bg-gradient-to-bl from-backGradFrom to-black  text-white ">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
