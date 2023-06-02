import { StyleSheet, Text, View } from "react-native";

function Bubble({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 150,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    color: "white",
  },
});
