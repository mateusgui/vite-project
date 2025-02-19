import PeopleImage from '../../assets/people.svg'
import { TopBackground } from './styles'

function Background(){

    return (
        <TopBackground>
            <img src={PeopleImage} alt="imagem-usuarios" />
        </TopBackground>
    )
}

export default Background