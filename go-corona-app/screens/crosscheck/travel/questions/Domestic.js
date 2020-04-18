import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import DomesticTravelImage from "../../../../assets/images/DomesticTravel.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input } from "react-native-elements";
import Autocomplete from "react-native-autocomplete-input";

export default function Domestic() {
  const [yesSelected, setYesSelected] = React.useState(false)

  return (
    <ScrollView style={styles.containerStyle}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.headerQuestTextStyle}>
          What about domestic travel ?
        </Text>
        <DomesticTravelImage
          width="250"
          height="200"
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.subQuestionStyle}>
          Have you travelled anywhere inside India by flight
          in the last 30 days?
        </Text>
        <View style={{ marginTop: 14 }}>
          <Divider />
        </View>

        <View>
          <RadioButton
            value="No" label="No" checked={!yesSelected} onSelect={() => { setYesSelected(false) }}
          />
        </View>
        <Divider />
        <View>
          <RadioButton
            value="Yes" label="Yes" checked={yesSelected} onSelect={() => { setYesSelected(true) }}
          />
        </View>

        <Divider />

        <View>
          <Text style={styles.subQuestionStyle}>
            If yes, then select the airports you were at
        </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Autocomplete
            placeholder="From"
          />
        </View>
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Autocomplete
            placeholder="To"
            label="To"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: "5%",
    paddingRight: "5%"
  },

  headerQuestTextStyle: {
    fontWeight: "bold",
    padding: "5%",
  },

  subQuestionStyle: {
    fontSize: 14,
    margin: 20,
    textAlign: "center"
  },

  radioButtonStyle: {
    paddingLeft: 20,
  },
});
