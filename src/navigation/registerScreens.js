import { Navigation } from 'react-native-navigation';

import * as Const from './const';
import * as Screens from '../screens';

export default function registerScreens(WithProvider) {
  Navigation.registerComponent(Const.SCREEN_START_INTRO, () =>  WithProvider(Screens.IntroScreen));
  Navigation.registerComponent(Const.SCREEN_USER_LOGIN, () => WithProvider(Screens.LoginScreen));
  Navigation.registerComponent(Const.SCREEN_USER_SIGNUP, () => WithProvider(Screens.SignupScreen));
  Navigation.registerComponent(Const.SCREEN_INDEX_HOME, () => WithProvider(Screens.MainScreen));
  Navigation.registerComponent(Const.SCREEN_COMMON_LOADING, () => WithProvider(Screens.loadingScreen));
}