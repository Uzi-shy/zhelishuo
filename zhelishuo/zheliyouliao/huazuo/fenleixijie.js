import React, { Component } from 'react';
import {Dimensions, SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Image, Alert, TouchableWithoutFeedback} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import MasonryList from "@appandflow/masonry-list';"

const itemWidth = (width - 40) / 2;


const pic =[
    {
        image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
        name:'《鹊华秋色》',
        nm:'鹊华秋色',
        jiesao:'鹊华秋色图，元代画家赵孟頫于元贞元年（1295）回到故乡浙江为好友周密所作的纸本水墨设色山水画，现藏于台北故宫博物院。鹊华秋色图描绘的是济南东北华不注山和鹊山一带秋景，画境清旷恬淡，表现出恬静而悠闲的田园风味。采用平远构图，以多种色彩调合渲染，虚实相生，笔法潇洒，富有节奏感。',
        theme:'作者虽然受召于元朝，遭到众多宋氏遗臣的诟病，却终其一生都对隐而不仕的南宋遗臣表达出相当程度的理解和尊重。从这个意义上说，《鹊华秋色图》也是在向那些对南宋一朝忠心耿耿而隐居不仕的士人传达作者自己的真实意图。',
        goutu:'作者把两座山分左右布局，右边是华不注山，左边是鹊山，均安排在远景位置。两座山的形状，呈尖三角形（华不注山），一呈半圆形（鹊山），两者遥遥相对。在刚柔对比中，更显得华不注山的险峻奇突。图中中景、近景表现出一片辽阔苍茫的景象。平川洲渚，红树芦荻，房舍隐现。图中林木种类颇多，红绿相间，枯润相杂。树姿高低且变化丰富，布置得宜，聚散自然，多而不繁，疏朗有致。在这水乡山色之中，几个渔民在劳作，或撑篙、或扳网，还有一人策杖漫步在田野，远处可见散放着的牛群，整个画面洋溢着牧歌般的恬静气氛。',
        yongbi:'画上树干不是用两条线勾廓外形，而是把边线与树皮的纹理结合在起勾绘。用笔似乎旋转，线条往复重叠，增添了树干的质感。画上近景中景的树叶，点绘得比较疏朗，远树画得简洁，整体感较强。鹊山用披麻，皴法较密。华不注山正面运用了“荷叶皴”，线条从上直落，交叉处稍留空白，突出山的嶙峋之姿。侧面用“解索皴”，整个山体两边皴擦少，边线模糊，但体积感较强。汀岸、平原采用了长披麻并以笔力的轻重，线条的疏密，落墨的深浅凸显干湿，表现出了大自然的节奏和生命。房舍人畜、芦荻舟车均精描细点，再渲染青、赭、红、绿，设色明丽清淡，风格古雅俊秀。作者创造性地将水墨山水与青绿山水融为一体，笔法灵活，风苍秀简逸，富有创新之意。',
        dianping:'明·陈继《泥古录》：山头皆着青绿，全学王右丞与董源。',
        poet:'赵孟頫（1254—1322年），字子昂，号松雪道人、水精宫道人。湖州（今浙江吴兴）人。宋太祖十一世孙。宋末时为真州司户参军。宋亡入元后，授兵部郎中，又历任渐江等地学提举，后官至输林学士承旨。赵孟頫不但精于音律、诗文曲，也是元代画家、书法家，著有《松雪斋集》。'
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
         name:'《墨花图》',
         nm:'',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:''
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
         name:'《荷花鸳鸯图》',
         nm:'荷花鸳鸯图',
        jiesao:'《荷花鸳鸯图》是明末清初书画家陈洪绶创作的绢本设色画，现藏于北京故宫博物院。画中为荷塘一角，芦苇丛生，清澈见底的水面上，一对鸳鸯相伴而游，在它们上面荷叶碧绿似伞，几朵红荷正绽吐芳菲。花鸟画法工整细致，虚实相合。荷叶的脉络、荷花的红丝及荷柄之上的细刺都描绘得极其生动，而水波、水草、芦苇只以淡墨数笔勾染而成。笔法虚实结合，使画面呈现一种空灵润泽的感觉。',
        theme:'此图以“出淤泥而不染，濯清涟而不妖”的高洁荷花为题  ，花朵清丽，或含苞，初绽、或怒放，多姿多态；枝叶带露，娉婷舒展，俯仰欹侧；湖石雄奇，锐利坚崚，厚重沉凝。两只彩蝶在空中翩翩起舞，正欲向一朵荷花飞去，而另一只早已停留在花心之上，一动一静，互为呼应。莲叶的婀娜多姿，荷花的娇艳欲滴，与古石的瘦硬层叠构成了鲜明的对比，但在作者的笔下却被结合得十分自然。一对鸳鸯在水面戏水悠然，打破了一池碧水的宁静。一只青蛙正隐伏于石后的荷叶上觊觎甲虫，弓身欲动，使画面充满了生机与意趣。',
        goutu:'画面穿插于浮萍中的水纹作为画面中的横向因素，在破除画面单一竖向格式上起到了重要作用。构图的精心安排体现了画家非凡的驾驭画面的能力与画家善于观察的细心与状物精微的匠心。',
        yongbi:'画面中有很多耐人寻味的细节。作品用笔工致而不显刻板，在荷花的刻画上只取一朵对其花芯进行了深入刻画，花芯里的莲蓬和花蕊精雕细琢，使其显得格外生动。荷叶中的叶脉，用细笔进行了精密的勾勒，他的勾叶茎方法则是用粗细有致的墨线双勾，敷染浓淡不同的墨绿，一丝不苟，神满气足，叶脉走向编织出一种有机网络，朝空中弥漫出无穷的张力。荷杆上的细刺密布，让人感觉用手碰触会有刺痛的感觉。鸳鸯的刻画上尤为细致入微，翎毛各不相同，绒毛细笔勾勒，公鸳鸯稳重安详，怡然自得，母鸳鸯在其附近游戏但又心系公鸳鸯，头偏向公鸳鸯目光落在其身上，情的把握相当精湛，可谓是形神兼备。水面上用淡墨细细勾勒出的水纹将浮萍串到了一起宛如精美的项链，水纹、浮萍和荷叶形成了精致的点线面组合。',
        dianping:'北京故宫博物院研究员傅东光：作品用笔工致而不显刻板，着色醇厚而不流于俗腻，画风素洁明快，既有应物象形的写生功底，又不乏变幻合宜的适度夸张，画面呈现出一种在繁与简，疏与密、刚与柔的对比变化中的合谐与统一。',
        poet:'陈洪绶（1597—1652年），字章侯，号老莲、悔迟，诸暨（今属浙江省）人。明代画家。早年受业于学者刘宗周、黄道周门下，1642年曾到北京为国子监生，授中书舍人，供奉内廷，不久即离京南归。明朝灭亡后，为躲避清兵，一度在绍兴云门寺出家为僧，自号悔迟，亦号老迟。后在杭州以卖画为生。工诗，擅画，山水、人物、花鸟无一不精。其画初受蓝瑛影响，后广泛临学古人，并大胆突破创新，所作人物、花鸟形象古拙，擅用夸张变形手法，独树一帜，为晚明变形主义绘画大师。与崔子忠齐名于南北，世称“南陈北崔”。其画风对后世有巨大影响。著《宝纶堂集》'
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
        name:'《蕉林酌酒图》',
        nm:'蕉林酌酒图',
        jiesao:'《蕉林酌酒图》是明末清初画家陈洪绶创作的绢本设色画，现收藏于天津博物馆。该图设色画夏日庭园，湖石玲珑，蕉竹摇翠，月季盛开。花石丛中，一老人傍石案，手把古爵，悠然酌酒。下有一仕女、一婢女，正忙于漉酒。画面器物，如鼎、壶、琴、书等，皆为古物，反映出主人的身份，是一位超然世外的好古博雅之士。',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'中国画研究院创作研究部主任谢志高：画面色彩浓烈，线条柔中有刚，如屈铁盘行；衣纹组合富于装饰趣味，笔墨拙健高古，造型夸张，充满鲜明的艺术个性。',
        poet:'陈洪绶（1597—1652年），字章侯，号老莲、悔迟，诸暨（今属浙江省）人。明代画家。早年受业于著名学者刘宗周、黄道周门下，1642年曾到北京为国子监生，授中书舍人，供奉内廷，不久即离京南归。明朝灭亡后，为躲避清兵，一度在绍兴云门寺出家为僧，自号悔迟，亦号老迟。后在杭州以卖画为生。工诗，擅画，山水、人物、花鸟无一不精。其画初受蓝瑛影响，后广泛临学古人，并大胆突破创新，所作人物、花鸟形象古拙，擅用夸张变形手法，独树一帜，为晚明变形主义绘画大师。与崔子忠齐名于南北，世称“南陈北崔”。其画风对后世有巨大影响。著《宝纶堂集》。'
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
         name:'《为居素作山水图》',
         nm:'为居素作山水图',
        jiesao:'这幅山水轴是黄宾虹八十七岁时的作品，题识：“宋元人渴笔法，刚而能柔，润而不枯，得一辣字诀耳。”作者晚年作画，十分注重“笔”的语言表述功能。该图以渴笔钩皴为主，远山和一些背阴的地方略施渲染。初看用笔狂肆放纵，颇似“粗头乱服”。',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'黄宾虹（1865－1955），祖籍安徽歙县，出生于浙江金华。原名懋质，后改名质，字朴存，中年更字宾虹，别署予向，晚年署虹叟、黄山山中人等。早年激于时事，参与同盟会、南社、国学保存会等，后潜心学术，深研画史、画理。学养渊博，著述宏富，诗书画印及鉴赏皆精，为中国近现代艺术史上的巨匠。著有《陶玺文字合证》、《古印概论》、《古籀论证》、《古文字释》、《古画微》、《虹庐画谈》、《鉴古名画论》、《黄山画家源流》、《画法要旨》、《宾虹草堂印谱》、《画学编》、《宾虹杂著》、《宾虹诗草》等。'
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
         name:'《桃实图》',
         nm:'',
        jiesao:'《桃实图》是1916年吴昌硕创作的一幅纸本设色画，现收藏于上海博物馆。《桃实图》画了两棵粗壮的、硕果累累的桃树，其中的一个枝干不堪果实的重压倒在地上，树下有一块巨石，枝叶用色浓厚，果实色彩艳丽，画中题有“灼灼桃之华，祯颜如中酒，一开三千年，结实大于斗。丙辰冬吴昌硕”。作品构图疏密有致，淋漓尽致地表现了空间美感。',
        theme:'',
        goutu:'吴昌硕构图不喜四平八稳，而讲究绘画应如同书法般具有笔势呼应的布局，所以其画茂盛的桃树及岩石犹觉不足，而定要绘下垂的枝叶、果实和造型怪异的石头方才满意。桃树与其垂枝又恰为画家的自题诗留有余地：“灼灼桃之华，赖颜如中酒，一开三千年，结实大于斗。”吴昌硕用西王母瑶池上“一开三千年”之蟠桃，点明图中桃即为九天之上的仙种，与祝寿主题相契合。',
        yongbi:'',
        dianping:'上海复旦中学前校长周国正：此图为大写意花卉画，画中桃于凌空而降，自右上角向左斜垂一枝，枝上艳红蟠桃累累，余枝穿插伸展，树叶衬托疏密有序。其用笔融入篆籀之法，笔意雄健；全画即兴挥写，一挥而就，隽永入神。桃实用色浑厚，“莽泼胭脂”，丹红艳丽。',
        poet:'吴昌硕（1844.8.1—1927.11.29），初名俊，又名俊卿，字昌硕，又署仓石、苍石，多别号，常见者有仓硕、老苍、老缶、苦铁、大聋、缶道人、石尊者等。浙江省孝丰县鄣吴村（今湖州市安吉县）人。晚清民国时期著名国画家、书法家、篆刻家，“后海派”代表，杭州西泠印社首任社长，与任伯年、蒲华、虚谷合称为“清末海派四大家”。他集“诗、书、画、印”为一身，融金石书画为一炉，被誉为“石鼓篆书第一人”、“文人画最后的高峰”。在绘画、书法、篆刻上都是旗帜性人物，在诗文、金石等方面均有很高的造诣。'
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
       name:'《鹊华秋色》',
       nm:'鹊华秋色',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'',
     },
     {
         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
        name:'《桃实图》',
        nm:'桃实图',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'',
     },
     {
      image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
     name:'《蕉林酌酒图》',
     nm:'蕉林酌酒图',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'',
   },
   {
    image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
   name:'《蕉林酌酒图》',
   nm:'蕉林酌酒图',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'',
 },
 {
  image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
 name:'《蕉林酌酒图》',
 nm:'蕉林酌酒图',
        jiesao:'',
        theme:'',
        goutu:'',
        yongbi:'',
        dianping:'',
        poet:'',
},


]

