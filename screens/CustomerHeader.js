import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const menuOptions = [
    { id: '1', title: 'Profile', icon: 'account-circle', color: '#007bff' },
    { id: '2', title: 'Inbox', icon: 'inbox', color: '#1ab394' },
    { id: '3', title: 'Settings', icon: 'settings', color: '#28a745' },
  ];

  const handleIconPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greeting}>Arun Patil, A101</Text>
        <Text style={styles.apartment}>Aspen Woods Apartments</Text>
      </View>
      <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
        <Icon name="settings" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.drawerContainer}>
          <View style={styles.drawerContent}>
            <Text style={styles.drawerHeader}>Configuration</Text>
            {menuOptions.map((option) => (
              <TouchableOpacity key={option.id} style={styles.option}>
                <Icon name={option.icon} size={24} color={option.color} style={styles.optionIcon} />
                <Text style={styles.optionText}>{option.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  apartment: {
    fontSize: 14,
  },
  iconContainer: {
    padding: 5,
    backgroundColor: '#1ab394',
    borderRadius: 100,
    marginLeft: 140,
    width: 80,
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  drawerHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default CustomHeader;
