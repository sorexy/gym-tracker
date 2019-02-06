import React from 'react';
import { TextInput, Alert, Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class WeightBox extends React.Component {
  render() {
    return (
      <View>
        <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            returnKeyType='done'
            maxLength={4}
            textAlign={'center'}
            placeholder="Light"
        />
        <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            returnKeyType='done'
            maxLength={4}
            textAlign={'center'}
            placeholder="Heavy"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxView: {flexDirection:'row', justifyContent: 'space-between',
            alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15},

  text: { alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: '700', color: 'black'},
  textInput: {width: 65,
              height: 23,
              fontSize: 12,
              alignItems: "flex-start",
              padding: 1,
              marginTop: 1,
              borderColor: '#D3D3D3',
              borderWidth: 1,
              backgroundColor: "#F8F8FF"}
});
