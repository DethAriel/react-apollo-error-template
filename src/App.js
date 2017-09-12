import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { Foo, Bar } from './Thing';

class App extends Component {
  state = {
    bar: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ bar: true }), 3000)
  }

  render() {
    const { data: { loading, currentThing: { nonId } = {} } } = this.props;

    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
            <p>
              ThingID = <code>{nonId}</code>
            </p>
          )}
        <Foo />
        {this.state.bar ? <Bar /> : null}
      </main>
    );
  }
}

export default graphql(
  gql`{
    currentThing {
      nonId
    }
  }`,
)(App)
