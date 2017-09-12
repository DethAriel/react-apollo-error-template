import { makeExecutableSchema } from 'graphql-tools';

export const typeDefs = `
  type Query {
    currentThing: Thing!
  }

  type Thing {
    id: String!
    thingData: ThingData!
  }

  type ThingData {
    foo: String!
    bar: String!
  }
`;

const resolvers = {
  Query: {
    currentThing: () => ({ id: 'dummy-id' }),
  },
  Thing: {
    thingData: (thing) => {
      return {
        foo: `thing_foo-${thing.id}`,
        bar: `thing_bar-${thing.id}`,
      };
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
