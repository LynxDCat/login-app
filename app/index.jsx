import React from "react";
import { TextInput, Image, StyleSheet, View, Text } from "react-native";
import email from "../assets/images/email.png";
import pass from "../assets/images/pass.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logintxt}>Login</Text>

      <Text style={styles.hellotxt}>Hello, welcome back!</Text>
      <Text style={styles.welcomemsgtxt}>
        Welcome back please {"\n"}sign in again
      </Text>

      <View style={styles.emailstyle}>
        <Image source={email} style={styles.loginimg}></Image>
        <TextInput
          placeholderTextColor="#C4C4C4"
          style={styles.logintxt}
          placeholder="Email"
        ></TextInput>
      </View>

      <View style={styles.passstyle}> 
        <Image source={pass} style={styles.loginimg}></Image>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          style={styles.logintxt}
          secureTextEntry={true}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#1282AD",
  },

  logintxt: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginTop: 80,
  },

  hellotxt: {
    fontFamily: "Roboto",
    fontWeight: "semibold",
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 60,
  },

  welcomemsgtxt: {
    fontFamily: "Roboto",
    fontWeight: "regular",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },

  emailstyle: {
    flexDirection: "row",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 100,
    marginLeft: 37,
    marginEnd: 37,
  },

  loginimg: {
    width: 32,
    height: 32,
    marginBottom: 5
  },

  logintxt: {
    fontFamily: "Roboto",
    fontWeight: "regular",
    fontSize: 18,
    paddingVertical: 0,
    marginLeft: 16,
    marginBottom: 5
  },

  passstyle: {
    flexDirection: "row",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 35,
    marginLeft: 37,
    marginEnd: 37,
  },
});
