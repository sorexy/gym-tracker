import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SetEightToTwentyFour from '../components/SetEightToTwentyFour';

export default class FirstDayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Lat Pulldown (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Rack Pull 4x20'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Seated Row'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Dumbbell Row Lateral Raise (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Overhead DB Press'></SetEightToTwentyFour>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    topView: {flexDirection: "row", flex: 0.2, alignItems: 'center', justifyContent: 'space-between',
              backgroundColor: 'yellow', paddingHorizontal: 30, marginTop: 10 },
    hairline: { backgroundColor: 'black',
                height: 2,
                width: 500 },

});
