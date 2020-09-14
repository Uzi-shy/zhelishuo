/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './start/connect startup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest 