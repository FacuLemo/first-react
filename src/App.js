import './App.css';
import Hello from './components/Hello.js';
import Cronometro from './components/segundero';
import InfoPersona from './components/InfoPersona';
import Toast from './components/toast';
import Clock from './components/reloj';
import InfoUsers from './components/usuarios';
import ListarUsuario from './components/listarusers';

import usuarios from './data/users.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        
        <ListarUsuario usuarios={usuarios}/>
        {
        usuarios.map(
          (usuario)=>{return(<InfoUsers key={usuario.id} data={usuario}/>)}
          )
        }

        <InfoPersona name='juan' lname='carlo'/>
        <a className="App-link" href="https://reactjs.org">Learn React</a>
        <Hello name="James" lname="sunder"/>
        <Cronometro />
        <Toast mensaje="operacion terminada con éxito"/>
        {/* hacer el reloj component q cad 1 seg obtenga la hora del sistema - setInterval*/}
      </header>
    </div>
  );
}

export default App; //ecmascript module. Da permiso a ser leído por otros archivos
//de sacarle el default, tienen que ser llamados con su nombre específico con {x,y,z}. solo 1 default.
