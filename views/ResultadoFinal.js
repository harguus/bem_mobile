import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../src/imgs/qrcode.png';

export default class Teste extends Component{
    render(){
        return(
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    Resultado
                </Text>
                <Text style={styles.resultNumber}>
                  24513
                </Text>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <View style={styles.viewVerMais}>
                    <Button
                        style={styles.botao}
                        title={'Repetir teste'}
                        onPress={() => {Actions.formulario()}}
                    />
                    <Button
                        title={'Questionarios'}
                        onPress={() => {Actions.listaQuestionarios()}}
                    />
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
        marginTop: 5,
        width: 300,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 15
    }
})
