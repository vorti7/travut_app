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
      badgeUrl
      providerCount
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
      experience
      reviews
      rating
      locationIDs
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
      badgeUrl
      providerCount
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
      badgeUrl
      providerCount
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
    experience
    reviews
    rating
    locationIDs
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
      badgeUrl
      providerCount
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
      badgeUrl
      providerCount
    }
    status
    title
    chatID
    tripOfferInfo
    contractInfo
    paymentInfo
    tripReqID
    tripRequest {
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
        badgeUrl
        providerCount
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
    expTime
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const getServiceOffer = `query GetServiceOffer($input: GetInput!) {
  getServiceOffer(input: $input) {
    ID
    SORTKEY
    bookingInfo
    serviceOfferInfo
    comments
    info
    locationID
    svcCategoryID
    tripOfferID
    type
    expTime
    regDate
    regIP
    updateDate
    updateIP
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
    badgeUrl
    providerCount
  }
}
`;
export const getChat = `query GetChat($input: GetInput!) {
  getChat(input: $input) {
    ID
    SORTKEY
    name
    usersID
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
    type
    message
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const getComment = `query GetComment($input: GetInput!) {
  getComment(input: $input) {
    ID
    SORTKEY
    userID
    content
    likeUserIDs
    dislikeUserIDs
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
        badgeUrl
        providerCount
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
        badgeUrl
        providerCount
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
export const listTripRequestsByTravelerId = `query ListTripRequestsByTravelerId(
  $filter: TableTripRequestFilterInput
  $limit: Int
  $nextToken: String
  $travelerID: String!
) {
  listTripRequestsByTravelerID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    travelerID: $travelerID
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
        badgeUrl
        providerCount
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
        badgeUrl
        providerCount
      }
      status
      title
      chatID
      tripOfferInfo
      contractInfo
      paymentInfo
      tripReqID
      tripRequest {
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
export const listTripOffersByRequestId = `query ListTripOffersByRequestId(
  $filter: TableTripOfferFilterInput
  $limit: Int
  $nextToken: String
  $tripRequestID: String!
) {
  listTripOffersByRequestID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    tripRequestID: $tripRequestID
  ) {
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
        badgeUrl
        providerCount
      }
      status
      title
      chatID
      tripOfferInfo
      contractInfo
      paymentInfo
      tripReqID
      tripRequest {
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
export const listServiceOffers = `query ListServiceOffers(
  $filter: TableServiceOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      bookingInfo
      serviceOfferInfo
      comments
      info
      locationID
      svcCategoryID
      tripOfferID
      type
      expTime
      regDate
      regIP
      updateDate
      updateIP
    }
    nextToken
  }
}
`;
export const listServiceOffersByTripOfferId = `query ListServiceOffersByTripOfferId(
  $filter: TableServiceOfferFilterInput
  $limit: Int
  $nextToken: String
  $tripOfferID: String!
) {
  listServiceOffersByTripOfferID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    tripOfferID: $tripOfferID
  ) {
    items {
      ID
      SORTKEY
      bookingInfo
      serviceOfferInfo
      comments
      info
      locationID
      svcCategoryID
      tripOfferID
      type
      expTime
      regDate
      regIP
      updateDate
      updateIP
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
      badgeUrl
      providerCount
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
        badgeUrl
        providerCount
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
      experience
      reviews
      rating
      locationIDs
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
  $locationID: String!
) {
  listProvidersByLocationID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    locationID: $locationID
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
        badgeUrl
        providerCount
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
      experience
      reviews
      rating
      locationIDs
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
export const listMessagesByChatId = `query ListMessagesByChatId(
  $filter: TableMessageFilterInput
  $limit: Int
  $nextToken: String
  $chatID: String!
) {
  listMessagesByChatID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    chatID: $chatID
  ) {
    items {
      ID
      SORTKEY
      userID
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
export const listComments = `query ListComments(
  $filter: TableCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      ID
      SORTKEY
      userID
      content
      likeUserIDs
      dislikeUserIDs
      regIP
      regDate
      updateIP
      updateDate
    }
    nextToken
  }
}
`;
export const listCommentsByParentId = `query ListCommentsByParentId(
  $filter: TableCommentFilterInput
  $limit: Int
  $nextToken: String
  $parentID: String!
) {
  listCommentsByParentID(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    parentID: $parentID
  ) {
    items {
      ID
      SORTKEY
      userID
      content
      likeUserIDs
      dislikeUserIDs
      regIP
      regDate
      updateIP
      updateDate
    }
    nextToken
  }
}
`;
