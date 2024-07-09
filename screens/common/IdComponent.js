import React from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import commonStyles from "../../style/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

const IdComponent = ({
  label,
  addNew,
  navigate,
  code,
  handleCodeChange,
  loading,
  items,
  handlePushNotification,
  error,
  maxLength,
  emptyListMessage,
}) => {
  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={handleCodeChange}
        keyboardType="numeric"
        maxLength={maxLength}
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
                <Text style={styles.pushButtonText}>Notify unit member</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>{emptyListMessage}</Text>
          )}
        />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(navigate)}
      >
        <Text style={styles.addButtonText}>Add New {addNew}</Text>
      </TouchableOpacity>
    </View>
  );
};

IdComponent.propTypes = {
  label: PropTypes.string.isRequired,
  addNew: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  handleCodeChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      visitingFrom: PropTypes.string,
      contactNumber: PropTypes.string,
      vehicleNumber: PropTypes.string,
      identityNumber: PropTypes.string,
    })
  ).isRequired,
  handlePushNotification: PropTypes.func.isRequired,
  error: PropTypes.string,
  maxLength: PropTypes.number,
};

IdComponent.defaultProps = {
  error: null,
  maxLength: 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
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
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  itemValue: {
    fontSize: 14,
    marginBottom: 15,
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

export default IdComponent;
