import React from 'react';
import BookCategory from '../components/BookCategory';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default class CategoriesScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props);
        this.state = {
            BookCategories: [],
        };
    }
    componentDidMount = () => {
        fetch('https://my-json-server.typicode.com/12320390123/DB_Demo/BookCategory', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              BookCategories: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
    }
    render() {
        const {navigation} = this.props;
        return (
            <ScrollView>
            <FlatList
            data = {this.state.BookCategories}
            renderItem = {({item}) => 
                <BookCategory category = {item}
                            onPress = {() => navigation.navigate('BookScreen', {
                                name: item.CategoryName,
                                id: item.CategoryID
                            })}
                />
            }
            keyExtractor = {item => {item.CategoryID}}
            />                
            </ScrollView>
        )
    }
}

