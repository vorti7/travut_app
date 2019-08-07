export const getTraveler = `query getTraveler($gettravelerinput: GetInput!) {
    getTraveler(input: $gettravelerinput) {
      ID
      SORTKEY
      locationID
      location {
        region
        locationName
        order
      }
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
      regDate
      updateIP
      updateDate
      deactivateIP
      deactivateDate
    }
  }
  `;

  export const listTravelers = `query getTravelers {
    listTravelers {
      items {
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
        regDate
        updateIP
        updateDate
        deactivateIP
        deactivateDate
      }
    }
  }
  `;