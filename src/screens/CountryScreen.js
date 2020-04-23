import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Alert ,BackHandler,TextInput} from "react-native";
import {Actions} from 'react-native-router-flux';
import { Card } from "native-base";
import NetInfo from '@react-native-community/netinfo';
import CountryList from "../components/list/CountryList";
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../components/Loading'
export default class CountryScreen extends Component{

constructor(props){
    super(props);
        this.state = {
            dataSource:[],
            slug:'',
            isLoading:false,
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
     return true
 }

 handleSelectedCountry=(val)=>{
  console.log('selected country',val)
  this.setState({
    slug:val
  },function(){
      Actions.CountryDetailScreen({selectedItemValue:this.state.slug})
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

         

         <View style={{ flex: 1, width:'100%',}}>
          <ScrollView showsVerticalScrollIndicator={false}>
   
            <View style={{backgroundColor:'#2E4053',width:'100%',height:200}}>
            <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                 <View style={{marginRight:-40,borderWidth:1,alignSelf:'center',backgroundColor:'grey',width:'50%',borderRadius:30}}>
                     <TextInput 
                        style={{marginLeft:20,color:'white'}}
                        placeholder='search country'
                        placeholderTextColor='white'
                        onChangeText={text => this.SearchFilterFunction(text)}
                       value={this.state.text}/>
                    </View>
                    <View style={{width:'20%',alignSelf:'flex-end',margin:10}}>
                    
                      <TouchableOpacity>
                         <View style={{backgroundColor:'orange',borderRadius:40/2,width:40,height:40,alignItems:'center',alignSelf:'flex-end',justifyContent:'center'}}>
                           <Icon name="search" size={18}   style={{ color:'white'   }}/>
                         </View>
                        </TouchableOpacity>
                      </View>
                    </View> 
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
                     <Text style={{color:'white',fontWeight:'bold',fontSize:22}} >COUNTRIES EFFECTED</Text>
                    </View>
              
           </View>
         
           
          {/* <View style={{borderTopEndRadius:30,borderTopLeftRadius:30,marginTop:-30,backgroundColor:'white'}}>
         
       
                    <View style={{margin:15,backgroundColor:'white'}}>
                   
                    </View>
              
          </View> */}
           
         <View style={{borderTopEndRadius:30,borderTopLeftRadius:30,marginTop:-30,backgroundColor:'white'}}>
     
        <View style={{marginTop:30}}>
                <CountryList dataList={this.state.dataSource} selectedCountry={this.handleSelectedCountry}/>
           </View>

        </View>
         </ScrollView>

            
           
         </View>    
        )
     }
    }
}