import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image } from "react-native";
import {Scene, Router, Stack, Drawer,Lightbox} from 'react-native-router-flux';
import { Card } from "native-base";
import AppLogo from './assets/Logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class SideMenu extends Component{

    render(){
    
        return(

         <View style={{flex:1,backgroundColor:'white'}}>
           <ScrollView>
           <View style={{backgroundColor:'#2E4053',borderBottomLeftRadius:25}}>
            <View style={{margin:15,}}>
               <Card style={{width:90,height:80}}>
                  <Image source={AppLogo} style={{width:90,height:80}}/>
               </Card>
               <Text style={{color:'white'}}>COVID-19 LIVE STATS</Text>
            </View>
            </View>

            <View style={{}}>
            <TouchableOpacity onPress={()=>{ Actions.HomeScreen()}}>
                <View style={{flexDirection:'row',margin:17}}>
                   <View>
                    <Icon name="home" size={35}   style={{ color:'orange'   }}/>
                  </View>
                  <View style={{margin:9}}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}>Home</Text>
                  </View>
                </View>
               </TouchableOpacity> 
                 <TouchableOpacity onPress={()=>{ Actions.CountryScreen()}}>
                  <View style={{flexDirection:'row',margin:17}}>
                   <View>
                    <Icon name="home" size={35}   style={{ color:'orange'   }}/>
                  </View>
                  <View style={{margin:9}}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}>Country List</Text>
                  </View>
                </View>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{ Actions.CountryScreen()}}>
                  <View style={{flexDirection:'row',margin:17}}>
                   <View>
                    <Icon name="home" size={35}   style={{ color:'orange'   }}/>
                  </View>
                  <View style={{margin:9}}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}>Help</Text>
                  </View>
                </View>
                 </TouchableOpacity>
            </View>
           </ScrollView>
         </View>  
   
        )
    }
}