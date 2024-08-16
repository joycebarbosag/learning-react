import logo from './logo.svg';
import './App.css';

//para ser componente no react tem que ter letra maiúscula (camel case)
function MeuComponente(){
  return(
    <div>
    <h1>Olá</h1>
    </div>
  );
}
 //teste
//a classe app funciona como a main do java
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuComponente></MeuComponente>
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
