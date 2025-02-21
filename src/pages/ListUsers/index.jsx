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

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    //Hook com uma função que carrega todos os usuários assim que a página é chamada
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        //Alteração de estado local para atualizar a lista de usuários assim que for deletado
        const updatedUsers = users.filter( user => user.id !== id)
        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Lista de usuários</Title>
            <Button type="button" onClick={() => navigate('/')} >Voltar</Button>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')} >Voltar</Button>
        </Container>
    )
}

export default ListUsers