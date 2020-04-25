import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity } from "react-native";
import {Scene, Router, Stack, Drawer,Lightbox} from 'react-native-router-flux';
import HomeScreen from '../screens/HomeScreen'
import CountryScreen from '../screens/CountryScreen'
import CountryDetailScreen from '../screens/CountryDetailScreen'
import SideMenu from './SideMenu'
export default class RouterInitialScreen extends Component{

    render(){
    
        return(

           <Router>
             <Scene key="root" hideNavBar>
               <Scene drawer key="drawer" contentComponent={SideMenu} drawerWidth={260} hideNavBar={true}>
                <Scene key="drawerroot" hideNavBar>
                    <Scene key={'HomeScreen'} component={HomeScreen} hideNavBar={true}/>
                    <Scene key={'CountryScreen'} component={CountryScreen} hideNavBar={true}/>
                    <Scene key={'CountryDetailScreen'} component={CountryDetailScreen} hideNavBar={true}/>
                </Scene>
               </Scene>
            </Scene>
         </Router>    
   

        )
    }
}