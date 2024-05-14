import React from "react";
import {
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import email from "../assets/images/email.png";
import pass from "../assets/images/pass.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logintxt}>Login</Text>

        <Text style={styles.hellotxt}>Hello, welcome back!</Text>
        <Text style={styles.welcomemsgtxt}>
          Welcome back please {"\n"}sign in again
        </Text>
      </View>

      <View>
        <View style={styles.emailstyle}>
          <Image source={email} style={styles.iconformat}></Image>
          <TextInput
            placeholderTextColor="#C4C4C4"
            style={styles.textinputformat}
            placeholder="Email"
          ></TextInput>
        </View>

        <View style={styles.passstyle}>
          <Image source={pass} style={styles.iconformat}></Image>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#C4C4C4"
            style={styles.textinputformat}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>

      <View
        style={{
          marginTop: 35,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 21,
        }}
      >
        <View style={styles.line} />
        <Text
          style={{
            marginHorizontal: 10,
            color: "#FFFFFF",
          }}
        >
          or
        </Text>
        <View style={styles.line} />
      </View>

      <View
        style={{
          marginTop: 21,
        }}
      >
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 14,
        }}
      >
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Gmail</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <Text style={styles.noAcc}>Don't have an account? </Text>
        <Text style={styles.regNow}>Register now</Text>
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
    marginTop: 75,
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
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 100,
    marginLeft: 37,
    marginEnd: 37,
  },

  iconformat: {
    width: 32,
    height: 32,
    marginBottom: 5,
  },

  textinputformat: {
    fontFamily: "Roboto",
    fontWeight: "regular",
    fontSize: 18,
    paddingVertical: 0,
    marginLeft: 16,
    marginBottom: 5,
  },

  passstyle: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 35,
    marginLeft: 37,
    marginEnd: 37,
  },

  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 36,
    marginEnd: 37,
  },

  button2: {
    backgroundColor: "#11325C",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 16,
    marginEnd: 17,
  },

  buttonText: {
    color: "#00224F",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonText2: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
  },

  noAcc: {
    fontFamily: "Roboto",
    fontWeight: "regular",
    fontSize: 16,
    color: "#999999",
  },

  regNow: {
    fontFamily: "Roboto",
    fontWeight: "regular",
    fontSize: 16,
    color: "#0F47A5",
  },
});
