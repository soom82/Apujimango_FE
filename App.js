import React from "react";
import { StyleSheet, View } from "react-native";
import EditableText from "./EditableText"; // EditableText 컴포넌트를 import

export default function App() {
  return (
    <View style={styles.container}>
      {/* EditableText 컴포넌트를 렌더링 */}
      <EditableText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
