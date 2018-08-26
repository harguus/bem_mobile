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
              <Text style={styles.texts}>
                Depressão é um estado depressivo de humor, caracterizado por aversão à atividade, que pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.
                As pessoas deprimidas podem sentir-se tristes, ansiosas, vazias, desesperadas, preocupadas, impotentes, inúteis, culpadas, irritadas, magoadas ou inquietas. Podem perder o interesse em atividades que antes eram prazerosas, podem perder o apetite ou comer demais, apresentar problemas de concentração, dificuldade para lembrar detalhes ou tomar decisões. Problemas de insônia, sono excessivo, fadiga, perda de energia, mudança na alimentação, sofrimento, dores ou problemas digestivos resistentes a tratamento também podem estar presentes.
                O humor deprimido não é necessariamente um transtorno psiquiátrico.
                Pode ser uma reação passageira a determinados acontecimentos ou consequência de uma dada condição médica ou, ainda, efeito colateral de medicamentos ou tratamentos médicos. O humor deprimido é também a característica principal ou associada a certas síndromes psiquiátricas tais como depressão clínica.
              </Text>

              <Text style={styles.h2}>Causas: </Text>
              <Text style={styles.texts}>
              Mudanças e eventos de vida que podem precipitar o humor deprimido incluem o parto, menopausa,sedentarismo, dificuldades financeiras, problemas de trabalho, a perda de um amigo ou ente querido, casamento, desastres naturais, tais como terremotos, furacões, tornados etc, problemas de relacionamento,problemas de família ou até mesmo falta de atenção familiar, separação, luto ou lesão causada por catástrofe.
              Doenças não psiquiatricas.
              O humor deprimido pode ser o resultado de uma série de doenças infecciosas, condições neurológicas e problemas fisiológicos, incluindo hipoandrogenismo (nos homens), doença de Addison, doença de Lyme, esclerose múltipla, dor crónica, acidente vascular cerebral, diabetes, apnéia do sono e ritmo circadiano perturbado. Muitas vezes, é um dos primeiros sintomas de hipotireoidismo (diminuição da atividade da glândula tireóide).
              </Text>

              <Text style={styles.h2}>Sintomas: </Text>

              <Text style={styles.texts}>
              Requer um diagnóstico médico.

              A sensação persistente de tristeza ou perda de interesse que caracteriza a depressão pode levar a uma variedade de sintomas físicos e comportamentais. Estes podem incluir alterações no sono, apetite, nível de energia, concentração, comportamento diário ou autoestima.

              As pessoas, em geral, podem ter:

              No humor:Ansiedade, apatia, culpa, descontentamento geral, desesperança, mudanças de humor, perda de interesse, perda de interesse ou prazer nas atividades, solidão, tristeza, tédio ou sofrimento emocional;
              No comportamento:Agitação, automutilação, choro excessivo, inquietação, irritabilidade ou isolamento social;
              No sono: Despertar precoce, excesso de sonolência, insônia ou sono agitado;
              Na cognição: Falta de concentração, lentidão durante atividades ou pensamentos suicidas;
              No corpo: Fadiga ou fome excessiva;
              No peso: Ganho de peso ou perda de peso.

              Ja especificando em faixa etaria, pode-se observar:
              </Text>

              <Text style={styles.h2}>Em crianças: </Text>

              <Text style={styles.texts}>
              Irritabilidade;
              Redução no interesse em brincadeiras;
              Queda no rendimento escolar;
              Sensação de cansaço;
              Ansiedade;
              Dores somatizadas.
              </Text>

              <Text style={styles.h2}>Em adolescentes: </Text>
              <Text style={styles.texts}>
              Agressividade;
              Alteração do apetite;
              Pensamento suicida;
              Isolamento social.
              </Text>

              <Text style={styles.h2}>Em adultos: </Text>
              <Text style={styles.texts}>
              Isolamento social;
              Tristeza;
              Alteração no humor;
              Alteração no sono;
              Perda de líbido.
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
