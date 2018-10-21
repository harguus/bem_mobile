import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';

import Card from '../components/Card';
import Sobre from '../components/Sobre';
import SobreTeste from '../components/SobreTeste';
import Transtorno from '../components/Transtorno';
import Menu from '../components/Menu';

import Logo from '../src/imgs/logo.png';
import btMenu from '../src/imgs/menu.png';


export default class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            menu: true
        }
    }

    render(){
        return(
            <Drawer
                type="overlay"
                content={<Menu/>}
                ref={(ref) => this.menu = ref}
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
            >
                <View style={{flex: 1}}>
                    <View style={{ backgroundColor: '#94D1EA', flexDirection: 'row'}}>
                        <View style={{flex: 1, padding: 10}}>
                            <TouchableOpacity
                                onPress={() => this.menu.open()}
                                >
                                <Image
                                    style={{width: 35, height: 35}}
                                    source={btMenu}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, paddingTop: 10, marginLeft: 5}}>
                            <Image
                                style={{height: 35, width: 100}}
                                source={Logo}
                            />
                        </View>
                    </View>
                    <ScrollView style={{ marginBottom: 5 }}>
                        <Sobre />
                        <View style={{alignContent: 'center',}}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#337ab7',
                                    padding: 10,
                                    margin: 10,
                                    borderRadius: 5,
                                }}
                                onPress={() => { Actions.passoAPasso() }}
                            >
                                <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Responder Questionário</Text>
                            </TouchableOpacity>
                        </View>
                        <Card
                            titulo="Depressão"
                            texto="Depressão é um estado depressivo de humor, caracterizado por aversão à atividade,que pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.As pessoas deprimidas podem sentir-se tristes, ansiosas, vazias, desesperadas..."
                            open={() => { Actions.depressao() }}
                        />
                        <Card
                            titulo="Ansiedade"
                            texto="Ansiedade, ânsia ou nervosismo é uma característica biológica do ser humano e animais, que antecede momentos de perigo real ou imaginário,marcada por sensações corporais desagradáveis, tais como uma sensação de vazio no estômago, coração batendo.."
                            open={() => { Actions.ansiedade() }}
                        />
                        <Card
                            titulo="Estresse"
                            texto="O termo estresse, agaste ou consumição, foi usado por Selye (1976) com um sentido neutro - nem positivo nem negativo. Ele o definiu comoreação não específica do corpo a qualquer tipo de exigência ou falta de esportes físicos. A partir dessa definição..."
                            open={() => { Actions.estresse() }}
                        />
                    </ScrollView>
                </View>
                
            </Drawer>
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

const drawerStyles = {
    drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        padding: 10,
        backgroundColor: '#fff',
    },
    main: { paddingLeft: 0 },
}