import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Block, Icon } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../style/CommonStyles";
import PropTypes from "prop-types";

const Helpers = ({ name, imageSource, icon, handleViewAllPress }) => {
  return (
    <TouchableOpacity onPress={handleViewAllPress}>
      <Block style={[styles.userAction, commonStyles.alignItemCenter]}>
        <View style={styles.avatarContainer}>
          {imageSource ? (
            <Image
              source={imageSource}
              style={[styles.avatar, commonStyles.widthHeight]}
            />
          ) : (
            <Icon name={icon} family="material" style={styles.icon} />
          )}
        </View>
        <Text style={commonStyles.descriptionText}>{name}</Text>
      </Block>
    </TouchableOpacity>
  );
};
Helpers.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleViewAllPress: PropTypes.func,
};

Addressform.defaultProps = {
  addressType: "Home",
};

const styles = StyleSheet.create({
  userAction: {
    marginVertical: 10,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 2,
    color: "#F8F9F9",
    marginRight: 10,
  },
  avatar: {
    borderRadius: 25,
  },
  icon: {
    fontSize: 50,
    color: "#F7F5F5",
  },
});

export default Helpers;
