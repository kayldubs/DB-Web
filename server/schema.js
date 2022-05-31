const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require("graphql");

//Hardcoded Data

const clients = [
    {id: '1', name: 'John Doe', email:'jdoe@gmail.com', job:'Doctor', organization:'Doctors Office'},
    {id: '2', name: 'Jane Doe', email:'janedoe@gmail.com', job:'Nurse', organization:'Hospital'},
    {id: '3', name: 'James Doe', email:'jamesdoe@gmail.com', job:'Nurse', organization:'School Nurse'},
]

//Client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        email: { type: GraphQLString},
        job: { type: GraphQLString},
        organization: { type: GraphQLString},
    })
 });

 // Root Query
 const RootQuery = new GraphQLObjectType({
     name: 'RootQueryType',
     fields: {
         clients: {
            type: ClientType,
            args: {
                id: {type: GraphQLString} 
            },
            resolve(parentValue, args){
                for(let i = 0; i < clients.length; i++){
                    if(clients[i].id === args.id){
                        return customers[i];
                    }
                }
            }
         }
     }
 })

 module.exports = new GraphQLSchema({
     query: RootQuery
 });