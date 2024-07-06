import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GateHomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GateServiceProvider")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.plusSign}>+</Text>
          <Text style={styles.buttonText}>Service Provider</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GateDelivery")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.plusSign}>+</Text>
          <Text style={styles.buttonText}>Delivery Person</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GateVisitors")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.plusSign}>+</Text>
          <Text style={styles.buttonText}>Visitors</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusSign: {
    color: "#fff",
    fontSize: 20,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
