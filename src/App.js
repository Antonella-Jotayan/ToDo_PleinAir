import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "./button/button.view";

function App() {
  return (
    <View style={styles.app}>
      <Button onPress={() => {}} text={"Button"} style={buttonStyles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em"
  }
});

export default App;
