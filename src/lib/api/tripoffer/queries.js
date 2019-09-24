import gql from 'graphql-tag'

export const getTripOffer = gql(`query getTripOffer($gettripofferinput: GetInput!) {
  getTripOffer(input: $gettripofferinput) {
    ID
    SORTKEY
    status
    chatID
    tripOfferInfo
    tripRequest{
      ID
      SORTKEY
      tripReqInfo
    }
  }
}`)
export const listTripOffers = gql(`query getTripOffers {
  listTripOffers {
    items {
        ID
        SORTKEY
        chatID
        regDate
        status
    }
  }
}`)
export const listTripOffersByRequestID = gql(`query getTripOffersByRequestID($triprequestid: String!) {
  listTripOffersByRequestID(tripRequestID: $triprequestid) {
    items {
        ID
        SORTKEY
        chatID
        regDate
        status
    }
  }
}`)
