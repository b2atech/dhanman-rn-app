import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GateHomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, styles.serviceProviderCard]}
        onPress={() => navigation.navigate("GateServiceProvider")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.plusSign}>+</Text>
          <Text style={styles.buttonText}>Service Provider</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card, styles.deliveryCard]}
        onPress={() => navigation.navigate("GateDelivery")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.plusSign}>+</Text>
          <Text style={styles.buttonText}>Delivery Person</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card, styles.visitorsCard]}
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: "90%",
    height: "15%",
    alignItems: "flex-start",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  serviceProviderCard: {
    backgroundColor: "#f8ac59",
  },
  deliveryCard: {
    backgroundColor: "#1c84c6",
  },
  visitorsCard: {
    backgroundColor: "#ED5565",
  },
  cardContent: {
    width: "100%",
  },
  cardTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#666",
    fontSize: 14,
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  cardFooterText: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#F44336",
    fontWeight: "bold",
    fontSize: 12,
  },
  goText: {
    color: "#fff",
    backgroundColor: "#FF9800",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontWeight: "bold",
    fontSize: 12,
  },
});
