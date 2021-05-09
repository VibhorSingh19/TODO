import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Elements({item,onPressHandler}){
    return(
    <TouchableOpacity onPress={()=>onPressHandler(item.id)}>
    <View style={styles.elements}>
    <MaterialIcons name='delete' size={18} color='#333'/>    
    <Text style={styles.elementText}>{item.text}</Text>
    </View>
    
    </TouchableOpacity>

    )
}

const styles=StyleSheet.create({
    elements:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flex:1,
        flexDirection: 'row'
    },
    elementText:{
        marginLeft: 10,
    }
})