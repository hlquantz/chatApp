import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

function Input() {
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
        />
        <Pressable>
          <AntDesign
            name="doubleright"
            size={24}
            color="white"
            style={styles.icon}
          />
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
    paddingVertical: 3,
    minHeight: 40,
    maxHeight: 160,
    textAlignVertical: "top",
  },
  icon: {
    marginHorizontal: 10,
  },
});
