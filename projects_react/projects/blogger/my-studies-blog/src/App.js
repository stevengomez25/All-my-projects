import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 p-2">
        <div class="container-fluid">
          <a class="navbar-brand flex-grow-1 fs-2" href="#">Centro de Estudio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Notas guardadas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">crear nueva nota</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Notas favoritas</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
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
