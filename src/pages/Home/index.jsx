import { useRef } from 'react'
import api from '../../services/api.js'

import {
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  Title
} from './styles'

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>
        <div style={{width: '100%'}}>
          <InputLabel>Nome<span> *</span></InputLabel>
          <Input type='text' placeholder='Nome do usuário' ref={inputName} />
        </div>
        <ContainerInputs>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>
          <div>
            <InputLabel>Email<span> *</span></InputLabel>
            <Input type='email' placeholder='Email do usuário' ref={inputEmail} />
          </div>
        </ContainerInputs>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </ Form>
    </Container>
  )
}

export default Home
