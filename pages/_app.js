import {Layout} from "common";
import wrapper  from '../redux/store'
import { PropTypes } from "prop-types"
import Head from "next/head"

const MyApp= ({ Component, pageProps }) => {
  return (<>
  <Head>
  <meta charset="utf-8"/>    
  <meta name="viewport"
   content="width=device-width, user-scalable=no, 
   initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
   <title>Soccer App</title>
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  )
  App.propTypes = {
    component:PropTypes.elementType.isRequired,
    pageProps:PropTypes.any.isRequired
  
  }
}



export default wrapper.withRedux(MyApp) 
