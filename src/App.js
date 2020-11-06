import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure({
  Auth: {

      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1',
      identityPoolRegion: 'us-east-1',
      userPoolId: 'us-east-1_tzMlcOofk',
      userPoolWebClientId: '2mthnrhoej05c12tfdktsou4l7',
      aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
      aws_appsync_graphqlEndpoint: 'https://4yogqyuerzeefnhqhlz4owsysq.appsync-api.us-east-1.amazonaws.com/graphql',
      aws_appsync_region: 'us-east-1',
      oauth: {
          //domain: 'your_cognito_domain',
          //scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
          //redirectSignIn: 'http://localhost:3000/',
          //redirectSignOut: 'http://localhost:3000/',
          //responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
