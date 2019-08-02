import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
// import { buildSubscription } from 'aws-appsync'

import * as Queries from './queries'
// import * as Subscriptions from './subscriptions'
import * as Mutations from './mutations'

const ListChats = gql(Queries.listChats);
const CreateChat = gql(Mutations.createChat);
// const DeleteChat = gql(Mutations.deleteChat);
// const UpdateChat = gql(Mutations.updateChat);
// const onCreateChat = gql(Subscriptions.onCreateChat);
// const onDeleteChat = gql(Subscriptions.onDeleteChat);
// const onUpdateChat = gql(Subscriptions.onUpdateChat);

export const queries = {
    listChats: () => {
        let result = graphql(ListChats, {
            options: {
                fetchPolicy: 'cache-and-network'
            },
            props: props => ({
                chats: props.data.listChats ? props.data.listChats.items : []
            })
        })
        return result;
    }
}

export const mutations = {
    createChat: () => {
        return graphqlMutation( CreateChat, ListChats, 'Chat' )
    }
}