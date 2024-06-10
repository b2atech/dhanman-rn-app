import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Block } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';
import commonStyles from '../style/CommonStyles';

const Services = ({ name, imageSource, title }) => {
  return (
    <Block style={styles.serviceBlock}>
        {title && <Text style={styles.serviceTitle}>{title}</Text>}
        <TouchableOpacity style={commonStyles.alignItemCenter}>
          <View style={commonStyles.alignItemCenter}>
            <Image source={imageSource} style={commonStyles.widthHeight} />
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
