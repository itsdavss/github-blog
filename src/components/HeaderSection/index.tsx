import Logo from '../../assets/Logo.png'
import { HeaderContainer } from './styles'

export function HeaderSection() {
  return(
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo do Github Blog" />
      </div>
    </HeaderContainer>
  )
}