import React from "react";
import { Button } from "react-native";

class Next extends React.Component {
  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
        <Button
        title="Next"
        onPress={()  => this.props.goToNextStep()}
      />
    );
  }
}

export { Next };
