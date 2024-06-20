export const typeDefs = `#graphql
  type Game{
    id:ID! # ! rep required
    title:String!
    platform:[String!]! #array
    reviews:[Review!]
  }
  type Review{
    id:ID!
    rating:String!
    content:String!
    game:Game!
    author:Author!
  }
  type Author{
    id:ID!
    name:String!
    verified:Boolean!
    reviews:[Review!]
  }
  type Query{
    reviews:[Review]
    review(id:ID!):Review
    games:[Game]
    game(id:ID!):Game
    authors:[Author]
    author(id:ID!):Author
  }
  type Mutation{
    deleteGame(id:ID!):[Game]
    addGame(game:AddGameInput!):Game
    updateGame(id:ID!,edits:EditGameInput!):Game
  }
  input AddGameInput{
    title:String!
    platform:[String!]!
  }
  input EditGameInput{
    title:String,
    platform:[String!]
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

query Q($id:ID!){
  game(id:$id){
    title,
    reviews {
      rating,
      content
    }
  }
}

query Q($id:ID!){
  review(id:$id){
    content,
    rating
    game {
      title,
      reviews {
        rating
      }
    },
    author {
      name
    }

  }
}

---mutation
mutation del($id:ID!){
  deleteGame(id:$id){
    title,platform,id
  }
}

mutation add($game:AddGameInput!){
  addGame(game:$game){
    id,title,platform
  }
}
{
  "game": {
    "title": "Fifa",
    "platform":["Switch","PS5"]
  }
}

mutation edit($edits:EditGameInput!,$id:ID!){
  updateGame(edits:$edits,id:$id){
    title,
    id,
    platform
  }
}
{
  "edits": {
    "title":"wwe"
  },
  "id": "1"
}
*/
