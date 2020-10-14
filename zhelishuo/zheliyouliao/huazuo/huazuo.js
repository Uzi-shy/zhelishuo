import React,{Component} from 'react';
import {View,Text,TextInput,TouchableWithoutFeedback,ScrollView,TouchableOpacity} from 'react-native';
import Ionicons from"react-native-vector-icons/Ionicons";
import Huazuopxnavigation from "./huazuopxnavigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

 export default class header  extends Component{
   

    render (){
        return(
            <View>
                
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:80,backgroundColor:'white',elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',}}>画作评析</Text>
            <TouchableWithoutFeedback style={{marginRight:20}}>
              <Ionicons name={'search'} size={30}  />
            </TouchableWithoutFeedback>
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Huazuopxnavigation/>
          </View>
          </View>

        );
    }
 }