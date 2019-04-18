/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import CardView from 'react-native-cardview'

type Props = {};
export default class App extends Component<Props> {

  render() {



    return (
      <View style={styles.container}>
        <CardView style={{ backgroundColor: "#36215e" }} >
          <Text style={{ color: "#7864af", alignSelf: "center", paddingVertical: 15 }} >
            Hearme
          </Text>
        </CardView>
        <View style={{ flex: 1, backgroundColor: "#36215e", justifyContent: "space-evenly" }}>
          <Text style={{ alignSelf: "center", fontWeight: 'bold', fontSize: 20, color: 'white' }} >Create Account</Text>
          <Text style={{ color: "#7864af", marginHorizontal: 30 }} >Email</Text>
          <TextInput style={{ color: "#bfbbca", marginHorizontal: 30 }} >abc@gmail.com</TextInput>
          <Text style={{ color: "#7864af", marginHorizontal: 30 }} >Password</Text>
          <TextInput style={{ color: "#bfbbca", marginHorizontal: 30 }}
            secureTextEntry={true}>abc@123</TextInput>
          <CardView style={{ alignSelf: "center", backgroundColor: "#36215e" }}
            cardElevation={6}
            cornerRadius={20} >
            <Text style={{ color: "white", alignSelf: "center", paddingHorizontal: 40, paddingVertical: 10 }}>Register</Text>
          </CardView>
          <Text style={{ alignSelf: "center", fontWeight: "500" }}>or sign in with facebook</Text>
          <Image
            style={{ width: undefined, height: 180 }}
            resizeMode="stretch"
            source={require('../signup/assets/ttt.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36215e"
  }
});
