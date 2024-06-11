import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon, Block, theme } from "galio-framework";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const PaymentListScreen = ({ route }) => {
  const { helpers } = route.params;
  const navigation = useNavigation();

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.products}
    >
        <Block flex style={styles.card} key={helpers.id}>
          <TouchableOpacity onPress={() => handleProfilePress(helpers)}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                {helpers.imageSource ? (
                  <>
                    <Image source={helpers.imageSource} style={styles.image} />
                    {!["Ratna", "Balraj"].includes(helpers.name) && (
                      <View style={styles.overlay} />
                    )}
                  </>
                ) : (
                  <View style={styles.dotCircle}>
                    <Icon
                      name={helpers.icon}
                      family="material"
                      size={70}
                      color="#fff"
                      style={styles.profileIcon}
                    />
                  </View>
                )}
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.nameContainer}>
                  {["Ratna", "Balraj"].includes(helpers.name) && (
                    <Icon
                      name="circle"
                      family="font-awesome"
                      size={12}
                      color="green"
                      style={styles.activeIcon}
                    />
                  )}
                  <Text style={styles.name}>{helpers.name}</Text>
                </View>
                <Text style={styles.work}>{helpers.work}</Text>
                <View style={styles.iconRow}>
                  <Icon
                    name="phone"
                    family="material-community"
                    size={20}
                    style={styles.icon}
                  />
                  <Icon
                    name="bell"
                    family="material-community"
                    size={20}
                    style={styles.icon}
                  />
                  <Icon
                    name="star"
                    family="material-community"
                    size={20}
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 10,
    backgroundColor: "#E5E7E9",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileIcon: {
    borderRadius: 50,
    color: "black",
  },
  infoContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    textAlign: "center",
  },
  activeIcon: {
    marginRight: 5,
  },
  work: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  dotCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F8F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
  },
});

export default PaymentListScreen;
