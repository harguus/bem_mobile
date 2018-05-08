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
                    Escala de depressão geriátrica (GDS)
                </Text>
                <Text style={styles.texts}>
                    Descrição do teste: Trata-se de um questionário de 15 perguntas com respostas objetivas (SIM ou NÃO) a respeito de como a pessoa tem se sentido na última semana, comumente aplicada entre idosos.
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
                    DASS-21
                </Text>
                <Text style={styles.texts}>
                    O questionário DASS-21 é uma avaliação clínica que mede os os níveis de depressão, ansiedade e stress. Ele tem 21 perguntas e leva cerca de 3 minutos para ser concluído. A função principal do teste DASS-21 é avaliar a severidade dos sintomas centrais da depressão, ansiedade e stress.
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
