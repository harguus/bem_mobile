import React, {Component} from 'react';
import {Router, Scene, Modal} from 'react-native-router-flux';
import Home from './views/Home';
import Login from './views/Login';
import Formulario from './views/Formulario';
import PassoAPasso from "./views/PassoAPasso";
import Transtornos from "./views/Transtornos";
import ListaQuestionarios from "./views/ListaQuestionarios";
import ResultadoFinal from "./views/ResultadoFinal";
import Questionario from "./views/Questionario";

export default class App extends Component {
    // hideNavBar={true}
    render() {
        return (
            <Router>
                <Modal>
                    <Scene hideNavBar={true} key='home' component={Home}/>
                    <Scene key='login' component={Login}/>
                    <Scene key='passoAPasso' component={PassoAPasso} title="Passoo-a-passo"/>
                    <Scene key='transtornos' component={Transtornos} title="Transtornos"/>
                    <Scene key='formulario' component={Formulario} title="Formulário"/>
                    <Scene key='listaQuestionarios' component={ListaQuestionarios} title="Questionários"/>
                    <Scene key='questionario' component={Questionario} title="Questionário"/>
                    <Scene key='resultadoFinal' component={ResultadoFinal} title="Resultado"/>
                </Modal>
            </Router>
        );

    }
}
