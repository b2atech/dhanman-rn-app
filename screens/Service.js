import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { Block } from 'galio-framework';

const { width } = Dimensions.get('screen');
import Services from './Services';
import commonStyles from '../style/CommonStyles';

export default class Service extends React.Component {
    renderProducts = () => {
        return (
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={commonStyles.home}>
            <Block flex style={styles.titleBlock}>
              <Text style={styles.title}>Trending Services</Text>
            </Block>
            <Block flex style={styles.container}>
              <Services name='Appliance Repair' imageSource={require('../assets/images/washing.jpg')}/>
              <Services name='Cabs' imageSource={require('../assets/images/taxi.jpg')}/>
              <Services name='Health Hubs' imageSource={require('../assets/images/health.jpg')}/>
              </Block>
            <Block flex style={styles.titleBlock}>
              <Text style={styles.title}>Services by Urban Company</Text>
            </Block>
            <Block flex style={styles.container}>
              <Services name='Pest Control' imageSource={require('../assets/images/pest.jpg')}/>
              <Services name='Carpenters' imageSource={require('../assets/images/carpenter.jpg')}/>
              <Services name='Plumbers' imageSource={require('../assets/images/tap.jpg')}/>
              <Services name='Electricians' imageSource={require('../assets/images/electric.jpg')}/>
              <Services name='Salon' imageSource={require('../assets/images/salon.jpg')}/>
              <Services name='Painting' imageSource={require('../assets/images/paint.jpg')}/>
            </Block>
          </ScrollView>
        )
      }
    
      render() {
        return (
          <Block flex center style={commonStyles.mainPage}>
            {this.renderProducts()}
          </Block>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#ffff',
      marginBottom: 10,
      marginHorizontal: 10,
      justifyContent: 'center',
      borderRadius: 10
    },
    titleBlock: {
        width: width,
        alignItems: 'left',
        marginBottom: 5,
        marginHorizontal: 10
      },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
});
