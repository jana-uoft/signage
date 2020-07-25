# Signage

## An attempt to develop a signage admin-client backed by a Graph database (dgraph)

## Tentative Workflow:
 - Admin:
    - Store owner visits the `admin` app and setups multiple `stores` with multiple `screens`
    - Each screen is then setup with a video or image to be displayed.
    - Each screen is also given a `width` and `height` along with its relative position (x-y coordinates) on the store display with other screens.
        - This can be used to stretch or play a continuos strip of multimedia.
 - Client:
    - Store owner visits the `client` app from a screen(browser instance) and sets the `storeID` and `screenID`.
    - The client will initialize a websocket connection with the `admin` server and get the url for the video/image to display.

## Storage
 - All media will be stored in object storage using `minIO` https://min.io/.
 - Probably create a bucket for each user.

## Database
 - Using dgraph https://dgraph.io/graphql

## GraphQL Schema (WIP)
```
type Owner {
  ownerID: String! @id
  email: String! @search(by: [regexp])
  firstName: String
  lastName: String
  stores: [Store!] @hasInverse(field: owner)
}

type Store {
  storeID: String! @id
  name: String! @search(by: [term])
  location: String! @search(by: [term]) 
  owner: Owner! @hasInverse(field: stores)
  screens: [Screen!] @hasInverse(field: displayedOn)
}

type Screen @withSubscription {
  screenID: ID!
  displayedOn: Store! @hasInverse(field: screens)
  position: Position!
}

type Position {
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}
```