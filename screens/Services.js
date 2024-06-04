import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Block } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Services = ({ name, imageSource, title }) => {
  return (
    <Block style={styles.serviceBlock}>
        {title && <Text style={styles.serviceTitle}>{title}</Text>}
        <TouchableOpacity style={styles.userAction}>
          <View style={styles.avatarContainer}>
            <Image source={imageSource} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
          </View>
        </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  serviceBlock: {
    width: '20%',
    margin: 10,
    alignItems: 'center'
  },
  userAction: {
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
});

export default Services;
