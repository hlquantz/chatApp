import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import ChatArea from "./components/ChatArea";
import Input from "./components/Input";
import ConvoContextProvider from "./context/ConvoContext";

export default function App() {
  return (
    <ConvoContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.name}>NAME HERE</Text>
        <ChatArea />
        <Input />
      </View>
    </ConvoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    paddingTop: 10,
  },
});
