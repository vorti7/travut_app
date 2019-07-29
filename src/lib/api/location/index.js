import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const ListLocations = gql(Queries.listLocations);
const CreateLocation = gql(Mutations.createLocation);
// const DeleteLocation = gql(Mutations.deleteLocation);
// const UpdateLocation = gql(Mutations.updateLocation);
// const onCreateLocation = gql(Subscriptions.onCreateLocation);
// const onDeleteLocation = gql(Subscriptions.onDeleteLocation);
// const onUpdateLocation = gql(Subscriptions.onUpdateLocation);

export const queries = {
    listLocations: () => {
        let result = graphql(ListLocations, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                locations: props.data.listLocations ? props.data.listLocations.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    createLocation: () => {
        return graphqlMutation( CreateLocation, ListLocations, 'Location' )
    }
}