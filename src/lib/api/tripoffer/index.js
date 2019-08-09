import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetTripOffer = gql(Queries.getTripOffer)
const ListTripOffers = gql(Queries.listTripOffers);
const ListTripOffersByRequestID =gql(Queries.listTripOffersByRequestID)
// const CreateTripOffer = gql(Mutations.createTripOffer);
// const DeleteTripOffer = gql(Mutations.deleteTripOffer);
const UpdateTripOffer = gql(Mutations.updateTripOffer);
// const onCreateTripOffer = gql(Subscriptions.onCreateTripOffer);
// const onDeleteTripOffer = gql(Subscriptions.onDeleteTripOffer);
// const onUpdateTripOffer = gql(Subscriptions.onUpdateTripOffer);

export const queries = {
    getTripOffer: () => {
        let result = graphql(GetTripOffer, {
            options: (props) => ({
              variables: {gettripofferinput:{ ID: props.tripOfferID, SORTKEY: props.tripOfferSORTKEY }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              tripOffer: props.data.getTripOffer ? props.data.getTripOffer :[],
              data:props.data
            })
          }) 
          return result;
    },
    listTripOffers: () => {
        let result = graphql(ListTripOffers, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                tripOffers: props.data.listTripOffers ? props.data.listTripOffers.items : []
            })
        })
        return result;
    },
    listTripOffersByRequestID: () => {
        let result = graphql(ListTripOffersByRequestID, {
            options: (props) => ({
                variables: { triprequestid: props.tripRequestID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                tripOffers: props.data.listTripOffersByRequestID ? props.data.listTripOffersByRequestID.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    // createTripOffer: () => {
    //     return graphqlMutation( CreateTripOffer, ListTripOffers, 'TripOffer' )
    // },
    updateTripOffer: () => {
        return graphqlMutation( UpdateTripOffer, '', 'TripOffer' )
    }
}