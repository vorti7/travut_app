import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const ListTravelers = gql(Queries.listTravelers);
const CreateTraveler = gql(Mutations.createTraveler);
// const DeleteTraveler = gql(Mutations.deleteTraveler);
// const UpdateTraveler = gql(Mutations.updateTraveler);
// const onCreateTraveler = gql(Subscriptions.onCreateTraveler);
// const onDeleteTraveler = gql(Subscriptions.onDeleteTraveler);
// const onUpdateTraveler = gql(Subscriptions.onUpdateTraveler);

export const queries = {
    listTravelers: () => {
        let result = graphql(ListTravelers, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                travelers: props.data.listTravelers ? props.data.listTravelers.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    createTraveler: () => {
        return graphqlMutation( CreateTraveler, ListTravelers, 'Traveler' )
    }
}