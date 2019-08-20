import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
// import * as Mutations from './mutations'

const GetProvider = gql(Queries.getProvider)
const GetProviderByScan = gql(Queries.getProviderByScan)
const ListProviders = gql(Queries.listProviders);
const ListProvidersByLocationID = gql(Queries.listProvidersByLocationID)
// const CreateProvider = gql(Mutations.createProvider);
// const DeleteProvider = gql(Mutations.deleteProvider);
// const UpdateProvider = gql(Mutations.updateProvider);
// const onCreateProvider = gql(Subscriptions.onCreateProvider);
// const onDeleteProvider = gql(Subscriptions.onDeleteProvider);
// const onUpdateProvider = gql(Subscriptions.onUpdateProvider);

export const queries = {
    getProvider: () => {
        let result = graphql(GetProvider, {
            options: (props) => ({
              variables: {getproviderinput:{ ID: props.providerID, SORTKEY: props.providerSORTKEY }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              provider: props.data.getProvider ? props.data.getProvider :[]
            })
          }) 
          return result;
    },
    getProviderByScan: () => {
        let result = graphql(GetProviderByScan, {
            options: (props) => ({
              variables: {providerid: props.item.ID},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              provider: props.data.getProviderByScan ? props.data.getProviderByScan :[],
              data:props.data
            })
          }) 
          return result;
    },
    listProviders: () => {
        let result = graphql(ListProviders, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                providers: props.data.listProviders ? props.data.listProviders.items : []
            })
        })
        return result;
    },
    listProvidersByLocationID: () => {
        let result = graphql(ListProvidersByLocationID, {
            options: (props) => ({
                variables: { locationid: props.locationID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                providers: props.data.listProvidersByLocationID ? props.data.listProvidersByLocationID.items : []
            })
        })
        return result;
    }
}

// export const mutations = {
//     createProvider: () => {
//         return graphqlMutation( CreateProvider, ListProviders, 'Provider' )
//     }
// }