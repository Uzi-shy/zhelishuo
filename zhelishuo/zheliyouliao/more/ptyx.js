import React, {Component,useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,Image,
ScrollView, TouchableWithoutFeedback
} from 'react-native';
import  {WebView}  from 'react-native-webview';


export default class MyWeb2 extends Component {
    render() {
      return (
          
        <WebView
          javaScriptEnabled={true}
          source={{uri: 'file:///android_asset/web/ptyx/index.html'}}
          style={{flex:1,height:"100%",weith:"100%"}}
        />
      );
    }
  }