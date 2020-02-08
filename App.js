import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import { StatusBar, View } from 'react-native'
import Navigator from './routes/Drawer';

const getFonts = () => Font.loadAsync({
   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
   'nunito-simeBold': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
})
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if(fontsLoaded){
     return <Navigator />
  }else{
      return <AppLoading
               startAsync={getFonts}
               onFinish={()=>{setFontsLoaded(true)}}
            />
  }
}
