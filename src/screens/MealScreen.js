import React from "react";
import axios from "axios";
import { ActivityIndicator, Card, Text, Title } from "react-native-paper";
import { View } from "react-native";
import LoadingComponent from "../components/LoadingComponent";

class MealScreen extends React.Component {
  state = {
    item: null,
  };

  componentDidMount() {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.route.params.id}`).then(({ data }) => {
      this.setState({ item: data.meals[0] });
      this.props.navigation.setOptions({
        title: data.meals[0].strMeal,
      });
    });
  }

  render() {
    const {item} = this.state;

    if (!item) {
      return <LoadingComponent />;
    }

    return (
      <>
        <Text>{item.strMeal}</Text>
      </>
    );
  }
}

export default MealScreen;
