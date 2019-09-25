import gql from 'graphql-tag'

export const createServiceOffer = gql`mutation createServiceOffer($input: CreateServiceOfferInput!) {
    createServiceOffer(input: $input) {
        ID
        SORTKEY
    }
  }`
export const updateServiceOffer = gql`mutation updateServiceOffer($input: UpdateServiceOfferInput!) {
  updateServiceOffer(input: $input) {
    ID
    SORTKEY
  }
}`