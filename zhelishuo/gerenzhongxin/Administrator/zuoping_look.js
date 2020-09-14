import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Alert, Image, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BetterBanner from 'react-native-better-banner';
// import  { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ButtonGroup } from 'react-native-elements';



export default class yummy extends Component {
    constructor(props) {
        super(props);


        this.state = {
            id:'',
            username:"",
            picdata: [
                {
                    uri:""
                }
            ]
        }
    }


    //审核通过 
    _onClickzpsh_get () {
        const{navigation,route}=this.props;

        // this.setState({id:route.params.id});
        // this.setState({username:route.params.username});
        // console.log(this.state.id);
        // console.log(this.state.username);
        fetch('http://10.0.2.2:3000/sh_get', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:route.params.id,
                username: route.params.username,
                title:route.params.title,
            })
        })

    };

    

    

    render() {
        const{navigation,route}=this.props;

        // this.setState({id:route.params.id});
        // this.setState({username:route.params.username});
        // let picData = this.state.picdata;
        // let len = picData.length;
        // for (let i = 0; i < len; i++) {
        //     picData[i]="uri:"+picData[i];
        // }
            
        return (

            <View style={{ flex: 1 }}  >






                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 65, width: '100%', alignItems: 'center', backgroundColor: 'white' }}>

                    <View style={{ flexDirection: 'row', marginLeft: 25,marginTop: 15  }}>
                        <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                            this.props.navigation.goBack();
                        }} />
                        <TouchableOpacity style={{marginTop: -5 ,marginLeft: 15 , width: 40, height: 40, borderRadius: 400 }}>
                            <Image source={{uri:route.params.toux}} style={{ width: 40, height: 40, borderRadius: 400 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 23, marginLeft: 10, alignItems: 'center' }}>{route.params.name}</Text>
                    </View>

                    <View>
                    </View>




                </View>






                <View style={{ flex: 1, marginBottom: 40 }}>
                    <ScrollView   >

                        <BetterBanner
                            bannerImages={
                                [{uri:route.params.pick}]
                            }
                            onPress={(index) => alert('you pressed index is : ' + index)}
                            isSeamlessScroll={true}
                            isAutoScroll={false}
                            indicatorGroupPosition={'center'}
                            bannerTitles={["one ", "two", "three", "four"]}
                            indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
                        />
                        <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 17, padding: 13 }}>{route.params.words}</Text>



                        </View>





                    </ScrollView>
                    <View style={{ bottom: 15, position: "absolute", flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>



                        <TouchableOpacity style={{
                             width: 70, height: 30, 
                             borderRadius: 20, borderColor: 'grey', 
                             borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                              marginRight: 30, padding: 5 }}
                              onPress={() => {
                                  this._onClickzpsh_get();
                                this.props.navigation.goBack();
                            }}>
                            <Text>审核通过</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 70, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30, padding: 5 }}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Text>回炉重造</Text>
                        </TouchableOpacity>
                    </View>
                </View>















            </View>

        );
    }
} 