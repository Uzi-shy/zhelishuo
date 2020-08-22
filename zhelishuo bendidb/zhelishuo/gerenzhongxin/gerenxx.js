import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    ImageBackground,
    Keyboard,
    PanResponder

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RadioGroup,RadioButton} from 'react-native-flexi-radio-button';
import DatePicker from "react-native-datepicker";
// import CityList from "./cityList";
// import AddressSelect from "./AddressSelect";
// import {ReactNavComponent, Widget} from 'rn-yunxi'
const {height,width}=Dimensions.get('window')

export default class  gerenxx extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      });
    constructor(props){
              super(props);
             this.state = {
                   text: '',
                   data:'',
                   time:'20:00',
                   datatime:'2016-05-05 20:00',
                   datatime1:'2019-05-05 20:00'
               };
               this.onSelect = this.onSelect.bind(this)
         }
       
             onSelect(index, value){
             this.setState({
               text: `Selected index: ${index} , value: ${value}`
               })
          }


        //   transitionTime = () => {
        //     let strtime = this.state.date;
        //     let date = new Date(strtime);
        //     let time = date.valueOf();
        //     console.log(this.state.date);//这里得到的时间格式是组件中定义的样式
        //     console.log('转换后的时间戳是：' + time);
        //   };
        componentWillMount() {
            this._panResponder = PanResponder.create({
              onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
              onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
              onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
              onPanResponderMove: (e) => console.log('onPanResponderMove'),
              onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
              onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
            });
          }
    render(){
        return(

            <View  >
                
           <View style={[styles.top]}>
                    
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{fontFamily:"yegenyou", color: "#000", fontSize: 30 }}>个人信息</Text>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={{width:"100%",height:"24%",justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                    <TouchableOpacity >
                        <Image source={require('../img/古风头像男.jpg')} style={{height:80,width:80,borderRadius:400,borderColor:'#BEBEBE',borderWidth:0.5}}/>
                    </TouchableOpacity>
                </View>


                <View style={{backgroundColor:'white',marginTop:20,padding:15}}>

                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                        <Text style={{fontSize:18}}>昵称</Text>
                        <Text style={{color:'red'}}>*</Text>
                        <TextInput style={{position:'absolute',marginLeft:90,width:280}}
                           placeholder="输入昵称"
                           multiline={false}
                           underlineColorAndroid="#7B7B7B"
                        ></TextInput>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:18}}>密码</Text>
                     <Text style={{color:'red'}}>*</Text>
                     <TextInput style={{position:'absolute',marginLeft:90,width:280}}
                           placeholder="6-20位，区分大小写"
                           multiline={false}
                           secureTextEntry={true}
                           underlineColorAndroid="#7B7B7B"
                        ></TextInput>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:8}}>
                        <Text style={{fontSize:18}}>性别</Text>
                        <Text style={{color:'red'}}>*</Text>
                 <RadioGroup style={{flexDirection:'row',marginLeft:40}}
                     onSelect = {(index, value) => this.onSelect(index, value)}
                     underlineColorAndroid="#7B7B7B"
                >
                     <RadioButton value={'item1'} >
                         <Text>男</Text>
                     </RadioButton>
                    <RadioButton value={'item2'}>
                        <Text>女</Text>
                     </RadioButton>
                </RadioGroup>
                    </View>
                    <Text style={{color:'red',fontSize:15,marginLeft:80,marginBottom:8}}>（注册成功后，不可修改）</Text>

                    
                    <View style={{height:0.5,width:280,marginLeft:90,backgroundColor:'#7B7B7B',marginTop:8,marginBottom:20}} />

                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                    <Text style={{fontSize:18}}>生日</Text>
                        <Text style={{color:'red'}}>*</Text>

                        <DatePicker
         style={{position:'absolute',marginLeft:90,width:280,}}
          date={this.state.date}
          mode="date"
          placeholder="请选择你的生日"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2020-01-01"
          confirmBtnText="确定"
          cancelBtnText="取消"
          onDateChange={(date) => {this.setState({date: date});}}
        />
                    </View>


                    

                    
                    {/* <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:18}}>所在地区</Text>
                     <Text style={{color:'red'}}>*</Text> */}
                     {/* <TextInput  style={{position:'absolute',marginLeft:90,width:280}}
                           placeholder="请选择所在地区"
                           multiline={false}
                           underlineColorAndroid="#7B7B7B"
                        ></TextInput> */}
                        {/* <View>
                            <CityList></CityList>
                        </View> */}

{/* <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}} onPress={() => this.openAddressSelect()}>
                <Text >地址选择</Text>
            </TouchableOpacity> */}
                    {/* </View> */}
                   
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:20,width:"100%",marginTop:20}}>
                    <TouchableOpacity style={{backgroundColor:'#6C6C6C',width:250,height:40,justifyContent:'center',alignItems:'center',borderRadius:40,borderColor:'#8E8E8E',elevation:4}}>
                        <Text style={{fontSize:20}}>保存</Text>
                    </TouchableOpacity>


                    </View>   

                    

           
        </View>
        );
    }
    // openAddressSelect() {

    //     Widget.Popup.show( // 这边使用自己封装的modal嵌套地址选择器
    //         <AddressSelect
    //             commitFun={(area) => this.onSelectArea(area)}
    //             dissmissFun={() => Widget.Popup.hide()}
    //         />,
    //         {
    //             animationType: 'slide-up', backgroundColor: '#00000000', onMaskClose: () => {
    //             Widget.Popup.hide()
    //         }
    //         })
    // }

    // onSelectArea = (area) => {
    //     Log(area)
    // }

}
const styles=StyleSheet.create({
    top: {
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      }
})