import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, Icon } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import commonStyles from "../style/CommonStyles";

const HelpersList = () => {
  const users = [
    {
      id: 1,
      name: "Ratna",
      imageSource: require("../assets/images/ratna.jpg"),
      work: "maid",
      contact: "8876543210",
      insideApartment: true,
    },
    {
      id: 2,
      name: "Balraj",
      imageSource: require("../assets/images/balraj.jpg"),
      work: "cleaner",
      contact: "9872943210",
      insideApartment: true,
    },
    {
      id: 3,
      name: "Sham",
      imageSource: require("../assets/images/sham.jpg"),
      work: "watchman",
      contact: "7876583216",
      insideApartment: false,
    },
    {
      id: 4,
      name: "Kapil",
      imageSource: require("../assets/images/kapil.jpg"),
      work: "carpenter",
      contact: "6878452539",
      insideApartment: false,
    },
    { id: 5, name: "Daily Help", imageSource: require("../assets/images/default.jpg")},
  ];

  const navigation = useNavigation();

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  const handleViewAllPress = () => {
    navigation.navigate("ViewAll", { helpers: users });
  };

  return (
    <View style={[styles.container, commonStyles.alignItemCenter]}>
      <ScrollView horizontal contentContainerStyle={[commonStyles.flexDirectionRow, commonStyles.alignItemCenter]}>
        {users.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => handleProfilePress(user)}
            style={[styles.helperContainer, commonStyles.alignItemCenter]}
          >
            <View style={styles.imageContainer}>
              <Image source={user.imageSource} style={[styles.image, commonStyles.widthHeight]} />
              <View style={[
                styles.statusCircle,
                { backgroundColor: user.insideApartment ? 'green' : 'red' }
              ]} />
            </View>
            <Text style={styles.helperName}>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[styles.viewAllContainer, commonStyles.alignItemCenter]}>
        <TouchableOpacity onPress={handleViewAllPress} style={styles.viewAllButton}>
          <Icon name="chevron-right" family="material" size={30} />
          <Text size={14} style={styles.viewAllText}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  statusCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginRight: 20,
  },
  helperContainer: {
    margin: 10,
  },
  image: {
    borderRadius: 25,
  },
  helperName: {
    marginTop: 5,
    textAlign: 'center',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  viewAllButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewAllText: {
    marginLeft: 5,
  },
});

export default HelpersList;
