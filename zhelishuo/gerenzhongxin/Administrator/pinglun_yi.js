import React ,{Component} from 'react';
import {View,Text,TouchableOpecity,I18nManager,Image,FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';




export default class weichuli extends Component{
    constructor(props){
        super(props);
         this.state={
             data:[
            {
                s1:'小帆帆',
                t1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599468081343&di=0b0869dc2b7d7b56cc410900ea4d4ab7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F06%2F20181006163755_ZkiF8.jpeg',
                s2:'小欣欣',
                t2:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2084290249,3105048292&fm=26&gp=0.jpg',
                pinglun:'哇塞，写的真好！'
            },
            {
                s1:'小帆帆',
                t1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599468081343&di=0b0869dc2b7d7b56cc410900ea4d4ab7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F06%2F20181006163755_ZkiF8.jpeg',
                s2:'小欣欣',
                t2:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2084290249,3105048292&fm=26&gp=0.jpg',
                pinglun:'哇塞，写的真好！'
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
                      <View style={{marginRight:10,justifyContent:'center'}}>
                          <Feather name={'check-square'} size={30}/>
                      </View>
                </View>
                
        );
    }
}