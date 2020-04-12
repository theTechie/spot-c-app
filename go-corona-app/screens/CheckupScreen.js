import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Separator from '../components/Separator';
const questionnaireImage = require('../assets/images/robot-prod.png')

export default function CheckupScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CheckupType
        title="AI based symptoms check for COVID-19"
        image={questionnaireImage}
        buttonTitle="Start questionnaire"
        onPress={() => navigation.navigate('QuestionnaireScreen')}
      />
      <Separator />
      <CheckupType
        title="Know if you have met a COVID +ve person"
        image={questionnaireImage}
        buttonTitle="Open intersection calculator"
        onPress={() => navigation.navigate('IntersectionScreen')}
      />
    </View>
  );
}

function CheckupType({ title, image, buttonTitle, onPress }) {
  return (
    <View style={styles.checkupTypeContainer}>
      <Text style={styles.checkupTypeTitle}>{title}</Text>
      <Image style={styles.checkupTypeImage} source={image} />
      <CustomButton label={buttonTitle} backgroundColor="#e4dfdf" onPress={onPress} />
    </View>
  )
}

function CustomButton({ label, backgroundColor, onPress }) {
  return (
    <RectButton style={[styles.option, {backgroundColor}]} onPress={onPress}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'space-evenly',
  },
  checkupTypeContainer: {
    alignItems: 'center'
  },
  checkupTypeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkupTypeImage: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 15,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
