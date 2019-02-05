import React from 'react';
import { Alert, Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SetBox from './setbox';

export default class Set1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{this.props.exerciseName}</Text>
        </View>
        <View style={styles.boxView}>
          <SetBox exerciseValue='6*12'></SetBox>
          <SetBox exerciseValue='10*5'></SetBox>
          <SetBox exerciseValue='4*8'></SetBox>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxView: {flexDirection:'row', justifyContent: 'space-between',
            alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15},

  text: { alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: '700', color: 'black'},
});
