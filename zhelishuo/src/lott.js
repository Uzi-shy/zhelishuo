import React, { Fragment,Component,useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListFooterComponent,
  TouchableNativeFeedback,
  Alert
} from 'react-native';



export default class wofabu extends Component{


    onstar_navigation(){
        this.props.navigation.navigate("发布");

    };


    render(){
        
        return(
            <View>
                <Text>这是一个可怜的小动画</Text>
                {this.onstar_navigation()}
            </View>
        );
    }

}