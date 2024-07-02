import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {};

export default function SubmitButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

const styles = StyleSheet.create({
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
});
