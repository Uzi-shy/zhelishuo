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
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingLeft:10,paddingVertical:10,backgroundColor:'white',height:50,elevation:2}}>
                   
                    <AntDesign name={'left'} style={{position:'absolute',left:10}} size={25} onPress={() => {
                this.props.navigation.goBack()
              }}/>
               
                    <Text style={{fontSize:30,fontFamily:"youran"}}>通知设置</Text>
                    <Text>    </Text>
                </View>
               <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                   <View style={{height:18,width:3,backgroundColor:'#4F4F4F',marginRight:10,borderRadius:2}}/>
                   <Text style={{fontSize:18,color:'#8E8E8E'}}>互动通知</Text>
               </View>
               <View style={{backgroundColor:'white',paddingHorizontal:15}}>
                   <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:15}}>赞和收藏</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value} />
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'#4F4F4F'}}/>
                   <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:15}}>新增关注</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'#4F4F4F'}}/>
                   <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:18}}>评论</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'#4F4F4F'}}/>
                   <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:18}}>@</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'#4F4F4F'}}/>
               </View>
               <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                   <View style={{height:18,width:3,backgroundColor:'#4F4F4F',marginRight:10,borderRadius:2}}/>
                   <Text style={{fontSize:18,color:'#8E8E8E'}}>其他通知</Text>
               </View>
               <View style={{backgroundColor:'white',paddingHorizontal:15}}>
               <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:18}}>关注人发布</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
                   <View style={{height:0.5,width:'100%',backgroundColor:'#4F4F4F'}}/>
                   <View style={{paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:18}}>推荐</Text>
                   <Switch
        onValueChange={this.toggleSwitch}
        value={this.state.switch1Value}/>
                   </View>
               </View>
            </View>
        );
    }
}

