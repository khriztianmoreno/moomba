import GeneralInfo from '../../common/GeneralInfo'
import SplitLayout from '../../common/SplitLayout'
import section2Image from '../../../assets/img/section2.png'
import { SectionTwoContainer } from './SectionTwo.styles'

const SectionTwo = () => {
  return(
    <SplitLayout
      alignItems="center"
      justify="flex-end"
      leftSpot={section2Image.src}
      height="1094px"
    >
      <SectionTwoContainer>
        <SplitLayout.Right>
          <GeneralInfo
            title="Duis autem veleum iriure dolor in sed diam"
            description="Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad, minim veniam, quis sit. Duis autem vel - eum iriure dolor in sed diam Nonu Mmy Nibh Euismod"
            withLine={false}
          />
        </SplitLayout.Right>
      </SectionTwoContainer>
    </SplitLayout>
  )
}

export default SectionTwo
