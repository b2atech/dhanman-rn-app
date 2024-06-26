// src/common/UnitSelection.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'galio-framework';
import { getBuildingNames } from '../../api/building';
import { getFloorName } from '../../api/floor';
import { getUnitNames } from '../../api/unit';

const UnitSelection = ({ onSelectionComplete }) => {
  const [stage, setStage] = useState('building');
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const buildings = await getBuildingNames('12fb50f0-9998-456f-8aee-bb83ab2fbbdb');
        setData(buildings);
      } catch (error) {
        console.error('Error fetching building data', error);
      }
    };

    fetchBuildings();
  }, []);

  const handleBuildingSelect = async (buildingId) => {
    setSelectedBuilding(buildingId);
    try {
      const floors = await getFloorName('12fb50f0-9998-456f-8aee-bb83ab2fbbdb', buildingId);
      setData(floors);
      setStage('floor');
    } catch (error) {
      console.error('Error fetching floor data', error);
    }
  };

  const handleFloorSelect = async (floorId) => {
    setSelectedFloor(floorId);
    try {
      const units = await getUnitNames('12fb50f0-9998-456f-8aee-bb83ab2fbbdb', selectedBuilding, floorId);
      setData(units);
      setStage('unit');
    } catch (error) {
      console.error('Error fetching unit data', error);
    }
  };

  const handleUnitSelect = (unitId) => {
    setSelectedUnit(unitId);
    onSelectionComplete(selectedBuilding, selectedFloor, unitId);
  };

  const renderOptions = (options, onSelect, iconName) => {
    const rows = [];
    for (let i = 0; i < options.length; i += 4) {
      const row = options.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.row}>
          {row.map((option) => (
            <TouchableOpacity key={option.id} style={styles.option} onPress={() => onSelect(option.id)}>
              <Icon name={iconName} family='material' size={30} />
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stage === 'building' && (
        <View style={styles.screen}>
          <Text style={styles.header}>Select Building</Text>
          {renderOptions(data, handleBuildingSelect, 'apartment')}
        </View>
      )}
      {stage === 'floor' && (
        <View style={styles.screen}>
          <Text style={styles.header}>Select Floor in {selectedBuilding}</Text>
          {renderOptions(data, handleFloorSelect, 'layers')}
        </View>
      )}
      {stage === 'unit' && (
        <View style={styles.screen}>
          <Text style={styles.header}>Select Unit in {selectedBuilding} - Floor {selectedFloor}</Text>
          {renderOptions(data, handleUnitSelect, 'home')}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  screen: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  option: {
    width: '30%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
});

export default UnitSelection;
