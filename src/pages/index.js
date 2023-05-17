import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Home, About, Buy,Tokenomic, Faq, Contact } from '../components/lending';

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);

	const handleResize = debounce(() => {
    setIsMobile(window.innerWidth < 820);
  }, 300);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);
  return (
    <Layout isMobile={isMobile}>
       <Home isMobile={isMobile} />
       <About isMobile={isMobile} />
       <Buy isMobile={isMobile} />
       <Tokenomic isMobile={isMobile} />
       <Faq />
       <Contact isMobile={isMobile} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage