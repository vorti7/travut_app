export const createComment = `mutation createComment($createcommentinput: CreateCommentInput!) {
    createComment(input: $createcommentinput) {
        ID
        userID
        contents
        regIP
    }
  }`