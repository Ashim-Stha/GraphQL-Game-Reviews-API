export const typeDefs = `#graphql
  type Game{
    id:ID! # ! rep required
    title:String!
    platform:[String!]! #array
  }
  type Review{
    id:ID!
    rating:String!
    content:String!
  }
  type Author{
    id:ID!
    name:String!
    verified:Boolean!
  }
  type Query{
    reviews:[Review]
    games:[Game]
    authors:[Author]
  }
`;

//int,float,string,boolean,ID(key for objects)
