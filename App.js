import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput,ScrollView,FlatList,TouchableOpacity, Touchable} from 'react-native';
import  Header from './components/header.js';
import Elements from './components/elements.js';
import TodoInput from './components/todoInput.js';
export default function App() {
  //const [name,setName]=useState('vibhor');
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
    settoDo((prevtoDO)=>{
      return [{
        text: val,id:Math.random().toString()},
        ...prevtoDO
      ];
    });
  }
  return (
    <View style={styles.container}>
       
       <View>
         <Header/>
       </View>
       <View>
       <TodoInput onButtonPress={onButtonPress}/>
       </View>
       <View style={styles.list}>
       <FlatList
       keyExtractor={(item)=>item.id}
       data={toDo}
       renderItem={({item})=>(
       <Elements item={item} onPressHandler={onPressHandler}/>
       )}
       
       />
       </View>
       
       
       
       {/* <ScrollView>
      {
       
        Users.map((items)=>{
          return(
          <View key={items.key}>
          <Text style={styles.row} >{items.name}</Text>
          </View>
            )
        })
        
      }
      </ScrollView> */}

      
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  row:{
    backgroundColor:"pink",
    padding:10,
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    width: 200,
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
    
    marginBottom:50
  },
  button:{
    backgroundColor:"orange",
    marginTop:20
  },
  list:{
    
  }

});
