import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Post from '../components/blog/Post'
import Nav from '../components/nav/Nav'
import Footer from '../components/Footer'
import GoBack from '../components/GoBack'
import blogStyles from '../styles/Blog.module.css'

const blog = ({posts}) => {

  const currentDirectory = 'Blog'

  return (
    <>
      <Nav currentDirectory={currentDirectory}/>
      <p className={blogStyles.flavorText}>Notes on my web development journey.</p>
      <div className={blogStyles.contentContainer}>
        {posts.map((post, index) => (
          <Post key={index}post={post} />
        ))}
      </div>
      <GoBack prevDirectory={''} />
      <Footer />
    </>
  )
}

export default blog

export async function getStaticProps() {
  // get files from post directory
  const files = fs.readdirSync(path.join('posts'))

  // get slug and frontmatter from posts
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })
  
  return {
    props: {
      posts: posts
    }
  }
}