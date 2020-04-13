import React from "react";
import { Alert } from "react-native";
import { Button } from 'react-native-material-ui'


class Submit extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
        <Button raised primary
        text="Submit"
        onPress={()  => Alert.alert('Submit Button pressed')}
        style={{container: {width:100,backgroundColor:'#E03D51', marginBottom:'2%'}}}
      />
    );

  }
}

export { Submit };
