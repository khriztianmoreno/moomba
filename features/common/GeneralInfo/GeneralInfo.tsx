import { FC } from 'react';
import {
  CallToAction,
  Description,
  Line,
  Title,
} from './GeneralInfo.styles';

type GeneralInfoProps = {
  title: string
  description: string
  onHandleClick?: () => void
  withLine?: boolean
}

const GeneralInfo: FC<GeneralInfoProps> = ({
  title,
  description,
  onHandleClick,
  withLine = true,
}) => {
  return (
    <>
      {withLine ? <Line /> : null}
      <Title>{title}</Title>
      <Description>{description}</Description>
      {onHandleClick ? <CallToAction onClick={onHandleClick}>Learn more</CallToAction> : null}
    </>
  )
}

export default GeneralInfo
