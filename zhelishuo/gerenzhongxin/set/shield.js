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
                    <AntDesign name={'left'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25}}>屏蔽设置</Text>
                    <Text>    </Text>
                </View>
               <View style={{marginTop:10,backgroundColor:'white',elevation:3}}>
               </View>
            </View>
        );
    }
}

