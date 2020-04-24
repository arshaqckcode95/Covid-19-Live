import React from 'react';
import {ActivityIndicator, View,Image} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

export default class Loading extends React.Component {
    render() {
        return (
            <View style={{
              flex:1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
           {/* <View style={{ justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',marginTop:20}}> */}
            {/* <Image source={Constants.IMAGE.APP_MAIN_LOGO}
              style={{width: 100,height:60, }} resizeMode="contain"/> */}
              {/* </View> */}
                {/* <ActivityIndicator size="small" color="#00ff00" /> */}
                <SkypeIndicator style={{marginTop:20}} color='orange' size={33} count={6}/>

            </View>
        )
    }
}
