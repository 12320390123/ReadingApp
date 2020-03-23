import React from 'react';
import Book from '../components/Book';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

console.disableYellowBox = true;
export default class BookScreen extends React.Component {
    static navigationOptions = {
        title : 'BookScreen'
    };
    constructor(props) {
        super(props);
        this.state = {
            Books: [],
        };
    }
    componentDidMount = () => {
        const id = this.props.route.params.id;
        fetch("https://my-json-server.typicode.com/12320390123/DB_Demo/Book?CategoryID=" + id, {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              Books: responseJson
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
            data = {this.state.Books}
            renderItem = {({item}) => 
                <Book book = {item}
                            onPress = {() => navigation.navigate('ContentScreen', {
                                BookName: item.BookName,
                                ContentID: item.ContentID
                            })}
                />
            }
            keyExtractor = {item => {item.BookID}}
            />                
            </ScrollView>
        )
    }
}

