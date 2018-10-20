import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import Preloading from '../components/Preloading';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class Teste extends Component{

  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      listQuestionarios: [],
    }
  }

  componentWillMount() {
      // requisição HTTP
      axios.get('https://bem-api.devops.ifrn.edu.br/questionario')
          .then((response) => {
              this.setState({listQuestionarios: response.data});
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
          <View style={{flex: 1}}>
          {this.state.loaded ?
            <ScrollView style={styles.vai}>
              <View style={styles.vwinterna}>
                {
                  this.state.listQuestionarios.map(
                  (item, key) => (
                      <View key={key} style={styles.cardBody}>
                          <Text style={styles.h1}>
                              {key+1} - {item.titulo}:
                          </Text>
                          <Text style={styles.texts}>
                              {item.descricao}
                          </Text>
                          <View style={styles.viewVerMais}>
                              <Button
                                  title={'Responder'}
                                  onPress={() => {Actions.questionario({id: item.id})}}
                              />
                          </View>
                      </View>
                  ))
                }
              </View>
              </ScrollView>
               : <Preloading/>
           }
           </View>

        );
    }
}

const styles = StyleSheet.create({
    cardBody: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },

    texts: {
        color: '#000',
        margin: 10,
    },

    viewVerMais: {
        alignItems: 'flex-end',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    }
})
