import React ,{Component} from 'react';
import {View,Text,TouchableOpecity,I18nManager,Image,FlatList } from 'react-native';
import Ioncions from 'react-native-vector-icons/Ionicons';




export default class weichuli extends Component{
    constructor(props){
        super(props);
         this.state={
             data:[
            {
                pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599456512443&di=78c688ca02c21a711a40795d37293a05&imgtype=0&src=http%3A%2F%2Ffile.gucn.com%2Ffile%2FCurioPicfile%2F200903%2FGucn_47903_20093205145648CheckCurioPic1.jpg',
                wen:'著名书画',
                toux:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=835401448,1403264908&fm=26&gp=0.jpg',
                name:'小欣欣',
                reson:'传播色情暴力'
            },
            {
                pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599456512443&di=78c688ca02c21a711a40795d37293a05&imgtype=0&src=http%3A%2F%2Ffile.gucn.com%2Ffile%2FCurioPicfile%2F200903%2FGucn_47903_20093205145648CheckCurioPic1.jpg',
                wen:'著名书画',
                toux:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=835401448,1403264908&fm=26&gp=0.jpg',
                name:'小欣欣',
                reson:'传播色情暴力'
            },
        ]
    }}
    
render(){
    return(
        <FlatList 
     data={this.state.data}
     keyExtractor={(item,index)=>index}
     renderItem={this.renderItem}
     />
    )
    
}



    renderItem=({item})=>{
        return(
            <View style={{backgroundColor:'#E0E0E0',padding:8,marginHorizontal:20,marginTop:20,flexDirection:'row',alignItems:'center'}}>
            <View>
              <Image style={{height:80,width:120}} source={{uri:item.pic}}/>
              <Text style={{fontSize:16,marginVertical:4}}>{item.wen}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                  <Image style={{height:25,width:25,borderRadius:400,marginRight:5}} source={{uri:item.toux}}/>
                  <Text>{item.name}</Text>
              </View>
             
              </View>
               <View style={{width:0.4,height:120,backgroundColor:'black',marginHorizontal:10}}/>
               <View style={{padding:5}}>
                 <Text style={{fontSize:14,fontWeight:'bold'}}>举报原因</Text>
                 <Text style={{marginTop:5,fontSize:16,fontWeight:'bold'}}>{item.reson}</Text>
               </View>
               <View style={{width:0.4,height:120,backgroundColor:'black',marginHorizontal:10}}/>
               <View style={{alignItems:'center',justifyContent:'center'}}>
                 <Ioncions name={'time-outline'} size={40} style={{marginLeft:20}}/>
               </View>
          </View>
        );
    }
}