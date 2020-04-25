import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ExpenseScreen from './src/screens/Expense';
import ListScreen from './src/screens/ListScreen';

class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
       <NavigationContainer>
       <Drawer.Navigator initialRouteName="Login">
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Expense" component={ExpenseScreen}  />
         <Drawer.Screen name="Logout" component={LoginScreen}  />
       </Drawer.Navigator>
     </NavigationContainer>
    );
  }
}

export default App;
