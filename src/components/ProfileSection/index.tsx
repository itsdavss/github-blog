import { Description, Info, Links, Name, ProfileCard, ProfileContainer } from './styles'
import Avatar from '../../assets/avatar.png'

export function ProfileSection() {
  return (
    <ProfileContainer>
      <ProfileCard>
        <div>
          <img src={Avatar} />
        </div>
        <Info>
          <Name>
            <h1>Cameron Williamson</h1>
            <a href="#">GITHUB<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </Name>
          <Description>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </Description>
          <Links>
            <span><i className="fa-brands fa-github"></i>cameronwll</span>
            <span><i className="fa-solid fa-building"></i>Rocketseat</span>
            <span><i className="fa-solid fa-user-group"></i>32 seguidores</span>
          </Links>
        </Info>
      </ProfileCard>
    </ProfileContainer>
  );
}
