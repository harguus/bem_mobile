import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Teste extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            curso: "",
            idade: "",
            periodo: "",
            turno: ""
        }
    }

    render(){
        return(
            <View>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>
                        Como funciona?
                    </Text>
                    <Text style={styles.texts}>
                    Ná próxima tela, será listado os testes(questionários) a serem respondidos com questões de multipla escolha e ao final após clicar no botão enviar, será exibido o resultado do teste e as condições.
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>Dados do participante {this.state.curso}</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder="idade"
                        onChangeText={(idade) => this.setState(idade)}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Curso"
                        onChangeText={(tx) => this.setState({ curso: tx })}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="turno"
                        onChangeText={(turno) => this.setState(turno)}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="periodo"
                        onChangeText={(periodo) => this.setState(periodo)}
                        />
                    <Text></Text>
                    <View style={styles.viewVerMais}>
                        <Button
                            title={'Questionários'}
                            onPress={() => { Actions.listaQuestionarios() }}
                        />
                    </View>
                </View>
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
    inputs: {
        marginLeft: 10,
        marginRight: 10,
    },
    viewVerMais: {
        alignItems: 'flex-end',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    }
})
