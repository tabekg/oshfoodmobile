import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./stacks/HomeStack";
import CountryStack from "./stacks/CountryStack";

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen component={HomeStack} options={{headerShown: false}} name={'HomeStack'} />
          <Tab.Screen component={CountryStack} options={{headerShown: false}} name={'CountryStack'} />
        </Tab.Navigator>
      </>
    );
  }
}

export default App;
