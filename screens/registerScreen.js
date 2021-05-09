
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
 
export default function RegisterScreen() {
    // "name": "Vibhor Singh",
    // "email": "vibhor.for@gmail.com",
    // "phone": "8979832427",
    // "password": "vibhor12345"

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 
  const sendCred = async ()=>{
    fetch("http://127.0.0.1:3000/Api/register",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
     "name": name,
     "email": email,
     "phone": phone,
     "password": password
     })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert('OOPS!',data.message,[
                         {text:'try again',onPress:()=>console.log('Alert closed')}
                     ])
      })
    // .then(async (data)=>{
    //        try {
    //         await AsyncStorage.setItem('token',data.token)
    //         console.log("Logged in")
    //        } catch (e) {
    //          console.log("error hai");
              
    //          Alert.alert('OOPS!','erroor login in..',[
    //             {text:'try again',onPress:()=>console.log('Alert closed')}
    //         ])
    //        }
    // })
 }

  return (
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/loginlogo.png")} />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => sendCred()} >
{/*  */}
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width: 100,
    height: 100

  },
 
  inputView: {
    backgroundColor: "#7b99f7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3664f5",
  },
});