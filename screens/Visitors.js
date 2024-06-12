import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Icon, Block } from 'galio-framework';
import Helpers from './Helpers';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../style/CommonStyles';

const Visitors = () => {
  const users = [
    { name: 'Rahul', imageSource: require('../assets/images/visitor_men.png') },
    { name: 'Kavita', imageSource: require('../assets/images/visitor_women.png') },
    { name: 'Karan K', imageSource: require('../assets/images/karan.jpg') },
    { name: 'Roshan', imageSource: require('../assets/images/visitors_men.png') },
  ];

  const navigation = useNavigation();

  const handleViewAllPress = () => {
    navigation.navigate('VisitorsList', { helpers: users });
  };

  return (
    <Block>
      <View style={styles.container}>
        <Text style={commonStyles.headerText}>Visitors Updates</Text>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={[commonStyles.flexDirectionRow, commonStyles.alignItemCenter]}>
          {users.map((user, index) => (
            <Helpers key={index} name={user.name} imageSource={user.imageSource} icon={user.icon} />
          ))}
        </ScrollView>
        <View style={styles.viewAllContainer}>
          <Icon name="chevron-right" family="material" size={30} onPress={handleViewAllPress}/>
          <Text size={14} onPress={handleViewAllPress}>View All</Text>
        </View>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 20
  },
  viewAllContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Visitors;
