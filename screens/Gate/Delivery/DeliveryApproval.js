// DeliveryApproval.js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import UnitSelection from "../../common/UnitSelection";

export default function DeliveryApprovalScreen() {
  const [selection, setSelection] = useState({
    building: "",
    floor: "",
    unit: "",
  });

  const handleSelectionComplete = (building, floor, unit) => {
    setSelection({ building, floor, unit });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Delivery Approval</Text>
      <UnitSelection onSelectionComplete={handleSelectionComplete} />
      <View style={styles.selectionContainer}>
        <Text>Selected Building: {selection.building}</Text>
        <Text>Selected Floor: {selection.floor}</Text>
        <Text>Selected Unit: {selection.unit}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectionContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});
