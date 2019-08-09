export const getServiceOffer = `query getServiceOffer($getserviceofferinput: GetInput!) {
    getServiceOffer(input: $getserviceofferinput) {
      ID
      SORTKEY
      chatID
    }
  }`
export const listServiceOffers = `query getServiceOffers {
  listServiceOffers {
    items {
        ID
        SORTKEY
        chatID
    }
  }
}`
export const listServiceOffersByTripOfferID = `query getServiceOffersByTripOfferID($tripofferid: String!) {
  listServiceOffersByTripOfferID(tripOfferID: $tripofferid) {
    items {
        ID
        SORTKEY
    }
  }
}`
