import React from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Home from './views/Home';
import Login from './views/Login';
import Formulario from './views/Formulario';
import PassoAPasso from "./views/PassoAPasso";
import Transtornos from "./views/Transtornos";
import Ansiedade from "./views/Ansiedade";
import Depressao from "./views/Depressao";
import Estresse from "./views/Estresse";
import ListaQuestionarios from "./views/ListaQuestionarios";
import ResultadoFinal from "./views/ResultadoFinal";
import Questionario from "./views/Questionario";

export default props => (
    <Router>
        <Modal>            
            <Scene key='questionario' component={Questionario} title="Questionário" />            
            <Scene hideNavBar={true} key='home' component={Home} />
            <Scene key='login' component={Login} />
            <Scene key='passoAPasso' component={PassoAPasso} title="Passoo-a-passo" />
            <Scene key='transtornos' component={Transtornos} title="Transtornos" />
            <Scene key='ansiedade' component={Ansiedade} title="Transtorno" />
            <Scene key='depressao' component={Depressao} title="Transtorno" />
            <Scene key='estresse' component={Estresse} title="Transtorno" />
            <Scene key='formulario' component={Formulario} title="Formulário" />
            <Scene key='listaQuestionarios' component={ListaQuestionarios} title="Questionários" />
            <Scene hideNavBar={false} key='resultadoFinal' component={ResultadoFinal} title="Resultado" />
        </Modal>
    </Router>
)