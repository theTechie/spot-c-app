import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, Dimensions, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Http from '../services/Http';
import { csoptsApi } from '../constants/AppSettings';
import Point from '../components/map/Point';

// TODO: move to constants
const latitudeDelta = 0.2;
const longitudeDelta = 0.1;

export default class HomeScreen extends Component {
  state = {
    loading: true,
    region: null,
    points: [],
    error: null,
    mapWidth: '99%',
  }
  map = null;
  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      // TODO: move to string constants
      this.setState({ error: 'Location permission is needed' })
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const cspotsResponse = await Http.post(csoptsApi);
    var points = this.getHeatMapPoints(cspotsResponse.data);
    this.setHeatMapPoints(latitude, longitude, points);
  }

  onMapReady = () => {
    this.map.animateToRegion(this.state.region);
    setTimeout(() => {
      this.setState({
        mapWidth: '100%'
      })
    }, 100);
  }

  setHeatMapPoints(latitude, longitude, points) {
    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta
      },
      loading: false,
      points
    });
  }

  getHeatMapPoints(data) {
    return data;
  }

  onRegionChangeComplete = (region) => {
    this.setState({
      region
    })
  }

  render() {
    const { loading, points, mapWidth, region } = this.state;
    return (
      <View style={styles.container}>
        {this.state.loading ?
          <ActivityIndicator></ActivityIndicator> :
          <MapView
            ref={(ref) => { this.map = ref }}
            provider={PROVIDER_GOOGLE}
            onMapReady={this.onMapReady}
            showsUserLocation={true}
            onRegionChangeComplete={this.onRegionChangeComplete}
            showsMyLocationButton={true}
            style={[styles.map, { width: mapWidth }]}
          >
            {points.map((i, key) => 
               <Point point={i} region={region} key={key}></Point>
            )}
          </MapView>
        }
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

