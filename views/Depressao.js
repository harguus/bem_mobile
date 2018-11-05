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
              Depressão:
          </Text>
          <View style={styles.block}>
            <Text style={styles.h2}>O que é? </Text>
             <Text style={styles.texts}>
                Estar triste é diferente de estar com depressão, já que a tristeza é um sentimento normal de qualquer pessoa, sendo um estado desconfortável gerado por situações como um desapontamento, lembranças desagradáveis ou o término de um relacionamento, por exemplo, que é passageiro e não precisa de tratamento.
                Já a depressão é uma doença que afeta o humor, gerando tristeza profunda, persistente e desproporcional, que ultrapassa 2 semanas, e que não tem um motivo justificável para acontecer. Além disso, a depressão pode vir acompanhada de sintomas físicos adicionais, como diminuição da atenção, perda de peso e dificuldade em dormir, por exemplo.
                Estas diferenças podem ser sutis, e até, difíceis de perceber, portanto caso a tristeza persista por mais de 14 dias, é importante passar por uma avaliação médica, que poderá definir se há depressão e orientar um tratamento, que inclui o uso de antidepressivos e a realização de sessões de psicoterapia.
            </Text>
            <Text style={styles.h2}>Sintomas: </Text>

              <Text style={styles.texts}>
                ° Humor deprimido que seja anormal para aquela pessoa, mantido por pelo menos 2 semanas, presente durante a maior parte do dia, quase todos os dias, e que não é influenciado pelas circunstâncias;{"\n"}
                ° Perda de interesse ou prazer por atividades que normalmente são agradáveis;{"\n"}
                ° Sensação de fadiga e energia diminuída.{"\n"}
                ° Perda da confiança ou auto-estima;{"\n"}
                ° Sentimentos de culpa excessiva ou auto-reprovação;{"\n"}
                ° Problemas de sono, principalmente insônia, em que a pessoa acorda no meio da noite e não volta a adormecer, ou sonolência excessiva;{"\n"}
                ° Diminuição da concentração ou capacidade de pensar, havendo indecisão;{"\n"}
                ° Excesso de agitação ou lentificação na realização das atividades;{"\n"}
                ° Alteração do apetite, com diminuição ou aumento, com correspondente alteração do peso;{"\n"}
                ° Perda do desejo sexual;{"\n"}
                ° Depressão pior pela manhã;{"\n"}
                ° Perda de peso (5% ou mais do peso corporal no último mês);{"\n"}
                ° Irritabilidade e ansiedade excessivas.{"\n"}
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
