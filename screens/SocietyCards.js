import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const SocietyCard = ({ imageSource, name }) => {
  return (
    <View style={[styles.card]}>
      <Image source={imageSource} style={[styles.image]} />
      <View style={styles.content}>
        <Text style={[styles.title]}>{name}</Text>
      </View>
    </View>
  );
};

Profile.propTypes = {
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#d5bdaf",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.6,
    elevation: 3,
    marginBottom: 16,
    marginRight: 10,
    width: 150,
  },
  image: {
    height: 100,
    width: 150,
    resizeMode: "cover",
    borderRadius: 20,
  },
  content: {
    padding: 15,
    backgroundColor: "#d5bdaf",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
});

export default SocietyCard;
