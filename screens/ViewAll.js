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

const ViewAllScreen = ({ route }) => {
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
      {helpers.map((user) => (
        <Block flex style={styles.card} key={user.id}>
          <TouchableOpacity onPress={() => handleProfilePress(user)}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                {user.imageSource ? (
                  <>
                    <Image source={user.imageSource} style={styles.image} />
                    {!["Ratna", "Balraj"].includes(user.name) && (
                      <View style={styles.overlay} />
                    )}
                  </>
                ) : (
                  <View style={styles.dotCircle}>
                    <Icon
                      name={user.icon}
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
                  {["Ratna", "Balraj"].includes(user.name) && (
                    <Icon
                      name="circle"
                      family="font-awesome"
                      size={12}
                      color="green"
                      style={styles.activeIcon}
                    />
                  )}
                  <Text style={styles.name}>{user.name}</Text>
                </View>
                <Text style={styles.work}>{user.work}</Text>
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
      ))}
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

export default ViewAllScreen;
