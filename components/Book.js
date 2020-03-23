import React from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

import { TouchableOpacity } from 'react-native';
export default class Book extends React.Component {
    render() {
        const {book, onPress} = this.props;
        return (                    
        <View style = {styles.container}>
            <View>
                {/* Books Cover */}
            <Image style = {styles.cover} source = {{uri: book.cover[0].url}}></Image> 
            </View>
            <View style = {styles.description}>
                <Text style = {styles.title}>{book.BookName}</Text>
                <Text style = {styles.author}>{book.AuthorID}</Text>
                <View>
                <TouchableOpacity style = {styles.readButton} onPress = {onPress}> 
                    <View>
                        <Text style = {styles.text}>READ</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        alignContent: 'stretch',
        paddingTop: 20,
        paddingBottom: 175,
        
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',

        height: 100,
        width: 340,
        marginLeft: 10,
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
        marginLeft: 10,
        width: 150,
        height: 150,
    },
    description: {
        paddingLeft: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    readButton: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 20,
        marginLeft: 20,

        elevation: 5,
        justifyContent: 'center',
        height: 50,
        width: 60,
        alignItems: 'center',
    },
    text: {
    }
})