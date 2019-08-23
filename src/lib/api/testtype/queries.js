export const getTestType = `query getTestType($gettesttypeinput: GetInput!) {
    getTestType(input: $gettesttypeinput) {
      ID
      SORTKEY
      attr1
    }
  }`
  export const listTestTypes = `query getTestTypes {
    listTestTypes {
      items {
          ID
          SORTKEY
          attr1
      }
    }
  }`