import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import commonStyles from '../../style/CommonStyles';

export default function AddVisitors({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [unitToVisit, setUnitToVisit] = useState('');

  const handleSubmit = () => {
    const newServiceProvider = {
      firstName,
      lastName,
      email,
      contactNumber,
      vehicleNumber,
      unitToVisit,
    };

    console.log('New Service Provider:', newServiceProvider);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.label, commonStyles.headerText]}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={[styles.label, commonStyles.headerText]}>Contact Number</Text>
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Vehicle Number</Text>
      <TextInput
        style={styles.input}
        value={vehicleNumber}
        onChangeText={setVehicleNumber}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Unit to Visit</Text>
      <TextInput
        style={styles.input}
        value={unitToVisit}
        onChangeText={setUnitToVisit}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
