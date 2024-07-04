import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

const icons = {
  amazon: require("../../assets/images/Delivery Companies/amazon.jpg"),
  flipkart: require("../../assets/images/Delivery Companies/flipcart.jpg"),
  myntra: require("../../assets/images/Delivery Companies/myntra.png"),
  ajio: require("../../assets/images/Delivery Companies/Ajio.png"),
  snapdeal: require("../../assets/images/Delivery Companies/snapdeal.png"),
  firstcry: require("../../assets/images/Delivery Companies/firstcry.png"),
  mesho: require("../../assets/images/Delivery Companies/mesho.png"),
  bewakoof: require("../../assets/images/Delivery Companies/Bewakoof.png"),
  nykaa: require("../../assets/images/Delivery Companies/nykaa.png"),
  zomato: require("../../assets/images/Delivery Companies/zomato.png"),
  swiggy: require("../../assets/images/Delivery Companies/swiggy.png"),
  dominos: require("../../assets/images/Delivery Companies/domino's.png"),
  dunzo: require("../../assets/images/Delivery Companies/dunzo.png"),
  jiomart: require("../../assets/images/Delivery Companies/JIO.png"),
  tataplay: require("../../assets/images/Delivery Companies/TataPlay.jpeg"),
  dmart: require("../../assets/images/Delivery Companies/dmart.jpg"),
  bigbasket: require("../../assets/images/Delivery Companies/bigbasket.png"),
  blinkit: require("../../assets/images/Delivery Companies/blinkit.png"),
  zepto: require("../../assets/images/Delivery Companies/zepto.png"),
  apolo: require("../../assets/images/Delivery Companies/apoloPharma.png"),
  pharmeasy: require("../../assets/images/Delivery Companies/pharmeasy.png"),
  tata1mg: require("../../assets/images/Delivery Companies/Tata1Mg.png"),
};

const categories = [
  {
    title: "Online Shopping",
    items: [
      { name: "Amazon", icon: icons.amazon },
      { name: "Flipkart", icon: icons.flipkart },
      { name: "Myntra", icon: icons.myntra },
      { name: "Ajio", icon: icons.ajio },
      { name: "Snapdeal", icon: icons.snapdeal },
      { name: "FirstCry", icon: icons.firstcry },
      { name: "Mesho", icon: icons.mesho },
      { name: "Bewakoof", icon: icons.bewakoof },
      { name: "Nykaa", icon: icons.nykaa },
    ],
  },
  {
    title: "Food",
    items: [
      { name: "Zomato", icon: icons.zomato },
      { name: "Swiggy", icon: icons.swiggy },
      { name: "Domino's", icon: icons.dominos },
    ],
  },
  {
    title: "Grocery",
    items: [
      { name: "Big Basket", icon: icons.bigbasket },
      { name: "Blinkit", icon: icons.blinkit },
      { name: "Zepto", icon: icons.zepto },
      { name: "Jio Mart", icon: icons.jiomart },
      { name: "Tata Play", icon: icons.tataplay },
      { name: "Dunzo", icon: icons.dunzo },
    ],
  },
  {
    title: "Medicine",
    items: [
      { name: "Apollo", icon: icons.apolo },
      { name: "PharmEasy", icon: icons.pharmeasy },
      { name: "Tata 1MG", icon: icons.tata1mg },
    ],
  },
];

export default function GateDeliveryScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const filteredCategories = categories
    .map((category) => {
      const filteredItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...category, items: filteredItems };
    })
    .filter((category) => category.items.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Company Name/From</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Company"
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
      <ScrollView>
        {filteredCategories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.iconRow}>
              {category.items.map((item, idx) => (
                <View key={idx} style={styles.iconContainer}>
                  <Image source={item.icon} style={styles.icon} />
                  <Text style={styles.iconLabel}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    width: "33%",
    marginBottom: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  iconLabel: {
    textAlign: "center",
  },
});
