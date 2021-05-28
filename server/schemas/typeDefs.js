//import the gql tagged template function
const {gql} = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Category {
    id: ID,
    name: String
}

type Product {
    id: ID,
    name: String,
    description: String,
    image: String,
    quantity: int,
    price: Float,
    category: Category
}

type User {
    id: ID,
    firstname: String,
    lastname: String,
    email: String,
    orders: [orders] 
}

type Auth {
    token: ID,
    user: User
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

// export the typeDefs 
module.exports = typeDefs