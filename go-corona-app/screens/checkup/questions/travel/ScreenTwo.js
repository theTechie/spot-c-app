import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import TravelScreenTwoFeature from "../../../../assets/images/TravelScreenTwoFeature.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input } from "react-native-elements";

export default function TravelScreenTwo() {
  return (
    <ScrollView style={styles.containerStyle}>
      <View style={{flexDirection:"column"}}>
        <Text style={styles.headerQuestTextStyle}>
          What about domestic travel ?
        </Text>
        <TravelScreenTwoFeature
          width="250"
          height="250"
          style={{ alignSelf: "center", marginTop: 10 }}
        />
        <Text style={styles.subQuestionTextStyle}>
        Have you travelled anywhere inside India by flight 
        in the last 30 days?
        </Text>
        <Divider/>
        <RadioButton value="Yes" label="Yes"/>
        <Divider/>
        <RadioButton value="No" label="No"/>
        <Divider/>

        <Text style={styles.subQuestionStyle}>
            If yes, then select the airports you were at
        </Text>
        <Divider/>
        <Input
            label="From"
        />
        <Divider/>
        <Input
            label="To"
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
