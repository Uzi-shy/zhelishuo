import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class xx extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingVertical:10,backgroundColor:'white'}}>
                    <TouchableOpacity>
                    <AntDesign name={'left'} size={25} onPress={() => {
                this.props.navigation.goBack()
              }}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:30,fontFamily:"youran"}}>账号与安全</Text>
                    <Text>    </Text>
                </View>
                <View style={{backgroundColor:'white',marginTop:15,elevation:2}}>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',padding:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>浙里说账号</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,marginRight:10}}>10000</Text>
                    
                    <AntDesign name={'right'} size={25}/>
                    
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',height:0.4,}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',padding:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>手机号</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,marginRight:10}}>198********</Text>
                    
                    <AntDesign name={'right'} size={25}/>
                    
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',height:0.4,}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',padding:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>密码</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,marginRight:10}}>修改</Text>
                    
                    <AntDesign name={'right'} size={25}/>
                    
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',height:0.4,}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',padding:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>第三方账号绑定</Text>
                    <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
                        <View style={{backgroundColor:'#d0d0d0',window:25,height:35,width:35,marginRight:10,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                        <FontAwesome name={'weixin'} size={18} color={'white'}/>
                        </View>
                        <View style={{backgroundColor:'#d0d0d0',window:25,height:35,width:35,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                        <AntDesign name={'QQ'} size={20} color={'white'}/>
                        </View>
                    </View>
                   
                    <AntDesign name={'right'} size={25}/>
                    
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',height:0.4,}}/>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',padding:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>注销账号</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,marginRight:10}}>注销后无法回复，请谨慎操作</Text>
                    
                    <AntDesign name={'right'} size={25}/>
                    
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',height:0.4,}}/>
                </View>
            </View>
        );
    }
}

