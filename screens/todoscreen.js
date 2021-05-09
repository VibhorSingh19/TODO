
import React,{useState} from 'react';
import { StyleSheet,TouchableWithoutFeedback, Text, View,Button ,TextInput,ScrollView,FlatList,TouchableOpacity, Touchable,Keyboard, Alert} from 'react-native';
import  Header from '../components/header.js';
import Elements from '../components/elements.js';
import TodoInput from '../components/todoInput.js';

export default function ToDOScreen() {
    const [toDo,settoDo]=useState([
        {text:"Complete your HW",id:1},
        {text:"Call aman",id:2},
        {text:"Dance till 9",id:3},
        {text:"call meeee",id:4},
        {text:"work on your project",id:5},
        
      ]);
    
      const onPressHandler=(id)=>{
        settoDo((prevtoDO)=>{
          return prevtoDO.filter(person=>person.id !=id);
        });
      }
      const onButtonPress=(val)=>{
          if(val.length>3)
          {
            settoDo((prevtoDO)=>{
                return [{
                  text: val,id:Math.random().toString()},
                  ...prevtoDO
                ];
              });
          }
          else{
              Alert.alert('OOPS!','Todos must be over 3 chars long..',[
                  {text:'Okay',onPress:()=>console.log('Alert closed')}
              ])
          }
        
      }
 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
         
           <Header/>
         <View style={styles.content}>
         <TodoInput onButtonPress={onButtonPress}/>
         
         <View style={styles.list}>
         <FlatList
         keyExtractor={(item)=>item.id}
         data={toDo}
         renderItem={({item})=>(
         <Elements item={item} onPressHandler={onPressHandler}/>
         )}
         
         />
         </View>
         </View>
        
      </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop:50,
      marginLeft:20,
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    content:{
    padding: 40,
    flex: 1
    },
    row:{
      backgroundColor:"pink",
      padding:10,
      borderWidth: 1,
      borderColor: '#777',
      margin: 10,
      width: 200,
      flex:1
    }
    ,
    header:{
      backgroundColor:"pink",
      alignItems:"center",
      marginBottom:600
      
    },
    bold:{
      fontWeight:"bold"
    },
    body:{
      flex:1,
      marginBottom:50
    },
    button:{
      backgroundColor:"orange",
      marginTop:20
    },
    list:{
      marginTop:20,
      flex:1
    }
  
  });
  