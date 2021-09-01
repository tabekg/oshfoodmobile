import React from 'react';
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

class LoadingComponent extends React.Component {
  render() {
    return (
      <View flex={1} justifyContent={'center'} alignitems={'center'}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default LoadingComponent;
