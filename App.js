import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainTabContainer from './screens/MainTabContainer'
import DrawerContent from './screens/DrawerContent'
import Shop from './screens/Shop'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer  >
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={MainTabContainer} />
        <Drawer.Screen name="Shop" component={Shop} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}