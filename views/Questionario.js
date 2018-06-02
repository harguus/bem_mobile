import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class Questionario extends Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      listPerguntas: [],
    }
  }

  componentWillMount() {
      // requisição HTTP
      axios.get('https://bemapi.herokuapp.com/questionario/' + this.props.id)
          .then((response) => {
              this.setState({listPerguntas: response.data});
              this.setState({loaded: true});
          })
          .catch((error) => {
              console.log(error);
              Alert.alert(
                  'Problema com a conexão: '+ error.response.status
              );
              this.setState({loaded: true});
          });
  }

  render(){
    return(
      <View>
      <Text>
        {this.state.listPerguntas.titulo}
      </Text>
      </View>
    );
  }
}
