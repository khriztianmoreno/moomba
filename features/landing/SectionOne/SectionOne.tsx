import { GridContent } from './SectionOne.styles';
import GeneralInfo from '../../common/GeneralInfo'
import SplitLayout from '../../common/SplitLayout'
import InfoItem from '../../common/InfoItem';
import { ItemBlue, ItemOrange, ItemRed, ItemViolet } from '../../common/Icons/Items'

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
        <GridContent>
          <InfoItem
            title="Consecte elit ut"
            description="Lorem ipsum dolor sit consecte elit Ut wisi enim"
            icon={<ItemRed />}
            lineColor="#FC7586"
          />
          <InfoItem
            title="Consecte elit ut"
            description="Lorem ipsum dolor sit consecte elit Ut wisi enim"
            icon={<ItemBlue />}
            lineColor="#6ECAC9"
          />
          <InfoItem
            title="Consecte elit ut"
            description="Lorem ipsum dolor sit consecte elit Ut wisi enim"
            icon={<ItemViolet />}
            lineColor="#B888F8"
          />
          <InfoItem
            title="Consecte elit ut"
            description="Lorem ipsum dolor sit consecte elit Ut wisi enim"
            icon={<ItemOrange />}
            lineColor="#FF9655"
          />
        </GridContent>
      </SplitLayout.Right>
    </SplitLayout>
  )
}

export default SectionOne
