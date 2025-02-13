import { Container, TopBackground, Form, ContainerInputs, Input, InputLabel, Button, Title } from './styles'

function Home() {
  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário'/>
            </div>
            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type='number' placeholder='Idade do usuário'/>
            </div>
          </div>
          <div>
            <InputLabel>Email<span>*</span></InputLabel>
            <Input type='email' placeholder='Email do usuário'/>
          </div>
        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
