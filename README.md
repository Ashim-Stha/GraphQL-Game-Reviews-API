
# GraphQL Game Reviews API

This project is a GraphQL API for managing game reviews. It allows users to query and mutate data related to games, authors, and reviews. The API is built using Apollo Server and GraphQL, providing a flexible and efficient way to interact with the data.

## Features

- **Games**: Manage a list of games, including their titles and platforms.
- **Authors**: Manage authors who write reviews, including their names and verification status.
- **Reviews**: Manage reviews for games, including ratings, content, and associations with games and authors.

## Project Structure

- **db.js**: Contains the mock database with games, authors, and reviews.
- **index.js**: The main entry point of the application, setting up the Apollo Server.
- **schema.js**: Defines the GraphQL schema with types, queries, and mutations.
- **package.json**: Contains the project metadata and dependencies.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd graphQL
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Server

Start the Apollo Server:
```sh
node index.js
```

The server will be running at `http://localhost:4000`.

## GraphQL Schema

### Types

- **Game**
  - id: ID!
  - title: String!
  - platform: [String!]!
  - reviews: [Review!]

- **Review**
  - id: ID!
  - rating: String!
  - content: String!
  - game: Game!
  - author: Author!

- **Author**
  - id: ID!
  - name: String!
  - verified: Boolean!
  - reviews: [Review!]

### Queries

- reviews: [Review]
- review(id: ID!): Review
- games: [Game]
- game(id: ID!): Game
- authors: [Author]
- author(id: ID!): Author

### Mutations

- deleteGame(id: ID!): [Game]
- addGame(game: AddGameInput!): Game
- updateGame(id: ID!, edits: EditGameInput!): Game

### Input Types

- **AddGameInput**
  - title: String!
  - platform: [String!]!

- **EditGameInput**
  - title: String
  - platform: [String!]

## Example Queries and Mutations

### Query Example

```graphql
query {
  games {
    id
    title
    platform
    reviews {
      rating
      content
    }
  }
}
```

### Mutation Example

```graphql
mutation {
  addGame(game: { title: "Fifa", platform: ["Switch", "PS5"] }) {
    id
    title
    platform
  }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the ISC License.
