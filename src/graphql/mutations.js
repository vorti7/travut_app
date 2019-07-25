// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTraveler = `mutation CreateTraveler($input: CreateTravelerInput!) {
  createTraveler(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    ID
    SORTKEY
    region
    locationName
    order
  }
}
`;
export const createChat = `mutation CreateChat($input: CreateChatInput!) {
  createChat(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateTraveler = `mutation UpdateTraveler($input: UpdateTravelerInput!) {
  updateTraveler(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    ID
    SORTKEY
    region
    locationName
    order
  }
}
`;
export const updateChat = `mutation UpdateChat($input: UpdateChatInput!) {
  updateChat(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteTraveler = `mutation DeleteTraveler($input: DeleteTravelerInput!) {
  deleteTraveler(input: $input) {
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
