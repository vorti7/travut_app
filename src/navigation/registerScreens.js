import { Navigation } from 'react-native-navigation';

import * as Const from './const';
import * as Screens from '../screens';

export default function registerScreens(WithProvider) {
  Navigation.registerComponent(Const.SCREEN_START_INTRO, () =>  WithProvider(Screens.IntroScreen));
  Navigation.registerComponent(Const.SCREEN_USER_LOGIN, () => WithProvider(Screens.LoginScreen));
  Navigation.registerComponent(Const.SCREEN_USER_SIGNUP, () => WithProvider(Screens.SignupScreen));
  Navigation.registerComponent(Const.SCREEN_INDEX_HOME, () => WithProvider(Screens.MainScreen));

  Navigation.registerComponent(Const.SCREEN_USER_EMAILLOGIN, () => WithProvider(Screens.LoginoverlayScreen))

  Navigation.registerComponent(Const.SCREEN_LOCATION_SEARCH, () => WithProvider(Screens.LocationsearchScreen))
  Navigation.registerComponent(Const.SCREEN_LOCATION_INFO, () => WithProvider(Screens.LocationinfoScreen))
  Navigation.registerComponent(Const.SCREEN_LOCATION_PROVIDER_LIST, () => WithProvider(Screens.ProviderlistScreen))
  Navigation.registerComponent(Const.SCREEN_LOCATION_PROVIDER_INFO, () => WithProvider(Screens.ProviderinfoScreen))

  Navigation.registerComponent(Const.SCREEN_MAKETRIP_INTRO, () => WithProvider(Screens.MaketripScreen))

  Navigation.registerComponent(Const.SCREEN_MYTRIP_LIST, () => WithProvider(Screens.MytriplistScreen))

  Navigation.registerComponent(Const.SCREEN_TRIPOFFER_INFO, () => WithProvider(Screens.TripofferInfoScreen))

  Navigation.registerComponent(Const.SCREEN_CHAT, () => WithProvider(Screens.ChatScreen))

  Navigation.registerComponent(Const.SCREEN_COMMON_LOADING, () => WithProvider(Screens.loadingScreen));
  
  Navigation.registerComponent(Const.SCREEN_COMMON_OVERLAY, () => WithProvider(Screens.overlayScreen))

  Navigation.registerComponent(Const.SCREEN_TEST, () => WithProvider(Screens.TestScreen))
}