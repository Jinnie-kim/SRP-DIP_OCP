import React from 'react';
import ReactDOM from 'react-dom/client';
import { LocalTokenRepository } from './repository/localTokenRepository';
import { HttpClient } from './httpClient/httpClient';
import { AuthService } from './service/AuthService';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

// index.js
// bootstraping

// make tokenRepository
// make httpClient
// make authService

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient('https://www.pre-onboarding-selection-task.shop/', localTokenRepository);
const authServie = new AuthService(httpClient, localTokenRepository);

root.render(
  <AuthProvider authService={authServie}>
    <App />
  </AuthProvider>
);
