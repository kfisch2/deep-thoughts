// import gql tagged template function
// tagged template is advanced use of template literals
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;
module.exports = typeDefs;
