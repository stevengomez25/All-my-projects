import './App.css';
import NoteList from './NoteList'; // Importa el contenedor NoteList

function App() {
  const notes = [
    { title: '¿Que son los algoritmos?', content: 'Son el medio por el cual podemos procesar información y transformarla, organizarla, clasificarla, descartarla o distribuirla de manera correcta, basados en las necesidades propias del problema dado' },
    { title: 'Odin proyect', content: "This proyect is focussed on develope each skill required for being a successful Software Developer full stack. I'm currently stuck in the dessert state, sadly because of unstable emotions. However, I will get this program finished by the end of this semester."},
    { title: 'How to avoid problems with motivation', content: 'We must use the pomodoro technique, switching between working and studying time, and breaks, and each round we should get a bigger break. We must avoid from getting burn out since if we do not have enough breaks, we will get exhausted. Finally we should not get around the main path since there is a lot of information to complement it.' },
    {title: 'Asking for help', content: 'When looking for help, we must give context about the problem itselft, share our code and provide the exercise we want to achieve, like being the most specific so our helpers will be available to assist us in the best way possible.'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        
      <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 p-2">
        <div class="container-fluid">
          <a class="navbar-brand flex-grow-1 fs-2" href="#Intro">Centro de Estudio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Notes">Notas guardadas</a>
              </li>
              <li class="nav-item">
                <button class="nav-link">Notas favoritas</button>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        <h1 id="Intro">Aqui tendrás todo tu conocimiento adquirido</h1>
        <img src="https://i.pinimg.com/originals/38/72/b4/3872b4b00564c4e90d50e94f2131f227.gif" alt="Logo" width="auto" height="auto" />
        <p>
          Por ahora utilizare este medio para ingresar la información sobre lo que vaya aprendiendo
        </p>
        <br />
        <p>Septiembre 19: no dejare que nada ni nadie tenga control sobre mis sueños. Hoy retomo la programación.
        </p>
        <br/>
        <p>Agregando un nuevo update a la bitacora</p>

        <div className="Notes" id="Notes">
          <h1>Notes</h1>
          <NoteList notes={notes} />
        </div>
      </header>
    </div>
  );
}

export default App;
