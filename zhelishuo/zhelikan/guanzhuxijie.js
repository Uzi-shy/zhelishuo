import React from 'react';
import { ImageBackground, Text, ScrollView, View,TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image, Alert, TouchableHighlight, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from 'react-native-vector-icons/EvilIcons';


// import personal from './personal';
// import { TextInput } from 'react-native-gesture-handler';
// import home from './HomePage';



// const Stack = createStackNavigator();

// export default function Aapp(){
//     return(
//       <NavigationContainer independent="true"> 
//       <Stack.Navigator mode="modal" headerMode="none">

//       <Stack.Screen name="小欣欣" component={xxx}/>
//       <Stack.Screen name="个人中心" component={personal}/>
//       <Stack.Screen name="首页" component={home}/>


//       </Stack.Navigator>
//       </NavigationContainer>
//     );
// }






export default function xxx({ route, navigation }) {

  const { username } = route.params;
  const { toux } = route.params;
  const { day } = route.params;
  const { pic } = route.params;
  const { txt } = route.params;
  const { good } = route.params;
  const { pinglun } = route.params;
  const { quanwen } = route.params;
  



  return (
    <View style={{}}>
      <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center', }} >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: "100%" }}>



          




          <TouchableWithoutFeedback

            style={{}}
            onPress={() => {

            }}>
            <View style={{ height: 40, width: 40, borderRadius: 400, borderColor: '#272727', borderWidth: 1, marginTop: 10, marginLeft: 15 }}>
              <Image source={{ uri: toux }} style={{ width: 40, height: 40, borderRadius: 400 }} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{ flexDirection: "row", marginLeft: 10, width: "100%", marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{username}</Text>
            <Text style={{ marginTop:5,fontSize: 12 }}>  {day}</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:30}}>
          <Image source={{ uri: pic }} style={{ height: 200, width: '100%', resizeMode: 'cover', marginTop: 20, zIndex: 99 }} />
          <View style={{ padding:18 ,marginTop: 20 }}>{/* 文字 */}
            <Text style={{ fontSize: 20, textAlign: "center" }}>{txt}</Text>

            <Text style={{ fontSize: 16, textAlign: "center" }}>{quanwen}</Text>
          </View>
          













        </ScrollView>
        <View style={{ backgroundColor: "white", height: 50, position: 'absolute', bottom: 0, width: "100%", }}>
          <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", Bottom: 40 }}>


            <View style={{ flexDirection: 'row', padding: 10, }}>{/* 功能栏*/}
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => {
                  { navigation.goBack(); }
                }}>
                <Ionicons name={'chevron-back-outline'} size={25} color={'#3C3C3C'} />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => {  }}>
                  <Ionicons name={'md-heart-outline'} size={21} />
                </TouchableOpacity>
              <Text style={{ marginRight: 10 }}>{good}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => {  }}>
                  <EvilIcons name={'comment'} size={27} />
                </TouchableOpacity>
                <Text style={{ marginRight: 10 }}>{pinglun}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => {  }}>
                  <AntDesign name={'staro'} size={20} />
                </TouchableOpacity>
                <Text>2</Text>
              </View>

            </View>


            <View style={{ flexDirection: 'row', padding: 10, marginRight: 10 }}>
              <View style={{ marginRight: 15 }}>
                <TouchableWithoutFeedback
                  onPress={() => { }}>
                  <AntDesign name={'sharealt'} size={18} />
                </TouchableWithoutFeedback>

              </View>
              <View style={{ marginRight: 10 }}>
                <TouchableWithoutFeedback
                  onPress={() => {  }}>
                  <Feather name={'more-horizontal'} size={18} />
                </TouchableWithoutFeedback>
              </View>
            </View></View>

        </View>
      </ImageBackground>
    </View>

  );
}