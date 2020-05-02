import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';
import Lockdown from '../../../assets/images/Lockdown.svg';


export default function Profession({ setValues }) {
  const [wfh, setWfh] = useState('false')
  const [profession, setProfession] = useState("0")

  useEffect(() => {
    setValues({ wfh: +profession })
  }, [profession])

  useEffect(() => {
    setValues({ wfh: wfh === 'true' ? +profession : 0 })
  }, [wfh])

  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Nature of work</Text>
          <Lockdown style={styles.image} width="200" height="120" />
        </View>
        <Text style={styles.textSty}>Are you currently working from home?</Text>
        <View style={styles.agreeContainer}>
          <RadioButton.Group
            onValueChange={setWfh}
            value={wfh}
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
        {wfh === 'true' ?
          <Fragment>
            <Text style={styles.textSty}>What's your profession?</Text>
            <View style={styles.agreeContainer}>
              <RadioButton.Group
                onValueChange={profession => setProfession(profession)}
                value={profession}
              >
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="1" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Doctor or Health personnel</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="2" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Police or any other force</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="3" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Delivery person</Text>
                  </View>
                  <Divider />
                </View>
                <View style={styles.agreeContainer}>
                  <View style={styles.radAlign}>
                    <RadioButton.Android value="4" color="#E03D51" uncheckedColor="#D2D2D2" />
                    <Text style={styles.radTxt}>Others</Text>
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
  },
  image: {
    alignSelf: 'center',
    marginTop: 10
  }
});
