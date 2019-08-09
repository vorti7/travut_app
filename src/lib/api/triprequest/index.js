import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const ListTripRequests = gql(Queries.listTripRequests);
const ListTripRequestsByTravelerID = gql(Queries.listTripRequestsByTravelerID)
const CreateTripRequest = gql(Mutations.createTripRequest);
// const DeleteTripRequest = gql(Mutations.deleteTripRequest);
// const UpdateTripRequest = gql(Mutations.updateTripRequest);
const onCreateTripRequest = gql(Subscriptions.onCreateTripRequest);
// const onDeleteTripRequest = gql(Subscriptions.onDeleteTripRequest);
// const onUpdateTripRequest = gql(Subscriptions.onUpdateTripRequest);

export const queries = {
    listTripRequests: () => {
        let result = graphql(ListTripRequests, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                tripRequests: props.data.listTripRequests ? props.data.listTripRequests.items : []
            })
        })
        return result;
    },
    listTripRequestsByTravelerID: () => {
        let result = graphql(ListTripRequestsByTravelerID, {
            options: (props) => ({
                variables: { travelerid: props.travelerID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                tripRequests: props.data.listTripRequestsByTravelerID ? props.data.listTripRequestsByTravelerID.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    createTripRequest: () => {
        return graphqlMutation( CreateTripRequest, ListTripRequests, 'TripRequest' )
    }
}

export const subscriptions = {
    onCreateTripRequest: () => {
        return buildSubscription( onCreateTripRequest, ListTripRequests )
    }
}