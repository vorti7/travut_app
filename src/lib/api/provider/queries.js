export const getProvider = `query getProvider($getproviderinput: GetInput!) {
  getProvider(input: $getproviderinput) {
    ID
    SORTKEY
    locationID
    location
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
}`
export const listProviders = `query getProviders {
  listProviders {
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

      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
  }
}`