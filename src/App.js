import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './components/MainPage';

const phoneNumber = "rgekjrng kjrgnjke";
const salary ="serger";
const stripeAcct = 12123;
const username = "asfweferg.com";

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    );
  }
}

export default App;
