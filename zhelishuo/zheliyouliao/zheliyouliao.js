import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

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

const MyCarousel = props => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text style={{fontSize:22,fontFamily: 'yegenyou'}} >诗画艺术展</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        autoplay={true}
                  loop={true}
                  autoplayDelay={400}
                  autoplayInterval={3000}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 80,
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