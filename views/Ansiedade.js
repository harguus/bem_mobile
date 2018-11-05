import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ScrollView>
      <View style={styles.cardBody}>
          <Text style={styles.h1}>
              Ansiedade:
          </Text>
          <View style={styles.block}>
              <Text style={styles.h2}>O que é? </Text>
              <Text style={styles.texts}>
                A ansiedade é uma emoção normal do ser humano, comum ao se enfrentar algum problema no trabalho, antes de uma prova ou diante de decisões difíceis do dia a dia. No entanto, a ansiedade excessiva pode se tornar uma doença, ou melhor, um distúrbio de ansiedade.
                Pessoas que sofrem de distúrbios de ansiedade sentem uma preocupação e medo extremos em situações simples da rotina, além de alguns sintomas físicos, o que atrapalha suas atividades cotidianas, já que eles são difíceis de controlar.
                A ansiedade é, basicamente, uma resposta do corpo vinda do sistema nervoso autônomo, que age independente do nosso pensamento racional, como um reflexo.
                A ansiedade e seus transtornos podem causar sintomas tanto mentais quanto físicos, que atrapalham o dia a dia de diversas formas.
              </Text>
              <Text style={styles.h2}>Sintomas: </Text>
              <Text style={styles.texts}>
              ° Insônia;{"\n"}
              ° Falta de ar ou sensação de sufoco;{"\n"}
              ° Picadas nas mãos e nos pés;{"\n"}
              ° Confusão;{"\n"}
              ° Instabilidade ou sensação de desmaio;{"\n"}
              ° Dores no peito e palpitações;{"\n"}
              ° Afrontamentos, arrepios, suores, frio, mãos úmidas;{"\n"}
              ° Boca seca;{"\n"}
              ° Contrações ou tremores incontroláveis;{"\n"}
              ° Tensão muscular, dores;{"\n"}
              ° Necessidade urgente de defecar ou urinar;{"\n"}
              ° Dificuldade em engolir;{"\n"}
              ° Sensação de ter um "nó" na garganta;{"\n"}
              ° Dificuldades para relaxar;{"\n"}
              ° Dificuldades para dormir;{"\n"}
              ° Leve tontura ou vertigem;{"\n"}
              ° Vômitos incontroláveis;{"\n"}
              ° Sensação de impotência;{"\n"}
              </Text>
          </View>
      </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    cardBody: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    block:{
      margin: 10,
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },
    h2:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10
    },
    texts: {
        fontSize: 18,
        color: '#000',
        textAlign: 'auto',
        marginBottom: 10,
    },
})
