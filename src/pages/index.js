import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Home, About, Buy,Tokenomic, Faq, Contact } from '../components/lending';

const IndexPage = () => {
  return (
    <Layout>
       <Home />
       <About />
       <Buy />
       <Tokenomic />
       <Faq />
       <Contact />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage