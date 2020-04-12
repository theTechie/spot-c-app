import React from "react";
import { Back } from "../buttons/Back";
import { Next } from "../buttons/Next";
import { Submit } from "../buttons/Submit";



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
        <Back
          isActive={displayPrevious}
          goToPreviousStep={() => this.props.goToPreviousStep()}
        />
        <Next
          isActive={displayNext}
          goToNextStep={() => this.props.goToNextStep()}
        />
        <Submit isActive={displaySubmit} />
      </React.Fragment>
    );
  }
}

export { Step };