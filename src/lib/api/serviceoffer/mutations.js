export const createServiceOffer = `mutation createServiceOffer($input: CreateServiceOfferInput!) {
    createServiceOffer(input: $input) {
        
    }
  }`
export const updateServiceOffer = `mutation updateServiceOffer($input: UpdateServiceOfferInput!) {
  updateServiceOffer(input: $input) {
    ID
    SORTKEY
    chatID
  }
}`