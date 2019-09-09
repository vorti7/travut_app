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



import React, { PureComponent } from 'react'

import AWSAppSyncClient from 'aws-appsync'
import Amplify, { Auth } from 'aws-amplify'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
// import { ApolloProvider } from '@apollo/react-hooks'

import { Rehydrated } from 'aws-appsync-react'

import AppSyncConfig from './src/aws-exports'
import Navigation from './src/navigation'

Amplify.configure(AppSyncConfig)
console.disableYellowBox = true

const client = new AWSAppSyncClient({
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_project_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType,
    // apiKey: AppSyncConfig.apiKey
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  // cacheOptions: {
  //   dataIdFromObject: (obj) => `${obj.__typename}:${obj.myKey}`
  // }
  // offlineConfig: {
  //   callback: (err, succ) => {
  //     if(err) {
  //       const { mutation, variables } = err;

  //       console.warn(`ERROR for ${mutation}`, err);
  //     } else {
  //       const { mutation, variables } = succ;

  //       console.info(`SUCCESS for ${mutation}`, succ);
  //     }
  //   },
  // },
})

const WithProvider = (Component) => {
  return class extends PureComponent {
    render() {
      return (
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <Rehydrated>
              <Component {...this.props} />
            </Rehydrated>
          </ApolloHooksProvider>
        </ApolloProvider>
      )
    }
  }
}

Navigation.init(WithProvider)