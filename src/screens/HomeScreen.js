import React, {Component} from 'react';
import {View } from 'react-native';
import Header from '../components/Header';

class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
      </View>
    );
  }
}

export default HomeScreen;
