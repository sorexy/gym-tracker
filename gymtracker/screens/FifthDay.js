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
              <SetEightToTwentyFour exerciseName='Leg Extension (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Leg Curl (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Volume Squat 4x20'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Leg Extensions'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Leg Curls'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Abs Rollers'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Lying Vacuum'></SetEightToTwentyFour>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    topView: {flexDirection: "row", flex: 0.14, alignItems: 'center', justifyContent: 'space-between',
              backgroundColor: 'yellow', paddingHorizontal: 30, marginTop: 10 },
    hairline: { backgroundColor: 'black',
                height: 2,
                width: 500 },

});
