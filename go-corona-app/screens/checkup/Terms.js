import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import TermsImage from '../../assets/images/IntersectionTerms.svg'
import ProgressBarContainer from '../../components/ProgressBar';
import { CheckBox } from 'react-native-elements'

export default function CheckupTerms({onAgree}) {
  const [agree, setAgree] = useState(false)
  const text = "Introduction"
  const pageNo = 2;

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProgressBarContainer textOnTop={text} currPage={pageNo} totalPages={4} />
        <TermsImage style={styles.image} width="200" height="200" />
        <View style={styles.introduction}>
          <Text style={styles.title}>Terms of Service</Text>
          <Text style={styles.description}>
            Before using checkup, please read Terms of Service.
            Remember that: {'\n\n'}
          - <Text style={styles.boldText}>Checkup is not a diagnosis</Text> Checkup is for informational purposes and is not qualified for medical opinion{'\n'}
          - <Text style={styles.boldText}>Do not use in emergencies</Text> In case of health emergency, call your local emergency number immediately{'\n'}
          </Text>
        </View>
        <View style={styles.agreeContainer}>
          <CheckBox containerStyle={{ borderWidth: 0 }} title="I read and accept the Terms of Service and Privacy Policy" value="agree" checked={agree} onPress={() => setAgree(!agree)} />
        </View>
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
    justifyContent: 'flex-start'
  },
  image: {
    marginTop: 10,
    marginBottom: 15,
    alignSelf: "center"
  },
  introduction: {
    margin: 30,
    marginBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
  },
  boldText: {
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 25
  },
  agreeContainer: {
    marginLeft: 10,
    marginRight: 10
  }
});