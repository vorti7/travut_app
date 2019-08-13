export const onCreateMessage = `subscription onCreateMessage{
    addedMessage{
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
  }`

//   export const onCreateMessageByChatID = `subscription onCreateMessageByChayID($repoFullName: String!){
//     commentAdded(repoFullName: $repoFullName){
//       id
//       content
//     }
//   }`