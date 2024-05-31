import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { height, width } = Dimensions.get('screen');
import homeImages from '../constants/images/home';

export default class Home extends React.Component {

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
            <Block flex card style={[styles.category, styles.shadow]}>
              <Icon name="person" family="material" size={20} color={theme.COLORS.BLACK}/>
                <Text size={20}  color={theme.COLORS.BLACK}></Text>
                <View style={styles.profileDetails}>
                    <Text size={20} style={{ marginLeft: 10 }}>Nilam</Text>
                    <Text size={20} style={{ marginLeft: 10 }}>*******548</Text>
                </View>
            </Block>
            <Block flex card style={[styles.category, styles.shadow]}>
              <Icon name="schedule" family="material" size={20} color={theme.COLORS.BLACK}/>
              <Block >
                <Text size={20} style={{ marginLeft: 10 }} color={theme.COLORS.BLACK}>Attendence</Text>
              </Block>
            </Block>
            <Block flex card style={[styles.category, styles.shadow]}>
              <Icon name="history" family="material" size={20} color={theme.COLORS.BLACK}/>
              <Block >
                <Text size={20} style={{ marginLeft: 10 }} color={theme.COLORS.BLACK}>Free Time Slots</Text>
              </Block>
            </Block>
            <Block flex card style={[styles.category, styles.shadow]}>
              <Icon name="house" family="material" size={20} color={theme.COLORS.BLACK}/>
              <Block >
                <Text size={20} style={{ marginLeft: 10 }} color={theme.COLORS.BLACK}>Works in 8 Houses</Text>
              </Block>
            </Block>

      </ScrollView>
    )
  }

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
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    height: height - theme.SIZES.BASE * 2
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginHorizontal: theme.SIZES.BASE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
    paddingVertical: theme.SIZES.BASE * 1,
    alignItems: 'left',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  profileDetails: {
    marginTop: 5, 
  },
});
