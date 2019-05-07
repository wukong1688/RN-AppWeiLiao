import React, {Component} from 'react';
import {StyleSheet, View, WebView, StatusBar} from 'react-native';

import constant from '../common/Constant';

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度和高度
var {width, height} = dimensions.get('window');

/**
 * 主页详情
 */
class HomeDetail extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        url: navigation.state.params.url,
        headerTitle: navigation.state.params.title,
        gestureResponseDistance: {horizontal: 300},
        headerBackTitle: null,
        //导航栏的样式
        headerStyle: {backgroundColor: constant.primaryColor},
        //导航栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: 'white',
        //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
        headerRight: (<View/>),
    });

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={constant.primaryColor}
                    barStyle={'light-content'}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
    web: {
        height: height,
        width: width,
        backgroundColor: '#F5FCFF'
    }

});

module.exports = HomeDetail;
