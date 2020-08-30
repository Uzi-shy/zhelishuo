import React,{Component} from 'react';
import {View,Text,TextInput,TouchableWithoutFeedback,ScrollView,TouchableOpacity,Alert,FlatList} from 'react-native';
import Ionicons from"react-native-vector-icons/Ionicons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

 export default class header  extends Component{
     constructor(props){
         super(props);
         this.state={
             Gzz:[
                 {
                 theme:'龚自珍',
                 name:'己亥杂诗',
                 verse:'浩荡离愁白日斜',
                 poet:'【清】龚自珍',
                 quanwen:'浩荡离愁白日斜，吟鞭东指即天涯。\n'+
                 '落红不是无情物，化作春泥更护花。\n',
                 yiwen:'浩浩荡荡的离别愁绪向着日落西斜的远处延伸，离开北京，马鞭向东一挥，感觉就是人在天涯一般。我辞官归乡，有如从枝头上掉下来的落花，但它却不是无情之物，化成了春天的泥土，还能起着培育下一代的作用。',
                 zhushi:'1.选自《龚自珍全集》'+
                 '浩荡离愁：离别京都的愁思浩如水波，也指作者心潮不平。'+
                 '2.浩荡：无限。'+
                 '3.吟鞭：人的马鞭。'+
                ' 4.东指：东方故里。'+
                ' 5.天涯：指离京都遥远。'+
                ' 6.落红：落花。花朵以红色者为尊贵，因此落花又称为落红。'+
                ' 7.花：比喻国家。'+
                ' 8.即：到',
                 shangxi:'这首诗是《己亥杂诗》的第五首，写诗人离京的感受。虽然载着“浩荡离愁”，却表示仍然要为国为民尽自己最后一份心力。诗的前两句抒情叙事，在无限感慨中表现出豪放洒脱的气概。一方面，离别是忧伤的，毕竟自己寓居京城多年，故友如云，往事如烟；另一方面，离别是轻松愉快的，毕竟自己逃出了令人桎梏的樊笼，可以回到外面的世界里另有一番作为。这样，离别的愁绪就和回归的喜悦交织在一起，既有“浩荡离愁”，又有“吟鞭东指”；既有白日西斜，又有广阔天涯。这两个画面相反相成，互为映衬，是诗人当日心境的真实写照。诗的后两句以落花为喻，表明自己的心志，在形象的比喻中，自然而然地融入议论。“化作春泥更护花”，诗人是这样说的，也是这样做的。鸦片战争爆发后，他多次给驻防上海的江西巡抚梁章钜写信，商讨国事，并希望参加他的幕府，献计献策。可惜诗人不久就死在丹阳书院（年仅50岁），无从实现他的社会理想了，令人“落红不是无情物，化作春泥更护花”诗人笔锋一转，由抒发离别之情转入抒发报国之志。并反用陆游的词“零落成泥碾作尘，只有香如故。”落红，本指脱离花枝的花，但是，并不是没有感情的东西，即使化做春泥，也甘愿培育美丽的春花成长。不为独香，而为护花。表现诗人虽然脱离官场，依然关心着国家的命运，不忘报国之志，以此来表达他至死仍牵挂国家的一腔热情；充分表达诗人的壮怀，成为传世这首小诗将政治抱负和个人志向融为一体，将抒情和议论有机结合，形象地表达了诗人复杂的情感。龚自珍论诗曾说“诗与人为一，人外无诗，诗外无人”（《书汤海秋诗集后》），他自己的创作就是最好的主旨：抒发了自己辞官司离京时的复杂感情，展示了诗人不畏挫折、不甘沉沦、始终要为国家效力的坚强性格和献身精神。全诗移情于物，形象贴切，构思巧妙，寓意深刻。',
                 picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2088036165,1692071709&fm=26&gp=0.jpg',
                },
             ],

             Lbw:[
                 {
                     theme:'骆宾王',
                     name:'易水送别',
                     verse:'此地别燕丹',
                     poet:'【唐】骆宾王',
                     quanwen:'此地别燕丹，壮士发冲冠。\n'+
                     '昔时人已没，今日水犹寒。\n',
                     yiwen:'想当年，荆轲和燕太子丹在此诀别，壮士悲歌壮气，怒发冲冠。昔时的侠士已经不在了，然而今天的易水还是那样的寒冷。',
                     zhushi:'1）易水：在今河北省北部易县境内。战国时期，侠士荆轲受燕国太子丹（即诗中的燕丹）的重托，到秦国刺秦王赢政（统一中国后的秦始皇）。临行时，燕丹等人在易水为其送行。荆轲唱着“风萧萧兮易水寒，壮士一去兮不复还”的歌，与众人诀别。后来刺杀秦王未遂而被杀。\n'+
                     '（2）壮士发冲冠：壮士，指荆轲；发冲冠，即怒发冲冠，愤怒到头发把帽子都顶起来了，形容非常愤怒。',
                     shangxi:'这首诗题为“送人”，但它并没有叙述一点朋友别离的情景，也没有告诉我们送的是何许人。然而，人们却完全可以由它的内容想象出那种“慷慨倚长剑，高歌一送君”的激昂壮别的场景，也可以想见那所送之人，定是肝胆相照的至友。因为只有这样，诗人才愿意、才能够在分别之时不可抑制地一吐心中的块垒，而略去一切送别的常言套语。此诗题为送人，却纯是抒怀咏志。作为送别诗的一格，这首绝句可说是开风气之先吧。',
                     picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598520980616&di=904630b395839db5c46be9dd5f201728&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170420%2F2c4624b3f5ef4b2abc381a94811b3737_th.jpg',

                 }
             ],
             Ly:[
                {
                    theme:'陆游',
                    name:'卜算子·咏梅',
                    verse:'驿外断桥边',
                    poet:'【宋】陆游',
                    quanwen:'驿外断桥边，寂寞开无主。\n'+
                    '已是黄昏独自愁，更著风和雨。\n'+
                    '无意苦争春，一任群芳妒。\n'+
                   '零落成泥碾作尘，只有香如故。\n',
                    yiwen:'驿站外断桥旁。梅花寂寞地开放、孤孤单单．无人来欣赏。黄昏里独处已够愁苦．又遭到风吹雨打而飘落四方。它花开在百花之首．却无心同百花争享春光，却惹来众多凡花俗朵的嫉妒。即使花片飘落被碾作尘泥，也依然有永久的芬芳留在人间。',
                    zhushi:'(1)卜（bǔ）算子·咏梅：选自吴氏双照楼影宋本《渭南词》卷二。“卜算子”是词牌名。又名《百尺楼》《眉峰碧》《楚天遥》《缺月挂疏桐》等。万树《词律》卷三《卜算子》：“毛氏云：‘骆义鸟（骆宾王）用数名，人谓为“卜算子”，故牌名取之。’按山谷词，‘似扶著卖卜算’，盖取义以今卖卜算命之人也。”'+
                   ' (2)驿（yì）外：指荒僻、冷清之地。驿：驿站，供驿马或官吏中途休息的专用建筑。'+
                    '(3)断桥：残破的桥。一说“断”通“簖”，簖桥乃是古时在为拦河捕鱼蟹而设簖之处所建之桥。'+
                    '(4)寂寞：孤单冷清。'+
                   ' (5)无主：自生自灭，无人照管和玩赏。'+
                    '(6)更著：又遭到。更：副词，又，再。著（zhuó）：同“着”，遭受，承受。'+
                   ' (7)无意：不想，没有心思。自己不想费尽心思去争芳斗艳。'+
                   ' (8)苦：尽力，竭力。'+
                    '(9)争春：与百花争奇斗艳。此指争权。'+
                    '(10)一任：全任，完全听凭；一：副词，全，完全，没有例外。任：动词，任凭。'+
                    '(11)群芳：群花、百花。百花，这里借指诗人政敌──苟且偷安的主和派。'+
                    '(12)妒（dù）：嫉妒。'+
                    '(13)零落：凋谢，陨落。'+
                    '(14)碾（niǎn）：轧烂，压碎。'+
                    '(15)作尘：化作灰土。'+
                    '(16)香如故：香气依旧存在。',
                    shangxi:'此词以梅花自况，咏梅的凄苦以泄胸中抑郁，感叹人生的失意坎坷；赞梅的精神又表达了青春无悔的信念以及对自己爱国情操及高洁人格的自许。',
                    picture:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4260494706,381565802&fm=26&gp=0.jpg',

                }
            ],
            }
     }



     renderGzz(){
        return(
        <FlatList 
        data={this.state.Gzz}
        keyExtractor={(item,index)=>index}
        renderItem={this.renderGzzItem}
        />
       );}
       renderGzzItem=({item})=>{
           return(
               <View>
                   <View style={{height:1,width:50,backgroundColor:'#4F4F4F'}} />
                   <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
                this.props.navigation.navigate("名句",{
                    name:item.name,
           poet:item.poet,
           quanwen:item.quanwen,
           yiwen:item.yiwen,
           zhushi:item.zhushi,
           shangxi:item.shangxi,
           picture:item.picture 
                });}}>
            <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>{item.name}</Text>
                   <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>{item.verse}</Text>
            </TouchableOpacity>
               </View>
           );
       }

       renderLbw(){
           return(
            <FlatList 
            data={this.state.Lbw}
            keyExtractor={(item,index)=>index}
            renderItem={this.renderLbwItem}
            />
           );
       }

       renderLbwItem=({item})=>{
        return(
            <View>
                <View style={{height:1,width:50,backgroundColor:'#4F4F4F'}} />
                <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
             this.props.navigation.navigate("名句",{
                name:item.name,
                poet:item.poet,
                quanwen:item.quanwen,
                yiwen:item.yiwen,
                zhushi:item.zhushi,
                shangxi:item.shangxi,
                picture:item.picture 
             });}}>
         <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>{item.name}</Text>
                <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>{item.verse}</Text>
         </TouchableOpacity>
            </View>
        );
    }

    renderLy(){
        return(
            <FlatList 
            data={this.state.Ly}
            keyExtractor={(item,index)=>index}
            renderItem={this.renderLyItem}
            
            />
             );}

    renderLyItem=({item})=>{
     return(
         <View>
             <View style={{height:1,width:50,backgroundColor:'#4F4F4F'}} />
             <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>{
          this.props.navigation.navigate("名句",{
           name:item.name,
           poet:item.poet,
           quanwen:item.quanwen,
           yiwen:item.yiwen,
           zhushi:item.zhushi,
           shangxi:item.shangxi,
           picture:item.picture   
          });}}>
      <Text style={{fontSize:20,width:20,marginRight:7,marginLeft:4}}>{item.name}</Text>
             <Text style={{fontSize:15,color:'#4F4F4F',width:15,marginRight:4}}>{item.verse}</Text>
      </TouchableOpacity>
         </View>
     );
 }

 render(){
     return(
         <View>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15}}>诗人介绍</Text>
            <TouchableWithoutFeedback style={{marginTop:15,marginRight:20}}>
              <Ionicons name={'search'} size={30}  />
            </TouchableWithoutFeedback>
          </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginLeft:15,marginRight:15}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>龚自珍</Text>
        <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate("名句介绍单个诗人列表",{
            name:this.state.Gzz.name,
            verse:this.state.Gzz.verse
        });}}>
        <Text style={{fontSize:15}}>查看更多</Text>
        </TouchableOpacity>
        </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginTop:20}}>
             {this.renderGzz()}
             {this.renderGzz()}
             {this.renderGzz()}
             {this.renderGzz()}
         </View>

         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginLeft:15,marginRight:15}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>骆宾王</Text>
        <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate("名句介绍单个诗人列表",{
            name:this.state.Lbw.name,
            verse:this.state.Lbw.verse
        });}}>
        <Text style={{fontSize:15}}>查看更多</Text>
        </TouchableOpacity>
        </View>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:30,marginTop:20}}>
             {this.renderLbw()}
             {this.renderLbw()}
             {this.renderLbw()}
             {this.renderLbw()}
         </View>

         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginLeft:15,marginRight:15}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>陆游</Text>
        <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate("名句介绍单个诗人列表",{
            name:this.state.Ly.name,
            verse:this.state.Ly.verse
        });}}>
        <Text style={{fontSize:15}}>查看更多</Text>
        </TouchableOpacity>
        </View>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:30,marginTop:20}}>
             {this.renderLy()}
             {this.renderLy()}
             {this.renderLy()}
             {this.renderLy()}
         </View>
         </View>
     );
 }
} 