import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';

//展示的页面
import Home from './Home';
import Contact from './Contact';
import Discover from './Discover';
import Mine from './Mine';

//Tab
const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,//当前选项卡加载的页面
        navigationOptions: {
            tabBarLabel: '主页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('./main_tab_home_icon_pressed.png') : require('./main_tab_home_icon.png')}
                    style={[{height: 24, width: 24}]}
                />
            ),
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: '联系人',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('./main_tab_video_icon_pressed.png') : require('./main_tab_video_icon.png')}
                    style={[{height: 24, width: 24}]}
                />
            ),
        },
    },
    Discover: {
        screen: Discover,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('./main_tab_image_icon_pressed.png') : require('./main_tab_image_icon.png')}
                    style={[{height: 24, width: 24}]}/>
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('./main_tab_user_icon_pressed.png') : require('./main_tab_user_icon.png')}
                    style={[{height: 24, width: 24}]}/>
            ),
        }
    },
}, {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#45C018',
        inactiveTintColor: '#111111',
        showIcon: true, // 是否显示图标, 默认为false
        showLabel: true, // 是否显示label
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
        },
        indicatorStyle: {
            height: 0, // 不显示indicator
        },
    },

});

export default createAppContainer(TabNavigator);




