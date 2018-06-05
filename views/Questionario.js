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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

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

                          </View>
                      </View>
                  ))
                }
                <Button
                    title={'eNVIAR'}
                    onPress={() => {Actions.resultadoFinal()}}
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
