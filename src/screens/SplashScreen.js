import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image } from "react-native";
import {Actions} from 'react-native-router-flux';
import AppLogo from '../components/assets/Logo.png'
import { Card } from "native-base";
export default class SplashScreen extends Component{


  componentDidMount() {
        this.FDelayScreen();
    }

    FDelayScreen = () => {
        this.timeoutHandle = setTimeout(() => {
     
           Actions.HomeScreen();
        }, 3000);
    };
    
    render(){

        return(

         <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         {/* <Card> */}
          <Image source={AppLogo} style={{width:90,height:80}}/>
         {/* </Card> */}
        <View style={{flexDirection:'column'}}>
        <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>COVID-19 LIVE STATS</Text>
        <Text style={{justifyContent:'space-between',alignSelf:'flex-end',marginTop:8,fontSize:15}}>Powered By SAMS</Text>
        </View>
         
         </View>    
        )
    }
}