import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const GetComment = gql(Queries.getComment)
const ListComments = gql(Queries.listComments);
const ListCommentsByParentID = gql(Queries.listCommentsByParentID)
const CreateComment = gql(Mutations.createComment);
// const DeleteComment = gql(Mutations.deleteComment);
// const UpdateComment = gql(Mutations.updateComment);
// const onCreateComment = gql(Subscriptions.onCreateComment);
// const onDeleteComment = gql(Subscriptions.onDeleteComment);
// const onUpdateComment = gql(Subscriptions.onUpdateComment);

export const queries = {
    listComments: () => {
        let result = graphql(ListComments, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                comments: props.data.listComments ? props.data.listComments.items : []
            })
        })
        return result;
    },
    listCommentsByParentID: () => {
        let result = graphql(ListCommentsByParentID, {
            options: (props) => ({
                variables: { parentid: props.parentID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                comments: props.data.listCommentsByParentID ? props.data.listCommentsByParentID.items : [],
                data: props.data
            })
        })
        return result;
    }
}

export const mutations = {
    createComment: () => {
        // return graphqlMutation( CreateComment, ListCommentsByChatID, 'Comment' )
        return graphqlMutation( CreateComment, [
            {
                query: ListCommentsByParentID,
                variables: (props) => {
                    console.log('apis create message props ============> ', props)
                    return { parentid: props.parentID }
                }
            }
        ], 'Comment' )
    }
}