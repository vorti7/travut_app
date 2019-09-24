import gql from 'graphql-tag'

export const createTripOffer = gql(`mutation createTripOffer($input: CreateTripOfferInput!) {
    createTripOffer(input: $input) {
      ID
      SORTKEY
      locationID
      status
      title
      tripOfferInfo
      contractInfo
      paymentInfo
      tripReqID
    }
  }`)
export const updateTripOffer = gql(`mutation updateTripOffer($input: UpdateTripOfferInput!) {
  updateTripOffer(input: $input) {
    ID
    SORTKEY
    chatID
    status
  }
}`)