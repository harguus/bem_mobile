import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import Card from '../components/Card';
import Sobre from '../components/Sobre';
import SobreTeste from '../components/SobreTeste';
import Transtorno from '../components/Transtorno';

import Logo from '../src/imgs/logo.png';


export default class Home extends Component {

    render(){
        return(
            <ScrollView style={{marginBottom: 5}}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Sobre/>
                <SobreTeste/>
                <Transtorno/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 10,
        width: 200,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 15
    }
})
