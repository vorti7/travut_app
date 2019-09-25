import gql from 'graphql-tag'

export const getServiceOffer = gql`query getServiceOffer($getserviceofferinput: GetInput!) {
    getServiceOffer(input: $getserviceofferinput) {
      ID
      SORTKEY
      chatID
    }
  }`
export const listServiceOffers = gql`query getServiceOffers {
  listServiceOffers {
    items {
        ID
        SORTKEY
        chatID
    }
  }
}`
export const listServiceOffersByTripOfferID = gql`query getServiceOffersByTripOfferID($tripofferid: String!) {
  listServiceOffersByTripOfferID(tripOfferID: $tripofferid) {
    items {
        ID
        SORTKEY
        serviceOfferInfo
    }
  }
}`