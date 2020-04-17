import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import TravelScreenTwoFeature from "../../../../assets/images/TravelScreenTwoFeature.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input } from "react-native-elements";
import Autocomplete from "react-native-autocomplete-input";

export default function TravelScreenTwo() {

    const [yesSelected,setYesSelected] = React.useState(false)
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
        <Text style={styles.subQuestionStyle}>
        Have you travelled anywhere inside India by flight 
        in the last 30 days?
        </Text>
        <View style={{marginTop:14}}>
        <Divider/>
        </View>
        
        <View style={{paddingLeft:20}}>
        
        <RadioButton 
        
        value="Yes" label="Yes" checked={yesSelected} onSelect={()=>{setYesSelected(true)}}/>
        </View>
        <Divider/>
        <View style={{paddingLeft:20}}>
        <RadioButton 
        style={{paddingLeft:20}}
        value="No" label="No" checked={!yesSelected} onSelect={()=>{setYesSelected(false)}}/>
        </View>
        <Divider/>
        <View style={{paddingLeft:20}}>

        <Text style={styles.subQuestionStyle}>
            If yes, then select the airports you were at
        </Text>
        </View>
        <Divider/>
        <View style={{paddingLeft:20,paddingRight:20,marginTop:10}}>

        <Autocomplete
            placeholder="From"

        />
        </View>
        <Divider/>
        <View style={{paddingLeft:20,paddingRight:20,marginTop:10}}>

        <Autocomplete
            placeholder="To"
            label="To"
        />
        </View>
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
