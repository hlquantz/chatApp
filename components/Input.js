import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import ConvoContextProvider from "../context/ConvoContext";

function Input() {
  const ConvoCtx = useContext(ConvoContextProvider);
  const [currentMessage, setCurrentMessage] = useState("");

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Write a message..."
          placeholderTextColor={"#555"}
          multiline={true}
          numberOfLines={4}
          minHeight={40}
          maxHeight={160}
          onChangeText={setCurrentMessage}
        />
        <Pressable
          onPress={
            /*ConvoCtx.addMessage(currentMessage)*/ () => {
              ConvoCtx.addMessage(currentMessage);
              console.log(currentMessage);
            }
          }
        >
          <View style={styles.inputButton}>
            <AntDesign
              name="doubleright"
              size={24}
              color="white"
              style={styles.icon}
            />
          </View>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#333",
    width: 250,
    height: 45,
    backgroundColor: "#222",
    borderRadius: 20,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 11,
    minHeight: 40,
    maxHeight: 160,
    textAlignVertical: "top",
  },
  icon: {
    marginHorizontal: 10,
  },
  inputButton: {
    backgroundColor: "#333",
    borderRadius: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
});
