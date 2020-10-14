import React, { Fragment, Component, useEffect, useState } from 'react';

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
  Alert,
  TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function xxx({ route, navigation }) {
  const { pic } = route.params;
  const { poet } = route.params;
  const { jieshao } = route.params;
  const { shengping } = route.params;
  const { zuoping } = route.params;
  const { qbzuoping } = route.params;
  return (
    <View style={{ marginBottom: 50 }}>



      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 70, backgroundColor: 'white', elevation: 2 }}>
        <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
          navigation.goBack()
        }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => {  }}>
              <Ionicons name={'md-heart-outline'} size={23} />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 8 }}>
            <TouchableOpacity onPress={() => {  }}>
              <AntDesign name={'staro'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity
              onPress={() => {  }}>
              <AntDesign name={'sharealt'} size={23} />
            </TouchableOpacity>
          </View>


        </View>

      </View>
      <ScrollView style={{ paddingHorizontal: 15, marginBottom: 40 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Image source={{ uri: pic }} style={{ height: 200, width: '50%', resizeMode: 'cover', borderRadius: 10, marginRight: 10 }} />
          <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{poet}</Text>
            <Text style={{ fontSize: 16, marginRight: 10, width: 180 }}>{jieshao}</Text>
          </View>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>简介</Text>
        <View style={{ height: 0.5, backgroundColor: 'black', marginBottom: 10 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>生平</Text>
        <Text style={{ fontSize: 15, lineHeight: 20 }}>&emsp;&emsp;{shengping}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>主要作品</Text>
        <Text style={{ fontSize: 15, lineHeight: 20 }}>&emsp;&emsp;{zuoping}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>作品欣赏</Text>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          data={qbzuoping}

          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{padding:10}}>
              
               <Image style={{ resizeMode: 'cover', height: 80 }} source={{ uri: item.img1 }} />
               <Text>{item.name}</Text>
            </View>

          
)}

/>



</ScrollView>

    </View>
  );
}
