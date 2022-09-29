import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/Footer'
import GoBack from '../../components/GoBack'
import postStyles from '../../styles/Post.module.css'

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
  return (
    <>
      <Nav currentDirectory={'Blog'} />
      <div className={postStyles.content}>
        <p className={postStyles.date}>{date}</p>
        <h3 className={postStyles.title}>{title}</h3>
        <div className={postStyles.body}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <GoBack prevDirectory={'blog'} />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))


  return {
    paths,
    fallback: false // if you try to access path that doesnt exist, it will give 404 not found
  }
}

export async function getStaticProps({params: {slug}}) {

  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

  const {data: frontmatter, content} = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}