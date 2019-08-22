import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home.js';
import Youtube from './screens/Youtube.js';

const Header = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: '#fb3191', flex: 1}}>{props.title}</Text>
      <Text style={{fontSize: 13, color: '#fb7c91', paddingBottom: 5}}>{props.subtitle}</Text>
    </View>
  )
}

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <Header
            title={'UpByte'}
            subtitle={navigation.getParam('refreshDate', '-')}
          />
        ),
        headerStyle: {
          backgroundColor: '#fedad9',
        },
      }
    }
  },
  Youtube: {
    screen: Youtube,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'Youtube'),
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fedad9'
    },
    headerTintColor: '#fb7c91',
    headerTitleStyle: {
      color: '#fb3191'
    },
    // initialRouteName: 'Youtube',
  }
})

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App