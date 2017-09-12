import { makeExecutableSchema } from 'graphql-tools';

export const typeDefs = `
  type Query {
    currentThing: Thing!
  }

  type Thing {
    nonId: String!
    thingData: ThingData!
  }

  type ThingData {
    foo: String!
    bar: String!
  }
`;

const resolvers = {
  Query: {
    currentThing: () => ({ nonId: 'dummy-id' }),
  },
  Thing: {
    thingData: (thing) => {
      return {
        foo: `thing_foo-${thing.nonId}`,
        bar: `thing_bar-${thing.nonId}`,
      };
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
