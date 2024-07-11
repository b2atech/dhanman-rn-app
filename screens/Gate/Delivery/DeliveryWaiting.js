import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import commonStyles from "../../../style/CommonStyles";

const defaultUserIcon = require("../../../assets/images/user_icon.png");

const DeliveryWaitingScreen = () => {
  const route = useRoute();
  const {
    deliveryManName = "Manjunath B",
    selectedCompany = { deliveryCompanyName: "Amazon" },
    unitDetails = { building: "A", unit: "701" },
  } = route.params || {};

  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("inside");

  const insideData = [
    {
      id: "1",
      name: deliveryManName,
      service: selectedCompany.deliveryCompanyName,
      flat: `${unitDetails.building} ${unitDetails.unit}`,
      time: "6 min",
    },
    {
      id: "2",
      name: "Aman Singh",
      service: "Fast Delivery Co.",
      flat: "A 403",
      time: "10 min",
    },
    {
      id: "3",
      name: "Arun Naik",
      service: "Quick Express",
      flat: "B 602",
      time: "15 min",
    },
  ];

  const waitingData = [];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={defaultUserIcon} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <Text style={styles.flat}>{"Flat: " + item.flat}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <TouchableOpacity style={styles.outButton}>
          <Text style={styles.outButtonText}>OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "inside" && styles.activeTab]}
          onPress={() => setActiveTab("inside")}
        >
          <Text style={styles.tabText}>Inside</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "waiting" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("waiting")}
        >
          <Text style={styles.tabText}>Waiting</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activeTab === "inside" ? insideData : waitingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  activeTab: {
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  service: {
    fontSize: 14,
    color: "#555",
  },
  flat: {
    fontSize: 14,
    color: "#555",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 14,
    color: "#555",
  },
  outButton: {
    backgroundColor: "#e74c3c",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  outButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default DeliveryWaitingScreen;
