import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,BackHandler,Alert } from "react-native";
// import {Actions} from 'react-native-router-flux';
import { Card } from "native-base";
import NetInfo from '@react-native-community/netinfo';
import Loading from '../components/Loading'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
export default class HomeScreen extends Component{


    constructor(props){
        super(props);
            this.state = {
                dataSource:[],
                deathCount:'',
                isLoading:true,
            }
   }

 componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());
    }

   componentDidMount() {
       BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());

        NetInfo.fetch().then(state => {
                    if (state.isConnected) {
                        this.getToken();
                    } else {
                        Alert.alert('Warning', 'Internet is not available ');
                    }
                });

            }

        getToken=()=>{
            console.log('api');
                return fetch('https://api.covid19api.com/summary' , {
                    method: 'GET',
                    headers: {
                        // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOiIxNTg0NjUwOTgwIiwiZXhwIjoiMTkwMDAxMDk4MCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQHlvdXJTdG9yZS5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijc2NDU1MmM0LTg2YTEtNGYzYS04MzA5LTY1MzBhNDdlYzI5NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbkB5b3VyU3RvcmUuY29tIn0.aegkcZJuLW5H_uqaOvKnqoBoFQk02RUA5hd5svs3S28'
                        // 'Authorization':'${type}'+   `${tokenValue}`
                        // 'Authorization': 'Bearer ' + this.state.token,
                    },
                }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log('Categ', responseJson);
                            this.setState({
                                isLoading: false,
                                dataSource: responseJson.Global,
                            }, function () {

                                // console.log('Categ', responseJson);
                            });


                    console.log('check data', this.state.dataSource);
                
                    
                        },
                    )
                    .catch((error) => {
                        throw error;
                        console.error(error);
                    });
                console.log(loginResponse.Status);
            
        }
  

  handleBackButtonClick=()=> {

        Alert.alert(
            'Exit App',
            'Do You really want to exit from App?',
            [

                {text: 'No', onPress: () => this.stayInApp(), style: 'cancel'},
                {text: 'Yes', onPress: () => this.exitFromApp()},
            ],
            {cancelable: false},
        );

        return true;


    }
      exitFromApp = () => {


        BackHandler.exitApp();

    };

    stayInApp = () => {


    };
    render(){
     
     if(this.state.isLoading){
        return (<Loading/>);
     }else {

     
        return(

   <View style={{ flex: 1, width:'100%',backgroundColor:'white'}}>
      
 <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{backgroundColor:'#2E4053',width:'100%',height:200}}>
         <View style={{backgroundColor:'#2E4053',width:'20%',alignSelf:'flex-start',}}>
                       <View style={{margin:10}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                                <Icons name="align-left" size={35}   style={{ color:'orange'   }}/>
                            </TouchableOpacity>
                        
                        </View>
                    </View> 
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:22}} >COVID-19 LIVE STATS</Text>
                    </View>
          
        </View>
        
      <View style={{borderTopEndRadius:30,borderTopLeftRadius:30,marginTop:-30,backgroundColor:'white'}}>
     
        <View style={{marginTop:30}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                          <Icon name="user" size={35}   style={{ color:'orange'   }}/>
                         </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Confirmed Cases</Text>
                            <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.TotalConfirmed}</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View  style={{width:'30%',alignItems:'center'}}>
                        <Icon name="user" size={35}   style={{ color:'red'   }}/>
                        </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Deaths</Text>
                           <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.TotalDeaths}</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View  style={{width:'30%',alignItems:'center'}}>
                        <Icon name="user" size={35}   style={{ color:'green'   }}/>
                        </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>Total Recovered</Text>
                            <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.TotalRecovered}</Text>
                        </View>
                </View>
                  <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View  style={{width:'30%',alignItems:'center'}}>
                        <Icon name="user" size={35}   style={{ color:'orange'   }}/>
                        </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Confirmed</Text>
                            <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.NewConfirmed}</Text>
                        </View>
                </View>
                    <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View  style={{width:'30%',alignItems:'center'}}>
                        <Icon name="user" size={35}   style={{ color:'red'   }}/>
                        </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Death</Text>
                            <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.NewDeaths}</Text>
                        </View>
                </View>
                    <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',width:'100%'}}>
                        <View  style={{width:'30%',alignItems:'center'}}>
                        <Icon name="user" size={35}   style={{ color:'green'   }}/>
                        </View>
                        <View style={{width:'70%'}}>
                            <Text  style={{fontSize:18,fontWeight:'bold'}}>New Recovered</Text>
                            <Text style={{fontSize:18,marginTop:8}}>{this.state.dataSource.NewRecovered}</Text>
                        </View>
                </View>
           </View>

        </View>
 </ScrollView>

      <View style={{backgroundColor:'white',alignItems:'center',alignSelf:'flex-end',margin:10}}>
      <TouchableOpacity
        //  onPress={()=>Actions.CountryScreen()}
         onPress={() =>this.props.navigation.navigate('CountryScreen')}
         >
        <View style={{backgroundColor:'blue',borderRadius:50/2,width:50,height:50,alignItems:'center',justifyContent:'center'}}>
          <Icon name="arrow-right" size={17}   style={{ color:'white'   }}/>
        </View>
        </TouchableOpacity>
      </View>


     </View>   
  
        )

     }
      
    }
}