import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, theme } from 'galio-framework';
import HelpersList from './HelpersList';
import Payments from './Payments';
import Notifications from './Notifications';
import Visitors from './Visitors';
import DisplayCards from './DisplayCards';
import SocietyCard from './SocietyCards';
import commonStyles from '../style/CommonStyles';

const { width } = Dimensions.get('screen');

export default class Home extends React.Component {
  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={commonStyles.home}
      >
        <Block flex style={[styles.container]}>
          <Payments />
        </Block>
        <Block flex style={[styles.helperContainer]}>
          <HelpersList />
        </Block>
        <Block flex style={[styles.container]}>
          <Notifications />
        </Block>
        <View style={commonStyles.flexDirectionRow}>
          <ScrollView horizontal contentContainerStyle={styles.scrollView}>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Events" color="#23c6c8" description="check your society's events" icon="event" family="material" />
            </Block>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Pay Rent" color="#ED5565" description="Pay your rent/maintainance" icon="currency-rupee" family="material" />
            </Block>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Book Slot" color="#f8ac59" description="Book your next indoor game slot" icon="sports-tennis" family="material" />
            </Block>
          </ScrollView>
        </View>
        {/* <View style={commonStyles.flexDirectionRow}>
          <ScrollView horizontal>
            <Block flex style={[styles.displaycontainer, styles.container, commonStyles.shadow]}>
              <SocietyCard imageSource={require('../assets/images/covid.jpg')} name="Covid Care" />
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/homeservice.jpg')} name="Home Service" />
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/stores.jpg')} name="Stores" />
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/homedecor.jpg')} name="Home Decor" />
            </Block>
          </ScrollView>
        </View> */}
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={commonStyles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  displaycontainer: {
    marginRight: 10,
    width: 150,
    height: 90,
  },
  helperContainer: {
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
