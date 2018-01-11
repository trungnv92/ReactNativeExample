import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';

export default class Layout extends Component {
    render() {
        return (
            <View style={styles.wapper}>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        backgroundColor: 'yellow',
        flex: 1
    },
    ovuong: {
        backgroundColor: 'gray',
        flex: 1,
        borderColor: 'black',
    }
});