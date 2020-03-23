import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SettingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}>Updating</Text>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    text:  {
        fontSize: 50,
    }
})