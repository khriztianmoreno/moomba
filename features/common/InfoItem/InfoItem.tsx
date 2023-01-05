import { FC } from 'react';

import {
  Description,
  IconContainer,
  Line,
  Title,
} from './InfoItem.styles'

type InfoItemProps = {
  description: string
  icon: JSX.Element
  lineColor?: string
  title: string
}

const InfoItem: FC<InfoItemProps> = ({
  description,
  icon,
  lineColor = '#000',
  title,
}) => {
  return (
    <div>
      <IconContainer>
        {icon}
      </IconContainer>
      <Title>{title}</Title>
      <Line lineColor={lineColor} />
      <Description>{description}</Description>
    </div>
  )
}

export default InfoItem
