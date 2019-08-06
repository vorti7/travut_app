export const createChat = `mutation createChat($createchatinput: CreateChatInput!) {
    createChat(input: $createchatinput) {
        ID
        name
        usersID
        regIP
    }
  }`