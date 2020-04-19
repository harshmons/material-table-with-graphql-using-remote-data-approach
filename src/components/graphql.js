import ApolloClient,{gql} from "apollo-boost";

export const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export const getUsersList = gql`
query usersList($offset:Int!,$limit:Int!,$username:String){
  usersList(offset:$offset,limit:$limit,username:$username){
    id
      name
      username
      address{
        street
        suite
        city
        zipcode
      }
      website
      phone
      company{
        name
        catchPhrase
        bs
      }
      email
  } 
} 
`
