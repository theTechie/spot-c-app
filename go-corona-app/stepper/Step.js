import React from "react";
import { Back } from "../buttons/Back";
import { Next } from "../buttons/Next";
import { Submit } from "../buttons/Submit";
import { StyleSheet, View } from 'react-native';
import { style } from "dom-helpers";


class Step extends React.Component {
  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,
      displaySubmit,
      component,
      children
    } = this.props;

    if (isActive === false) return null;

    return (
      <React.Fragment>
        {component ? React.createElement(component) : children}
        <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
        <Back
          isActive={displayPrevious}
          goToPreviousStep={() => this.props.goToPreviousStep()}
        />
        </View>
        <View style={{flex:1, alignContent:'flex-end'}}>
        <Next
          isActive={displayNext}
          goToNextStep={() => this.props.goToNextStep()}
        />
        </View>
        <View style={{flex:1}}>
        <Submit isActive={displaySubmit} />
        </View>


        </View>

      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}
});

export { Step };