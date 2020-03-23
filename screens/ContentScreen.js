import React from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Content from '../components/Content';

export default class ContentScreen extends React.Component {
    static navigationOptions = {
        tittle: 'ContentScreen'
    };
    constructor(props) {
        super(props);
        this.state = {
            content: [],
        };
    }
    componentDidMount = () => {
        const ContentID = this.props.route.params.ContentID;
        fetch("https://my-json-server.typicode.com/12320390123/DB_Demo/Content?ContentID="+ ContentID, {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              content: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
    render() {
        return (
            <ScrollView>
                <FlatList
                data = {this.state.content}
                renderItem = {({item}) => 
                <Content content = {item}/>
                }
                keyExtractor = {item => {item.ContentID}}
                />                
            </ScrollView>
        )
    }
}

