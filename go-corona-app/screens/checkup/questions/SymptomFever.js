import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';
import Congestion from '../../../assets/images/Congestion.svg';


export default function SymptomFever() {
    const [values, setValues] = useState('first')
    const [valueNext, setValueNext] = useState('ftcg')
    const [yesNo,setYesNo] = useState('y')
    
  return (
    <ScrollView>
    <View style={styles.viewContainer}>
            <View style={styles.sectionContainer}>
            <Text style={styles.title}>Please tell us about your symptoms</Text>
            <Congestion style={styles.image} width="200" height="120" />
            </View>
          <Text style={styles.textSty}>Do you have fever?</Text> 
          <Divider  />
          <View  style={styles.agreeContainer}>
          <RadioButton.Group
          onValueChange={values => setValues(values)}
          value={values}
           >
          <View style={styles.agreeContainer}>
          <View style={styles.radAlign}>
           <RadioButton.Android value="first" color="#E03D51" uncheckedColor="#D2D2D2" />
           <Text style={styles.radTxt}>Yes</Text>
           </View>
           <Divider  />
          </View>
          <View  style={styles.agreeContainer}>
            <View style={styles.radAlign}>
            <RadioButton.Android value="second" color="#E03D51" uncheckedColor="#D2D2D2" />
            <Text style={styles.radTxt}>No</Text>
            </View>
            <Divider />
          </View>
        </RadioButton.Group>
        </View>
        <Text style={styles.textSty}>Can you describe your fever?</Text> 
        <View  style={styles.agreeContainer}>
        <RadioButton.Group
        onValueChange={valueNext => setValueNext(valueNext)}
        value={valueNext}
         >
         <View style={styles.agreeContainer}>
         <View style={styles.radAlign}>
          <RadioButton.Android value="ftcg" color="#E03D51" uncheckedColor="#D2D2D2" />
          <Text style={styles.radTxt}>Fever that comes and goes</Text>
          </View>
          <Divider  />
         </View>
        <View  style={styles.agreeContainer}>
          <View style={styles.radAlign}>
          <RadioButton.Android value="ftis" color="#E03D51" uncheckedColor="#D2D2D2" />
          <Text style={styles.radTxt}>Fever that is consistent</Text>
          </View>
          <Divider />
        </View>  
      </RadioButton.Group>
      </View>
      <Text style={styles.textSty}>Have you measured your temperature?</Text> 
      <View  style={styles.agreeContainer}>
      <RadioButton.Group
      onValueChange={yesNo => setYesNo(yesNo)}
      value={yesNo}
       >
       <View style={styles.agreeContainer}>
       <View style={styles.radAlign}>
        <RadioButton.Android value="y" color="#E03D51" uncheckedColor="#D2D2D2" />
        <Text style={styles.radTxt}>Yes</Text>
        </View>
        <Divider  />
       </View>
      <View  style={styles.agreeContainer}>
        <View style={styles.radAlign}>
        <RadioButton.Android value="n" color="#E03D51" uncheckedColor="#D2D2D2" />
        <Text style={styles.radTxt}>No</Text>
        </View>
        <Divider />
      </View> 
    </RadioButton.Group>
    </View>
    <Text style={styles.textSty}>What's the temperature of your fever?</Text> 
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
      flex: 1,
      backgroundColor: '#fafafa',
      justifyContent: 'flex-start'
  },
  container: {
      justifyContent: 'center'
  },
  contStyle:{
    borderWidth: 0
  },
  sectionContainer: {
      marginTop: 40,
      marginBottom: 5,
      alignItems: 'center',
  },
  title: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft:10,
      marginBottom:25
  },
  helpLinks: {
      marginTop: 30,
      padding: 5,
      width: "90%"
  },
  subTitle:{
    alignSelf:'flex-start', 
    marginLeft:25,
  },
  agreeContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection:'column'
  },
  txtStyle:{
    fontWeight: 'normal'
  },
  textSty:{
    marginLeft:24,
    marginBottom:20,
    marginTop: 40
  },
  radAlign:{
    flexDirection:'row'
  },
  radTxt:{
    marginTop:8
  },
  image:{
    alignSelf: 'center',
    marginTop: 10
  }
});
