import React from 'react';
import { ImageBackground,Text,View,StyleSheet,TouchableWithoutFeedback, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Setting from './register';
import register from './enter2';



const Stack = createStackNavigator();

export default function Aapp(){
    return(
      <NavigationContainer independent="true"> 
      <Stack.Navigator mode="modal" headerMode="none">

      <Stack.Screen name="进入" component={enter}/>

      <Stack.Screen name="登录" component={register}/>
      <Stack.Screen name="注册" component={Setting}/>
      
      </Stack.Navigator>
      </NavigationContainer>
    );
}
  





function enter({navigation}){
  


  return (
      <View style={styles.one}>
       <ImageBackground style={{width: '100%', height: '100%',alignItems:'center',}} source={require('../img/杜甫.jpg')}>
       
        <Text style={{fontSize:40,fontFamily: 'yegenyou',marginTop:100,color:'#3C3C3C'}}>诗情画意 在浙里说</Text>
        <View style={{width:"70%",marginTop:180,flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableWithoutFeedback  
                                
        style={{}}
        onPress={() => {
            {     navigation.navigate('登录') }
        }}>
         {/* <View style={{height:110,width:110,borderRadius:400,flexDirection:'row',backgroundColor:'#ffffff',opacity:0.7}}> */}
         <Text style={{fontSize:40,fontFamily:'yegenyou',color:'#000000',marginTop:30,marginLeft:18}}>登录</Text>
          {/* </View> */}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  
                                
        style={{}}
        onPress={() => {
            {     navigation.navigate('注册') }
        }}>
         {/* <View style={{height:110,width:110,borderRadius:400,flexDirection:'row',backgroundColor:'#ffffff',opacity:0.7}}> */}
         <Text style={{fontSize:40,fontFamily:'yegenyou',color:'#000000',marginTop:30,marginLeft:18}}>注册</Text>
          {/* </View> */}
          </TouchableWithoutFeedback>
          </View>
        
     









      
      </ImageBackground>
      </View>
    
  );
}

const styles = StyleSheet.create({

  one:{//主视图
    flex:1, 
    
    alignItems: 'center',


  },
  
});