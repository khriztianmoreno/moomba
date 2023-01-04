import Head from 'next/head'
import Image from 'next/image'


import Menu from '../features/common/Menu'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>Moomba | New Digital Platform Video</title>
        <meta name="description" content="New Digital Platform Video" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Menu />

      </main>
    </>
  )
}

export default Home
