import GeneralInfo from '../../common/GeneralInfo'
import SplitLayout from '../../common/SplitLayout'

const SectionOne = () => {
  return(
    <SplitLayout>
      <SplitLayout.Left>
        <GeneralInfo
          title="Quis sit duis autem veleum iriure"
          description="Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad, minim veniam, quis sit. Duis autem vel - eum iriure dolor in sed diam Nonu Mmy Nibh Euismod"
        />
      </SplitLayout.Left>
      <SplitLayout.Right>
        <img src="https://picsum.photos/400/400" alt="section-one" />
      </SplitLayout.Right>
    </SplitLayout>
  )
}

export default SectionOne
