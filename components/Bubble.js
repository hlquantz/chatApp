import { StyleSheet, Text, View } from "react-native";

function Bubble({ children }) {
  return (
    <View style={[styles.container]}>
      <Text numberOfLines={0} style={styles.text}>
        {children}
      </Text>
    </View>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    borderRadius: 25,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    margin: 4,
  },
  text: {
    padding: 6,
    color: "white",
    fontSize: 13,
  },
});
