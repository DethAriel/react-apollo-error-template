import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class FooImpl extends Component {
  render() {
    const { data: { loading, currentThing: { thingData: { foo } = {} } = {} } } = this.props;

    return loading
      ? <p>Loading…</p>
      : <p>thingData.foo = <code>{JSON.stringify(foo) || 'undefined'}</code></p>;
  }
}

export const Foo = graphql(
  gql`query {
    currentThing {
      thingData {
        foo
      }
    }
  }`,
)(FooImpl)

class BarImpl extends Component {
  render() {
    const { data: { loading, currentThing: { thingData: { bar } = {} } = {} } } = this.props;

    return loading
      ? <p>Loading…</p>
      : <p>thingData.bar = <code>{JSON.stringify(bar) || 'undefined'}</code></p>;
  }
}

export const Bar = graphql(
  gql`query {
    currentThing {
      thingData {
        bar
      }
    }
  }`,
)(BarImpl)