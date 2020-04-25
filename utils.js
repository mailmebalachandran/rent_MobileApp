import config from './config';
import Axios from 'axios';
import {AsyncStorage} from 'react-native';

export const authenticateWithRefreshToken = async userAuth => {
  await Axios.post(
    config.AUTH_SERVICE + 'authenticateWithrefreshtoken',
    userAuth,
  )
    .then(res => {
      AsyncStorage.setItem('userAuth', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const decodeToken = async userAuth => {
  let userAuth1 = await AsyncStorage.getItem('userAuth');
  await Axios.post(config.AUTH_SERVICE + 'decodeToken', userAuth)
    .then(res => {
      if (res.data.status === 403) {
        userAuth = {
          refresh_token: JSON.parse(userAuth1).refresh_token,
        };
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const isAuthorized = async () => {
  let userAuth = {
    access_token: JSON.parse(await AsyncStorage.getItem('userAuth'))
      .access_token,
  };
  let isAuthorised = decodeToken(userAuth);
  if (!isAuthorised) {
    userAuth = {
      refresh_token: JSON.parse(await AsyncStorage.getItem('userAuth'))
        .refresh_token,
    };
    await authenticateWithRefreshToken(userAuth);
    userAuth = {
      access_token: JSON.parse(await AsyncStorage.getItem('userAuth'))
        .access_token,
    };
    await decodeToken(userAuth);
  }
  userAuth = {
    access_token: JSON.parse(await AsyncStorage.getItem('userAuth'))
      .access_token,
  };
  Axios.defaults.headers.common['Authorization'] =
    'bearer ' + userAuth.access_token;
  return true;
};
