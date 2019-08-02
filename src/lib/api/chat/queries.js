export const getChat = `query getChat($getchatinput: GetInput!) {
    getChat(input: $getchatinput) {
        ID
        SORTKEY
        name
        usersID
        regIP
        regDate
    }
  }
  `;

  export const listChats = `query getChats {
    listChats {
      items {
        ID
        SORTKEY
        name
        usersID
        regIP
        regDate
      }
    }
  }
  `;