import React, { Component } from 'react';
import { View, Text, TouchableOpacity, I18nManager, Image, FlatList } from 'react-native';
import Ioncions from 'react-native-vector-icons/Ionicons';





export default class weichuli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    toux: 'http://121.196.27.141/img/baicha.jpg',
                    name: '白茶与风',
                },
                {
                    toux: 'http://121.196.27.141/img/girl.jpg',
                    name: '清茶与酒',
                },
            ]
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
            />
        )

    }



    renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#E0E0E0', padding: 8, marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center',borderRadius:10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Image style={{ height: 40, width: 40, borderRadius: 400, marginRight: 10 }} source={{ uri: item.toux }} />
                        <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}