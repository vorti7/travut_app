export const createMessage = `mutation createMessage($createmessageinput: CreateMessageInput!) {
    createMessage(input: $createmessageinput) {
        ID
        SORTKEY
        userID
        type
        message
        regIP
    }
  }`