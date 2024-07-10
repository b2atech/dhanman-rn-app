// src/AddVisitors.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import commonStyles from "../../style/CommonStyles";
import { addVisitor } from "../../api/visitors";
import { Dropdown } from "react-native-element-dropdown";
import { getOTP } from "../../api/otp";
import SubmitButton from "../../components/SubmitButton";
import UnitSelection from "../common/UnitSelection";

export default function AddVisitors({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const [email, setEmail] = useState("");
  const [visitingFrom, setVisitingFrom] = useState("");
  const [visitorTypeId, setVisitorTypeId] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [identityTypeId, setIdentityTypeId] = useState(null);
  const [identityNumber, setIdentityNumber] = useState("");

  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedUnit, setSelectedUnit] = useState([]);

  const visitorTypes = [
    { label: "Guest", value: "0" },
    { label: "Teacher", value: "1" },
    { label: "Relatives", value: "2" },
    { label: "Friends", value: "3" },
    { label: "Others", value: "4" },
  ];

  const identityTypes = [
    { label: "Aadhar", value: "0" },
    { label: "VoterId", value: "1" },
    { label: "Passport", value: "2" },
  ];

  const handleSendOtp = async () => {
    const otpService = {
      phoneNumber: `+91${contactNumber}`,
      message: "Welcome Code",
    };

    try {
      await getOTP(otpService);
      setIsOtpSent(true);
    } catch (error) {
      setIsOtpSent(true);
    }
  };

  const handleVerifyOtp = async () => {
    contactNumber ? setIsOtpVerified(true) : setIsOtpVerified(false);
  };

  const handleSubmit = async () => {
    const newVisitor = {
      firstName,
      lastName,
      email,
      visitingFrom,
      contactNumber,
      visitorTypeId: parseInt(visitorTypeId),
      vehicleNumber,
      identityTypeId: parseInt(identityTypeId),
      identityNumber,
    };
    try {
      await addVisitor(newVisitor);
      Alert.alert("Visitors added successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding visitor:", error);
      Alert.alert(
        "Error",
        "Failed to add visitor. Please check your inputs and try again."
      );
    }
  };

  const handleSelectionComplete = (building, floor, unit) => {
    setSelectedBuilding(building);
    setSelectedFloor(floor);
    setSelectedUnit(unit);
  };

  return (
    <ScrollView contentContainerStyle={commonStyles.container}>
      {selectedUnit.length === 0 ? (
        <UnitSelection onSelectionComplete={handleSelectionComplete} />
      ) : (
        <>
          <Text style={[styles.label, commonStyles.headerText]}>
            Building: {selectedBuilding}
          </Text>
          <Text style={[styles.label, commonStyles.headerText]}>
            Floor: {selectedFloor}
          </Text>
          <Text style={[styles.label, commonStyles.headerText]}>
            Unit: {selectedUnit.join(", ")}
          </Text>

          {!isOtpVerified && (
            <>
              <Text style={[styles.label, commonStyles.headerText]}>
                First Name
              </Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Last Name
              </Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Contact Number
              </Text>
              <TextInput
                style={styles.input}
                value={contactNumber}
                onChangeText={setContactNumber}
                keyboardType="phone-pad"
                maxLength={10}
              />

              {!isOtpSent ? (
                <TouchableOpacity
                  style={styles.sendOtpButton}
                  onPress={handleSendOtp}
                >
                  <Text style={styles.sendOtpButtonText}>Send OTP</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <Text style={[styles.label, commonStyles.headerText]}>
                    Enter OTP
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="numeric"
                    maxLength={6}
                  />
                  <TouchableOpacity
                    style={styles.sendOtpButton}
                    onPress={handleVerifyOtp}
                  >
                    <Text style={styles.sendOtpButtonText}>Verify OTP</Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}

          {isOtpVerified && (
            <>
              <Text style={[styles.label, commonStyles.headerText]}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Visiting From
              </Text>
              <TextInput
                style={styles.input}
                value={visitingFrom}
                onChangeText={setVisitingFrom}
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Visitor Type
              </Text>
              <Dropdown
                style={styles.dropdown}
                data={visitorTypes}
                labelField="label"
                valueField="value"
                placeholder="Select visitor type"
                value={visitorTypeId}
                onChange={(item) => {
                  setVisitorTypeId(item.value);
                }}
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Vehicle Number
              </Text>
              <TextInput
                style={styles.input}
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
              />

              <Text style={[styles.label, commonStyles.headerText]}>
                Identity Type
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
                value={identityNumber}
                onChangeText={setIdentityNumber}
              />

              <SubmitButton title="Submit" onPress={handleSubmit} />
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}

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
  dropdown: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  sendOtpButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginTop: 20,
  },
  sendOtpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
