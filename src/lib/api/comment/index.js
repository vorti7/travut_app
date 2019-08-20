import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

// const GetComment = gql(Queries.getComment)
const ListComments = gql(Queries.listComments);
const ListCommentsByParentID = gql(Queries.listCommentsByParentID)
const CreateComment = gql(Mutations.createComment);
// const DeleteComment = gql(Mutations.deleteComment);
// const UpdateComment = gql(Mutations.updateComment);
const OnCreateComment = gql(Subscriptions.onCreateComment);
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
        let result = (graphql(ListCommentsByParentID, {
            options: (props) => ({
                variables: { parentid: props.parentID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                comments: props.data.listCommentsByParentID ? props.data.listCommentsByParentID.items : [],
            })
        }),
        graphqlMutation( CreateComment, ListCommentsByParentID, 'Comment' ))
        return result
    }
}

export const subscriptions = {
    onCreateComment: () =>{
        let result = graphql(ListCommentsByParentID, {
            options: (props) => ({
                variables: { parentid: props.parentID },
                fetchPolicy:'cache-and-network'
            }),
            props: props => ({
                comments: props.data.listCommentsByParentID ? props.data.listCommentsByParentID.items : [],
                subscribeToNewComments: params => {
                    props.data.subscribeToMore({
                        document: OnCreateComment,
                        updateQuery: (prev, { subscriptionData: {data : { onCreateComment }}}) => ({
                            ...prev,
                            listCommentsByParentID : { __typename: 'CommentConnection', items:[...prev.listCommentsByParentID.items.filter(comment => comment.SORTKEY !== onCreateComment.SORTKEY), onCreateComment]}
                        })
                    })
                }
            })
        })
        // let result = graphql(ListMessagesByChatID, {
        //     options: {
        //         fetchPolicy: 'cache-and-network'
        //     },
        //     props: props => ({
        //         subscribeToMore: props.data.subscribeToMore(buildSubscription(OnCreateMessage, ListMessagesByChatID)),
        //         messages: props.data.listMessagesByChatID ? props.data.listMessagesByChatID.items : []
        //     })
        // })
        return result
    }
}