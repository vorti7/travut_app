export const createTraveler = `mutation createTraveler($input: CreateTravelerInput!) {
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
  `;