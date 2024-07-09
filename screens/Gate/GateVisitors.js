import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { getVisitors } from "../../api/visitors";
import IdComponent from "../common/IdComponent";

export default function GateVisitorsScreen() {
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
    <IdComponent
      label="Add Contact number"
      addNew="Visitors"
      navigate={"CreateVisitors"}
      code={contactNumber}
      handleCodeChange={handleContactNumberChange}
      loading={loading}
      items={items}
      handlePushNotification={handlePushNotification}
      error={error}
      maxLength={10}
    />
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
