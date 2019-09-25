import gql from 'graphql-tag'

export const onCreateTripOffer = gql`subscription onCreateTripOffer{
    onCreateTripOffer{
      ID
      SORTKEY
      status
      chatID
      tripOfferInfo
    }
  }`