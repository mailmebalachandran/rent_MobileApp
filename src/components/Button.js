import React from 'react';
import { Button, StyleSheet } from 'react-native';

class Submit extends React.Component{
    render(){
        return (
            <Button title={this.props.titleValue} onPress={this.props.onPressHandler} style={this.props.styleValue} />
        );
    }
}

export default Submit;