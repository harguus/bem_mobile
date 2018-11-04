import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

export default class Sobre extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>
                        Quem Somos?
                    </Text>
                    <Text style={styles.texts}>
                        Somos alunos do curso Tecnólogo de Análise e Desenvolvimento de Sistemas do IFRN-CNAT e como projeto integrador do curso é proposto o desenvolvimento de um sistema, para tal desafio a ideia do Bem foi pensada. Ele surgiu com a observação inicial no âmbito acadêmico que estamos inseridos, visto a quantidade de alunos sofrem transtorno mental decorrente de pressão acadêmica e familiar. Com esse ponto de partida educacional e com pesquisas feitas vimos que essa questão não estava restrita neste ambiente. Com esse problema o projeto integrador foi iniciado e para buscar uma solução conversamos e tivemos auxilio de psicólogos para mostrar o caminho das pedras e ter o suporte profissional adequado.
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>
                        Qual nosso Objetivo?
                    </Text>
                    <Text style={styles.texts}>
                        Buscar auxiliar pessoas que possam está se sentido em alguma condição mental suspeita e proporcionar um Feedback de como a pessoa pode esta se sentindo através de um questionário e mostrar os resultados de psicólogos disponível caso queira conversar ou medidas alternativas.
                    </Text>
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
        fontSize: 18,
        color: '#000',
        margin: 10,
    },
})
