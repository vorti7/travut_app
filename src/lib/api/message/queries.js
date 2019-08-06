export const getMessage = `query getMessage($getmessageinput: GetInput!) {
    getMessage(input: $getmessageinput) {
        ID
        SORTKEY
        userID
        type
        message
        regIP
        regDate
        updateIP
        updateDate
    }
  }
  `;

  export const listMessages = `query getMessages {
    listMessages {
      items {
        ID
        SORTKEY
        userID
        type
        message
        regIP
        regDate
        updateIP
        updateDate
      }
    }
  }
  `;

  export const listMessagesByChatID = `query getMessagesByChatID($chatid: String!) {
    listMessagesByChatID(chatID: $chatid) {
      items {
        ID
        SORTKEY
        userID
        type
        message
        regIP
        regDate
        updateIP
        updateDate
      }
    }
  }`