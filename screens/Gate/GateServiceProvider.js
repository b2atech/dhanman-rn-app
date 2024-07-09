import React, { useState, useEffect } from "react";
import { getServiceProviders } from "../../api/serviceProvider";
import IdComponent from "../common/IdComponent";

export default function GateServiceProviderScreen() {
  const [code, setCode] = useState("");
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllServiceProviders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getServiceProviders();
        setAllItems(response);
      } catch (error) {
        console.error("ID not found", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllServiceProviders();
  }, []);

  const handleCodeChange = (input) => {
    setCode(input);
    if (input.length > 0) {
      const filteredItems = allItems.filter(
        (item) => item.id.toString() === input
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
      label="Add Unique Code"
      addNew="Service Provider"
      navigate={"CreateServiceProvider"}
      code={code}
      handleCodeChange={handleCodeChange}
      loading={loading}
      items={items}
      handlePushNotification={handlePushNotification}
      error={error}
      maxLength={2}
    />
  );
}
