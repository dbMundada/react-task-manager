import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './components/MainPage';

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
