import NavBar from "./components/NavBar";
import Card from "./components/Tester";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el CSS de AOS

const App = () => {
  useEffect(()=>{
    AOS.init({duration:1000, once: false,});
  },[]);
  return (
    <>
      <NavBar />
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App;