import React ,{Component} from 'react';
import {View,Text,TouchableOpecity,I18nManager,Image,FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';




export default class weichuli extends Component{
    constructor(props){
        super(props);
         this.state={
             data:[
            {
                s1:'白茶与风',
                t1:'http://121.196.27.141/img/baicha.jpg',
                s2:'清茶与酒',
                t2:'http://121.196.27.141/img/girl.jpg',
                pinglun:'哇塞，写的真好！'
            },
            {
                s1:'张格雷弗斯三',
                t1:'http://121.196.27.141/img/zhelishuo/toux/toux17.jpg',
                s2:'李子熟了四',
                t2:'http://121.196.27.141/img/zhelishuo/toux/toux13.jpg',
                pinglun:'中国文化博大精深！'
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
                <View style={{backgroundColor:'#E0E0E0',padding:8,marginHorizontal:20,marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <View >
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                  <Image style={{height:30,width:30,borderRadius:400}} source={{uri:item.t1}}/>
        <Text style={{fontSize:18,marginLeft:2}}>{item.s1}</Text>
                  <Text style={{fontSize:15,marginHorizontal:7}}>评论</Text>
                      <Image style={{height:30,width:30,borderRadius:400}} source={{uri:item.t2}}/>
                      <Text style={{fontSize:18,marginLeft:2}}>{item.s2}</Text>
                      </View>
                      <Text style={{fontSize:15}}>{item.pinglun}</Text>
                      </View>
                      <View style={{marginRight:10,alignItems:'center',justifyContent:'center'}}>
                          <Feather name={'clock'} size={30}/>
                      </View>
                </View>
                
        );
    }
}