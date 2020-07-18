import React, { useState } from 'react';
import {TextInput,Image, Text,View,Alert,StyleSheet,Button, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import App from './guanzhu';

import person from './personal';
import register from './register';

//数据库存放账号密码
const state= [{username:'hf',prassword:'201805020417'},{username:'public',prassword:'123'}];

const Stack = createStackNavigator();

export default function Aapp(){
  return(
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="登录" component={login}/>
    <Stack.Screen name="个人中心" component={person}/>
    <Stack.Screen name="注册" component={register}/>
    
    </Stack.Navigator>
    </NavigationContainer>

  );
}



 function login({navigation}){
  

//实例化用户
  const user1 = state[0];
  const publicuser = state[1];
//账号密码钩子
  const [textid, setTextid] = useState('');
  const [textst, setTextst] = useState('');
//显示loding钩子
  return (
      <View style={styles.one}>
        <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2634767155,932800011&fm=26&gp=0.jpg' }} style={ {width:60, height: 60 ,borderWidth:5,borderColor:'#C2FFFF' }} />
        <View style={styles.container}>
          <Text>账号</Text>
      <TextInput
        style={styles.textinput}
        placeholder="单击此处输入账号"
        onChangeText={text => setTextid(text)}
        defaultValue={textid}
      />
        </View>
        <View style={styles.container}>
        <Text>密码</Text>
      <TextInput
        style={styles.textinput}
        placeholder="单击此处输入密码"
        onChangeText={text => setTextst(text)}
        defaultValue={textst}
      /></View>
      <Button
        onPress={() => { 
          
          if(textid==user1.username &&textst==user1.prassword){     Alert.alert("登录成功"),navigation.navigate('个人中心') }
          else if(textid==publicuser.username &&textst==publicuser.prassword){Alert.alert("登录成功"),navigation.navigate('个人中心') }
          else Alert.alert("登录失败");
        
        }}
        title="登录"
      />
      <Button
      onPress={() => { 
          
        {     navigation.navigate('注册') }
      
      }}
      title="注册"
      />
      
      </View>
    
  );
}

const styles = StyleSheet.create({

  textinput:{
    borderColor: 'gray',
          borderWidth: 2,
    height: 40
  },
  one:{//主视图
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2CCCC'

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2DFFF'
  }
});