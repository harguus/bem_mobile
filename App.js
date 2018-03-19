import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Principal from './views/Principal';
import Formulario from './views/Formulario';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Modal>
          <Scene key='principal' component={Principal}/>
          <Scene key='formulario' component={Formulario} title="Formulario"/>
        </Modal>
      </Router>
    );
  }
}
