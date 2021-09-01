import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App";
import {Provider as PaperProvider} from 'react-native-paper';

class Root extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <App/>
        </PaperProvider>
      </NavigationContainer>
    );
  }
}

export default Root;
