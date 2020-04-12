import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { CalendarList } from "react-native-calendars";

export default function QuarantineScreen() {
  const [quarantinedDays, setQuarantinedDays] = React.useState([
    "2020-04-13",
    "2020-04-14",
    "2020-04-15",
    "2020-04-16",
    "2020-04-17",
  ]);
  const [selectedDays, setSelectedDays] = React.useState([
    { start: "2020-04-12", end: "2020-04-19" },
    { start: "2020-04-12", end: "2020-04-19" },
  ]);
  const CALENDAR = "CALENDAR";
  const DATE_SELECTOR = "DATE_SELECTOR";
  const [currentScreen, setCurrentScreen] = React.useState(CALENDAR);
  const getQuarantineDays = (quarantinedDays) => {
    let days = {};
    quarantinedDays.forEach((day) => (days[day] = { marked: true }));
    return days;
  };
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScreenHeader
        label="MY CALENDAR"
        iconName="md-add"
        onClick={() => {
          setCurrentScreen(
            currentScreen === CALENDAR ? DATE_SELECTOR : CALENDAR
          );
        }}
      />
      <Divider marginTop={12} />
      <View
        style={{
          marginTop: 32,
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <OptionButton label="Quarantine" />
      </View>
      <View style={{ marginTop: 14 }}>
        {currentScreen === CALENDAR ? (
          <CalendarList
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
                    backgroundColor:
                      marking instanceof Array ? "transparent" : "#FFCEDF",
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
                      fontSize: 16,
                    }}
                  >
                    {date.day}
                  </Text>
                </View>
              );
            }}
            markedDates={getQuarantineDays(quarantinedDays)}
          />
        ) : (
          <AddQuarantineDates selected={selectedDays} />
        )}
      </View>
    </View>
  );
}

function ChooseStartAndEndDate({ type, date, month }) {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={styles.chooseYourDateTextStyle}>
        {"Choose your " + type + " date"}
      </Text>
      <Divider marginTop={8} />
      <View marginTop={12} paddingLeft={"5%"} style={{ flexDirection: "row" }}>
        <DateChip number={date} />
        <DateChip marginLeft={12} number={month} />
      </View>
    </View>
  );
}

function DateChip({ number, marginLeft }) {
  return (
    <View
      style={{
        height: 36,
        backgroundColor: "#E9E9E9",
        borderRadius: 8,
        width: 48,
        justifyContent: "center",
        marginLeft: marginLeft,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
        {number}
      </Text>
    </View>
  );
}

function AddQuarantineDates({ selected }) {
  return (
    <View style={styles.addQuarantineDatesContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 16, padding: "5%" }}>
        When in doubt, Self-Quarantine
      </Text>
      <View style={{height:"100%"}}>
      <ScrollView style={{height:"90%"}}>
        {selected.map(({ start, end }) => {
          return (
            <View>
              <ChooseStartAndEndDate
                type="start"
                month={start.split("-")[1]}
                date={start.split("-")[2]}
              />
              <ChooseStartAndEndDate
                type="end"
                month={end.split("-")[1]}
                date={end.split("-")[2]}
              />
              <DeleteButton item={{ start: start, end: end }} />
            </View>
          );
        })}
      </ScrollView>
        <View style={{height:"10%"}}>
          <Divider/>
          <View style={{padding:"2%" , justifyContent:"space-between"}}>
            <Text style={{color:"blue",fontSize:16}}>
              {"< Back"}
            </Text>
          </View>
          <Divider/>
        </View>
      </View>
     
    </View>
  );
}

function DeleteButton({ item }) {
  return (
    <RectButton
      style={{
        width: 112,
        height: 36,
        backgroundColor: "#FFCEDF",
        borderColor: "#909090",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 12,
        marginLeft: "5%",
        justifyContent: "center",
      }}
    >
      <Text
        style={{ textAlign: "center", fontWeight: "bold", color: "#989898" }}
      >
        DELETE
      </Text>
    </RectButton>
  );
}

function ScreenHeader({ label, iconName, onClick }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{label}</Text>
        <Ionicons
          name={iconName}
          size={28}
          color="gray"
          style={{ marginLeft: 8 }}
        />
      </View>
    </TouchableOpacity>
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

  addQuarantineDatesContainer: {
    // padding: "5%",
  },

  chooseYourDateTextStyle: {
    fontSize: 16,
    paddingLeft: "5%",
  },
});
