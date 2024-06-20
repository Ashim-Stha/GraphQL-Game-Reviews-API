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
    review(id:ID!):Review
    games:[Game]
    game(id:ID!):Game
    authors:[Author]
    author(id:ID!):Author
  }
`;

//int,float,string,boolean,ID(key for objects)

//query from apollo
/*
query gamesQuery {
reviews {
  content,
  rating
}
}

query reviewQuery($id:ID!) {
review(id:$id){
  content,
  rating
}
}
in variables section
{
  "id": "1"
}
*/
