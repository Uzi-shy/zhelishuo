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
    picture:'http://121.196.27.141/img/zheliyouliao/名句/己亥杂诗·其五.jpg',
    poem:'浩荡离愁白日斜，吟鞭东指即天涯。',
    theme:'《己亥杂诗》———【清】龚自珍',
  },
  {
    picture:'http://121.196.27.141/img/zheliyouliao/名句/咏蝉.jpg',
    poem:'西陆蝉声唱，南冠客思深。',
    theme:'《在狱咏蝉》———【唐】骆宾王',
  },
  {
    picture:'http://121.196.27.141/img/zheliyouliao/名句/卜算子·咏梅.jpg',
    poem:'驿外断桥边，寂寞开无主。',
    theme:'《卜算子·咏梅》———【宋】陆游',
  },
],

MoMo:[
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/咏柳.jpg',
  poem:'不知细叶谁裁出，二月春风似剪刀。',
  theme:'《咏柳》———【唐】贺知章',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/游子吟.jpg',
  poem:'谁言寸草心，报得三春晖。',
  theme:'《游子吟》———【唐】孟郊',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/别范安成.jpg',
  poem:'梦中不识路，何以慰相思？',
  theme:'《别范安成》———【南北朝】沈约',
}
],
NaNa:[
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/白梅.jpg',
  poem:'忽然一夜清香发，散作乾坤万里春。',
  theme:'《白梅》———【元】王冕',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/十二月十五夜.jpg',
  poem:'沉沉更鼓急，渐渐人声绝。',
  theme:'《十二月十五夜》———【清】袁枚',
},
{
  picture:'http://121.196.27.141/img/zheliyouliao/名句/观书.jpg',
  poem:'金鞍玉勒寻芳客，未信我庐别有春。',
  theme:'《观书》———【明】于谦',
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
         
          <View style={{marginHorizontal:15,marginBottom:5}}>
            

      <ScrollView
              showsVerticalScrollIndicator={false}>
              {this.renderLucy()}
              {this.renderMoMo()}
              {this.renderNaNa()}
          </ScrollView>

          </View>
    
      )
  }
}