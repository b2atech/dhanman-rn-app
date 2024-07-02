import React from "react";
import { Platform, Switch } from "react-native";
import PropTypes from "prop-types";
import materialTheme from "../constants/Theme";

export default class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;

    let thumbColor;
    if (Platform.OS === "ios") {
      thumbColor = null;
    } else if (Platform.OS === "android" && value) {
      thumbColor = materialTheme.COLORS.SWITCH_ON;
    } else {
      thumbColor = materialTheme.COLORS.SWITCH_OFF;
    }

    return <Switch value={value} thumbColor={thumbColor} {...props} />;
  }
}

MkSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
};
