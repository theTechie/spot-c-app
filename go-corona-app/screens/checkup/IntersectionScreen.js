import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const questionnaireImage = require('../../assets/images/robot-prod.png')


export default function IntersectionScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={questionnaireImage} />
      <View style={styles.introduction}>
      <Text style={styles.title}>Hello!</Text>
      </View>
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
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
  },
  introduction: {
    margin: 40,
  }
});
