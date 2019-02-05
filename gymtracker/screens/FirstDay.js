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
import SetBox from '../components/setbox';
import Set1 from '../components/set1';

import { MonoText } from '../components/StyledText';

export default class FirstDayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <View style={styles.topView}>
              <Set1 exerciseName='Incline Fly (Warmup)'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='Incline DB Press'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='Machine Press'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='Preacher Curl (Warmup)'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='BB Curl'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='Tricep Pressdown (Warmup; rope)'></Set1>
          </View>
          <View style={styles.hairline} />
          <View style={styles.topView}>
              <Set1 exerciseName='Overhead Cable Extension'></Set1>
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
