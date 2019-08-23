import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetTestType = gql(Queries.getTestType)
const ListTestTypes = gql(Queries.listTestTypes);
const CreateTestType = gql(Mutations.createTestType);
// const DeleteTestType = gql(Mutations.deleteTestType);
// const UpdateTestType = gql(Mutations.updateTestType);
// const onCreateTestType = gql(Subscriptions.onCreateTestType);
// const onDeleteTestType = gql(Subscriptions.onDeleteTestType);
// const onUpdateTestType = gql(Subscriptions.onUpdateTestType);

export const queries = {
    getTestType: () => {
        let result = graphql(GetTestType, {
            options: (props) => ({
              variables: {gettesttypeinput:{ ID: props.testTypeID, SORTKEY: '' }},
              fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
              testType: props.data.getTestType ? props.data.getTestType :[]
            })
          }) 
          return result;
    },
    listTestTypes: () => {
        let result = graphql(ListTestTypes, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                testTypes: props.data.listTestTypes ? props.data.listTestTypes.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    createTestType: () => {
        return graphqlMutation( CreateTestType, ListTestTypes, 'TestType' )

        // let result = (graphql(ListTestTypes, {
        //     options: {
        //         fetchPolicy: 'cache-and-network'
        //     },
        //     props: props => ({
        //         testTypes: props.data.listTestTypes ? props.data.listTestTypes.items :[]
        //     })
        // }),
        // graphqlMutation( CreateTestType, ListTestTypes, 'TestType' ))


        // let result = (
        //     graphql(ListTestTypes, {
        //         options: {
        //           fetchPolicy: 'cache-and-network'
        //         },
        //         props: props => ({
        //           testTypes: props.data.listTestTypes ? props.data.listTestTypes.items : []
        //         })
        //       }),
        //       graphql(CreateTestType, {
        //         options: {
        //           update: (dataProxy, { data: { createTestType } }) => {
        //             const query = ListTestTypes
        //             const data = dataProxy.readQuery({ query })
        //             data.listTestTypes.items.push(createTestType)
        //             dataProxy.writeQuery({ query, data })
        //           }
        //         },
        //         props: (props) => ({
        //           onAdd: (testType) => {
        //             props.mutate({
        //               variables: testType,
        //               optimisticResponse: () => ({
        //                 createPost: { ...testType, __typename: 'TestType' }
        //               }),
        //             })
        //           }
        //         }),
        //       })
        // )

        // return result
    }
}