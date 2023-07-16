import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Bubble from "./Bubble";

function ChatArea({ messages }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sent ? styles.sent : styles.received}>
            <Bubble>test</Bubble>
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
