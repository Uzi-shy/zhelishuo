/*
 Navicat Premium Data Transfer

 Source Server         : demo0
 Source Server Type    : MongoDB
 Source Server Version : 40208
 Source Host           : localhost:27017
 Source Schema         : user

 Target Server Type    : MongoDB
 Target Server Version : 40208
 File Encoding         : 65001

 Date: 11/10/2020 19:55:18
*/


// ----------------------------
// Collection structure for KouXiangTang
// ----------------------------
db.getCollection("KouXiangTang").drop();
db.createCollection("KouXiangTang");

// ----------------------------
// Documents of KouXiangTang
// ----------------------------
db.getCollection("KouXiangTang").insert([ {
    _id: ObjectId("5f51fb64ca2e0000cd0032f2"),
    identity: "Administrator",
    phonenumber: "19858167004",
    username: "admin",
    password: "admin",
    loginstate: "false"
} ]);
db.getCollection("KouXiangTang").insert([ {
    _id: ObjectId("5f660561e25b3840580f786b"),
    identity: "user",
    phonenumber: "19858167004",
    username: "hf",
    password: "123",
    loginstate: "false"
} ]);
db.getCollection("KouXiangTang").insert([ {
    _id: ObjectId("5f69b38e6229522f08e380d5"),
    identity: "user",
    phonenumber: "19858192042",
    username: "lx",
    password: "123",
    loginstate: "false"
} ]);

// ----------------------------
// Collection structure for KouXiangTangxx
// ----------------------------
db.getCollection("KouXiangTangxx").drop();
db.createCollection("KouXiangTangxx");

// ----------------------------
// Documents of KouXiangTangxx
// ----------------------------
db.getCollection("KouXiangTangxx").insert([ {
    _id: ObjectId("5f660589e25b3840580f786c"),
    username: "hf",
    name: "小黄",
    gexinqianming: "努力做项目",
    sex: "男",
    data: NumberInt("2018"),
    toux: {
        uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1863723c-c9e2-4627-8725-256c8e6cd35d.jpg",
        width: NumberInt("500"),
        height: NumberInt("500"),
        mime: "image/jpeg"
    },
    dongtai: NumberInt("0"),
    fensi: NumberInt("0"),
    guanzhu: NumberInt("0"),
    shouchang: NumberInt("0")
} ]);
db.getCollection("KouXiangTangxx").insert([ {
    _id: ObjectId("5f69b3db6229522f08e380d6"),
    username: "lx",
    name: "小欣欣",
    gexinqianming: "山沟沟太痛苦了",
    sex: "女",
    data: NumberInt("2018"),
    toux: {
        uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg",
        width: NumberInt("500"),
        height: NumberInt("500"),
        mime: "image/jpeg"
    },
    dongtai: NumberInt("0"),
    fensi: NumberInt("0"),
    guanzhu: NumberInt("0"),
    shouchang: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for guanzhu
// ----------------------------
db.getCollection("guanzhu").drop();
db.createCollection("guanzhu");

// ----------------------------
// Documents of guanzhu
// ----------------------------
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2baa9f1960000025002c18"),
    username: "小黄",
    toux: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596725100362&di=0f4eb2bccea56c7b2e4e36e69d1a8e79&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D6803529973f0f736d8fe4c093a54b382%2Fe924b899a9014c08ad614c43017b02087af4f4fa.jpg",
    day: "7-12",
    pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596726574183&di=d9a6c86744da11b54a490da638b0815c&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft018cf594660040fa3b.jpg",
    txt: "姑苏城外寒山寺，夜半钟声到客船。",
    good: 23782,
    pinglun: 10,
    quanwen: "“姑苏城外寒山寺”出自唐代诗人张继所作《枫桥夜泊 / 夜泊枫江》,全诗原文如下：\n月落乌啼霜满天，江枫渔火对愁眠。\n姑苏城外寒山寺，夜半钟声到客船。\n白话文释义：月亮已落下乌鸦啼叫寒气满天，对着江边枫树和渔火忧愁而眠。姑苏城外那寂寞清静寒山古寺，半夜里敲钟的声音传到了客船。\n姑苏：苏州的别称，因城西南有姑苏山而得名。寒山寺：在枫桥附近，始建于南朝梁代。相传因唐代僧人寒山、拾得曾住此而得名。在今苏州市西枫桥镇。本名“妙利普明塔院”，又名枫桥寺；另一种说法，“寒山”乃泛指肃寒之山，非寺名。寺曾经数次重建，现在的寺宇，为太平天国以后新建。寺钟在第二次世界大战时，被日本人运走，下落不明。"
} ]);
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2bfd24cd3d000001001722"),
    username: "小欣欣",
    toux: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1628338532,4027322966&fm=15&gp=0.jpg",
    day: "8-10",
    pic: "http://121.196.27.141/img/a.jpg",
    txt: "千山鸟飞绝，万径人踪灭。",
    good: 2,
    pinglun: 20
} ]);
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2bfe04cd3d000001001723"),
    username: "小红",
    toux: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3940158622,3380894476&fm=15&gp=0.jpg",
    day: "8-11",
    pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596728521616&di=4d3db8bce8ef7fdb691cdbc0da50189e&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F68%2F26%2F875b87f8d7a4b44.jpg",
    txt: "黄河入海流，江入大荒流",
    good: 3,
    pinglun: 30
} ]);
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2c00cccd3d000001001724"),
    username: "猪头妹",
    toux: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3901056882,3964416483&fm=15&gp=0.jpg",
    day: "8-10",
    pic: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3386583553,507233617&fm=26&gp=0.jpg",
    txt: "把悲欢谱作曲,为你弹起才感伤何为身不由己",
    good: 345,
    pinglun: 777
} ]);
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2c09cfcd3d000001001725"),
    username: "天才嗷",
    toux: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1163855683,1460645839&fm=26&gp=0.jpg",
    day: "7-11",
    pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596729303151&di=5522b88571af293a572662c14ed9d372&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201502%2F05%2F20150205144311_MZsen.jpeg",
    txt: "有欣插柳柳成荫",
    good: 20,
    pinglun: 20
} ]);
db.getCollection("guanzhu").insert([ {
    _id: ObjectId("5f2c0f28815c0000c3006352"),
    username: "天才嗷",
    toux: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1163855683,1460645839&fm=26&gp=0.jpg",
    day: "7-12",
    pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596729303151&di=5522b88571af293a572662c14ed9d372&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201502%2F05%2F20150205144311_MZsen.jpeg",
    txt: "斯人若彩虹，遇见才知有",
    good: 20,
    pinglun: 20
} ]);

