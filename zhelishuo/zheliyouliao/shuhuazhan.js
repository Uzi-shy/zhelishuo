import React, { UseState } from 'react';
import { ScrollView, Image, FlatList, StyleSheet, Text, View, Button, Alert, TouchableNativeFeedback, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//显示函数
// export default function show(){
//   return(
//     <View>
//   <Image source={require('./img/钢铁侠.jpg')} />
//   </View>
//   )
// }

//钩子
// const[ismoviename,setmoviename]=useState(" ");
// const[ismovietime,setmovietime]=useState(" ");
// const[ismoviebt,setmoviebt]=useState(true);


//模拟数据
const movieclass = [
    {
        title: "书画展1",
        year: "2015",
        posters: { thumbnail: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1851677674,942728091&fm=26&gp=0.jpg' }
    },
    {
        title: "书画展2",
        year: "2019",
        posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618411815&di=3d45d7737fe8bb4d70b057f8de0cc27f&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fent_spider%2Fdci_2013%2F06%2Fc1aa87e3bfaaabdb359da494e7da23f1.jpg' }
    },
    {
        title: "书画展3",
        year: "2020",
        posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618478624&di=3c711560ef9594a6bd8207c62cf13f86&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fbaike%2Fg%3D0%3Bw%3D268%2Fsign%3D5c0b09c5d762853582e0d72ae7d244f0%2F8718367adab44aede928cdd3b11c8701a18bfba7.jpg' }
    }

];
// onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}
//渲染函数
export default function render({ navigation }) {
    const movie1 = movieclass[0];
    const movie2 = movieclass[1];
    const movie3 = movieclass[2];

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", height: 80, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 10 }}>
                <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                    navigation.goBack()
                }} />
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'yegenyou', marginTop: 15, marginLeft: 150 }}>书画展</Text>
                </View>
            </View>
            <ScrollView style={{height:600}}>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <View style={styles.container}>
                        
                        <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
                        <Image source={{ uri: movie3.posters.thumbnail }} style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{movie3.title}</Text>
                            <Text style={styles.year}>{movie3.year}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        
                        <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
                        <Image source={{ uri: movie3.posters.thumbnail }} style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{movie3.title}</Text>
                            <Text style={styles.year}>{movie3.year}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.container}>
                        
                        <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
                        <Image source={{ uri: movie3.posters.thumbnail }} style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{movie3.title}</Text>
                            <Text style={styles.year}>{movie3.year}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    



                </View>
            </ScrollView>
        </View>
    );
}

//组件样式
const styles = StyleSheet.create({


    rightContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    thumbnail: {
        width: 60,
        height: 90
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    }
});

//长列表
// export default App(){
//   return(
//     render();
//   )
// }
