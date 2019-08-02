export const createMessage = `mutation createMessage($createmessageinput: CreateMessageInput!) {
    createMessage(input: $createmessageinput) {
        ID
        SORTKEY
        userID
        user
        type
        message
        regIP
    }
  }`