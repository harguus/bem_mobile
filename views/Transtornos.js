import React, { Component } from 'react';
import {
    Text,
    Image,
    Alert,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    openAnsiedade(){
      Actions.ansiedade();
    }
    openDepressao(){
      Actions.depressao();
    }
    openEstresse(){
      Actions.estresse();
    }

    render(){
        return(
            <ScrollView>
                <Card
                    titulo={'Ansiedade'}
                    texto={'Todas as pessoas podem sentir ansiedade, principalmente com a vida atribulada atual. A ansiedade acaba tornando-se constante na vida de muitas pessoas. Dependendo do grau ou da frequência, pode se tornar patológica e acarretar muitos problemas posteriores, como o transtorno da ansiedade. Portanto, nem sempre é patológica...'}
                    open={this.openAnsiedade}
                />
                <Card
                    titulo={'Depressão'}
                    texto={'A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.'}
                    open={this.openDepressao}
                />
                <Card
                    titulo={'Estresse'}
                    texto={'A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.'}
                    open={this.openEstresse}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 10,
        alignSelf: 'center',
    }
})
