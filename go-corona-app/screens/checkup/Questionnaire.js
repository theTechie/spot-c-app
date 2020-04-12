import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import  { StepList } from '../stepper/StepList';
import { Step }  from '../stepper/Step';

const PageOne = () => (
 <View><Text>We have a first page.</Text></View>
  
)

const PageTwo = () => (
  <View><Text>We have a second page.</Text></View>
   
 )

 const PageThree = () => (
  <View><Text>We have a third page.</Text></View>
   
 )

export default function CheckupQuestionnaire() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View>
       <StepList>
       <Step component={PageOne} />
       <Step component={PageTwo} />
       <Step component={PageThree} />
       </StepList>
      </View>
  </ScrollView>
    
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
  },
  contentContainer: {
    paddingTop: 15,
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
  },
});
