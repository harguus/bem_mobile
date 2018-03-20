import React, {Component} from 'react';
import{
  Text,
  Image,
  Button,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Principal extends Component {
  render(){
    return(
      <View style={styles.geral}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
      flex: 1,
      backgroundColor: '#fff'
  }

})
