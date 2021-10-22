import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './components/MainPage';

const Password = 1;
const salary = 22354534;
const CreditCardId = 23432;

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
