import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Picker
} from 'react-native';

export default class Pergunta extends Component{

  constructor(props){
        super(props);

        this.state = {
          pickerSelection: 'default value'
        };

    }

   render() {
      return (
        <View style={styles.corpo}>
          <View style={styles.question}>
            <Text style={styles.labels}>{this.props.titulo}</Text>
            <Picker
              selectedValue={this.state.pickerSelection}
              onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection: itemValue})}>
              <Picker.Item label="Chicken" value="chicken" />
              <Picker.Item label="Eggs" value="eggs" />
            </Picker>
          </View>
        </View>
      )
   }
}

const styles = StyleSheet.create({
  corpo: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
  },
  question:{

  },
  labels: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20
  }
})
