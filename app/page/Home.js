import React, {Component} from "react";
import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";

import constant from "../common/Constant";
import styles from '../style/HomeStyle';

const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page=';
let pageNo = 1;//当前第几页
let totalPage = 5;//总的页数
let itemNo = 0;//item的个数

var navigation = null;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing: false,//下拉控制
        },
            navigation = this.props.navigation;
    }

    //网络请求——获取第pageNo页数据
    fetchData(pageNo) {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL + pageNo)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = itemNo;

                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    });
                    i++;
                });
                itemNo = i;
                console.log("itemNo:" + itemNo);
                let foot = 0;
                if (pageNo >= totalPage) {
                    foot = 1;//listView底部显示没有更多数据了
                }

                this.setState({
                    //复制数据源
                    dataArray: this.state.dataArray.concat(dataBlob),
                    isLoading: false,
                    showFoot: foot,
                    isRefreshing: false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    componentDidMount() {
        //请求数据
        this.fetchData(pageNo);
    }

    //加载等待页
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='blue'
                    size="small"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <View style={styles.container}>
                <Text>
                    Fail
                </Text>
            </View>
        );
    }

    //返回itemView
    _renderItemView({item}) {
        return (
            <View style={styles.itemBox}>
                <View style={styles.leftArea}>
                    <Image style={styles.avatar} source={{uri: item.value.owner.avatar_url}}/>
                </View>
                <View style={styles.rightArea}>
                    <Text style={styles.title} onPress={() => {
                        navigation.navigate('HomeDetail', {
                            title: constant.stringDialogDetail,
                            url: constant.githubUrl
                        })
                    }}>{item.value.name}</Text>
                    <Text style={styles.desc} onPress={() => {
                        navigation.navigate('HomeDetail', {
                            title: constant.stringDialogDetail,
                            url: constant.githubUrl
                        })
                    }}>{item.value.description}</Text>
                </View>
            </View>
        );
    }

    renderData() {
        return (

            <FlatList
                data={this.state.dataArray}
                renderItem={this._renderItemView}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                ItemSeparatorComponent={this._separator}
            />

        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            console.log(this.state.error);
            console.log(this.state.errorInfo);
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }

    _separator() {
        return <View style={{height: 1, backgroundColor: '#999999'}}/>;
    }

    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{height: 30, alignItems: 'center', justifyContent: 'flex-start',}}>
                    <Text style={{color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator/>
                    <Text>正在加载...</Text>
                </View>
            );
        } else if (this.state.showFoot === 0) {
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached() {
        //如果是正在加载中或没有更多数据了，则返回
        if (this.state.showFoot != 0) {
            return;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if ((pageNo != 1) && (pageNo >= totalPage)) {
            return;
        } else {
            pageNo++;
        }
        //底部显示正在加载更多数据
        this.setState({showFoot: 2});
        //获取数据
        this.fetchData(pageNo);
    }
}


module.exports = Home;
