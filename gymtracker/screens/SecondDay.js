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

export default class FirstDayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Leg Extension (Warmup)'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Leg Curl (Warmup)'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Practice Squats'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Leg Extensions'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Leg Curls'></SetFourToTwelve>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <SetFourToTwelve exerciseName='Abs Vacuums and Planks'></SetFourToTwelve>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    topView: {flexDirection: "row", flex: 0.16, alignItems: 'center', justifyContent: 'space-between',
              backgroundColor: 'yellow', paddingHorizontal: 30, marginTop: 10 },
    hairline: { backgroundColor: 'black',
                height: 2,
                width: 500},

});
