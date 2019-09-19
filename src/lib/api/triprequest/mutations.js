import gql from 'graphql-tag'

export const createTripRequest = gql(`mutation createTripRequest($input: CreateTripRequestInput!) {
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
}`)