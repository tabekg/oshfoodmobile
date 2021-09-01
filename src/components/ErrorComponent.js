import React from 'react';
import { Button, Text } from "react-native-paper";
import { View } from "react-native";

class ErrorComponent extends React.Component {
  render() {
    return (
      <View flex={1} justifyContent={'center'} alignitems={'center'}>
        <Text style={{color: 'red', textAlign: 'center', fontSize: 30}}>{this.props.title || `Ошибка!`}</Text>
        {this.props.retry && <Button onPress={() => this.props.retry()}>Retry</Button>}
      </View>
    );
  }
}

export default ErrorComponent;
