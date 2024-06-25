import Toast from 'react-native-toast-message';

export const SuccessToastMessage = (message) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};
