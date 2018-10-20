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
                        <SobreTeste />
                        <Transtorno />
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
        borderLeftColor: '#c3c3c3',
        borderLeftWidth: 1,
        borderRightColor: '#c3c3c3',
        borderRightWidth: 1
    },
    main: { paddingLeft: 0 },
}