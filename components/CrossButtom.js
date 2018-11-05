import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class CrossButtom extends Component {
  render() {
    return(
      <View style={styles.viewVerMais}>
        <TouchableOpacity
          style={styles.cruz}
          onPress={this.props.open}
          >
          <Text style={{fontSize: 18, color: '#fff'}}>Mais...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cruz:{
    backgroundColor: '#3C9DFF',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 4,
  },
  viewVerMais: {
      alignItems: 'flex-end',
      height: 50,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 6
  }
})