// ----------------------------
// Collection structure for publish_to_administrator
// ----------------------------
db.getCollection("publish_to_administrator").drop();
db.createCollection("publish_to_administrator");

// ----------------------------
// Documents of publish_to_administrator
// ----------------------------
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f6ef52468fab90d0c9b209c"),
    username: "hf",
    gerenxx: [
        {
            _id: "5f660589e25b3840580f786c",
            username: "hf",
            name: "小黄",
            gexinqianming: "努力做项目",
            sex: "男",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1863723c-c9e2-4627-8725-256c8e6cd35d.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "abab",
    words: "ababb",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "小黄",
    label: [ ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("1"),
    hight: NumberInt("400"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("520"),
    zhuanfa: NumberInt("222"),
    pinglunstate: [
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "十二",
            words: "来旅游不亏",
            time: "10-4"
        },
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "小林同学",
            words: "66666666",
            time: "10-9"
        },
        {
            id: "5f6ef52468fab90d0c9b209c",
            toux: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg",
            name: "小欣欣",
            words: "打算的",
            time: "10-06"
        },
        {
            id: "5f6ef52468fab90d0c9b209c",
            toux: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg",
            name: "小欣欣",
            words: "啦啦啦了",
            time: " 10-08"
        }
    ]
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f793cb45cba303b144ada59"),
    username: "hf",
    gerenxx: [
        {
            _id: "5f660589e25b3840580f786c",
            username: "hf",
            name: "小黄",
            gexinqianming: "努力做项目",
            sex: "男",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1863723c-c9e2-4627-8725-256c8e6cd35d.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "22",
    words: "22",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "1",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("2"),
    hight: NumberInt("110"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0"),
    pinglunstate: [
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "十二",
            words: "来旅游不亏",
            time: "10-4"
        },
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "小林同学",
            words: "66666666",
            time: "10-9"
        }
    ]
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f793cbe5cba303b144ada5a"),
    username: "hf",
    gerenxx: [
        {
            _id: "5f660589e25b3840580f786c",
            username: "hf",
            name: "小黄",
            gexinqianming: "努力做项目",
            sex: "男",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1863723c-c9e2-4627-8725-256c8e6cd35d.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "3",
    words: "22",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "1",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("1"),
    hight: NumberInt("220"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0"),
    pinglunstate: [
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "十二",
            words: "来旅游不亏",
            time: "10-4"
        },
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "小林同学",
            words: "66666666",
            time: "10-9"
        }
    ]
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f793cc65cba303b144ada5b"),
    username: "hf",
    gerenxx: [
        {
            _id: "5f660589e25b3840580f786c",
            username: "hf",
            name: "小黄",
            gexinqianming: "努力做项目",
            sex: "男",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1863723c-c9e2-4627-8725-256c8e6cd35d.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "4",
    words: "22",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "1",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("2"),
    hight: NumberInt("220"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0"),
    pinglunstate: [
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "十二",
            words: "来旅游不亏",
            time: "10-4"
        },
        {
            toux: "http://121.196.27.141/img/girl.jpg",
            name: "小林同学",
            words: "66666666",
            time: "10-9"
        }
    ]
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f798ea97bf81d340431fb70"),
    username: "lx",
    gerenxx: [
        {
            _id: "5f69b3db6229522f08e380d6",
            username: "lx",
            name: "小欣欣",
            gexinqianming: "山沟沟太痛苦了",
            sex: "女",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "这里说",
    words: "3123\nq",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "2",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("1"),
    hight: NumberInt("220"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0")
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f798ead7bf81d340431fb71"),
    username: "lx",
    gerenxx: [
        {
            _id: "5f69b3db6229522f08e380d6",
            username: "lx",
            name: "小欣欣",
            gexinqianming: "山沟沟太痛苦了",
            sex: "女",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "这里说",
    words: "3123\nq",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "2",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("2"),
    hight: NumberInt("110"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0")
} ]);
db.getCollection("publish_to_administrator").insert([ {
    _id: ObjectId("5f7b15a6742114547ce9218b"),
    username: "all",
    gerenxx: [
        {
            _id: "5f7b1484742114547ce9218a",
            username: "all",
            name: "2",
            gexinqianming: "3",
            sex: "男",
            data: NumberInt("2018"),
            toux: {
                uri: "file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/5b8724d5-6a8d-401f-b24a-b5380e2de4f5.jpg",
                width: NumberInt("500"),
                height: NumberInt("500"),
                mime: "image/jpeg"
            },
            dongtai: NumberInt("0"),
            fensi: NumberInt("0"),
            guanzhu: NumberInt("0"),
            shouchang: NumberInt("0")
        }
    ],
    title: "11",
    words: "11223",
    pick: [
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082758.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200901_082807.jpg",
        "file:///data/user/0/com.zhelishuo/cache/react-native-image-crop-picker/IMG_20200926_064806.jpg"
    ],
    author: "a",
    label: [
        NumberInt("0")
    ],
    yuanchuang: true,
    simi: "所有人可见",
    promise: true,
    idd: NumberInt("1"),
    hight: NumberInt("220"),
    pinglun: NumberInt("0"),
    dianzhan: NumberInt("0"),
    zhuanfa: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for searchtext
// ----------------------------
db.getCollection("searchtext").drop();
db.createCollection("searchtext");

// ----------------------------
// Documents of searchtext
// ----------------------------
db.getCollection("searchtext").insert([ {
    _id: ObjectId("5f6746ffb021b73b7001284b"),
    searchText: "小黄",
    times: 1
} ]);
db.getCollection("searchtext").insert([ {
    _id: ObjectId("5f69953d6229522f08e38050"),
    searchText: "欣",
    times: NumberInt("3")
} ]);

// ----------------------------
// Collection structure for test
// ----------------------------
db.getCollection("test").drop();
db.createCollection("test");

// ----------------------------
// Documents of test
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5f0d6bf958898e10304e36e0"),
    name: "菜鸟工具",
    url: "https://c.runoob.com",
    type: "cn"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f0d6bf958898e10304e36e1"),
    name: "Google",
    url: "https://www.google.com",
    type: "en"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f0d6bf958898e10304e36e2"),
    name: "Facebook",
    url: "https://www.google.com",
    type: "en"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f0d6bf958898e10304e36e3"),
    name: "菜花工具",
    url: "https://c.runoob.com",
    type: "en"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f13fab0092f7e2408178618"),
    name: "菜鸟工具",
    url: "https://c.runoob.com",
    type: "cn"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f13fab0092f7e2408178619"),
    name: "Google",
    url: "https://www.google.com",
    type: "en"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f13fab0092f7e240817861a"),
    name: "Facebook",
    url: "https://www.google.com",
    type: "en"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f13fab0092f7e240817861b"),
    name: "菜花工具",
    url: "https://c.runoob.com",
    type: "en"
} ]);
