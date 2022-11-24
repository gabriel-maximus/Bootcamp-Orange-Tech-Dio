import React from 'react'
import Button from '../Button'
import { BuscarInputContainer, Column, Container, Input, Menu, Row, UserPicture, Wrapper } from './styles'
import Logo from '../../assets/logodio.png'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt='Logo da DIO'></img>
          <BuscarInputContainer>
            <Input placeholder='Buscar...'></Input>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <Menu href='#'>Home</Menu>
          <Button title={"Entrar"}></Button>
          <Button title={"Cadastrar"}></Button>
        </Row>
      </Container>
    </Wrapper>
  )
}
