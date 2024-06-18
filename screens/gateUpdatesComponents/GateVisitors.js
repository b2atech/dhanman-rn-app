import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import commonStyles from "../../style/CommonStyles";
import { getVisitors } from "../../api/visitors";

const GateVisitors = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dailyVisitors = await getVisitors();
        setData(dailyVisitors);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView vertical contentContainerStyle={styles.scrollViewContent}>
        {data.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => handleProfilePress(user)}
            style={styles.helperContainer}
          >
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  source={
                    user.imageSource
                      ? { uri: user.imageSource }
                      : require("../../assets/images/user_icon.png")
                  }
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.helperName}>
                    {user.firstName} {user.lastName}
                  </Text>
                  <View style={styles.infoContainer}>
                    <Image
                      source={require("../../assets/images/contact.jpg")}
                      style={styles.contactIcon}
                    />
                    <Text style={styles.helperRole}>{user.contactNumber}</Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Image
                      source={require("../../assets/images/car.png")}
                      style={styles.carIcon}
                    />
                    <Text style={styles.helperRole}>{user.vehicleNumber}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
    marginLeft: "40%",
  },
  headerTextMargin: {
    marginLeft: 10,
  },
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
  },
  helperContainer: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
    elevation: 1,
  },
  header: {
    borderRadius: 10,
    padding: 5,
    width: "50%",
  },
  tag: {
    color: "#fffF",
    fontSize: 12,
    textAlign: "left",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
    marginTop: -25,
  },
  textContainer: {
    marginLeft: 10,
  },
  helperName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  contactIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginLeft: 10,
  },
  carIcon: {
    width: 24,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
  },
  helperRole: {
    fontSize: 16,
    color: "#888",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 5,
  },
});

export default GateVisitors;
