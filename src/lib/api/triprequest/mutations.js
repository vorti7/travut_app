export const createTripRequest = `mutation createTripRequest($input: CreateTripRequestInput!) {
  createTripRequest(input: $input) {
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