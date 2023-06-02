import { StyleSheet, Text, View } from "react-native";

function Bubble() {
  return (
    <View style={styles.container}>
      <Text>TEST This</Text>
    </View>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 50,
  },
});
