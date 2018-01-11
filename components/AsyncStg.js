import React, { Component } from 'react';
import { View, TouchableOpacity, AsyncStorage} from 'react-native';

export default class AsyncStg extends Component {

    save = async()=>{
        try {
            await AsyncStorage.setItem('@username:key', 'trung');
        } catch (error) {
            console.log(error);
        }
        
    }

    render() {
        return (
            <View style={styles.wapper}>
                <TouchableOpacity style={styles.button} onPress={()=>this.save()}>
                    <Text>Save Me!!!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Get Me!!!</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wapper: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        justifyContent: 'center'
    }
})