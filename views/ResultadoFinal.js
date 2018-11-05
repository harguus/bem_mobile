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
      axios.get('https://bem-api.devops.ifrn.edu.br/resultado/' + /*'WMbGojLvYB'*/ this.props.code)
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

              <View>
                <View style={{padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 120, height: 120}}
                      source={{ uri: `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${this.state.resultado.codigo}` }}
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
                      {this.state.resultado.faixa.titulo}
                    </Text>
                        <View style={{borderBottomColor: "#c3c3c3", marginRight: 10, marginLeft: 10, marginBottom: 10, paddingLeft: 10, paddingRight:10, paddingBottom: 10}}>
                          <Text style={{fontSize: 20}}>
                          </Text>
                          <Text style={{fontSize: 16}}>
                            <Text style={{fontWeight: "bold"}}>
                              {"Descrição: "}
                            </Text>
                            {this.state.resultado.faixa.descricao}
                          </Text>
                        </View>
                  </View>
                    <View style={styles.botoes}>
                      <Button
                        onPress={() => Actions.listaQuestionarios()}
                        title="Questionários"
                        accessibilityLabel="Voltar aos questionários"
                      />
                      <Button
                        onPress={() => Actions.home()}
                        title="Voltar ao início"
                        accessibilityLabel="Voltar ao início"
                      />
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
    botoes: {
      margin: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
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
    logo: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 15
    }
})
