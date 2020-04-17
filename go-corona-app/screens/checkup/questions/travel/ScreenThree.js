import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import TravelScreenThreeFeature from "../../../../assets/images/TravelScreenOneFeature.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input, CheckBox } from "react-native-elements";

export default function TravelScreenThree() {
  return (
    <ScrollView style={styles.containerStyle}>
      <View style={{flexDirection:"column"}}>
        <Text style={styles.headerQuestTextStyle}>
            Stranded due to the lockdown?
        </Text>
        <TravelScreenThreeFeature
          width="340"
          height="100"
          style={{ alignSelf: "center", marginTop: 10 }}
        />
        <Text style={styles.subQuestionTextStyle}>
        Which city are you from and where are you staying now?
        </Text>
        <Divider/>
        <Input value="Hometown" />
        <Divider/>
        <Input value="Current location" />
        <Divider/>

        <Text style={styles.subQuestionStyle}>
        What modes of transport have you used for commute in the last 30 days?
        </Text>
        <Divider/>
        <CheckBox
            label="Local train or Bus"
        />
        <Divider/>
        <Divider/>
        <CheckBox
            label="Auto Rickshaw or Cab"
        />
        <Divider/>
        <Divider/>
        <CheckBox
            label="Personal Vehicle"
        />
        <Divider/>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    // padding:"9%"
  },

  headerQuestTextStyle: {
    fontWeight: "bold",
    padding: "9%",
  },

  subQuestionStyle:{
      fontSize:14,
      marginTop:20,
      textAlign: "center"
  }
});
