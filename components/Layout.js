import Nav from '../components/Nav'
import Meta from '../components/Meta'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout