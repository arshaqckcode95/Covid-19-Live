import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity } from "react-native";
import {Scene, Router, Stack, Drawer,Lightbox} from 'react-native-router-flux';
import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import CountryScreen from './src/screens/CountryScreen'
import CountryDetailScreen from './src/screens/CountryDetailScreen'
export default class App extends Component{

    render(){

        return(

           <Router>

             <Scene key="root" hideNavBar>
               <Scene key={'SplashScreen'} component={SplashScreen} initial={true} hideNavBar={true}/>
                <Scene key={'HomeScreen'} component={HomeScreen}  hideNavBar={true}/>
                  <Scene key={'CountryScreen'} component={CountryScreen} hideNavBar={true}/>
                  <Scene key={'CountryDetailScreen'} component={CountryDetailScreen} hideNavBar={true}/>
            </Scene>
         </Router>    
        )
    }
}