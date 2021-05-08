import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default function Header(){
return(
  <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
  </View>
);
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:"coral",
        height:50,
        padding:38
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})