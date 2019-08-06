// eslint-disable
// this is an auto generated file. This will be overwritten

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
    tripReqInfo
    expTime
    regIP
    regDate
    updateIP
    updateDate
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
    tripReqInfo
    expTime
    regIP
    regDate
    updateIP
    updateDate
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
