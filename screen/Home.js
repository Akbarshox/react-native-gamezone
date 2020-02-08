import React, {useState} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import ReviewDetails from "./ReviewDetails";
import Card from "../shared/Card";

export default function Home({navigation}) {
   const [reviews, SetReview] = useState([
      {title: 'Random page', id: 1, rating: 1, body: 'lorenm ipsum', key: '1'},
      {title: 'Cristiano', id: 2, rating: 2, body: 'lorenm ipsum', key: '2'},
      {title: 'Messi', id: 3, rating: 3, body: 'lorenm ipsum', key: '3'},
      {title: 'Salah', id: 4, rating: 4, body: 'lorenm ipsum', key: '4'},
      {title: 'Neymar', id: 5, rating: 5, body: 'lorenm ipsum', key: '5'}
   ])
   return(
       <View style={GlobalStyles.container}>
          <StatusBar backgroundColor="#6A6964" barStyle="light-content" />
          <Text style={GlobalStyles.titleText}>Home Screen</Text>
          <FlatList
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                   <Card>
                      <Text>{item.title}</Text>
                   </Card>
                </TouchableOpacity>
            )}
          />
       </View>
   )
}