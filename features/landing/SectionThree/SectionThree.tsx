import GeneralInfo from '../../common/GeneralInfo'
import SplitLayout from '../../common/SplitLayout'
import rSpotImage from '../../../assets/img/right_Spot.png'

const SectionThree = () => {
  return(
    <SplitLayout alignItems="center" rightSpot={rSpotImage.src} height="836px">
      <SplitLayout.Left>
        <GeneralInfo
          title="Duis autem veleum iriure dolor in sed diam"
          description="Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad, minim veniam, quis sit. Duis autem vel - eum iriure dolor in sed diam Nonu Mmy Nibh Euismod"
          withLine={false}
        />
      </SplitLayout.Left>
    </SplitLayout>
  )
}

export default SectionThree
