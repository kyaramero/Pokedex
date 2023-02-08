import React from 'react'
import InputArea from '../InputArea'
import BasicSelect from '../Select'
import { InputContainer } from './style'

export default function ContainerRow() {
  return (
    <InputContainer>
      <InputArea />
      <BasicSelect />
    </InputContainer>
  )
}
