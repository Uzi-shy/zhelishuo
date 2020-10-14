import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image, ImageBackground,Share
} from 'react-native';
const {width,height} =Dimensions.get("window");
import AntDesgin from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class PickerTest extends Component {
  onShare = async () => 
    {
      const { navigation, route } = this.props;
      try {
        const result = await Share.share({
          message:route.params.title+route.params.leibie
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
  
    render(){
      const { navigation, route } = this.props;
        return(

            <View>
               <ImageBackground source={{uri:'http://121.196.27.141/img/map.jpg'}} style={{height:height,width:width}}>
                 <TouchableOpacity style={{height:35,width:35,backgroundColor:'white',borderColor:'#9D9D9D',borderWidth:0.2,borderRadius:8,marginLeft:10,marginTop:10,alignItems:'center',justifyContent:'center',elevation:5}}>
                 <AntDesgin name={'left'} size={25} onPress={() => {
                   this.props.navigation.goBack();
                 }}/>
                 </TouchableOpacity>
                 <TouchableOpacity style={{height:35,width:35,backgroundColor:'white',borderColor:'#9D9D9D',borderWidth:0.2,borderRadius:8,position:'absolute',right:10,top:10,alignItems:'center',justifyContent:'center',elevation:5}}>
                 <Feather name={'search'} size={25}/>
                 </TouchableOpacity>
                 <TouchableOpacity style={{height:35,width:35,backgroundColor:'white',borderColor:'#9D9D9D',borderWidth:0.2,borderRadius:8,position:'absolute',right:10,bottom:380,alignItems:'center',justifyContent:'center',elevation:5}}
                 onPress={() => {
                  this.props.navigation.navigate("全景图");
                }}>
                 <MaterialIcons name={'location-searching'} size={25}/>
                 </TouchableOpacity>
                 <View style={{position:'absolute',bottom:0,width:width,backgroundColor:'white',paddingHorizontal:20,paddingBottom:30,paddingTop:20}}>
              <Text style={{fontSize:22,fontWeight:'700',width:"70%",lineHeight:35}}>{route.params.title} {"\n"}{route.params.leibie}</Text>
              <Text style={{fontSize:18,color:'#6C6C6C',marginVertical:5}}>{route.params.location}</Text>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                       <Feather name={'star'} size={25}/>
                       <Text style={{fontSize:16}}>收藏</Text>
                     </View>
                     <TouchableOpacity style={{backgroundColor:'#3C3C3C',padding:10,width:"75%",alignItems:'center',justifyContent:'center',borderRadius:30,position:'absolute',right:20}}>
                       <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>查看路线</Text>
                     </TouchableOpacity>
                   </View>
                   <View style={{backgroundColor:'#E0E0E0',height:2,marginVertical:15}}/>
                   <View>
                     <Text style={{fontWeight:'bold',fontSize:22,marginBottom:15}}>周边推荐</Text>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <TouchableOpacity style={{alignItems:'center'}}>
                       <Ionicons name={'restaurant-outline'} size={25}/>
                         <Text style={{fontSize:16}}>餐饮</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{alignItems:'center'}}>
                       <FontAwesome5 name={'cocktail'} size={25}/>
                         <Text style={{fontSize:16}}>娱乐</Text>
                       </TouchableOpacity>
                       <TouchableOpacity  style={{alignItems:'center'}}>
                       <FontAwesome5 name={'hotel'} size={25}/>
                         <Text style={{fontSize:16}}>酒店</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{alignItems:'center'}}>
                       <FontAwesome name={'shopping-cart'} size={25}/>
                         <Text style={{fontSize:16}}>购物</Text>
                       </TouchableOpacity>
                     </View>
                   </View>
                 </View>
               </ImageBackground>
            </View>
        );
    }
}