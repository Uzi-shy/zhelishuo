import React, { Fragment, Component, useEffect, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    ListFooterComponent,
    TouchableNativeFeedback,
    TouchableOpacity,
    Alert,Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get("window");

export default class wofabu extends Component {
    render() {
        return (
            <View>
                <View style={{ height: 50, width: "100%", backgroundColor: "#FFFFFF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, elevation: 4, }}>
                
                    <View style={{ flex: 0.7, marginTop: '6%', flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", }}>
                        <AntDesign name={'left'} size={25} color={'#000'} 
                        style={{position:"absolute",left:4}}
                        onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        {/* <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 24 }}>古诗词</Text> */}
                        <Text style={{ fontSize: 30, fontFamily: "youran" }}>用户协议</Text>

                        {/* <View> */}
                        {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
                        {/* </View> */}
                    </View>

                </View>
                <ScrollView style={{height:height-120}}>
                    <View style={{margin:20,padding:10,borderWidth:2}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontSize: 24, padding: 16}}>用户注册服务协议 </Text>
                    </View>
                
                    <Text style={{ fontSize: 18, padding: 16 ,}}singleLine="false">
                    
【提示条款】{"\n"}
{"        "}为了更好地为您提供服务，请您仔细阅读《用户注册协议》（以下简称“本协议”）。在您开始使用“浙里说”软件及相关服务之前，请您务必认真阅读并充分理解本协议，特别是涉及免除或者限制责任的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等。如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后使用平台提供的服务。
当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，承诺作为本协议的一方当事人接受协议的
约束。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。{"\n"}
您应自行准备如下设备和承担如下开支:{"\n"}（1）上网设备，包括并不限于手机或者其他
上网终端、调制解调器及其他必备的上网装置﹔{"\n"}（2）上网开支，包括并不限于网络接入费、
上网设备租用费、手机流量费等。{"\n"}
一、定义
1．本协议是您与平台的运营商浙里说有限公司及其关联公司（在本协议中简称为“公
司”）之间就您下载、安装、注册、登录、使用“浙里说”软件，并获得“浙里说”软件提供的相关服务所订立的协议。
2。“用户”指所有直接或间接获取和使用“浙里说”软件及相关服务的使用者，包括自然人、法人或其他组织等。在本协议中称为“用户”或称“您”。
3。“浙里说”软件指由公司合法拥有并运营的、标注名称为“浙里说”的客户端应用程序，向用户提供各种网络服务。在本协议中称为“平台”或“软件”。{"\n"}
二、本协议及条款的修改
1。由于互联网行业高速发展，您与我方签署的本协议列明的条款并不能完整罗列并覆盖您与我方所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。因此，本协议的内容还应包括所有平台已经发布的、或未来可能发布和更新的各类规则。所有规则一经发布并以适当的方式送达后（网站公布、系统通知等），即成为本协议不可分割的组成部分，与本协议正文具有同等法律效力，法律另有强制性规定或双方另有特别约定的，依其规定。
2．用户协议变更后，如您继卖使用我方平台服务，即意味着您同意接受我方更新后的
用户协议。如您不同意变更后的用户协议，请您停止使用我方平台产品和服务。
3。为更好的提升用户体验及服务，公司将不定期提供软件更新或改变（包括但不限于
软件修改、升级、功能虽化、开发新服务、软件替换等）。为保证软件及相关服务安全、提
升用户服务，软件及相关服务更新后，平台将以包括但不限于系统提示、公告、站内信等方
式提示您，您有权选择接受更新版本或服务，如您不接受，部分功能将可能会受到限制或不
能判卖使用。{"\n"}
三、平台账户的注册和使用{"\n"}
1．平台为您提供了注册通道，您有权选择合法的字符组合、邮箱或者手机号码作为自己的账户名称，并自行设置符合安全要求的密码，若您的账户密码遗失的，可以通过注册账户时所使用的手机号码重置密码。账户的所有权归公司所有，您仅拥有使用权。
2．您设置的账户名称、密码是您用以登录并以注册用户身份使用平台提供的相关服务的凭证。您的账户只限您本人使用，未经平台书面同意，您不得以任何形式赠与、借用、出租、专让、售卖或以其他方式许可他人使用该账号若发现他人未经许可使用您的账号或发生其他任何安全漏洞问题时，您应当立即通知平台客服，否则您应对凭您的账户密码登录平台所发生的所有行为负责。
3. 您有权设置并随时修改账户昵称、头像、个人简介等注册信息。但应保证您设置或修改的信息不得出现以下内容:{"\n"}
（1）违反宪法或法律法规规定的；{"\n"}
（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；{"\n"}
（3）损害国家荣誉和利益的，损害公共利益的；{"\n"}
（4）煽动民族仇恨、民族歧视，破坏民族团结的；{"\n"}
（5）破坏国家宗教政策，宣扬邪教和封建迷信的﹔{"\n"}
（6）散布谣言，扰乱社会秩序，破坏社会稳定的﹔{"\n"}
（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；{"\n"}
（8）悔辱或者诽谤他人，侵害他人合法权益的；{"\n"}
（9）含有法律、行政法规禁止的其他内容的。{"\n"}
4．您同意并授权，为了更好的为您提供服务以及确保您的账户安全，平台有权根据您提供的手机号码、身份证号码等信息，向全国公民身份号码查询服务中心、电信运营商、金
融服务机构等可靠单位发起用户身份真实性、用户征信记录、用户手机号码有效性状态等情况的查询。
5．您有权在注册并登录后，对站内商户发布客观、真实、亲身体验的点评信息和图片，
有权在平台上自行浏览、下载和使用优惠券、红包等，有权参加平台组织的各种线上或线下
活动。{"\n"}
四、用户行为规范{"\n"}
1.您评论、发布、传播的内容应自觉遵守宪法法律、法规、遵守公共秩序，尊重社会公德、社会主义制度、国家利益、公民合法权益、道德风尚和信息真实性等要求。若您上传、发布或传播的内容含有以下内容的，平台有权视具体情况采取冻结账号、限制账户部分功能、拒绝服务、屏蔽或删除相关内容或者直接删除账户等措施，并可依法追究您的法律责任。如因此给公司造成不利后果的，您应应负责消除影响，并且赔偿公司因此导致的一切损失（包括且不限于财产损害赔偿、名誉损害赔偿、律师费、交通费等维权费用）：
{"\n"}（1）反对宪法确定的基本原则的；{"\n"}
（2）危害国家安全，泄露国家秘密的；{"\n"}
（3）颠覆国家政权，推翻社会主义制度、煽动分裂国家、破坏国家统一的；{"\n"}
（4）损害国家荣誉和利益的；{"\n"}
（5）宣扬恐怖主义、极端主义的；{"\n"}
（6）宣扬民族仇恨、民族歧视，破坏民族团结的；{"\n"}
（7）煽动地域歧视、地域仇恨的；{"\n"}
（8）破坏国家宗教政策，宣扬邪教和迷信的；{"\n"}
（9）编造、散布谣言、虚假信息，扰乱经济秩序和社会秩序、破坏社会稳定的；{"\n"}
（10）散布、传播暴力、淫秽、色情、赌博、凶杀、恐怖或者教唆犯罪的；{"\n"}
（11）侵害未成年人合法权益或者损害未成年人身心健康的；{"\n"}
（12）未获他人允许，偷拍、偷录他人，侵害他人合法权利的；{"\n"}
（13）包含恐怖、暴力血腥、高危险性、危害表演者自身或他人身心健康内容的；{"\n"}
（14）危害网络安全、利用网络从事危害国家安全、荣誉和利益的；{"\n"}
（15）悔辱或者诽谤他人，侵害他人合法权益的；{"\n"}
（16）对他人进行暴力恐吓、威胁，实施人肉搜索的；{"\n"}
（17）涉及他人隐私、个人信息或资料的；{"\n"}
（18）散布污言秽语，损害社会公序良俗的；{"\n"}
（19）侵犯他人隐私权、名誉权、肖像权、知识产权等合法权益内容的；{"\n"}
（20）散布商业广告，或类似的商业招揽信息、过度营销信息及垃圾信息；{"\n"}
（21）所发表的信息毫无意义的，或刻意使用字符组合以逃避技术审核的；{"\n"}
（22）其他违反法律法规、政策及公序良俗、干扰平台正常运营或侵犯其他用户或第三方合法权益内容的其他信息。{"\n"}
2.您不得利用或针对平台相关服务进行任何危害计算机网络安全的行为，包括但不限于:{"\n"}
（1）非法侵入他人网络、干扰他人网络正常功能、窃取网络数据等危害网络安全的活动；{"\n"}
（2）提供专门用于从事侵入网络、干扰网络正常功能及防护措施、窃取网络数据等危害网络安全活动的程序、工具；{"\n"}
（3）明知他人从事危害网络安全的活动的，为其提供技术支持、广告推广、支付结算等帮助{"\n"}
（4）使用未经许可的数据或进入未经许可的服务器账号﹔{"\n"}
（5）未经允许进入公众计算机网络或者他人计算机系统并删除修改、增加存储信息﹔{"\n"}
（6）未经许可，企图探查、扫描、测试平台系统或网络的弱点或其它实施破坏网络安{"\n"}
全的行为；{"\n"}
（7）企图干涉、破坏平台系统或网站的正常运行，故意传播恶意程序或病毒以及其他{"\n"}
破坏干扰正常网络信息服务的行为；{"\n"}
（8）伪造TCP/IP数据包名称或部分名称。{"\n"}
3.您在平台发布对商户的评价时，不得利用平台进行违反诚信的任何行为，包括但不限于:炒作商户，并向商户收取费用或获取利益﹔为获得利益s或好处，参与或组织撰写及
发布虚假评论﹔以差评威胁，要求商户提供额外的利益或好处﹔进行其他其它影响评论客观、干扰扰乱网站正常秩序的违规行为等。
4.您理解并知晓在使用平台服务时，所接触的内容和信息来源广泛，平台无法对该内
容和信息的准确性、真实性、可用性、安全性、完整性和正当性负责。您理解并认可您可
能会接触到不正确的、令人不快的、不适当的或令人厌恶的内容和信息，您不会以此追究平台的相关责任。平台不对用户在我方平台上传、发布或传输的任何内容和信息背书、推
荐或表达观点，也不对任何内容和信息的错误、瑕疵及产生的损失或损害承担任何责任，
您对内容和信息的任何使用需自行承担相关的风险。
5.您同意平台在提供服务的过程中以各种方式投放商业性广告或其他任何类型的商业
信息〈包括但不限于在平台的任何位置上投放广告〉，您同意接受我方通过电子邮件、站内
短信、手机短信、平台公告或其他方式向您发送促销或其他相关商业信息。
6.您同意在使用我方平台服务过程中，遵守以下法律法规:《中华人民共和国网络安全法》《中华人民共和国著作权法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《信息网洛传播权保护条例》等有关计算机及互联网规定的法律、法规。在任何情况下，平台一旦合理地认为您的行为可能违反上述法律、法规，可以在任何时候，不经事先通冬止向您提供服务。
{"\n"}五、用户信息的使用和保护{"\n"}
1．在您使用平台相关服务时，平台将会获取您的如下信息:
2．1日志信息，当您使用平台相关服务时，我们会自动收集您对我们服务的使用情况，
作为有关网络日志保存。例如您的搜索查询内容、地址、浏览器的类型、使用的语言、
访问服务的日期和时间、cookies、web beacom等。
2．2设备或应用信息，某些移动设备或应用包含唯一应用程序编号。例如您使用的移动
设备、浏览器或您使用的用于接入“浙里说”服务的其他程序所提供的配置信息、设备
版本号、设备识别码、地址等。
为了提供更好的服务与改善用户体验，“浙里说”软件可能会记录硬件型号、操作系统版本号、国际移动设备身份码红（MEI）、网络设备硬件地址（MAC）等信息数据。
2．3位置信息，当您开启设备定位功能并使浙里说基于位置提供的相关服务时，在获得您的同意后，我们会使用各种技术进行定位，以使得您不需要手动输入自身地理坐标就可获得相关服务。这些技术包括P地址、GPs以及能够提供相关信息的其他传感器（比如可能需要提供附近设备、Wi-Fi接入点和基站的信息）。您可以通过关闭定位功能，停止告知“浙里说”软件关干您的地理位置（大多数移动设备允许您关闭定位服务，具体建议您联系您的移动设备的服务商或生产商）。
4.当您使用浙里说的搜索服务时，我们会收集您的查询关键字信息、设备信息等，为了提供高效的搜索服务，这些信息有部分会暂存存储在您的本地存储设备之中。在此，您需要注意的是，您的关键词信息无法单独识别您的个人身份，其不属干您的个人信息，因此我们有权以其他的目的对其进行使用，只有当您的搜索关键词信息与您的其他信息互有联系并可以识别您的个人身份时，则在结合使用期间，我们会将您的搜索关键词信息作为您的个人信息，与您的搜索历史记录—同按照本隐私政策对其进行处理与保护。
5.在您使用“浙里说”提供的身份认证服务时，我们会收集您的姓名、身份证号、职业、有关身份证明等信息，“浙里说”对您的这些隐私信息会加以最大程度的保护，
如果您不提供这些信息，我们将无法提供相关服务。
6.当您参加“浙里说”的有关营销活动时，我们会收集您的姓名、通信地址、联系方式、银行账号等信息。这些信息是您收到转账或者礼品的基础，如果您拒绝提供这些信息，我们将无法向您转账或发放礼品。
{"\n"}六、争议解决条款{"\n"}
1．本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国法律，如法律无相关规定的，参照商业惯例或行业惯例。
2．您因使用平台服务所产生及与平台服务有关的争议，应当友好协商解决。协商不成时，任何一方均可向公司所在地人民法院提起诉讼。
{"\n"}3．本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。

                    </Text>
                    
                        

                    
                    
                    </View>
                    <TouchableOpacity style={{ borderColor: 'black',width:160 ,borderRadius: 10, padding: 6,backgroundColor:'#E0E0E0',elevation:2,position:"absolute",right:6,bottom:10 }} 
                         onPress={() => {
                            this.props.navigation.push("注册");
                          }}>
                               <Text style={{ fontSize: 18, color: 'black' }}>同意并进行下一步</Text>

                        </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

}