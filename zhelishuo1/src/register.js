import React, { useState } from 'react';
import {TextInput,Image, Text,View,Alert,StyleSheet,Button, ActivityIndicator} from 'react-native';


//数据库存放账号密码
const state= [{username:'hf',prassword:'201805020417'},{username:'public',prassword:'123'}];




export default function login({navigation}){
  

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
          
          if(textid==user1.username &&textst==user1.prassword){     Alert.alert("登录成功"),navigation.navigate('shige') }
          else if(textid==publicuser.username &&textst==publicuser.prassword){Alert.alert("登录成功"),navigation.navigate('shige') }
          else Alert.alert("登录失败");
        
        }}
        title="登录"
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