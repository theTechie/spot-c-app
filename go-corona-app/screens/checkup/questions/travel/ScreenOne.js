import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  ScrollView,
  RectButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
import TravelScreenOneFeature from "../../../../assets/images/TravelScreenOneFeature.svg";
import { RadioButton, Divider } from "react-native-material-ui";
import { Input } from "react-native-elements";
import Http from "../../../../services/Http";
import Autocomplete from "react-native-autocomplete-input";
import Axios from "axios";
import { Ionicons } from "@expo/vector-icons";

export default function TravelScreenOne(props) {
  const [yesChecked, setYesChecked] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [addedCountries, setAddedCountries] = React.useState([]);

  const onSearchCountries = (text) => {
    Axios.get(
      "https://restcountries.eu/rest/v2/name/" + text.replace(/\s/g, "%20")
    ).then((response) => {
      var results = [];
      console.log(response);
      response.data.forEach(({ name }) => results.push(name));
      console.log(results);
      setSearchResults(results);
    })
    .catch((error)=>{
        // TODO 
    });
  };

  const onAddCountryClicked = (data) => {
    var countries = [];
    addedCountries.forEach((a) => countries.push(a));
    countries.push(data);
    setAddedCountries(countries);
  };

  const onRemoveClicked=(index)=>{
    var addedCounts = []
    addedCountries.forEach((v,i)=>{
        if(i!=index){
            addedCounts.push(v)
        }
    });
    setAddedCountries(addedCounts);
  }
  return (
    <ScrollView style={styles.containerStyle}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.headerQuestTextStyle}>
          Have you travelled anywhere abroad in the last 20 days?
        </Text>
        <TravelScreenOneFeature
          width="340"
          height="100"
          style={{ alignSelf: "center", marginTop: 10 }}
        />
        <Text style={styles.subQuestionStyle}>
          Or even arrived in India recently in the last 20 days?
        </Text>
        <View style={{ marginTop: 20 }}>
          <Divider />
        </View>

        <View style={styles.radioButtonStyle}>
          <RadioButton
            value="Yes"
            label="Yes"
            onSelect={() => {
              setYesChecked(true);
            }}
            checked={yesChecked}
          />
        </View>

        <Divider />

        <View style={styles.radioButtonStyle}>
          <RadioButton
            value="No"
            label="No"
            onSelect={() => {
              setYesChecked(false);
            }}
            checked={!yesChecked}
          />
        </View>

        <Divider />

        <View style={{ opacity: yesChecked ? 1 : 0, paddingBottom: 200 }}>
          <Text style={styles.subQuestionStyle}>
            If yes, then select the countries you visited before coming to India
          </Text>
          <View style={styles.radioButtonStyle}>
            <Divider />
          </View>
          <Autocomplete
            label="Search Country"
            data={searchResults}
            defaultValue={selectedCountry}
            containerStyle={{ paddingLeft: 20, paddingRight: 20 }}
            onChangeText={(text) => {
              setSelectedCountry(text);
              onSearchCountries(text);
            }}
            renderItem={({ item, i }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCountry(item);
                    setSearchResults([]);
                  }}
                  style={{ padding: 8 }}
                >
                  <Text style={{ fontSize: 14 }}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <Divider />
          <RectButton
            style={{
              width: 112,
              height: 36,
              backgroundColor: "#A9E7CB",
              borderColor: "#909090",
              borderWidth: 1,
              borderRadius: 8,
              marginTop: 32,
              marginLeft: "5%",
              justifyContent: "center",
            }}
            onPress={() => {
              onAddCountryClicked(selectedCountry);
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#989898",
              }}
            >
              ADD
            </Text>
          </RectButton>

          {addedCountries.map((country,index) => {
            return <View style={{ flexDirection: "row" ,paddingLeft:20 , paddingTop:16 , paddingRight:20,justifyContent:"space-between"}}>
              <Text style={{fontSize:16}}>{country}</Text>
              <TouchableOpacity onPress={()=>{onRemoveClicked(index)}}>
                <Ionicons name="md-close" size={20} />
              </TouchableOpacity>
              
            </View>
            ;
          })}
        </View>
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

  subQuestionStyle: {
    fontSize: 14,
    marginTop: 40,
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 20,
  },

  radioButtonStyle: {
    paddingLeft: 20,
  },
});
