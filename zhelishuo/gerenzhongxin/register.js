import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  ImageBackground,
  Keyboard
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width,height} = Dimensions.get("window");






export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchPass: '',
      searchPassagain:'',//
      data: '',//
    }
  }
tapBackground=()=>{
    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_view}>


        <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{fontFamily:"yegenyou", color: "#000", fontSize: 30 }}>注册</Text>
                        <View>
                            {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
                        </View>
                    </View>
        </View>





        {/* 登陆框 */}
        <ImageBackground source={require('../img/杜甫.jpg')} style={{height:height-100,width:width}}>
      <TouchableWithoutFeedback onPress={this.tapBackground}>
        <View   style={{width:"90%",alignItems:'center',backgroundColor:"white",height:"65%",marginTop:20,marginHorizontal:20,borderRadius:20,elevation:10}}>
       


          <View style={[styles.inputBox]}>
                            <Text style={{ fontFamily:"yegenyou",marginLeft:27, fontSize: 20 }}>用户名</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 27, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='请输入账号'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ searchText: text });
                                    }} />
                            </View>
                        </View>



          <View style={[styles.inputBox]}>
                            <Text style={{ fontFamily:"yegenyou",marginLeft:27,  fontSize: 20 }}>密码</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 27, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.password}
                                    placeholder='请输入密码'
                                    placeholderTextColor='#999999'
                                    secureTextEntry={true}
                                    onChangeText={(text) => {
                                        this.setState({ searchPass: text });
                                    }} />
                            </View>
                        </View>




                        <View style={[styles.inputBox]}>
                            <Text style={{ fontFamily:"yegenyou",marginLeft:27,  fontSize: 20 }}>再次输入密码</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 27, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.password}
                                    placeholder='请确认密码'
                                    placeholderTextColor='#999999'
                                    secureTextEntry={true}
                                    onChangeText={(text) => {
                                        this.setState({ searchPassagain: text });
                                    }} />
                            </View>
                        </View>



          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if(this.state.searchPass==this.state.searchPassagain){
                Alert.alert('您输入的账号为：' + this.state.searchText
                + "您输入的密码为：" + this.state.searchPass)




              fetch('http://10.0.2.2:3000/insert', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  c: "test",
                  a: this.state.searchText,
                  b: this.state.searchPass
                })
              })
              }
              else if (this.state.searchPass!=this.state.searchPassagain) {

                Alert.alert('您输入的密码为：' + this.state.searchPass
                + "您输入的重复密码为：" + this.state.searchPassagain+
                "两次输入不同，请重新输入")
              }
              
              // this.setState({searchPass:'' });
              // this.setState({searchText:''});
              // this.setState({searchPassagain:''});
              
            }}>
              <Text style={{ fontSize: 20, color: "#fff" }}>注册</Text>
              
            </TouchableOpacity>
      

      </View> 
     </TouchableWithoutFeedback>    
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title_view: {
    height:90,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '6%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",

},
imgBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
},

  password: {
    width: "75%",
    backgroundColor: "#EFEFEF",
    marginTop: 7,
    marginBottom:10,
    marginLeft: 10,
    borderRadius:10
  },
  input: {
    width:"75%",
    backgroundColor: "#EFEFEF",
    marginTop: 7,
    marginBottom:10,
    marginLeft: 10,
    borderRadius:10
  },

  button: {

    height:50,
        width:width-80,
        alignItems: "center",

        backgroundColor: "#333",
        padding: 10,
        marginTop: 60,
        borderRadius: 10,

  },
  inputBox: {
    height:60,
    width: width,

    borderRadius: 3,
    marginTop: 20,
}

});