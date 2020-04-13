import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import StepList from '../../../components/stepper/StepList';
import Step from '../../../components/stepper/Step';
import Introduction from './Introduction';
import Terms from './Terms';

export default function IntersectionScreen() {
  return (
    <View style={styles.container}>
      <StepList>
        <Step component={Introduction} />
        <Step component={Terms} />
      </StepList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start'
  },
});