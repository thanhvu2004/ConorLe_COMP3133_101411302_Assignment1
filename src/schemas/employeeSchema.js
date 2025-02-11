const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const EmployeeType = require("./types/EmployeeType");
const resolvers = require("../resolvers");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    login: {
      type: GraphQLString,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: resolvers.Query.login,
    },
    searchEmployeeById: {
      type: EmployeeType,
      args: { eid: { type: GraphQLID } },
      resolve: resolvers.Query.searchEmployeeById,
    },
    searchEmployeeByDesignationOrDepartment: {
      type: new GraphQLList(EmployeeType),
      args: {
        designation: { type: GraphQLString },
        department: { type: GraphQLString },
      },
      resolve: resolvers.Query.searchEmployeeByDesignationOrDepartment,
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: GraphQLString,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: resolvers.Mutation.signup,
    },
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: GraphQLString },
        designation: { type: GraphQLString },
        department: { type: GraphQLString },
      },
      resolve: resolvers.Mutation.addEmployee,
    },
    updateEmployeeById: {
      type: EmployeeType,
      args: {
        eid: { type: GraphQLID },
        name: { type: GraphQLString },
        designation: { type: GraphQLString },
        department: { type: GraphQLString },
      },
      resolve: resolvers.Mutation.updateEmployeeById,
    },
    deleteEmployeeById: {
      type: EmployeeType,
      args: { eid: { type: GraphQLID } },
      resolve: resolvers.Mutation.deleteEmployeeById,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});