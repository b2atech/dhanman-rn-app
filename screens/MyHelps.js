import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Block} from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../style/CommonStyles';

const MyHelps = () => {
    const navigation = useNavigation();
    
  return (
    <Block style={styles.userAction}>
      <TouchableOpacity onPress={() => navigation.navigate('GateUpdates')}>
      <View style={[styles.avatarContainer, commonStyles.flexDirectionRow, commonStyles.alignItemLeft]}>
        <Text style={commonStyles.headerText}>My Help Updates</Text>
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

export default MyHelps;
