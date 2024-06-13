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
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  home: {
    width: width,
    paddingVertical: 20,
    justifyContent: 'center',
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
  headerText: {
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "sans-serif",
    color: 'rgb(103, 106, 108)'
  }
});

export default commonStyles;
