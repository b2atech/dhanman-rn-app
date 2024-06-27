import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import commonStyles from "../style/CommonStyles";

const Addressform = ({ formData, handleInputChange, label, addressType }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = [
        { id: "686bd9cd-1d2c-441f-b4c4-661ffb556725", name: "India" },
      ];
      setCountries(response);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (formData[addressType].countryId) {
      const fetchStates = async () => {
        let response = [];
        if (
          formData[addressType].countryId ===
          "686bd9cd-1d2c-441f-b4c4-661ffb556725"
        ) {
          response = [
            { id: "a56a7f6e-c0a1-4c66-868b-e1f06e3dc7df", name: "Maharashtra" },
            { id: "77ecfca9-c41d-47ca-b050-6ddecd6bac2d", name: "Karnataka" },
          ];
        }
        setStates(response);
      };

      fetchStates();
    }
  }, [formData[addressType].countryId]);

  return (
    <View>
      <Text style={[styles.label, commonStyles.headerText]}>{label}</Text>
      <TextInput
        style={styles.input}
        value={formData[addressType].addressLine1}
        onChangeText={(value) =>
          handleInputChange("addressLine1", value, true, addressType)
        }
        placeholder="Address Line 1"
      />
      <TextInput
        style={styles.input}
        value={formData[addressType].addressLine2}
        onChangeText={(value) =>
          handleInputChange("addressLine2", value, true, addressType)
        }
        placeholder="Address Line 2"
      />
      <Dropdown
        style={styles.input}
        data={countries}
        labelField="name"
        valueField="id"
        value={formData[addressType].countryId}
        onChange={(item) =>
          handleInputChange("countryId", item.id, true, addressType)
        }
        placeholder="Select Country"
      />
      <Dropdown
        data={states}
        labelField="name"
        valueField="id"
        value={formData[addressType].stateId}
        onChange={(item) =>
          handleInputChange("stateId", item.id, true, addressType)
        }
        style={styles.input}
        placeholder="Select State"
      />
      <TextInput
        style={styles.input}
        value={formData[addressType].cityName}
        onChangeText={(value) =>
          handleInputChange("cityName", value, true, addressType)
        }
        placeholder="Enter City Name"
      />
      <TextInput
        style={styles.input}
        value={formData[addressType].zipCode}
        onChangeText={(value) =>
          handleInputChange("zipCode", value, true, addressType)
        }
        placeholder="Enter Zip Code"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default Addressform;
