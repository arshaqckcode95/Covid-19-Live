import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,BackHandler,Alert } from "react-native";
import {Actions} from 'react-native-router-flux';
import { Card } from "native-base";
import NetInfo from '@react-native-community/netinfo';
import Loading from '../components/Loading'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
export default class CountryDetailScreen extends Component{


    constructor(props){
        super(props);
            this.state = {
                dataSource:[],
                deathCount:'',
                isLoading:false,
                slug:'',
                url:'https://api.covid19api.com/live/country/'
            }
   }

 componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());
    }

   componentDidMount() {
       BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());


            }

        
  

  handleBackButtonClick=()=> {

    // Actions.pop()
    this.props.navigation.goBack()
      return true
    };

   
    render(){
     console.log('selected item details',this.props.route.params.selectedItemValue)
     if(this.state.isLoading){
        return (<Loading/>);
     }else {

     
        return(

   <View style={{ flex: 1, width:'100%',}}>
      
 <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{backgroundColor:'#2E4053',width:'100%',height:200}}>
         <View style={{backgroundColor:'#2E4053',width:'20%',alignSelf:'flex-start',}}>
                       <View style={{margin:10}}>
                            <TouchableOpacity>
                                <Icons name="align-left" size={35}   style={{ color:'orange'   }}/>
                            </TouchableOpacity>
                        
                        </View>
                    </View> 
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:22}} >{this.props.route.params.selectedItemValue.Country}</Text>
                    </View>
          
        </View>
        
      <View style={{borderTopEndRadius:30,borderTopLeftRadius:30,marginTop:-30,backgroundColor:'white',marginBottom:10}}>
     
        <View style={{marginTop:30}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'orange'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Confirmed Cases</Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.NewConfirmed}</Text>
                        </View>
                  </View> 

              <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'red'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Deaths</Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.NewDeaths}</Text>
                        </View>
                </View> 

         
            <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'green'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Recovered</Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.NewRecovered}</Text>
                        </View>
                </View> 

         
        
                <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'orange'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Confirmed</Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.TotalConfirmed}</Text>
                        </View>
                </View> 
         <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'red'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Deaths </Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.TotalDeaths}</Text>
                        </View>
                </View> 
         
              <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={30}   style={{ color:'green'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Recovered </Text>
                            <Text style={{fontSize:18,marginTop:7}}>{this.props.route.params.selectedItemValue.TotalRecovered}</Text>
                        </View>
                </View> 
          </View>
        </View>
 </ScrollView>

      {/* <View style={{alignItems:'center',alignSelf:'flex-end',margin:10}}>
      <TouchableOpacity onPress={()=>Actions.HomeScreen()}>
        <View style={{backgroundColor:'blue',borderRadius:50/2,width:50,height:50,alignItems:'center',justifyContent:'center'}}>
          <Icon name="arrow-right" size={17}   style={{ color:'white'   }}/>
        </View>
        </TouchableOpacity>
      </View> */}


     </View>   
  
        )

     }
      
    }
}