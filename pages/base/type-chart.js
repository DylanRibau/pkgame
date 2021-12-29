import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
// import typechart from '../../public/images/typechart.png'

export default function RPEvolutionChanges() {
    return (
      <Layout>
        <Head>
          <title>Type Chart</title>
        </Head>
  
        <h1 className={utilStyles.page_title}>Type Chart</h1>
  
        <div className={utilStyles.center}>
            <Image src="/images/typechart.png" height="1000" width="1000"/>
        </div>
      </Layout>
    )
  }