import React, {Component} from 'react';
import {Text, View, TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';

export default class AsyncStg extends Component {

    save = async() => {
        try {
            await AsyncStorage.setItem('@username:key', 'Nguyen Van Trung');
        } catch (error) {
            console.log(error);
        }

    }

    getme = async() => {
        try {
            var value = await AsyncStorage.getItem('@username:key');
            console.log("Get Data: " + value);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.wapper}>
                <TouchableOpacity style={styles.button} onPress={() => this.save()}>
                    <Text>Save Me!!!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.getme()}>
                    <Text>Get Me!!!</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    wapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        width: 200,
        height: 50,
        alignItems: 'center',
        borderColor: 'pink',
        borderWidth: 2
    }
})