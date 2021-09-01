import React from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { Card, Title, } from "react-native-paper";

class MealsScreen extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.name,
    });
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${this.props.route.params.type === 'category' ? 'c' : 'a'}=${this.props.route.params.name}`).then(({ data }) => {
      this.setState({ items: data.meals });
    });
  }

  render() {
    return (
      <>
        <FlatList
          style={{margin: 9}}
          data={this.state.items}
          renderItem={({ item }) => (
            <>
              <Card onPress={() => this.props.navigation.navigate('MealScreen', {id: item.idMeal})} style={{marginBottom: 8}}>
                <Card.Cover source={{ uri: item.strMealThumb }} />
                <Card.Content>
                  <Title style={{textAlign: 'center', marginTop: 8}}>{item.strMeal}</Title>
                </Card.Content>
              </Card>
            </>
          )}
        />
      </>
    );
  }
}

export default MealsScreen;
