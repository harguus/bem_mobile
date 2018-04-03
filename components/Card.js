import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Card extends Component{

    constructor(props){
        super(props);

        this.sta
    }
    render(){
        return(
            <View style={styles.cardBody}>
                <Text style={styles.h1}>
                    {this.props.titulo}:
                </Text>
                <Text style={styles.texts}>
                    {this.props.texto}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardBody: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },

    texts: {
        color: '#000',
        margin: 10,
    },

    viewVerMais: {
        alignItems: 'flex-end',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    }
})