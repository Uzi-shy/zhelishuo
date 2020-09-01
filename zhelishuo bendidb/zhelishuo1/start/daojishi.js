import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state={
            time: 3,
        }
    }
    
    componentWillMount(){
        //启动包含定时器的方法
        this.startTimer()
    }

    startTimer(){
        let timeChange;
        //关键在于用time取代state中的time，进行计算和判断，因为state中的time在render里不断刷新，但在方法中不会进行刷新
        let time = this.state.time;
        const clock = () => {
            if (time > 0) {
                //当time>0时执行更新方法
                time = time - 1;
                this.setState({
                    time: time,
                });
                console.log(time);
            } else {
                //当time=0时执行终止循环方法
                clearInterval(timeChange);
               //当倒计时时间=0时，进入项目，这里使用了路由跳转
                
            }
        };
        //每隔一秒执行一次clock方法
        timeChange = setInterval(clock,1000);
    }

    render(){

        return(
            <View style={styles.container}>
                   <TouchableOpacity 
                   style={{
                       borderRadius: 2,
                       position: 'absolute',
                       right: 25,
                       top: 40,
                       justifyContent: 'center',
                       backgroundColor: 'rgba(225,225,225,0.5)',
                       width: 60,
                       height: 25,
                       alignItems: 'center'
                   }} 
                   onPress={()=>{
                       //点击‘跳过’按钮，同样可以实现进入项目的效果                       
                       this.props.navigation.navigate('DefaultTab')
                   }}>
                       <Text style={{fontSize: 14, color: 'white'}}>跳过{this.state.time}s</Text>
                   </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#FF7F24',
    }
});