import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'us-east-1:c470cd15-1c60-4dd9-9cbb-9404a22b2a15',
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1',
      identityPoolRegion: 'us-east-1',
      userPoolId: 'us-east-1_gW0emGvaU',
      userPoolWebClientId: '3mh4o9mno1ml28l0faal77qv55',
      mandatorySignIn: false,
      storage: MyStorage,
      aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
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
