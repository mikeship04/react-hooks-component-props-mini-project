import React from "react";
import blogData from "../data/blog";
import About from "./About"
import Header from "./Header"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About about = {blogData.about} image = {blogData.image}/>
      <ArticleList posts = {blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;

// default img"https://via.placeholder.com/215 (Links to an external site.)"
// default date"January 1, 1970" 

// about creates an <aside> with img, defaulkt img, alt img, p tag of about.prop
// article list creates a <main> with array of article components passed down to article list, give each article a key
// article is a child component of article list creates an <article> h3 with title, small with date and default, and a p with preview