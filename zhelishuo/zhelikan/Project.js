import React from "react";
import styled from "styled-components";
import { Animated, TouchableWithoutFeedback, Dimensions, StatusBar, TouchableOpacity, ScrollView, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";



const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const tabBarHeight = 75;



class Project extends React.Component {
constructor(props){
    super(props);
}

    state = {
        cardWidth: new Animated.Value(300),
        cardHeight: new Animated.Value(400),
        titleTop: new Animated.Value(20),
        opacity: new Animated.Value(0),
        textHeight: new Animated.Value(60),
    };

    openCard = () => {

        if (!this.props.canOpen) return;

        Animated.spring(this.state.cardWidth, { toValue: screenWidth }).start();
        Animated.spring(this.state.cardHeight, { toValue: screenHeight - tabBarHeight }).start();
        Animated.spring(this.state.titleTop, { toValue: 40 }).start();
        Animated.timing(this.state.opacity, { toValue: 1 }).start();
        Animated.spring(this.state.textHeight, { toValue: 200 }).start();


        StatusBar.setHidden(true);
    }

    closeCard = () => {
        Animated.spring(this.state.cardWidth, { toValue: 315 }).start();
        Animated.spring(this.state.cardHeight, { toValue: 460 }).start();
        Animated.spring(this.state.titleTop, { toValue: 20 }).start();
        Animated.timing(this.state.opacity, { toValue: 0 }).start();
        Animated.spring(this.state.textHeight, { toValue: 100 }).start();
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.openCard}>
                <AnimatedContainer
                    style={{ width: this.state.cardWidth, height: this.state.cardHeight }}
                >

                    <Cover>
                        <Image source={{uri:this.props.image[0]}} />
                        <AnimatedTitle style={{ top: this.state.titleTop }}
                        >{this.props.title}</AnimatedTitle>
                        <Author>作者：{this.props.author}</Author>
                    </Cover>
                    
                        <AnimatedText style={{ height: this.state.textHeight }}
                        >{this.props.text}</AnimatedText>

                    <TouchableOpacity style={{
                        position: "absolute", top: 20, right: 20
                    }}
                        onPress={this.closeCard}>
                        <AnimatedCloseView style={{ opacity: this.state.opacity }}>
                            <AntDesign name="closecircleo" size={32} />

                        </AnimatedCloseView>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        position: "absolute", bottom: 60, right: 120
                    }}
                        onPress={this.closeCard}>
                        <AnimatedCloseView style={{ opacity: this.state.opacity }}>
                            <SimpleLineIcons name={'user-follow'} size={32} />
                        </AnimatedCloseView>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: "absolute", bottom: 60, right: 170
                    }}
                    onPress={()=>{
                        this.props.navigation.navigate("热门细节",
                        {
                            username: this.props.author,
                            toux: this.props.toux,
                            name: this.props.author,
                            pick: this.props.image,
                            words: this.props.text,
                            title: this.props.title,
                            pinglun:this.props.pinglun,
                            dianzhan:this.props.dianzhan,
                            zhuanfa:this.props.zhuanfa,
                          });
                    }}>
                        <AnimatedCloseView style={{ opacity: this.state.opacity }}>
                            <Feather name={'more-horizontal'} size={32} />
                        </AnimatedCloseView>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: "absolute", bottom: 60, right: 70
                    }}
                        onPress={this.closeCard}>
                        <AnimatedCloseView style={{ opacity: this.state.opacity }}>
                            <Feather name={'message-square'} size={32} />
                        </AnimatedCloseView>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: "absolute", bottom: 60, right: 20
                    }}
                        onPress={this.closeCard}>
                        <AnimatedCloseView style={{ opacity: this.state.opacity }}>
                            <AntDesign name={'like2'} size={32} />
                        </AnimatedCloseView>
                    </TouchableOpacity>

                </AnimatedContainer>
            </TouchableWithoutFeedback>
        );
    }
}

export default Project;

const CloseView = styled.View`
   width:32px;
   height:32px;
   background:white;
   border-radius:16px;
   justify-content:center;
   align-items:center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView)

const Container = styled.View`
    width:315px;
    height:460px;
    border-radius:14px;
    background-color:white;
    box-shadow:0 10px 20px rgba(0,0,0,0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height:290px;
  border-top-left-radius:14px;
  border-top-right-radius:14px;
  overflow: hidden;
`;

const Image = styled.Image`
    width:100%;
    height:290px;
`;

const Title = styled.Text`
 position: absolute;
 top:20px;
 left:20px;
 font-size:24px;
 font-weight:bold;
 color:white;
 width:300px;
`;


const AnimatedTitle = Animated.createAnimatedComponent(Title)

const Author = styled.Text`
  position:absolute;
  bottom:20px;
  left:20px;
  color:rgba(255,255,255,0.8);
  font-size:15px;
  font-weight:600;
  text-transform:uppercase;
`;

const Text = styled.Text`
  font-size:17px;
  margin:20px;
  line-height:20px;
  color:#3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);