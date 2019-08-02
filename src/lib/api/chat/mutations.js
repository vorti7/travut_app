export const createChat = `mutation createChat($createchatinput: CreateChatInput!) {
    createChat(input: $createchatinput) {
        ID
        SORTKEY
        name
        usersID
        regIP
    }
  }`