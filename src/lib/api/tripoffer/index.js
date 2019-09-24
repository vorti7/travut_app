import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'
import { useQuery, useMutation } from 'react-apollo-hooks'

import * as Queries from './queries'
import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetTripOffer = Queries.getTripOffer
const ListTripOffers = Queries.listTripOffers;
const ListTripOffersByRequestID =Queries.listTripOffersByRequestID
// const CreateTripOffer = gql(Mutations.createTripOffer);
// const DeleteTripOffer = gql(Mutations.deleteTripOffer);
const UpdateTripOffer = Mutations.updateTripOffer;
const OnCreateTripOffer = Subscriptions.onCreateTripOffer;
// const onDeleteTripOffer = gql(Subscriptions.onDeleteTripOffer);
// const onUpdateTripOffer = gql(Subscriptions.onUpdateTripOffer);

// export const getTripOffer = (ID, SORTKEY) =>{
//     return useQuery(Queries.getTripOffer, {
//         variables: {
//             gettripofferinput:{ ID: ID, SORTKEY: SORTKEY }
//         },
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const listTripOffers = () =>{
//     return useQuery(Queries.listTripOffers, {
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const listTripOffersByRequestID = (tripRequestID) =>{
//     return useQuery(Queries.listTripOffersByRequestID, {
//         variables: {
//             triprequestid: tripRequestID,
//         },
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const updateTripOffer = () =>{
    
// }

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

export const subscriptions = {
    onCreateTripOffer: () =>{
        let result = graphql(ListTripOffersByRequestID, {
            options: (props) => ({
                variables: { triprequestid: props.tripRequestID },
                fetchPolicy:'cache-and-network'
            }),
            props: props => ({
                tripOffers: props.data.listTripOffersByRequestID ? props.data.listTripOffersByRequestID.items : [],
                subscribeToNewTripOffers: params => {
                    props.data.subscribeToMore({
                        document: OnCreateTripOffer,
                        updateQuery: (prev, { subscriptionData: {data : { onCreateTripOffer }}}) => ({
                            ...prev,
                            listTripOffersByRequestID : { __typename: 'TripOfferConnection', items:[onCreateTripOffer, ...prev.listTripOffersByRequestID.items.filter(tripOffer => tripOffer.SORTKEY !== onCreateTripOffer.SORTKEY)]}
                        })
                    })
                }
            })
        })
        return result
    }
}