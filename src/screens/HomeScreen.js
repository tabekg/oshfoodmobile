import React from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { Card, Text, Title } from "react-native-paper";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

class HomeScreen extends React.Component {
  state = {
    categories: [],
    status: 'loading',
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({status: 'loading'});
    setTimeout(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(({ data }) => {
        this.setState({ categories: data.categories });
        this.setState({status: 'success'});
      }).catch((e) => {
        this.setState({status: 'error'});
      });
    }, 1000);
  };

  render() {
    if (this.state.status === 'loading') {
      return <LoadingComponent />;
    }

    if (this.state.status === 'error') {
      return <ErrorComponent retry={() => this.fetch()} />;
    }

    return (
      <>
        <FlatList
          style={{margin: 9}}
          data={this.state.categories}
          renderItem={({ item }) => (
            <>
              <Card onPress={() => this.props.navigation.navigate('MealsScreen', {name: item.strCategory, type: 'category'})} style={{marginBottom: 8}}>
                <Card.Cover source={{ uri: item.strCategoryThumb }} />
                <Card.Content>
                  <Title style={{textAlign: 'center', marginTop: 8}}>{item.strCategory}</Title>
                </Card.Content>
              </Card>
            </>
          )}
        />
      </>
    );
  }
}

export default HomeScreen;
