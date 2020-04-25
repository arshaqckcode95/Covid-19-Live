import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity } from "react-native";
// import {Actions} from 'react-native-router-flux';
import { Card } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class CountryListItem extends Component{



    render(){

        return(
        
           <TouchableOpacity onPress={this.props.clickedItem}>
          
                <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',margin:5}}>
             
                    <View style={{width:'70%',marginLeft:10,marginTop:10}}>
                       <Text style={{fontSize:17,fontWeight:'bold'}}>{this.props.itemName}</Text>
                    </View>     
             
                    <View style={{width:'20%',alignSelf:'flex-end',marginRight:10}}>
                       <View style={{backgroundColor:'orange',borderRadius:20/2,width:20,height:20,alignItems:'center',alignSelf:'flex-end',justifyContent:'center'}}>
                        <Icon name="arrow-right" size={5}   style={{ color:'white'   }}/>
                        </View>
                    </View>  
                 </View>
        
            </TouchableOpacity>
       
          
        )
    }
}