import React from 'react';
import  {createStackNavigator} from "react-navigation-stack";
import Home from '../screen/Home';
import ReviewDetails from '../screen/ReviewDetails';
import Header from "../shared/Header";

const screens = {
   Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
         return ({headerTitle: () => <Header navigation={navigation} />})
      }
   },
   ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {
         title: 'ReviewDetails'
      }
   }
}

const HomeStack = createStackNavigator(screens, {
   defaultNavigationOptions:{
      headerStyle:  {backgroundColor: '#fcc300'}
   }
});
export default HomeStack;
