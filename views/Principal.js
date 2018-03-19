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
  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={styles.geral}>
        <View style={styles.top}>

        </View>
        <View style={styles.center}>
            <TextInput
             style={styles.textInput}
             placeholder={"Login"}
             />
            <TextInput
              style={styles.textInput}
              placeholder={"Senha"}
            />
            <Button
              onPress={() => {Actions.formulario()}}
              title="Entrar"
            />
        </View>
        <View style={styles.botton}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral:{
    flex: 1,
  },
  top:{
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput:{
    height: 40,
    width: 200,
  },
  center:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  botton:{
    flex: 1,
    backgroundColor: '#fff',
  },

})
