import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { server } from '../config/config'

export default function Home({props: posts}) {
  return (
    <>
      <Header />
      
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = JSON.stringify(res);
  return {
    props: {
      posts
    }
  }
}