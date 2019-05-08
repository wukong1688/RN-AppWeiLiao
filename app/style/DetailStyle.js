/**
 * 详情页样式
 */
import {StyleSheet} from 'react-native';
import constant from "../common/Constant";

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度和高度
var {width, height} = dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#4398ff',
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
    myName: {
        fontSize: 16,
        marginTop: 12,
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
        width: 13,
        height: 22,
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

module.exports = styles;