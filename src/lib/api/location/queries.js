export const getLocation = `query getLocation($getlocationinput: GetInput!) {
  getLocation(input: $getlocationinput) {
    ID
    SORTKEY
    region
    locationName
    locationInfo
    mapInfo
    order
  }
}`
export const listLocations = `query getLocations {
  listLocations {
    items {
      ID
      SORTKEY
      region
      locationName
      locationInfo
      mapInfo
      order
    }
  }
}`