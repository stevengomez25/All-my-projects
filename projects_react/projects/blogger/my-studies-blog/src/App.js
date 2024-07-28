import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aqui tendrás todo tu conocimiento adquirido</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ya no se que hacer con mi hijueputa vida
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          35 Maneras de como morir sin dolor
        </a>
      </header>
    </div>
  );
}

export default App;
