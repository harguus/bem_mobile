import React from 'react';
import{
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default props => (
  <View style={styles.master}>
    <View style={styles.top}>
    </View>
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
    <View style={styles.botton}>
    </View>
  </View>
)

const styles = StyleSheet.create({
  master: {
    flex: 1
  },
  top: {
    flex: 2
  },
  center: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  botton: {
    flex: 2
  },
})
