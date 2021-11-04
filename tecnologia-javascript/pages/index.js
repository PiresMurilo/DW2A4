import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Site de demonstração</p>
        <p>
          Este site foi construido como demonstração para introduzir ao framework Next.Js
          <Link href="posts"> ferramentas utilizadas para a construção</Link>.
        </p>
        <hr/>
        <p><a href="https://nextjs.org/learn/basics/create-nextjs-app">Link para referência do site</a></p>
      </section>
    </Layout>
  )
}