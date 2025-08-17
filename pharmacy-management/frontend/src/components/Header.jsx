import logo from '../assets/logo.png'; // coloca aquí tu logo o reemplaza el path

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b shadow h-[20vh] bg-sky-300">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-2xl font-bold">Software de Farmacia</h1>
        <p className="text-gray-600 text-sm">Tu solución integral para la gestión farmacéutica</p>
      </div>
      <div className="w-20 h-20">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
    </header>
  );
};

export default Header;
