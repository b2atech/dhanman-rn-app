import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import commonStyles from '../style/CommonStyles';

const Payments = ({ name, imageSource, icon }) => {
  const handleDropdownClick = () => {
    Alert.alert("Payment Status", "₹ 5000 maintenance pending");
  };

  return (
    <Block style={styles.userAction}>
      <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemLeft, commonStyles.marginBottom2]}>
        <View style={styles.iconAndText}>
          <Icon name='attach-money' family="material" style={commonStyles.icon} />
          <Text size={18}>Payments</Text>
        </View>
        <View style={styles.paymentAndDropdown}>
          <Text style={styles.duePayment}>₹ 5000</Text>
          <TouchableOpacity onPress={handleDropdownClick} style={styles.dropdown}>
            <Text style={styles.dropdownText}>Show Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  userAction: {
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#007AFF',
    marginRight: 5,
  },
  duePayment: {
    color: 'red',
    fontSize: 18,
  },
  paymentAndDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  dropdownText: {
    color: '#007AFF',
    fontSize: 8,
  },
});

export default Payments;
