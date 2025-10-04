import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;  
