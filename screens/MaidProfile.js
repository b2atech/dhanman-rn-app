import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { Card } from 'react-native-paper';

const MaidProfileScreen = ({ route }) => {
  const { userProfile } = route.params || {};

  const {
    name = 'Default Name',
    imageSource = require('../assets/images/default.jpg'), 
    work = 'Default Work',
    contact = 'Default Contact'
  } = userProfile || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          {imageSource && (
            <Image
              style={styles.profileImage}
              source={userProfile.imageSource}
            />
          )}
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{userProfile.name}</Text>
            <Text style={styles.work}>{work}</Text>
            <Text style={styles.contact}>{contact}</Text>
            <Button title="Verify/Edit Contact Number" color="#1e88e5" />
          </View>
        </View>
        <View style={styles.profileActions}>
          <Button title="Call" color="#e0e0e0" />
          <Button title="Share" color="#e0e0e0" />
          <Button title="Message" color="#e0e0e0" />
        </View>
      </Card>
      <Card style={styles.attendanceCard}>
        <View style={styles.attendanceHeader}>
          <Text style={styles.attendanceText}>Attendance</Text>
          <Text style={styles.attendanceCount}>24/30</Text>
        </View>
        <Button title="Record Payment" color="#ffeb3b" />
      </Card>
      <Card style={styles.ratingCard}>
        <Text style={styles.ratingText}>4.0</Text>
        <Text style={styles.ratingLabel}>Rate Now</Text>
        <View style={styles.ratingIcons}>
          <Image style={styles.ratingIcon} source={{ uri: 'https://via.placeholder.com/50' }} />
          <Image style={styles.ratingIcon} source={{ uri: 'https://via.placeholder.com/50' }} />
          <Image style={styles.ratingIcon} source={{ uri: 'https://via.placeholder.com/50' }} />
          <Image style={styles.ratingIcon} source={{ uri: 'https://via.placeholder.com/50' }} />
        </View>
      </Card>
      <Card style={styles.infoCard}>
        <Text style={styles.infoText}>Works in 5 Houses</Text>
      </Card>
      <Card style={styles.infoCard}>
        <Text style={styles.infoText}>Free Time Slots: 6-7 am</Text>
      </Card>
      <View style={styles.footer}>
        <Text style={styles.footerText}>ADDED BY SHUBHANGI ON 30 JAN 2023</Text>
        <Button title="Remove" color="#f44336" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    padding: 16,
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  work: {
    fontSize: 16,
    color: 'gray',
  },
  contact: {
    fontSize: 16,
    color: 'gray',
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  attendanceCard: {
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendanceText: {
    fontSize: 16,
  },
  attendanceCount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  ratingCard: {
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingLabel: {
    fontSize: 16,
    color: '#ff9800',
    marginTop: 8,
  },
  ratingIcons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  ratingIcon: {
    width: 50,
    height: 50,
    margin: 4,
  },
  infoCard: {
    padding: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MaidProfileScreen;
