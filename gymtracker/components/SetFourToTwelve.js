import React from 'react';
import { Alert, Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RepBox from './RepBox';

export default class SetFourToTwelve extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{this.props.exerciseName}</Text>
        </View>
        <View style={styles.boxView}>
          <RepBox exerciseValue='6*12'></RepBox>
          <RepBox exerciseValue='10*5'></RepBox>
          <RepBox exerciseValue='4*8'></RepBox>
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
