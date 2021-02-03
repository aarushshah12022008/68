import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fb from './screens/fb';
import insta from './screens/insta';

export default class App extends React.Component{
  render(){
    return(
      </AppContainer>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  fb:{screens:fb},
  insta:{screens:insta},
});

const AppContainer = createAppContainer(TabNavigator);