import React, { Component } from 'react';
import Posts from './components/Post';
import PostForm from './components/PostForm';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
class App extends Component {
 
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
      </Provider>
    )
  }
}
export default App;