import React,{Component} from 'react';
import {View,Text,TextInput, Dimensions,TouchableOpacity}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get("window");


export default class xx extends Component{

  render(){
    return(
      <View>
        <View style={{flexDirection:'row',padding:10,}} >
          <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                          }}>
          <AntDesign name={'left'} size={25}  />
          </TouchableOpacity>
          <Text style={{fontSize:25,fontWeight:'bold',position:'absolute',left:(width-100)/2,top:10}}>个人签名</Text>
        </View>
        <View style={{alignItems:'center',marginTop:15}}> 
        <TextInput style={{height:200,width:width-60,backgroundColor:'#E0E0E0',borderRadius:10,textAlignVertical: 'top'}}
        multiline={true}
        placeholder='点此输入'
         />
        </View>
        <Text style={{marginLeft:30,marginTop:10,color:'#5B5B5B'}}>个人签名最长可以输入100个汉字嗷~</Text>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{borderRadius:20,alignItems:'center',justifyContent:'center',padding:10,backgroundColor:'#BEBEBE',width:width-60,marginTop:40}}>
          <Text style={{fontSize:18}}>保存</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}