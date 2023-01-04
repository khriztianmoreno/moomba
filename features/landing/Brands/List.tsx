import { PageContainer } from '../../common/Theme/styles'

import { BrandContainer } from './Brands.styles'
import MicrosoftLogo from './Microsoft'
import PaypalLogo from './Paypal'
import NetflixLogo from './Netflix'
import TinderLogo from './Tinder'
import VisaLogo from './VisaCard'

const BrandsList = () => {
  return (
    <PageContainer>
      <BrandContainer>
        <MicrosoftLogo />
        <PaypalLogo />
        <NetflixLogo />
        <TinderLogo />
        <VisaLogo />
      </BrandContainer>
    </PageContainer>
  )
}

export default BrandsList
