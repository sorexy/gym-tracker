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
import SetFourToTwelve from '../components/SetFourToTwelve';
import WeightBox from '../components/WeightBox';

export default class FirstDayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Incline Fly (Warmup)'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Incline DB Press'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Machine Press'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Preacher Curl (Warmup)'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='BB Curl'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Tricep Pressdown (Warmup; rope)'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Overhead Cable Extension'></SetFourToTwelve>
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
