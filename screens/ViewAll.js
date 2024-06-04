import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');
const ViewAllScreen = ({ route }) => {
  const { helpers } = route.params;

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
            {helpers.map((user, index) => (
            <Block flex  style={styles.card}>
                <View style={styles.container}>
                    <ScrollView vertical contentContainerStyle={styles.scrollView}>
                        
                        <View key={user.id} >
                            {user.imageSource ? (
                            <Image source={user.imageSource} style={styles.image} />
                            ) : (
                                <View style={styles.dotCircle}>
                                <Icon
                                  name={user.icon}
                                  family='material'
                                  size={70}
                                  color="#fff"
                                  style={styles.profileicon}
                                />
                              </View>
                            )}
                            <View style={styles.infoContainer}>
                                <Text size={20} style={styles.name}>{user.name}</Text>
                                <Text size={14} style={styles.name}>{user.work}</Text>
                                <View style={styles.iconRow}>
                                    <Icon name="phone" family="material-community" size={20} style={styles.icon} />
                                    <Icon name="bell" family="material-community" size={20} style={styles.icon} />
                                    <Icon name="star" family="material-community" size={20} style={styles.icon} />
                                </View>
                            </View>
                        </View>
                        
                    </ScrollView>
                </View>
            </Block>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    name: {
        alignItems: 'center',
    },
    iconRow: {
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center'
    },
    icon: {
      marginRight: 10,
    },
    products: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
    },
    dotCircle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#F8F9F9',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

export default ViewAllScreen;
