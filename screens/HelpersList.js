import React,{useState, useEffect} from "react";
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
import { getServiceProviders } from "../api/apiService";

const HelpersList = () => {
  const [data, setData] = useState([]);
  const users = [
    {
      id: 1,
      name: "Ratna",
      imageSource: require("../assets/images/ratna.jpg"),
      work: "maid",
      contact: "8876543210",
      insideApartment: true,
      tag: 'Helper',
      time: '10.00 AM, Today'
    },
    {
      id: 2,
      name: 'Rahul', 
      imageSource: require('../assets/images/visitor_men.png'), 
      tag: 'Visitor', 
      work: 'Guest',
      insideApartment: true,
      time: '3:08 PM, Today'
    },
    {
      id: 3,
      name: "Sham",
      imageSource: require("../assets/images/sham.jpg"),
      work: "watchman",
      contact: "7876583216",
      insideApartment: false,
      tag: 'Helper',
      time: '11:08 AM, Today'
    },
    {
      id: 4,
      name: "Kapil",
      imageSource: require("../assets/images/kapil.jpg"),
      work: "carpenter",
      contact: "6878452539",
      insideApartment: false,
      tag: 'Helper',
      time: '1:00 PM, Today'
    },
    { id: 5, 
      name: "Daily Help", 
      imageSource: require("../assets/images/default.jpg"), 
      tag: 'Helper',
      time: '5:00 AM, Yesterday'
    },
    { id: 6, 
      name: "Balraj",
      imageSource: require("../assets/images/balraj.jpg"),
      work: "cleaner",
      contact: "9872943210",
      insideApartment: true,
      tag: 'Helper',
      time: '3:08 PM, Yesterday'
    },
    { id: 7, 
      name: 'Kavita', 
      imageSource: require('../assets/images/visitor_women.png'), 
      tag: 'Visitor',
      work: 'Guest',
      time: '3:08 PM, Yesterday'
    },
    { id: 8, 
      name: 'Karan K', 
      imageSource: require('../assets/images/karan.jpg'), 
      tag: 'Visitor',
      work: 'Guest',
      time: '3:08 PM, Yesterday'
    },
    { id: 9, 
      name: 'Roshan', 
      imageSource: require('../assets/images/visitors_men.png'), 
      tag: 'Visitor',
      work: 'Guest',
      time: '3:08 PM, Yesterday'
    },
  ];

  const navigation = useNavigation();

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  const handleViewAllPress = () => {
    navigation.navigate("ViewAll", { helpers: users });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceProviders = await getServiceProviders();
        setData(serviceProviders);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={commonStyles.flexDirectionRow}>
        <Text style={commonStyles.headerText}>Helpers and Visitors</Text>
        <TouchableOpacity onPress={handleViewAllPress} style={styles.viewAllButton}>
          <Icon name="keyboard-arrow-right" family="material" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {data.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => handleProfilePress(user)}
            style={styles.helperContainer}
          >
            <View style={styles.card}>
              <View style={[styles.header, { backgroundColor: '#f8ac59' }]}>
                <Text style={styles.tag}>{user.serviceProviderType}</Text>
              </View>
              <View style={styles.cardContent}>
                <Image source={user.imageSource} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.helperName}>{user.firstName}</Text>
                  <Text style={styles.helperRole}>{user.lastName}</Text>
                  <View style={styles.timeContainer}>
                    <Icon name="access-time" family="material" size={14} color="#888" />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto'
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helperContainer: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  header: {
    borderRadius: 10,
    padding: 5,
    width: '50%',
  },
  tag: {
    color: '#fffF',
    fontSize: 12,
    textAlign: 'left',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 10,
  },
  helperName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helperRole: {
    fontSize: 14,
    color: '#888',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
});

export default HelpersList;
