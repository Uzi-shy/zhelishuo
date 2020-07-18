import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Appp from 'E:/ad/zhelishuo/App';
import startup from './startup';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//     </View>
//   );
// }

// function ModalScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} 
//       title="Dismiss" />
//     </View>
//   );
// }



const RootStack = createStackNavigator();



export default function connect() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none" independent="true">
        
        <RootStack.Screen name="startup" component={startup} />
        <RootStack.Screen name="Appp" component={Appp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


