// ProductCard.js
import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Block, Text, Icon } from 'galio-framework';
import PropTypes from 'prop-types';

const ProductCard = ({ 
  product, 
  title,
  navigation, 
  horizontal = false, 
  style = {}, 
  priceColor, 
  iconName, 
  iconFamily = 'material', 
  iconColor = 'black' 
}) => (
  <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product })}>
      <Block flex style={[styles.imageContainer, styles.shadow]}>
        <Icon name={iconName} family={iconFamily} color={iconColor} />
      </Block>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product })}>
      <Block flex space="between" style={styles.productDescription}>
        <Text size={14} style={styles.productTitle}>{title}</Text>
        <Text size={12} muted={!priceColor} color={priceColor}>${product.price}</Text>
      </Block>
    </TouchableWithoutFeedback>
  </Block>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  horizontal: PropTypes.bool,
  style: PropTypes.object,
  priceColor: PropTypes.string,
  iconName: PropTypes.string,
  iconFamily: PropTypes.string,
  iconColor: PropTypes.string,
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
export default ProductCard;
