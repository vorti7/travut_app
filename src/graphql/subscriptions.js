// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTraveler = `subscription OnCreateTraveler(
  $ID: String
  $SORTKEY: String
  $locationID: String
  $email: AWSEmail
  $status: String
) {
  onCreateTraveler(
    ID: $ID
    SORTKEY: $SORTKEY
    locationID: $locationID
    email: $email
    status: $status
  ) {
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
export const onUpdateTraveler = `subscription OnUpdateTraveler(
  $ID: String
  $SORTKEY: String
  $locationID: String
  $email: AWSEmail
  $status: String
) {
  onUpdateTraveler(
    ID: $ID
    SORTKEY: $SORTKEY
    locationID: $locationID
    email: $email
    status: $status
  ) {
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
export const onDeleteTraveler = `subscription OnDeleteTraveler(
  $ID: String
  $SORTKEY: String
  $locationID: String
  $email: AWSEmail
  $status: String
) {
  onDeleteTraveler(
    ID: $ID
    SORTKEY: $SORTKEY
    locationID: $locationID
    email: $email
    status: $status
  ) {
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
export const onCreateTripOffer = `subscription OnCreateTripOffer($ID: String, $SORTKEY: String) {
  onCreateTripOffer(ID: $ID, SORTKEY: $SORTKEY) {
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
