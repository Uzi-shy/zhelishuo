import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
const {width,height} =Dimensions.get("window");
import AntDesgin from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class PickerTest extends Component {

    render(){
        return(

            <View>
                <View style={{padding:15}}>
                    <TouchableOpacity>
                    <AntDesgin name={'left'} size={25} onPress={() => {
                            this.props.navigation.goBack();}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25,position:'absolute',left:(width-100)/2,top:10}}>编辑资料</Text>
                </View>
                <View style={{backgroundColor:'#E0E0E0',width:width,height:height}}>
                    <View style={{marginTop:10,backgroundColor:'white',width:width,paddingHorizontal:15}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            
                            <Image source={{uri:'http://121.196.27.141/img/baicha.jpg'}} style={{height:70,width:70,borderRadius:400}}/>
                           
                            <Text style={{fontSize:18,color:'#7B7B7B',position:'absolute',left:120}}>修改头像</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:18,color:'#7B7B7B'}}>昵称</Text>
                        <Text style={{fontSize:18,position:'absolute',left:120}}>白茶与风</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>浙里说账号</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120}}>857857857</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>性别</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120}}>男</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>个性签名</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120,color:'#7B7B7B'}}>努力做项目</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>常住地</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120}}>浙江杭州</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>生日</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120}}>2000-07-12</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',width:width,padding:15,}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:18,color:'#7B7B7B'}}>二维码</Text>
                            <Text style={{fontSize:18,position:'absolute',left:120,color:'#7B7B7B'}}>点击查看</Text>
                            <FontAwesome name={'qrcode'} size={20} color={'#7B7B7B'} style={{position:'absolute',right:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}