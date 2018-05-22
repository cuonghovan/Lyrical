import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, IndexRoute } from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const apolloClient = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HashRouter>
        <div className='container'>
          <Route exact path='/' component={SongList} />
          <Route path='/songs/new' component={SongCreate} />
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
