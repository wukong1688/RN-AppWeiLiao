import React, {Component} from 'react';
import {StatusBar, View, WebView} from 'react-native';

import constant from '../common/Constant';
import styles from '../style/DetailStyle';

/**
 * 关于我们
 */
export default class AboutUs extends Component {

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
        let url = this.props.navigation.state.params.url;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={constant.primaryColor}
                    barStyle={'light-content'}/>
                <WebView
                    style={styles.web}
                    source={{uri: url}}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </View>
        );
    }
}

