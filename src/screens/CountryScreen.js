import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Alert ,BackHandler,TextInput} from "react-native";
import {Actions} from 'react-native-router-flux';
import { Card } from "native-base";
import NetInfo from '@react-native-community/netinfo';
import CountryList from "../components/list/CountryList";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Loading from '../components/Loading'
export default class CountryScreen extends Component{

constructor(props){
    super(props);
        this.state = {
            dataSource:[],
            slug:'',
            isLoading:true,
            enteredDta:'',
            text:''
        }
         this.arrayholder = [];
}

   componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());

        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                fetch('https://api.covid19api.com/summary' , {
                    method: 'GET',
                    headers: {
                        // 'Authorization': 'Bearer ' + Constants.STRINGS.TOKEN,
                    },
                })
                    .then(response => response.json())
                    .then((responseJson) => {
                        console.log('------countries-------' + responseJson);
                        this.setState({
                            dataSource: responseJson.Countries,
                            isLoading: false,
                        },function() {
                            this.arrayholder = responseJson;
                        });
                    })
                    .catch(error => console.log(error));
            } else {
                Alert.alert('Warning', 'Internet is not available ');
                // <NoInternet/>;
            }
        });
    }

componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButtonClick());
    }

 handleBackButtonClick=()=> {
     Actions.HomeScreen()
    //  this.props.navigation.navigate('Home')
     return true
 }

 handleSelectedCountry=(val)=>{
  console.log('selected country',val)
  this.setState({
    slug:val
  },function(){
      Actions.CountryDetailScreen({selectedItemValue:this.state.slug})
    // this.props.navigation.navigate('CountryDetailScreen',{selectedItemValue:this.state.slug})
  })
  
 }


 SearchFilterFunction(text) {
     console.log('search',text)
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

    render(){
         console.log('data in array',this.state.dataSource)

     if(this.state.isLoading){
        return (<Loading/>);
     }else {
        return(    

         <View style={{ flex: 1, width:'100%',backgroundColor:'white'}}>
      


        <View style={{backgroundColor:'#2E4053',width:'100%',height:200}}>
         <View style={{backgroundColor:'#2E4053',width:'20%',alignSelf:'flex-start',}}>
                       <View style={{margin:10}}>
                            <TouchableOpacity  onPress={()=>{ Actions.drawerOpen();}}
                            // onPress={()=>{this.props.navigation.openDrawer()}}
                            >
                                <Icons name="align-left" size={35}   style={{ color:'orange'   }}/>
                            </TouchableOpacity>
                        
                        </View>
                    </View> 
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:22}} >ALL COUNTRIES</Text>
                    </View>
          
        </View>
        
      <View style={{borderTopEndRadius:30,borderTopLeftRadius:30,marginTop:-30,backgroundColor:'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin:20}}>
        <View style={{marginBottom:10}}>
        <CountryList dataList={this.state.dataSource} selectedCountry={this.handleSelectedCountry}/>
        </View>
         
              
           </View>
 </ScrollView>
        </View>



     </View>   
  
        )
     }
    }
}