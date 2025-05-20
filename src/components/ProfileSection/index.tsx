import {
  Description,
  Info,
  Links,
  Name,
  ProfileCard,
  ProfileContainer,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

interface userDataType {
  avatar: string;
  name: string;
  bio: string;
  url: string;
  login: string;
  company: string;
  followers: number;
}

export function ProfileSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<userDataType>({
    avatar: "",
    name: "",
    bio: "",
    url: "",
    login: "",
    company: "",
    followers: 0,
  });

  async function getUser() {
    const user = "itsdavss";
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      const data = response.data;
      setUserData({
        avatar: data.avatar_url,
        name: data.name,
        bio: data.bio,
        url: data.html_url,
        login: data.login,
        company: data.company,
        followers: data.followers,
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileCard>
        {!isLoading ? (
          <>
            <div>{userData.avatar && <img src={userData.avatar} />}</div>
            <Info>
              <Name>
                <h1>{userData.name}</h1>
                <a href={userData.url} target="_blank">
                  GITHUB
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </Name>
              <Description>
                <p>{userData.bio}</p>
              </Description>
              <Links>
                <span>
                  <i className="fa-brands fa-github" /> {userData.login}
                </span>
                <span>
                  <i className="fa-solid fa-building" /> {userData.company}
                </span>
                <span>
                  <i className="fa-solid fa-user-group" /> {userData.followers}{" "}
                  seguidores
                </span>
              </Links>
            </Info>
          </>
        ) : (
          <CircularProgress />
        )}
      </ProfileCard>
    </ProfileContainer>
  );
}
