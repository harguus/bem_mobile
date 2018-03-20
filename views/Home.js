import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import Card from '../components/Card';
import Sobre from '../components/Sobre';
import SobreTeste from '../components/SobreTeste';

import Logo from '../src/imgs/logo.png';


export default class Home extends Component {

    render(){
        return(
            <ScrollView>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Sobre/>
                <SobreTeste/>
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