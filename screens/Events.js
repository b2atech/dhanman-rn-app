import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { getEvents } from '../api/apiService';
import { format } from 'date-fns';
import commonStyles from '../style/CommonStyles';

const EventsScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const events = await getEvents('12fb50f0-9998-456f-8aee-bb83ab2fbbdb','1');
            setData(events);
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };
    
        fetchData();
    }, []);
console.log('data',data)
const formatDate = (dateString) => {
  return format(new Date(dateString), 'dd-MMM-yyyy');
};
const formatTime = (dateString) => {
  return format(new Date(dateString), 'hh:mm a');
};
const getDayOfWeek = (dateString) => {
  return format(new Date(dateString), 'eee');
};
  return (
    <View >
      {data.map((event) => (
        <ScrollView horizontal style={styles.card} key={event.id}>
            <View style={styles.dateContainer}>
              <Text style={[commonStyles.headerText, styles.day]}>{getDayOfWeek(event.reservationDate)}</Text>
              <Text style={[commonStyles.descriptionText, styles.day]}>{formatDate(event.reservationDate)}</Text>
            </View>
            <View style={styles.scheduleContainer}>
              <Text style={commonStyles.descriptionText}>{formatTime(event.start)}</Text>
              <Text style={commonStyles.descriptionText}>{formatTime(event.end)}</Text>
              <Text style={commonStyles.headerText}>{event.title}</Text>
              <Text style={commonStyles.descriptionText}>{event.description}</Text>
            </View>
        </ScrollView>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 20
  },
  headerContainer: {
    alignItems: 'left',
    backgroundColor: '#ffff',
    padding: 15,
  },
  dateContainer: {
    alignItems: 'center',
    backgroundColor: '#f8ac59',
    borderRadius: 10,
    width: '20%',
  },
  day: {
    color: '#FFFF',
    marginVertical: '5%'
  },
  scheduleContainer: {
    flex: 1,
    marginHorizontal: '2%',
    width: 500
  },
});

export default EventsScreen;
