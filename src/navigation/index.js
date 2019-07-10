import { Navigation } from 'react-native-navigation'

import registerScreens from './registerScreens'
import * as ScreenConst from './const'
import Navigator from './navigator'

export default {
  init( WithProvider ) {
    registerScreens(WithProvider);
    Navigation.events().registerAppLaunchedListener(() => Navigator.initScreen() );
  },
}

export {
  Navigator,
  ScreenConst
}