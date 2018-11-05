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
              Estresse:
          </Text>
          <View style={styles.block}>
            <Text style={styles.h2}>O que é?</Text>
            <Text style={styles.texts}>
                O estresse é um sintoma que muda nosso estado de forma indescritível. Ele pode ser caracterizado por sensações de irritação, medo, desconforto, preocupação, frustração, indignação, nervoso, e ser motivado por diversas razões distintas. Além disso, muitas vezes, a causa para o estresse é desconhecida.
                Quando o estresse interfere na sua vida, tornando difícil passar dias tranquilos por um longo período, ele pode ser mais perigoso tanto para mente quanto para o corpo. Isso acontece porque o estresse também leva a incômodos físicos.
                O estresse é um sentimento normal. Ele pode, inclusive, ajudar uma pessoa em seu dia a dia, melhorando seu desempenho no trabalho, por exemplo. No entanto, quando o estresse é muito grande, você pode senti-lo em seu corpo por meio de algumas reações específicas.
            </Text>
              
            <Text style={styles.h2}>Sintomas:</Text>
            <Text style={styles.texts}>
                º Um ritmo cardíaco acelerado;{"\n"}
                º Batimento fora do ritmo;{"\n"}
                º Respiração acelerada;{"\n"}
                º Sudorese;{"\n"}
                º Tremores;{"\n"}
                º Fezes soltas;{"\n"}
                º Necessidade frequente de urinar;{"\n"}
                º Boca seca;{"\n"}
                º Problemas para engolir;{"\n"}
                º Dificuldade para dormir;{"\n"}
                º Queda de cabelo em excesso;{"\n"}
                º Cansaço demasiado;{"\n"}
                º Alergias de pele;{"\n"}
                º Gastrite e úlceras;{"\n"}
                º Tensão muscular;{"\n"}
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
