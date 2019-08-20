export const getComment = `query getComment($getcommentinput: GetInput!) {
    getComment(input: $getcommentinput) {
        ID
        SORTKEY
    }
  }
  `;

  export const listComments = `query getComments {
    listComments {
      items {
        ID
        SORTKEY
      }
    }
  }
  `;

  export const listCommentsByParentID = `query getCommentsByParentID($parentid: String!) {
    listCommentsByParentID(parentID: $parentid) {
      items {
        ID
        SORTKEY
        userID
        contents
        regDate
      }
    }
  }`