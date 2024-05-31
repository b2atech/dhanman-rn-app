import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';

const Payments = ({ name, imageSource, icon }) => {
  return (
    <Block style={styles.userAction}>
      <View style={styles.avatarContainer}>
        {imageSource ? (
          <Image source={imageSource} style={styles.avatar} />
        ) : (
          <Icon name={icon} family="material" style={styles.icon} />
        )}
        <Icon name="add-circle" family="material" style={styles.addIcon} />
      </View>
      <Text size={12}>{name}</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  userAction: {
    alignItems: 'center',
    marginVertical: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 2,
  },
  avatar: {
    width: 10,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    fontSize: 50,
    color: '#CCCBCB',
  },
  addIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    fontSize: 20,
    color: '#007AFF',
  },
});

export default Payments;
