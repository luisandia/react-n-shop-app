/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import {name as appName} from './app.json';

// Do stuff and hide the splash when you want
setTimeout(() => {
  SplashScreen.hide();
}, 500);
YellowBox.ignoreWarnings(['Setting a timer']);
AppRegistry.registerComponent(appName, () => App);
