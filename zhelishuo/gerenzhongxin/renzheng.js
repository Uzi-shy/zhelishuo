import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
const {width,height} =Dimensions.get("window");
import AntDesgin from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default class PickerTest extends Component {
  
    render(){
        return(

            <ImageBackground source={{uri:'http://121.196.27.141/img/dufu.jpg'}} style={{height:height,width:width}}>
              <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                <EvilIcons name={'close'} size={25} />
                <Text style={{fontSize:30,fontFamily:"youran"}}>身份认证</Text>
                <Feather name={'more-horizontal'} size={25}/>
              </View>
              <View style={{alignItems:'center',justifyContent:'center',height:"75%"}}>
                <View style={{width:"90%",backgroundColor:'#F0F0F0',borderRadius:5,elevation:5,alignItems:'center',padding:10}}>
                <Text style={{fontSize:25,padding:10}}>申请条件</Text>
                <View style={{backgroundColor:'#5B5B5B',height:0.5,width:"90%"}}/>
                <TouchableOpacity style={{flexDirection:'row',width:"90%",paddingVertical:10,alignItems:'center'}}>
                  <FontAwesome5 name={'smile'} size={18} style={{marginRight:10}} />
                  <Text style={{fontSize:18}}>清晰头像</Text>
                  <Text style={{fontSize:18,position:'absolute',right:15}}>已满足</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'#5B5B5B',height:0.5,width:"90%"}}/>
                <TouchableOpacity style={{flexDirection:'row',width:"90%",paddingVertical:10,alignItems:'center'}}>
                <FontAwesome name={'mobile-phone'} size={25} style={{marginRight:10}} />
                <Text style={{fontSize:18}}>绑定手机</Text>
                <Text style={{fontSize:18,position:'absolute',right:15}}>已满足</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'#5B5B5B',height:0.5,width:"90%"}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'90%',paddingVertical:10,alignItems:'center'}}>
                  <Ionicons name={'eye'} size={18} style={{marginRight:10}}/>
                  <Text style={{fontSize:18}}>关注数≥50</Text>
                  <Text style={{fontSize:18,position:'absolute',right:15}}>已满足</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'#5B5B5B',height:0.5,width:"90%"}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'90%',paddingVertical:10,alignItems:'center'}}>
                  <Ionicons name={'people'} size={18} style={{marginRight:10}}/>
                  <Text style={{fontSize:18}}>粉丝数≥50</Text>
                  <Text style={{fontSize:18,position:'absolute',right:15}}>未满足</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'80%',borderRadius:20,backgroundColor:'#3C3C3C',alignItems:'center',justifyContent:'center',padding:10,marginTop:10,marginBottom:10}}>
                  <Text style={{fontSize:18,color:'white'}}>立即申请</Text>
                </TouchableOpacity>
              </View>
              </View>

            </ImageBackground>
        );
    }
}