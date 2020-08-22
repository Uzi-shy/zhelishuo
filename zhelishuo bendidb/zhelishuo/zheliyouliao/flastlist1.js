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
      picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748497618&di=b76e6ce660a9d884dd7d8ccf26632e79&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F24%2F20170324225828_8CAWJ.jpeg',
      person:'杜甫———诗圣的一生',
      introduce:'字子美，号少陵野老，世称“杜工部”。',
    },
    {
      picture:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3247279750,3143054548&fm=26&gp=0.jpg',
      person:'李白———诗仙的浪漫主义',
      introduce:'字太白，号青莲居士。',
    },
    {
      picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748571790&di=28bfb4c62af3a38e39ccde36e9da021a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F11%2F20170511193924_mhwVE.jpeg',
      person:'白居易———现实主义',
      introduce:'字乐天，晚年号香山居士。',
    },
],

GaGa:[
  {
  picture:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1987117079,1609681391&fm=26&gp=0.jpg',
  person:'李清照———婉约词派',
  introduce:'号易安居士，齐州济南（今山东省济南市章丘区）人。宋代女词人，婉约词派代表，有“千古第一才女”之称。李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与丈夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。论词强调协律，崇尚典雅，提出词“别是一家”之说，反对以作诗文之法作词。能诗，留存不多，部分篇章感时咏史，情辞慷慨，与其词风不同。',
},
{
  picture:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4294645058,1408623851&fm=26&gp=0.jpg',
  person:'王维———有“诗佛”之称',
  introduce:'字摩诘，号摩诘居士。',
},
{
  picture:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2888165445,572368460&fm=26&gp=0.jpg',
  person:'苏轼———世称苏东坡、苏仙',
  introduce:'字子瞻、和仲，号铁冠道人、东坡居士。',
}
],
YoYo:[
  {
  picture:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2961653525,4093718996&fm=26&gp=0.jpg',
  person:'王昌龄———七绝圣手',
  introduce:'字少伯，著名边塞诗人。',
},
{
  picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=105041653,3293125019&fm=26&gp=0.jpg',
  person:'孟浩然———山水田园派',
  introduce:'字浩然，号孟山人',
},
{
  picture:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3891089134,1907640935&fm=26&gp=0.jpg',
  person:'王勃———与杨炯、卢照邻、骆宾王共称“初唐四杰”',
  introduce:'字子安',
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