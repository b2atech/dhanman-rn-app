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

const HelpersList = () => {
  const users = [
    {
      id: 1,
      name: "Ratna",
      imageSource: require("../assets/images/woman.jpg"),
      work: "maid",
      contact: "8876543210",
    },
    {
      id: 2,
      name: "Balraj",
      imageSource: require("../assets/images/man.jpg"),
      work: "cleaner",
      contact: "9872943210",
    },
    {
      id: 3,
      name: "Sham",
      imageSource: require("../assets/images/man.jpg"),
      work: "watchman",
      contact: "7876583216",
    },
    {
      id: 4,
      name: "Kapil",
      imageSource: require("../assets/images/man.jpg"),
      work: "carpenter",
      contact: "6878452539",
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
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {users.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => handleProfilePress(user)}
            style={styles.helperContainer}
          >
            <Image source={user.imageSource} style={styles.image} />

            <Text>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.viewAllContainer}>
        <Icon
          name="chevron-right"
          family="material"
          size={30}
          onPress={handleViewAllPress}
        />
        <Text size={14} onPress={handleViewAllPress}>
          View All
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 20,
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helperContainer: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewAllContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
  },

});


export default HelpersList;
