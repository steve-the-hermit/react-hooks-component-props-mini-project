import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header blogName={name} />
      <About blogImageURL={image} aboutText={about} />
      <ArticleList articles={posts} />
    </div>
  );
}

export default App;
