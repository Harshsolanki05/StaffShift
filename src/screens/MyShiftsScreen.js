// src/screens/MyShiftsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ShiftItem from '../components/ShiftItem';
import { getShifts } from '../services/shiftService';
import colors from '../constants/colors';

const MyShiftsScreen = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    getShifts().then((data) => setShifts(data));
  }, []);

  const renderShift = ({ item }) => (
    <ShiftItem
      shift={item}
      onCancelPress={() => console.log(`Cancel pressed for shift ${item.id}`)}
      disabled={item.started}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={shifts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderShift}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyShiftsScreen;
