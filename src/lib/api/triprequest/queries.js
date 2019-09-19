import gql from 'graphql-tag'

export const getTripRequest = gql(`query getTripRequest($gettriprequestinput: GetInput!) {
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
  }`)

export const listTripRequests = gql(`query getTripRequests {
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
}`)

export const listTripRequestsByTravelerID = gql(`query getTripRequestsByTravelerID($travelerid: String!) {
  listTripRequestsByTravelerID(travelerID: $travelerid) {
    items {
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        locationName
      }
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
}`)