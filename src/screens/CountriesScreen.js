import React from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { List } from "react-native-paper";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

class CountriesScreen extends React.Component {
  state = {
    items: [],
    status: 'loading',
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({status: 'loading'});
    setTimeout(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(({ data }) => {
        this.setState({ items: data.meals });
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
      return <ErrorComponent />;
    }

    return (
      <>
        <FlatList
          style={{margin: 9}}
          data={this.state.items}
          renderItem={({ item }) => (
            <>
              <List.Item
                onPress={() => this.props.navigation.navigate('MealsScreen', {name: item.strArea, type: 'country'})}
                title={item.strArea}
              />
            </>
          )}
        />
      </>
    );
  }
}

export default CountriesScreen;
