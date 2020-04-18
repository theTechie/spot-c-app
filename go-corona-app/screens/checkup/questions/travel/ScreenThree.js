import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import TravelScreenThreeFeature from "../../../../assets/images/TravelScreenThreeFeature.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input, CheckBox } from "react-native-elements";
import Autocomplete from "react-native-autocomplete-input";

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
        <Text style={styles.subQuestionStyle}>
        Which city are you from and where are you staying now?
        </Text>
        <View style={{paddingTop:20}}>
        <Divider/>
        </View>
        
        <View style={{paddingLeft:20,paddingRight:20}}>
        <Autocomplete placeholder="Hometown" />
        </View>
        
        <Divider/>
        <View style={{paddingLeft:20,paddingRight:20,paddingTop:10}}>
        <Autocomplete placeholder="Current location" />
        </View>
        <Divider/>

        <Text style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        What modes of transport have you used for commute in the last 30 days?
        </Text>
        <Divider/>
        <CheckBox
            title="Local train or Bus"
        />
        <Divider/>
        <Divider/>
        <CheckBox
            title="Auto Rickshaw or Cab"
        />
        <Divider/>
        <Divider/>
        <CheckBox
            title="Personal Vehicle"
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
