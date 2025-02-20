import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import { useEffect, useState } from 'react'

function ListUsers() {

    const[users,setUsers] = useState([])

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
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>

        {users.map( (user) => (
            <div>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
            </div>
        ))}

            <Button onClick={() => navigate('/')} >Voltar</Button> 
        </div>
    )
}

export default ListUsers