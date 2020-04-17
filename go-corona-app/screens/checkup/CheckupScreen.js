import React, { useRef, useState } from 'react';
import { StyleSheet, Alert, ProgressBarAndroid, ProgressViewIOS, Text, View, Image, ScrollView } from 'react-native';

import Back from "../../components/stepper/buttons/Back";
import Next from "../../components/stepper/buttons/Next";
import Submit from "../../components/stepper/buttons/Submit";
import Separator from "../../components/Separator";

import StepList from '../../components/stepper/StepList';
import Step from '../../components/stepper/Step';
import Introduction from './Introduction';
import Terms from './Terms';
import HeightQuestion from './questions/Height';
import AgeQuestion from './questions/Age';
import WeightQuestion from './questions/Weight';
import Thankyou from './questions/Thankyou';
import CheckupResult from './questions/CheckupResult';
import ViewPager from '@react-native-community/viewpager';
import ProgressBarContainer from '../../components/ProgressBar';
import CheckupWho from './questions/CheckupWho'
import CheckupGender from './questions/CheckupGender'
import TravelScreenTwo from './questions/travel/ScreenTwo';
import TravelScreenThree from './questions/travel/ScreenThree';

const formInitValues = {
  policyRead: false,
  checkupfor: null,
  gender: null,
  age: 30,
  height: 160,
  weight: 68

}
const screens = [
  {
    title: 'Introduction',
    component: Introduction
  },
  {
    title: 'Introduction',
    component: Terms,
    questions: [
      { name: 'policyRead', value: formInitValues.policyRead },
    ]
  },
  {
    component: CheckupWho,
    questions: [
      { name: 'checkupfor', value: formInitValues.checkupfor },
    ]
  },
  {
    component: CheckupGender,
    questions: [
      { name: 'gender', value: formInitValues.gender },
    ]
  },
  {
    questions: [
      { name: 'age', value: formInitValues.age },
    ],
    component: AgeQuestion
  },
  {
    questions: [
      { name: 'height', value: formInitValues.height },
    ],
    component: HeightQuestion
  },
  {
    questions: [
      { name: 'weight', value: formInitValues.weight },
    ],
    component: WeightQuestion
  },
  {
    component: Thankyou
  },
  {
    title: 'Result',
    component: CheckupResult
  }
]



export default function CheckupScreen() {
  const viewPager = useRef(null);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [formValues, setFormValues] = useState(formInitValues);

  let total = screens.length;
  let title = screens[currentIndex].title || 'Patient';
  const goToPreviousStep = () => {
    var i = currentIndex - 1;
    if (i >= 0) {
      viewPager.current.setPage(i);
      setCurrentIndex(i)
    }
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
  let displayNext = currentIndex < total - 2;
  let displaySubmit = currentIndex === total - 2;
  let displayPrevious = currentIndex > 0;
  let isNextDisabled = false;
  if (currentIndex === 1 && formValues['policyRead'] === false) {
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
          <Submit onSubmit={() => { goToNextStep(); Alert.alert(JSON.stringify([formValues.age, formValues.height, formValues.weight])) }} />
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
