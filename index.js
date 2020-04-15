/**
 * @format
 */

import {Appearance, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Appearance.addChangeListener(({colorScheme}) => {
  console.log(colorScheme);
});

AppRegistry.registerComponent(appName, () => App);
