export const createTestType = `mutation createTestType($createtesttypeinput: CreateTestTypeInput!) {
    createTestType(input: $createtesttypeinput) {
      ID
      attr1
    }
  }`