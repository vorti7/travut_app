import gql from 'graphql-tag'

export const getProvider = gql(`query getProvider($getproviderinput: GetInput!) {
  getProvider(input: $getproviderinput) {
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
    
    experience
    reviews
    rating
    
    type
    companyID
    companyStatus
    campanyInfo
    certInfo
    welcomeMSG
    serviceList
  }
}`)
export const getProviderByScan = gql(`query getProviderByScan($providerid: String!) {
  getProviderByScan(providerID: $providerid) {
    items{
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
      
      experience
      reviews
      rating
      
      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
  }
}`)
export const listProviders = gql(`query getProviders {
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
      
      experience
      reviews
      rating

      type
      companyID
      companyStatus
      campanyInfo
      certInfo
      welcomeMSG
      serviceList
    }
  }
}`)

export const listProvidersByLocationID = gql(`query getProvidersByLocationID($locationid: String!) {
  listProvidersByLocationID(locationID: $locationid) {
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
}`)