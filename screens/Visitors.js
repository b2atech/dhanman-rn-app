import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';

const Visitors = () => {
  return (
    <Block style={styles.userAction}>
      <View style={styles.avatarContainer}>
          <Icon name='group' family="material" style={styles.icon} />
          <Text size={18}>Visitors</Text>
      </View>
      
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

export default Visitors;
