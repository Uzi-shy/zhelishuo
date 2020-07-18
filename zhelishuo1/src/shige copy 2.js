import React ,{UseState}from 'react';
import { ScrollView,Image, FlatList, StyleSheet, Text, View,Button, Alert} from 'react-native';

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
const movieclass= [
  {
    title: "钢铁侠",
    year: "2015",
    posters: { thumbnail: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1851677674,942728091&fm=26&gp=0.jpg' }
  },
  {
    title: "蜘蛛侠",
    year: "2019",
    posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618411815&di=3d45d7737fe8bb4d70b057f8de0cc27f&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fent_spider%2Fdci_2013%2F06%2Fc1aa87e3bfaaabdb359da494e7da23f1.jpg' }
  },
  {
    title: "蝙蝠侠",
    year: "2020",
    posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618478624&di=3c711560ef9594a6bd8207c62cf13f86&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fbaike%2Fg%3D0%3Bw%3D268%2Fsign%3D5c0b09c5d762853582e0d72ae7d244f0%2F8718367adab44aede928cdd3b11c8701a18bfba7.jpg' }
  }

];

//渲染函数
export default function render({navigation}) {
  const movie1 = movieclass[0];
  const movie2 = movieclass[1];
  const movie3 = movieclass[2];

  return (
    <ScrollView>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <View style={styles.container}>
      <Image source={{uri: movie1.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie1.title}</Text>
        <Text style={styles.year}>{movie1.year}</Text>
        <Button 
        onPress={()=>{         Alert.alert("进入订购系统");}}
         title="点此订购电影票"       
        />
      </View>
    </View>

    <View style={styles.container}>
      <Image source={{uri: movie2.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie2.title}</Text>
        <Text style={styles.year}>{movie2.year}</Text>
        <Button 
        onPress={()=>{         Alert.alert("进入订购系统");}}
         title="点此订购电影票"       
        />
      </View>
    </View>
  

    <View style={styles.container}>
      <Image source={{uri: movie3.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie3.title}</Text>
        <Text style={styles.year}>{movie3.year}</Text>
        <Button 
        onPress={()=>{         Alert.alert("进入订购系统");}}
         title="点此订购电影票"       
        />
      </View>
    </View> 
    <View style={styles.container}>
      <Image source={{uri: movie3.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie3.title}</Text>
        <Text style={styles.year}>{movie3.year}</Text>
        <Button 
        onPress={()=>{         Alert.alert("进入订购系统");}}
         title="点此订购电影票"       
        />
      </View>
    </View> 
    <View style={styles.container}>
      <Image source={{uri: movie3.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie3.title}</Text>
        <Text style={styles.year}>{movie3.year}</Text>
        <Button 
        onPress={()=>{    navigation.push('诗歌'),     Alert.alert("下一个相同页面");}}
         title="点此进入下一个页面"       
        />
      </View>
    </View> 

    <View style={styles.container}>
      <Image source={{uri: movie3.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie3.title}</Text>
        <Text style={styles.year}>{movie3.year}</Text>
        <Button 
        onPress={()=>{     navigation.goBack() ,   Alert.alert("返回上一个页面");}}
         title="点此回上一个"       
        />
      </View>
    </View> 

    <View style={styles.container}>
      <Image source={{uri: movie3.posters.thumbnail}} style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie3.title}</Text>
        <Text style={styles.year}>{movie3.year}</Text>
        <Button 
        onPress={()=>{     navigation.popToTop(),    Alert.alert("回起点");}}
         title="点此回到初始页面"       
        />
      </View>
    </View> 

  </View>
  </ScrollView>
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
    backgroundColor: '#F5FCCF',
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
