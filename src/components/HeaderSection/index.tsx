import Logo from '../../assets/Logo.png'
import { HeaderContainer } from './styles'

export function HeaderSection() {
  return(
    <HeaderContainer>
        <img src={Logo} alt="Logo do Github Blog" />
    </HeaderContainer>
  )
}