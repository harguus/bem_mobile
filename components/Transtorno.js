import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Transtorno extends Component{

    render(){
        return(
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    Transtornos:
                </Text>
                <Text style={styles.texts}>
                  Aqui listamos alguns transtornos e suas definições para um melhor entendimento e esclarecimentos de tais condições psicológicas.
                </Text>
                <View style={styles.viewVerMais}>
                  <TouchableOpacity
                      style={styles.cruz}
                      onPress={() => {Actions.transtornos()}}
                    >
                    <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
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
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },

    cruz:{
        backgroundColor: '#3C9DFF',
        borderRadius: 100,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 2,
        paddingBottom: 4,
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
