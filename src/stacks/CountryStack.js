import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from "../screens/MealsScreen";
import MealScreen from "../screens/MealScreen";
import CountriesScreen from "../screens/CountriesScreen";

const Stack = createNativeStackNavigator();

class CountryStack extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={'CountriesScreen'} options={{title: 'Countries'}} component={CountriesScreen} />
          <Stack.Screen name={'MealsScreen'} options={{title: 'Подожите...'}} component={MealsScreen} />
          <Stack.Screen name={'MealScreen'} options={{title: 'Подожите...'}} component={MealScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default CountryStack;
