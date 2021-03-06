import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

import constant from '../common/Constant';
import Banner from "../common/Banner";
import styles from '../style/DetailStyle';

var banner = [
    "http://a.hiphotos.baidu.com/image/pic/item/ac4bd11373f08202e2518d6d45fbfbedaa641ba4.jpg",
    "http://e.hiphotos.baidu.com/image/pic/item/0df3d7ca7bcb0a467e97177b6563f6246b60af3f.jpg",
    "http://g.hiphotos.baidu.com/image/pic/item/b8014a90f603738d87dff378bd1bb051f919ecd7.jpg",
    "http://b.hiphotos.baidu.com/image/pic/item/58ee3d6d55fbb2fb12adba45414a20a44723dce7.jpg",
];

/**
 * 设置
 */
class MineSetting extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
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

                <Banner
                    bannerData={banner}/>

                {/*<TouchableOpacity style={styles.button} activeOpacity={0.5}>*/}
                    {/*<Text style={{color: 'white'}}>我的</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }
}

module.exports = MineSetting;