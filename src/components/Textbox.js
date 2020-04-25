import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

class Textbox extends React.Component {
  render() {
    return (
      <TextInput
        secureTextEntry={this.props.secureText}
        style={this.props.textStyle}
        value={this.props.textValue}
        placeholder={this.props.placeHolderValue}
        onChangeText={this.props.onChangedTextHandler}
        keyboardType={this.props.keyBoardTypeValue}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

export default Textbox;
