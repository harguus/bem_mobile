import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    Alert,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import Preloading from '../components/Preloading';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Logo from '../src/imgs/qrcode.png';

export default class Teste extends Component{

    constructor(props){
      super(props);

      this.state = {
        loaded: false,
        resultado: [],
        titulo: ""
      }
    }

    componentWillMount() {
        // requisição HTTP
        console.log("codigo: " + this.props.code);
        axios.get('https://bemapi.herokuapp.com/resultado/' + this.props.code)
            .then((response) => {
                this.setState({resultado: response.data});
                this.setState({loaded: true});
                console.log("Result: " + JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    'Problema com a conexão: ' + error.response.status
                );
                this.setState({loaded: true});
            });
    }

    render(){
        return(
          <View style={{flex: 1}}>
            { this.state.loaded ?
              <ScrollView style={styles.geral}>
              <View style={{ marginLeft: 10, marginRight: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 1}}>
                <Text style={styles.h1}>
                  Resultado
                </Text>
              </View>
              <View>
                <View style={{padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 120, height: 120}}
                      source={{uri : 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.state.resultado.codigo}}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                      {this.state.resultado.codigo}
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{marginTop: 10, textAlign: "center",fontSize: 16}}>
                      <Text style={{fontWeight: "bold"}}>
                        {"Pesquisa: "}
                      </Text>
                      {this.props.titulo}
                    </Text>
                    {
                      this.state.resultado.faixas.map((item, key) => (
                        <View key={key} style={{borderBottomWidth: key == this.state.resultado.faixas.length - 1 ? 0 : 1, borderBottomColor: "#c3c3c3", margin: 10, padding: 10}}>
                          <Text style={{fontSize: 20}}>
                            <Text style={{fontWeight: "bold"}}>
                              {item.escala.descricao + ": "}
                            </Text>
                              {item.titulo}
                          </Text>
                          <Text style={{fontSize: 16}}>
                            <Text style={{fontWeight: "bold"}}>
                              {"Pontuação: "}
                            </Text>
                            {item.resposta.pontuacao}
                          </Text>
                          <Text style={{fontSize: 16}}>
                            <Text style={{fontWeight: "bold"}}>
                              {"Descrição: "}
                            </Text>
                            {item.descricao}
                          </Text>
                        </View>
                    ))
                  }
                  </View>
                    
                  </View>
                  </ScrollView>
              : <Preloading/>
            }
          </View>
        );
    }
}

const styles = StyleSheet.create({
    geral: {
        flex: 1
    },
    cardBody: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    botao: {
        width: 500,
        backgroundColor: 'green',
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
        textAlign: 'center'
    },

    resultNumber: {
        color: '#000',
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },

    viewVerMais: {
        height: 35,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        justifyContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    logo: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 15
    }
})
