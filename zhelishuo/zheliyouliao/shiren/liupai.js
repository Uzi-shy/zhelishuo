import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
 
export default class LeftCitySection extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            indexSelected: '唐',//默认选中
        }
    }
 
    _onClickItem(item) {
        this.setState({
            indexSelected: item.city,
        })
        //传递数据到右边显示组件
        this.props.onItemSelected(item.data)
    }
 
    _renderItem = ({item, index}) => (
            <View>
                <TouchableOpacity
                    style={[styles.leftBtnDefaultStyle, this.state.indexSelected === item.city && styles.leftBtnSelectedStyle]}
                    onPress={() => {this._onClickItem(item, index)}}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>
                            {item.city}
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* {
                    index === this.props.dataList.length - 1 ?
                        <View/>
                        :
                        <View
                            style={styles.lineStyle}/>
                } */}
            </View>
        )
 
    _keyExtractor = (item, index) => index.toString()
 
    render() {
        return (
            <FlatList
            showsVerticalScrollIndicator={false}
                style={styles.containerStyle}
                extraData={this.state}
                data={this.props.dataList}
                scrollEnabled={true}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
        )
    }
}
 
LeftCitySection.propTypes = {
    onItemSelected: PropTypes.func,//每次点击选中的回调函数
    dataList: PropTypes.array,
}
 
let styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
    },
    leftBtnDefaultStyle: {
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        marginTop:20,
    },
    leftBtnSelectedStyle: {
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#8E8E8E',
        marginTop:20,
    },
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        lineHeight: 30,
        fontWeight:'700'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        marginBottom: 8,
        marginTop: 8,
        minHeight: 34,
    },
    // lineStyle: {
        
    //     width: 100,
    //     borderBottomWidth: StyleSheet.hairlineWidth,
    // }
})