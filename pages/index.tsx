import SEO from '../features/common/Seo'
import Hero from '../features/landing/Hero'
import Brands from '../features/landing/Brands'
import SectionOne from '../features/landing/SectionOne'
import SectionTwo from '../features/landing/SectionTwo'
import SectionThree from '../features/landing/SectionThree'
import SectionFour from '../features/landing/SectionFour'
import AboutSection from '../features/landing/AboutSection'
import Footer from '../features/common/Footer'
import CopyRight from '../features/common/CopyRight'

function Home() {

  return (
    <>
      <SEO />
      <main>
        <Hero />
        <Brands />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionOne />
        <SectionFour />
        <AboutSection />
        <Footer />
        <CopyRight />
      </main>
    </>
  )
}

export default Home
