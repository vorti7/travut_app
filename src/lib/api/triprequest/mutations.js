export const createTripRequest = `mutation createTripRequest($createtriprequestinput: CreateTripRequestInput!) {
    createTripRequest(input: $createtriprequestinput) {
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
    }
  }`