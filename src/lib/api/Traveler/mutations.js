export const createTraveler = `mutation createTraveler($createtravelerinput: CreateTravelerInput!) {
    createTraveler(input: $createtravelerinput) {
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