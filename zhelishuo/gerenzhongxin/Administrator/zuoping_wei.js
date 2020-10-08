import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, View, StyleSheet,
    TouchableOpacity, ActivityIndicator, Image, ScrollView, Alert,RefreshControl,
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
const { width, height } = Dimensions.get('window');
// import MasonryList from "@appandflow/masonry-list';"

const itemWidth = (width - 70) / 2;






export default class ContentWaterfall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true,
            isdata:[],

        }
    }




    _onRefresh() {

        if (this.state.refreshing ==false) {
            this._updateState( true);
            this.componentDidMount();
    
            //2秒后结束刷新
            setTimeout( ()=>{
                this._updateState( false);
                this.componentDidMount();
            }, 2000)
    
        }
    }
    
    //更新State
    _updateState( refresh){
        this.setState({refreshing: refresh});
    }

    componentDidMount() {
        fetch('http://192.168.50.30:3000/zuoping_wei',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => response.json())
            .then((json) => {
                this.setState({isdata:json.result});
                // zpwdata = json.result;
                console.log(this.state.isdata);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
              });

    };
    // componentDidMount = () => {
    //     this.onRefreshing();
    // }

    render() {
        const { isdata, isLoading } = this.state;

        return (
            <View>
                <ScrollView style={{ height: height - 180 }}>
                    <SafeAreaView style={styles.container}>
                        {isLoading ? <ActivityIndicator /> : (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={isdata}
                                bounces={true}
                                numColumns={2}
                                keyExtractor={({ id }, index) => id}
                                refreshControl={
                                    <RefreshControl
                                        tintColor={'red'}
                                        titleColor={'brown'}
                                        title={'正在刷新......'}
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}
                                    />
                                }
                                renderItem={({ item }) => (
                                    <View style={styles.item}>
                                        <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('查看作品审核',
                                {
                                    id:item._id,
                                    username:item.username,
                                    toux:item.gerenxx[0].toux.uri,
                                    name:item.gerenxx[0].name,
                                    pick:item.pick[0],
                                    words:item.words,
                                    title:item.title,

                                });
                            }}>
                                            <Image
                                                source={{ uri: item.pick[0] }}
                                                style={{ width: itemWidth, height: 140 }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 15, marginVertical: 5 }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image style={{ height: 25, width: 25, borderRadius: 400 }} source={{ uri: item.gerenxx[0].toux.uri }} />
                                                <Text>{item.gerenxx[0].name}</Text>
                                            </View>
                                            <View style={{ marginRight: 5 }}>
                                                <Feather name={'clock'} size={20} />
                                            </View>
                                        </View>
                                    </View>
                                )}

                            // refreshing={this.state.isLoading}
                            // onRefresh={() => {
                            //     this.loadData(); }}//下拉刷新加载数据
                            // getHeightForItem={this._getHeightForItem}
                            // refreshing = {this.state.refreshing}
                            // onRefresh = {this.onRefreshing}
                            // onEndReachedThreshold={0.5}
                            // onEndReached={this._onEndReached}
                            // keyExtractor={this._keyExtractor}
                            />
                        )}
                    </SafeAreaView>
                </ScrollView>
            </View>
        )


    }



    // _keyExtractor = (item, index) => {
    //     return item.text + index;
    // }




    // _renderItem = ({ item }) => {
    //     //   const itemHeight = this._getHeightForItem({item});
    //     return (
    //         <View style={styles.item}>
    //             <TouchableOpacity>
    //                 <Image
    //                     // source={{ uri: item.pick[0] }}
    //                     style={{ width: itemWidth, height: 140 }}
    //                 />
    //             </TouchableOpacity>
    //             <Text style={{ fontSize: 15, marginVertical: 5 }}>{item.title}</Text>
    //             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    //                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                     {/* <Image style={{ height: 25, width: 25, borderRadius: 400 }} source={{ uri: item.toux }} /> */}
    //                     <Text>{item.author}</Text>
    //                 </View>
    //                 <View style={{ marginRight: 5 }}>
    //                     <Feather name={'clock'} size={20} />
    //                 </View>
    //             </View>
    //         </View>
    //     )


    // }
    //     loadData() {
    //       this.setState({
    //           isLoading: true
    //       })

    //       //模拟网络请求
    //       setTimeout(() => {
    //           //把数据反转
    //           let newArray = [];
    //           for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
    //               newArray.push(this.state.dataArray[i]);
    //           }
    //           this.setState({
    //               isLoading: false,
    //               dataArray: newArray
    //           })

    //       }, 3000);
    //   }




    // _onPressContent = (item) => {
    //     this.props.navigation.navigate('ContentDetail', {item});
    // }

}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        margin: 10,

        backgroundColor: '#E0E0E0',
        padding: 7
    },
})