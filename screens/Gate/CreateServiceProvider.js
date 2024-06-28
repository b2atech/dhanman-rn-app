import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Switch,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  getServiceProviderSubType,
  getServiceProviderType,
  addServiceProvider,
} from "../../api/serviceProvider";

import { Dropdown } from "react-native-element-dropdown";
import SubmitButton from "../../components/SubmitButton";
import commonStyles from "../../style/CommonStyles";
import Addressform from "../Addressform";
import PinGenerator from "../PinGenerator";

export default function AddServiceProvider({ navigation }) {
  const [serviceProviderType, setServiceProviderType] = useState([]);
  const [serviceProviderSubType, setServiceProviderSubType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [identityTypeId, setIdentityTypeId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    visitingFrom: "",
    contactNumber: "",
    permanentAddress: {
      countryId: "",
      stateId: "",
      cityName: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
    },
    presentAddress: {
      countryId: "",
      stateId: "",
      cityName: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
    },
    serviceProviderTypeId: "",
    serviceProviderSubTypeId: "",
    vehicleNumber: "",
    identityTypeId: 22,
    identityNumber: "",
    validityDate: "",
    policeVerificationStatus: false,
    isHireable: false,
    isVisible: false,
    isFrequentVisitor: false,
    createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  const identityTypes = [
    { label: "Aadhar", value: 0 },
    { label: "VoterId", value: 1 },
    { label: "Passport", value: 2 },
  ];

  const handleInputChange = (name, value, nested = false, nestedField = "") => {
    if (nested) {
      setFormData((prevState) => ({
        ...prevState,
        [nestedField]: {
          ...prevState[nestedField],
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "contactNumber",
      "serviceProviderTypeId",
      "serviceProviderSubTypeId",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        Alert.alert("Validation Error", `Please fill in the ${field} field.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await addServiceProvider(formData);
      Alert.alert("Success", "Service provider added successfully.");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding service provider:", error);
      Alert.alert(
        "Error",
        "Failed to add service provider. Please check your inputs and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllServiceProviderType = async () => {
      try {
        const response = await getServiceProviderType();
        setServiceProviderType(response);
      } catch (error) {
        console.error("Error fetching service provider types:", error);
      }
    };

    fetchAllServiceProviderType();
  }, []);

  useEffect(() => {
    const fetchAllServiceProviderSubType = async () => {
      try {
        const response = await getServiceProviderSubType();
        setServiceProviderSubType(response);
      } catch (error) {
        console.error("Error fetching service provider subtypes:", error);
      }
    };

    fetchAllServiceProviderSubType();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.label, commonStyles.headerText]}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
      />

      <Text style={[styles.label, commonStyles.headerText]}>Visiting From</Text>
      <TextInput
        style={styles.input}
        value={formData.visitingFrom}
        onChangeText={(value) => handleInputChange("visitingFrom", value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Contact Number
      </Text>
      <TextInput
        style={styles.input}
        value={formData.contactNumber}
        onChangeText={(value) => handleInputChange("contactNumber", value)}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Addressform
        formData={formData}
        handleInputChange={handleInputChange}
        label="Permanent Address"
        addressType={"permanentAddress"}
      />

      <Addressform
        formData={formData}
        handleInputChange={handleInputChange}
        label="Present Address"
        addressType={"presentAddress"}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Service Provider Type
      </Text>
      <Dropdown
        data={serviceProviderType}
        labelField="name"
        valueField="id"
        value={formData.serviceProviderTypeId}
        onChange={(item) => handleInputChange("serviceProviderTypeId", item.id)}
        style={styles.dropdown}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Service Provider Sub Type
      </Text>
      <Dropdown
        data={serviceProviderSubType}
        labelField="name"
        valueField="id"
        value={formData.serviceProviderSubTypeId}
        onChange={(item) =>
          handleInputChange("serviceProviderSubTypeId", item.id)
        }
        style={styles.dropdown}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Vehicle Number
      </Text>
      <TextInput
        style={styles.input}
        value={formData.vehicleNumber}
        onChangeText={(value) => handleInputChange("vehicleNumber", value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Identity Type ID
      </Text>
      <Dropdown
        style={styles.dropdown}
        data={identityTypes}
        labelField="label"
        valueField="value"
        placeholder="Select identity type"
        value={identityTypeId}
        onChange={(item) => {
          setIdentityTypeId(item.value);
        }}
      />

      <Text style={[styles.label, commonStyles.headerText]}>
        Identity Number
      </Text>
      <TextInput
        style={styles.input}
        value={formData.identityNumber}
        onChangeText={(value) => handleInputChange("identityNumber", value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Validity Date</Text>
      <TextInput
        style={styles.input}
        value={formData.validityDate}
        onChangeText={(value) => handleInputChange("validityDate", value)}
        placeholder="YYYY-MM-DDTHH:MM:SSZ"
      />

      <PinGenerator />

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>
          Police Verification Status
        </Text>
        <Switch
          value={formData.policeVerificationStatus}
          onValueChange={(value) =>
            handleInputChange("policeVerificationStatus", value)
          }
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Is Hireable</Text>
        <Switch
          value={formData.isHireable}
          onValueChange={(value) => handleInputChange("isHireable", value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Is Visible</Text>
        <Switch
          value={formData.isVisible}
          onValueChange={(value) => handleInputChange("isVisible", value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>
          Is Frequent Visitor
        </Text>
        <Switch
          value={formData.isFrequentVisitor}
          onValueChange={(value) =>
            handleInputChange("isFrequentVisitor", value)
          }
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <SubmitButton title="Submit" onPress={handleSubmit} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
