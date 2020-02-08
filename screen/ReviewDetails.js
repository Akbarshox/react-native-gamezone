import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { GlobalStyles, images } from "../styles/Global";
import Card from "../shared/Card";

function ReviewDetails({navigation}) {
   const rating = navigation.getParam('rating');
   return(
   <View style={GlobalStyles.container}>
      <Card>
         <Text>{navigation.getParam('title')}</Text>
         <Text>{navigation.getParam('rating')}</Text>
         <View style={styles.rating}>
            <Text>Gamezone Rating: </Text>
            <Image source={images.ratings[rating]} />
         </View>
      </Card>
   </View>
)}


const styles = StyleSheet.create({
   rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee'
   }
})

export default ReviewDetails;