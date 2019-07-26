export const getTripRequest = `query getTripRequest($gettriprequestinput: GetInput!) {
    getTripRequest(input: $gettriprequestinput) {
      ID
      SORTKEY
      locationID
      status
      travelerIDs
      tripReqInfo
      recipientsCnt
      checkedIDs
      participantsIDs
      refusersIDs
      expTime
      regIP
      regDate
      updateIP
      updateDate
    }
  }`
export const listTripRequests = `query getTripRequests {
  listTripRequests {
    items {
      ID
      SORTKEY
      locationID
      status
      travelerIDs
      recipientsCnt
      checkedIDs
      participantsIDs
      refusersIDs
      expTime
      regIP
      regDate
      updateIP
      updateDate
    }
  }
}`