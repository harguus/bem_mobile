import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SobreTeste extends Component{
    render(){
        return(
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    Sobre o teste:
                </Text>
                <Text style={styles.texts}>
                  Os testes realizados em nosso aplicativo são questionários de avaliação psicológica baseados em testes utilizados por profissionais.
                </Text>
                <View style={styles.viewVerMais}>
                    <TouchableOpacity
                        style={styles.cruz}
                        onPress={() => {Actions.passoAPasso()}}
                      >
                      <Text style={{fontSize: 30, color: '#fff'}}>></Text>
                    </TouchableOpacity>
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
    cruz:{
        backgroundColor: '#3C9DFF',
        borderRadius: 100,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 2,
        paddingBottom: 4,
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
        marginBottom: 6
    }
})
