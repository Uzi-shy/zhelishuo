import React from 'react';
import { ImageBackground,Text,View,StyleSheet,TouchableWithoutFeedback,Image, Alert,TouchableHighlight,Button} from 'react-native';
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
  





export default function xxx({navigation}){
  


  return (
      <View>
       <ImageBackground style={{width: '100%', height: '100%',alignItems:'center',}} source={require('E:/ad/zhelishuo/img/杜甫.jpg')}>
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
         <View style={{height:65,width:65,borderRadius:400,backgroundColor:'white',borderColor:'#272727',borderWidth:1,marginTop:10,marginLeft:15}}>
         <Text style={{fontSize:20,color:'#272727',marginTop:17,marginLeft:11}}>头像</Text>
          </View>
          </TouchableWithoutFeedback>

          <View style={{flexDirection:"column",marginLeft:10,width:"100%",marginTop:15}}>
              <Text style={{fontWeight:'bold',fontSize:25}}>小欣欣</Text>
              <Text style={{fontSize:15}}>7月11日</Text>
          </View>


          
          </View>
          <Image source={require('E:/ad/zhelishuo/img/a.jpg')}  style={{height:200,width:'70%',resizeMode:'cover',marginTop:20}}/>
          <View style={{marginTop:20}}>{/* 文字 */}
          <Text style={{fontSize:24,fontFamily: 'yegenyou',textAlign:"center"}}>春题湖上</Text>
          <Text style={{fontSize:20,fontStyle:"italic",textAlign:"center"}}>【作者】白居易【朝代】唐     </Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}> 湖上春来似图画， 乱峰围绕水平铺。</Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
          </View>
          <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between',width:"100%",Sheight:"100%",marginTop:180}}>{/* 功能栏*/}
          <TouchableHighlight onPress={()=>{Alert.alert("点赞+1");}}>
            <AntDesign name={'like2'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("评论+1");}}>
          <Feather name={'message-square'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("关注+1");}}>
           <Feather name={'user-check'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          </View>
    
  
        
     









      
      </ImageBackground>
      </View>
    
  );
}