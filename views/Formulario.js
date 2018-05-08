import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Picker,
    Alert,
    Button,
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class Principal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            listPerguntas: [],
            selection0: '0',
            selection1: '0',
            selection2: '0',
            selection3: '0',
            selection4: '0',
            selection5: '0',
            selection6: '0',
            selection7: '0',
            selection8: '0',
            selection9: '0',
            selection10: '0',
            selection11: '0',
            selection12: '0',
            selection13: '0',
            selection14: '0',
            selection15: '0',
            selection16: '0',
            selection17: '0',
            selection18: '0',
            selection19: '0',
            selection20: '0',

            selection0value: '0',
            selection1value: '0',
            selection2value: '0',
            selection3value: '0',
            selection4value: '0',
            selection5value: '0',
            selection6value: '0',
            selection7value: '0',
            selection8value: '0',
            selection9value: '0',
            selection10value: '0',
            selection11value: '0',
            selection12value: '0',
            selection13value: '0',
            selection14value: '0',
            selection15value: '0',
            selection16value: '0',
            selection17value: '0',
            selection18value: '0',
            selection19value: '0',
            selection20value: '0',

            valor: '0',
        };

    }

    componentWillMount() {
        // requisição HTTP
        axios.get('https://bemapi.herokuapp.com/pergunta')
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


    chagerSelectionKey(selection, key, itemValue) {
        let selectionKey = selection + key;
        let vai = {[selectionKey]: itemValue};
        this.setState({values: itemValue});
        this.setState(vai);
    }

    // vaiDoido(selection, key){
    //
    //     this.state.{selection + key + "value"};
    //     return ;
    // }

    render() {
        return (
            <ScrollView style={styles.geral}>
                {this.state.loaded ?
                    <View>
                      {
                        this.state.listPerguntas.map(
                        (item, key) => (
                            <View key={key} style={styles.corpo}>
                                <View style={styles.question}>
                                    <Text style={styles.labels}>{key+1} - {item.descricao}:</Text>
                                    <Picker
                                        style={styles.select}
                                        // selectedValue={this.vaiDoido("selection", key, this.state.values)}
                                        selectedValue={this.state.values}
                                        onValueChange={(itemValue) => this.setState(this.chagerSelectionKey("selection", key, itemValue))}>
                                        <Picker.Item label="Não" value="0" />
                                        <Picker.Item label="Foi Complicado" value="1" />
                                        <Picker.Item label="Mais ou Menos" value="2" />
                                        <Picker.Item label="Foi Muito Dificil" value="3" />
                                    </Picker>
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
    question:{

    },
    labels: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        color: "#000"
    }

})
