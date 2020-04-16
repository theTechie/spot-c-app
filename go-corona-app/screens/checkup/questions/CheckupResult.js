import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VirusImg from '../../../assets/images/Virus';

const CheckupResult = (props) => {
  const percenatage = props.percenatage || 40;
  const p = (percenatage / 100) * 180;
  return (<View style={styles.container}>
    <View style={{ flexDirection: 'row', paddingTop: 50, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ height: 180, justifyContent: 'flex-end', marginLeft:-50, paddingRight:30  }}>
        <Text style={styles.probabilty}>{`${percenatage}%`}</Text>
        <Text style={styles.probabiltyLabel}>probabilty</Text>
      </View>
      <View height={180} >
        <View style={{ zIndex: 200, height: 180 - p }}>
          <VirusImg width={180} fill={'gray'} height={180}></VirusImg>
        </View>
        <View style={{ height: p, backgroundColor: '#D2C985' }}>
        </View>
      </View>
    </View>
    <View style={{ paddingTop: 40 }}>
      <Text style={styles.quarantined}>Please stay quarantined at home </Text>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  probabilty: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'right'
  },
  probabiltyLabel: {
    fontSize: 13,
    fontWeight: "bold"
  },
  quarantined: {
    fontSize: 16,
    fontWeight: "bold"
  }
})

export default CheckupResult