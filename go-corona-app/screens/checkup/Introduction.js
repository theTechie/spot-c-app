import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import CheckupIntroductionImage from '../../assets/images/CheckupIntroduction.svg'
import  { StepList } from '../../stepper/StepList';
import { Step }  from '../../stepper/Step';
import CheckupTerms from './Terms';

const PageOne = () => (
  <ScrollView>
  <View>
    <CheckupIntroductionImage style={styles.image} width="200" height="200" />
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
 
 const PageTwo = () => (
   <View><Text>We have a second page.</Text></View>
    
  )
 
  const PageThree = () => (
   <View><Text>We have a third page.</Text></View>
    
  )

export default function CheckupIntroduction() {
  return (
   
      <View style={styles.container}>
          <StepList>
          <Step component={PageOne} />
          <Step component={CheckupTerms} />
          <Step component={PageThree} />
          </StepList>
        </View>
      
    
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start'
  },
  image: {
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "center"
  },
  introduction: {
    margin: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 30
  }
});
