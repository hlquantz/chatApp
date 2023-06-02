import { ScrollView, StyleSheet, View } from "react-native";
import Bubble from "./Bubble";

function ChatArea() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        fadingEdgeLength={25}
        keyboardDismissMode="on-drag"
      >
        <View style={{ padding: 8, alignItems: "flex-end" }}>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
          <Bubble>Test</Bubble>
        </View>
      </ScrollView>
    </View>
  );
}

export default ChatArea;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    height: "85%",
    width: 360,
    borderRadius: 25,
    marginTop: 7,
    marginBottom: 75,
    //alignItems: "flex-end",
  },
});
