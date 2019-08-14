export const createTripOffer = `mutation createTripOffer($input: CreateTripOfferInput!) {
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
  }`
export const updateTripOffer = `mutation updateTripOffer($input: UpdateTripOfferInput!) {
  updateTripOffer(input: $input) {
    ID
    SORTKEY
    chatID
    status
  }
}`