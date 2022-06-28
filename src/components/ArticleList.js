import React from 'react'
import Article from './Article'

function ArticleList({posts}) {

    const articles = posts.map(post => {
        return <Article key={post.id} date={post.date} minutes={post.minutes} preview={post.preview} title={post.title}/>
    })

  return (
    <main>
        {articles}
    </main>
  )
}

export default ArticleList