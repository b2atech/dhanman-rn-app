import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { getDeliveryCompanies } from "../../../api/delivery";

const defaultIcon = require("../../../assets/images/default_delivery.jpg");
const defaultUserIcon = require("../../../assets/images/user_icon.png");

export default function GateDeliveryScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [groupedItems, setGroupedItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryManName, setDeliveryManName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setModalVisible(true);
  };

  const handleSubmit = () => {
    if (!deliveryManName.trim()) {
      Alert.alert("Error", "Please enter the delivery person's name.");
      return;
    }

    console.log("Delivery Man Name:", deliveryManName);
    console.log("Selected Company:", selectedCompany);

    setDeliveryManName("");
    setSelectedCompany(null);
    setModalVisible(false);

    navigation.navigate("DeliveryApproval");
  };

  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const response = await getDeliveryCompanies();
        const dataWithIcons = response.map((item) => ({
          ...item,
          deliveryCompanyIcon: defaultIcon,
        }));

        const grouped = dataWithIcons.reduce((acc, item) => {
          const category = item.deliveryCompanyCategoryName;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {});
        setGroupedItems(grouped);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch delivery companies.");
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCompanies();
  }, []);

  const filteredGroupedItems = useMemo(() => {
    return Object.keys(groupedItems).reduce((acc, category) => {
      const filteredItems = groupedItems[category].filter((item) =>
        item.deliveryCompanyName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
      return acc;
    }, {});
  }, [groupedItems, searchQuery]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Company Name/From</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Company"
        value={searchQuery}
        onChangeText={handleSearchChange}
        accessibilityLabel="Search Company Input"
      />
      <ScrollView>
        {Object.keys(filteredGroupedItems).map((category) => (
          <View key={category} style={styles.category}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <View style={styles.iconRow}>
              {filteredGroupedItems[category].map((item) => (
                <TouchableOpacity
                  key={item.id} // Use unique identifier here
                  style={styles.iconContainer}
                  onPress={() => handleSelectCompany(item)}
                  accessibilityLabel={`Select ${item.deliveryCompanyName}`}
                >
                  <Image
                    source={item.deliveryCompanyIcon}
                    style={styles.icon}
                  />
                  <Text style={styles.iconLabel}>
                    {item.deliveryCompanyName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>
              Delivery Person's Name & Photo
            </Text>
            <Image source={defaultUserIcon} style={styles.defaultUserIcon} />
            <Text style={styles.label}>Delivery Person Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={deliveryManName}
              onChangeText={setDeliveryManName}
              accessibilityLabel="Delivery Person Name Input"
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
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
    marginLeft: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 10,
  },
  category: {
    marginBottom: 20,
    marginLeft: 10,
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
  defaultUserIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
