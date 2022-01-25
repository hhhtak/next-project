import React from 'react'
import { StyledWrapper } from '@components/molecules/ProfileCard/styled'
import { User } from '@interface/user'

export type Props = {
  user: User
}

export const ProfileCard: React.FC<Props> = (props: Props) => {
  const { user } = props
  const { id, name, age, address, postCode } = user
  return (
    <StyledWrapper>
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address}</p>
      <p>{postCode}</p>
    </StyledWrapper>
  )
}
