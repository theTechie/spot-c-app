import React, { useRef, useState } from 'react';
import { StyleSheet, Alert, ProgressBarAndroid, ProgressViewIOS, Text, View, Image, ScrollView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import Back from "../../../components/stepper/buttons/Back";
import Next from "../../../components/stepper/buttons/Next";
import Submit from "../../../components/stepper/buttons/Submit";
import Separator from "../../../components/Separator";

import International from './questions/International';
import Domestic from './questions/Domestic';
import Lockdown from './questions/Lockdown'
import Thankyou from './questions/Thankyou'

import Http from '../../../services/Http'
import { travelApi } from '../../../constants/AppSettings'
import { getUUIDs } from '../../../utils/helpers';

const formInitValues = {
  internationTravel: "no",
  visitedCountries: [],
  domesticTravel: "no",
  domesticFromCity: null,
  domesticToCity: null,
  hometown: null,
  currentLocation: null,
  domesticFlight: false,
  domesticTrain: false,
  domesticAuto: false,
  domesticCab: false
}

const screens = [
  {
    id: "International",
    title: 'International',
    component: International,
    questions: [
      { name: 'internationTravel', value: formInitValues.internationTravel },
      { name: 'visitedCountries', value: formInitValues.visitedCountries },
    ]
  },
  {
    id: "Domestic",
    title: "Domestic",
    component: Domestic,
    questions: [
      { name: 'domesticTravel', value: formInitValues.domesticTravel },
      { name: 'domesticFromCity', value: formInitValues.domesticFromCity },
      { name: 'domesticToCity', value: formInitValues.domesticToCity }
    ]
  },
  {
    id: "Lockdown",
    title: "Lockdown",
    component: Lockdown,
    questions: [
      { name: 'hometown', value: formInitValues.hometown },
      { name: 'currentLocation', value: formInitValues.currentLocation },
      { name: 'domesticFlight', value: formInitValues.domesticFlight },
      { name: 'domesticTrain', value: formInitValues.domesticTrain },
      { name: 'domesticAuto', value: formInitValues.domesticAuto },
      { name: 'domesticCab', value: formInitValues.domesticCab }
    ]
  },
  {
    component: Thankyou
  }
]


export default function TravelScreen() {
  const viewPager = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formValues, setFormValues] = useState(formInitValues);
  const navigation = useNavigation()

  const total = screens.length;
  const title = screens[currentIndex].title || 'Travel';

  const goToPreviousStep = () => {
    var i = currentIndex - 1;
    if (i >= 0) {
      viewPager.current.setPage(i);
      setCurrentIndex(i)
    }
  }

  // TODO: submit all values
  const submitForm = async () => {
    let data = 0;
    try {
      console.log(formValues)
      const UUIDs = await getUUIDs()
      let response = await Http.put(`${travelApi}/${UUIDs.medicalUUID}`, formValues)
      console.log('response data', response.data);
    } catch (res) {
      console.log('error in submitting', res)
    }
    navigation.goBack()
  }

  const setValues = (values) => {
    if (values && values.length) {
      values.forEach((v) => {
        formValues[v.name] = v.value;
        setFormValues(Object.assign({}, formValues));
      })
    }
  }
  const goToNextStep = () => {
    var i = currentIndex + 1;
    if (i <= total - 1) {
      viewPager.current.setPage(i);
      setTimeout(() => {
        setCurrentIndex(i);
      }, 100);
    }
  }

  let progress = (currentIndex + 1) / (total)
  let displayNext = currentIndex < total - 1;
  let displaySubmit = currentIndex === total - 1;
  let displayPrevious = currentIndex > 0;
  let isNextDisabled = false;
  let currentComponent = screens[currentIndex];

  if (currentComponent.id === "International" && formValues['internationTravel'] === "yes" && formValues['visitedCountries'].length === 0) {
    isNextDisabled = true
  }

  if (currentComponent.id === "Domestic" && formValues['domesticTravel'] === "yes" && (!formValues['domesticFromCity'] || !formValues['domesticToCity'])) {
    isNextDisabled = true
  }

  if (currentComponent.id === "Lockdown" && (!formValues['hometown'] || !formValues['currentLocation'])) {
    isNextDisabled = true
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text>{title}</Text>
        {
          (Platform.OS === 'android')
            ?
            <ProgressBarAndroid progress={progress} styleAttr="Horizontal" indeterminate={false} style={styles.progressAnd} />
            :
            <ProgressViewIOS progress={progress} style={styles.progressIos} progressTintColor="#49D581" />
        }
      </View>
      <View style={styles.content}>
        <ViewPager style={{ flex: 1 }} initialPage={0} ref={viewPager} scrollEnabled={false}>
          {screens.map((q, k) => {
            let QScreen = q.component;
            return <View key={k} style={{ flex: 1 }}>
              <QScreen questions={q.questions} setValues={setValues} ></QScreen>
            </View>
          })}
        </ViewPager>
      </View>
      <Separator />
      <View style={styles.navigation}>
        <View style={styles.back}>
          {displayPrevious ? <Back
            isActive={true}
            goToPreviousStep={() => goToPreviousStep()}
          /> : null}
        </View>
        {displayNext ? <View style={styles.next}>
          <Next disabled={isNextDisabled}
            goToNextStep={() => goToNextStep()}
          />
        </View> : null}
        {displaySubmit ? <View>
          <Submit onSubmit={() => submitForm()} />
        </View> : null}
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start'
  },
  progressContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 30
  },
  content: {
    flex: 1,
  },
  navigation: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  progressAnd: {
    width: 100,
    color: '#49D581',
  },
  progressIos: {
    width: 100,
  }
});
