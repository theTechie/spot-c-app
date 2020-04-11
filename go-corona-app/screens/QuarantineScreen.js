import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { CalendarList } from "react-native-calendars";

export default function QuarantineScreen() {
  const [quarantinedDays,setQuarantinedDays] = React.useState(["2020-04-13","2020-04-14","2020-04-15","2020-04-16","2020-04-17"])
  const CALENDAR = "CALENDAR";
  const DATE_SELECTOR = "DATE_SELECTOR";
  const [currentScreen, setCurrentScreen] = React.useState(CALENDAR);
  const getQuarantineDays = (quarantinedDays) =>{
    let days  ={};
    quarantinedDays.forEach((day) => days[day] = {marked:true})
    return days;
  }
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScreenHeader label="MY CALENDAR" iconName="ios-add" />
      <Divider marginTop={12} />
      <View
        style={{
          marginTop: 32,
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <OptionButton label="Quarantine" onPress={()=>{
          setCurrentScreen(currentScreen === CALENDAR ? DATE_SELECTOR : CALENDAR);
        }}/>
      </View>
      <View style={{ marginTop: 14 }}>
        {currentScreen ===CALENDAR  ? <CalendarList
          pastScrollRange={0}
          futureScrollRange={4}
          current={Date()}
          scrollEnabled={true}
          
          minDate={Date()}
          dayComponent={({ marking, date, state }) => {
            console.log(marking);
            return (
              
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: "#818181",
                  backgroundColor : marking instanceof Array ?"transparent": "#FFCEDF" ,
                  opacity: state === "disabled" ? "0.4" : "1",
                  width: 42,
                  height: 42,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#818181",
                    fontSize: 16
                  }}
                >
                  {state === "disabled" ? "" : date.day}
                </Text>
              </View>
            );
          }}
          markedDates={getQuarantineDays(quarantinedDays)}
        /> : <Text>
          Add Dates
          </Text>}
        
      </View>
    </View>
  );
}




function ScreenHeader({ label, iconName }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>{label}</Text>
      <Ionicons
        name={iconName}
        size={24}
        color="gray"
        style={{ marginLeft: 8 }}
      />
    </View>
  );
}

function Divider({ marginTop }) {
  return (
    <View
      style={{
        backgroundColor: "gray",
        height: 1,
        marginTop: marginTop,
      }}
    />
  );
}

function OptionButton({ label, onPress, backgroundColor }) {
  return (
    <RectButton style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{label}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer: {
    paddingTop: 15,
  },
  text: {
    fontSize: 18,
    height: "100%",
    alignContent: "center",
    color: "#1C1C1C",
    fontWeight: "bold",
    marginTop: 1,
  },

  buttonStyle: {
    backgroundColor: "#FFCEDF",
    borderColor: "#909090",
    borderWidth: 1,
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 150,
  },

  buttonTextStyle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  },
});