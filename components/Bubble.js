import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

function Bubble({ children }) {
  // const textRef = useRef(null);
  // let textHeight = 0;

  // useEffect(() => {
  //   if (textRef.current) {
  //     textRef.current.measure(( width, height) => {
  //       textHeight = height;
  //       console.log(height + "  " + width);
  //       console.log(children);
  //     });
  //   }
  // }, [children]);

  return (
    <View style={[styles.container]}>
      {/* <Text style={styles.text} ref={textRef} onLayout={() => {}}>
        {children}
      </Text> */}
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
    margin: 3,
  },
  text: {
    padding: 10,
    color: "white",
    fontSize: 15,
  },
});
