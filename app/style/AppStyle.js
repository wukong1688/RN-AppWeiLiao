const StyleSheet = require('../common/StyleSheet');

export const styles = StyleSheet.create({
    //结局ios上文字不垂直居中问题
    tabHeight: {//TabNavigator 的背景颜色
        ios: {
            backgroundColor: 'white',
        },
        android: {
            backgroundColor: 'white',
            height: 56,
        },
    },
    iconStyle: {
        ios: {
            marginBottom: 5,
        },
        android: {
            marginTop: -8,
            marginBottom: 8,
        },
    },
    labelStyle: {
        ios: {
            marginBottom: 5,
        },
        android: {
            fontSize: 10,
            marginTop: -4,
            marginBottom: -8,
        },
    }
});

module.exports = styles;