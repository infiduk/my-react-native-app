import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import CoinView from './CoinView.js';
import TopBar from '../components/TopBar.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    }
  }

  _setRefreshDate = (date) => {
    console.log('Updated: ' + date);
    if(this.props.navigation) {
      this.props.navigation.setParams({refreshDate: date});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CoinView 
          navigation={this.props.navigation}
          refreshDate={this._setRefreshDate}
          customStyle={styles.coinView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#fedad9',
    height: Constants.statusBarHeight
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fef0ef',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  }
});
