import React,{ Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,FlatList } from "react-native";
// import {Actions} from 'react-native-router-flux';
import CountryListItem from "../listItem/CountryListItem";
export default class CountryList extends Component{



    render(){

        return(
  <View>
                <FlatList
                    // style={styles.listContainer}
                    data={this.props.dataList}
                    renderItem={(info) => (
                        <CountryListItem

                       
                        itemName={info.item.Country}
                        // itemNewConfirmed={info.item.NewConfirmed}
                    

                        clickedItem={()=>this.props.selectedCountry(info.item)}
                        />
                    )}
                    // keyExtractor={item => item.CartId.toString() }
                />
            </View> 
        )
    }
}