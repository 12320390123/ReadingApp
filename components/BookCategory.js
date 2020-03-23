import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default class BookCategory extends React.Component {
    
    render() {

        const {category, onPress} = this.props;
        return (
            <View>
            <TouchableOpacity onPress = {onPress}>
                <View style = {styles.container}>
                    <Text style = {styles.title}>{category.CategoryName}</Text>
                    <Image style = {styles.cover} source = {{uri: category.images[0].url}}/>
                </View>
            </TouchableOpacity>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'stretch',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',

        height: 150,

        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cover: {
        height: 100,
        width: 100,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });