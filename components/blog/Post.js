import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Footer'
import blogStyles from '../../styles/Blog.module.css'


const Post = ({post}) => {
  return (
    <>
      <div className={blogStyles.card}>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <img src={post.frontmatter.cover_image}  width='100%' className={blogStyles.cardImg} alt='' />
          <div className={blogStyles.container}>
            <h4 className={blogStyles.cardTitle}>{post.frontmatter.title}</h4>
            <p className={blogStyles.cardBio}>{post.frontmatter.date}</p>
          </div>
          
          </a>
        </Link>
      </div>
    </>
  )
}

export default Post