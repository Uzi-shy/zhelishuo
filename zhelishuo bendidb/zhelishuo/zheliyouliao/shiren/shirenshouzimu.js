import React,{Component,PureComponent} from 'react';
import {View,Text,TextInput,TouchableWithoutFeedback,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import Ionicons from 'react-native-vector-icons/Ionicons'



 export default class suoyin  extends Component{
   constructor(props){
     super(props)
     let nameData=[
        {name:'李白',id:'amani',params: '唐'},
        {name:'杜甫',id:'ok',params: '123'},
        {name:'陆游'},
        {name:'王勃'},
        {name:'王维'},
        {name:'孟浩然'},
        {name:'曹操'},
        {name:'诸葛亮'},
        {name:'郑板桥'},
        {name:'阿黄'},
        {name:'李商隐'},
        {name:'刘备'},
        {name:'刘禹锡'},
        {name:'张九龄'},
        {name:'贺知章'},
        {name:'韩愈'},
        {name:'苏轼'},
        {name:'杨万里'},
        {name:'王安石'},
        {name:'司马光'},
        {name:'欧阳修'},
        {name:'马致远'},
        {name:'元好问'},
        {name:'马哲'},
        {name:'于谦'},
        {name:'朱元璋'},
        {name:'戚继光'},
        {name:'龚自珍'},
     ]
     this.state={
         dataArray:nameData,
     }
   }

_renderHeader=(params)=>{
    console.log('---custom-renderHeader--',params)
    return <View style={{marginTop:12,backgroundColor:'#d0d0d0',opacity:0.4}}><Text style={{marginLeft:15,fontSize:18,}}>{params.key}</Text></View>
}
_renderItem=(item,index,section)=>{
  console.log('---custom-renderItem--',item,index,section)
  return <View><Text style={{fontSize:15,marginTop:12,marginLeft:10,color:'#272727'}}>{item.name}</Text></View>
}



    render (){
        return(
            <View style={{flex:1,marginBottom:55}}>
            
          <SectionListContacts style={{marginLeft:15}}
               
               ref={s=>this.sectionList=s}
               sectionListData={this.state.dataArray}
               sectionHeight={50}
               initialNumToRender={this.state.dataArray.length}
               showsVerticalScrollIndicator={false}
               SectionListClickCallback={(item,index)=>{
                console.log('---SectionListClickCallback--:',item,index)
             }}
             otherAlphabet="#"
               renderHeader={this._renderHeader}
               renderItem={this._renderItem}
              
           />
          </View>

        );
    }
 }