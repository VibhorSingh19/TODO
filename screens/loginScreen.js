
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
 
export default function LoginScreen() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
 
  const sendCred = async (username,password)=>{
    fetch("http://127.0.0.1:3000/Api/login",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "username":username,
       "password":password
     })
    })
    .then(res=>res.json())
    // .then(res=>res.json())
    .then(async (data)=>{
        try {
         // await AsyncStorage.setItem('token',data.token)
          //props.navigation.replace("home")
          console.log("Logged in")
        } catch (e) {
          console.log("error hai",e)
           //Alert(e)
        }
 })
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
          placeholder="email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setusername(email)}
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
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => sendCred(username,password)}>

        <Text style={styles.loginText}>LOGIN</Text>
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