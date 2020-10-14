import React, {Component} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  Alert
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const {width,height} =Dimensions.get("window")
 
   
  export default  class Poet extends Component{
      constructor(props){
          super(props);
          this.state={
              
          Aich :[
    {
      picture:'http://121.196.27.141/img/zheliyouliao/画作/李嵩《观潮图》.jpg',
      person:'《观潮图》',
      introduce:'李嵩——中国南宋画家，钱塘（今浙江杭州）人',
    },
    {
      picture:'http://121.196.27.141/img/zheliyouliao/画作/林椿《梅竹寒禽图》.jpg',
      person:'《梅竹寒禽图》',
      introduce:'林椿——南宋钱塘（今浙江杭州）人',
    },
    {
      picture:'http://121.196.27.141/img/zheliyouliao/画作/马麟《秉烛夜游》.jpg',
      person:'《秉烛夜游》',
      introduce:'马麟——钱塘（今浙江杭州）人',
    },
],

GaGa:[
  {
  picture:'http://121.196.27.141/img/zheliyouliao/画作/钱选《折枝桃花》.jpg',
  person:'《折枝桃花》',
  introduce:'钱选——湖州（今浙江吴兴）人',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/画作/孙位《高逸图》.jpg',
  person:'《高逸图》',
  introduce:'孙位——会稽（今浙江绍兴）人',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/画作/夏圭《西湖柳艇》.jpg',
  person:'《西湖柳艇》',
  introduce:'夏圭——临安（今浙江杭州）人',
}
],
YoYo:[
  {
  picture:'http://121.196.27.141/img/zheliyouliao/画作/刘松年《攆茶图》.jpg',
  person:'《攆茶图》',
  introduce:'刘松年——浙江省金华市汤溪镇宅口人',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/画作/马和之《小雅•鹿鸣之什图》.jpg',
  person:'《小雅•鹿鸣之什图》',
  introduce:'马和之——钱塘 （今浙江杭州）人',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/画作/燕文贵《江山楼观图》山水画.jpg',
  person:'《江山楼观图》',
  introduce:'燕文贵——吴兴（今浙江湖州）人',
}
],







Lucy:[
    {
      picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597763682228&di=63122288604b93435fe6c08210f835bc&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F10%2F22%2F5bd587ce2d7f79a1%2521400x400_big.jpg',
      poem:'会当凌绝顶，一览众山小。',
      theme:'《望岳》———【唐】杜甫',
    },
    {
      picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597763724163&di=df12a2a677de2614dc3d64c0ad3413de&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201812%2F27%2Ffc42f83086.jpg',
      poem:'君不见黄河之水天上来，奔流到海不复还。',
      theme:'《将进酒》———【唐】李白',
    },
    {
      picture:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=442163808,1029272987&fm=26&gp=0.jpg',
      poem:'在天愿做比翼鸟，在地愿为连理枝。',
      theme:'《长恨歌》———【唐】白居易',
    },
],

MoMo:[
  {
    picture:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3779105826,724055153&fm=26&gp=0.jpg',
    poem:'此情无计可消除，才下眉头，又上心头。',
    theme:'《将进酒》———【宋】李清照',
  },
  {
    picture:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1548414248,1875484623&fm=26&gp=0.jpg',
    poem:'大漠孤烟直,长河落日圆。',
    theme:'《使至塞上》———【唐】王维',
  },
  {
    picture:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1910410778,2847303826&fm=26&gp=0.jpg',
    poem:'竹外桃花三两枝，春江水暖鸭先知。',
    theme:'《惠崇春江晚景》———【宋】苏轼',
  }
],
NaNa:[
  {
    picture:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=843553978,445159177&fm=26&gp=0.jpg',
    poem:'洛阳亲友如相问，一片冰心在玉壶。',
    theme:'《芙蓉楼送辛渐》———【唐】王昌龄',
  },
  {
    picture:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3273735525,1672395789&fm=15&gp=0.jpg',
    poem:'春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    theme:'《春晓》———【唐】孟浩然',
  },
  {
    picture:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1083079680,2890369520&fm=26&gp=0.jpg',
    poem:'与君离别意，同是宦游人。',
    theme:'《送杜少府之任蜀州》———【唐】王勃',
  }
]
}}

 renderAich(){
      return(
      <FlatList 
      data={this.state.Aich}
      keyExtractor={(item,index)=>index}
      renderItem={this.renderAichItem}
      />
      );
  }
   renderGaGa(){
    return(
    <FlatList 
    data={this.state.GaGa}
    keyExtractor={(item,index)=>index}
    renderItem={this.renderGaGaItem}
    />
    );
}
renderYoYo(){
  return(
  <FlatList 
  data={this.state.YoYo}
  keyExtractor={(item,index)=>index}
  renderItem={this.renderYoYoItem}
  />
  );
}

 


  renderLucy(){
     return(
     <FlatList 
     data={this.state.Lucy}
     keyExtractor={(item,index)=>index}
     renderItem={this.renderLucyItem}
     />
    );}

 renderMoMo(){
        return(
            <FlatList 
            data={this.state.MoMo}
            keyExtractor={(item,index)=>index}
            renderItem={this.renderMoMoItem}
            
            />
             );}

             renderNaNa(){
              return(
                  <FlatList 
                  data={this.state.NaNa}
                  keyExtractor={(item,index)=>index}
                  renderItem={this.renderNaNaItem}
                  
                  />
                   );}


      

 
  renderAichItem=({item})=>{
    return(
<View> 
  {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.person}</Text>

          <Text style={{fontSize:13}} numberOfLines={1}>{item.introduce}</Text>
      
        </View>
         
      </TouchableOpacity>

</View>
    );
  }
  renderGaGaItem=({item})=>{
    return(
      <View>
            {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.person}</Text>

          <Text style={{fontSize:13}} numberOfLines={1}>{item.introduce}</Text>
      
        </View>
         
      </TouchableOpacity>
   
       </View>
    );
  }
  renderYoYoItem=({item})=>{
    return(
      <View> 
       {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.person}</Text>

          <Text style={{fontSize:13}} numberOfLines={1}>{item.introduce}</Text>
       
        </View>
         
      </TouchableOpacity>
     
      </View>
    );
  }




 

  renderLucyItem=({item})=>{
    return(
      <View>
        {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.poem}</Text>
          <Text style={{fontSize:13}} numberOfLines={1}>{item.theme}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
  renderMoMoItem=({item})=>{
    return(
      <View>
        {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.poem}</Text>
          <Text style={{fontSize:13}} numberOfLines={1}>{item.theme}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
  renderNaNaItem=({item})=>{
    return(
      <View>
        {/* <View style={{height:0.5,backgroundColor:'#7B7B7B',marginTop:7,marginLeft:80,marginRight:80}}/> */}
      <TouchableOpacity style={{flexDirection:'row',marginTop:15,marginRight:20}}>
        <Image source={{uri:item.picture}} style={{height:70,width:70,borderRadius:10,marginRight:12}}/>
        {/* <View style={{height:40,width:40,borderRadius:10,marginRight:10,backgroundColor:'#9D9D9D'}} ></View> */}
        <View style={{width:220,justifyContent:'center'}} >
    <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}} numberOfLines={1}>{item.poem}</Text>
          <Text style={{fontSize:13}} numberOfLines={1}>{item.theme}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
 
  render(){
      return(
         
          <View style={{marginLeft:30}}>
            
          
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {this.renderAich()}
              {this.renderGaGa()}
              {this.renderYoYo()}
          </ScrollView>

<View style={{height:0.5,backgroundColor:'#7B7B7B',marginRight:28,marginTop:10}}/>

          

      

          </View>
    
      )
  }
}