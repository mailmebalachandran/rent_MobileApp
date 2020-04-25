import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#d6d0f2'}}>
        <View style={{flex: 0.3, marginTop: 10, marginLeft: 10, marginBottom: 10}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <FontAwesomeIcon icon={faBars} size={32} />
          </TouchableOpacity>
        </View>
        <View style={{flex:0.5}}>
          <Text></Text>
        </View>
        <View style={{flex: 0.1, alignContent:'flex-end', justifyContent: 'center'}}>
          <Image source={require('../assets/images/logo.png')} style={{height:40,width:40, marginLeft:20}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 40,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Header;
