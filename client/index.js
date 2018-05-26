import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, IndexRoute, Switch } from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const apolloClient = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HashRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={SongList} />
            <Route path='/songs/new' component={SongCreate} />
            <Route path='/songs/:id' component={SongDetail} />
          </Switch>
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
