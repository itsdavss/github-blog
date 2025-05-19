import { Info, Name, ProfileCard, ProfileContainer } from './styles'
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
            <a href="#">GITHUB</a>
          </Name>
          <div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>
          <div>
            <span>cameronwll</span>
            <span>Rocketseat</span>
            <span>32 seguidores</span>
          </div>
        </Info>
      </ProfileCard>
    </ProfileContainer>
  );
}
