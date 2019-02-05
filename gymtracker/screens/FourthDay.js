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
              <SetEightToTwentyFour exerciseName='Incline Fly (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Incline DB Press'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Machine Press'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Preacher Curl (Warmup)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='BB Curl'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Tricep Pressdown (Warmup; rope)'></SetEightToTwentyFour>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetEightToTwentyFour exerciseName='Overhead Cable Extension'></SetEightToTwentyFour>
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
