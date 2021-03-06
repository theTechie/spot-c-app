import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import ProgressBarContainer from '../../components/ProgressBar'
import CheckupIntroductionImage from '../../assets/images/CheckupIntroduction.svg'

export default function Introduction() {
  return (
    <ScrollView>
      <View>
        <CheckupIntroductionImage style={styles.image} width="160" height="160" />
        <View style={styles.introduction}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.description}>
            You are about to use a short (3min), safe and anonymous health checkup.
            Your answers will be carefully analyzed and you will learn about possible causes of your symptoms.
            You are adviced not to rush to the hospital if you have mild symptoms.
            This is only to help you self-quarantine/isolate yourself from others based on how long you have had these symptoms for.
        </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start',
    height: "80%"
  },
  image: {
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "center"
  },
  introduction: {
    margin: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
  },
  description: {
    fontSize: 13,
    marginTop: 10,
    lineHeight: 30
  }
});
