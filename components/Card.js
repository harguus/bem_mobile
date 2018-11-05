import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CrossButtom from '../components/CrossButtom';

export default class Card extends Component{

    constructor(props){
        super(props);
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
                <CrossButtom open={this.props.open}/>
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
        fontSize: 18,
        color: '#000',
        margin: 10,
    }
})
