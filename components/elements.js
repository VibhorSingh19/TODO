import React from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';


export default function Elements({item,onPressHandler}){
    return(
        <TouchableOpacity onPress={()=>onPressHandler(item.id)}>
    <Text style={styles.elements}>{item.text}</Text>
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
        borderRadius: 10
    }
})