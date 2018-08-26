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
              <Text style={styles.h2}>Causas: </Text>
              <Text style={styles.texts}>
                Esses dois aspectos, tanto a ansiedade quanto o medo, não surgem na vida da pessoa por uma escolha.
                Acredita-se que vivências interpessoais e problemas na primeira infância possam ser importantes causas desses sintomas.
                Além disso, existem causas biológicas como anormalidades químicas no cérebro ou distúrbios hormonais.
                Ansiedade é um estado emocional que se adquire como consequência de algum ato.
                Todos nós temos uma consciência que nos permite distinguir o certo do errado quando realizamos algo que a nossa consciência diz ser errado, como adultério, assassinato, ou desacatar alguém que sempre nos fez o bem, sem um motivo real aparente, isso nos leva a uma consciência pesada, é como se a cabeça ficasse literalmente com um peso extra ou sentimento de culpa que impede o nosso equilíbrio.
                Embora para a medicina alopata a ansiedade não seja doença, para a medicina chinesa a ansiedade é uma doença da energia do corpo, pois não existe órgão lesado que produza marcadores bioquímicos como: hormônios, enzimas que indique lesão etc.
                Mas o desequilíbrio do organismo existe. O desequilíbrio ocorrerá futuramente com o agravo do quadro ou com a evolução do agudo - crônico - degenerativo.
              </Text>
              <Text style={styles.h2}>Consequências: </Text>
              <Text style={styles.texts}>
                Todas as pessoas podem sentir ansiedade, principalmente com a vida atribulada atual. A ansiedade acaba tornando-se constante na vida de muitas pessoas. Dependendo do grau ou da frequência, pode se tornar patológica e acarretar muitos problemas posteriores, como o transtorno da ansiedade. Portanto, nem sempre é patológica.
                Ter ansiedade ou sofrer desse mal faz com que a pessoa perca uma boa parte da sua autoestima, ou seja, ela deixa de fazer certas coisas porque se julga ser incapaz de realizá-las. Dessa forma, o termo ansiedade está de certa forma ligado à palavra medo, sendo assim a pessoa passa a ter medo de errar quando da realização de diferentes tarefas, sem mesmo chegar a tentar.
                Em alguns casos, a ansiedade é capaz de intensificar o que o indivíduo está sentindo, deixando de apresentar sintomas únicos e passando a aumentar aqueles naturalmente produzidos pelo sistema nervoso. Ou seja: se a pessoa sente medo, ela sentirá muito medo; se a pessoa se sente triste, ela se sentirá muito triste;
                as vezes sentimentos comuns como gostar de algo ou alguém podem ter um grande impacto sobre portadores de ansiedade, e querer algo pode tornar-se uma necessidade com o passar do tempo. A Ansiedade em níveis muito altos, ou quando apresentada com a timidez ou depressão, impede que a pessoa desenvolva seu potencial intelectual. O aprendizado é bloqueado e isso interfere não só no aprendizado da educação tradicional, mas na inteligência social. O indivíduo fica sem saber como se
                portar em ocasiões sociais ou no trabalho, o que pode levar a estagnação na carreira.
              </Text>
              <Text style={styles.h2}>Sintomas: </Text>
              <Text style={styles.texts}>
              - Insônia;
              - Falta de ar ou sensação de sufoco;
              - Picadas nas mãos e nos pés;
              - Confusão;
              - Instabilidade ou sensação de desmaio;
              - Dores no peito e palpitações;
              - Afrontamentos, arrepios, suores, frio, mãos úmidas;
              - Boca seca;
              - Contrações ou tremores incontroláveis;
              - Tensão muscular, dores;
              - Necessidade urgente de defecar ou urinar;
              - Dificuldade em engolir;
              - Sensação de ter um "nó" na garganta;
              - Dificuldades para relaxar;
              - Dificuldades para dormir;
              - Leve tontura ou vertigem;
              - Vômitos incontroláveis;
              - Sensação de impotência;
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
