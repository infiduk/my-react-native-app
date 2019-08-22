import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import CoinItem from '../components/CoinItem.js';
import { getCoinIconUri } from '../libs/Constants.js';
import { SampleData } from '../assets/sampleData.js';

export default class CoinView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],
            isLoading: false,
        };
    }

    _getCoinDatas = async(limit) => {
        this.setState({
            isLoading: true,
        });

        try {
            const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
            const responseJson = await response.json();
            
            const date = new Date();
            const now = date.toLocaleString();

            if(this.props.refreshDate != null) {
                this.props.refreshDate(now);
            }

            await this.setState({
                coinDatas: responseJson,
                isLoading: false,
            });
        } catch(error) {
            console.error('_getCoinDatas', error);
        }
    }

    _renderItem = ({item}) => {
        const {rank, name, price_usd, market_cap_usd, last_updated} = item;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation &&
                    this.props.navigation.push('Youtube', {title: name})}
            >
            <CoinItem
                rank={rank}
                name={name}
                price={price_usd}
                volume={market_cap_usd}
                iconUri={getCoinIconUri(name)}
            />
            </TouchableOpacity>
        );
    }

    componentDidMount() {
        this._getCoinDatas(10);
        // setInterval(() => {
        //     this._getCoinDatas(1000);
        //     console.log('toggled!');
        // }, 10000000);
    }

    render() {
        return (    
            <FlatList
                style={{backgroundColor: '#fef0ef'}}
                contentContainerStyle={this.props.contentContainer}
                data={this.state.coinDatas}
                keyExtractor={(item) => item.name}
                renderItem={this._renderItem}
                refreshing={this.state.isLoading}
                onRefresh={this._getCoinDatas}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef0ef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
    },
    contentContainer: {
        backgroundColor: '#fef0ef'
    }
});

 /*
        let coinItems = [];

        for(var i = 0; i < sampleData.length; i++) {
            let data = sampleData[i];
            let item = (
                <CoinItem
                    key={data.id}
                    rank={data.rank}
                    name={data.name}
                    price={data.price_usd}
                    volume={data.market_cap_usd}
                />
            )
            coinItems.push(item);
        }

        let coinItems = this.state.coinDatas.map((data, index) => {
            const {rank, name, price_usd, market_cap_usd, last_updated} = data;

            return (
                <CoinItem
                    key={index}
                    rank={rank}
                    name={name}
                    price={price_usd}
                    volume={market_cap_usd}
                    iconUri={getCoinIconUri(name)}
                />
            );
        });
*/