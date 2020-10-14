import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert, Image,

} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import F1 from './flastlist1';
import F2 from './flastlist2';
import F3 from './flatlist3';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const ENTRIES1 = [
  {
    title: '秋蕊香——齐白石黄宾虹花鸟画展',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/秋.jpg',
  }, 
  {
    title: '“襟向弁峰开”范斌钟文刚书画展',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/范斌2.jpg',
  },
  {
    title: '“文心连社稷，翰墨颂小康”古越书画院迎国庆书画作品展',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆.png',
  },
  {
    title: '“知天命”杨力郡中国画小品展',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/杨力郡.jpg',
  },
  // {
  //   title: '“2020一万个太阳”大型公益画展',
  //   subtitle: 'Lorem ipsum dolor sit amet',
  //   illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/一万个太阳.jpg',
  // },
  {
    title: '“唐诗之路•诗画剡溪”浙江百年水彩画作品展',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/唐诗.jpg',
  },{
    title: '“歌颂祖国”抗疫书画作品展',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://121.196.27.141/img/zheliyouliao/书画展/歌颂祖国.png',
  },
];

const { width: screenWidth } = Dimensions.get('window');

function MyCarousel({ navigation }) {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
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


    <View style={{ marginBottom: 60 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 50, backgroundColor: 'white', elevation: 4 }}>
        <View>
          <TouchableWithoutFeedback style={{ justifyContent: 'flex-end', marginLeft: 10 }}
            onPress={() => {
              navigation.push("浙里有料黑夜模式");}}>
            <Feather name={"moon"} size={25} style={{ color: '#4F4F4F' }} />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ }}>
        <Text style={{ fontFamily: "youran",fontSize: 30}}>浙里有料</Text></View>
        <TouchableWithoutFeedback style={{  marginRight: 10 }} onPress={() => { navigation.navigate("搜索") }}>
          <Ionicons name={'search'} size={25} />
        </TouchableWithoutFeedback>
      </View>

      <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <TouchableOpacity onPress={goForward}>
            <Text style={{
              fontSize: 22, marginLeft: 26, marginTop: 15, marginBottom: 10,
              textShadowRadius: 2,
              textShadowColor: 'grey'
              , textShadowOffset: { width: 2, hegith: -2 }
            }}>诗画艺术展</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("书画展")
          }}>
            <Carousel
              ref={carouselRef}
              sliderWidth={screenWidth}
              sliderHeight={screenWidth - 90}
              itemWidth={screenWidth - 60}
              data={entries}
              renderItem={renderItem}
              autoplay={true}
              loop={true}
              autoplayDelay={400}
              autoplayInterval={3000}
              hasParallaxImages={true}

            /></TouchableOpacity>

          <View style={{ right: 20, height: 0.5, backgroundColor: '#7B7B7B', marginRight: 30, marginTop: 18 }} />
          <View style={{ marginLeft: 30, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>诗人生平</Text>
            <TouchableWithoutFeedback style={{ marginRight: 20 }} onPress={() => {
              navigation.navigate("诗人生平查看更多");
            }}
            >
              <Text style={{ fontSize: 15 }}>查看全部</Text>
            </TouchableWithoutFeedback>

          </View>

          <F1 />

          <View style={{ marginLeft: 30, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>名句介绍</Text>
            <TouchableWithoutFeedback style={{ marginRight: 20 }} onPress={() => {
              navigation.navigate("名句介绍查看更多");
            }}>
              <Text style={{ fontSize: 15 }}>查看全部</Text>
            </TouchableWithoutFeedback>
          </View>
          <F2 />


          <View style={{ marginLeft: 30, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>画作评析</Text>
            <TouchableWithoutFeedback style={{ marginRight: 20 }} onPress={() => {
              navigation.navigate("画作评析查看更多");
            }}>
              <Text style={{ fontSize: 15 }}>查看全部</Text>
            </TouchableWithoutFeedback>
          </View>
          <F3 />


        </View>
        <Text style={{ marginLeft: 30, fontSize: 22, fontWeight: 'bold' }}>更多模块</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginLeft: 10, marginTop: 10, marginBottom: 20 }}>


          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("高考真题");
          }}>
            <Image source={{ uri: 'http://121.196.27.141/img/zheliyouliao/卷中有诗.jpg' }} style={{ height: 80, width: 80, borderRadius: 20, marginRight: 15 }} />
            <Text style={{ marginTop: 10, marginLeft: 15,  }}>卷中有诗</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("拼图");
          }}>
            <Image source={{ uri: 'http://121.196.27.141/img/zheliyouliao/拼图成画.jpg' }} style={{ height: 80, width: 80, borderRadius: 20, marginRight: 15 }} />

            <Text style={{ marginTop: 10, marginLeft: 15,  }}>拼图成画</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("填空");
          }}>
            <Image source={{ uri: 'http://121.196.27.141/img/zheliyouliao/腹中有墨.jpg' }} style={{ height: 80, width: 80, borderRadius: 20, marginRight: 15 }} />
            <Text style={{ marginTop: 10, marginLeft: 15,  }}>腹中有墨</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("购物车");
          }}>
            <Image source={{ uri: 'http://121.196.27.141/img/zheliyouliao/汉服有购.jpg' }} style={{ height: 80, width: 80, borderRadius: 20, marginRight: 15 }} />
            <Text style={{ marginTop: 10, marginLeft: 15,  }}>汉服有购</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("vr");
          }}>
            <Image source={{ uri: 'http://121.196.27.141/img/zheliyouliao/古风鉴赏.jpg' }} style={{ height: 80, width: 80, borderRadius: 20, marginRight: 15 }}
            />
            <Text style={{ marginTop: 10, marginLeft: 15,  }}>古风鉴赏</Text>
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
    height: screenWidth - 160,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});