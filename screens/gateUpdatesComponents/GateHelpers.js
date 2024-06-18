import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, Icon } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import { getServiceProviders } from "../../api/serviceProvider";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const GateHelpers = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceProviders = await getServiceProviders();
        setData(serviceProviders);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView vertical contentContainerStyle={styles.scrollViewContent}>
        {data.map((user, index) => (
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
                  <View style={styles.nameTagContainer}>
                    <Text style={styles.helperName}>
                      {user.firstName} {user.lastName}
                    </Text>
                    <MaterialIcons
                      name={index < 2 ? "circle" : "highlight-off"}
                      size={14}
                      color={index < 2 ? "green" : "red"}
                      style={styles.statusIcon}
                    />
                    {user.serviceProviderType && (
                      <View
                        style={[
                          styles.tagContainer,
                          { backgroundColor: "#f8ac59" },
                        ]}
                      >
                        <Text style={styles.tag}>
                          {user.serviceProviderType}
                        </Text>
                      </View>
                    )}
                  </View>
                  {user.serviceProviderSubType && (
                    <Text style={styles.helperRole}>
                      {user.serviceProviderSubType}
                    </Text>
                  )}
                  <View style={styles.timeContainer}>
                    <Icon
                      name="access-time"
                      family="material"
                      size={14}
                      color="#888"
                    />
                    <Text style={styles.timeText}>{user.time}</Text>
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
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  helperContainer: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: 120,
    marginTop: 20,
    elevation: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: -20,
    position: "relative",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
    marginTop: -10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  nameTagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helperName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statusIcon: {
    marginLeft: 5,
  },
  tagContainer: {
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: "#f8ac59",
    alignSelf: "flex-start",
  },

  tag: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  helperRole: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
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
  statusIcon: {
    position: "relative",
    marginLeft: -50,
  },
});

export default GateHelpers;
