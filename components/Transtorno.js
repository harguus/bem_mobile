import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
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
                    A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.
                </Text>
                <View style={{padding: 10}}>
                  <Button
                    title={'Ver todos'}
                    onPress={() => {Actions.transtornos()}}
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
