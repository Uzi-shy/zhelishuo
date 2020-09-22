
import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    StyleSheet,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width,height } = Dimensions.get('window')
 
let data = [
    {
        "key": "唐",
        "data": [
            
            {
                "poet": "孙位",
                "hua": "《高逸图》《维摩图》《三教图》《春龙出蛰图》",
                "pic":'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe99256a239d4c36a85edf8db171fb?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5',
                "jieshao":'唐末书画家，后改名遇，原籍会稽（今浙江绍兴），故又号会稽山人。唐僖宗广明元年末（881年初），黄巢入长安，他自长安入蜀，居成都。',
                "shengping":'孙位（公元九世纪），一名遇，原籍会稽（今浙江绍兴）。擅画人物、鬼神、松石、墨竹，所作皆笔精墨妙，雄壮奔放，情高格逸。尤以画水著名，与张南本善画火并称于世。举止疏野、襟韵旷达，喜饮酒，罕见其醉。乐与方外人往还，然对豪贵相请，则礼有少慢，纵赠千金，难留一笔。曾在蜀中应天、昭觉、福海等寺院画过不少壁画，俱笔简形备，气势雄伟。画迹有《说法太上像》、《维摩图》、《神仙故实图》、《四皓弈棋图》等27件，著录于《宣和画谱》。孙位是唐代末年的画家，据《宣和画谱》记载，他是会稽人，唐末战乱时随僖宗入蜀。',
                "zuoping":'主要作品有高士图，高逸图卷。画迹有《说法太上像》、《维摩图》、《神仙故实图》、《四皓弈棋图》等27件，著录于《宣和画谱》。 《高逸图》实际上画的应是以魏晋时期七位著名文人隐士为描写对象的《竹林七贤图》，不过现今画上只留下山涛、王戎、刘伶、阮籍四人，另外三人嵇康、向秀、阮咸已遗失了。这四个主体人物分别坐在华丽的花毯上，每人旁边都有一个小童侍候，段与段之间有礁石树木相隔，环境静穆幽雅。从右至左第一人是山涛，他赤袒上身披衣抱膝而坐，流露出傲慢神色；第二人是王戎，手持长柄如意，因此人善作“如意舞”；第三人是刘伶，表现得爱酒如命；第四人是阮籍，手捧麋尾（大鹿之尾），斜倚花毯而坐。这些“贤人”是尚好清谈、不拘礼法的文人，作品将不同人物的个性特色和清高、傲慢、放荡不羁的精神状态都刻画得恰如其分。',
                
                "qbzuoping":[
                    {
                        name:"《高逸图》",
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4051949628,1365895266&fm=26&gp=0.jpg',
                    },
                    {
                        name:"《维摩图》",
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4051949628,1365895266&fm=26&gp=0.jpg',
                    },
                    {
                        name:"《三教图》",
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4051949628,1365895266&fm=26&gp=0.jpg',
                    }


                ]
                
            },
            {
                "poet": "贯休",
                "hua": "《禅月集》《十六罗汉图》"
            }
        ],
    },
    {
        "key": "宋",
        "data": [
            {
                "poet": "燕文贵",
                "hua": "《溪山楼观图》《江山楼观图》"
            },
            {
                "poet": "马和之",
                "hua": "《周颂·清庙之什图》卷、《月色秋声图》"
            },
            {
                "poet": "刘松年",
                "hua": "《秋山行旅图》、《罗汉图》、《四景山水图》"
            },
            {
                "poet": "李嵩",
                "hua": "《夜月看潮图》、《花篮图》、《货郎图》"
            },
            {
                "poet": "夏圭",
                "hua": "《雪堂客话图》、《梧竹溪堂图》、《松溪泛月图》、《山水十二景图》"
            },
            {
                "poet": "林椿",
                "hua": "《梅竹寒禽图》《果熟来禽图》、《葡萄草虫》、《枇杷山鸟图》"
            },
            {
                "poet": "张茂",
                "hua": "《双鸳鸯图》"
            },
             {
                "poet": "陈清波",
                "hua": "《湖山春晓图》"
            },
            {
                "poet": "马麟",
                "hua": "《层叠冰绡图》、《静听松风图》、《芳春雨霁图》、《橘绿图》、《夏禹王像》"
            },
            {
                "poet": "赵孟坚",
                "hua": "《墨兰图》《水仙图》《岁寒三友图》"
            },
        ],
    },
    {
        "key": "元",
        "data": [
            {
                "poet": "钱选",
                "hua": "《八花图》、《花鸟图》、《浮玉山居图》、《山居图》、《秋江待渡图》"
            },
            {
                "poet": "赵孟頫",
                "hua": "《鹊华秋色图》、《人骑图》、《水村图》、《兰竹石图》、《红衣罗汉像》、《秋郊饮马图》、《墨竹图》、《老子像》、《双松平远图》、《幽篁戴胜图》、《古木竹石图》、《浴马图》、《洞庭东山图》"
            },
            {
                "poet": "管道昇",
                "hua": "《墨竹图》"
            },
            {
                "poet": "王振鹏",
                "hua": "《伯牙鼓琴图》"
            },
            {
                "poet": "吴镇",
                "hua": "《渔父图》、《松泉图》、《墨梅图》、《墨竹谱》、《蘆花寒雁图》、《松石图》、《墨竹坡石图》、《枯木竹石图》"
            },
            {
                "poet": "赵雍",
                "hua": "《挾弹游骑图》、《澄江寒月图》、《松溪钓艇图》"
            },
            {
                "poet": "王淵",
                "hua": "《竹石集禽图》、《桃竹锦鸡图》、《牡丹图》"
            },
            {
                "poet": "王冕",
                "hua": "《墨梅图》"
            }, 
            {
                "poet": "夏永",
                "hua": "《岳阳楼图》"
            },
            {
                "poet": "王蒙",
                "hua": "《竹石图》、《夏山高隐图》、《青卞隐居图》、《夏日山居图》、《丹山瀛海图》、《太白山图》"
            },
        ],
    },
    {
        "key": "明",
        "data": [
            {
                "poet": "夏芷",
                "hua": "《归去来兮图》"
            },
            {
                "poet": " 戴进",
                "hua": "《春山积翠图》《风雨归舟图》 《三顾茅庐图》《达摩至惠能六代像》"
            },
            {
                "poet": "谢环",
                "hua": "《杏园雅集图》、《水光山色图》"
            }, 
            {
                "poet": "陈录",
                "hua": "《万玉图》、《烟笼玉树图》、《梅花图》"
            },
            {
                "poet": "王谦",
                "hua": "《卓冠群芳图》、《墨梅图》"
            },
            {
                "poet": "姚绶",
                "hua": "《谷庵集》、《云东集》、《天人合旨》、《姚御史诗文》"
            },
            {
                "poet": "吕纪",
                "hua": "《新春双雉图》、《桂花山禽图》、《残荷鹰鹭图》、《五德大吉图》"
            },
            {
                "poet": "朱端",
                "hua": "《烟江远眺图》、《弘农渡虎图轴》"
            },
            {
                "poet": "王谔",
                "hua": "《江阁远眺图》、《雪山行旅图》、《寒山图》、《瑞雪凝冬图》、《观瀑图》、《雪岭风高图》"
            },
            {
                "poet": "徐渭",
                "hua": "《墨葡萄图》、《菊竹图》"
            },
            {
                "poet": "宋旭",
                "hua": "《山书图轴》、《万山秋色图轴》、《雪居图轴》、《武陵山水图卷》、《达摩面壁图轴》"
            },
            {
                "poet": "项元汴",
                "hua": "《墨林山人诗集》、《蕉窗九录》"
            },
             {
                "poet": "项德新",
                "hua": "《桐荫寄傲图》"
            },
            {
                "poet": "孙狄",
                "hua": "《竹石芙蓉图轴》"
            },
            {
                "poet": "孙狄",
                "hua": "《月夜行旅图》、《溪山雨霁图》"
            },
             {
                "poet": "蓝瑛",
                "hua": "《秋壑霜林图》《江皋话古图》"
            }, 
            {
                "poet": "倪元路",
                "hua": "《舞鹤赋卷》、《行书诗轴》、《金山诗轴》"
            },
            {
                "poet": "陈嘉言",
                "hua": "《松鹊双兔图轴》"
            },
            {
                "poet": "葛征奇",
                "hua": "《溪山清趣图》、《山水图册》"
            },
            {
                "poet": "项圣谟",
                "hua": "《九十九变相图》、《长江万里图》"
            },
            {
                "poet": "陈洪绶",
                "hua": "《水浒叶子》《九歌图》《升庵簪花图》"
            },
        ],
    },
    {
        "key": "清",
        "data": [
            {
                "poet": "蓝深",
                "hua": "《过秦草》"
            },
            {
                "poet": "蓝孟",
                "hua": "《梅花书屋图轴》"
            },
            {
                "poet": "章声",
                "hua": "《青绿山水图轴》"
            },
            {
                "poet": "陈宇",
                "hua": "《桃花蛱蝶图轴》"
            },
            {
                "poet": "诸升",
                "hua": "《墨竹图轴》"
            },
            {
                "poet": "王概",
                "hua": "《芥子园画谱》、《采芝图扇》、《澄心堂纸赋》"
            },
            {
                "poet": "刘度",
                "hua": "《山水册》、《桂树图（扇面）》、《白云红树图轴》"
            },
            {
                "poet": "金廷标",
                "hua": "《莲塘纳凉图轴》、《瞎子说唱图轴》"
            },
            {
                "poet": "董邦达",
                "hua": "《慈山图轴》、《烟磴寒林图轴》"
            },
            {
                "poet": "吕焕成",
                "hua": "《春山听阮图轴》、《山水册》"
            },
            {
                "poet": "沈铨",
                "hua": "《松鹤图轴》、《白鹿图轴》"
            },
            {
                "poet": "吕学",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": "金农",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": "方熏",
                "hua": "《郎廷极行乐图卷》"
            }, 
            {
                "poet": "黄易",
                "hua": "《郎廷极行乐图卷》"
            }, 
            {
                "poet": "钱杜",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": "费丹旭",
                "hua": "《郎廷极行乐图卷》"
            }, 
            {
                "poet": "戴熙",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": " 赵之琛",
                "hua": "《郎廷极行乐图卷》"
            }, 
            {
                "poet": " 任熊",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": " 任颐",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": " 朱偁",
                "hua": "《郎廷极行乐图卷》"
            },
            {
                "poet": " 赵之谦",
                "hua": "《郎廷极行乐图卷》"
            },{
                "poet": " 蒲华",
                "hua": "《郎廷极行乐图卷》"
            },{
                "poet": "吴昌硕",
                "hua": "《郎廷极行乐图卷》"
            },
        ],
    }
  ]
 
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                 showsVerticalScrollIndicator={false}
                    sections={this.state.data} //数据源,类似于<FlatList>中的data属性
                    renderSectionHeader={this._sectionComp} //每个section的头部渲染
                    renderItem={this._renderItem} //渲染每一个section中的每一个列表项
                    keyExtractor={(item,index) => index.toString()} //为给定的item生成一个不重复的key
                    ItemSeparatorComponent={this._itemSeparator} //行与行之间的分隔线
                    SectionSeparatorComponent={this._sectionSeparator} //在每个`section`的顶部和底部渲染
                    stickySectionHeadersEnabled={false} //是否吸顶,ios默认为true;Android默认为false
                />  
            </View>
        );
    }
    _sectionComp = (item) => {
        return(
            <Text style={styles.key}>{item.section.key}</Text>
        )
    }
    _renderItem = (item) => {
        return(
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("作者细节",{
                    poet:item.item.poet,
                    jieshao:item.item.jieshao,
                    shengping:item.item.shengping,
                    zuoping:item.item.zuoping,
                    pic:item.item.pic,
                    img:item.item.img,
                    qbzuoping:item.item.qbzuoping,
                });}}>
                <Text style={styles.poet}>{item.item.poet}</Text>
            <Text style={styles.hua}>{item.item.hua}</Text>
            </TouchableOpacity>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:215
    },
    key: {
        width: width,
        height: 50,
        backgroundColor: '#E0E0E0',
        lineHeight: 50,
        fontSize:28,
        paddingLeft:17,
        fontWeight:'bold'

    },
    hua: {
        width: width,
        height: 35,
        backgroundColor: '#fff',
        lineHeight: 35,
        paddingLeft: 20,
        fontSize:17
    },
    poet:{
        width:width,
        backgroundColor:'#fff',
        fontSize:22,
        lineHeight:40,
        height:40,
        fontWeight:'700',
        paddingLeft:17
    }
   
})