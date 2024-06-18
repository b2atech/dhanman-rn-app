import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import HelpersList from './HelpersList';
import Visitors from './gateUpdatesComponents/GateVisitors';
import Delivery from './gateUpdatesComponents/GateDelivery';

const ViewAllScreen = () => {
  const [activeTab, setActiveTab] = useState('Helpers');

  const renderContent = () => {
    switch (activeTab) {
      case 'Visitors':
        return <Visitors />;
      case 'Helpers':
        return <HelpersList />;
        case 'Delivery':
        return <Delivery />;
      default:
        return <Visitors />;
    }
  };

  return (
    <Block safe flex>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gate Updates</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Visitors')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'Visitors' && styles.activeTabText]}>Visitors</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Parcels')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'Parcels' && styles.activeTabText]}>Parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Helpers')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'Helpers' && styles.activeTabText]}>Helpers</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: '#FF5722',
    borderBottomWidth: 2,
    borderBottomColor: '#FF5722',
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default ViewAllScreen;
