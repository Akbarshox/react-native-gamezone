import React from 'react';
import  {createStackNavigator} from "react-navigation-stack";
import About from '../screen/About';
import Header from "../shared/Header";

const screens = {
   About: {
      screen: About,
      navigationOptions: ({navigation}) => {
         return ({headerTitle: () => <Header navigation={navigation} />})
      }
   }
}

const AboutStack = createStackNavigator(screens, {
   defaultNavigationOptions:{
      headerStyle:  {backgroundColor: '#fcc300'}
   }
});
export default AboutStack;
