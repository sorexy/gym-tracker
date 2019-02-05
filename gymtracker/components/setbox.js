import React from 'react';
import { Alert, Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// number of reps to do

export default class SetBox extends React.Component {
  constructor(props) {
      super(props);
      this.counter = 0;
      this.state = {buttonPressStatus: styles.buttonContainerNotPressed}
  }

  handleTap = () => {
      this.counter += 1;
      if (this.counter == 1) {
        this.setState({buttonPressStatus: styles.buttonContainerPressed});
      } else {
        this.setState({buttonPressStatus: styles.buttonContainerPressedTwice})
      }
  }

  render() {
    return (
        <View>
            <TouchableOpacity
                style={ this.state.buttonPressStatus }
                onPress={this.handleTap}
                >
                <Text style={styles.text}>
                    {this.props.exerciseValue}
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: '600', color: 'white'},
  buttonContainerNotPressed: { backgroundColor: "green", alignItems: "center", paddingVertical: 13, paddingHorizontal: 12 },
  buttonContainerPressed: { backgroundColor: "orange", alignItems: "center", paddingVertical: 13, paddingHorizontal: 12 },
  buttonContainerPressedTwice: { backgroundColor: "black", alignItems: "center", paddingVertical: 13, paddingHorizontal: 12 }
});
