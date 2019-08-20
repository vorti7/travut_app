export const getTripOffer = `query getTripOffer($gettripofferinput: GetInput!) {
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
}`
export const listTripOffers = `query getTripOffers {
  listTripOffers {
    items {
        ID
        SORTKEY
        chatID
        regDate
        status
    }
  }
}`
export const listTripOffersByRequestID = `query getTripOffersByRequestID($triprequestid: String!) {
  listTripOffersByRequestID(tripRequestID: $triprequestid) {
    items {
        ID
        SORTKEY
        chatID
        regDate
        status
    }
  }
}`
