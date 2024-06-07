import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const Notifications = () => {
  return (
    <Block style={styles.userAction}>
      <TouchableOpacity onPress={() => navigation.navigate('NoticeList')}>
      <View style={[styles.avatarContainer, commonStyles.flexDirectionRow, commonStyles.alignItemLeft]}>
        <Icon name='notifications-outline' family="ionicon" style={commonStyles.icon} />
        <Text size={16}>NOTICE BOARD</Text>
      </View>
      <View style={[commonStyles.marginBottom2, commonStyles.flexDirectionRow, commonStyles.alignItemLeft]}>
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
  avatar: {
    width: 10,
    height: 50,
    borderRadius: 25,
  },
});

export default Notifications;
