import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'
import { useQuery, useMutation } from 'react-apollo-hooks'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetServiceOffer = Queries.getServiceOffer
const ListServiceOffers = Queries.listServiceOffers;
const ListServiceOffersByTripOfferID =Queries.listServiceOffersByTripOfferID
// const CreateServiceOffer = gql(Mutations.createServiceOffer);
// const DeleteServiceOffer = gql(Mutations.deleteServiceOffer);
const UpdateServiceOffer = Mutations.updateServiceOffer;
// const onCreateServiceOffer = gql(Subscriptions.onCreateServiceOffer);
// const onDeleteServiceOffer = gql(Subscriptions.onDeleteServiceOffer);
// const onUpdateServiceOffer = gql(Subscriptions.onUpdateServiceOffer);

// export const getServiceOffer = ( ID, SORTKEY ) => {
//     return useQuery(Queries.getTripOffer, {
//         variables: {
//             getserviceofferinput:{ ID: ID, SORTKEY: SORTKEY }
//         },
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const listServiceOffers = () => {
//     return useQuery(Queries.listTripOffers, {
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const listServiceOffersByTripOfferID = ( tripOfferID ) => {
//     return useQuery(Queries.listTripOffersByRequestID, {
//         variables: {
//             tripofferid: tripOfferID,
//         },
//         fetchPolicy: 'cache-and-network'
//     })
// }

// export const updateServiceOffer = () => {
    
// }

export const queries = {
    getServiceOffer: () => {
        let result = graphql(GetServiceOffer, {
            options: (props) => ({
              variables: {getserviceofferinput:{ ID: props.serviceOfferID, SORTKEY: props.serviceOfferSORTKEY }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              serviceOffer: props.data.getServiceOffer ? props.data.getServiceOffer :[],
              data:props.data
            })
          }) 
          return result;
    },
    listServiceOffers: () => {
        let result = graphql(ListServiceOffers, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                serviceOffers: props.data.listServiceOffers ? props.data.listServiceOffers.items : []
            })
        })
        return result;
    },
    listServiceOffersByTripOfferID: () => {
        let result = graphql(ListServiceOffersByTripOfferID, {
            options: (props) => ({
                variables: { tripofferid: props.tripOfferID+"#"+props.tripOfferSORTKEY },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                serviceOffers: props.data.listServiceOffersByTripOfferID ? props.data.listServiceOffersByTripOfferID.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    // createServiceOffer: () => {
    //     return graphqlMutation( CreateServiceOffer, ListServiceOffers, 'ServiceOffer' )
    // },
    updateServiceOffer: () => {
        return graphqlMutation( UpdateServiceOffer, '', 'ServiceOffer' )
    }
}