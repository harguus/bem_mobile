import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Teste extends Component{
    render(){
        return(
          <ScrollView style={styles.vai}>
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    DASS21
                </Text>
                <Text style={styles.texts}>
                    A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.
                </Text>
                <View style={styles.viewVerMais}>
                    <Button
                        title={'Começar'}
                        onPress={() => {Actions.formulario()}}
                    />
                </View>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    DASS21
                </Text>
                <Text style={styles.texts}>
                    A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.
                </Text>
                <View style={styles.viewVerMais}>
                    <Button
                        title={'Começar'}
                        onPress={() => {Actions.formulario()}}
                    />
                </View>
            </View>
          </ScrollView>
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
