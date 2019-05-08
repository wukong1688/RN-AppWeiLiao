import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View,} from 'react-native';

import constant from '../common/Constant';
import styles from '../style/DetailStyle';

import icon_right from '../res/icon_right.png';
import ic_menu_star from '../res/ic_menu_star.png';
import ic_image_praise from '../res/ic_image_praise.png';

class Mine extends Component {

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.header}>
                        <Image
                            resizeMode='contain'
                            source={require('../res/head_icon.png')}
                        />
                        <Text style={styles.myName}>刘玄德</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.rowArea} onPress={() => {
                        this.props.navigation.navigate('MineSetting', {title: constant.stringSetting})
                    }}>
                        <Image source={ic_menu_star} style={styles.leftIcon}/>
                        <Text style={styles.title}>设置</Text>
                        <Image source={icon_right} style={styles.rightIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={styles.rowArea} onPress={() => {
                        this.props.navigation.navigate('AboutUs', {
                            title: constant.stringAbout,
                            url: constant.githubUrl
                        })
                    }}>
                        <Image source={ic_image_praise} style={styles.leftIcon}/>
                        <Text style={styles.title}>关于我们</Text>
                        <Image source={require('../res/icon_right.png')} style={styles.rightIcon}/>
                    </TouchableOpacity>

                    {/*<View style={styles.bottom}>*/}
                    {/*<Text style={{textAlign: 'center',color: constant.textGray}}>我是有底线的</Text>*/}
                    {/*</View>*/}
                </ScrollView>

            </View>
        );
    }
}


module.exports = Mine;