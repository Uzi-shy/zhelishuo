import React from 'react';
import { ImageBackground,Text,ScrollView,View,StyleSheet,TouchableWithoutFeedback,Image, Alert,TouchableHighlight,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from"react-native-vector-icons/Feather";
import AntDesign from"react-native-vector-icons/AntDesign";



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
  





export default function xxx({route,navigation}){

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
       <ImageBackground style={{width: '100%', height: '100%',alignItems:'center',}} >
        <View style={{flexDirection:'row',justifyContent:'flex-start',width:"100%"}}>
        

       
       <TouchableWithoutFeedback 
       style={{}}
          onPress={() => {
            {     navigation.goBack();}
          }}>
              <View style={{}}>
         <Ionicons name={'arrow-back'} size={55} color={'#3C3C3C'} style={{marginTop:10,marginLeft:10}}/></View>
          </TouchableWithoutFeedback>

          
          


          <TouchableWithoutFeedback  
                                
        style={{}}
        onPress={() => {
         
        }}>
         <View style={{height:65,width:65,borderRadius:400,borderColor:'#272727',borderWidth:1,marginTop:10,marginLeft:15}}>
         <Image source={{uri:toux}} style={{width: 65, height: 65,borderRadius:400}}/>
          </View>
          </TouchableWithoutFeedback>

          <View style={{flexDirection:"column",marginLeft:10,width:"100%",marginTop:15}}>
      <Text style={{fontWeight:'bold',fontSize:25}}>{username}</Text>
      <Text style={{fontSize:15}}>{day}</Text>
          </View>
          </View>

          <ScrollView>
          <Image source={{uri:pic}}  style={{height:200,width:'70%',resizeMode:'cover',marginTop:20,zIndex:99}}/>
          <View style={{marginTop:20}}>{/* 文字 */}
      <Text style={{fontSize:24,fontFamily: 'yegenyou',textAlign:"center"}}>{txt}</Text>
          
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}>{quanwen}</Text>
          </View>
          <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between',width:"100%",Sheight:"100%",marginTop:180}}>{/* 功能栏*/}
          <TouchableHighlight onPress={()=>{Alert.alert("点赞+1");}}>
            <AntDesign name={'like2'} size={30}/>
          </TouchableHighlight>
      <Text>{good}</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("评论+1");}}>
          <Feather name={'message-square'} size={30}/>
          </TouchableHighlight>
      <Text>{pinglun}</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("关注+1");}}>
           <Feather name={'user-check'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          </View>
    
  
        
     









      </ScrollView>
      </ImageBackground>
      </View>
    
  );
}