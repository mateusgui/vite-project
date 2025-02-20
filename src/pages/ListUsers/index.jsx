import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'

import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import { useEffect, useState } from 'react'

import {
    Container,
    Title,
    ContainerUsers,
    CardUsers,
    TrashIcon,
    AvatarUser
} from './styles'

function ListUsers() {

    const [users, setUsers] = useState([])

    //Hook com uma função que carrega todos os usuários assim que a página é chamada
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()

    return (
        <Container>
            <TopBackground />
            <Title>Lista de usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo'/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')} >Voltar</Button>
        </Container>
    )
}

export default ListUsers