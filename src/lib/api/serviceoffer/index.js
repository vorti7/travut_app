import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetServiceOffer = gql(Queries.getServiceOffer)
const ListServiceOffers = gql(Queries.listServiceOffers);
const ListServiceOffersByTripOfferID =gql(Queries.listServiceOffersByTripOfferID)
// const CreateServiceOffer = gql(Mutations.createServiceOffer);
// const DeleteServiceOffer = gql(Mutations.deleteServiceOffer);
const UpdateServiceOffer = gql(Mutations.updateServiceOffer);
// const onCreateServiceOffer = gql(Subscriptions.onCreateServiceOffer);
// const onDeleteServiceOffer = gql(Subscriptions.onDeleteServiceOffer);
// const onUpdateServiceOffer = gql(Subscriptions.onUpdateServiceOffer);

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