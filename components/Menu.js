import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default props => (
    <View>           
        <TouchableOpacity
        style={styles.menu}
            onPress={() => {Actions.home()}}
        >
            <Text style={styles.menuTite}>Home</Text>            
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.menu}
            onPress={() => { Actions.passoAPasso()}}
        >
            <Text style={styles.menuTite}>Questionário</Text>            
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.menu}
            onPress={() => true}
        >
            <Text style={styles.menuTite}>Sobre nós</Text>            
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.menu}
            onPress={() => {Actions.transtornos()}}
        >
            <Text style={styles.menuTite}>Transtornos</Text>            
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        padding: 10,
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 1,
    },
    menuTite: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})