import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon } from '../components/';
import HelpersList from './HelpersList';
import Payments from './Payments';
import Notifications from './Notifications';
import Visitors from './Visitors';
import DisplayCards from './DisplayCards';
import SocietyCard from './SocietyCards';

const { width } = Dimensions.get('screen');

export default class Home extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconContent = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />;

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconContent}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Search')}
      />
    );
  }

  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    );
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <View style={styles.scrollhorizontal}>
          <ScrollView horizontal contentContainerStyle={styles.scrollView}>
            <Block flex style={styles.displaycontainer}>
              <DisplayCards name='Events' color='black' description="check your society's events" icon='event' family='material'/>
            </Block>
            <Block flex style={styles.displaycontainer}>
              <DisplayCards name='Pay Rent' color='black' description='Pay your rent/maintainance' icon='currency-rupee' family='material'/>
            </Block>
            <Block flex style={styles.displaycontainer}>
              <DisplayCards name='Book Slot' color='black' description='Book your next indoor game slot' icon='sports-tennis' family='material'/>
            </Block>
          </ScrollView>
        </View>
        <Block flex style={styles.container}>
          <Payments  />
        </Block>
        <Block flex style={styles.container}>
          <Visitors/>
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
              <SocietyCard imageSource={require('../assets/images/covid.jpg')} name='Covid Care'/>
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/homeservice.jpg')} name='Home Service'/>
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/stores.jpg')} name='Stores'/>
            </Block>
            <Block flex>
              <SocietyCard imageSource={require('../assets/images/homedecor.jpg')} name='Home Decor'/>
            </Block>
          </ScrollView>
        </View>
        <Block flex style={styles.container}>
          <Payments />
        </Block>
      </ScrollView>
    );
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {/* {this.renderSearch()}
        {this.renderTabs()} */}
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  scrollhorizontal:{
    flexDirection: 'row'
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
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});

