import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from './src/pages/homepage';
import Landing from './src/pages/landing';
import SignUp from './src/pages/signup';
import MyNotes from './src/pages/mynotes';
import Login from './src/pages/login';
import AddNotes from './src/pages/addNotes';
import DrawerContent from './src/pages/drawerContent';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={({props}) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Landing}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Sign Up"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Notes"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="My Notes"
          component={MyNotes}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Add Note" component={AddNotes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
