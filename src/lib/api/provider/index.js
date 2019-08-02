import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
// import * as Mutations from './mutations'

const ListProviders = gql(Queries.listProviders);
const ListProvidersByLocationID = gql(Queries.listProvidersByLocationID)
// const CreateProvider = gql(Mutations.createProvider);
// const DeleteProvider = gql(Mutations.deleteProvider);
// const UpdateProvider = gql(Mutations.updateProvider);
// const onCreateProvider = gql(Subscriptions.onCreateProvider);
// const onDeleteProvider = gql(Subscriptions.onDeleteProvider);
// const onUpdateProvider = gql(Subscriptions.onUpdateProvider);

export const queries = {
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
            options: {
                fetchPolicy: 'cache-and-network'
            },
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