import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'
import { useQuery, useMutation } from 'react-apollo-hooks'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetTraveler = Queries.getTraveler
const ListTravelers = Queries.listTravelers;
const CreateTraveler = Mutations.createTraveler;
// const DeleteTraveler = gql(Mutations.deleteTraveler);
// const UpdateTraveler = gql(Mutations.updateTraveler);
// const onCreateTraveler = gql(Subscriptions.onCreateTraveler);
// const onDeleteTraveler = gql(Subscriptions.onDeleteTraveler);
// const onUpdateTraveler = gql(Subscriptions.onUpdateTraveler);

export const getTraveler = (userID, userSORTKEY) => {
    return useQuery(Queries.getTraveler, {
        variables: {
            gettravelerinput:{ ID: userID, SORTKEY: userSORTKEY }
        },
        fetchPolicy: 'cache-and-network'
    })
}

export const listTravelers = () => {
    return useQuery(Queries.listTravelers, {
        fetchPolicy: 'cache-and-network'
    })
}

export const createTraveler = (inputData) => {
    // return useMutation(Mutations.createTraveler, {
    //     variables: { input : inputData }
    // })
    // const [createTraveler, {data, loading, error}] = useMutation(Mutations.createTraveler)
    // return useMutation(Mutations.createTraveler)
}

export const queries = {
    getTraveler: () => {
        let result = graphql(GetTraveler, {
            options: (props) => ({
              variables: {gettravelerinput:{ ID: props.userID, SORTKEY: props.userSORTKEY }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              traveler: props.data.getTraveler ? props.data.getTraveler :[],
              data:props.data
            })
          }) 
          return result;
    },
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