import { StyleSheet, Dimensions } from 'react-native';
import { theme } from 'galio-framework';

const { width } = Dimensions.get('window');

const viewAll = StyleSheet.create({
    card: {
      width: 150,
      padding: 10,
      backgroundColor: '#E5E7E9',
      borderRadius: 10,
      marginRight: 10,
      marginBottom: 10,
      marginHorizontal: 10,
      alignItems: 'center'
    },
    imageContainer: {
      position: 'relative',
      borderRadius: 100,
      overflow: 'hidden'
    },
    image: {
      width: 100,
      height: 100,
      position: 'relative',
      borderRadius: 100,
      overflow: 'hidden'
    },
    profileicon: { 
      borderRadius: 100,
      color: 'black'
    },
    infoContainer: {
      marginTop: 10,
      alignItems: 'center'
    },
    iconRow: {
      marginTop: 5,
    },
    icon: {
      marginRight: 10,
    },
    products: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
    },
  });

export default viewAll;