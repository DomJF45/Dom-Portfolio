import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.line}></div>
        <div className={footerStyles.signature}>
          <p>© 2022 Dominick Founds</p> 
        </div>
      </div>
      

      
    </>
    

  )
}

export default Footer