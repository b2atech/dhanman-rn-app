// commonStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const commonStyles = StyleSheet.create({
    alignItemCenter: {
      alignItems: 'center',
    },
    alignItemLeft: {
      alignItems: 'left',
    },
    alignItemRight: {
      alignItems: 'right',
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    home: {
      width: width,
      paddingVertical: 20,
      backgroundColor: '#F8F9F9',
      justifyContent: 'center',
      borderRadius: 50,
    },
    mainPage: {
      width: width,    
    },
    widthHeight: {
      width: 50,
      height: 50,
    },
    marginBottom2: {
      marginBottom: 2,
    },
    icon: {
      fontSize: 25,
      alignItems: 'left',
      color: '#007AFF',
    },
    dotCircle: {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: '#F8F9F9',
      justifyContent: 'center',
    },
    shadow:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
    
});

export default commonStyles;
