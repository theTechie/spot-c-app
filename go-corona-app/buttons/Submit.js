import React from "react";
import { Button, Alert } from "react-native";

class Submit extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (

        <Button
        title="Submit"
        onPress={()  => Alert.alert('Submit Button pressed')}
      />
    );

  }
}

export { Submit };
