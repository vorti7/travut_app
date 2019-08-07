export const getTripOffer = `query getTripOffer($gettripofferinput: GetInput!) {
    getTripOffer(input: $gettripofferinput) {
      ID
      SORTKEY
    }
  }`
export const listTripOffers = `query getTripOffers {
  listTripOffers {
    items {
        ID
        SORTKEY
    }
  }
}`
export const listTripOffersByRequestID = `query getTripOffersByRequestID($triprequestid: String!) {
  listTripOffersByRequestID(tripRequestID: $triprequestid) {
    items {
        ID
        SORTKEY
    }
  }
}`
