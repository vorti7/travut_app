export const getMessage = `query getMessage($getmessageinput: GetInput!) {
    getMessage(input: $getmessageinput) {
        ID
        SORTKEY
        userID
        user
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
        user
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