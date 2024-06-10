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
        <View style={[commonStyles.flexDirectionRow, styles.scrollhorizontal]}>
          <ScrollView horizontal contentContainerStyle={styles.scrollView}>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Events" color="black" description="check your society's events" icon="event" family="material" />
            </Block>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Pay Rent" color="black" description="Pay your rent/maintainance" icon="currency-rupee" family="material" />
            </Block>
            <Block flex style={[styles.displaycontainer, styles.container]}>
              <DisplayCards name="Book Slot" color="black" description="Book your next indoor game slot" icon="sports-tennis" family="material" />
            </Block>
          </ScrollView>
        </View>
        <Block flex style={styles.container}>
          <Payments />
        </Block>
        <Block flex style={styles.container}>
          <Visitors />
        </Block>
        <Block flex style={styles.container}>
          <Notifications />
        </Block>
        <Block flex style={styles.container}>
          <HelpersList />
        </Block>
        <View style={commonStyles.flexDirectionRow}>
          <ScrollView horizontal>
            <Block flex>
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
        </View>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  scrollhorizontal: {
    flexDirection: 'row',
  },
  displaycontainer: {
    marginRight: 10,
    width: 150,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginBottom: 10,
    borderRadius: 15,
    marginHorizontal: 10
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
});
