import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';

const Notifications = ({ name, imageSource, icon }) => {
  return (
    <Block style={styles.userAction}>
      <TouchableOpacity onPress={() => navigation.navigate('NoticeList')}>
      <View style={styles.avatarContainer}>
        <Icon name='notifications-outline' family="ionicon" style={styles.icon} />
        <Text size={16}>NOTICE BOARD</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text size={15}>You have 6 new notifications</Text>
      </View>
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  userAction: {
    alignItems: 'left',
    marginVertical: 10,
    marginHorizontal: 10
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    alignItems: 'left',
  },
  avatar: {
    width: 10,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    fontSize: 25,
    alignItems: 'left',
    color: '#007AFF',
  },
});

export default Notifications;
