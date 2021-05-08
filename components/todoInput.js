import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput} from 'react-native';


export default function TodoInput({onButtonPress}){
    const [input,changeinput]=useState('');
    
    const changeHandler=(val)=>{
        changeinput(val);
    }

    return(
        <View>
            <TextInput
            style={styles.textarea}
            placeholder="New Todo..."
            onChangeText={changeHandler}
            />
            <Button onPress={()=>onButtonPress(input)} title= "add todo" color='coral' />           
        </View>
    )
}

const styles=StyleSheet.create({
    textarea:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
})