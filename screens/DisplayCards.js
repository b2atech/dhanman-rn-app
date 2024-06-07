import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const DisplayCards = ({ name, imageSource, icon, description, color }) => {
  return (
    <Block>
      <View style={styles.blockContainer}>
        {imageSource ? (
          <Image source={imageSource} style={styles.avatar} />
        ) : (
          <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemCenter]}>
            <Text style={styles.text}>{name}</Text>
            <Icon name={icon} family="material" style={styles.icon} />
          </View>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    marginBottom: 5,
    marginRight:10,
  },
  avatar: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  icon: {
    fontSize: 25,
    color: 'black',
    marginLeft: 40
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 8,
    marginLeft: 5
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 5
  },
})

export default DisplayCards;
