import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title,Caption,Paragraph,Drawer,Text, TouchableRipple,Switch } from 'react-native-paper'

const DrawerContent = (props) => {
    console.log("props",props)
    const [isDarkThem, setIsDarkThem] = useState(false)

    const toggleTheme =()=>{
        setIsDarkThem(!isDarkThem)
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{flexDirection:"row",marginTop:15}}>
                            <Avatar.Image 
                                source={require("../static/avatar.png")} 
                                size={70}
                            />
                            <View style={{marginLeft:15}}>
                                <Title style={styles.title}>DoHung</Title>
                                <Caption style={styles.caption}>@hungdomanh95</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph,styles.caption} >80</Paragraph>
                                <Caption style={styles.caption} >Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph,styles.caption}>100</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem label="Home" onPress={() => {props.navigation.navigate('Home')}} />
                        <DrawerItem label="Inventory" onPress={()=>{}} />
                        <DrawerItem label="Assets" onPress={()=>{}} />
                        <DrawerItem label="Shop" onPress={() => {props.navigation.navigate('Shop')}} />
                   
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>toggleTheme()}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkThem}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem label='Sign Out'/>
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });