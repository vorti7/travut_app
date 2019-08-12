export const onCreateMessage = `subscription onCreateMessage{
    addedMessage{
      ID
      SORTKEY
    }
  }`

//   export const onCreateMessageByChatID = `subscription onCreateMessageByChayID($repoFullName: String!){
//     commentAdded(repoFullName: $repoFullName){
//       id
//       content
//     }
//   }`