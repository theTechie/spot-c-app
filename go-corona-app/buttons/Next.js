import React from "react";
import { Button } from 'react-native-material-ui'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class Next extends React.Component {
  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
        <Button raised primary onPress={() => this.props.goToNextStep()} text="Next" style={{container: {width:100,backgroundColor:'#E03D51', marginBottom:'2%', paddingBottom:'10%',  }}}/>
    );
  }
}

export { Next };
