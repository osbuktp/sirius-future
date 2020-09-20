import Head from 'next/head'
import {Layout} from '../components/Layout'
import {Aside} from '../components/Aside'
import {Menu} from '../components/Menu'
import {Schedule} from '../components/Schedule'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sirius future</title>
      </Head>
      <Layout>
        <Menu />
        <Aside />
        <Schedule />
      </Layout>
    </>
  )
}
