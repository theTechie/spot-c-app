import React from "react";
import { Button } from "react-native";


class Back extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
        
        <Button
        title="Previous"
        onPress={()  => this.props.goToPreviousStep()}
      />
    );
  }
}

export { Back };
