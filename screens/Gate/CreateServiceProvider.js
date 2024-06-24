import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { getServiceProviderSubType, getServiceProviderType } from '../../api/serviceProvider';
import commonStyles from '../../style/CommonStyles';
import { Dropdown } from 'react-native-element-dropdown';
import SubmitButton from '../../components/SubmitButton';

export default function AddServiceProvider({ navigation }) {
  const [serviceProviderType, setServiceProviderType] = useState([]);
  const [serviceProviderSubType, setServiceProviderSubType] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    visitingFrom: '',
    contactNumber: '',
    permanentAddress: {
      countryId: '',
      stateId: '',
      cityId: '',
      cityName: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
    },
    presentAddress: {
      countryId: '',
      stateId: '',
      cityId: '',
      cityName: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
    },
    serviceProviderTypeId: '',
    serviceProviderSubTypeId: '',
    vehicleNumber: '',
    identityTypeId: '',
    identityNumber: '',
    validityDate: '',
    policeVerificationStatus: false,
    isHireable: false,
    isVisible: false,
    isFrequentVisitor: false,
    createdBy: '',
  });

  const handleInputChange = (name, value, nested = false, nestedField = '') => {
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

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    navigation.goBack();
  };
  

  useEffect(() => {
    const fetchAllServiceProviderType = async () => {
      try {
        const response = await getServiceProviderType();
        setServiceProviderType(response);
      } catch (error) {
        console.error("ID not found", error);
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
        console.error("ID not found", error);
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
        onChangeText={(value) => handleInputChange('firstName', value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        keyboardType="email-address"
      />

      <Text style={[styles.label, commonStyles.headerText]}>Visiting From</Text>
      <TextInput
        style={styles.input}
        value={formData.visitingFrom}
        onChangeText={(value) => handleInputChange('visitingFrom', value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Contact Number</Text>
      <TextInput
        style={styles.input}
        value={formData.contactNumber}
        onChangeText={(value) => handleInputChange('contactNumber', value)}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Permanent Address</Text>
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.countryId}
        onChangeText={(value) => handleInputChange('countryId', value, true, 'permanentAddress')}
        placeholder="Country"
      />
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.stateId}
        onChangeText={(value) => handleInputChange('stateId', value, true, 'permanentAddress')}
        placeholder="State"
      />
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.cityId}
        onChangeText={(value) => handleInputChange('cityId', value, true, 'permanentAddress')}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.addressLine1}
        onChangeText={(value) => handleInputChange('addressLine1', value, true, 'permanentAddress')}
        placeholder="Address Line 1"
      />
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.addressLine2}
        onChangeText={(value) => handleInputChange('addressLine2', value, true, 'permanentAddress')}
        placeholder="Address Line 2"
      />
      <TextInput
        style={styles.input}
        value={formData.permanentAddress.zipCode}
        onChangeText={(value) => handleInputChange('zipCode', value, true, 'permanentAddress')}
        placeholder="Zip Code"
      />

      <Text style={[styles.label, commonStyles.headerText]}>Present Address</Text>
      <TextInput
        style={styles.input}
        value={formData.presentAddress.countryId}
        onChangeText={(value) => handleInputChange('countryId', value, true, 'presentAddress')}
        placeholder="Country"
      />
      <TextInput
        style={styles.input}
        value={formData.presentAddress.stateId}
        onChangeText={(value) => handleInputChange('stateId', value, true, 'presentAddress')}
        placeholder="State"
      />
      <TextInput
        style={styles.input}
        value={formData.presentAddress.cityId}
        onChangeText={(value) => handleInputChange('cityId', value, true, 'presentAddress')}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        value={formData.presentAddress.addressLine1}
        onChangeText={(value) => handleInputChange('addressLine1', value, true, 'presentAddress')}
        placeholder="Address Line 1"
      />
      <TextInput
        style={styles.input}
        value={formData.presentAddress.addressLine2}
        onChangeText={(value) => handleInputChange('addressLine2', value, true, 'presentAddress')}
        placeholder="Address Line 2"
      />
      <TextInput
        style={styles.input}
        value={formData.presentAddress.zipCode}
        onChangeText={(value) => handleInputChange('zipCode', value, true, 'presentAddress')}
        placeholder="Zip Code"
      />

       <Text style={[styles.label, commonStyles.headerText]}>Service Provider Type</Text>
      <Dropdown
        data={serviceProviderType}
        labelField="name"  // Replace 'name' with the appropriate key from your data
        valueField="id"  // Replace 'id' with the appropriate key from your data
        value={formData.serviceProviderTypeId}
        onChange={item => handleInputChange('serviceProviderTypeId', item.id)}
        style={styles.dropdown}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Service Provider Sub Type</Text>
      <Dropdown
        data={serviceProviderSubType}
        labelField="name"  // Replace 'name' with the appropriate key from your data
        valueField="id"  // Replace 'id' with the appropriate key from your data
        value={formData.serviceProviderSubTypeId}
        onChange={item => handleInputChange('serviceProviderSubTypeId', item.id)}
        style={styles.dropdown}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Vehicle Number</Text>
      <TextInput
        style={styles.input}
        value={formData.vehicleNumber}
        onChangeText={(value) => handleInputChange('vehicleNumber', value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Identity Type ID</Text>
      <TextInput
        style={styles.input}
        value={formData.identityTypeId}
        onChangeText={(value) => handleInputChange('identityTypeId', value)}
        keyboardType="numeric"
      />

      <Text style={[styles.label, commonStyles.headerText]}>Identity Number</Text>
      <TextInput
        style={styles.input}
        value={formData.identityNumber}
        onChangeText={(value) => handleInputChange('identityNumber', value)}
      />

      <Text style={[styles.label, commonStyles.headerText]}>Validity Date</Text>
      <TextInput
        style={styles.input}
        value={formData.validityDate}
        onChangeText={(value) => handleInputChange('validityDate', value)}
        placeholder="YYYY-MM-DDTHH:MM:SSZ"
      />

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Police Verification Status</Text>
        <Switch
          value={formData.policeVerificationStatus}
          onValueChange={(value) => handleInputChange('policeVerificationStatus', value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Is Hireable</Text>
        <Switch
          value={formData.isHireable}
          onValueChange={(value) => handleInputChange('isHireable', value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Is Visible</Text>
        <Switch
          value={formData.isVisible}
          onValueChange={(value) => handleInputChange('isVisible', value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, commonStyles.headerText]}>Is Frequent Visitor</Text>
        <Switch
          value={formData.isFrequentVisitor}
          onValueChange={(value) => handleInputChange('isFrequentVisitor', value)}
        />
      </View>

      <SubmitButton title="Submit" onPress={handleSubmit} />
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
