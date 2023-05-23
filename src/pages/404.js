import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="error-page">
      <div className="error-page__container _container"
      ><div className="error-page__description">
          <h1 className="header">404: Not Found</h1>
          <p className="desc">You just hit a route that doesn't exist... the sadness.</p>
        </div>
        <div className="error-page__smiley">
          <p className="text">:(</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
