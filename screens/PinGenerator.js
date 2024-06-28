import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PinGenerator = () => {
  const [pin, setPin] = useState(null);

  const generatePin = () => {
    const newPin = Math.floor(100000 + Math.random() * 900000).toString();
    setPin(newPin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Generate PIN" onPress={generatePin} />
        {pin && <Text style={styles.pinText}>{pin}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  pinText: {
    fontSize: 20,
    marginLeft: 30,
  },
});

export default PinGenerator;
