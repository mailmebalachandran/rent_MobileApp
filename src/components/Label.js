import React from 'react';
import { Text, StyleSheet } from 'react-native';

class Label extends React.Component{
    render(){
        return(
        <Text style={this.props.styleValue}>{this.props.textValue}</Text>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle:{
        height: 30
    }
});

export default Label;