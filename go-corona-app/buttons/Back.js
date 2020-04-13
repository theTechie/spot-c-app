import React from "react";
import { Button } from 'react-native-material-ui'


class Back extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <Button  raised primary onPress={() => this.props.goToPreviousStep()} text="Back"  style={{container: {width:100,backgroundColor:'#E03D51', marginBottom:'2%', marginRight:80}}}/>
    );
  }
}

export { Back };
