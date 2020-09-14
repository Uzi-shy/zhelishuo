import React, { Component } from 'react';
import { View, Text, TouchableOpacity, I18nManager, Image, FlatList } from 'react-native';
import Ioncions from 'react-native-vector-icons/Ionicons';





export default class weichuli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    toux: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=835401448,1403264908&fm=26&gp=0.jpg',
                    name: '小欣欣',
                },
                {
                    toux: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=835401448,1403264908&fm=26&gp=0.jpg',
                    name: '小欣欣',
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
            <View style={{ backgroundColor: '#E0E0E0', padding: 8, marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Image style={{ height: 50, width: 50, borderRadius: 400, marginRight: 10 }} source={{ uri: item.toux }} />
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}