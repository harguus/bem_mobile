import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Sobre extends Component{
    render(){
        return(
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    BEM
                </Text>
                <Text style={styles.texts}>
                    Buscar auxiliar pessoas que possam está se sentido em alguma condição mental suspeita e proporcionar um Feedback de como a pessoa pode esta se sentindo através de um questionário e mostrar os resultados de psicólogos disponível caso queira conversar ou medidas alternativas.
                </Text>
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
        fontSize: 17,
        color: '#000',
        margin: 10,
    },
})
