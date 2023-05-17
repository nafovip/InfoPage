
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../theme/style.css";
import Header from "./lending/header-page/header";
import Footer from "./lending/footer-page/footer";

const Layout = ({ children, isMobile }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} isMobile={isMobile} />
        <main className="__main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
