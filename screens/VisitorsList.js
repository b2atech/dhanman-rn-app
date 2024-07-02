import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Icon, Block } from "galio-framework";
import commonStyles from "../style/CommonStyles";
import viewAll from "../style/ViewAllStyle";
import PropTypes from "prop-types";

const VisitorsListScreen = ({ route }) => {
  const { helpers } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={commonStyles.products}
    >
      {helpers.map((user, index) => (
        <Block flex style={viewAll.card}>
          <View style={viewAll.container}>
            <ScrollView vertical contentContainerStyle={viewAll.scrollView}>
              <View key={index}>
                {user.imageSource ? (
                  <Image source={user.imageSource} style={viewAll.image} />
                ) : (
                  <View
                    style={[
                      commonStyles.dotCircle,
                      commonStyles.alignItemCenter,
                    ]}
                  >
                    <Icon
                      name={user.icon}
                      family="material"
                      size={70}
                      color="#fff"
                      style={viewAll.profileicon}
                    />
                  </View>
                )}
                <View style={viewAll.infoContainer}>
                  <Text
                    size={20}
                    style={[viewAll.name, commonStyles.alignItemCenter]}
                  >
                    {user.name}
                  </Text>
                  <Text
                    size={14}
                    style={[viewAll.name, commonStyles.alignItemCenter]}
                  >
                    {user.work}
                  </Text>
                  <View
                    style={[
                      viewAll.iconRow,
                      commonStyles.flexDirectionRow,
                      commonStyles.alignItemCenter,
                    ]}
                  >
                    <Icon
                      name="phone"
                      family="material-community"
                      size={20}
                      style={viewAll.icon}
                    />
                    <Icon
                      name="bell"
                      family="material-community"
                      size={20}
                      style={viewAll.icon}
                    />
                    <Icon
                      name="star"
                      family="material-community"
                      size={20}
                      style={viewAll.icon}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Block>
      ))}
    </ScrollView>
  );
};

VisitorsListScreen.propTypes = {
  route: PropTypes.array.isRequired,
};
export default VisitorsListScreen;
