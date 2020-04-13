import React from "react";
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui'

const Back = ({ goToPreviousStep }) => (
  <Button
    raised
    primary
    text="Back"
    style={{ container: styles.buttonContainer }}
    onPress={() => goToPreviousStep()}
  />
)

export default Back

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    backgroundColor: '#E03D51',
  }
})