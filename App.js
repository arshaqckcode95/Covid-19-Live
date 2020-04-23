import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity } from "react-native";
// import {Scene, Router, Stack, Drawer,Lightbox} from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import CountryScreen from './src/screens/CountryScreen'
import CountryDetailScreen from './src/screens/CountryDetailScreen'
export default class App extends Component{

    render(){
        const HomeStack = createStackNavigator();
        function HomeStackScreen() {
        return (
            <HomeStack.Navigator>
               <HomeStack.Screen name="SplashScreen" component={SplashScreen}   options={{ headerShown:false }} />
                <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false }} />
                <HomeStack.Screen name="CountryScreen" component={CountryScreen} options={{headerShown:false }}/>
                <HomeStack.Screen name="CountryDetailScreen" component={CountryDetailScreen} options={{headerShown:false }}/>
            </HomeStack.Navigator>
        );
        }
const Drawer = createDrawerNavigator();
        return(

        //    <Router>
        //      <Scene key="root" hideNavBar>
        //        <Scene key={'SplashScreen'} component={SplashScreen} initial={true} hideNavBar={true}/>
        //         <Scene key={'HomeScreen'} component={HomeScreen}  hideNavBar={true}/>
        //        <Scene key={'CountryScreen'} component={CountryScreen} hideNavBar={true}/>
        //        <Scene key={'CountryDetailScreen'} component={CountryDetailScreen} hideNavBar={true}/>
        //     </Scene>
        //  </Router>    
    //    <NavigationContainer>
    //     <Stack.Navigator initialRouteName="SplashScreen">
    //         <Stack.Screen name="SplashScreen" component={SplashScreen}   options={{ headerShown:false }} />
    //         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false }} />
    //         <Stack.Screen name="CountryScreen" component={CountryScreen} options={{headerShown:false }}/>
    //         <Stack.Screen name="CountryDetailScreen" component={CountryDetailScreen} options={{headerShown:false }}/>
    //     </Stack.Navigator>
    // </NavigationContainer>

        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            {/* <Drawer.Screen name="Settings" component={SettingsStackScreen} /> */}
        </Drawer.Navigator>
    </NavigationContainer>

        )
    }
}