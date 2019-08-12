export const createComment = `mutation createComment($createcommentinput: CreateCommentInput!) {
    createComment(input: $createcommentinput) {
        ID
        SORTKEY
        userID
        content
        likeUserIDs
        dislikeUserIDs
        regIP
        regDate
    }
  }`