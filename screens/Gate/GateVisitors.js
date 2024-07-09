import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getVisitors } from "../../api/visitors";
import { useNavigation } from "@react-navigation/native";
import commonStyles from "../../style/CommonStyles";

export default function GateVisitorsScreen() {
  const navigation = useNavigation();
  const [contactNumber, setContactNumber] = useState("");
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllVisitors = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getVisitors();
        setAllItems(response);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllVisitors();
  }, []);

  const handleContactNumberChange = (input) => {
    setContactNumber(input);
    if (input.length === 10) {
      const filteredItems = allItems.filter(
        (item) => item.contactNumber === input
      );
      setItems(filteredItems);
    } else {
      setItems([]);
    }
  };

  const handlePushNotification = (item) => {
    // Implement push notification functionality here
    alert(`Push Notification sent to ${item.firstName} ${item.lastName}`);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.label}>Enter Contact Number</Text>
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={handleContactNumberChange}
        keyboardType="numeric"
        maxLength={10}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemLabel}>First Name:</Text>
              <Text style={styles.itemValue}>{item.firstName}</Text>
              <Text style={styles.itemLabel}>Last Name:</Text>
              <Text style={styles.itemValue}>{item.lastName}</Text>
              <Text style={styles.itemLabel}>Email:</Text>
              <Text style={styles.itemValue}>{item.email}</Text>
              <Text style={styles.itemLabel}>Visiting From:</Text>
              <Text style={styles.itemValue}>{item.visitingFrom}</Text>
              <Text style={styles.itemLabel}>Contact Number:</Text>
              <Text style={styles.itemValue}>{item.contactNumber}</Text>
              <Text style={styles.itemLabel}>Vehicle Number:</Text>
              <Text style={styles.itemValue}>{item.vehicleNumber}</Text>
              <Text style={styles.itemLabel}>Identity Number:</Text>
              <Text style={styles.itemValue}>{item.identityNumber}</Text>
              <TouchableOpacity
                style={styles.pushButton}
                onPress={() => handlePushNotification(item)}
              >
                <Text style={styles.pushButtonText}>Push Notification</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>No items to display</Text>
          )}
        />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("CreateVisitors")}
      >
        <Text style={styles.addButtonText}>Add New Visitor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  itemValue: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  pushButton: {
    backgroundColor: "#ff5722",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  pushButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
