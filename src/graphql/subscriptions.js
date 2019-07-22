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
