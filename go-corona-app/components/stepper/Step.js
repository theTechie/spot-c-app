import React from "react";
import { StyleSheet, View, Alert } from 'react-native';

import Back from "./buttons/Back";
import Next from "./buttons/Next";
import Submit from "./buttons/Submit";

export default class Step extends React.Component {
  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,
      displaySubmit,
      component,
      children,
      goToPreviousStep,
      goToNextStep
    } = this.props;

    if (isActive === false) return null;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {component ? React.createElement(component) : children}
        </View>
        <View style={styles.navigation}>
          <View style={styles.back}>
            {displayPrevious ? <Back
              isActive={displayPrevious}
              goToPreviousStep={() => goToPreviousStep()}
            /> : null}
          </View>
          {displayNext ? <View style={styles.next}>
            <Next
              goToNextStep={() => goToNextStep()}
            />
          </View> : null}
          {displaySubmit ? <View>
            <Submit onSubmit={() => Alert.alert('Submit Button pressed')} />
          </View> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  content: {
    height: '80%',
  },
  navigation: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  back: {
  },
  next: {
  }
});