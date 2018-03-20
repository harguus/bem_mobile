import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
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
          <Scene key='formulario' component={Formulario} title="Formulario"/>
          <Scene key='teste' component={Teste} title="Teste"/>
          <Scene key='transtornos' component={Transtornos} title="Transtornos"/>
        </Modal>
      </Router>
    );

  }
}
