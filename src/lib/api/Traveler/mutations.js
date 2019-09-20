import gql from 'graphql-tag'

export const createTraveler = gql(`mutation createTraveler($input: CreateTravelerInput!) {
    createTraveler(input: $input) {
      ID
      SORTKEY
      locationID
      email
      status
      firstName
      lastName
      nickName
      gender
      birthday
      phone
      languages
      photoURL
      regIP
    }
  }
  `);