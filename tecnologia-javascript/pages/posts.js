import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Componentes</title>
      </Head>
      <h1>Desenvolvimento</h1>
      <ul>
        <li>Documentação</li>
        <li>Framework de React</li>
        <li>Optimização</li>
      </ul>
      <h2>
        Considerações durante o desenvolvimento
      </h2>
      <ul>
        <li>Componentes</li>
        <li>CSS</li>
        <li>Global style</li>
        <li>Modularização</li>
      </ul>
    </Layout>
  )
}