import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid, AsyncStorage, Image} from 'react-native';
import Textbox from '../components/Textbox';
import Label from '../components/Label';
import Button from '../components/Button';
import Axios from 'axios';
import config from '../../config';
import {color} from 'react-native-reanimated';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
    };
  }

  loginHandler = async () => {
    const userDetails = {
      UserName: this.state.UserName,
      Password: this.state.Password,
    };
    await Axios.post(config.USER_SERVICE + 'authenticateUser', userDetails)
      .then(res => {
        AsyncStorage.setItem('userAuth', JSON.stringify(res.data));
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        if (err.response !== undefined && err.response.status === 400)
          ToastAndroid.showWithGravityAndOffset(
            err.response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        //else
        // this.props.history.push('/Error');
      });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={require('../assets/images/logo.png')} style={{height:100,width:100, alignSelf:'center'}} />
        <Label textValue="User Name" />
        <Textbox
          secureText={false}
          textStyle={{
            height: 40,
            backgroundColor: '#ebe9f5',
            marginBottom: 10,
          }}
          textValue={this.state.UserName}
          placeHolderValue="User Name"
          onChangedTextHandler={text => {
            this.setState({UserName: text});
          }}
        />
        <Label textValue="Password" />
        <Textbox
          secureText={true}
          textStyle={{
            height: 40,
            backgroundColor: '#ebe9f5',
            marginBottom: 10,
          }}
          textValue={this.state.Password}
          placeHolderValue="Password"
          onChangedTextHandler={text => {
            this.setState({Password: text});
          }}
        />
        <Button titleValue="Login" onPressHandler={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    justifyContent:'center'
  },
});

export default LoginComponent;
