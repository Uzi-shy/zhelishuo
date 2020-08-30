import React, {Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListFooterComponent,
  TouchableNativeFeedback,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default class wofabu extends Component{
    
           

    _renderItem = (item) => {
		return (
			<TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,padding:5,alignItems:'center'}} >
				<Image source={{uri:item.item.toux}} style={{height:40 ,width:40,borderRadius:400,marginRight:15}}/>		
					<Text style={{fontSize:20}}>{item.item.user}</Text>
                    <TouchableOpacity style={{height:30,width:60,backgroundColor:'#7B7B7B',marginLeft:200,borderRadius:18,justifyContent:'center',alignItems:'center',padding:5}} >
                        <Text style={{fontSize:20,color:'white'}}>关注</Text>
                    </TouchableOpacity>
			</TouchableOpacity>
		)
    };

    _separator = () => {
		return <View style={{height:0.5, width:'100%',backgroundColor:'#7b7b7b'}}/>
	};

    render(){
        const data=[

            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
            },
            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1671636840,3657579619&fm=26&gp=0.jpg',
                user:'小欣欣',
            },
            {
                toux:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3454843111,408121797&fm=26&gp=0.jpg',
                user:'小红红',
            },
            {
                toux:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3841377910,1249074638&fm=26&gp=0.jpg',
                user:'小帆帆',
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
                user:'小闻闻',
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1213264833,772204269&fm=26&gp=0.jpg',
                user:'小小小',
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
                user:'小闻闻',
            },
            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
            },
        ]
    
        return(

            <ImageBackground source={require('../img/杜甫.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}>
                <View ItemSeparatorComponent={this._separator}/>
				<View style={{}}>
					<FlatList
						ItemSeparatorComponent={this._separator}
						renderItem={this._renderItem}
						data={data}
					>
					</FlatList>
				</View>


                
            </ImageBackground>
        )
    }


}