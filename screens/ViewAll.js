import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon, Block, theme } from 'galio-framework';
import { useNavigation } from "@react-navigation/native";
import commonStyles from '../style/CommonStyles';
import viewAll from '../style/ViewAllStyle';

const { width } = Dimensions.get('screen');
const ViewAllScreen = ({ route }) => {
  const { helpers } = route.params;
  const navigation = useNavigation();

  const handleProfilePress = (user) => {
    navigation.navigate("MaidProfile", { userProfile: user });
  };

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={commonStyles.products}>
            {helpers.map((user, index) => (
            <Block flex style={viewAll.card} key={user.id}>
                <TouchableOpacity onPress={() => handleProfilePress(user)}>
                  <View style={viewAll.container}>
                      <ScrollView vertical contentContainerStyle={viewAll.scrollView}>
                          
                          <View>
                              {user.imageSource ? (
                              <Image source={user.imageSource} style={viewAll.image} />
                              ) : (
                                  <View style={[commonStyles.dotCircle, commonStyles.alignItemCenter]}>
                                  <Icon
                                    name={user.icon}
                                    family='material'
                                    size={70}
                                    color="#fff"
                                    style={viewAll.profileicon}
                                  />
                                </View>
                              )}
                              <View style={viewAll.infoContainer}>
                                  <Text size={20} style={[viewAll.name, commonStyles.alignItemCenter]}>{user.name}</Text>
                                  <Text size={14} style={[viewAll.name, commonStyles.alignItemCenter]}>{user.work}</Text>
                                  <View style={viewAll.iconRow}>
                                      <Icon name="phone" family="material-community" size={20} style={viewAll.icon} />
                                      <Icon name="bell" family="material-community" size={20} style={viewAll.icon} />
                                      <Icon name="star" family="material-community" size={20} style={viewAll.icon} />
                                  </View>
                              </View>
                          </View>
                          
                      </ScrollView>
                  </View>
                </TouchableOpacity>
            </Block>
        ))}
    </ScrollView>
  );
};

export default ViewAllScreen;
