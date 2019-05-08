import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemBox: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 6,
        paddingRight: 6,
    },
    leftArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
    },
    rightArea: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    desc: {
        fontSize: 15,
        color: 'black',
    },

});

module.exports = styles;