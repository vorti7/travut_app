// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTestType = `mutation CreateTestType($input: CreateTestTypeInput!) {
  createTestType(input: $input) {
    ID
    SORTKEY
    attr1
  }
}
`;
export const updateTestType = `mutation UpdateTestType($input: UpdateTestTypeInput!) {
  updateTestType(input: $input) {
    ID
    SORTKEY
    attr1
  }
}
`;
export const createTraveler = `mutation CreateTraveler($input: CreateTravelerInput!) {
  createTraveler(input: $input) {
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
export const createTripRequest = `mutation CreateTripRequest($input: CreateTripRequestInput!) {
  createTripRequest(input: $input) {
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
export const createTripOffer = `mutation CreateTripOffer($input: CreateTripOfferInput!) {
  createTripOffer(input: $input) {
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
export const createServiceOffer = `mutation CreateServiceOffer($input: CreateServiceOfferInput!) {
  createServiceOffer(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const createChat = `mutation CreateChat($input: CreateChatInput!) {
  createChat(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    ID
    SORTKEY
    userID
    contents
    likeUserIDs
    dislikeUserIDs
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const updateTraveler = `mutation UpdateTraveler($input: UpdateTravelerInput!) {
  updateTraveler(input: $input) {
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
export const updateTripRequest = `mutation UpdateTripRequest($input: UpdateTripRequestInput!) {
  updateTripRequest(input: $input) {
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
export const updateTripOffer = `mutation UpdateTripOffer($input: UpdateTripOfferInput!) {
  updateTripOffer(input: $input) {
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
export const updateServiceOffer = `mutation UpdateServiceOffer($input: UpdateServiceOfferInput!) {
  updateServiceOffer(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const updateChat = `mutation UpdateChat($input: UpdateChatInput!) {
  updateChat(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    ID
    SORTKEY
    userID
    contents
    likeUserIDs
    dislikeUserIDs
    regIP
    regDate
    updateIP
    updateDate
  }
}
`;
export const deleteTraveler = `mutation DeleteTraveler($input: DeleteTravelerInput!) {
  deleteTraveler(input: $input) {
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
