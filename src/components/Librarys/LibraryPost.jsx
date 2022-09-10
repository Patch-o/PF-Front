import React from 'react'
import "./LibraryPost.scss"

const LibraryPost = ({Posts}) => {
//   console.log(Posts);
  return (
    <div>
      {Posts.length > 0 && 
        Posts.map((Post) => {
          return (
            <div key={Post.title} className='datosPost'>
              <h2>{Post.title}</h2>
              <img width="200px" src={Post.image} alt={Post.title} />
              {/* <p>{Post.date}</p> */}
              <p>{Post.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default LibraryPost