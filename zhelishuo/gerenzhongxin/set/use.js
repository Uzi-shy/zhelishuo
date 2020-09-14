import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Switch } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class xx extends Component{
    constructor(){
        super();
        this.label={false:'关',true:'开'}
        this.state={
          switch1Value:true,
        }
      }
      
  toggleSwitch=(value)=>{
    this.setState({switch1Value:value})
  }


    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingVertical:10,backgroundColor:'white'}}>
                    <TouchableOpacity>
                    <AntDesign name={'left'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25}}>通用设置</Text>
                    <Text>    </Text>
                </View>
               <View style={{marginTop:10,backgroundColor:'white',elevation:3,paddingHorizontal:15}}>
               <View style={{paddingVertical:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:18}}>使用系统默认字体</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'black'}}/>
                   <View style={{flexDirection:'row',width:'100%',paddingVertical:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>字体大小</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity>
                    <AntDesign name={'right'} size={25}/>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:0.5,width:'100%',backgroundColor:'black'}}/>
                   <View style={{flexDirection:'row',width:'100%',paddingVertical:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>图片下载设置</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,marginRight:10}}>不支持下载</Text>
                    <TouchableOpacity>
                    <AntDesign name={'right'} size={25}/>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:0.5,width:'100%',backgroundColor:'black'}}/>
                   <View style={{flexDirection:'row',width:'100%',paddingVertical:15,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>清除缓存</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity>
                    <AntDesign name={'right'} size={25}/>
                    </TouchableOpacity>
                    </View>
                </View>
               </View>
            </View>
        );
    }
}

