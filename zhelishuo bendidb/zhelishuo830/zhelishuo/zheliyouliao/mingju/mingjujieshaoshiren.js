    import React,{Component} from 'react';
    import {View,Text,TextInput,TouchableWithoutFeedback,ScrollView,TouchableOpacity,Alert} from 'react-native';
    import Ionicons from"react-native-vector-icons/Ionicons";
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import AntDesign from 'react-native-vector-icons/AntDesign';
    
     export default class header  extends Component{
       
       
    
        render (){
            return(
                <View>
                    
    
    
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
                <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                    this.props.navigation.goBack()
                                }} />
                <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15}}>李白</Text>
                <TouchableWithoutFeedback style={{marginTop:15,marginRight:20}}>
                  <Ionicons name={'search'} size={30}  />
                </TouchableWithoutFeedback>
              </View>
    
    
    <View>
             
    
    
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
                <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}}  onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}}  onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              </View>
    
    </View>
    
    
    
    <View>
              
    
    
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
                <TouchableOpacity style={{flexDirection:'row',marginTop:5}}  onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}} >越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}}  onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              </View>
    
    </View>
    
    
    <View>
              
    
    
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
                <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}}  onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              <View>
              <View style={{height:1.5,width:50,backgroundColor:'#4F4F4F'}} />
              <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
    this.props.navigation.navigate("名句");
    Alert.alert('ok')}}>
                <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>越中览古</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>越王勾践破吴归</Text>
                </TouchableOpacity>
              </View>
              </View>
    
    </View>
    
    
    
    
    
    
    
    
              </View>
    
            );
        }
     }