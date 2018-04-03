import React, {Component} from 'react';
import {Router, Scene, Modal} from 'react-native-router-flux';
import Home from './views/Home';
import Login from './views/Login';
import Formulario from './views/Formulario';
import Teste from "./views/Teste";
import Transtornos from "./views/Transtornos";

export default class App extends Component {
    // hideNavBar={true}
    render() {
        return (
            <Router>
                <Modal>
                    <Scene hideNavBar={true} key='home' component={Home}/>
                    <Scene key='login' component={Login}/>
                    <Scene key='teste' component={Teste} title="Passoo-a-passo"/>
                    <Scene key='transtornos' component={Transtornos} title="Transtornos"/>
                    <Scene key='formulario' component={Formulario} title="Teste DASS21"/>
                </Modal>
            </Router>
        );

    }
}
