import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const Payments = () => {
  return (
    <Block style={styles.userAction}>
      <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemLeft, commonStyles.marginBottom2]}>
        
          <Icon name='attach-money' family="material" style={commonStyles.icon} />
          <Text size={18}>Payments</Text>
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
  avatar: {
    width: 10,
    height: 50,
    borderRadius: 25,
  },
});

export default Payments;
