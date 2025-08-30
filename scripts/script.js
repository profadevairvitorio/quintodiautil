import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: '#e63946' }]} />
            <View style={[styles.box, { backgroundColor: '#f1faee' }]} />
            <View style={[styles.box, { backgroundColor: '#a8dadc' }]} />
            <View style={[styles.box, { backgroundColor: '#457b9d' }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d3557',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 80,
        height: 80,
        margin: 5,
    },
});