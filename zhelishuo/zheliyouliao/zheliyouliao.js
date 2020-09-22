import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,Image,

} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import F1 from './flastlist1';
import F2 from './flastlist2';
import F3 from './flatlist3';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ENTRIES1 = [
  {
    title: '“相约杭州 诗画江南”米·顾依达油画展',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://www.namoc.org/pictures/zlk/m/20101105_wklhjhyegydyhzpz_m.jpg',
  },
  {
    title: '解衣磅礴———钱瘦铁、桥本关雪交流回顾展',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://www.zjam.org.cn/SiteAdmin/Holding/Logo/20200723163026.jpg',
  },
  {
    title: '向史而新——浙江百年水彩画作品展',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://www.zjam.org.cn/SiteAdmin/Holding/Logo/20200731205542.jpg',
  },
  {
    title: '运河诗画展强势来袭！公益小天使“加盟”助力',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3539623675,3335480476&fm=26&gp=0.jpg',
  },
  {
    title: '水色情缘”金焕大运河诗画展',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597135588382&di=52c88a1cc6eda99f48597e15146fe8e6&imgtype=0&src=http%3A%2F%2Fwww.hqwhw.com%2Fhtml%2Fuploadfile%2F201810151804847.jpg',
  },
];

const {width: screenWidth} = Dimensions.get('window');

function MyCarousel({navigation}){
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (


    <View style={{marginBottom:60}}>
  
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:50,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
        <View></View>
        <Text style={{fontSize:22,fontWeight:'bold',alignItems:'center',marginTop:10,marginLeft:50}}>浙里有料</Text>
        <TouchableWithoutFeedback style={{marginTop:10,marginRight:20}} onPress={()=>{ navigation.navigate("搜索")}}>
          <Ionicons name={'search'} size={30}  />
        </TouchableWithoutFeedback>
      </View>

    <ScrollView style={{marginBottom:50}}>

    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text style={{fontSize:24,marginLeft:26,marginTop:15,marginBottom:10,
    textShadowRadius:2,
    textShadowColor:'grey'
,textShadowOffset:{width:2,hegith:-2}}}>诗画艺术展</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("书画展")}}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth-90}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        autoplay={true}
                  loop={true}
                  autoplayDelay={400}
                  autoplayInterval={3000}
        hasParallaxImages={true}
        
      /></TouchableOpacity>

      <View style={{right:20,height:0.5,backgroundColor:'#7B7B7B',marginRight:30,marginTop:18}}/>
              <View style={{marginLeft:30, marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>诗人生平</Text>
      <TouchableWithoutFeedback style={{marginRight:20}} onPress={()=>{
        navigation.navigate("诗人生平查看更多");
        }}
      >
          <Text style={{fontSize:15}}>查看全部</Text>
      </TouchableWithoutFeedback>

      </View>

      <F1/>

      <View style={{marginLeft:30,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>名句介绍</Text>
      <TouchableWithoutFeedback style={{marginRight:20}} onPress={()=>{
        navigation.navigate("名句介绍查看更多");
        }}>
          <Text style={{fontSize:15}}>查看全部</Text>
      </TouchableWithoutFeedback>
      </View>
      <F2/>


      <View style={{marginLeft:30,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>画作评析</Text>
      <TouchableWithoutFeedback style={{marginRight:20}} onPress={()=>{
        navigation.navigate("画作评析查看更多");
        }}>
          <Text style={{fontSize:15}}>查看全部</Text>
      </TouchableWithoutFeedback>
      </View>
      <F3/>


    </View>
    <Text style={{marginLeft:30,fontSize:24,fontWeight:'bold'}}>更多模块</Text>
    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row",marginLeft:10,marginTop:10,marginBottom:20}}>
    

      <TouchableOpacity style={{marginLeft:20}}>
    <Image source={{uri:'http://121.196.27.141/img/a.jpg'}} style={{height:80 ,width:80,borderRadius:20,marginRight:15}}/>	
    <Text sty={{}}>诗画高考真题</Text>	
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft:20}}>
    <Image source={{uri:'http://121.196.27.141/img/a.jpg'}} style={{height:80 ,width:80,borderRadius:20,marginRight:15}}/>	
    <Text sty={{}}>诗画拼图游戏</Text>	
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft:20}}>
    <Image source={{uri:'http://121.196.27.141/img/a.jpg'}} style={{height:80 ,width:80,borderRadius:20,marginRight:15}}/>
    <Text sty={{}}>诗画麻将游戏</Text>		
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft:20}}>
    <Image source={{uri:'http://121.196.27.141/img/a.jpg'}} style={{height:80 ,width:80,borderRadius:20,marginRight:15}}/>		
    <Text sty={{}}>古风汉服商场</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft:20}}>
    <Image source={{uri:'http://121.196.27.141/img/a.jpg'}} style={{height:80 ,width:80,borderRadius:20,marginRight:15}}/>		
    <Text sty={{}}>古风美图鉴赏</Text>
      </TouchableOpacity>

      


    </ScrollView>
    </ScrollView>
    </View>
  );
};




export default MyCarousel;

const styles = StyleSheet.create({
  
  item: {
    width: screenWidth - 60,
    height: screenWidth -160,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});