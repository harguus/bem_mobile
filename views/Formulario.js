import React, {Component} from 'react';
import{
  Text,
  Image,
  Button,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Pergunta from '../components/Pergunta';
import axios from 'axios';

export default class Principal extends Component {

  constructor(props) {
    super(props);

    this.state = {listPerguntas: [],};
  }

  componentWillMount() {
    // requisição HTTP

    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response)=>{ this.setState({listPerguntas: response.data}); })
    .catch((error)=> {console.log(error);});

  }

  render(){
    return(
      <View style={styles.geral}>
        {this.state.listPerguntas.map( item => ( <Pergunta key={item.titulo} titulo={item.titulo}/>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
      flex: 1
  }

})
