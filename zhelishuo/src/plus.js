import React, { Component } from "react";
import { StyleSheet, Text,TouchableWithoutFeedback, Button,View ,TextInput} from "react-native";
import { Switch } from "react-native-gesture-handler";



export default class extends Component{
    constructor(props) {
        super(props);
        this.state={value1:'',value2:''}
        this.label={false:'关',true:'开'}
        this.state={switch1Value:false}
        this.state={switch2Value:false}

    }

    toggleSwitch1=(value)=>{
      this.setState({switch1Value:value})}
  toggleSwitch2=(value)=>{
      this.setState({switch2Value:value})}
  render(){
  return(
      <View style ={styles.xx}>
      <View style={styles.xx1}>
          <Text style={{fontFamily:'hyjianti',fontSize:18,fontWeight:"bold",marginTop:5}}>在浙里说</Text>
      </View>


      <View style={styles.xx2}>
          <TouchableWithoutFeedback 
          activeOpacity={0.9}                    
           style={[styles.touchButton]}
           onPress={() => {
           alert('发布成功')
           }}>
          <Text style={styles.touchButtonText}>发布</Text>
          </TouchableWithoutFeedback>

      </View>

          <View style={styles.xx3}>
        <Button                    
             style={{backgroundColor:'grey',height:40,width:40}}
             onPress={() => {
             alert('OK')
             }}
           title="+添加图片（可无）"></Button></View>

<View style={styles.xx4}>
         <TextInput
         
          style={{height:80}}
          placeholder="标题（可无）"
          onChange={value1=> {
            this.setState({
              value1,});}}></TextInput>
         <TextInput
         style={{height:80}}
         placeholder="出处/作者（可无）"
         onChange={value2=>{
             this.setState({
                 value2,
             });
         }}></TextInput>
         </View>
         <View style={styles.container}>
             <Text>选择分类：</Text>


            <View style={{position:"absolute",left:220,flexDirection:'row',width:'100%'}}>
         <TouchableWithoutFeedback 
                                
             style={[styles.touchButton1]}
             onPress={() => {
             alert('OK')
             }}>
                  <View style={styles.touchable1}>
            <Text style={styles.touchButtonText1}>诗歌</Text>
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback 
                                
             style={[styles.touchButton2]}
             onPress={() => {
             alert('OK')
             }}>
                  <View style={styles.touchable2}>
            <Text style={styles.touchButtonText2}>画作</Text>
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback 
                                
                                style={[styles.touchButton3]}
                                onPress={() => {
                                alert('OK')
                                }}>
                                     <View style={styles.touchable3}>
                               <Text style={styles.touchButtonText3}>作者</Text>
                               </View>
                               </TouchableWithoutFeedback>
                               <TouchableWithoutFeedback 
                                
             style={[styles.touchButton4]}
             onPress={() => {
             alert('OK')
             }}>
                  <View style={styles.touchable4}>
            <Text style={styles.touchButtonText4}>其他</Text>
            </View>
            </TouchableWithoutFeedback>
        
         </View>
         </View>




        <View style={styles.xx5}>
            <Text>我是原创:</Text>
            <Switch
            onValueChange={this.toggleSwitch1}
            value={this.state.switch1Value}></Switch>
            

        </View>
        <View style={styles.xx6}>
            <Text>私密</Text>
             <Switch 
            onValueChange={this.toggleSwitch2}
            value={this.state.switch2Value}></Switch>
            
       
        
        </View>  
        </View>  
    );
}}

const styles=StyleSheet.create({
  touchButtonText:{
      position:"absolute",
      right:0,
  },
  // touchButton:{
  //     height:10,
  //     width:15,
  // },
  touchable1:{
      flex: 0.1, borderColor: "black", borderWidth:1,marginRight:5
  },
  touchable2:{
      flex: 0.1, borderColor: "black", borderWidth:1,marginRight:5
  },
  touchable3:{
      flex: 0.1, borderColor: "black", borderWidth:1,marginRight:5
  },
  touchable4:{
      flex: 0.1, borderColor: "black", borderWidth:1,marginRight:5
  },
  xx:{
      height:"100%",
      alignItems:'center',
      marginBottom:30,
  },
  xx1:{
      
      marginTop:20
  },
  
  xx2:{
      width:"95%",
      flexDirection:'row',
      justifyContent:'space-between',
  },
  xx3:{
      
      marginTop:50,
      justifyContent:'center',
  },
  
container:{
    width:"95%",
    flexDirection:'row',
   justifyContent:'space-between',
    marginHorizontal:20,
  //   position:"absolute",
  //     right:0,

    
},
  
 
  xx4:{
      
      fontWeight:"bold",
      marginBottom:50,
      fontSize:30,
      marginVertical:50,
      alignItems:'center',
  },
  xx5:{
      width:"95%",
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',

  },
  xx6:{
      width:"95%",
      marginTop:10,
      flexDirection:"row",
      justifyContent:'space-between',
  }
  
})



