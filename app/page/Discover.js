import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Image, ScrollView,
} from 'react-native';
import constant from "../common/Constant";

class Discover extends Component {

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.aboutAuthor}>
                        <Image source={require('../res/ic_menu_star.png')} style={styles.leftIcon}/>
                        <Text style={styles.title}
                              onPress={() => {
                                  this.props.navigation.navigate('FriendZone', {
                                      title: constant.stringFriend,
                                  })
                              }}>朋友圈</Text>
                        <Image source={require('../res/icon_right.png')} style={styles.rightIcon}
                               onPress={() => {
                                   this.props.navigation.navigate('FriendZone', {
                                       title: constant.stringFriend,
                                   })
                               }}
                        />
                    </View>

                    <View style={styles.aboutAuthor}>
                        <Image source={require('../res/ic_image_praise.png')} style={styles.leftIcon}/>
                        <Text style={styles.title} onPress={() => {
                            this.props.navigation.navigate('FriendZone', {
                                title: constant.stringFriend,
                            })
                        }}>看一看</Text>
                        <Image source={require('../res/icon_right.png')} style={styles.rightIcon}
                               onPress={() => {
                                   this.props.navigation.navigate('FriendZone', {
                                       title: constant.stringFriend,
                                   })
                               }}
                        />
                    </View>
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
    aboutAuthor: {
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