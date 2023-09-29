import './App.css';
import Hello from './components/Hello.js';
import Cronometro from './components/segundero';
import InfoPersona from './components/InfoPersona';
import Toast from './components/toast';
import Clock from './components/reloj';
import ListarUsuario from './components/listarusers';
//----------------------2
import Box from './layouts/children';
//import Circle from './components/circle';
//import Formulario from './components/formulario';
import Formulario2 from './components/formulario2';
//import Saludos from './components/saludos';

import usuarios from './data/users.json';
import ClickContext from './components/clickcontext';
import Cajita from './components/cajita';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Cronometro />
        <ClickContext/>
        <Cajita/>
        <ListarUsuario usuarios={usuarios}/>
        
        <InfoPersona name='juan' lname='carlo'/>
        <Hello name="James" lname="sunder"/>

        <Box active={true} ><strong>children2</strong></Box>
        <Box active={false}>child1</Box>
        <Box active={true}>child3</Box>
        <Box active={false}>child4</Box>
        <Box active={true}>child5</Box>
        <h1>Formulario controlado</h1>
        <hr/>
        <Formulario2/>
        <hr/>
        {/* <Saludos width={770} mensaje='Naxabuxi'/> */}
        <hr/>
        {/* <Circle width={770} height={250}/> */}
        
        <Toast mensaje="operacion terminada con éxito"/> {/* className para clases css*/}
      </header>
    </div>
  );
}

export default App; //ecmascript module. Da permiso a ser leído por otros archivos
//de sacarle el default, tienen que ser llamados con su nombre específico con {x,y,z}. solo 1 default.
