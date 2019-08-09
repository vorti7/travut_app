export const createTripOffer = `mutation createTripOffer($input: CreateTripOfferInput!) {
    createTripOffer(input: $input) {
        
    }
  }`
export const updateTripOffer = `mutation updateTripOffer($input: UpdateTripOfferInput!) {
  updateTripOffer(input: $input) {
    ID
    SORTKEY
    chatID
  }
}`