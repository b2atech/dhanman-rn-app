import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const CustomHeader = () => {
    const [modalVisible, setModalVisible] = useState(false);

  const menuOptions = [
    { id: '1', title: 'Profile', icon: 'person' },
    { id: '2', title: 'Inbox', icon: 'inbox' },
    { id: '3', title: 'Settings', icon: 'settings' },
  ];

  const handleMenuPress = () => {
    setModalVisible(!modalVisible);
  };
  const handleOptionPress = (option) => {
    console.log(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemCenter]}>
        <Text style={styles.greeting}>Arun Patil, A101</Text>
        <TouchableOpacity onPress={handleMenuPress}>
        <Icon name={modalVisible ? "keyboard-arrow-up" : "keyboard-arrow-down"}  family='material' size={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.apartment}>Aspen Woods Apartments</Text>

      {modalVisible && (
        <View style={styles.dropdownMenu}>
          <FlatList
            data={menuOptions}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress(item)}>
                <Icon name={item.icon} family='material' size={24} style={styles.optionIcon} />
                <Text style={styles.optionText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
      padding: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    greeting: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    apartment: {
      fontSize: 14,
    },
    dropdown: {
      marginLeft: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },
    dropdownMenu: {
      position: 'absolute',
      top: 60,
      right: 10,
      width: 150,
      backgroundColor: 'white',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      zIndex: 1000,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    optionIcon: {
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
    },
  });

export default CustomHeader;
