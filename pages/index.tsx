import Head from 'next/head'

import Hero from '../features/landing/Hero'
import Brands from '../features/landing/Brands'
import SectionOne from '../features/landing/SectionOne'
import SectionThree from '../features/landing/SectionThree'

function Home() {
  return (
    <>
      <Head>
        <title>Moomba | New Digital Platform Video</title>
        <meta name="description" content="New Digital Platform Video" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Brands />
        <SectionOne />
        <SectionThree />
        <SectionOne />
      </main>
    </>
  )
}

export default Home
