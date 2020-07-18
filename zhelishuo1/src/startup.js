import React, {Component} from 'react';
import { View, Text, Button,Image, ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; 
import BetterBanner from 'react-native-better-banner';

export default function startup({navigation}) {
//    navigationOptions = {
//     header: null,  //隐藏顶部导航栏
// };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flex:1}}>
            <BetterBanner
                bannerComponents={[
                    <View >
                      <Image source={require('E:/ad/zhelishuo/img/春.jpg')} 
                        style={{width: '100%',height: '100%',}}/>
                    </View>,
                    <View >
                        <Image source={require('E:/ad/zhelishuo/img/夏.jpg')} 
                        style={{width: '100%',height: '100%',}}/>
                    </View>,
                    <View >
                        <Image source={require('E:/ad/zhelishuo/img/秋.jpg')} 
                        style={{width: '100%',height: '100%',}}/>
                    </View>,
                    <View >
                        <Image source={require('E:/ad/zhelishuo/img/冬.jpg')} 
                        style={{width: '100%',height: '100%',}}/>
                    </View>,
                    
                
                    <View >
                    
                       <ImageBackground 
                       
                       source={require('E:/ad/zhelishuo/img/蓝色小山.jpg')} 
                        style={{width: '100%',height: '100%',}}>
                          <View style={{
                            flex:1, 
                            top:580,
                            width: 100,
                            height: 100,
                            left:150 
                            }}>
                        {/* <Button
                         title="开始体验"
                         onPress={() => {
                         this.props.navigation.dispatch(StackActions.reset({
                               index: 0,
                               actions: [
                               NavigationActions.navigate({ routeName: 'MyModal' })
                              ],
                          }))
                          }}/> */}
                          <Button
        onPress={() =>navigation.navigate('Appp')}
        title="打开--浙里说"
      />
                            </View>
                       </ImageBackground>
                    </View>,
                ]}
                
                scrollInterval={10000}
                bannerHeight={660}

            />
            
        </View>



      
      
      </View>
    );
  
}