import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import TermsImage from '../../../assets/images/IntersectionTerms.svg';



export default function SymptomCough({ setValues }) {
  const [cough, setCough] = useState('false');
  const [coughType, setCoughType] = useState("0")

  useEffect(() => {
    setValues({ cough: cough === 'true' ? +coughType : 0})
  }, [cough])

  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Please tell us about your symptoms</Text>
          <TermsImage style={styles.image} width="120" height="120" />
        </View>
        <Text style={styles.textSty}>Do you have cough?</Text>
        <View style={styles.agreeContainer}>
          <RadioButton.Group
            onValueChange={value => setCough(value)}
            value={cough}
          >
            <View style={styles.agreeContainer}>
              <Divider />
              <View style={styles.radAlign}>
                <RadioButton.Android value="false" color="#E03D51" uncheckedColor="#D2D2D2" />
                <Text style={styles.radTxt}>No</Text>
              </View>
              <Divider />
            </View>
            <View style={styles.agreeContainer}>
              <View style={styles.radAlign}>
                <RadioButton.Android value="true" color="#E03D51" uncheckedColor="#D2D2D2" />
                <Text style={styles.radTxt}>Yes</Text>
              </View>
              <Divider />
            </View>
          </RadioButton.Group>
        </View>
        {cough === 'true' ?
          <Fragment>
            <Text style={styles.textSty}>Can you describe your cough?</Text>
            <View style={styles.agreeContainer}>
              <RadioButton.Group
                onValueChange={coughType => setCoughType(coughType)}
                value={coughType}
              >
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="1" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Dry cough</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="2" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Cough with sputum</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="3" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Cough with chest pain</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="4" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Cough with abdominal pain</Text>
                  </View>
                  <Divider />
                </View>
              </RadioButton.Group>
            </View>
          </Fragment> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start'
  },
  container: {
    justifyContent: 'center'
  },
  contStyle: {
    borderWidth: 0
  },
  sectionContainer: {
    marginTop: 40,
    marginBottom: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 25
  },
  helpLinks: {
    marginTop: 30,
    padding: 5,
    width: "90%"
  },
  subTitle: {
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  agreeContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column'
  },
  txtStyle: {
    fontWeight: 'normal'
  },
  textSty: {
    marginLeft: 24,
    marginBottom: 20,
    marginTop: 40
  },
  radAlign: {
    flexDirection: 'row'
  },
  radTxt: {
    marginTop: 8
  }
});
