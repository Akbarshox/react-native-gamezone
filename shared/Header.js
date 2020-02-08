import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}) {
   return(
       <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={() => {navigation.openDrawer()}} />
          <View>
             <Text style={styles.headerText}>GameZone</Text>
          </View>
       </View>
   )
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 80
   },
   headerText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333',
      letterSpacing: 1,
      textAlign: 'center'
   },
   icon: {
      position: 'absolute',
      left: -80
   }
})