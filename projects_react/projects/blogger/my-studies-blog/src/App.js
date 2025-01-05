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
          Por ahora utilizare este medio para ingresar la información sobre lo que vaya aprendiendo
        </p>
        <br />
        <p>¿Que son los algoritmos?</p>
        <br />
        <p>Son el medio por el cual podemos procesar información y transformarla, organizarla, clasificarla, descartarla o distribuirla de manera correcta, basados en las necesidades propias del problema dado</p>
        <br/>
        <p>Septiembre 19: no dejare que nada ni nadie tenga control sobre mis sueños. Hoy retomo la programación.
        </p>
        <br/>
        <p>Agregando un nuevo update a la bitacora</p>
        <h1>Odin proyect</h1><br/>
        <p>This proyect is focussed on develope each skill required for being a successful Software Developer full stack.</p><br/>
        <p>I'm currently stuck in the dessert state, sadly because of unstable emotions.</p><br/>
        <p>However, I will get this program finished by the end of this semester.</p><br/>
        <h2>How to avoid problems with motivation</h2><br/>
        <p>We must use the pomodoro technique, switching between working and studying time, and breaks, and each round we should get a bigger break. We must avoid from getting burn out since if we don't have enough breaks, we will get exhausted. Finally we should not get around the main path since there is a lot of information to complement it.</p><br/>
        <h2>Ask for help</h2>
        <p>When looking for help, we must give context about the problem itselft, share our code and provide the exercise we want to achieve, like being the most specific so our helpers will be available to assist us in the best way possible.</p><br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Epa
        </a>
      </header>
    </div>
  );
}

export default App;
