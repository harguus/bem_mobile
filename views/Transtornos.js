import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import Card from '../components/Card';

export default class Home extends Component {

    render(){
        return(
            <ScrollView>
                <Card
                    titulo={'Depressão'}
                    texto={'A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.'}
                />
                <Card
                    titulo={'Transtorno Bipolar'}
                    texto={'A nível organizacional, o julgamento imparcial das eventualidades prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.'}
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