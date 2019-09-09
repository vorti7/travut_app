import gql from 'graphql-tag'

export const getLocation = gql(`query getLocation($getlocationinput: GetInput!) {
  getLocation(input: $getlocationinput) {
    	ID
      SORTKEY
      region
      locationName
      locationInfo
      mapInfo
      order
      badgeUrl
      providerCount
  }
}`)
export const listLocations = gql(`query getLocations {
  listLocations {
    items {
      ID
      SORTKEY
      region
      locationName
      locationInfo
      mapInfo
      order
      badgeUrl
      providerCount
    }
  }
}`)