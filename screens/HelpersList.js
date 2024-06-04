import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Icon } from 'galio-framework';
import Helpers from './Helpers';
import { useNavigation } from '@react-navigation/native';

const HelpersList = () => {
  const users = [
    { id: 1, name: 'Ratna', imageSource: require('../assets/images/woman.jpg'), work: 'maid' },
    { id: 2, name: 'Balraj', imageSource: require('../assets/images/man.jpg') },
    { id: 3, name: 'Daily Help', icon: 'person' },
  ];

  const navigation = useNavigation();

  const handleViewAllPress = (user) => {
    if (user && user.work === 'maid') {
      navigation.navigate('MaidProfile', { userProfile: user });
    } else {
      navigation.navigate('ViewAll', { helpers: users });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {users.map((user) => (
          <Helpers
            key={user.id}
            name={user.name}
            imageSource={user.imageSource}
            icon={user.icon}
            user={user}
            handleViewAllPress={() => handleViewAllPress(user)} // Pass the correct user
          />
        ))}
      </ScrollView>
      <View style={styles.viewAllContainer}>
        <Icon name="chevron-right" family="material" size={30} onPress={() => handleViewAllPress()} />
        <Text size={14} onPress={() => handleViewAllPress()}>View All</Text>
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
  viewAllContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default HelpersList;
