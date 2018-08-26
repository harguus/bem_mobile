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
              <Text style={styles.texts}>
              O estresse é o desgaste físico e mental causado pela soma de respostas físicas e mentais causadas por determinados estímulos externos (estressores) e que permitem ao indivíduo (humano ou animal) superar determinadas exigências do meio em que vive.
              O estresse pode ser causado pela ansiedade e pela depressão devido à mudança brusca no estilo de vida e a exposição a um determinado ambiente, que leva a pessoa a sentir um determinado tipo de angústia. Quando os sintomas de estresse persistem por um longo intervalo de tempo, podem ocorrer sentimentos de evasão (ligados à ansiedade e depressão).
              Os nossos mecanismos de defesa passam a não responder de uma forma eficaz, aumentando assim a possibilidade de vir a ocorrer doenças, especialmente cardiovasculares.
              </Text>
              <Text style={styles.h2}>Causas internas: </Text>
              <Text style={styles.texts}>
              Ligados a características de personalidade, como perfeccionismo, pressa, querer fazer tudo ao mesmo tempo.
              </Text>

              <Text style={styles.h2}>Causas externas: </Text>
              <Text style={styles.texts}>
              Do ambiente. Mudanças em geral, até mesmo as positivas, desencadeiam estresse porque exigem adaptação: nascimento de filho, mudanças profissionais (troca de emprego, promoção, demissão), aposentadoria, mudança de casa, divórcio, doença ou morte de pessoas queridas. Mas há também os pequenos, como o trânsito, que pode acabar tendo um peso importante para muitas pessoas. "Quão estressante é um fator depende do fator em si, do significado que tem para a pessoa e da forma que ela lida com ele", comenta a dra. Selma Bordin, psicóloga do Hospital Israelita Albert Einstein.
              </Text>
              <Text style={styles.h2}>Sintomas: </Text>
              <Text style={styles.texts}>
              Sensação de desgaste constante;
              Alteração de sono (dormir demais ou pouco);
              Tensão muscular Formigamento (na face ou nas mãos, por exemplo);
              Problemas de pele;
              Hipertensão;
              Mudança de apetite;
              Alterações de humor;
              Perda de interesse pelas coisas;
              Problemas de atenção, concentração e memória;
              Ansiedade;
              Depressão;
              </Text>
              <Text style={styles.h2}>Veja o potencial estressante de algumas situacoes: </Text>
              <Text style={styles.texts}>
              Morte do cônjuge - 100
              Divórcio - 73;
              Promrisão - 63;
              Morte de um parente querido - 63;
              Casamento - 50;
              Demissão do trabalho - 47;
              Aposentadoria - 45;
              Reconciliação conjugal - 45;
              Gravidez - 40;
              Grandes conquistas pessoais - 28;
              Problemas com o chefe - 23;
              Férias - 13;
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
      fontSize: 15,
      marginBottom: 10
    },
    texts: {
        color: '#000',
        textAlign: 'auto',
        marginBottom: 10,
    },
})
