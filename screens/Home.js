import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, theme } from 'galio-framework';
import HelpersList from './HelpersList';
import Payments from './Payments';
import Notifications from './Notifications';
import Visitors from './Visitors';
import DisplayCards from './DisplayCards';
import SocietyCard from './SocietyCards';

const { width } = Dimensions.get('screen');

export default class Home extends React.Component {
  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        <View style={styles.scrollhorizontal}>
          <ScrollView horizontal contentContainerStyle={styles.scrollView}>
            <Block flex style={styles.displaycontainer}>
              <DisplayCards name="Events" color="black" description="check your society's events" icon="event" family="material" />
            </Block>
            <Block flex style={styles.displaycontainer}>
              <DisplayCards name="Pay Rent" color="black" description="Pay your rent/maintainance" icon="currency-rupee" family="material" />
            </Block>
            <Block flex style={styles.displaycontainer}>
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
        <View style={styles.scrollhorizontal}>
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
    flex: 1,
    backgroundColor: '#d5bdaf',
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 15,
    width: 150,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: '#d6ccc2',
    marginBottom: 10,
    borderRadius: 15,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
