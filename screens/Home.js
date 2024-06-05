import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon } from '../components/';
import HelpersList from './HelpersList';
import Payments from './Payments';
import Notifications from './Notifications';
import Visitors from './Visitors';

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
        <Block flex style={styles.container}>
          <HelpersList />
        </Block>
        <Block flex style={styles.container}>
          <Payments />
        </Block>
        <Block flex style={styles.container}>
          <Notifications />
        </Block>
        <Block flex style={styles.container}>
          <Visitors />
        </Block>
      </ScrollView>
    );
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderSearch()}
        {this.renderTabs()}
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: '#D7DBDD',
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

