import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var respostas = [];

export default class Questionario extends Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      listPerguntas: [],
      resposta: 0,
      alternativas: [
        {label: '0', value: 0 },
        {label: '1', value: 1 },
        {label: '2', value: 2 },
        {label: '3', value: 3 },
      ],
    }
  }

  addResposta(i, v){
    respostas[i] = v;
    Alert.alert("Pergunta: " + i + " resposta: " + v );
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
      <ScrollView style={styles.geral}>
          {this.state.loaded ?
              <View style={styles.vwinterna}>
              <View tyle={styles.corpo}>
                  <View style={styles.question}>
                      <Text style={styles.titulo}>{this.state.listPerguntas.titulo}</Text>
                      <View style={styles.descricao}>
                        <Text>{this.state.listPerguntas.descricao}</Text>
                      </View>
                  </View>
              </View>
                {
                  this.state.listPerguntas.perguntas.map((item, key) => (
                      <View key={key} style={styles.corpo}>
                          <View>
                              <Text style={styles.labels}>{key+1} - {item.descricao}:</Text>
                              <RadioForm
                                style={styles.radios}
                                radio_props={this.state.alternativas}
                                initial={0}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonColor={'#2196f3'}
                                labelColor={'#000'}
                                animation={true}
                                onPress={(valor) => this.addResposta(key,valor)}
                              />
                          </View>
                      </View>
                  ))
                }
                <Button
                    title={'eNVIAR'}
                    onPress={() => {Actions.resultadoFinal({idQuest: this.props.id})}}
                />
              </View>
               : <ActivityIndicator size="large" color="#0000ff" />
           }
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
    geral: {
        flex: 1
    },
    corpo: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
    },
    vwinterna: {
      marginBottom: 10
    },
    titulo:{
      textAlign: 'center',
      marginTop: 10,
      fontSize: 23,
      color: '#000',
      fontWeight: 'bold'
    },
    radios:{
      marginTop: 10,
      marginRight: 10,
      justifyContent: 'space-between'
    },
    descricao:{
      borderTopWidth: 1,
      borderColor: '#c3c3c3',
      margin: 10,
      paddingTop: 5
    },
    descricaoText:{
      fontSize: 15,
      color: 'black'
    },
    labels: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        color: "#000"
    }

})
