import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import MealsScreen from "../screens/MealsScreen";
import MealScreen from "../screens/MealScreen";

const Stack = createNativeStackNavigator();

class HomeStack extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={'HomeScreen'} options={{title: 'Osh food'}} component={HomeScreen} />
          <Stack.Screen name={'MealsScreen'} options={{title: 'Подожите...'}} component={MealsScreen} />
          <Stack.Screen name={'MealScreen'} options={{title: 'Подожите...'}} component={MealScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default HomeStack;
