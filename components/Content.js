import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export default class Content extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <View>
                <Text style = {styles.content}>{content.Content}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        
        fontSize: 50,
    }
})