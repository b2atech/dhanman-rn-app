import React, {useState} from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Text, Block, Icon } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../style/CommonStyles';

const Payments = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const menuOptions = [
    { id: '1', description: 'paid to maid Ratna', amount: 2000 },
    { id: '2', description: 'pending building maintenance', amount: 1000 },
  ];

  const handleMenuPress = () => {
    setModalVisible(!modalVisible);
  };
  const handleOptionPress = (option) => {
    navigation.navigate('PaymentList', { helpers: option });
    console.log(option);
    setModalVisible(false);
  };

  return (
    <Block style={styles.userAction}>
      <View style={[commonStyles.flexDirectionRow, styles.avatarContainer]}>
        <View style={styles.iconAndText}>
          <Text style={commonStyles.headerText}>Payments</Text>
        </View>
        <View style={styles.paymentAndDropdown}>
          <Text style={styles.duePayment}>₹ 2000</Text>
          <TouchableOpacity onPress={handleMenuPress} >
          <Icon name={modalVisible ? "keyboard-arrow-up" : "keyboard-arrow-down"}  family='material' size={24} />
          </TouchableOpacity>
          {modalVisible && (
            <Modal
              transparent={true}
              animationType="fade"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalOverlay}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <FlatList
                    data={menuOptions}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress(item)}>
                        <Text style={styles.optionText}>{item.description}</Text>
                        <Text style={[styles.optionAmount, { color: item.amount === 2000 ? 'green' : 'red' }]}>
                          {`₹ ${item.amount}`}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              </TouchableOpacity>
            </Modal>
          )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duePayment: {
    color: '#1ab394',
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
  dropdown: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: 330,
    top: 150,
    right: 10,
    position: 'absolute',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  optionAmount: {
    fontSize: 16,
    textAlign: 'right',
  },
});

export default Payments;
