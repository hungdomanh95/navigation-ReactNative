import React from 'react'
import { View, Text, Button } from 'react-native'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'

const MainTabContainer = ({navigation}) => {
    return (
        <View>
            <Text>MainTabContainer!!!</Text>
            <Button onPress={()=>navigation.openDrawer()} title="OPEN"></Button>
        </View>
    )
}

export default MainTabContainer
