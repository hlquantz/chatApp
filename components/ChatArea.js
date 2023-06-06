import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Bubble from "./Bubble";

const DATA = [
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sent: true,
  },
];

function ChatArea() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={item.sent ? styles.sent : styles.received}>
            <Bubble>{item.content}</Bubble>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ChatArea;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    height: "85%",
    width: "99%",
    borderRadius: 25,
    marginTop: 7,
    marginBottom: 8,
  },
  sent: { alignItems: "flex-end", marginLeft: "25%" },
  received: { alignItems: "flex-start", maxWidth: "75%" },
});
