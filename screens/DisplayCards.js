import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Block, Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const DisplayCards = ({ name, imageSource, icon, description, color }) => {
  const navigation = useNavigation();

  const handleViewPress = () => {
    if (name === 'Events') {
      navigation.navigate("Events");
    }
  };

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={handleViewPress}>
      <View style={styles.blockContainer}>
        {imageSource ? (
          <Image source={imageSource} style={styles.avatar} />
        ) : (
          <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemCenter]}>
            <Text style={[styles.text, commonStyles.headerText]}>{name}</Text>
            <Icon name={icon} family="material" style={styles.icon} />
          </View>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
  },
  blockContainer: {
    marginBottom: 5,
  },
  avatar: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  icon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 40
  },
  text: {
    marginVertical: 10,
    marginBottom: 8,
    marginLeft: 5,
    color: 'white',
  },
  description: {
    marginBottom: 8,
    marginLeft: 5,
    color: 'white',
    fontSize: 14
  },
})

export default DisplayCards;
