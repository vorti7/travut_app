export const createLocation = `mutation createLocation($createlocationinput: CreateLocationInput!) {
  createLocation(input: $createlocationinput) {
    ID
    SORTKEY
    region
    locationName
    mapInfo
    locationInfo
    order
  }
}`