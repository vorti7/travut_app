// import { Navigation } from "react-native-navigation";
// import App from "./App";

// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "navigation.playground.WelcomeScreen"
//       }
//     }
//   });
// });



import React from 'react'

import AWSAppSyncClient from 'aws-appsync'
import Amplify, { Auth } from 'aws-amplify'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

import AppSyncConfig from './src/aws-exports'
import Navigation from './src/navigation'

Amplify.configure(AppSyncConfig)

const client = new AWSAppSyncClient({
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_project_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  // cacheOptions: {
  //   dataIdFromObject: (obj) => `${obj.__typename}:${obj.myKey}`
  // }
})

const WithProvider = (Component) => {
  return class extends React.Component {
    static options = Component.options
    render() {
      return (
        <ApolloProvider client={client}>
          <Rehydrated>
            <Component {...this.props} />
          </Rehydrated>
        </ApolloProvider>
      )
    }
  }
}

Navigation.init(WithProvider)