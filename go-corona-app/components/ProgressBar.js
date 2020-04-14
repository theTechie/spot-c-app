import React, { Component } from 'react';
import { View, Text, Platform, ProgressBarAndroid, ProgressViewIOS, StyleSheet} from 'react-native';
import Separator from "./Separator";

export default class ProgressBarContainer extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { progressBarProgress: 0.0, textOnTop: this.props.textOnTop, currPage: this.props.currPage }
  }

  changeProgress = () =>
  {
    this.setState({ progressBarProgress: this.state.currPage/11 });
  }

  componentDidMount()
  {
    this.changeProgress();
  }

  render()
  {
    return(
      <View style = { styles.container }>
      <Separator />
        <View  style={{flex: 1}}>
        <Text style = { styles.text }>{this.state.textOnTop}</Text>
        </View>
        {
            ( Platform.OS === 'android' )
            ?
              (<View style={styles.progressAndView}><ProgressBarAndroid progress = { this.state.progressBarProgress } styleAttr = "Horizontal" indeterminate = { false } style={styles.progressAnd} /> </View>)
            :
              (<View style={styles.progressIosView}><ProgressViewIOS progress = { this.state.progressBarProgress } style ={styles.progressIos} progressTintColor="#49D581" /></View> )
        }    
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 12 : 0,
    paddingHorizontal: 25,
    backgroundColor:'#EEEEEE',
  },

  text:
  {
    color: 'black',
    fontSize: 11,
    marginBottom: 15,
    textAlign: 'left'
  },
  
  progressAndView:{
    flex:1
  },
  
  progressIosView:{
    flex: 1, 
    marginTop:6
  },

  progressAnd:{
      width:'50%', 
      color:'#49D581',
      paddingTop:50
  },
  
  progressIos:{
    width:'50%', 
    alignSelf:'flex-end'
  }
 
});