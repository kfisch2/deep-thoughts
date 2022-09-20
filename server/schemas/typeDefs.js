// import gql tagged template function
// tagged template is advanced use of template literals
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
    friends: [User]
    friendCount: Int
  }
  type Query {
    thoughts(username: String): [Thought]
    users: [User]
    user(username: String!): User
    thought(_id: ID!): Thought
  }
`;
module.exports = typeDefs;
