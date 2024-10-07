// AvailableShifts.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AvailableShiftsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Available Shifts...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.white
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:colors.blue
    },
});

export default AvailableShiftsScreen;
