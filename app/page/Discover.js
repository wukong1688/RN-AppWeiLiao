import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import constant from "../common/Constant";
import icon_right from '../res/icon_right.png';
import ic_menu_star from '../res/ic_menu_star.png';
import ic_image_praise from '../res/ic_image_praise.png';

class Discover extends Component {

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <TouchableOpacity activeOpacity={0.8} style={styles.rowArea} onPress={() => {
                        this.props.navigation.navigate('DiscoverFriendZone', {title: constant.stringFriend})
                    }}>
                        <Image source={ic_menu_star} style={styles.leftIcon}/>
                        <Text style={styles.title}>朋友圈</Text>
                        <Image source={icon_right} style={styles.rightIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={styles.rowArea} onPress={() => {
                        this.props.navigation.navigate('DiscoverNews', {title: constant.stringNews})
                    }}>
                        <Image source={ic_image_praise} style={styles.leftIcon}/>
                        <Text style={styles.title}>看一看</Text>
                        <Image source={icon_right} style={styles.rightIcon}/>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    header: {
        flex: 1,
        marginTop: 16,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 160,
        backgroundColor: '#fff',
    },
    rowArea: {
        flex: 1,
        marginTop: 16,
        paddingLeft: 10,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
    },
    leftIcon: {
        width: 18,
        height: 18,
        marginRight: 6,
    },
    rightIcon: {
        width: 10,
        height: 10,
        position: 'absolute',
        right: 20,
    },
    bottom: {
        flex: 1,
        marginTop: 10,
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 14,
        color: constant.textBlack,
    }
});

module.exports = Discover;