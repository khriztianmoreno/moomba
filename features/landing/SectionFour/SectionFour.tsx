import GeneralInfo from '../../common/GeneralInfo'
import SplitLayout from '../../common/SplitLayout'
import section4Image from '../../../assets/img/section4.png'

const SectionFour = () => {
  return(
    <SplitLayout alignItems="center" rightSpot={section4Image.src} height="836px" >
      <SplitLayout.Left>
        <GeneralInfo
          title="Duis autem veleum iriure dolor in sed diam"
          description="Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad, minim veniam, quis sit. Duis autem vel - eum iriure dolor in sed diam Nonu Mmy Nibh Euismod"
          withLine
        />
      </SplitLayout.Left>
    </SplitLayout>
  )
}

export default SectionFour
