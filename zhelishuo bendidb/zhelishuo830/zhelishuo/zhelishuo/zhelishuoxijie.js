import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Alert, Image, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BetterBanner from 'react-native-better-banner';


export default class yummy extends Component {

  render() {
    return (

      <View style={{}} >





        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 65, width: '100%', alignItems: 'center', backgroundColor: 'white' }}>

          <View style={{ flexDirection: 'row', marginLeft: 15 }}>
            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 400 }}>
              <Image source={require('../img/拉拉吃饼干.png')} style={{ width: 40, height: 40, borderRadius: 400 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 23, marginLeft: 10, alignItems: 'center' }}>Aich_xx</Text>
          </View>

          <View>
          </View>

          <TouchableOpacity style={{ width: 60, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, padding: 5 }}>
            <Text>已关注</Text>
          </TouchableOpacity>


        </View>






        <View>
          <ScrollView style={{ height: 520 }}>

            <BetterBanner
              bannerImages={[
                { uri: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=68517899,3697388917&fm=26&gp=0.jpg" },
                { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1975170490,4218500056&fm=26&gp=0.jpg" },
                { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2627232186,404872462&fm=26&gp=0.jpg" },
                { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031801964,3689772950&fm=26&gp=0.jpg" },
              ]}
              onPress={(index) => alert('you pressed index is : ' + index)}
              isSeamlessScroll={true}
              isAutoScroll={false}
              indicatorGroupPosition={'center'}
              bannerTitles={["one ", "two", "three", "four"]}
              indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
            />
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 17, padding: 13 }}>星黛露，米奇的玩偶-迪士尼小熊达菲的好朋友之一。在迪士尼故事里，星黛露是一只紫色的兔子，她和米奇的玩偶达菲熊相遇后，星黛露告诉达菲：她的梦想是成为百老汇舞蹈家，并和他分享“追随梦想”的意义。2018年3月8日加入上海迪士尼度假区。</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                <Text>08-10</Text>
                <View>
                </View>
                <TouchableOpacity style={{ width: 60, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, padding: 5 }}>
                  <Text>不喜欢</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5, marginTop: 20, marginBottom: 20 }} />
              <Text>共45条评论</Text>

              <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }} >
                <Image source={require('../img/拉拉吃饼干.png')} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
                <TextInput
                  style={{ height: 30, width: 300, borderRadius: 20, padding: 5, backgroundColor: '#d0d0d0' }}
                  placeholder='说点什么'
                  placeholderTextColor='#5B5B5B'
                />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image source={require('../img/古风头像男2.jpg')} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View>
                      <Text style={{ fontSize: 15, color: '#4F4F4F' }}>小黄</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17 }}>死变态</Text>
                        <Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>08-10</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View></View>
                <View >
                  <TouchableOpacity style={{}}>
                    <Ionicons name={'md-heart-outline'} size={20} />
                    <Text >16</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ height: 0.3, width: "100%", backgroundColor: '#BEBEBE', marginBottom: 10, marginTop: 10 }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View>
                      <Text style={{ fontSize: 15, color: '#4F4F4F' }}>小欣</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17 }}>小太阳</Text>
                        <Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>08-10</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View></View>
                <View >
                  <TouchableOpacity style={{}}>
                    <Ionicons name={'md-heart-outline'} size={20} />
                    <Text >56</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ height: 0.3, width: "100%", backgroundColor: '#BEBEBE', marginBottom: 10, marginTop: 10 }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image source={require('../img/拉拉吃瓜.jpg')} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View>
                      <Text style={{ fontSize: 15, color: '#4F4F4F' }}>牛逼克拉斯</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17 }}>djhdbawkubjdjkbd</Text>
                        <Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>08-10</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View></View>
                <View >
                  <TouchableOpacity style={{}}>
                    <Ionicons name={'md-heart-outline'} size={20} />
                    <Text >38</Text>
                  </TouchableOpacity>
                </View>
              </View>


            </View>
            <Text ></Text>
            <Text ></Text>




          </ScrollView>
        </View>








        <View>
          <View style={{ backgroundColor:"white",position: 'absolute', bottom: 2, width: "100%" }}>
            <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", Bottom: 40 }}>


              <View style={{ flexDirection: 'row', padding: 10, }}>{/* 功能栏*/}
                <TouchableOpacity style={{ marginRight: 10 }}
                  onPress={() => {
                    { this.props.navigation.goBack(); }
                  }}>
                  <Ionicons name={'chevron-back-outline'} size={25} color={'#3C3C3C'} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                  <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
                    <Ionicons name={'md-heart-outline'} size={21} />
                  </TouchableOpacity>
                  <Text style={{ marginRight: 10 }}>888</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                  <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
                    <EvilIcons name={'comment'} size={27} />
                  </TouchableOpacity>
                  <Text style={{ marginRight: 10 }}>999</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                  <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
                    <AntDesign name={'staro'} size={20} />
                  </TouchableOpacity>
                  <Text>000</Text>
                </View>

              </View>


              <View style={{ flexDirection: 'row', padding: 10, marginRight: 10 }}>
                <View style={{ marginRight: 15 }}>
                  <TouchableWithoutFeedback
                    onPress={() => { Alert.alert('ok') }}>
                    <AntDesign name={'sharealt'} size={20} />
                  </TouchableWithoutFeedback>
                </View>
                <View style={{ marginRight: 10 }}>
                  <TouchableWithoutFeedback
                    onPress={() => { Alert.alert('ok') }}>
                    <Feather name={'more-horizontal'} size={20} />
                  </TouchableWithoutFeedback>
                </View>
              </View></View>

          </View>
        </View>






      </View>

    );
  }
} 