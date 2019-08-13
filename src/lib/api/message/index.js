import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const ListMessages = gql(Queries.listMessages);
const ListMessagesByChatID = gql(Queries.listMessagesByChatID)
const CreateMessage = gql(Mutations.createMessage);
// const DeleteMessage = gql(Mutations.deleteMessage);
// const UpdateMessage = gql(Mutations.updateMessage);
const OnCreateMessage = gql(Subscriptions.onCreateMessage);
// const onCreateMessageByChatID = gql(Subscriptions.onCreateMessageByChatID);
// const onDeleteMessage = gql(Subscriptions.onDeleteMessage);
// const onUpdateMessage = gql(Subscriptions.onUpdateMessage);

export const queries = {
    listMessages: () => {
        let result = graphql(ListMessages, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                messages: props.data.listMessages ? props.data.listMessages.items : []
            })
        })
        return result;
    },
    listMessagesByChatID: () => {
        let result = graphql(ListMessagesByChatID, {
            options: (props) => ({
                variables: { chatid: props.chatID },
                fetchPolicy: 'cache-and-network'
            }),
            props: props => ({
                messages: props.data.listMessagesByChatID ? props.data.listMessagesByChatID.items : [],
                subscribeToNewMessages: () =>{
                    props.data.subscribeToMore({
                        document: OnCreateMessage,
                        updateQuery: (prev, {subscriptionData: { data : { onCreateMessage }}}) =>{
                            let messages = prev.listMessagesByChatID.items.filter(u => u.ID !== onCreateMessage.ID)
                            messages = [
                                ...messages,
                                onCreateMessage,
                            ]
                            console.log('messages:', messages)

                            return {
                                ...prev,
                                listMessages: {
                                    ...prev.listMessagesByChatID,
                                    items: messages
                                }
                            }
                        }
                    })
                },
                data: props.data
            })
        })
        return result;
    }
}

export const mutations = {
    createMessage: () => {
        return graphqlMutation( CreateMessage, ListMessages, 'Message' )
        // return graphqlMutation( CreateMessage, ListMessagesByChatID, 'Message' )
        // return graphqlMutation( CreateMessage, [
        //     {
        //         query: ListMessagesByChatID,
        //         variables: (props) => {
        //             console.log('apis create message props ============> ', props)
        //             return { chatid: props.chatID }
        //         }
        //     }
        // ], 'Message' )
    }
}

// export const subscriptions = {
//     onCreateMessage: () => {
//         return graphql
//     }
// }