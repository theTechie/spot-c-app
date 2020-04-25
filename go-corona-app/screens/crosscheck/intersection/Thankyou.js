import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Thankyou = (props) => {
  return (<View style={styles.container}>
    <Text style={styles.title}>Thank you</Text>
    <Text style={styles.thankyouNote}>
      {
        `For sharing your Takeout data. This will help our nation trace COVID-19 cases more effectively. While we process your data,please visit back after sometime and use the option in the home screen to check if you are exposed to COVID-19 based on your travel history. 
        `
      }
    </Text>
  </View>)
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  thankyouNote: {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 14
  },
  container: {
    flex: 1,
    padding: 30,
  }
})

export default Thankyou