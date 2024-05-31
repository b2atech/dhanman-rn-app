import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import Helpers from './Helpers';

const { width } = Dimensions.get('screen');

const HelpersList = () => {
  const users = [
    { name: 'Ratna', icon: 'account-circle' },
    { name: 'Balraj', icon: 'account-circle' },
    { name: 'Daily Help', icon: 'person' },
    { name: 'Ratna', icon: 'account-circle' },
    { name: 'Balraj', icon: 'account-circle' },
    { name: 'Daily Help', icon: 'person' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {users.map((user, index) => (
          <Helpers key={index} name={user.name} imageSource={user.imageSource} icon={user.icon} />
        ))}
      </ScrollView>
      <View style={styles.viewAllContainer}>
        <Icon name="chevron-right" family="material" size={30} />
        <Text size={14}>View All</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginRight: 20
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
