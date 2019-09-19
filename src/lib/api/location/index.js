// import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'
import { useQuery, useMutation } from 'react-apollo-hooks'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetLocation = Queries.getLocation
const ListLocations = Queries.listLocations
const CreateLocation = Mutations.createLocation
// const DeleteLocation = gql(Mutations.deleteLocation);
// const UpdateLocation = gql(Mutations.updateLocation);
// const onCreateLocation = gql(Subscriptions.onCreateLocation);
// const onDeleteLocation = gql(Subscriptions.onDeleteLocation);
// const onUpdateLocation = gql(Subscriptions.onUpdateLocation);

// export const GetLocation = () => {
//     return graphql(Queries.getLocation, {
//         options: (props) => ({
//             variables: {getlocationinput:{ID: props.location.ID, SORTKEY: "location_LA0001"}},
//             fetchPolicy: 'cache-and-network'
//         }),
//         props: props => ({
//             location: props.data.getLocation ? props.data.getLocation : []
//         })
//     })
// }

export const listLocations = () => {
    return useQuery(Queries.listLocations, {
        fetchPolicy: 'cache-and-network'
    })
    // return graphql(Queries.listLocations, {
    //     options: {
    //         fetchPolicy: 'cache-and-network'
    //     },
    //     props: props => ({
    //         locations: props.data.listLocations ? props.data.listLocations.items : []
    //     })
    // })
}

export const getLocation = (locationID) => {
    return useQuery(Queries.getLocation, {
        variables: {
            getlocationinput:{ ID: locationID, SORTKEY: "location_LA0001" },
        },
        fetchPolicy: 'cache-and-network'
    })
}

export const queries = {
    getLocation: () => {
        let result = graphql(GetLocation, {
            options: (props) => ({
              variables: {getlocationinput:{ ID: props.locationID, SORTKEY: "location_LA0001" }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              location: props.data.getLocation ? props.data.getLocation :[]
            })
          }) 
          return result;
    },
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