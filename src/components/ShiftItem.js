import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const ShiftItem = ({ shift, onCancelPress, disabled }) => {
  return (
    <View style={styles.shiftContainer}>
      <Text style={styles.timeText}>{shift.time}</Text>
      <Text style={styles.locationText}>{shift.location}</Text>
      <TouchableOpacity
        onPress={onCancelPress}
        disabled={disabled}
        style={[styles.cancelButton, disabled && styles.disabledButton]}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // styles here
});

export default ShiftItem;
