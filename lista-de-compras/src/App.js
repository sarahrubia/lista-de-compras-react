import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista'

const elemento = document.getElementById("root")

class App extends Component {
  ReactDOM.render(
  {
    var listaCompras = ['Alface', 'Tomate', 'Queijo', 'Macarrão', 'Arroz'];
    var listaTarefas = ['Lavar louça', 'Varrer sala', 'Levar o lixo para fora', 'Estudar React'];

    return (
      <div className='App'>
        <header>
        <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          
          <Lista />
          <h3>Lista de Compras</h3>
          <Lista elementos={listaCompras} />

          <h3>Lista de Tarefas</h3>
          <Lista elementos={listaTarefas} />
        </header>
      </div>
      , elemento
    );
  }
}

export default App;

// function App() {
//   return (
//       <div className='App'>
//         <header className='App-header'>
          // <img src={logo} className='App-logo' alt='logo' />
          // <p>
          //   Edit <code>src/App.js</code> and save to reload.
          // </p>
        
          // <a
          //   className='App-link'
          //   href='https://reactjs.org'
          //   target='_blank'
          //   rel='noopener noreferrer'
          // >
          //   Learn React
          // </a>
    
//           <Lista />
//           <h3>Lista de Compras</h3>
//           <Lista elementos={listaCompras} />

//           <h3>Lista de Tarefas</h3>
//           <Lista elementos={listaTarefas} />
  
//         </header>
//     </div>
//   );
// }

// export default App;

