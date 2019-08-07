import { Navigation } from "react-native-navigation"
import * as Const from './const'
import AuthClass from '../lib/auth'

// cmpId -> this.props.componentId
export default {
  initScreen() {
    Navigation.setRoot({
      root: {
        sideMenu: {
          // left: {
          //   component: {
          //     name: 'travut.sideMenuComponent'
          //   }
          // },
          center: {
            stack: {
              id: 'AppStack',
              children: [
                {
                  component: {
                    name: Const.SCREEN_START_INTRO
                  }
                }
              ]
            }
          }
        }
      }
    });
  
    // Navigation default setting
    Navigation.setDefaultOptions({
      topBar: { // disable topbar
        visible: false,
        drawBehind: true,
        animate: false,
      },
      animations: {
        // push: {
        //   enable: true,
        //   content: {
        //     scaleX :{
        //       from: 0,
        //       to: 1,
        //       duration: 500,
        //       startDelay: 0,
        //       interpolation: 'accelerate'
        //     },
        //     scaleY :{
        //       from: 0,
        //       to: 1,
        //       duration: 500,
        //       startDelay: 0,
        //       interpolation: 'accelerate'
        //     },
        //     alpha: {
        //       from: 0,
        //       to: 1,
        //       duration: 400,
        //       startDelay: 100,
        //       interpolation: 'accelerate'
        //     }
        //   }
        // },
        setRoot:{
        }
      }
    })
  },
  
  checkLoginChangePage(cmpId, yesSession, noSession){
      console.log('checkLoginChangePage called')
      AuthClass.checkLogin().then(success => {
          console.log('session found ', cmpId)
          AuthClass.getTravelerInfo().then(userInfo => {
            console.log(userInfo)
            passProps={
              userID: userInfo.username,
              userSORTKEY: "traveler_"+userInfo.attributes['custom:regDate2'],
              userNickName: userInfo.attributes.name
            }
            // console.log(passProps)
            this.setRootScreen(cmpId, yesSession, passProps)
          })

      })
      .catch(err => {
          console.log('no session found ', cmpId)
          passProps={

          }
          this.setRootScreen(cmpId, noSession, passProps)
      })
  },

  pushScreen(cmpId, targetScreen, passProps){
      Navigation.push(cmpId, {
          component: {
            name: targetScreen,
            passProps: passProps
          },
      });
  },

  pushScreenWithAnim(cmpId, targetScreen){
      Navigation.push(cmpId, {
          component: {
            name: targetScreen,
            options: {
              customTransition: {
                animations: [
                  { type: 'sharedElement', fromId: 'image1', toId: 'image2', startDelay: 0, springVelocity: 0.2, duration: 0.5 }
                ],
                duration: 0.8
              }
            }
          }
      });
  },

  pushScreenWithAnim(cmpId, targetScreen, options){
      Navigation.push(cmpId, {
          component: {
            name: targetScreen,
            options: options
          }
      });
  },

  
  setRootScreen(cmpId, targetScreen, passProps){
    Navigation.setStackRoot(cmpId, [
      {
          component: {
            name: targetScreen,
            passProps: passProps
          }
      }
    ]);
  },
  
  setRootTabScreen(){
    Navigation.setRoot({
      root:{
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              stack:{
                children:[
                  {
                    component: {
                      name: "travut.tab01Component"
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    title: "Tab 1"
                  }
                }
              }
              
            },
            {
              stack:{
                children:[
                  {
                    component: {
                      name: "travut.tab02Component"
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    title: "Tab 2"
                  }
                }
              }
              
            },
          ]
        }
      }
    })

    // Navigation.setStackRoot(cmpId, {
      // bottomTabs: {
      //   children: [
      //     {
      //       component: {
      //         name: "travut.tab01Component",
      //         options: {
      //           topTab: {
      //             title: "Tab 1"
      //           }
      //         }
      //       }
      //     },
      //     {
      //       component: {
      //         name: "travut.tab02Component",
      //         options: {
      //           topTab: {
      //             title: "Tab 2"
      //           }
      //         }
      //       }
      //     },
      //   ]
      // }
    // });
  },
  
  popScreen(cmpId){
    Navigation.pop(cmpId);
  },
  
  popToRootScreen(cmpId){
    Navigation.popToRoot(cmpId);
  },
  
  popToScreen(targetScreen){
    Navigation.popTo(targetScreen);
  },
  
  showModal(targetScreen){
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: targetScreen,
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                }
              }
            }
          }
        }]
      }
    });
  },
  
  dismissModal(cmpId){
    console.log('Dismiss a Modal')
    Navigation.dismissModal(cmpId);
  },
  
  dismissAllModal(){
    console.log('Dismiss All Modal')
    Navigation.dismissAllModals();
  },

  showOverlay(targetId, targetScreen){
    Navigation.showOverlay({
      component: {
        id : targetId,
        name: targetScreen,
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  },

  dismissOverlay(targetId){
    Navigation.dismissOverlay(targetId);
  }
}