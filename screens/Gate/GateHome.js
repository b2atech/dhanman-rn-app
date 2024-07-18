import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import commonStyles from "../../style/CommonStyles";

export default function GateHomeScreen() {
  const navigation = useNavigation();

  const cards = [
    {
      id: 1,
      label: "Service Provider",
      color: styles.serviceProviderCard,
      route: "GateServiceProvider",
      icon: "build",
    },
    {
      id: 2,
      label: "Delivery Person",
      color: styles.deliveryCard,
      route: "GateDelivery",
      icon: "local-shipping",
    },
    {
      id: 3,
      label: "Visitors",
      color: styles.visitorsCard,
      route: "GateVisitors",
      icon: "group",
    },
  ];

  return (
    <View style={commonStyles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={card.id}
          style={[styles.card, card.color, styles.shadow]}
          onPress={() => navigation.navigate(card.route)}
        >
          <View style={styles.buttonContent}>
            <Icon name={card.icon} size={20} color="#fff" style={styles.icon} />
            <Text style={[commonStyles.headerText, styles.header]}>
              {card.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
    alignItems: "center",
    color: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#666",
  },
  card: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  serviceProviderCard: {
    backgroundColor: "#ccbcbc",
  },
  deliveryCard: {
    backgroundColor: "#bb9bb0",
  },
  visitorsCard: {
    backgroundColor: "#a288a6",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});
