// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($input: GetInput!) {
  getUser(input: $input) {
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
      region
      locationName
      mapInfo
      locationInfo
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
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
      region
      locationName
      mapInfo
      locationInfo
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
export const getProvider = `query GetProvider($input: GetInput!) {
  getProvider(input: $input) {
    ID
    SORTKEY
    locationID
    location {
      ID
      SORTKEY
      region
      locationName
      mapInfo
      locationInfo
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
    type
    companyID
    companyStatus
    campanyInfo
    certInfo
    welcomeMSG
    serviceList
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
      mapInfo
      locationInfo
      order
    }
    status
    travelerIDs
    tripReqInfo
    recipientsCnt
    checkedIDs
    participantsIDs
    refusersIDs
    expTime
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const getTripOffer = `query GetTripOffer($input: GetInput!) {
  getTripOffer(input: $input) {
    ID
    SORTKEY
    locationID
    locationInfo {
      ID
      SORTKEY
      region
      locationName
      mapInfo
      locationInfo
      order
    }
    status
    title
    chatID
    contractInfo
    paymentInfo
    tripReqID
    tripReqINFO {
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
        order
      }
      status
      travelerIDs
      tripReqInfo
      recipientsCnt
      checkedIDs
      participantsIDs
      refusersIDs
      expTime
      regIP
      regDate
      updateIP
      updateDate
    }
    tripReqInfo
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
    mapInfo
    locationInfo
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
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
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
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
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
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
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
export const listTripRequests = `query ListTripRequests(
  $filter: TableTripRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTripRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
        order
      }
      status
      travelerIDs
      tripReqInfo
      recipientsCnt
      checkedIDs
      participantsIDs
      refusersIDs
      expTime
      regIP
      regDate
      updateIP
      updateDate
    }
    nextToken
  }
}
`;
export const listTripOffers = `query ListTripOffers(
  $filter: TableTripOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listTripOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      locationID
      locationInfo {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
        order
      }
      status
      title
      chatID
      contractInfo
      paymentInfo
      tripReqID
      tripReqINFO {
        ID
        SORTKEY
        locationID
        status
        travelerIDs
        tripReqInfo
        recipientsCnt
        checkedIDs
        participantsIDs
        refusersIDs
        expTime
        regIP
        regDate
        updateIP
        updateDate
      }
      tripReqInfo
      expTime
      regIP
      regDate
      updateIP
      updateDate
    }
    nextToken
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: TableLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      region
      locationName
      mapInfo
      locationInfo
      order
    }
    nextToken
  }
}
`;
export const listProviders = `query ListProviders(
  $filter: TableProviderFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
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
      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
    nextToken
  }
}
`;
export const listProvidersByLocationId = `query ListProvidersByLocationId(
  $filter: TableProviderFilterInput
  $limit: Int
  $nextToken: String
) {
  listProvidersByLocationID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      ID
      SORTKEY
      locationID
      location {
        ID
        SORTKEY
        region
        locationName
        mapInfo
        locationInfo
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
      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
    nextToken
  }
}
`;
export const listChats = `query ListChats(
  $filter: TableChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      name
      usersID
      users {
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
    nextToken
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: TableMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      userID
      user {
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
    nextToken
  }
}
`;
