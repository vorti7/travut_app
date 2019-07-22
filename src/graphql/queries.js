// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($input: GetInput!) {
  getUser(input: $input) {
    typename
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
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
    ... on Provider {
      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
  }
}
`;
export const getTraveler = `query GetTraveler($input: GetInput!) {
  getTraveler(input: $input) {
    typename
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
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
export const getTripRequest = `query GetTripRequest($input: GetInput!) {
  getTripRequest(input: $input) {
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
      region
      locationName
      order
    }
    tripReqInfo
    selectedProviders
    recipientsID
    checkedID
    participantsID
    refusersID
    expTime
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const getLocation = `query GetLocation($input: GetInput!) {
  getLocation(input: $input) {
    ID
    SORTKEY
    region
    locationName
    order
  }
}
`;
export const getChat = `query GetChat($input: GetInput!) {
  getChat(input: $input) {
    ID
    SORTKEY
    name
    usersID
    users {
      typename
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
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
      ... on Provider {
        type
        companyID
        companyStatus
        campanyInfo
        certInfo
        welcomeMSG
        serviceList
      }
    }
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const getMessage = `query GetMessage($input: GetInput!) {
  getMessage(input: $input) {
    ID
    SORTKEY
    userID
    user {
      typename
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
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
      ... on Provider {
        type
        companyID
        companyStatus
        campanyInfo
        certInfo
        welcomeMSG
        serviceList
      }
    }
    type
    message
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const listTravelers = `query ListTravelers(
  $filter: TableTravelerFilterInput
  $limit: Int
  $nextToken: String
) {
  listTravelers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      typename
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
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
    nextToken
  }
}
`;