// const secToTime = (s) => {
//     let h = 0, m = 0;
//     if(s > 60){
//         m = parseInt(s / 60);
//         s = parseInt(s % 60);
//         if(m > 60) {
//             h = parseInt(i / 60);
//             m = parseInt(i % 60);
//         }
//     }
//     // 补零
//     const zero = (v) => {
//         return (v >> 0) < 10 ? ("0" + v) : v;
//     };
//     return (h == 0 ? [zero(m), zero(s)].join(":") : [zero(h), zero(m), zero(s)].join(":"));
// }

export default class ContentWaterfall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            dataArray:pic
            // [
            //     {
            //        image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                  
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                    
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                    
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                   
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                    
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                    
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                  
            //     },
            //     {
            //         image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073387,1364684419&fm=26&gp=0.jpg',
                   
            //     },
            // ],
            
        }
    }

    // componentDidMount = () => {
    //     this.onRefreshing();
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>

<View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
                <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                    this.props.navigation.goBack()
                                }} />
                <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15}}>山水画</Text>
                <TouchableWithoutFeedback style={{marginTop:15,marginRight:20}}>
                  <Ionicons name={'search'} size={30}  />
                </TouchableWithoutFeedback>
              </View>
              
              </View>
    
                <FlatList
                 showsVerticalScrollIndicator={false}
                    data={this.state.dataArray}
                    numColumns={2}
                    renderItem={(data)=>this._renderItem(data)}

                    refreshing={this.state.isLoading}
                    onRefresh={() => {
                        this.loadData(); }}//下拉刷新加载数据
                    getHeightForItem={this._getHeightForItem}
                    // refreshing = {this.state.refreshing}
                    // onRefresh = {this.onRefreshing}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._onEndReached}
                    keyExtractor={this._keyExtractor}
                    />
            </SafeAreaView>
        )

        
    }
    
    

    // onRefreshing = () => {
    //     this.setState({
    //         refreshing: true,
    //     })
    //     // const { api } = this.props;
    //     // fetch(api(this.state.np))
    //     // .then((response) => response.json())
    //     // .then((jsonData) => {
    //     //     this.setState({
    //     //         refreshing: false,
    //     //         data: jsonData.list,
    //     //         np: jsonData.info.np || 0,

    //     //     })
    //     // });
    // }


    
    // _onEndReached = () => {
    //     const { api } = this.props;
    //     fetch(api(this.state.np))
    //     .then((response) => response.json())
    //     .then((jsonData) => {
    //         this.setState({
    //             data: [...this.state.data, ...jsonData.list],
    //             np: jsonData.info.np,
    //         })
    //     });
    // }

    _keyExtractor = (item, index) => {
        return item.text + index;
    }

    // _getHeightForItem(item){//获取图片高
    
    //   itemHeight = Math.max(itemWidth,itemWidth/item.image.width * item.image.height);
    //   }

      

    _renderItem = ({item}) => {
    //   const itemHeight = this._getHeightForItem({item});
        return (
            <View style={styles.item}>
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={()=>{
                    this.props.navigation.navigate("全部细节",{
                        nm:item.nm,
                        jiesao:item.jiesao,
                        theme:item.theme,
                        goutu:item.goutu,
                        yongbi:item.yongbi,
                        dianping:item.dianping,
                        poet:item.poet,
                        image:item.image 
                    });}}
               >
                <Image 
                    source={{uri:item.image}}
                    style={{width: itemWidth, height:140, borderRadius: 8,}}
                    />
            </TouchableOpacity>
            <Text style={{fontSize:15,marginTop:8}}>{item.name}</Text>
            </View>
        )

        
    }
    loadData() {
      this.setState({
          isLoading: true
      })

      //模拟网络请求
      setTimeout(() => {
          //把数据反转
          let newArray = [];
          for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
              newArray.push(this.state.dataArray[i]);
          }
          this.setState({
              isLoading: false,
              dataArray: newArray
          })

      }, 3000);
  }

  


    // _onPressContent = (item) => {
    //     this.props.navigation.navigate('ContentDetail', {item});
    // }

}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginBottom:30
    },
    item: {
        margin: 10,
        alignItems:'center',
    },
    itemText: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 10, 
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0, 
        height: 30, 
        backgroundColor: '#0002', 
        borderBottomLeftRadius: 4, 
        borderBottomRightRadius: 4
    },
})